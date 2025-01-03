import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function GamingButtons() {
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex space-x-8">
        <NavLink to={'/'}>
          <Button label="A" color="green" />
        </NavLink>

        <NavLink to={'/dashboard'}>
          <Button label="B" color="red" />
        </NavLink>
      </div>
    </div>
  )
}



