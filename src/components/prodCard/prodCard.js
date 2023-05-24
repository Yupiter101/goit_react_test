// npm install prop-types
import PropTypes from "prop-types";


export function ProdCard(props) {
  const { name = "bread", type = 'packed', price} = props;
  if(!price) {
    return false;
  }
  return <div>Name Product Card is: {name}, type: {type}, price: {price}</div>
}



ProdCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number.isRequired,
};