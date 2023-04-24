import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Snack from './Snack';
import VendingMachine from './VenchingMachine';


///TODO: need docstring
function App() {
  return (
    <div className="App">
    My Vending Machine!!!
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<VendingMachine />} />
          <Route path="/:snackName" element= {<Snack />} />
          <Route path="*" element= {<Navigate to="/" />} />

        </Routes>

      </BrowserRouter>
    {/**
      <Route to "/" element= vending machine>\ /> //show three snacks items
      <Route to "/:snack" element= snack /> // show specific snack
  */}
    </div>
  );
}

export default App;
