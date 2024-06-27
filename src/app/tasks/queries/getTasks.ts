import db from "@/db"

export default async function getTasks() {
  return await db.task.findMany()
}
