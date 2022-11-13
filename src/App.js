import "./App.css";
import Header from "./globalComponents/Header/Header";
import Home from "../src/pages/Home/Home";
import Footer from "./globalComponents/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
