import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import EnergyAndWork from './components/EnergyAndWork'
import Momentum from './components/Momentum'
import Electrostatics from './components/Electrostatics'

function App() {
  const [activeSection, setActiveSection] = useState('energy')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'energy':
        return <EnergyAndWork />
      case 'momentum':
        return <Momentum />
      case 'electrostatics':
        return <Electrostatics />
      default:
        return <EnergyAndWork />
    }
  }

  return (
    <div className="physics-explainer">
      <header className="header">
        <h1>Physik Erklärer</h1>
        <p>Interaktive Visualisierung komplexer Physikkonzepte</p>
      </header>
      
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <main className="main-content">
        {renderActiveSection()}
      </main>
      
      <footer className="footer">
        <p>© 2024 React Physics Explainer - Für Bildungszwecke</p>
      </footer>
    </div>
  )
}

export default App
