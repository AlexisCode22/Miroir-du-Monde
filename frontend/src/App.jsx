import "./style/App.scss";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
