import React from "react";

export default function Glossary({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-card wide">
        <div className="modal-header">
          <h3>Glossary — Key Ideas in Olfactory Ethics</h3>
          <button className="icon-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="modal-body scrolly">
          <p>
            This glossary gathers core terms used in the game’s four categories. Each item is brief, practical, and linked to the kind of close reading encouraged in Dr Louks’ framework.
          </p>

          <h4>Categories</h4>
          <ul className="bullets">
            <li>
              <strong>Social</strong> — Smell organising <em>who belongs</em>. Look for scent marking groups and spaces: hospitality vs exclusion, community vs othering, regulation of shared air.
            </li>
            <li>
              <strong>Moral</strong> — Smell acting as <em>virtue language</em>. Watch for purity, neutrality, cleanliness, duty, discipline, respectability.
            </li>
            <li>
              <strong>Memory</strong> — Smell as <em>archive</em>. A trigger for recollection, care, kinship, and continuity across generations and places.
            </li>
            <li>
              <strong>Disgust</strong> — Smell used for <em>stigmatisation</em>. Odour stands in for blame, contamination, or the push to remove people from view.
            </li>
          </ul>

          <h4>Helpful distinctions</h4>
          <ul className="bullets">
            <li>
              <strong>Neutral vs. ‘Neutral’</strong> — Declaring a scent “neutral” is rarely neutral; it often installs someone’s preference as the rule for everyone.
            </li>
            <li>
              <strong>Evidence vs. Rhetoric</strong> — Phrases like “you can smell it” can be used to shut down debate. Ask: who benefits if smell is treated as unquestionable proof?
            </li>
            <li>
              <strong>Ambivalence</strong> — One line can mix allure and unease (e.g., lively streets that both attract and briefly repel). Noting ambivalence is a valid analytic move.
            </li>
          </ul>

          <h4>How to read quickly</h4>
          <ol className="numbers">
            <li>Underline the scent word or phrase: odour, clean, fresh, rank, neutral, fragrant, etc.</li>
            <li>Ask what the scent is doing: inviting, excluding, moralising, remembering, shaming?</li>
            <li>Check the consequence: who is enabled to stay, and who is instructed to move on?</li>
          </ol>

          <p className="muted">
            The items here are concise and educational. They do not replace the nuances of the dissertation itself.
          </p>
        </div>
      </div>
    </div>
  );
}
