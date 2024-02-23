import Link from "next/link";

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
    <li>
      <img src={image} alt={image} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={eventLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventDetails
