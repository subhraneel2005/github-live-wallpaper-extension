// popup.tsx or pages/login.tsx
import { useEffect, useState } from "react"

const serverUrl = process.env.REACT_APP_SERVER_URL

function LoginPopup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [token, setToken] = useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch(`${serverUrl}/api/v1/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })

            if (!response.ok) {
                const err = await response.json()
                throw new Error(err.message || "Login failed")
            }

            const data = await response.json()
            setToken(data.token) // Save token (consider storing in localStorage or chrome.storage)
            setError("")
        } catch (err: any) {
            setError(err.message)
        }
    }

    useEffect(() => {
        if (token) {
            chrome.storage.local.set({ jwt: token })
        }
    }, [token])

    return (
        <div className="p-4 w-[300px]">
            <h1 className="text-xl mb-2">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
                >
                    Login
                </button>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {token && <p className="text-green-500 text-sm">JWT: {token}</p>}
            </form>
        </div>
    )
}

export default LoginPopup
