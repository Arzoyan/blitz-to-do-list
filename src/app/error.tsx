"use client" // Error components must be Client components
import React, { useEffect } from "react"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">{error.name}</h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
        </div>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  )
}
