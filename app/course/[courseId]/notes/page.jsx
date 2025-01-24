"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function ViewNotes() {

  const [notes, setNotes]=useState();
  const {courseId}=useParams();
  const [stepCount, setStepCount]=useState(0);

  useEffect(() => {
    GetNotes();
  },[])

  const GetNotes=async()=> {
    const result=await axios.post('/api/study-type', {
        courseId:courseId,
        studyType:'notes',
    });
    console.log(result?.data);
    setNotes(result?.data);
  }

  return notes&& (
    <div>
      <div className='flex gap-5 items-center'>
      {stepCount!=0&&
      <Button onClick={()=> setStepCount(stepCount-1)} variant="outline" size="sm" >Previous</Button>}
        {notes?.map((item, index) => (
          <div key={index} className={`w-full h-2 rounded-full
          ${index<stepCount?'bg-primary':'bg-gray-300'}`
          }>
          </div>
        ))}
        <Button onClick={()=> setStepCount(stepCount+1)} variant="outline" size="sm" >Next</Button>

      </div>
      <div>
      <div dangerouslySetInnerHTML={{__html:(notes[stepCount]?.notes)?.replace('```html',' ')}} />
      </div>
    </div>
  )
}

export default ViewNotes