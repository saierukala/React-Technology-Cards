// Write your code here.
import './index.css'

function CardItem(props) {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    // <div className="container">
    <li className={`${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="cardImage">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
    // </div>
  )
}
export default CardItem
