import './App.css';
import HeaderTitle from './components/HeaderTitle';
import Navigator from './components/Navigator'
import Base from './components/Base';
import Footer from './components/Footer';
import About from  './components/About';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderTitle/>
        <Navigator/>
      </header>
      <Base/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
