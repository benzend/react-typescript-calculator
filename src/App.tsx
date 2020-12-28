import Calculator from "./components/Calculator";
import { EntireCalculatorLayout } from "./layouts/EntireCalculatorLayout";

function App() {
  return (
    <div className="App">
      <EntireCalculatorLayout>
        <Calculator />
      </EntireCalculatorLayout>
    </div>
  );
}

export default App;
