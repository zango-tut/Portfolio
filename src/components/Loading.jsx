import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-purple-500 border-dashed rounded-full animate-spin mx-auto"></div>
      <h2 className="text-xl md:text-2xl font-semibold">Loading your awesome projects...</h2>
      <p className="text-gray-400 text-sm md:text-base">
        Please wait a moment, magic is happening ✨
      </p>
    </div>
  </div>
)
}

export default Loading