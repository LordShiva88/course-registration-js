# Discuss about Course Registration Assignment
**[live-site-link](https://courseregistrationliton.netlify.app/)**
**Add at least 3 Project features**


* Implement a shopping cart system that allows users to add items to their cart from a product catalog.
* Display the selected items in a cart with details like item name, quantity, price, and a subtotal for each item.
* Add credit system where users have a virtual wallet or balance.
* Deduct credits from the user's balance when they make a purchase.
* Display the current credit balance in the user's profile.
* Calculate the total amount in the shopping cart, including the prices of all selected items.

**Discuss how you managed the state in your assignment project.**

* Declare **const [cards, setCardsData] = useState([]);** for set every card data and pass this data in Card component.
* Declare **const [carts, setCart] = useState([]);** click the select button and set this data _setCart_ function and pass the data in 
_Cart_ Component
* Declare **const [credit, setCredit] = useState(0);** for set _credit_ and calculate credit after purchase the item
* declare **const [remaining, setRemaining] = useState(20);** for calculate and show the _remaining_ credit 
* Declare **const [total, setTotal] = useState(0)** for calculate total amount 
