import React, {useState} from 'react';
import styles from './Flashcard.module.css';

type Props = {
  front: string;
  back: string;
  /** Optional example sentence shown under the back text. */
  example?: string;
};

export default function Flashcard({front, back, example}: Props): React.JSX.Element {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      aria-label={flipped ? 'Show front' : 'Show back'}
      onClick={() => setFlipped(!flipped)}>
      {flipped ? (
        <span>
          <strong>{back}</strong>
          {example && <em className={styles.example}>{example}</em>}
        </span>
      ) : (
        <strong>{front}</strong>
      )}
      <small className={styles.hint}>{flipped ? 'click to flip back' : 'click to reveal'}</small>
    </button>
  );
}
