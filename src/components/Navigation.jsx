function Navigation({ activeSection, setActiveSection }) {
  const sections = [
    { id: 'energy', label: 'Energie und Arbeit', description: 'Arbeit, Energie, Leistung' },
    { id: 'momentum', label: 'Impuls', description: 'Impulserhaltung, Stöße' },
    { id: 'electrostatics', label: 'Elektrostatik', description: 'Elektrische Felder, Kondensatoren' }
  ]

  return (
    <nav className="navigation">
      {sections.map(section => (
        <button
          key={section.id}
          className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => setActiveSection(section.id)}
          title={section.description}
        >
          {section.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation