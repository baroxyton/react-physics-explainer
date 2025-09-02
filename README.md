# Physik Erklärer - Interactive Physics Explainer

Ein interaktives React-Webtool zur visuellen Erklärung komplexer Physikkonzepte in deutscher Sprache.

## 🚀 Features

### 📚 Abgedeckte Themen

#### 4. Energie und Arbeit
- **Definitionen und Formeln**: Arbeit, Energie, Leistung, Lageenergie, kinetische Energie, Federenergie, Wärmeenergie
- **Interaktive Problemlöser**:
  - Bergsteiger Problem (Hubarbeit und Schokoladenäquivalent)
  - Gummiball (kinetische und potentielle Energie)
  - Gleitender Körper (Reibungsenergie)
  - Wasserkraftwerk Hagneck
  - Elastisches Seil
  - Leistungsformel-Herleitung
  - Wassermischung (Thermodynamik)
  - Kugelerwärmung durch Strahlung

#### 5. Impuls
- **Grundlagen**: Impulsdefinition, Impulserhaltung, Kraft-Impuls-Beziehung
- **Stoßarten**: Elastische, unelastische und vollkommen unelastische Stöße
- **Interaktive Simulationen**:
  - Zwei-Kugel-Kollision mit visueller Animation
  - Fallender Ball (Impulsanalyse)
  - Pendelstoß mit Winkeltabelle und Slider-Kontrollen
  - Teilweise elastische Stöße

#### 6. Elektrostatik
- **Fundamentale Konzepte**: Feldstärke, Potential, Spannung, Kapazität, Coulomb-Kraft
- **Praktische Anwendungen**:
  - Drei-Ladungen-Problem mit visueller Kraftdarstellung
  - Steckdosen-Feldstärke (Sicherheitsaspekte)
  - Spannungsteiler mit SVG-Visualisierung
  - Elektronenbeschleunigung
  - Relativistische Protonenbeschleunigung
  - Elektronenbahn durch Kondensatoren

## 🛠️ Technische Details

- **Framework**: React 19.1.1 mit Vite
- **Styling**: Responsive CSS mit Gradient-Design
- **Interaktivität**: Echtzeitberechnungen und Visualisierungen
- **Sprache**: Vollständig in deutscher Sprache
- **Mathematik**: Präzise physikalische Formeln und Berechnungen

## 🎯 Pädagogische Ziele

- **Visualisierung**: Komplexe Konzepte durch interaktive Grafiken verständlich machen
- **Interaktivität**: Experimentieren mit Parametern für tieferes Verständnis
- **Praxisbezug**: Reale Probleme und Anwendungen (z.B. Bergsteigen, Kraftwerke)
- **Selbstlernen**: Schritt-für-Schritt-Lösungen mit detaillierten Erklärungen

## 🚀 Installation und Verwendung

```bash
# Repository klonen
git clone <repository-url>
cd react-physics-explainer

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktionsbuild erstellen
npm run build

# Code-Qualität prüfen
npm run lint
```

## 📱 Responsive Design

Die Anwendung ist vollständig responsive und funktioniert auf:
- Desktop-Computern
- Tablets
- Smartphones

## 🧮 Berechnungsbeispiele

### Energie und Arbeit
- **Bergsteiger**: 100 kg, 2346 m Höhenunterschied → 2.30 MJ Arbeit ≈ 95 g Schokolade
- **Gummiball**: Energieumwandlung bei Reflexion mit 25% Verlust

### Impuls
- **Elastischer Stoß**: Vollständige Impuls- und Energieerhaltung
- **Kollisionsanimationen**: Vor/nach-Vergleich mit physikalisch korrekten Geschwindigkeiten

### Elektrostatik
- **Coulomb-Kräfte**: Präzise Kraftberechnungen für Mehrladungssysteme
- **Feldstärken**: Realistische Werte für Steckdosen und Kondensatoren

## 🎨 Design-Prinzipien

- **Klarheit**: Übersichtliche Struktur mit farbcodierten Bereichen
- **Zugänglichkeit**: Große Buttons, klare Beschriftungen
- **Konsistenz**: Einheitliches Design für alle Bereiche
- **Feedback**: Sofortige visuelle Rückmeldung bei Interaktionen

## 📊 Performance

- **Build-Größe**: ~225 kB JavaScript (67 kB gzipped)
- **CSS**: ~5 kB (1.6 kB gzipped)
- **Rendering**: Optimiert für flüssige Animationen

## 🔬 Physikalische Genauigkeit

Alle Berechnungen basieren auf etablierten physikalischen Prinzipien:
- Präzise Konstanten (g = 9.81 m/s², k = 8.99×10⁹ Nm²/C²)
- Korrekte Einheitenumrechnungen
- Berücksichtigung von Randbedingungen und Näherungen

## 📈 Erweiterungsmöglichkeiten

Das modulare Design ermöglicht einfache Erweiterungen um:
- Weitere Physikbereiche (Optik, Mechanik, Thermodynamik)
- Erweiterte Visualisierungen (3D-Animationen)
- Zusätzliche Übungsaufgaben
- Exportfunktionen für Berechnungen

---

*Entwickelt für Bildungszwecke zur Förderung des Physikverständnisses*
