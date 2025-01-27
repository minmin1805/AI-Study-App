"use client"
import axios from 'axios'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import StepProgress from '../_components/StepProgress';

function Quiz() {
    const {courseId} = useParams();
    const [quizData, setQuizData]=useState();
    const [quiz, setQuiz]=useState();

    useEffect(()=> {
        GetQuiz()
    },[])

    const GetQuiz=async()=> {
        
        const result=await axios.post('/api/study-type', {
            courseId:courseId,
            studyType:'Quiz' 
        });

        setQuizData(result.data)
        console.log(result);
    }

  return (
    <div className='font-bold text-2xl'>

        <h2>Quiz</h2>

    </div>
  )
}

export default Quiz