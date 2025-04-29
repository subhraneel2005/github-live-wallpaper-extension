import React from "react"

import { Button } from "~components/ui/button"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col text-lg px-6 space-y-6 -mt-32">
      <h1 className="text-2xl font-semibold">
        Welcome to <span className="italic font-bold">Gitpaper</span>
      </h1>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" placeholder="Enter your username..." />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="password" />
      </div>
      <Button className="w-1/2">Login</Button>
    </div>
  )
}
