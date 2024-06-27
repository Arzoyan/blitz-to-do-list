import db from "@/db"

type InsertTask_input = {
  label: string
}

export default async function insertTask(data: InsertTask_input) {
  await db.task.create({
    data: {
      label: data.label,
      completed: false,
    },
  })
}
