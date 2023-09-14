import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import { useEffect } from "react";

function App() {

  const [cards, setCardsData] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data => setCardsData(data))
  },[])

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-semibold text-2xl my-6">
        Course Registration
      </h1>
      <div className="flex md:flex-col flex-row gap-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:w-3/4">
          {
            cards.map(card => <Card key={card.id} card={card}></Card>
            )
          }
        </div>
        <div className="lg:w-1/4">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
