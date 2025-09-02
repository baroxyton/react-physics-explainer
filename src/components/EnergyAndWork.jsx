import { useState, useEffect } from 'react'

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
  const [height, setHeight] = useState(8.4)
  const [flowRate, setFlowRate] = useState(280)
  const [efficiency, setEfficiency] = useState(0.85)
  const [showSolution, setShowSolution] = useState(false)
  
  const rho = 1000 // Dichte von Wasser in kg/m³
  const g = 9.81   // Gravitationsbeschleunigung in m/s²
  
  const calculatePower = () => {
    return rho * g * height * flowRate * efficiency / 1000000 // MW
  }
  
  const calculateEnergyPerYear = () => {
    const powerMW = calculatePower()
    return powerMW * 24 * 365 // MWh pro Jahr
  }
  
  return (
    <div className="problem-card">
      <h4>4) Wasserkraftwerk Hagneck</h4>
      <p>Höhenunterschied: 8.4 m, max. Durchfluss: 280 m³/s</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Höhenunterschied (m):</label>
          <input 
            type="number" 
            step="0.1"
            value={height} 
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Durchfluss (m³/s):</label>
          <input 
            type="number" 
            value={flowRate} 
            onChange={(e) => setFlowRate(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Wirkungsgrad:</label>
          <input 
            type="number" 
            step="0.01"
            min="0"
            max="1"
            value={efficiency} 
            onChange={(e) => setEfficiency(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Leistung berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Theoretische Leistung:</h5>
            <div className="formula-box">
              P = ρ × g × h × Q = {rho} × {g} × {height} × {flowRate} = {(rho * g * height * flowRate / 1000000).toFixed(2)} MW
            </div>
            
            <h5>b) Praktische Leistung (mit Wirkungsgrad):</h5>
            <div className="formula-box">
              P = {(rho * g * height * flowRate / 1000000).toFixed(2)} × {efficiency} = {calculatePower().toFixed(2)} MW
            </div>
            
            <h5>c) Jährliche Energieproduktion:</h5>
            <div className="formula-box">
              E = {calculatePower().toFixed(2)} MW × 8760 h = {calculateEnergyPerYear().toFixed(0)} MWh/Jahr
            </div>
          </div>
        )}
        
        <div className="visualization">
          <HydroPowerVisualization height={height} flowRate={flowRate} power={calculatePower()} />
        </div>
      </div>
    </div>
  )
}

function HydroPowerVisualization({ height, flowRate, power }) {
  const maxFlowRate = 400
  const waterLevel = Math.min(flowRate / maxFlowRate, 1)
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Wasserkraftwerk</h5>
      
      <svg width="300" height="200" style={{ background: '#87CEEB', borderRadius: '10px' }}>
        {/* Dam */}
        <rect x="50" y="50" width="20" height={100 + height * 2} fill="#8B4513" />
        
        {/* Water reservoir */}
        <rect x="20" y={150 - height * 2} width="50" height={height * 2} fill="#4682B4" opacity="0.8" />
        
        {/* Water flow */}
        <rect 
          x="70" 
          y={130 - waterLevel * 20} 
          width={waterLevel * 30} 
          height={waterLevel * 40} 
          fill="#1E90FF" 
          opacity="0.7"
        />
        
        {/* Turbine house */}
        <rect x="180" y="120" width="60" height="80" fill="#696969" />
        <rect x="190" y="130" width="40" height="60" fill="#D3D3D3" />
        
        {/* Turbine (rotating if power > 0) */}
        <circle cx="210" cy="160" r="15" fill="#FF6347" />
        {power > 0 && (
          <>
            <line x1="195" y1="160" x2="225" y2="160" stroke="#000" strokeWidth="2" />
            <line x1="210" y1="145" x2="210" y2="175" stroke="#000" strokeWidth="2" />
          </>
        )}
        
        {/* Power lines */}
        <line x1="240" y1="120" x2="280" y2="80" stroke="#000" strokeWidth="3" />
        <line x1="245" y1="120" x2="285" y2="80" stroke="#000" strokeWidth="3" />
        
        {/* Labels */}
        <text x="35" y="40" textAnchor="middle" fontSize="12" fill="#000">Stausee</text>
        <text x="210" y="210" textAnchor="middle" fontSize="12" fill="#000">Turbine</text>
        <text x="150" y="25" textAnchor="middle" fontSize="14" fill="#000" fontWeight="bold">
          {power.toFixed(1)} MW
        </text>
      </svg>
    </div>
  )
}

function ElasticRopeProblem() {
  const [mass, setMass] = useState(70)
  const [ropeLength, setRopeLength] = useState(50)
  const [springConstant, setSpringConstant] = useState(100)
  const [showSolution, setShowSolution] = useState(false)
  const [phase, setPhase] = useState(0)
  
  const g = 9.81
  
  // Calculate maximum extension
  const calculateMaxExtension = () => {
    // mg = kx => x = mg/k
    const staticExtension = (mass * g) / springConstant
    // Total extension includes the free fall energy conversion
    // mgh = ½kx² => x = sqrt(2mgh/k) where h = ropeLength + staticExtension  
    return staticExtension + Math.sqrt((mass * g * ropeLength) / springConstant)
  }
  
  const calculateMaxVelocity = () => {
    // At rope start: v = sqrt(2gh) where h = ropeLength
    return Math.sqrt(2 * g * ropeLength)
  }
  
  const calculateTotalEnergy = () => {
    return mass * g * (ropeLength + calculateMaxExtension())
  }
  
  // Animate through phases
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="problem-card">
      <h4>5) Elastisches Seil</h4>
      <p>Eine Masse fällt in ein elastisches Seil.</p>
      
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
          <label>Seillänge (m):</label>
          <input 
            type="number" 
            value={ropeLength} 
            onChange={(e) => setRopeLength(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Federkonstante (N/m):</label>
          <input 
            type="number" 
            value={springConstant} 
            onChange={(e) => setSpringConstant(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Analyse anzeigen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Maximale Geschwindigkeit (am Seilende):</h5>
            <div className="formula-box">
              v = √(2gh) = √(2×{g}×{ropeLength}) = {calculateMaxVelocity().toFixed(2)} m/s
            </div>
            
            <h5>b) Maximale Ausdehnung:</h5>
            <div className="formula-box">
              x = mg/k + √(mgl/k) = {((mass * g) / springConstant).toFixed(2)} + {Math.sqrt((mass * g * ropeLength) / springConstant).toFixed(2)} = {calculateMaxExtension().toFixed(2)} m
            </div>
            
            <h5>c) Gesamtenergie:</h5>
            <div className="formula-box">
              E = mg(l + x) = {mass}×{g}×{(ropeLength + calculateMaxExtension()).toFixed(2)} = {calculateTotalEnergy().toFixed(0)} J
            </div>
          </div>
        )}
        
        <div className="visualization">
          <ElasticRopeVisualization 
            mass={mass} 
            ropeLength={ropeLength} 
            maxExtension={calculateMaxExtension()} 
            phase={phase}
          />
        </div>
      </div>
    </div>
  )
}

function ElasticRopeVisualization({ mass, ropeLength, maxExtension, phase }) {
  const phases = ['Start', 'Freier Fall', 'Seil spannt sich', 'Max. Ausdehnung']
  const positions = [20, 20 + ropeLength * 2, 20 + ropeLength * 2 + maxExtension * 1.5, 20 + ropeLength * 2]
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Bungee-Sprung Simulation</h5>
      
      <svg width="300" height="250" style={{ background: '#f0f8ff', borderRadius: '10px' }}>
        {/* Bridge */}
        <rect x="100" y="10" width="100" height="10" fill="#8B4513" />
        
        {/* Rope */}
        {phase >= 2 && (
          <path 
            d={`M 150 20 Q ${150 + Math.sin(phase * 2) * 10} ${20 + ropeLength + (phase >= 3 ? maxExtension * 1.5 : 0)} 150 ${20 + ropeLength * 2 + (phase >= 3 ? maxExtension * 1.5 : 0)}`}
            stroke="#8B4513" 
            strokeWidth="3" 
            fill="none"
          />
        )}
        
        {/* Person/Mass */}
        <circle 
          cx="150" 
          cy={positions[phase]} 
          r={Math.max(8, Math.min(15, mass / 10))} 
          fill="#FF6347"
        />
        
        {/* Velocity arrow */}
        {phase === 1 && (
          <line 
            x1="150" 
            y1={positions[phase] + 15} 
            x2="150" 
            y2={positions[phase] + 35} 
            stroke="#FF0000" 
            strokeWidth="3" 
            markerEnd="url(#arrowhead)"
          />
        )}
        
        {/* Phase indicator */}
        <text x="150" y="240" textAnchor="middle" fontSize="12" fontWeight="bold">
          Phase: {phases[phase]}
        </text>
        
        {/* Energy indication */}
        <text x="20" y="30" fontSize="10" fill="#000">
          {phase === 0 && 'Epot = max'}
          {phase === 1 && 'Epot → Ekin'}
          {phase === 2 && 'Ekin → Efeder'}
          {phase === 3 && 'Efeder = max'}
        </text>
        
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#FF0000" />
          </marker>
        </defs>
      </svg>
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
  const [mass1, setMass1] = useState(2)
  const [temp1, setTemp1] = useState(80)
  const [mass2, setMass2] = useState(3)
  const [temp2, setTemp2] = useState(20)
  const [showSolution, setShowSolution] = useState(false)
  
  const c = 4186 // Spezifische Wärmekapazität von Wasser in J/(kg·K)
  
  const calculateMixedTemperature = () => {
    // Energieerhaltung: m1*c*(T1-Tmix) = m2*c*(Tmix-T2)
    // Tmix = (m1*T1 + m2*T2)/(m1 + m2)
    return (mass1 * temp1 + mass2 * temp2) / (mass1 + mass2)
  }
  
  const calculateEnergyTransfer = () => {
    const tmix = calculateMixedTemperature()
    return mass1 * c * (temp1 - tmix) // Energie, die warmes Wasser abgibt
  }
  
  return (
    <div className="problem-card">
      <h4>7) Wasser mischen</h4>
      <p>Temperaturausgleich zwischen verschiedenen Wassermengen.</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Masse warmes Wasser (kg):</label>
          <input 
            type="number" 
            step="0.1"
            value={mass1} 
            onChange={(e) => setMass1(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Temperatur warmes Wasser (°C):</label>
          <input 
            type="number" 
            value={temp1} 
            onChange={(e) => setTemp1(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Masse kaltes Wasser (kg):</label>
          <input 
            type="number" 
            step="0.1"
            value={mass2} 
            onChange={(e) => setMass2(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Temperatur kaltes Wasser (°C):</label>
          <input 
            type="number" 
            value={temp2} 
            onChange={(e) => setTemp2(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Mischtemperatur berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Mischtemperatur:</h5>
            <div className="formula-box">
              T<sub>mix</sub> = (m₁T₁ + m₂T₂)/(m₁ + m₂) = ({mass1}×{temp1} + {mass2}×{temp2})/({mass1} + {mass2}) = {calculateMixedTemperature().toFixed(1)}°C
            </div>
            
            <h5>b) Übertragene Wärmeenergie:</h5>
            <div className="formula-box">
              Q = m₁c(T₁ - T<sub>mix</sub>) = {mass1}×{c}×{(temp1 - calculateMixedTemperature()).toFixed(1)} = {(calculateEnergyTransfer() / 1000).toFixed(1)} kJ
            </div>
            
            <h5>c) Prüfung der Energieerhaltung:</h5>
            <div className="formula-box">
              Q<sub>abgegeben</sub> = Q<sub>aufgenommen</sub> = {(calculateEnergyTransfer() / 1000).toFixed(1)} kJ
            </div>
          </div>
        )}
        
        <div className="visualization">
          <WaterMixingVisualization 
            mass1={mass1} 
            temp1={temp1} 
            mass2={mass2} 
            temp2={temp2} 
            mixedTemp={calculateMixedTemperature()}
          />
        </div>
      </div>
    </div>
  )
}

function WaterMixingVisualization({ mass1, temp1, mass2, temp2, mixedTemp }) {
  const maxMass = 5
  const height1 = Math.min(mass1 / maxMass * 80, 80)
  const height2 = Math.min(mass2 / maxMass * 80, 80)
  
  // Color based on temperature
  const getColor = (temp) => {
    if (temp >= 60) return '#FF4500'
    if (temp >= 40) return '#FF6B47'
    if (temp >= 30) return '#87CEEB'
    return '#4682B4'
  }
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Wassermischung</h5>
      
      <svg width="350" height="200" style={{ background: '#f8f9fa', borderRadius: '10px' }}>
        {/* Container 1 (warm water) */}
        <rect x="30" y={120 - height1} width="40" height={height1} fill={getColor(temp1)} opacity="0.8" />
        <rect x="30" y="120" width="40" height="3" fill="#333" />
        <text x="50" y="140" textAnchor="middle" fontSize="10">{mass1}kg</text>
        <text x="50" y="155" textAnchor="middle" fontSize="10">{temp1}°C</text>
        
        {/* Container 2 (cold water) */}
        <rect x="100" y={120 - height2} width="40" height={height2} fill={getColor(temp2)} opacity="0.8" />
        <rect x="100" y="120" width="40" height="3" fill="#333" />
        <text x="120" y="140" textAnchor="middle" fontSize="10">{mass2}kg</text>
        <text x="120" y="155" textAnchor="middle" fontSize="10">{temp2}°C</text>
        
        {/* Arrow */}
        <path d="M 150 80 L 180 80" stroke="#333" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="165" y="75" textAnchor="middle" fontSize="12">mischen</text>
        
        {/* Mixed container */}
        <rect x="210" y={120 - (height1 + height2) / 2} width="50" height={(height1 + height2)} fill={getColor(mixedTemp)} opacity="0.8" />
        <rect x="210" y="120" width="50" height="3" fill="#333" />
        <text x="235" y="140" textAnchor="middle" fontSize="10">{(mass1 + mass2).toFixed(1)}kg</text>
        <text x="235" y="155" textAnchor="middle" fontSize="10">{mixedTemp.toFixed(1)}°C</text>
        
        {/* Temperature scale */}
        <line x1="300" y1="40" x2="300" y2="120" stroke="#333" strokeWidth="2" />
        <text x="305" y="45" fontSize="8">100°C</text>
        <text x="305" y="80" fontSize="8">50°C</text>
        <text x="305" y="125" fontSize="8">0°C</text>
        
        {/* Labels */}
        <text x="50" y="30" textAnchor="middle" fontSize="12" fontWeight="bold">Warmes Wasser</text>
        <text x="120" y="30" textAnchor="middle" fontSize="12" fontWeight="bold">Kaltes Wasser</text>
        <text x="235" y="30" textAnchor="middle" fontSize="12" fontWeight="bold">Mischung</text>
        
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#333"/>
          </marker>
        </defs>
      </svg>
    </div>
  )
}

function SphereHeatingProblem() {
  const [radius, setRadius] = useState(0.1)
  const [intensity, setIntensity] = useState(50)
  const [initialTemp, setInitialTemp] = useState(20)
  const [time, setTime] = useState(60)
  const [showSolution, setShowSolution] = useState(false)
  
  const rho = 2700 // Dichte Aluminium in kg/m³
  const c = 900    // Spezifische Wärmekapazität Aluminium in J/(kg·K)
  const sigma = 5.67e-8 // Stefan-Boltzmann-Konstante
  
  const calculateSphereVolume = () => {
    return (4/3) * Math.PI * Math.pow(radius, 3)
  }
  
  const calculateSphereMass = () => {
    return rho * calculateSphereVolume()
  }
  
  const calculateSurfaceArea = () => {
    return 4 * Math.PI * Math.pow(radius, 2)
  }
  
  const calculateAbsorbedPower = () => {
    return intensity * calculateSurfaceArea()
  }
  
  const calculateTemperatureRise = () => {
    const energy = calculateAbsorbedPower() * time
    const mass = calculateSphereMass()
    return energy / (mass * c)
  }
  
  const calculateFinalTemp = () => {
    return initialTemp + calculateTemperatureRise()
  }
  
  const calculateRadiatedPower = (temp) => {
    const tempK = temp + 273.15
    return sigma * calculateSurfaceArea() * Math.pow(tempK, 4)
  }
  
  return (
    <div className="problem-card">
      <h4>8) Kugelerwärmung</h4>
      <p>Temperaturanstieg durch Strahlung: I=50 W/m², T=20°C</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Kugelradius (m):</label>
          <input 
            type="number" 
            step="0.01"
            value={radius} 
            onChange={(e) => setRadius(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Strahlungsintensität (W/m²):</label>
          <input 
            type="number" 
            value={intensity} 
            onChange={(e) => setIntensity(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Anfangstemperatur (°C):</label>
          <input 
            type="number" 
            value={initialTemp} 
            onChange={(e) => setInitialTemp(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Bestrahlungszeit (s):</label>
          <input 
            type="number" 
            value={time} 
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Erwärmung berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Oberfläche und Masse:</h5>
            <div className="formula-box">
              A = 4πr² = 4π×{radius}² = {calculateSurfaceArea().toFixed(4)} m²<br/>
              m = ρV = {rho}×{calculateSphereVolume().toFixed(6)} = {calculateSphereMass().toFixed(3)} kg
            </div>
            
            <h5>b) Absorbierte Leistung:</h5>
            <div className="formula-box">
              P = I×A = {intensity}×{calculateSurfaceArea().toFixed(4)} = {calculateAbsorbedPower().toFixed(3)} W
            </div>
            
            <h5>c) Temperaturanstieg:</h5>
            <div className="formula-box">
              ΔT = Q/(mc) = ({calculateAbsorbedPower().toFixed(3)}×{time})/({calculateSphereMass().toFixed(3)}×{c}) = {calculateTemperatureRise().toFixed(2)} K
            </div>
            
            <h5>d) Endtemperatur:</h5>
            <div className="formula-box">
              T<sub>final</sub> = {initialTemp} + {calculateTemperatureRise().toFixed(2)} = {calculateFinalTemp().toFixed(2)}°C
            </div>
            
            <h5>e) Wärmeabstrahlung bei Endtemperatur:</h5>
            <div className="formula-box">
              P<sub>rad</sub> = σAT⁴ = {sigma.toExponential(2)}×{calculateSurfaceArea().toFixed(4)}×{(calculateFinalTemp() + 273.15).toFixed(0)}⁴ = {calculateRadiatedPower(calculateFinalTemp()).toFixed(3)} W
            </div>
          </div>
        )}
        
        <div className="visualization">
          <SphereHeatingVisualization 
            radius={radius}
            intensity={intensity}
            initialTemp={initialTemp}
            finalTemp={calculateFinalTemp()}
            absorbedPower={calculateAbsorbedPower()}
          />
        </div>
      </div>
    </div>
  )
}

function SphereHeatingVisualization({ radius, intensity, initialTemp, finalTemp, absorbedPower }) {
  const maxRadius = 0.2
  const displayRadius = Math.max(20, Math.min(60, (radius / maxRadius) * 60))
  
  // Color based on temperature
  const getTemperatureColor = (temp) => {
    if (temp >= 100) return '#FF0000'
    if (temp >= 80) return '#FF4500'
    if (temp >= 60) return '#FF6B47'
    if (temp >= 40) return '#FFA500'
    if (temp >= 20) return '#FFD700'
    return '#87CEEB'
  }
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Strahlungserwärmung</h5>
      
      <svg width="350" height="200" style={{ background: '#000011', borderRadius: '10px' }}>
        {/* Sun/radiation source */}
        <circle cx="50" cy="50" r="25" fill="#FFD700" />
        {[...Array(8)].map((_, i) => (
          <line 
            key={i}
            x1={50 + 35 * Math.cos(i * Math.PI / 4)} 
            y1={50 + 35 * Math.sin(i * Math.PI / 4)}
            x2={50 + 45 * Math.cos(i * Math.PI / 4)} 
            y2={50 + 45 * Math.sin(i * Math.PI / 4)}
            stroke="#FFD700" 
            strokeWidth="3"
          />
        ))}
        
        {/* Radiation rays */}
        {[...Array(5)].map((_, i) => (
          <line 
            key={i}
            x1="80" 
            y1={40 + i * 5}
            x2="150" 
            y2={90 + i * 5}
            stroke="#FFFF00" 
            strokeWidth="2" 
            opacity="0.6"
          />
        ))}
        
        {/* Sphere before heating */}
        <circle 
          cx="180" 
          cy="100" 
          r={displayRadius} 
          fill={getTemperatureColor(initialTemp)} 
          stroke="#333" 
          strokeWidth="2"
        />
        <text x="180" y="160" textAnchor="middle" fontSize="10">Vor: {initialTemp.toFixed(1)}°C</text>
        
        {/* Arrow */}
        <path d="M 230 100 L 260 100" stroke="#FFF" strokeWidth="3" markerEnd="url(#whiteArrow)" />
        
        {/* Sphere after heating */}
        <circle 
          cx="290" 
          cy="100" 
          r={displayRadius} 
          fill={getTemperatureColor(finalTemp)} 
          stroke="#333" 
          strokeWidth="2"
        />
        <text x="290" y="160" textAnchor="middle" fontSize="10">Nach: {finalTemp.toFixed(1)}°C</text>
        
        {/* Power indicator */}
        <text x="50" y="170" textAnchor="middle" fontSize="10" fill="#FFF">
          {intensity} W/m²
        </text>
        
        <text x="290" y="180" textAnchor="middle" fontSize="10" fill="#FFF">
          P = {absorbedPower.toFixed(2)} W
        </text>
        
        {/* Temperature scale */}
        <rect x="20" y="20" width="10" height="80" fill="url(#tempGradient)" />
        <text x="15" y="25" fontSize="8" fill="#FFF">100°C</text>
        <text x="15" y="105" fontSize="8" fill="#FFF">0°C</text>
        
        <defs>
          <marker id="whiteArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#FFF"/>
          </marker>
          <linearGradient id="tempGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="20%" stopColor="#FF4500" />
            <stop offset="40%" stopColor="#FFA500" />
            <stop offset="60%" stopColor="#FFD700" />
            <stop offset="80%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4682B4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default EnergyAndWork