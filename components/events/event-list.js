import EventDetails from "./event-details";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      { items.map(event => <EventDetails key={event.id} info={event}/>) }
    </ul>
  )
}

export default EventList
