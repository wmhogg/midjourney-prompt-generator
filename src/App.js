import React from 'react';
import MidjourneyPromptBuilder from './components/MidjourneyPromptBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <MidjourneyPromptBuilder />
        </div>
      </header>
      <footer className="App-footer">
        <p>
          <a 
            href="https://github.com/wmhogg/midjourney-prompt-generator" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
