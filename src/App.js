import logo from "./logo.svg";

import Temperature from "./Temperature";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Temperature />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;
