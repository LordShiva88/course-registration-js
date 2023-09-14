import PropTypes from "prop-types";
const Cart = ({ carts, credit }) => {
  return (
    <div>
      <div className="p-4 border">
        <h2 className="text-2xl font-semibold text-sky-400">
          Credit Hour Remaining {} hr
        </h2>
        <hr />
        <h2 className="text-2xl font-semibold">Course Name</h2>

        <ol>
          {carts.map((cart, idx) => (
            <li className="list-decimal list-inside" key={idx}> {cart.course_name}</li>
          ))}
        </ol>
        <hr />
        <h2>Total Credit Hour : {credit}</h2>
        <hr />
        <h2>Total Price : {}USD</h2>
      </div>
    </div>
  );
};

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
  credit: PropTypes.number.isRequired
};
export default Cart;
