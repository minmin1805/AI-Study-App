"use client"
import axios from 'axios'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import StepProgress from '../_components/StepProgress';
import QuizCardItem from './_components/QuizCardItem';

function Quiz() {
    const { courseId } = useParams();
    const [quizData, setQuizData] = useState();
    const [quiz, setQuiz] = useState([]);
    const [stepCount, setStepCount] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState();

    useEffect(() => {
        GetQuiz()
    }, [])

    const GetQuiz = async () => {

        const result = await axios.post('/api/study-type', {
            courseId: courseId,
            studyType: 'Quiz'
        });

        setQuizData(result.data)
        setQuiz(result.data.content.quiz)
        console.log(result);
    }

    const checkAnswer = (userAnswer, currentQuestion) => {
        if (userAnswer == currentQuestion?.correctAnswer) {
            setIsCorrectAnswer(true);
            setCorrectAnswer(currentQuestion?.correctAnswer)
            return;
        }
        else {
            setIsCorrectAnswer(false);
        }
    }

    useEffect(()=> {
        setCorrectAnswer(null);
        setIsCorrectAnswer();
    }, [stepCount])

    return (
        <div className='font-bold text-2xl text-center mb-4 mt-5'>

            <h2>Quiz</h2>

            <StepProgress data={quiz} setStepCount={(v) => setStepCount(v)}
                stepCount={stepCount} />

            <div>
                {/* {quiz&&quiz.map((item, index) => ( */}
                <QuizCardItem quiz={quiz[stepCount]} userSelectedOption={(v) => checkAnswer(v, quiz[stepCount])} />
                {/* ))} */}
            </div>

            {isCorrectAnswer == false && <div>

                <div className='border p-3 border-red-700 bg-red-200 rounded-lg'>
                    <h2 className='font-bold text-lg text-red-600'>Correct</h2>
                    <p>Wrong!! The Correct Answer is: {correctAnswer}</p>
                </div>
            </div>}

            {isCorrectAnswer == true && <div>

                <div className='border p-3 border-green-700 bg-green-200 rounded-lg'>
                    <h2 className='font-bold text-lg text-green-600'>Correct</h2>
                    <p>Your Answer is Correct!</p>
                </div>

            </div>}


        </div>
    )
}

export default Quiz