/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import companies from '../images/companies.png';
import priceTag from '../images/pricing.svg';

const paymentOptions = {
  monthly: {
    price: {
      not: '$12',
      actual: ' $9 ',
      per: ' per month',
    },
    saving: 'Save 25% for a limited time',
  },
  yearly: {
    price: {
      actual: '$99 ',
      per: ' per year',
    },
    saving: 'Save $9/yr with yearly billing',
  },
};
let buttons = {
  monthly: true,
  yearly: false,
};

const buttonActive = css`
  background: white;
  font-weight: 700;
`;
const buttonInactive = css`
  background: transparent;
  font-weight: 400;
`;

const pricingStyle = css`
  background: #18a0fb;
  color: white;
  text-align: center;
  padding: 128px 0px;
  h2 {
    font-size: 36px;
    margin-top: -12px;
  }
  h2 img {
    display: inline-block;
    vertical-align: middle;
  }
  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #18a0fb;
  }
  ul {
    list-style: none;
  }
  li {
    font-weight: 600;
    font-size: 18px;
    color: black;
    margin-bottom: 16px;
  }
  li::before {
    content: '\u2714  ';
    color: #18a0fb;
  }
  .personal,
  .business {
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    border-radius: 40px;
    background: #fff;
    color: black;
    padding: 40px;
  }
  .personal {
    position: relative;
    width: 396px;
    height: 650px;
    z-index: 2;
  }
  .business {
    width: 324px;
    height: 466px;
    background: #daebf7;
  }
  .pills {
    margin-top: 12px;
    background: rgba(0, 0, 0, 0.08);
    display: inline-block;
    padding: 4px;
    border-radius: 32px;
    color: #333333;
  }
  .pills button {
    padding: 4px 12px;
    border-radius: 32px;
    border: none;
    min-height: 32px;
  }
  .price {
    margin-top: 24px;
    font-weight: 900;
    font-size: 18px;
    line-height: 44px;
  }
  .price strong {
    font-size: 36px;
  }
  .price span {
    font-size: 36px;
    text-decoration: line-through;
    font-weight: 700;
    opacity: 0.4;
  }
  .pills button:active {
    background: #fff;
  }
  .saving {
    background: rgba(27, 196, 125, 0.25);
    font-size: 16px;
    padding: 8px 16px;
    text-align: center;
    border-radius: 12px;
    color: #1bc47d;
    width: max-content;
    font-weight: 700;
  }
  .options p {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
    margin: 10px 0 40px;
    font-weight: 600;
  }
  .options a {
    text-decoration: none;
  }
  .btn,
  .ghost {
    padding: 12px 24px;
    border-radius: 48px;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    display: block;
  }
  .btn {
    background-color: #18a0fb;
    color: white;
    margin-top: 24px;
  }
  .ghost {
    color: #18a0fb;
    margin-top: -24px;
  }
  p {
    font-weight: 600;
    font-size: 20px;
    opacity: 0.64;
    margin-top: 48px;
  }
  #companies {
    margin-top: 12px;
    padding-bottom: -36px;
  }
`;

function Pricing() {
  const [payment, setPayment] = useState(paymentOptions.monthly);

  const handlePayment = (event) => {
    setPayment(paymentOptions[event.currentTarget.value]);
    buttons = { monthly: false, yearly: false };
    buttons[event.currentTarget.value] = true;
  };
  return (
    <div>
      <section css={pricingStyle}>
        <h2>
          <img src={priceTag} alt="Icon of price tag" /> Pricing
        </h2>
        <br />
        <br />
        <div className="options">
          <div className="personal">
            <h4>Personal</h4>
            <div className="pills">
              <button
                value="monthly"
                onClick={handlePayment}
                css={buttons.monthly ? buttonActive : buttonInactive}
              >
                Monthly
              </button>
              <button
                value="yearly"
                onClick={handlePayment}
                css={buttons.yearly ? buttonActive : buttonInactive}
              >
                Yearly
              </button>
            </div>
            <div className="price">
              <h3>
                <span>{payment.price.not ? payment.price.not : ''}</span>
                <strong>{payment.price.actual}</strong>
                {payment.price.per}
              </h3>
            </div>
            <div className="saving">{payment.saving}</div>
            <p>1 license, unlimited use</p>
            <ul>
              <li>Unlimited automations</li>
              <li>Over 100 actions</li>
              <li>Importing/exporting</li>
              <li>Access to Community</li>
              <li>All future uptadtes</li>
            </ul>
            <a href="#buy" className="btn">
              Buy now
            </a>
            <br />
            <a href="#try" className="ghost">
              Try for free
            </a>
          </div>
          <div className="business">
            <h4>Teams</h4>
            <div className="price">
              <strong>Custom</strong>
            </div>
            <p>unlimited team use</p>
            <ul>
              <li>Everything in personal</li>
              <li>Synced automations</li>
              <li>Additional support</li>
            </ul>
            <a href="#buy" className="btn">
              Get a quote
            </a>
            <br />
            <a href="#try" className="ghost">
              Contact us
            </a>
          </div>
        </div>
        <br />
        <p>Automator is used by designer on these teams:</p>
        <img
          src={companies}
          alt="Icons of companies using Automator"
          id="companies"
        />
      </section>
    </div>
  );
}

export default Pricing;
