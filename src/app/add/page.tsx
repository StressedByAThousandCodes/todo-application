import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function addTask(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid or No Input")
    }

    await prisma.todo.create({
        data: {
            title,
            complete: false
        }
    })

    redirect("/")
}

export default function Page() {
    return <>
        <header className="flex justify-between mb-4 item-center">
            <h1 className="text-2xl">Add Task</h1>
        </header>
        <form action={addTask} className="flex gap-2 flex-col">
            <input type="text" name="title" className="border px-2 py-1 rounded outline-none bg-transparent border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700" />
            <div className="flex gap-1 justify-end">
                <Link className="border px-2 py-1 rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700" href="..">Cancel</Link>
                <button type="submit" className="border px-2 py-1 rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700">Add</button>
            </div>
        </form>
    </>
}