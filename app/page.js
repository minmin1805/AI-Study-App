import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn(); // Proper Clerk method
  }

  redirect("/dashboard"); // Otherwise, go to dashboard
}