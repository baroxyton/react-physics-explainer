import { useState } from 'react'

function Electrostatics() {
  return (
    <div className="section">
      <h2>6. Elektrostatik</h2>
      
      <DefinitionsSection />
      <ProblemsSection />
    </div>
  )
}

function DefinitionsSection() {
  return (
    <div className="subsection">
      <h3>6.1 Definitionen und Formeln</h3>
      
      <div className="definitions-grid">
        <div className="definition-card">
          <h4>Elektrische Feldstärke</h4>
          <div className="formula-box">
            E⃗ = F⃗/q
          </div>
          <p>Die elektrische Feldstärke ist die Kraft pro Ladungseinheit.</p>
          <p><strong>Einheit:</strong> N/C = V/m</p>
        </div>
        
        <div className="definition-card">
          <h4>Elektrisches Potential</h4>
          <div className="formula-box">
            φ = W/q
          </div>
          <p>Das elektrische Potential ist die potentielle Energie pro Ladungseinheit.</p>
          <p><strong>Einheit:</strong> V (Volt)</p>
        </div>
        
        <div className="definition-card">
          <h4>Elektrische Spannung</h4>
          <div className="formula-box">
            U = φ₁ - φ₂ = ΔW/q
          </div>
          <p>Die Spannung ist die Potentialdifferenz zwischen zwei Punkten.</p>
          <p><strong>Einheit:</strong> V (Volt)</p>
        </div>
        
        <div className="definition-card">
          <h4>Kapazität</h4>
          <div className="formula-box">
            C = Q/U
          </div>
          <p>Die Kapazität gibt an, wie viel Ladung bei einer bestimmten Spannung gespeichert wird.</p>
          <p><strong>Einheit:</strong> F (Farad)</p>
        </div>
        
        <div className="definition-card">
          <h4>Coulomb-Kraft</h4>
          <div className="formula-box">
            F = k × (Q₁Q₂)/r²
          </div>
          <p>Kraft zwischen zwei Punktladungen.</p>
          <p><strong>k = 8.99 × 10⁹ Nm²/C²</strong></p>
        </div>
        
        <div className="definition-card">
          <h4>Elektrische Energie</h4>
          <div className="formula-box">
            W = q × U = ½CU²
          </div>
          <p>Energie, die in einem elektrischen Feld gespeichert ist.</p>
        </div>
        
        <div className="definition-card">
          <h4>Plattenkondensator</h4>
          <div className="formula-box">
            E = U/d<br/>
            C = ε₀εᵣA/d
          </div>
          <p>Homogenes Feld zwischen parallelen Platten.</p>
          <p><strong>ε₀ = 8.85 × 10⁻¹² F/m</strong></p>
        </div>
      </div>
    </div>
  )
}

function ProblemsSection() {
  return (
    <div className="subsection">
      <h3>6.2 Aufgaben</h3>
      
      <ThreeChargesProblem />
      <PowerOutletFieldProblem />
      <VoltageDividerProblem />
      <ElectronAccelerationProblem />
      <ProtonAccelerationProblem />
      <ElectronThroughCapacitorsProblem />
    </div>
  )
}

function ThreeChargesProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [Q1, setQ1] = useState(-3.0) // μC
  const [Q2, setQ2] = useState(5.0)  // μC
  const [Q3, setQ3] = useState(5.0)  // μC
  const [d13, setD13] = useState(0.10) // m
  const [d32, setD32] = useState(0.20) // m
  const [angle, setAngle] = useState(90) // degrees
  
  const k = 8.99e9 // Nm²/C²
  
  const calculateForces = () => {
    const Q1_SI = Q1 * 1e-6 // Convert μC to C
    const Q2_SI = Q2 * 1e-6
    const Q3_SI = Q3 * 1e-6
    
    // Force from Q1 on Q3
    const F13 = k * Math.abs(Q1_SI * Q3_SI) / (d13 * d13)
    const F13_direction = Q1 * Q3 > 0 ? 'repulsive' : 'attractive'
    
    // Force from Q2 on Q3
    const F23 = k * Math.abs(Q2_SI * Q3_SI) / (d32 * d32)
    const F23_direction = Q2 * Q3 > 0 ? 'repulsive' : 'attractive'
    
    // Vector components (assuming Q3 at origin, Q1 at distance d13, Q2 at angle)
    const angleRad = angle * Math.PI / 180
    
    let F13_x = F13 * (Q1 * Q3 < 0 ? 1 : -1) // Along x-axis from Q1 to Q3
    let F13_y = 0
    
    let F23_x = F23 * Math.cos(angleRad) * (Q2 * Q3 < 0 ? 1 : -1)
    let F23_y = F23 * Math.sin(angleRad) * (Q2 * Q3 < 0 ? 1 : -1)
    
    const F_total_x = F13_x + F23_x
    const F_total_y = F13_y + F23_y
    const F_total = Math.sqrt(F_total_x * F_total_x + F_total_y * F_total_y)
    
    return {
      F13,
      F23,
      F13_direction,
      F23_direction,
      F_total_x,
      F_total_y,
      F_total,
      angle_result: Math.atan2(F_total_y, F_total_x) * 180 / Math.PI
    }
  }
  
  const forces = calculateForces()
  
  return (
    <div className="problem-card">
      <h4>1) Drei Ladungen im Raum</h4>
      <p>Berechnen Sie die Kraft, welche die Kugeln 1 und 2 auf die Kugel 3 ausüben.</p>
      
      <div className="interactive-calculator">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <h5>Ladung 1</h5>
            <div className="input-group">
              <label>Q₁ (μC):</label>
              <input 
                type="number" 
                step="0.1"
                value={Q1} 
                onChange={(e) => setQ1(Number(e.target.value))}
              />
            </div>
          </div>
          
          <div>
            <h5>Ladung 2</h5>
            <div className="input-group">
              <label>Q₂ (μC):</label>
              <input 
                type="number" 
                step="0.1"
                value={Q2} 
                onChange={(e) => setQ2(Number(e.target.value))}
              />
            </div>
          </div>
          
          <div>
            <h5>Ladung 3</h5>
            <div className="input-group">
              <label>Q₃ (μC):</label>
              <input 
                type="number" 
                step="0.1"
                value={Q3} 
                onChange={(e) => setQ3(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <div className="input-group">
            <label>Abstand d₁₃ (m):</label>
            <input 
              type="number" 
              step="0.01"
              value={d13} 
              onChange={(e) => setD13(Number(e.target.value))}
            />
          </div>
          
          <div className="input-group">
            <label>Abstand d₃₂ (m):</label>
            <input 
              type="number" 
              step="0.01"
              value={d32} 
              onChange={(e) => setD32(Number(e.target.value))}
            />
          </div>
          
          <div className="input-group">
            <label>Winkel α (°):</label>
            <input 
              type="number" 
              value={angle} 
              onChange={(e) => setAngle(Number(e.target.value))}
            />
          </div>
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Kräfte berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>Einzelkräfte:</h5>
            <div className="formula-box">
              F₁₃ = k|Q₁Q₃|/d₁₃² = {forces.F13.toFixed(3)} N ({forces.F13_direction})<br/>
              F₂₃ = k|Q₂Q₃|/d₃₂² = {forces.F23.toFixed(3)} N ({forces.F23_direction})
            </div>
            
            <h5>Gesamtkraft auf Q₃:</h5>
            <div className="formula-box">
              Fₓ = {forces.F_total_x.toFixed(3)} N<br/>
              Fᵧ = {forces.F_total_y.toFixed(3)} N<br/>
              F_total = {forces.F_total.toFixed(3)} N<br/>
              Richtung: {forces.angle_result.toFixed(1)}°
            </div>
          </div>
        )}
      </div>
      
      <div className="visualization">
        <ChargeVisualization 
          Q1={Q1} Q2={Q2} Q3={Q3} 
          d13={d13} d32={d32} 
          angle={angle}
          forces={forces}
        />
      </div>
    </div>
  )
}

function ChargeVisualization({ Q1, Q2, Q3, d13, d32, angle, forces }) {
  const scale = 200 // Scale for visualization
  const centerX = 150
  const centerY = 100
  
  // Positions
  const Q3_x = centerX
  const Q3_y = centerY
  
  const Q1_x = centerX - d13 * scale
  const Q1_y = centerY
  
  const angleRad = angle * Math.PI / 180
  const Q2_x = centerX + d32 * scale * Math.cos(angleRad)
  const Q2_y = centerY - d32 * scale * Math.sin(angleRad)
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Ladungsanordnung</h5>
      
      <svg width="300" height="200" style={{ background: '#f8f9fa', borderRadius: '10px' }}>
        {/* Grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Distance lines */}
        <line x1={Q1_x} y1={Q1_y} x2={Q3_x} y2={Q3_y} stroke="#999" strokeWidth="1" strokeDasharray="5,5"/>
        <line x1={Q2_x} y1={Q2_y} x2={Q3_x} y2={Q3_y} stroke="#999" strokeWidth="1" strokeDasharray="5,5"/>
        
        {/* Charges */}
        <circle cx={Q1_x} cy={Q1_y} r="15" fill={Q1 > 0 ? "#e74c3c" : "#3498db"} stroke="#000" strokeWidth="2"/>
        <circle cx={Q2_x} cy={Q2_y} r="15" fill={Q2 > 0 ? "#e74c3c" : "#3498db"} stroke="#000" strokeWidth="2"/>
        <circle cx={Q3_x} cy={Q3_y} r="15" fill={Q3 > 0 ? "#e74c3c" : "#3498db"} stroke="#000" strokeWidth="2"/>
        
        {/* Labels */}
        <text x={Q1_x} y={Q1_y + 5} textAnchor="middle" fontSize="12" fill="white">Q₁</text>
        <text x={Q2_x} y={Q2_y + 5} textAnchor="middle" fontSize="12" fill="white">Q₂</text>
        <text x={Q3_x} y={Q3_y + 5} textAnchor="middle" fontSize="12" fill="white">Q₃</text>
        
        {/* Force arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
          </marker>
        </defs>
        
        {/* Force from Q1 to Q3 */}
        <line 
          x1={Q3_x} y1={Q3_y} 
          x2={Q3_x + 30 * Math.sign(forces.F_total_x)} 
          y2={Q3_y} 
          stroke="#e67e22" 
          strokeWidth="3" 
          markerEnd="url(#arrowhead)"
        />
        
        {/* Total force vector */}
        <line 
          x1={Q3_x} y1={Q3_y} 
          x2={Q3_x + 40 * Math.cos(forces.angle_result * Math.PI / 180)} 
          y2={Q3_y - 40 * Math.sin(forces.angle_result * Math.PI / 180)} 
          stroke="#27ae60" 
          strokeWidth="4" 
          markerEnd="url(#arrowhead)"
        />
        
        {/* Distance labels */}
        <text x={(Q1_x + Q3_x) / 2} y={(Q1_y + Q3_y) / 2 - 10} textAnchor="middle" fontSize="10">d₁₃</text>
        <text x={(Q2_x + Q3_x) / 2} y={(Q2_y + Q3_y) / 2 - 10} textAnchor="middle" fontSize="10">d₃₂</text>
      </svg>
      
      <div style={{ marginTop: '1rem', fontSize: '12px' }}>
        <span style={{ color: '#e74c3c' }}>● Positive Ladung</span> | 
        <span style={{ color: '#3498db' }}> ● Negative Ladung</span> | 
        <span style={{ color: '#27ae60' }}> → Gesamtkraft</span>
      </div>
    </div>
  )
}

function PowerOutletFieldProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [voltage, setVoltage] = useState(230) // V
  const [distance, setDistance] = useState(0.008) // m, typical distance between contacts
  
  const calculateField = () => {
    return voltage / distance
  }
  
  const calculateForceOnElectron = () => {
    const e = 1.602e-19 // Elementarladung in C
    return calculateField() * e
  }
  
  return (
    <div className="problem-card">
      <h4>3) Feldstärke in der Steckdose</h4>
      <p>Berechnung der elektrischen Feldstärke zwischen den Polen einer Steckdose.</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Spannung (V):</label>
          <input 
            type="number" 
            value={voltage} 
            onChange={(e) => setVoltage(Number(e.target.value))}
          />
        </div>
        
        <div className="input-group">
          <label>Abstand zwischen Polen (mm):</label>
          <input 
            type="number" 
            step="0.1"
            value={distance * 1000} 
            onChange={(e) => setDistance(Number(e.target.value) / 1000)}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Feldstärke berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>a) Elektrische Feldstärke:</h5>
            <div className="formula-box">
              E = U/d = {voltage} V / {(distance * 1000).toFixed(1)} mm = {(calculateField() / 1000).toFixed(0)} kV/m
            </div>
            
            <h5>b) Kraft auf ein Elektron:</h5>
            <div className="formula-box">
              F = eE = 1.602×10⁻¹⁹ C × {(calculateField() / 1000).toFixed(0)} kV/m = {calculateForceOnElectron().toExponential(2)} N
            </div>
            
            <p><strong>Warnung:</strong> Diese hohe Feldstärke erklärt, warum Steckdosen gefährlich sind!</p>
          </div>
        )}
      </div>
    </div>
  )
}

function VoltageDividerProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const U0 = 7 // V
  
  return (
    <div className="problem-card">
      <h4>4) Spannungsteiler</h4>
      <p>U₀ = 7 V, homogenes Feld zwischen parallelen Platten</p>
      
      <div className="visualization">
        <VoltageDividerVisualization U0={U0} />
      </div>
      
      <button 
        className="calculate-button"
        onClick={() => setShowSolution(!showSolution)}
      >
        {showSolution ? 'Lösungen verbergen' : 'Spannungen berechnen'}
      </button>
      
      {showSolution && (
        <div className="result-box">
          <h5>Spannungen im homogenen Feld:</h5>
          <div className="formula-box">
            a) U_AB = (1mm/7mm) × 7V = 1.0 V<br/>
            b) U_AC = (6mm/7mm) × 7V = 6.0 V<br/>
            c) U_CD = (1mm/7mm) × 7V = 1.0 V<br/>
            d) U_AD = U_AC + U_CD = 7.0 V
          </div>
        </div>
      )}
    </div>
  )
}

function VoltageDividerVisualization({ U0 }) {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Spannungsteiler</h5>
      
      <svg width="300" height="150" style={{ background: '#f8f9fa', borderRadius: '10px' }}>
        {/* Plates */}
        <rect x="50" y="40" width="200" height="10" fill="#333" />
        <rect x="50" y="100" width="200" height="10" fill="#333" />
        
        {/* Field lines */}
        {[...Array(8)].map((_, i) => (
          <line 
            key={i}
            x1={70 + i * 20} 
            y1={50} 
            x2={70 + i * 20} 
            y2={100} 
            stroke="#3498db" 
            strokeWidth="1"
          />
        ))}
        
        {/* Points */}
        <circle cx="70" cy="75" r="3" fill="#e74c3c" />
        <circle cx="90" cy="75" r="3" fill="#e74c3c" />
        <circle cx="170" cy="75" r="3" fill="#e74c3c" />
        <circle cx="190" cy="75" r="3" fill="#e74c3c" />
        
        {/* Labels */}
        <text x="70" y="90" textAnchor="middle" fontSize="12">A</text>
        <text x="90" y="90" textAnchor="middle" fontSize="12">B</text>
        <text x="170" y="90" textAnchor="middle" fontSize="12">C</text>
        <text x="190" y="90" textAnchor="middle" fontSize="12">D</text>
        
        {/* Distances */}
        <text x="80" y="130" textAnchor="middle" fontSize="10">1mm</text>
        <text x="130" y="130" textAnchor="middle" fontSize="10">5mm</text>
        <text x="180" y="130" textAnchor="middle" fontSize="10">1mm</text>
        
        {/* Voltage */}
        <text x="30" y="55" textAnchor="middle" fontSize="12">+{U0}V</text>
        <text x="30" y="105" textAnchor="middle" fontSize="12">0V</text>
      </svg>
    </div>
  )
}

function ElectronAccelerationProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [voltage, setVoltage] = useState(7)
  
  const me = 9.109e-31 // kg
  const e = 1.602e-19 // C
  
  const calculateVelocity = () => {
    // eU = ½mv²
    return Math.sqrt(2 * e * voltage / me)
  }
  
  return (
    <div className="problem-card">
      <h4>5) Elektronenbeschleunigung</h4>
      <p>Ein Elektron wird bei B losgelassen und fliegt bei A vorbei.</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Spannung U₀ (V):</label>
          <input 
            type="number" 
            value={voltage} 
            onChange={(e) => setVoltage(Number(e.target.value))}
          />
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Geschwindigkeit berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>Elektronengeschwindigkeit:</h5>
            <div className="formula-box">
              eU = ½mv²<br/>
              v = √(2eU/m) = √(2×{e.toExponential(3)}×{voltage}/{me.toExponential(3)})<br/>
              v = {(calculateVelocity() / 1e6).toFixed(2)} × 10⁶ m/s
            </div>
            <p>Das Elektron erreicht etwa {(calculateVelocity() / (3e8) * 100).toFixed(1)}% der Lichtgeschwindigkeit!</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProtonAccelerationProblem() {
  return (
    <div className="problem-card">
      <h4>6) Protonenbeschleunigung (50 MV)</h4>
      <p>Relativistische Berechnung für hochenergetische Protonen.</p>
      
      <div className="result-box">
        <h5>Bei 50 MV wird das Proton relativistisch!</h5>
        <p>Klassische Formel: v = √(2eU/m) würde v &gt; c ergeben</p>
        <p>Relativistische Korrektur notwendig: E = mc² + eU</p>
      </div>
    </div>
  )
}

function ElectronThroughCapacitorsProblem() {
  return (
    <div className="problem-card">
      <h4>7) Elektron durch Kondensatoren</h4>
      <p>Kapazität: 5 mF, Spannung: 0.6 V, Ladung: 3.0 mC</p>
      
      <div className="visualization">
        <p>Elektronenbahnverfolgung durch Kondensatorfelder (wird implementiert)</p>
      </div>
    </div>
  )
}

export default Electrostatics