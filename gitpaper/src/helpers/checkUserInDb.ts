import axios from "axios"

import type { UserProps } from "~types/UserProps"

const url = `${process.env.WEBAPP_URL}/v1/extension/login`

export async function checkUser({ username, password }: UserProps) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/extension/login",
      {
        username,
        password
      }
    )

    const { user, token } = response.data
    console.log("User:", user)
    console.log("Token:", token)

    localStorage.setItem("token", token)
  } catch (error) {
    alert("Login failed")
    console.log(error, "Login Error")
  }
}
