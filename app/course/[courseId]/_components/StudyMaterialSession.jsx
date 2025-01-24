import React from 'react'
import MaterialCardItem from './MaterialCardItem'

function StudyMaterialSession() {

    const MaterialList=[
        {
            name:'Notes/Chapters',
            desc:'Read notes to prepare it',
            icon:'/notes.pgn',
            path:'/notes'
        },
        {
            name:'Flashcard',
            desc:'Flashcard help to remember the concepts',
            icon:'/flashcards.pgn',
            path:'/flashcards'
        },
        {
            name:'Quiz',
            desc:'Great way to test your knowledge',
            icon:'/quiz.pgn',
            path:'/quiz'
        },
        {
            name:'Question/Answer',
            desc:'Help to practice your learning',
            icon:'/qa.pgn',
            path:'/qa'
        }
    ]


  return (
    <div className='mt-5'>
    <h2 className='font-medium text-xl' >Study Material</h2>

    <div>
        {MaterialList.map((item, index) => (
            <MaterialCardItem item={item} key={index}/>
        ))}
    </div>
    </div>
  )
}

export default StudyMaterialSession