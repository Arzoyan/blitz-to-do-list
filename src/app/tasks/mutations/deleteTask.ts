import db from "@/db"

export default async function deleteTask(id: number) {
  return await db.task.delete({
    where: { id },
  })
}
