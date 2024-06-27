"use client"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import { BlitzPage } from "@blitzjs/auth"
import insertTask from "../mutations/insertTask"
// import { updateTask } from "../mutations/insertTask"
import getTasks from "../queries/getTasks"
import AddTask from "./AddTask"

import { useState } from "react"
import Task from "./Task"
import updateTask from "../mutations/updateTask"
import deleteTask from "../mutations/deleteTask"

interface Task {
  id: number
  label: string
  completed: boolean
}

const TaskPage: BlitzPage = () => {
  const [newTaskLabel, setNewTaskLabel] = useState("")
  const [editedTaskLabel, setEditedTaskLabel] = useState("")
  const [itemId, setItemId] = useState(-1)
  const [insertTaskMutation, { isLoading }] = useMutation(insertTask, {
    onSettled: async () => {
      await invalidateQuery(getTasks)
    },
  })
  const [updateTaskMutation] = useMutation(updateTask, {
    onSettled: async () => {
      await invalidateQuery(getTasks)
    },
  })
  const [deleteTaskMutation] = useMutation(deleteTask, {
    onSettled: async () => {
      await invalidateQuery(getTasks)
    },
  })

  const [tasks] = useQuery(getTasks, undefined) as [Task[], unknown]

  const handelUpdateTask = async (data: { label?: string; completed?: boolean; id: number }) => {
    await updateTaskMutation(data)
    setItemId(-1)
    setEditedTaskLabel("")
  }

  const handelDeleteTask = async (id: number) => {
    await deleteTaskMutation(id)
  }

  return (
    <>
      <div>
        <AddTask
          isLoading={isLoading}
          value={newTaskLabel}
          onChange={setNewTaskLabel}
          onPressEnter={async () => {
            await insertTaskMutation({ label: newTaskLabel })
            setNewTaskLabel("")
          }}
        />
      </div>
      <ul className="divide-y divide-gray-200 px-4">
        {tasks.map((item) => {
          return item.id === itemId ? (
            <AddTask
              isLoading={isLoading}
              value={editedTaskLabel}
              onChange={setEditedTaskLabel}
              onPressEnter={async () => {
                await handelUpdateTask({ id: item.id, label: editedTaskLabel })
              }}
            />
          ) : (
            <Task
              key={item.id}
              task={item}
              onClick={() => {
                setEditedTaskLabel(item.label)
                setItemId(item.id)
              }}
              onDelete={() => {
                handelDeleteTask(item.id)
              }}
              onCompleted={() => {
                handelUpdateTask({ id: item.id, completed: !item.completed })
              }}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TaskPage
