import React from "react";

export default function Disclaimer({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-card">
        <div className="modal-header">
          <h3>Disclaimer</h3>
          <button className="icon-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="modal-body scrolly">
          <p>
            This demo is independent and for educational purposes. It is <strong>not endorsed</strong> by Dr Ally Louks or any institution. The material is a teaching translation of ideas about olfactory ethics and does not quote the dissertation directly.
          </p>
          <p>
            No content here is intended to stereotype, demean, or exclude anyone on the basis of race, ethnicity, gender, sexuality, class, disability, nationality, religion, or any other identity.
          </p>
          <p>
            For scholarly context, see: Dr Ally Louks, <em>Olfactory Ethics</em> (doctoral dissertation). DOI: <a href="https://doi.org/10.1234/ally-louks-olfactory-ethics" target="_blank" rel="noreferrer">10.1234/ally-louks-olfactory-ethics</a> (placeholder DOI for demo).
          </p>
          <p>
            Credits: Concept and implementation by <strong>Wiqi Lee</strong> (<a href="https://twitter.com/wiqi_lee" target="_blank" rel="noreferrer">@wiqi_lee</a>). Inspired by the work and public scholarship of <strong>Dr Ally Louks</strong> (<a href="https://twitter.com/DrAllyLouks" target="_blank" rel="noreferrer">@DrAllyLouks</a>).
          </p>
        </div>
      </div>
    </div>
  );
}
