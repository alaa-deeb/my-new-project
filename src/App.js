import logo from './alaa.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-container">
          <div className="circle">
            <img src={logo} className="App-logo" alt="alaa" />
          </div>
          <h1>ALaa Ahmad Deeb</h1>
          <h2>Engineer at a remittance company</h2>
          <p>alaaahmaddeeb60@gmail.com</p>
          <p>+963952752398</p>
        </div>
      </header>
      <footer className="App-footer">
        by alaa
      </footer>
    </div>
  );
}

export default App;
