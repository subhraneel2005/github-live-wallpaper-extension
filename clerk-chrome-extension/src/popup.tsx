import LoginPopup from '~pages/login'
import '~style.css'

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-[600px] plasmo-w-[800px] plasmo-flex-col">
      <LoginPopup />
    </div>
  )
}

export default IndexPopup