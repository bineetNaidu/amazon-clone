import React from 'react';
import { useStateValue } from './StateProvider';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout( <Link to="checkout"> {basket?.length} items </Link> )
        </h1>

        {/* Payment Section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>LA, California</p>
          </div>
        </div>

        {/* Items review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* all the products */}
            {basket.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Payment section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment__details">{/* stripe magic */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
