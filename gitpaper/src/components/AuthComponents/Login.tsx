import logo from "data-base64:~images/logo.png"
import React from "react"

import { Button } from "~components/ui/button"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col text-lg px-6 space-y-6">
      <h1 className="text-2xl font-semibold flex justify-center items-center">
        Welcome to <span className="italic font-bold ml-1">Gitpaper</span>
        <img src={logo} alt="gitpaper-logo" className="ml-1 size-10" />
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
