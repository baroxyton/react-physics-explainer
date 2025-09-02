import { useState } from 'react'

function Momentum() {
  return (
    <div className="section">
      <h2>5. Impuls</h2>
      
      <DefinitionsSection />
      <ProblemsSection />
    </div>
  )
}

function DefinitionsSection() {
  return (
    <div className="subsection">
      <h3>5.1 Definition und Erhaltung</h3>
      
      <div className="definitions-grid">
        <div className="definition-card">
          <h4>Definition Impuls</h4>
          <div className="formula-box">
            p⃗ = m × v⃗
          </div>
          <p>Der Impuls ist das Produkt aus Masse und Geschwindigkeit eines Körpers.</p>
          <p><strong>Einheit:</strong> kg⋅m/s = N⋅s</p>
        </div>
        
        <div className="definition-card">
          <h4>Impulserhaltung</h4>
          <div className="formula-box">
            Σp⃗<sub>vorher</sub> = Σp⃗<sub>nachher</sub>
          </div>
          <p>In einem abgeschlossenen System bleibt der Gesamtimpuls konstant.</p>
        </div>
        
        <div className="definition-card">
          <h4>Kraft und Impuls</h4>
          <div className="formula-box">
            F⃗ = dp⃗/dt = m × a⃗
          </div>
          <p>Kraft ist die zeitliche Änderung des Impulses.</p>
        </div>
        
        <div className="definition-card">
          <h4>Elastischer Stoß</h4>
          <div className="formula-box">
            Impuls UND kinetische Energie bleiben erhalten
          </div>
          <p>Bei elastischen Stößen wird keine Energie in Wärme umgewandelt.</p>
        </div>
        
        <div className="definition-card">
          <h4>Unelastischer Stoß</h4>
          <div className="formula-box">
            Nur Impuls bleibt erhalten
          </div>
          <p>Kinetische Energie wird teilweise in andere Energieformen umgewandelt.</p>
        </div>
        
        <div className="definition-card">
          <h4>Vollkommen unelastischer Stoß</h4>
          <div className="formula-box">
            v₁ = v₂ nach dem Stoß
          </div>
          <p>Die Körper bewegen sich nach dem Stoß gemeinsam weiter.</p>
        </div>
      </div>
    </div>
  )
}

function ProblemsSection() {
  return (
    <div className="subsection">
      <h3>5.2 Aufgaben</h3>
      
      <TwoBallCollisionProblem />
      <DroppedBallMomentumProblem />
      <PendulumCollisionProblem />
      <PartialElasticCollisionProblem />
    </div>
  )
}

function TwoBallCollisionProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [m1, setM1] = useState(22)
  const [m2, setM2] = useState(0.6)
  const [v1, setV1] = useState(0.1)
  const [v2, setV2] = useState(15.4)
  
  const calculateElasticCollision = () => {
    // For elastic collision:
    // v1' = ((m1-m2)v1 + 2m2v2) / (m1+m2)
    // v2' = ((m2-m1)v2 + 2m1v1) / (m1+m2)
    
    const v1Final = ((m1 - m2) * v1 + 2 * m2 * v2) / (m1 + m2)
    const v2Final = ((m2 - m1) * v2 + 2 * m1 * v1) / (m1 + m2)
    
    const p1Initial = m1 * v1
    const p2Initial = m2 * v2
    const p1Final = m1 * v1Final
    const p2Final = m2 * v2Final
    
    return {
      v1Final,
      v2Final,
      p1Initial,
      p2Initial,
      p1Final,
      p2Final,
      totalMomentumBefore: p1Initial + p2Initial,
      totalMomentumAfter: p1Final + p2Final
    }
  }
  
  const result = calculateElasticCollision()
  
  return (
    <div className="problem-card">
      <h4>1. Zwei Kugeln prallen aufeinander</h4>
      <p>Vollständig elastischer Stoß entlang einer Geraden.</p>
      <p><strong>Angaben:</strong> v₁=0.1 m/s, v₂=15.4 m/s, m₁=22 kg, m₂=0.6 kg</p>
      
      <div className="interactive-calculator">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
          <div>
            <h5>Kugel 1</h5>
            <div className="input-group">
              <label>Masse m₁ (kg):</label>
              <input 
                type="number" 
                value={m1} 
                onChange={(e) => setM1(Number(e.target.value))}
              />
            </div>
            <div className="input-group">
              <label>Geschwindigkeit v₁ (m/s):</label>
              <input 
                type="number" 
                step="0.1"
                value={v1} 
                onChange={(e) => setV1(Number(e.target.value))}
              />
            </div>
          </div>
          
          <div>
            <h5>Kugel 2</h5>
            <div className="input-group">
              <label>Masse m₂ (kg):</label>
              <input 
                type="number" 
                value={m2} 
                onChange={(e) => setM2(Number(e.target.value))}
              />
            </div>
            <div className="input-group">
              <label>Geschwindigkeit v₂ (m/s):</label>
              <input 
                type="number" 
                step="0.1"
                value={v2} 
                onChange={(e) => setV2(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Lösung verbergen' : 'Elastischen Stoß berechnen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>Vor dem Stoß:</h5>
            <div className="formula-box">
              p₁ = {m1} × {v1} = {result.p1Initial.toFixed(2)} kg⋅m/s<br/>
              p₂ = {m2} × {v2} = {result.p2Initial.toFixed(2)} kg⋅m/s<br/>
              p_gesamt = {result.totalMomentumBefore.toFixed(2)} kg⋅m/s
            </div>
            
            <h5>Nach dem Stoß:</h5>
            <div className="formula-box">
              v₁' = {result.v1Final.toFixed(2)} m/s<br/>
              v₂' = {result.v2Final.toFixed(2)} m/s<br/>
              p₁' = {result.p1Final.toFixed(2)} kg⋅m/s<br/>
              p₂' = {result.p2Final.toFixed(2)} kg⋅m/s<br/>
              p_gesamt = {result.totalMomentumAfter.toFixed(2)} kg⋅m/s
            </div>
            
            <p><strong>Impulserhaltung bestätigt:</strong> {Math.abs(result.totalMomentumBefore - result.totalMomentumAfter) < 0.01 ? '✓' : '✗'}</p>
          </div>
        )}
      </div>
      
      <div className="visualization">
        <CollisionVisualization 
          m1={m1} 
          m2={m2} 
          v1Before={v1} 
          v2Before={v2}
          v1After={result.v1Final}
          v2After={result.v2Final}
        />
      </div>
    </div>
  )
}

function CollisionVisualization({ m1, m2, v1Before, v2Before, v1After, v2After }) {
  const [showAfter, setShowAfter] = useState(false)
  
  const scale1 = Math.sqrt(m1) * 5 // Scale ball size with sqrt of mass
  const scale2 = Math.sqrt(m2) * 5
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Stoß-Visualisierung</h5>
      <button 
        onClick={() => setShowAfter(!showAfter)}
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem', background: '#9b59b6', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {showAfter ? 'Vor dem Stoß' : 'Nach dem Stoß'}
      </button>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', background: '#f0f0f0', borderRadius: '10px' }}>
        <div style={{ position: 'relative', width: '400px', height: '60px' }}>
          {/* Ball 1 */}
          <div style={{
            position: 'absolute',
            left: showAfter ? '300px' : '50px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: `${scale1}px`,
            height: `${scale1}px`,
            borderRadius: '50%',
            background: '#e74c3c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '10px',
            transition: 'left 1s ease'
          }}>
            {m1}kg
          </div>
          
          {/* Ball 2 */}
          <div style={{
            position: 'absolute',
            left: showAfter ? '100px' : '250px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: `${scale2}px`,
            height: `${scale2}px`,
            borderRadius: '50%',
            background: '#3498db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '10px',
            transition: 'left 1s ease'
          }}>
            {m2}kg
          </div>
          
          {/* Velocity arrows */}
          <div style={{ position: 'absolute', top: '80px', left: '0', right: '0' }}>
            <span style={{ position: 'absolute', left: '50px', fontSize: '12px' }}>
              v₁ = {showAfter ? v1After.toFixed(1) : v1Before.toFixed(1)} m/s
            </span>
            <span style={{ position: 'absolute', left: '250px', fontSize: '12px' }}>
              v₂ = {showAfter ? v2After.toFixed(1) : v2Before.toFixed(1)} m/s
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function DroppedBallMomentumProblem() {
  return (
    <div className="problem-card">
      <h4>2. Fallender Gummiball</h4>
      <p>Impulserhaltung beim Fallenlassen, Fallen, Aufprall und Springen eines Balls.</p>
      
      <div className="result-box">
        <h5>Impulsanalyse:</h5>
        <ul>
          <li><strong>Vor dem Fallenlassen:</strong> p = 0 (Ball ruht)</li>
          <li><strong>Während dem Fallen:</strong> p = mv (nach unten)</li>
          <li><strong>Nach dem Aufprall:</strong> p = mv (nach oben)</li>
          <li><strong>An der höchsten Stelle:</strong> p = 0 (Ball ruht kurz)</li>
        </ul>
        <p><strong>Impulserhaltung:</strong> Nur erfüllt, wenn das System Ball + Erde betrachtet wird!</p>
      </div>
      
      <div className="visualization">
        <BallDropVisualization />
      </div>
    </div>
  )
}

function BallDropVisualization() {
  const [phase, setPhase] = useState(0) // 0: start, 1: falling, 2: impact, 3: rising, 4: top
  
  const phases = ['Start', 'Fallend', 'Aufprall', 'Steigend', 'Höchster Punkt']
  const momentums = ['p = 0', 'p = mv ↓', 'Impulsübertrag', 'p = mv ↑', 'p = 0']
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Ball-Fall Simulation</h5>
      <button 
        onClick={() => setPhase((phase + 1) % 5)}
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem', background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Nächste Phase: {phases[(phase + 1) % 5]}
      </button>
      
      <div style={{ height: '200px', background: '#f0f0f0', borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          left: '50%',
          top: phase === 0 ? '20px' : phase === 1 ? '100px' : phase === 2 ? '170px' : phase === 3 ? '100px' : '20px',
          transform: 'translateX(-50%)',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: '#e67e22',
          transition: 'top 0.8s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px'
        }}>
          ●
        </div>
        
        {/* Ground */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '20px',
          background: '#8b4513'
        }}></div>
        
        <div style={{ position: 'absolute', bottom: '30px', left: '10px', right: '10px', textAlign: 'center' }}>
          <strong>Phase:</strong> {phases[phase]}<br/>
          <strong>Impuls:</strong> {momentums[phase]}
        </div>
      </div>
    </div>
  )
}

function PendulumCollisionProblem() {
  const [showSolution, setShowSolution] = useState(false)
  const [length, setLength] = useState(2.07)
  const [_m1, _setM1] = useState(1)
  const [_m2, _setM2] = useState(2) // m2 = 2*m1
  
  return (
    <div className="problem-card">
      <h4>3. Pendelstoß</h4>
      <p>Zwei Kugeln unterschiedlicher Massen sind an gleich langen Fäden aufgehängt.</p>
      <p><strong>Fadenlänge:</strong> {length} m</p>
      
      <div className="interactive-calculator">
        <div className="input-group">
          <label>Fadenlänge L (m):</label>
          <input 
            type="number" 
            step="0.01"
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        
        <h5>a) Geschwindigkeit vs. Auslenkung (Näherung für kleine Winkel)</h5>
        <div className="formula-box">
          v ≈ √(2gL) × sin(α/2) ≈ √(2gL) × (α/2) für kleine α
        </div>
        
        <PendulumAngleTable length={length} />
        
        <button 
          className="calculate-button"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? 'Stoßlösungen verbergen' : 'Stoßlösungen zeigen'}
        </button>
        
        {showSolution && (
          <div className="result-box">
            <h5>b) Allgemeine Stoßformeln (m₂ = 2m₁):</h5>
            <div className="formula-box">
              u₁ = ((m₁-m₂)v₁ + 2m₂v₂)/(m₁+m₂) = (v₁ - 4v₂)/3<br/>
              u₂ = ((m₂-m₁)v₂ + 2m₁v₁)/(m₁+m₂) = (2v₁ + v₂)/3
            </div>
            
            <h5>c) Spezielle Fälle:</h5>
            <ul>
              <li><strong>Schwere Masse steht still:</strong> u₂ = 0 → v₁ = -v₂/2</li>
              <li><strong>Leichte Masse steht still:</strong> u₁ = 0 → v₁ = 4v₂</li>
              <li><strong>Gleiche Geschwindigkeitsbeträge:</strong> |u₁| = |v₁| → v₂ = 0</li>
            </ul>
          </div>
        )}
      </div>
      
      <div className="visualization">
        <PendulumVisualization />
      </div>
    </div>
  )
}

function PendulumAngleTable({ length }) {
  const g = 9.81
  const angles = [1, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90]
  
  const calculateHeight = (angle) => length * (1 - Math.cos(angle * Math.PI / 180))
  const calculateVelocityExact = (angle) => Math.sqrt(2 * g * calculateHeight(angle))
  const calculateVelocityApprox = (angle) => Math.sqrt(2 * g * length) * Math.sin((angle * Math.PI / 180) / 2)
  
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f8f9fa' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>α (°)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>h (m)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>v exakt (m/s)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>v Näherung (m/s)</th>
          </tr>
        </thead>
        <tbody>
          {angles.map(angle => (
            <tr key={angle}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{angle}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{calculateHeight(angle).toFixed(3)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{calculateVelocityExact(angle).toFixed(3)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{calculateVelocityApprox(angle).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PendulumVisualization() {
  const [angle1, setAngle1] = useState(30)
  const [angle2, setAngle2] = useState(20)
  
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h5>Pendel-Kollision</h5>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Auslenkung Pendel 1: {angle1}°</label>
        <input 
          type="range" 
          min="0" 
          max="60" 
          value={angle1} 
          onChange={(e) => setAngle1(Number(e.target.value))}
          style={{ width: '200px', margin: '0 1rem' }}
        />
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <label>Auslenkung Pendel 2: {angle2}°</label>
        <input 
          type="range" 
          min="0" 
          max="60" 
          value={angle2} 
          onChange={(e) => setAngle2(Number(e.target.value))}
          style={{ width: '200px', margin: '0 1rem' }}
        />
      </div>
      
      <div style={{ height: '150px', background: '#f0f0f0', borderRadius: '10px', position: 'relative' }}>
        <svg width="100%" height="100%" viewBox="0 0 300 150">
          {/* Pendulum supports */}
          <line x1="100" y1="20" x2={100 + 60 * Math.sin(angle1 * Math.PI / 180)} y2={20 + 60 * Math.cos(angle1 * Math.PI / 180)} stroke="#333" strokeWidth="2"/>
          <line x1="200" y1="20" x2={200 - 60 * Math.sin(angle2 * Math.PI / 180)} y2={20 + 60 * Math.cos(angle2 * Math.PI / 180)} stroke="#333" strokeWidth="2"/>
          
          {/* Masses */}
          <circle cx={100 + 60 * Math.sin(angle1 * Math.PI / 180)} cy={20 + 60 * Math.cos(angle1 * Math.PI / 180)} r="15" fill="#e74c3c"/>
          <circle cx={200 - 60 * Math.sin(angle2 * Math.PI / 180)} cy={20 + 60 * Math.cos(angle2 * Math.PI / 180)} r="20" fill="#3498db"/>
          
          {/* Labels */}
          <text x="100" y="15" textAnchor="middle" fontSize="12">m₁</text>
          <text x="200" y="15" textAnchor="middle" fontSize="12">m₂=2m₁</text>
        </svg>
      </div>
    </div>
  )
}

function PartialElasticCollisionProblem() {
  return (
    <div className="problem-card">
      <h4>4. Teilweise elastische Stöße</h4>
      <p>Berechnung der Energieverluste bei nicht vollständig elastischen Kollisionen.</p>
      
      <div className="visualization">
        <p>Winkel-Energie-Analyse (wird detailliert implementiert)</p>
      </div>
    </div>
  )
}

export default Momentum