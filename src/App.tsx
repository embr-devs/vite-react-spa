import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="brand">
          <span className="brand-icon">🔥</span>
        </div>
        <div>
          <h1>vite-react-spa</h1>
          <p className="subtitle">
            A minimal <code>Vite + React</code> app for testing deploys on <a href="https://github.com/embr-devs" target="_blank" rel="noreferrer">Embr</a>.
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          count: {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="details">
        <div className="detail-card">
          <h2>Stack</h2>
          <ul className="tag-list">
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Vite 6</li>
          </ul>
        </div>
        <div className="detail-card">
          <h2>Status</h2>
          <p className="status-badge">
            <span className="dot" /> Operational
          </p>
        </div>
      </section>

      <div className="ticks"></div>
      <footer>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </footer>
    </>
  )
}

export default App
