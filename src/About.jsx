import React from "react";

export default function About({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-card">
        <div className="modal-header">
          <h3>About</h3>
          <button className="icon-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="modal-body scrolly">
          <p>
            This small interactive game is inspired by the doctoral research of <strong>Dr Ally Louks</strong> (University of Cambridge) on <em>olfactory ethics</em> — how smell operates within literature, culture, and everyday social life.
          </p>
          <p>
            Here that scholarship is translated into a teaching tool. You will encounter paraphrased lines and scenarios. Your task is to choose the interpretive category that best fits: <strong>Social</strong>, <strong>Moral</strong>, <strong>Memory</strong>, or <strong>Disgust</strong>. The aim is not to police a single ‘right’ answer, but to practise close reading and notice how scent carries meaning.
          </p>
          <p>
            Created independently by <strong>Wiqi Lee</strong> (<a href="https://twitter.com/wiqi_lee" target="_blank" rel="noreferrer">@wiqi_lee</a>) for educational use. It is not endorsed by Dr Louks or any institution.
          </p>

          <h4>Further reading</h4>
          <ul>
            <li>
              Dr Ally Louks, <em>Olfactory Ethics</em> (doctoral dissertation). DOI: <a href="https://doi.org/10.1234/ally-louks-olfactory-ethics" target="_blank" rel="noreferrer">10.1234/ally-louks-olfactory-ethics</a> (placeholder DOI for demo).
            </li>
          </ul>

          <h4>Contacts</h4>
          <ul>
            <li>Twitter/X — Dr Ally Louks: <a href="https://twitter.com/DrAllyLouks" target="_blank" rel="noreferrer">@DrAllyLouks</a></li>
            <li>Twitter/X — Wiqi Lee: <a href="https://twitter.com/wiqi_lee" target="_blank" rel="noreferrer">@wiqi_lee</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
