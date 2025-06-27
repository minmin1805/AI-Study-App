'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import StepProgress from '../_components/StepProgress';
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
    const [api, setApi] = useState();
    const [stepCount, setStepCount] = useState(0)


    useEffect(() => {
        GetFlashCards();
    }, [])

    useEffect(() => {
        if (!api) {
            return;
        }
        api.on('select', () => {
            setIsFlipped(false);
        })
    }, [api])

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
        <div >
            <h2 className='font-bold text-2xl flex items-center justify-center mt-5'>Flashcards</h2>
            <p className='text-xl flex items-center justify-center mt-2'>Flashcards: Your Secret Weapon for Concept Mastery</p>

            <div className='mt-10 px-30 py-20 border shadow-md rounded-lg max-w-[90%] mx-auto mb-10 bg-gray-100'>


                <Carousel setApi={setApi}>
                    <CarouselContent >
                        {flashCards?.content && flashCards.content?.map((flashcard, index) => (
                            <CarouselItem key={index} className='mt-10 mb-20'>
                                <Flashcarditem handleClick={handleClick} isFlipped={isFlipped} flashcard={flashcard} />

                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

        </div>
    )
}

export default Flashcards