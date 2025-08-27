# Olfactory Ethics Quiz

An interactive React-based quiz inspired by Dr Ally Louks’ doctoral research on *Olfactory Ethics*.  
This project reimagines scholarly analysis of smell, class, gender, memory, and morality as an accessible teaching tool.  

Independent and educational — not endorsed by Dr Louks or any institution.  

---

## Features
- Chapter Packs: explore themes such as Class & Homelessness, Queer vs Perversion, Misogynoir, Oppressive Logic, and Non-human/Utopic.
- Modes: Arcade, Study Mode (with rationale for each answer), and Ambivalence Mode.
- Endgame feedback: score summary, correct/incorrect breakdown, and celebratory animation.
- Accessibility: light/dark themes, responsive design, and keyboard hotkeys.
- Educational framing: glossary, disclaimer, and about sections with contextual references.

---

## Demo
Clone this repository and run locally to play.

```bash
git clone https://github.com/YOUR-USERNAME/olfactory-ethics-quiz.git
cd olfactory-ethics-quiz
npm install
npm run dev
```

Open the printed local URL in your browser.

---

## Project Structure
- `src/App.jsx` — main application and quiz logic
- `src/packs.js` — thematic packs and example prompts
- `src/styles.css` — visual styling (light/dark themes)
- `src/sfx.js` — lightweight audio feedback
- `src/confetti.js` — celebratory animation
- `src/Glossary.jsx`, `Disclaimer.jsx`, `About.jsx` — supporting informational pages

---

## Credits
- **Concept & implementation:** [Wiqi Lee](https://twitter.com/wiqi_lee)  
- **Research inspiration:** [Dr Ally Louks](https://twitter.com/DrAllyLouks) — *Olfactory Ethics* dissertation (Cambridge, DOI linked in About screen)

---

## Licence
This project is provided for educational purposes only.  
Use, adaptation, and sharing are welcome under the MIT Licence.
