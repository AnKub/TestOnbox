import { useState } from 'react'
import './styles/main.scss'

// 🎬 CINEMATIC UI - Main App Component
// Пояснення: семантична HTML структура критично важлива для:
// 1. SEO (пошукові системи розуміють контент)
// 2. Accessibility (screen readers для незрячих)
// 3. Кращу підтримку різними пристроями

function App() {
  return (
    <div className="app">
      {/* 📱 HEADER - навігація та брендинг */}
      <header className="header">
        <nav className="nav">
          <h1 className="logo">CINEMATIC</h1>
          <ul className="nav__list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 🎭 MAIN CONTENT - основний контент */}
      <main className="main">
        {/* 🚀 HERO SECTION - перше враження */}
        <section className="hero" id="home">
          <div className="hero__background">
            {/* Тут буде кінематографічний фон */}
          </div>
          <div className="hero__content">
            <h1 className="hero__title">
              Immersive
              <span className="hero__title-accent"> Cinematic </span>
              Experience
            </h1>
            <p className="hero__subtitle">
              Step into a world where technology meets artistry
            </p>
            <button className="hero__cta">
              Enter Experience
            </button>
          </div>
        </section>

        {/* 📖 ABOUT SECTION */}
        <section className="section section--about" id="about">
          <div className="container">
            <h2>The Vision</h2>
            <p>Creating immersive digital experiences that blur the line between reality and imagination.</p>
          </div>
        </section>

        {/* 🎪 EXPERIENCE SECTION */}
        <section className="section section--experience" id="experience">
          <div className="container">
            <h2>Interactive Journey</h2>
            <p>Scroll-driven animations that respond to your every move.</p>
          </div>
        </section>

        {/* ✉️ CONTACT SECTION */}
        <section className="section section--contact" id="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <p>Ready to create something extraordinary together?</p>
          </div>
        </section>
      </main>

      {/* 🦶 FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 Cinematic UI. Crafted with passion.</p>
      </footer>
    </div>
  )
}

export default App
