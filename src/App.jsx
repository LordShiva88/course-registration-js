import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import { useEffect } from "react";

import Swal from 'sweetalert2';


function App() {
  const [cards, setCardsData] = useState([]);
  const [carts, setCart] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCardsData(data));
  }, []);

  const handleBtn = (card) => {
    const cartItem = [...carts, card];
    const isExist = carts.find((cart) => cart.id === card.id);
    let credit = 0;
    let totalPrice = 0;
    if (isExist) {
      return Swal.fire({
        title: 'Error!',
        text: 'Already Take This Course',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } else {
      cartItem.forEach((cartCredit) => {
        credit = credit + cartCredit.credit;
        totalPrice =totalPrice+cartCredit.price;

        const totalPrices = parseFloat(totalPrice).toFixed(2)
        const total = parseInt(totalPrices)
        console.log(total)
        const remaining = 20 - credit;
        if (credit > 20) {
          return Swal.fire({
              title: 'Oops!',
              text: 'You have not enough credit !!!',
              icon: 'error',
              confirmButtonText: 'Try Again',
            });
        }
        setRemaining(remaining);
        setCredit(credit);
        setTotal(total);
      });
      setCart(cartItem);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-semibold text-2xl my-6">
        Course Registration
      </h1>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:w-3/4">
          {cards.map((card) => (
            <Card key={card.id} card={card} handleBtn={handleBtn}></Card>
          ))}
        </div>
        <div className="lg:w-1/4">
          <Cart 
          carts={carts} 
          credit={credit} 
          remaining={remaining}
          total={total}
          ></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
