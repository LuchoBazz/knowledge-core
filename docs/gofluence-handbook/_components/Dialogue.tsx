import React from 'react';
import styles from './Dialogue.module.css';

type Line = {speaker: string; text: string};

type Props = {
  title?: string;
  lines: Line[];
};

export default function Dialogue({title = 'Dialogue', lines}: Props): React.JSX.Element {
  const speakers = Array.from(new Set(lines.map((l) => l.speaker)));
  return (
    <div className={styles.box}>
      <div className={styles.title}>💬 {title}</div>
      {lines.map((l, i) => (
        <p key={i} className={`${styles.line} ${speakers.indexOf(l.speaker) % 2 ? styles.alt : ''}`}>
          <strong>{l.speaker}:</strong> {l.text}
        </p>
      ))}
    </div>
  );
}
