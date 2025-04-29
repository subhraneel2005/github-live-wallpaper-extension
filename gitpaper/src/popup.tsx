import "~style.css"

import Login from "./components/AuthComponents/Login"

function IndexPopup() {
  return (
    <div className="flex items-center justify-center h-[800px] w-[500px] flex-col">
      <Login />
    </div>
  )
}

export default IndexPopup
