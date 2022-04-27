import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HoroScope from './components/HoroScope';
import HoroScopeName from './components/HoroScopeName';

function App() {
  return (
    <div className="App">
      {/* yesterday: "http://sandipbgt.com/theastrologer/api/horoscope/{sunsign}/yesterday",
      tomorrow: "http://sandipbgt.com/theastrologer/api/horoscope/{sunsign}/tomorrow",
      today: "http://sandipbgt.com/theastrologer/api/horoscope/{sunsign}/today",
      sunsign_list: "http://sandipbgt.com/theastrologer/api/sunsigns" */}

      <HoroScope/>

    </div>
  );
}

export default App;
