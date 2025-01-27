import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {chapters,courseId,type}=await req.json();

    const PROMPT = type === 'Flashcard'
    ? `Generate the flashcard on topic: ${chapters} in JSON format with front and back content. Please ensure that the value is JSON serializable when trying to do NextResponse.json on it. Maximum 15 cards only.`
    : type === 'Quiz'
        ? `Generate Quiz on topic: ${chapters} with Questions and Options along with the correct answer in JSON format, (Max 10).`
        : '';  // This empty string is a fallback in case the type is neither 'Flashcard' nor 'Quiz'

    // insert record to db, update status to generating
    const result=await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId:courseId,
        type:type
    }).returning({id:STUDY_TYPE_CONTENT_TABLE.id});

    // trigger inngest function
    inngest.send({
        name:'studyType.content',
        data:{
            studyType:type,
            prompt:PROMPT,
            courseId:courseId,
            recordId:result[0].id
        }
    })

    return NextResponse.json(result[0].id);
}