import TaskPage from "./tasks/components/TaskPage"
import "../core/styles/index.css"

export default async function Home() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <main>
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
        </div>
        <TaskPage />
      </main>
    </div>
  )
}
