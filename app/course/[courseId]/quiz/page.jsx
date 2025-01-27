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

    return (
        <div className='font-bold text-2xl'>

            <h2>Quiz</h2>

            <StepProgress data={quiz} setStepCount={(v) => setStepCount(v)}
                stepCount={stepCount} />

            <div>
                {quiz&&quiz.map((item, index) => (
                    <QuizCardItem />
                ))}
            </div>
        </div>
    )
}

export default Quiz