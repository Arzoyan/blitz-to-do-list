import db from "@/db"

export default async function getTasks() {
  return db.task.findMany()
}

export async function updateTask(data: { id: number; label?: string; completed?: boolean }) {
  return db.task.update({ where: { id: data.id }, data })
}
export async function deleteTask(id: number) {
  return db.task.delete({
    where: { id },
  })
}
