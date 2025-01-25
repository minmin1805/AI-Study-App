'use client'
import { useParams } from 'next/navigation'
import React from 'react'

function Flashcards() {

    const {courseId}=useParams();
    const GetFlashCards=()=> {
        
    }
  return (
    <div>Flashcards</div>
  )
}

export default Flashcards