/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import airdrop from '../images/airdrop.svg';
import lightning from '../images/lightning.svg';
import menu from '../images/menu.svg';
import pen from '../images/pen.svg';

const gifs = {
  a: 'https://automator.design/assets/images/gifs/automator-demo-outline.gif',
  b: 'https://automator.design/assets/images/gifs/automator-demo-airtable.gif',
  c: 'https://automator.design/assets/images/gifs/automator-demo-placeholder.gif',
};

const superchargeStyle = css`
  padding-top: 128px;
  text-align: center;
  background-color: #333333;
  color: white;
  padding-bottom: 100px;

  h2 {
    font-size: 36px;
    font-weight: bold;
  }
  h2 img,
  button img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
  p {
    font-size: 20px;
    margin: 12px auto 64px;
    max-width: 480px;
    align-self: center;
    opacity: 0.8;
  }
  .gifButtons {
    display: flex;
    justify-content: center;
    padding: 12px 24px;
    margin: 12px auto 64px;
  }
  .gifButtons button,
  .imageButtons button {
    background: transparent;
    border-radius: 24px;
    font-size: 18px;
    color: white;
    opacity: 0.8;
    font-family: inherit;
    font-weight: 700;
    border: none;
    margin: 0 25px;
    &:active {
      background-color: white;
      color: black;
    }
  }
  .gif {
    width: 720px;
    height: 480px;
    border-radius: 40px;
  }
  .imageButtons button {
    color: black;
  }
`;
function Supercharge() {
  const [gifPlayed, setGifPlayed] = useState(gifs.a);
  const handleClickGif = (event) => {
    setGifPlayed(gifs[event.currentTarget.value]);
  };
  return (
    <div>
      <section css={superchargeStyle}>
        <div className="supercharge">
          <h2>
            <img src={lightning} alt="Lightning icon" /> Supercharge Figma
          </h2>
          <p>
            Build custom drag and drop automations that do time-sensitive Figma
            tasks for you in one click.
          </p>
        </div>
        <ul className="gifButtons">
          <button value="a" onClick={handleClickGif}>
            <img src={pen} alt="Pen icon" /> Design Specs
          </button>
          <button value="b" onClick={handleClickGif}>
            <img src={airdrop} alt="Airdrop icon" />
            Import from Airtable
          </button>
          <button value="c" onClick={handleClickGif}>
            <img src={menu} alt="menu icon" />
            Placeholders
          </button>
          <br />
        </ul>
        <img src={gifPlayed} alt="Gif of Automator workflow" className="gif" />
      </section>
    </div>
  );
}

export default Supercharge;
