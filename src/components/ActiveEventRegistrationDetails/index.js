import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props

  const renderYetToRegister = () => (
    <div className="render-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-img"
      />
      <p>
        A live performance brings so much to your relationship with dance Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="render-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="reg-img"
      />
      <h1 className="registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="render-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderEventStatus = () => {
    switch (activeEvent) {
      case 'YET_TO_REGISTER':
        return renderYetToRegister()
      case 'REGISTERED':
        return renderRegistered()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationClosed()
      default:
        return <p>Click on an event, to view its registration details</p>
    }
  }

  return <div>{renderEventStatus()}</div>
}

export default ActiveEventRegistrationDetails
