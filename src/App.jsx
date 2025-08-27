import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import packs from "./packs";
import Glossary from "./Glossary.jsx";
import Disclaimer from "./Disclaimer.jsx";
import About from "./About.jsx";
import Confetti from "./confetti.js";
import { playClick, playCorrect, playWrong, playFinish } from "./sfx.js";

const CATEGORIES = ["Social", "Moral", "Memory", "Disgust"];

export default function App() {
  // UI
  const [theme, setTheme] = useState("Light");
  const [soundOn, setSoundOn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // Modes
  const [arcade, setArcade] = useState(false);
  const [studyMode, setStudyMode] = useState(true);
  const [ambivalence, setAmbivalence] = useState(false);

  // Info modals
  const [showGlossary, setShowGlossary] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Game
  const [selectedPackId, setSelectedPackId] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // {choice, correct, cue}
  const [showResults, setShowResults] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  // (Only for UI colour flash; does NOT change your game logic)
  const [flashCat, setFlashCat] = useState(null);
  const clearFlashSoon = () => window.setTimeout(() => setFlashCat(null), 350);

  // Keep the whole viewport in sync with the chosen theme
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "Dark");
  }, [theme]);

  const currentPack = useMemo(
    () => packs.find((p) => p.id === selectedPackId) || null,
    [selectedPackId]
  );
  const isQuizActive = Boolean(currentPack);
  const cue = isQuizActive ? currentPack.cues[qIndex] : null;
  const totalQs = isQuizActive ? currentPack.cues.length : 0;
  const score = answers.filter((a) => a.correct).length;

  function resetToPacks() {
    setSelectedPackId(null);
    setQIndex(0);
    setAnswers([]);
    setShowResults(false);
    setCelebrate(false);
    setFlashCat(null);
  }

  function choosePack(id) {
    playClick({ enabled: soundOn });
    setSelectedPackId(id);
    setQIndex(0);
    setAnswers([]);
    setShowResults(false);
    setCelebrate(false);
    setFlashCat(null);
  }

  function handleChoice(category) {
    if (!cue) return;

    // brief visual cue; does not alter timing/flow
    setFlashCat(category);
    clearFlashSoon();

    const correct = category === cue.category;
    if (correct) playCorrect({ enabled: soundOn });
    else playWrong({ enabled: soundOn });

    const record = { choice: category, correct, cue };
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = record;
      return next;
    });

    // Arcade could auto-advance on correct, but we leave your behaviour intact.
    if (qIndex < totalQs - 1) {
      setQIndex((i) => i + 1);
    } else {
      // Finished — sound and celebration
      playFinish({ enabled: soundOn });
      setShowResults(true);
      setCelebrate(true);
    }
  }

  function goPrev() {
    playClick({ enabled: soundOn });
    if (qIndex === 0) return;
    setQIndex((i) => i - 1);
  }

  function goNext() {
    playClick({ enabled: soundOn });
    if (qIndex < totalQs - 1) setQIndex((i) => i + 1);
  }

  const lastAnswer = answers[qIndex];

  return (
    <div className={`page ${theme === "Dark" ? "dark" : ""}`}>
      {/* Header */}
      <header className="bar">
        <div className="brand">Olfactory Ethics</div>
        <div className="spacer" />
        <div className="chips">
          <span className="chip">Theme: {theme}</span>
          <button
            className="chip"
            onClick={() => {
              playClick({ enabled: soundOn });
              setTheme(theme === "Light" ? "Dark" : "Light");
            }}
          >
            Toggle
          </button>
          <span className="chip">Sound: {soundOn ? "On" : "Off"}</span>
          <button
            className="chip"
            onClick={() => {
              setSoundOn((s) => !s);
              // A tiny click even when turning sound off, to confirm the tap
              playClick({ enabled: true });
            }}
          >
            Toggle
          </button>
          <button
            className="chip chip-primary"
            onClick={() => {
              playClick({ enabled: soundOn });
              setShowMenu(true);
            }}
          >
            Menu
          </button>
        </div>
      </header>

      {/* Content */}
      {!isQuizActive ? (
        <main className="shell">
          <section className="panel">
            <h2>Select a Pack</h2>
            <div className="pack-grid">
              {packs.map((p) => (
                <button
                  key={p.id}
                  className={`pack-card ${selectedPackId === p.id ? "selected" : ""}`}
                  onClick={() => choosePack(p.id)}
                >
                  <div className="pack-title">{p.name}</div>
                  <div className="pack-sub">{p.cues.length} prompts</div>
                </button>
              ))}
            </div>
            <p className="footer-note">
              Independent demo for educational use. Not endorsed by Dr Ally Louks or any institution.
            </p>
          </section>
        </main>
      ) : (
        <main className="shell">
          <section className="panel">
            <div className="row meta">
              <button className="link" onClick={resetToPacks}>← Back</button>
              <div className="muted">
                Q {qIndex + 1} / {totalQs} • Score {score}
              </div>
            </div>

            <h3 className="pack-heading">{currentPack.name}</h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={qIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                <p className="cue">{cue.text}</p>

                <div className="choices">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      className={`btn-choice ${flashCat === cat ? "chosen" : ""}`}
                      onMouseDown={() => { setFlashCat(cat); }}
                      onClick={() => handleChoice(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Study rationale for the current item */}
                {studyMode && lastAnswer && (
                  <div className="rationale">
                    <div className="r-line">
                      You chose <strong>{lastAnswer.choice}</strong> · Expected: <strong>{cue.category}</strong>.
                    </div>
                    {cue.rationale && <div className="r-text">{cue.rationale}</div>}
                  </div>
                )}

                <div className="nav-row">
                  <button className="btn-secondary" onClick={goPrev} disabled={qIndex === 0}>
                    Back
                  </button>
                  <div className="spacer" />
                  {/* Hide “Next” once we are on the final question */}
                  {qIndex < totalQs - 1 && (
                    <button className="btn-secondary" onClick={goNext}>
                      Next
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </main>
      )}

      {/* Menu Modal */}
      {showMenu && (
        <div className="modal" onClick={() => setShowMenu(false)}>
          <motion.div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18 }}
          >
            <div className="modal-header">
              <h3>Menu</h3>
              <button className="icon-close" onClick={() => setShowMenu(false)} aria-label="Close">×</button>
            </div>

            <div className="modal-body scrolly">
              <h4>Modes</h4>
              <div className="modes">
                <label className="tick">
                  <input
                    type="checkbox"
                    checked={arcade}
                    onChange={(e) => {
                      playClick({ enabled: soundOn });
                      setArcade(e.target.checked);
                    }}
                  />
                  <span>Arcade</span>
                </label>
                <label className="tick">
                  <input
                    type="checkbox"
                    checked={studyMode}
                    onChange={(e) => {
                      playClick({ enabled: soundOn });
                      setStudyMode(e.target.checked);
                    }}
                  />
                  <span>Study Mode</span>
                </label>
                <label className="tick">
                  <input
                    type="checkbox"
                    checked={ambivalence}
                    onChange={(e) => {
                      playClick({ enabled: soundOn });
                      setAmbivalence(e.target.checked);
                    }}
                  />
                  <span>Ambivalence Mode</span>
                </label>
              </div>

              <h4>Information</h4>
              <div className="pill-row">
                <button className="pill" onClick={() => { playClick({ enabled: soundOn }); setShowGlossary(true); }}>Glossary</button>
                <button className="pill" onClick={() => { playClick({ enabled: soundOn }); setShowAbout(true); }}>About</button>
                <button className="pill" onClick={() => { playClick({ enabled: soundOn }); setShowDisclaimer(true); }}>Disclaimer</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Long-form modals */}
      <AnimatePresence>
        {showGlossary && <Glossary onClose={() => setShowGlossary(false)} />}
        {showDisclaimer && <Disclaimer onClose={() => setShowDisclaimer(false)} />}
        {showAbout && <About onClose={() => setShowAbout(false)} />}
      </AnimatePresence>

      {/* Results modal */}
      <AnimatePresence>
        {showResults && (
          <div className="modal" onClick={() => setShowResults(false)}>
            <motion.div
              className="modal-card wide"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div className="modal-header">
                <h3>Quiz Complete</h3>
                <button className="icon-close" onClick={() => setShowResults(false)} aria-label="Close">×</button>
              </div>
              <div className="modal-body scrolly">
                <p><strong>Final score:</strong> {score} / {totalQs}</p>
                <ul className="bullets">
                  {answers.map((a, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <strong>{a.cue.text}</strong>
                      <div className="muted">
                        You chose <em>{a.choice}</em> {a.correct ? "✅" : "❌"} — Expected: <em>{a.cue.category}</em>
                      </div>
                      {a.cue.rationale && (
                        <div className="result-note">{a.cue.rationale}</div>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="nav-row" style={{ marginTop: 12 }}>
                  <button
                    className="btn-secondary"
                    onClick={() => {
                      playClick({ enabled: soundOn });
                      setQIndex(0);
                      setAnswers([]);
                      setShowResults(false);
                      setCelebrate(false);
                    }}
                  >
                    Play Again
                  </button>
                  <div className="spacer" />
                  <button className="btn-secondary" onClick={() => { playClick({ enabled: soundOn }); resetToPacks(); }}>
                    Choose another pack
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Confetti overlay */}
      <Confetti active={celebrate} onDone={() => setCelebrate(false)} />
    </div>
  );
}
