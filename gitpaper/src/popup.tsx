import "~style.css"

import Login from "./components/AuthComponents/Login"

function IndexPopup() {
  return (
    <div className="flex items-center justify-center h-[600px] w-[450px] flex-col">
      <Login />
    </div>
  )
}

export default IndexPopup
