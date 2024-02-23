import Link from "next/link";
import styles from './event-details.module.css'

function EventDetails(props) {
  const { title, image, date, location, id } = props.info;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n');
  const eventLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={image} alt={image} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={eventLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventDetails
