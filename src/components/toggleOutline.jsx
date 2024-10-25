import React from 'react'

export default function ToggleOutline({ checked, onChange }) {
  return (
    <div className="absolute top-4 right-4 flex items-center">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2 text-white">Toggle Outline</span>
    </div>

  )
}

