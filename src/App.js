import { useState } from "react";
import "./App.css";
import { data } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./navBar/Headers";
import CardList from "./cardList/CardList";
import AdmCardList from "./listAdCars/AdmCardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./details/Details";

function App() {
  const [prod, setProd] = useState(data);
  const [inp, setInp] = useState("");
  const hnadleChange = (e) => {
    setInp(e.target.value);
  };

  const handleAdd = (newProd) => {
    setProd([...prod, newProd]);
  };

  const handleDelete = (id) => {
    setProd(prod.filter((el) => el.id !== id));
  };

  const handleEdit = (edited) => {
    setProd(prod.map((el) => (el.id === edited.id ? edited : el)));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Headers inp={inp} find={hnadleChange} />
        <Routes>
          <Route path="/" element={<CardList data={prod} inps={inp} />} />
          <Route
            path="/admin"
            element={
              <AdmCardList
                data={prod}
                add={handleAdd}
                del={handleDelete}
                ed={handleEdit}
              />
            }
          />
          <Route path="/product/:id" element={<Details els={prod} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
