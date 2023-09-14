import PropTypes from "prop-types";
import { FaReadme } from "react-icons/fa";

const Card = ({ card }) => {
  const { course_name, credit, details, image, price } = card;
  return (
    <div>
      <div className="card h-[460px] bg-base-100 shadow-xl">
        <figure className="pt-4">
          <img src={image} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title">{course_name}</h2>
          <p>{details}</p>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <FaReadme></FaReadme>
            <p>Price : {price}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaReadme></FaReadme>
              <p>Credit: {credit}hr</p>
            </div>
          </div>
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Card;
