"use client"
import React from "react"

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
    <li>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <h3
            className={`text-lg leading-6 font-medium ${
              task.completed ? "text-green-600" : "text-gray-900"
            }`}
          >
            {task.label}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex ">
            <input
              id="todo1"
              name="todo1"
              type="checkbox"
              onClick={onCompleted}
              checked={task.completed}
              className=" mr-2.5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
            />
            <h4
              className={`text-lg leading-6 font-medium ${
                task.completed ? "text-green-600" : "text-gray-900"
              }`}
            >
              {task.completed ? "Done" : "Pending"}
            </h4>
          </div>

          <div className="flex justify-end">
            <div className="mt-4 mr-2.5">
              <span
                className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                onClick={onClick}
              >
                Edit
              </span>
            </div>
            <div className="mt-4 ">
              <span
                className="font-medium text-red-600 hover:text-indigo-500 cursor-pointer"
                onClick={onDelete}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Task
