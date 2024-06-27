"use client"
import React from "react"
export const containerStyle =
  "h-12 mb-5 flex items-center rounded-full bg-gray-700 shadow-md px-4 focus:ring outline-none"
export const textStyle = "relative text-md color-gray-50"

type TaskType = {
  completed: boolean
  label: string
}

const Task: React.FC<{
  task: TaskType
  onClick: () => void
  onDelete: () => void
  onCompleted: () => void
}> = ({ task, onClick, onDelete, onCompleted }) => {
  return (
    <div
      className={`${containerStyle} cursor-pointer`}
      role="checkbox"
      aria-checked={task.completed}
      tabIndex={0}
    >
      <div
        className={` rounded-full w-5 h-5 mr-4 transition-all flex items-center justify-center bg-gray-900 cursor-pointer
                    ${task.completed ? "bg-transparent" : ""}`}
      />

      <div className={textStyle} onClick={onClick}>
        {task.label}
        <div
          className={`absolute top-1/2 -left-1 -right-1 h-0.5 transform origin-left transition-transform bg-blue-400
                       ${task.completed ? "scale-x-1" : "scale-x-0"}`}
        />
      </div>
      <div className={textStyle} onClick={onDelete}>
        X
        <div
          className={`absolute top-1/2 -left-1 -right-1 h-0.5 transform origin-left transition-transform bg-blue-400
                       ${task.completed ? "scale-x-1" : "scale-x-0"}`}
        />
      </div>
      <div className={"underline"} onClick={onCompleted}>
        completed::: {`${task.completed}`}
        <div
          className={`absolute top-1/2 -left-1 -right-1 h-0.5 transform origin-left transition-transform bg-blue-400
                       ${task.completed ? "scale-x-1" : "scale-x-0"}`}
        />
      </div>
    </div>
  )
}

export default Task
