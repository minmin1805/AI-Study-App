import { db } from "@/configs/db";
import { inngest } from "./client";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { generateNotesAiModel } from "@/configs/AiModel";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "1s");
        return { message: `Hello ${event.data.email}!` };
    },
);

// Generate notes for each chapter with AI

export const CreateNewUser = inngest.createFunction(
    { id: 'create-user' },
    { event: 'user.create' },
    async ({ event, step }) => {
        const {user} = event.data;
        // Get event data
        const result = await step.run('Check user and create new if not in database', async () => {
            // Check if user already exist 

            const result = await db.select().from(USER_TABLE)
                .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

            console.log(result);

            // If not then add to the database

            if (result?.length == 0) {
                const userResp = await db.insert(USER_TABLE).values({
                    name: user?.fullName,
                    email: user?.primaryEmailAddress?.emailAddress
                }).returning({ id: USER_TABLE.id })

                return userResp;
            }
            return result;
        })
        return 'Success';
    }
    // This step is to send welcome email notification to the user

    // This step is to send welcome email notification to the user after 3 days they have signed up

)

export const GenerateNotes= inngest.createFunction(
    {id: 'generate-notes'},
    {event: 'notes.generate'},
    async({event, step}) => {
        const {course} = event.data; // all record info
        const notesResult = await step.run('Generate Chapter Notes', async() => {
            const Chapters = course?.courseLayout?.chapters;
            let index=0;
            Chapters.forEach(async (chapter) => {
                const PROMPT='Generate '+course?.courseType+' material detail content for each chapter , Make sure to give notes for each topics from chapters, Code example if applicable in <precode> tag also markHeight the key points and add style for each tags and give the response in HTML format (Do not Add HTML , Head, Body, title tag), The chapter content is :'+ JSON.stringify(chapter)+" ";
                const result=await generateNotesAiModel.sendMessage(PROMPT);
                const aiResp=result.response.text();

                await db.insert(CHAPTER_NOTES_TABLE).values({
                    courseId:course?.courseId,
                    chapterId:index,
                    notes:aiResp
                })
                index++;
            })
            return 'Completed';
        })

        // Update status to "ready" in the table (from Generating to ready)
        const updateCourseStatusResult = await step.run('Update Course Status To Readt', async() =>{
            const result = await db.update(STUDY_MATERIAL_TABLE).set({
                status: 'Ready'
            }).where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId))
            return 'Success';
        });

    }

)

