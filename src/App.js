import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <main>

        <Dictionary defaultKeyword="hello" />

       </main>

      </header>
      <footer className="footer"><small>
        Coded by <a href="courtneyjperry.com" target="_blank" rel="noreferrer">Courtney J. Perry</a> and is open-sourced on 
        <a href="https://github.com/cnjperrys/react-app-dictionary"> Github</a></small>
      </footer>
      </div>
    </div>
  );
}


