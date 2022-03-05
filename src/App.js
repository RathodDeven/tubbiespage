import './App.css';

function App() {
  const onClick = () => {
    window.location.href = "https://interality.io/HFwSvX9/tubbieverse";
  }
  return (
    <div className="App">
      <button className='enterBtn' onClick={onClick}>
        Enter to TubbiesVerse
      </button>
    </div>
  );
}

export default App;
