import db from "@/db"

export default async function updateTask(data: {
  id: number
  label?: string
  completed?: boolean
}) {
  return await db.task.update({ where: { id: data.id }, data })
}
