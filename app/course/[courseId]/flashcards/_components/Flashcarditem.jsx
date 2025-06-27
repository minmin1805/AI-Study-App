import React from 'react'
import ReactCardFlip from 'react-card-flip'

function Flashcarditem({ isFlipped, handleClick, flashcard}) {
    return (
        <div className='flex items-center justify-center'>

            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className='p-2 font-bold bg-green-500 text-white flex items-center justify-center rounded-lg cursor-pointer 
                h-[260px] w-[210px] md:h-[350px] md:w-[320px] shadow-lg text-xl text-center' onClick={handleClick}>
                    <h2>{flashcard?.front}</h2>
                </div>

                <div className='p-2 bg-white shadow-lg text-green-500 font-bold flex items-center justify-center rounded-lg cursor-pointer 
                h-[260px] w-[210px] md:h-[350px] md:w-[320px] text-md text-center' onClick={handleClick}>
                    <h2>{flashcard?.back}</h2>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Flashcarditem