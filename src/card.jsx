function Card({ title, genre, date, description, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
      <a href={link} target="_blank">Learn More</a>
    </div>
  )
}

export default Card