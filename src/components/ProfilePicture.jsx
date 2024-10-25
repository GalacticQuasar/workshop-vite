import React, { useState } from 'react'

export default function ProfilePicture({ src = "../ryanpic.jpg" }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <img
      src={src} // Placeholder image
      alt="Profile Picture"
      className={`w-48 h-48 object-cover ${isHovered ? "scale-110" : "scale-100"} transition-transform duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}

