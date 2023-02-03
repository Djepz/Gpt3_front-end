import logo from "./logo.svg";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  What,
  Header,
  Features,
} from "./containers";
import { Cta, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
