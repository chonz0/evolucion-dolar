import "./styles.css";
import Chart from "./Chart";

export default function App() {
  return (
    <div className="App">
      <h2>Dólar Informal Argentina</h2>
      <small>Fuente: Ámbito.com</small>
      <div style={{ height: 400 }}>
        <Chart />
      </div>
    </div>
  );
}
