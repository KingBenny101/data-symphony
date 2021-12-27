import './App.css';
import HeaderTitle from './components/HeaderTitle';
import Navigator from './components/Navigator'
import Base from './components/Base';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderTitle/>
        <Navigator/>
      </header>
      <Base/>
      <Footer/>
    </div>
  );
}

export default App;
