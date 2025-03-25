import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'


import React from 'react'

const page = () => {
  return (
    <div>

            

      <SignInButton mode='modal'/>
      <Button>Click me</Button>
      Home
      <ThemeToggle/>
      
    </div>

  )
}

export default page
