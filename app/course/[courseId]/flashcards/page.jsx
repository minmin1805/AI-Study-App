'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Flashcarditem from './_components/Flashcarditem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function Flashcards() {

    const { courseId } = useParams();
    const [flashCards, setFlashCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState();

    useEffect(() => {
        GetFlashCards();
    }, [])

    const GetFlashCards = async () => {
        const result = await axios.post('/api/study-type', {
            courseId: courseId,
            studyType: 'Flashcard'
        })

        setFlashCards(result?.data);
        console.log('Flashcard', result.data);

    }

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div>
            <h2 className='font-bold text-2xl'>Flashcards</h2>
            <p>Flashcards: The Ultimate Tool to Lock in Concepts!</p>

            <div className='flex items-center justify-center mt-10'>
                <Carousel>
                    <CarouselContent>
                    (flashCard)
                        <CarouselItem>
                            <Flashcarditem handleClick={handleClick} isFlipped={isFlipped} />

                        </CarouselItem>

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

        </div>
    )
}

export default Flashcards