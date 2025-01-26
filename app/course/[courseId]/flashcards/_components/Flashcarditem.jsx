import React from 'react'
import ReactCardFlip from 'react-card-flip'

function Flashcarditem({ isFlipped, handleClick }) {
    return (
        <div className='flex items-center justify-center'>

            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className='p-4 bg-primary text-white flex items-center justify-center rounded-lg cursor-pointer 
                h-[250px] w-[200px] md:h-[350px] md:w-[300px] shadow-lg' onClick={handleClick}>
                    <h2>Question Front Side</h2>
                </div>

                <div className='p-4 bg-white shadow-lg text-primary flex items-center justify-center rounded-lg cursor-pointer 
                h-[250px] w-[200px] md:h-[350px] md:w-[300px]' onClick={handleClick}>
                    <h2>Answer Back Side</h2>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default Flashcarditem