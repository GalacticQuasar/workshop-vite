import React from 'react'

export default function Header() {
  return (
    <div className="h-1/12 w-full font-monument text-white text-5xl flex-col items-center">
      <div className="flex items-center justify-center h-full ">
        <img src="/leftarrow.png" alt="left arrow" />
        <h1 className="pt-2 mx-8 animate-text gradient">Team Member Profile</h1>
        <img src="/rightarrow.png" alt="right arrow" />
      </div>
    </div>
  )
}

