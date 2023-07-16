import React from 'react';
import './style.css';
import { cyptWord, zigZag, flippingMatrix, countingSort1 } from './Example';
export default function App() {
  flippingMatrix();
  cyptWord();
  zigZag();
  countingSort1();
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      className="container"
    >
      <h1>Hello World</h1>
    </div>
  );
}
