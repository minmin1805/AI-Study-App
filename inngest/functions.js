import { db } from "@/configs/db";
import { inngest } from "./client";
import { USER_TABLE } from "@/configs/schema";
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
            const Chapters = course?.courseLayour;
            let index=0;
            Chapters.forEach(async (chapter) => {
                const PROMPT ='Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTML , Head, Body, title tag), The chapters : ' + JSON.stringify(chapter);
                const result=await generateNotesAiModel(PROMPT);
                const aiResp=result.respons.text();

                await db.insert(CHAPTER_NOTE_TABLE).values({
                    chapterId:index,
                    courseId:course?.courseId,
                    note:aiResp
                })
                index++;
            })
            return 'Completed';
        })

        // Generate notes for each chapter with AI

    }

)