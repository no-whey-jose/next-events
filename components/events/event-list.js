import EventDetails from "./event-details";
import styles from './event-list.module.css'

function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      { items.map(event => <EventDetails key={event.id} info={event}/>) }
    </ul>
  )
}

export default EventList
