---
sidebar_position: 1
title: Foundations
sidebar_label: Foundations
---

# Text-to-Speech in React

The **Web Speech API** is a tool that lets your browser "speak" text out loud. This is very useful for accessibility or language learning apps.

### The code example

Here is a common way to use it in a React component:

```javascript
// import React from 'react';

const playAudio = (e: React.MouseEvent, word: string): void => {
  e.stopPropagation(); // Avoid parent events
  
  // Check if the browser supports speech
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Configuration
    utterance.lang = 'en-US'; // Set the language
    utterance.rate = 0.9;     // Speed (0.9 is a bit slower)
    
    // Start speaking
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech is not supported in this browser.");
  }
};
```

### Key parts of the tutorial

1.  **`e.stopPropagation()`**: This is important in React. It stops the click from "bubbling up" to other elements.
2.  **`'speechSynthesis' in window`**: This check is necessary because some old browsers cannot speak.
3.  **`new SpeechSynthesisUtterance(word)`**: This creates the "message" or the "object" that contains the text.
4.  **`utterance.rate`**: This controls the speed. A value of **1.0** is normal speed. Using **0.9** makes it easier to understand.
5.  **`window.speechSynthesis.speak()`**: This is the final command that tells the computer to start the audio.

### Simple Vocabulary

*   **To support**: When a program is able to run a specific feature.
*   **Clarity**: How easy it is to hear or understand something.
*   **Slightly**: A little bit.
*   **To prevent**: To stop something from happening.
