import './index.css'

const EventItem = props => {
  const {eventItem, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventItem

  return (
    <li className="list-item">
      <button
        type="button"
        className="btn-2"
        onClick={() => onClickEvent(registrationStatus)}
      >
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p className="img-name">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
