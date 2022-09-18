import React from 'react'

export default function Message() {
  return (
    <div className='message owner'>
      <div class="messageInfo">
        <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
        <span>just now</span>
      </div>
      <div class="messageContent">
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
      </div>
    </div>

  )
}
