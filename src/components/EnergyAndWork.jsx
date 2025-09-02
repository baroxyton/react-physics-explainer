import { useState } from 'react'

function EnergyAndWork() {
  return (
    <div className="section">
      <h2>4. Energie und Arbeit</h2>
      
      <DefinitionsSection />
      <ProblemsSection />
    </div>
  )
}

function DefinitionsSection() {
  return (
    <div className="subsection">
      <h3>4.1 Definitionen und Formeln</h3>
      
      <div className="definitions-grid">
        <div className="definition-card">
          <h4>Arbeit (W)</h4>
          <div className="formula-box">
            W = F × s × cos(α)
          </div>
          <p>Die Arbeit ist das Produkt aus Kraft, Weg und dem Kosinus des Winkels zwischen Kraft und Weg.</p>
          <p><strong>Einheit:</strong> Joule (J) = N⋅m</p>
        </div>
        
        <div className="definition-card">
          <h4>Energie (E)</h4>
          <div className="formula-box">
            E = Fähigkeit, Arbeit zu verrichten
          </div>
          <p>Energie ist die gespeicherte Fähigkeit eines Systems, Arbeit zu verrichten.</p>
          <p><strong>Einheit:</strong> Joule (J)</p>
        </div>
        
        <div className="definition-card">
          <h4>Leistung (P)</h4>
          <div className="formula-box">
            P = W/t = F × v
          </div>
          <p>Leistung ist die pro Zeiteinheit verrichtete Arbeit oder übertragene Energie.</p>
          <p><strong>Einheit:</strong> Watt (W) = J/s</p>
        </div>
        
        <div className="definition-card">
          <h4>Lageenergie (Epot)</h4>
          <div className="formula-box">
            E<sub>pot</sub> = m × g × h
          </div>
          <p>Potentielle Energie aufgrund der Höhe im Gravitationsfeld.</p>
          <p><strong>g = 9.81 m/s²</strong></p>
        </div>
        
        <div className="definition-card">
          <h4>Kinetische Energie (Ekin)</h4>
          <div className="formula-box">
            E<sub>kin</sub> = ½ × m × v²
          </div>
          <p>Energie der Bewegung eines Körpers.</p>
        </div>
        
        <div className="definition-card">
          <h4>Federenergie (Efeder)</h4>
          <div className="formula-box">
            E<sub>feder</sub> = ½ × k × x²
          </div>
          <p>Elastische potentielle Energie einer gespannten Feder.</p>
          <p><strong>k:</strong> Federkonstante, <strong>x:</strong> Auslenkung</p>
        </div>
        
        <div className="definition-card">
          <h4>Wärmeenergie (Q)</h4>
          <div className="formula-box">
            Q = m × c × ΔT
          </div>
          <p>Energie, die für Temperaturänderungen benötigt wird.</p>
          <p><strong>c:</strong> spezifische Wärmekapazität</p>
        </div>
      </div>
    </div>
  )
}

function ProblemsSection() {
  return (
    <div className="subsection">
      <h3>4.2 Aufgaben</h3>
      
      <MountainClimberProblem />
      <RubberBallProblem />
      <SlidingBodyProblem />
      <HydroPowerProblem />
      <ElasticRopeProblem />
      <PowerDerivationProblem />
      <WaterMixingProblem />
      <SphereHeatingProblem />
    </div>
  )
}

function MountainClimberProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [mass, setMass] = useState(100)
  const [height, setHeight] = useState(2346) // Height difference to Blümlisalphorn
  
  const calculateWork = () => {
    const g = 9.81
    return mass * g * height
  }
  
  const calculateChocolate = (work) => {
    const chocolateEnergy = 2410000 // J per 100g
    return (work / chocolateEnergy) * 100 // in grams
  }
  
  const work = calculateWork()
  const chocolate = calculateChocolate(work)
  
  return (
    <div className="problem-card">
      <h4>1) Bergsteiger Problem</h4>
      <p>Ein Bergsteiger steigt vom Bundläger auf das Blümlisalphorn. Die Masse des Bergsteigers inkl. Rucksack beträgt 100 kg.</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Masse (kg):</label>
          <input 
            type="number" 
            value={mass} 
            onChange={(e) => setMass(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Höhenunterschied (m):</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Lösung berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Hubarbeit:</h5>
            <div className="formula-box">
              W = m × g × h = {mass} kg × 9.81 m/s² × {height} m = {(work/1000000).toFixed(2)} MJ
            </div>
            
            <h5>b) Schokolade:</h5>
            <div className="formula-box">
              Schokolade = {(work/1000000).toFixed(2)} MJ ÷ 2.41 MJ/100g = {chocolate.toFixed(0)} g
            </div>
            <p>Der Bergsteiger müsste {chocolate.toFixed(0)} g Schokolade essen, um die verrichtete Arbeit zu kompensieren!</p>
          </div>
        )}
      </div>
    </div>
  )
}

function RubberBallProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [mass, setMass] = useState(0.1) // 100g
  const [height, setHeight] = useState(1.5)
  const [v0, setV0] = useState(1.5)
  
  const g = 9.81
  
  const calculateImpactSpeed = () => {
    // v² = v₀² + 2gh
    return Math.sqrt(v0 * v0 + 2 * g * height)
  }
  
  const _calculatePotentialEnergyAtImpact = () => {
    return 0 // At ground level
  }
  
  const calculateBounceHeight = () => {
    const totalEnergyInitial = 0.5 * mass * v0 * v0 + mass * g * height
    const energyAfterLoss = totalEnergyInitial * 0.75 // Loses 1/4
    return energyAfterLoss / (mass * g)
  }
  
  return (
    <div className="problem-card">
      <h4>2) Gummiball Problem</h4>
      <p>Ein Gummiball wird aus der Höhe h mit der Geschwindigkeit v₀=1.5 m/s nach unten geworfen.</p>
      <p><strong>Angaben:</strong> m=100 g, h=1.5 m</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Masse (kg):</label>
          <input 
            type="number" 
            step="0.01"
            value={mass} 
            onChange={(e) => setMass(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Anfangshöhe (m):</label>
          <input 
            type="number" 
            step="0.1"
            value={height} 
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Anfangsgeschwindigkeit (m/s):</label>
          <input 
            type="number" 
            step="0.1"
            value={v0} 
            onChange={(e) => setV0(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Lösung berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Geschwindigkeit vor Aufprall:</h5>
            <div className="formula-box">
              v = √(v₀² + 2gh) = √({v0}² + 2×{g}×{height}) = {calculateImpactSpeed().toFixed(2)} m/s
            </div>
            
            <h5>b) Potentielle Energie vor Aufprall:</h5>
            <div className="formula-box">
              E_pot = 0 J (am Boden)
            </div>
            
            <h5>c) Sprunghöhe nach Reflexion:</h5>
            <div className="formula-box">
              h_neu = {calculateBounceHeight().toFixed(2)} m
            </div>
            <p>Der Ball steigt auf {calculateBounceHeight().toFixed(2)} m nach der Reflexion.</p>
          </div>
        )}
      </div>
    </div>
  )
}

function SlidingBodyProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [mass, setMass] = useState(3)
  const [friction, setFriction] = useState(0.3)
  const [v0kmh, setV0kmh] = useState(30)
  
  const _g = 9.81
  const v0 = v0kmh / 3.6 // Convert km/h to m/s
  
  const calculateStoppingEnergy = () => {
    return 0.5 * mass * v0 * v0
  }
  
  const calculateHalfSpeedEnergy = () => {
    const vHalf = v0 / 2
    const initialKinetic = 0.5 * mass * v0 * v0
    const finalKinetic = 0.5 * mass * vHalf * vHalf
    return initialKinetic - finalKinetic
  }
  
  return (
    <div className="problem-card">
      <h4>3) Gleitender Körper Problem</h4>
      <p>Ein Körper gleitet auf einer waagrechten Ebene. Die Reibung bremst ihn gleichmässig.</p>
      <p><strong>Angaben:</strong> m=3 kg, μ=0.3, v=30 km/h</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Masse (kg):</label>
          <input 
            type="number" 
            value={mass} 
            onChange={(e) => setMass(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Reibungszahl μ:</label>
          <input 
            type="number" 
            step="0.01"
            value={friction} 
            onChange={(e) => setFriction(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Anfangsgeschwindigkeit (km/h):</label>
          <input 
            type="number" 
            value={v0kmh} 
            onChange={(e) => setV0kmh(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Lösung berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Energie bis zum Stillstand:</h5>
            <div className="formula-box">
              E = ½mv² = ½×{mass}×{v0.toFixed(2)}² = {calculateStoppingEnergy().toFixed(1)} J
            </div>
            
            <h5>b) Energie bis zur halben Geschwindigkeit:</h5>
            <div className="formula-box">
              ΔE = ½m(v₀² - v₁²) = {calculateHalfSpeedEnergy().toFixed(1)} J
            </div>
            <p>Bei halber Geschwindigkeit wurden bereits 75% der Energie umgewandelt!</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Additional problem components would go here...
function HydroPowerProblem() {
  return (
    <div className="problem-card">
      <h4>4) Wasserkraftwerk Hagneck</h4>
      <p>Höhenunterschied: 8.4 m, max. Durchfluss: 280 m³/s</p>
      <div className="visualization">
        <p>Visualisierung: Wasserkraftwerk (wird implementiert)</p>
      </div>
    </div>
  )
}

function ElasticRopeProblem() {
  return (
    <div className="problem-card">
      <h4>5) Elastisches Seil</h4>
      <p>Eine Masse fällt in ein elastisches Seil.</p>
      <div className="visualization">
        <p>Visualisierung: Seilsprung (wird implementiert)</p>
      </div>
    </div>
  )
}

function PowerDerivationProblem() {
  return (
    <div className="problem-card">
      <h4>6) Leistungsformel P = Fv</h4>
      <div className="formula-box">
        P = W/t = (F×s)/t = F×(s/t) = F×v
      </div>
      <p>Diese Formel gilt, wenn Kraft und Geschwindigkeit in die gleiche Richtung zeigen.</p>
    </div>
  )
}

function WaterMixingProblem() {
  return (
    <div className="problem-card">
      <h4>7) Wasser mischen</h4>
      <p>Temperaturausgleich zwischen verschiedenen Wassermengen.</p>
      <div className="visualization">
        <p>Interaktiver Mischungsrechner (wird implementiert)</p>
      </div>
    </div>
  )
}

function SphereHeatingProblem() {
  return (
    <div className="problem-card">
      <h4>8) Kugelerwärmung</h4>
      <p>Temperaturanstieg durch Strahlung: I=50 W/m², T=20°C</p>
      <div className="visualization">
        <p>Strahlungsvisualisierung (wird implementiert)</p>
      </div>
    </div>
  )
}

export default EnergyAndWork