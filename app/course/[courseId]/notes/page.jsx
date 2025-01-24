"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function ViewNotes() {

  const [notes, setNotes]=useState();
  const {courseId}=useParams();

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

  return (
    <div>
      <div>
        {notes?.map((item, index) => (
          <div key={index} className>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewNotes