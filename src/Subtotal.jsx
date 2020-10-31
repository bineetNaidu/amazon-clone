import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal({ basket }) {
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong>{`${value}`}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
          </>
        )}
        decemalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      />
      <button onClick={() => history.push('/payment')}>
        Proceed to Checkout!
      </button>
    </div>
  );
}

export default Subtotal;
