# Comuni Attivi - Specifiche di Design

## Palette Colori

### Colori Principali
- **Primary Blue**: `#1e3a5f` (Blu scuro istituzionale)
- **Secondary Blue**: `#2c5282` (Blu medio per hover)
- **Dark Text**: `#1a202c` (Quasi nero per testo)
- **Body Text**: `#4a5568` (Grigio scuro per paragrafi)
- **Light Gray**: `#e2e8f0` (Bordi e separatori)
- **Background**: `#ffffff` (Sfondo bianco)
- **Background Alt**: `#f7fafc` (Sfondo sezioni alternate)

### Colori di Accento
- **Accent Green**: `#38a169` (Verde per CTA e successo)
- **Accent Green Hover**: `#2f855a` (Verde scuro per hover)
- **Accent Orange**: `#ed8936` (Arancio tenue per elementi secondari)

---

## Tipografia

### Font Family
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Fallback**: system-ui, sans-serif

### Scale Tipografica
- **H1 (Hero)**: 48px / 3rem, font-weight: 800, line-height: 1.1
- **H2 (Sezioni)**: 32px / 2rem, font-weight: 700, line-height: 1.2
- **H3 (Card)**: 20px / 1.25rem, font-weight: 600, line-height: 1.3
- **Body**: 16px / 1rem, font-weight: 400, line-height: 1.6
- **Small**: 14px / 0.875rem, font-weight: 400
- **CTA Button**: 16px / 1rem, font-weight: 600

---

## Layout

### Container
- Max-width: 1200px
- Padding: 0 24px (mobile), 0 48px (desktop)
- Centered with margin: 0 auto

### Spaziature
- **Section padding**: 80px 0 (desktop), 60px 0 (mobile)
- **Element gap**: 32px
- **Card padding**: 24px
- **Button padding**: 16px 32px

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## Componenti

### Hero Section
- Full viewport height (min-height: 100vh)
- Flexbox: centered content
- Background: gradient sottile `linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)`
- Logo in alto a sinistra
- Titolo H1 centrato, grande
- Sottotitolo: max-width 600px, centrato
- CTA Button: verde accent, border-radius 8px

### Sezione Chi sono
- Background: bianco
- Max-width: 700px per il testo
- Testo centrato o allineato sinistra
- Padding verticale generoso

### Sezione Servizi
- Background: `#f7fafc`
- Griglia: 1 colonna mobile, 3 colonne desktop
- Gap: 24px
- Card:
  - Background: bianco
  - Border-radius: 12px
  - Padding: 24px
  - Box-shadow: `0 1px 3px rgba(0,0,0,0.1)`
  - Hover: `transform: translateY(-2px)`, box-shadow più marcato

### Sezione Esempi
- Background: bianco
- Griglia: 1 colonna mobile, 3 colonne desktop
- Card più minimal:
  - Border-left: 4px solid accent green
  - Padding: 20px
  - Background: `#f7fafc`

### Sezione Contatti
- Background: `#f7fafc`
- Layout: 2 colonne desktop (info + form), 1 colonna mobile
- Form:
  - Input: border 1px solid `#e2e8f0`, border-radius 8px, padding 12px 16px
  - Focus: border-color primary blue
  - Button submit: primary blue, border-radius 8px

### Footer
- Background: `#1e3a5f` (primary blue)
- Testo: bianco/grigio chiaro
- Padding: 40px 0
- Links: underline on hover

---

## Interazioni

### Transizioni
- **Button hover**: 200ms ease
- **Card hover**: 300ms ease
- **Link hover**: 150ms ease
- **Focus states**: outline 2px solid accent green

### Hover Effects
- **Buttons**: darken background 10%
- **Cards**: translateY(-2px) + stronger shadow
- **Links**: underline

---

## Icone (opzionale)

Se si usano icone (Lucide o similar):
- Dimensione: 24px
- Colore: primary blue o accent green
- Posizione: a sinistra del titolo card o sopra

Icone suggerite per servizi:
1. Analisi: `BarChart3` o `TrendingUp`
2. Bandi: `FileText` o `ClipboardList`
3. Automazione: `Zap` o `Cog`
4. AI: `Bot` o `Brain`
5. Formazione: `Users` o `GraduationCap`

---

## Responsive Behavior

### Mobile (< 640px)
- H1: 36px
- H2: 28px
- Sezioni: padding 60px 16px
- Griglie: 1 colonna
- Form: full width inputs

### Tablet (640px - 1024px)
- Griglie: 2 colonne
- Spaziature ridotte del 20%

### Desktop (> 1024px)
- Tutto come specificato sopra
- Max-width container attivo

---

## Note per lo Sviluppatore

1. **Performance**: Usare solo CSS, nessun framework pesante
2. **Font**: Inter da Google Fonts (se online) o system fonts
3. **Immagini**: Nessuna immagine necessaria, design pulito testuale
4. **Form**: Statico per ora (action="#"), da collegare in futuro
5. **Smooth scroll**: `scroll-behavior: smooth` sul html
6. **Accessibilità**: Tutti i button devono essere focusable, contrasto WCAG AA minimo
