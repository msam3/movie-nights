import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard'


const cards = [
  { question: "What year did Beyoncé release 'Renaissance'?", answer: "2022" },
  { question: "Which celeb owns the tequila brand 818?", answer: "Kendall Jenner" },
  { question: "What is Bad Bunny's real name?", answer: "Benito Antonio Martínez Ocasio" },
  { question: "Which actor plays Wednesday Addams in Netflix?", answer: "Jenna Ortega" },
  { question: "Who played Elvis in the 2022 biopic?", answer: "Austin Butler" },
  { question: "Which celeb started Rare Beauty?", answer: "Selena Gomez" },
  { question: "Which singer's real name is Solána Imani Rowe?", answer: "SZA" },
  { question: "What is Doja Cat's real name?", answer: "Amala Ratna Zandile Dlamini" },
  { question: "Which rapper's real name is Aubrey Drake Graham?", answer: "Drake" },
  { question: "What One Direction member went solo and starred in 'Don't Worry Darling'?", answer: "Harry Styles" },
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * cards.length)
    setCurrentIndex(randomIndex)
  }

  return (
    <div className="app">
      <h1>🌟 Pop Culture Flashcards</h1>
      <p>Test your celeb knowledge!</p>
      <p>Total cards: {cards.length}</p>
      <Flashcard card={cards[currentIndex]} />
      <button onClick={handleNext}>Next Card →</button>
    </div>
  )
}

export default App