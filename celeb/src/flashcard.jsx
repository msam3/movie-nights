import { useState } from 'react'

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="flashcard" onClick={handleFlip}>
      {flipped ? (
        <div className="card-back">
          <p>{card.answer}</p>
        </div>
      ) : (
        <div className="card-front">
          <p>{card.question}</p>
        </div>
      )}
      <p className="hint">{flipped ? "Click to see question" : "Click to see answer"}</p>
    </div>
  )
}

export default Flashcard