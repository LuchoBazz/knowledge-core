import React from 'react';
import styles from './VocabTable.module.css';

export type VocabRow = {
  en: string;
  meaning: string;
  example: string;
};

type Props = {
  rows: VocabRow[];
  /** Header of the middle column. */
  meaningLabel?: string;
};

export default function VocabTable({rows, meaningLabel = 'Meaning / Spanish hint'}: Props): React.JSX.Element {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>English</th>
            <th>{meaningLabel}</th>
            <th>Example sentence</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.en}>
              <td>
                <strong>{r.en}</strong>
              </td>
              <td>{r.meaning}</td>
              <td>
                <em>{r.example}</em>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
