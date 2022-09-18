import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <span className="logo">Chat</span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
            <span>Mohit</span>
            <button>logout</button>
        </div>
    </div>
  )
}
