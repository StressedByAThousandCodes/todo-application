import { TaskItem } from "@/components/TaskItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTasks() {
  return prisma.todo.findMany()
}

async function toggleTask(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({
    where: { id },
    data: { complete }
  })
}

export default async function Home() {

  const tasks = await getTasks()

  return <>
    <header className="flex justify-between mb-4 item-center">
      <h1 className="text-2xl">Tasks</h1>
      <Link 
        className="border px-2 py-1 rounded outline-none border-slate-300 text-slate-300 hover:bg-slate-700 focus-within:bg-slate-700" 
        href="/add"
      >
        Add
      </Link>
    </header>
    <ul className="pl-4">
      { tasks.map(todo => (
        <TaskItem key={todo.id} {...todo} toggleTask={toggleTask}/>
      )) }
    </ul>
  </>
}
