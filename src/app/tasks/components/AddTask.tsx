import React from "react"

type InputProps = {
  value: string
  onChange: (value: string) => void
  onPressEnter: () => void
  isLoading?: boolean
}

const AddTask: React.FC<InputProps> = ({ value, onChange, onPressEnter }) => {
  return (
    <div className="flex items-center border-b-2 border-teal-500 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        style={{ WebkitAppearance: "textfield" }}
        placeholder="add new task"
        type="search"
        autoComplete="off"
        value={value}
        onChange={({ currentTarget }) => onChange(currentTarget.value)}
        onKeyUp={({ key }) => {
          if (key === "Enter") {
            onPressEnter()
          }
        }}
      />
      <button
        onClick={onPressEnter}
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Add
      </button>
    </div>
  )
}

export default AddTask
