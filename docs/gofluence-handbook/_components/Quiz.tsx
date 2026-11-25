import React, {useState} from 'react';
import styles from './Quiz.module.css';

type Props = {
  question: string;
  options: string[];
  /** Zero-based index of the correct option. */
  answer: number;
  explanation?: string;
};

export default function Quiz({question, options, answer, explanation}: Props): React.JSX.Element {
  const [picked, setPicked] = useState<number | null>(null);
  const done = picked !== null;
  return (
    <div className={styles.quiz}>
      <p className={styles.question}>{question}</p>
      <div className={styles.options}>
        {options.map((o, i) => {
          const state = !done ? '' : i === answer ? styles.correct : i === picked ? styles.wrong : '';
          return (
            <button
              key={i}
              type="button"
              disabled={done}
              className={`${styles.option} ${state}`}
              onClick={() => setPicked(i)}>
              {o}
            </button>
          );
        })}
      </div>
      {done && (
        <p className={styles.feedback}>
          {picked === answer ? '✅ Correct!' : '❌ Not quite.'} {explanation}{' '}
          <button type="button" className={styles.retry} onClick={() => setPicked(null)}>
            Try again
          </button>
        </p>
      )}
    </div>
  );
}
