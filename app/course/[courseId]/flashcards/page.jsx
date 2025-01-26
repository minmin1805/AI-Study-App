'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Flashcards() {

    const {courseId}=useParams();
    const [flashCards, setFlashCards]=useState([]);

    useEffect(()=> {
        GetFlashCards();
    },[])

    const GetFlashCards=async()=> {
        const result = await axios.post('/api/study-type', {
            courseId:courseId,
            studyType:'Flashcard'
        })

        setFlashCards(result?.data);
        console.log('Flashcard', result.data);

    }
  return (
    <div>
        <h2 className='font-bold text-2xl'>Flashcards</h2>
        <p>Flashcards: The Ultimate Tool to Lock in Concepts!</p>
    </div>
  )
}

export default Flashcards