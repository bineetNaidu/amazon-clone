import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, price, rating, title }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt={id} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkout__title">{title}</p>
        <p className="checkout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-labelledby="start emoji">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
      {/* 1.08 */}
    </div>
  );
}

export default CheckoutProduct;
