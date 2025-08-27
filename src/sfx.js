// Tiny Web Audio SFX — no external files, just tone bursts.
// All functions accept {enabled} to respect the user's Sound toggle.

let audioCtx;

function ctx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function blip(freq = 600, duration = 0.08, type = "sine", gain = 0.06) {
  const c = ctx();
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = gain;
  osc.connect(g).connect(c.destination);
  const now = c.currentTime;
  osc.start(now);
  osc.stop(now + duration);
}

export function playClick({ enabled = true } = {}) {
  if (!enabled) return;
  blip(320, 0.05, "triangle", 0.05);
}

export function playCorrect({ enabled = true } = {}) {
  if (!enabled) return;
  blip(780, 0.09, "sine", 0.07);
  setTimeout(() => blip(980, 0.09, "sine", 0.06), 60);
}

export function playWrong({ enabled = true } = {}) {
  if (!enabled) return;
  blip(220, 0.12, "sawtooth", 0.07);
  setTimeout(() => blip(180, 0.12, "sawtooth", 0.06), 70);
}

export function playFinish({ enabled = true } = {}) {
  if (!enabled) return;
  // A short three-note arpeggio
  blip(660, 0.12, "triangle", 0.08);
  setTimeout(() => blip(880, 0.12, "triangle", 0.08), 120);
  setTimeout(() => blip(1100, 0.16, "triangle", 0.08), 260);
}
