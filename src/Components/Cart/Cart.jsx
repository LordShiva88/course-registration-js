import PropTypes from "prop-types";
const Cart = ({ carts }) => {

  return (
    <div>
      <div className="p-4 border">
        <h2 className="text-2xl font-semibold text-sky-400">Credit Hour Remaining {} hr</h2>
        <hr />
        <h2 className="text-2xl font-semibold">Course Name</h2>
        <ol>
          {carts.map((cart, idx) => (
            <li key={idx}> {cart.course_name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Cart.propTypes = {
  carts: PropTypes.array.isRequired,
};
export default Cart;
