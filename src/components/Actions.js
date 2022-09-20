/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import compass from '../images/compass-dark.svg';
import cursor from '../images/cursor.svg';
import figmaBackground from '../images/figma.svg';
import dots from '../images/four-dots.svg';
import glass from '../images/looking-glass.svg';

const images = {
  a: 'https://automator.design/assets/images/actions/find-layers.svg',
  b: 'https://automator.design/assets/images/actions/apply-styles.svg',
  c: 'https://automator.design/assets/images/actions/api-request.svg',
};
const actionStyle = css`
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
  .overlay {
    text-align: center;
    width: 720px;
    height: 480px;
    margin: 24px 0 64px;
    padding: 84px 0;
  }
  #figma-background {
    position: absolute;
    border-radius: 40px;
    opacity: 0.5;
  }
  #foreground {
    position: absolute;
    top: -20;
    z-index: 2;
    border-radius: 16px;
    border: 0.5px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 8px rgb(0 0 0 / 24%), 0px 24px 40px rgb(0 0 0 / 24%);
  }
`;

function Actions() {
  const [imageShown, setImageShown] = useState(images.a);

  const handleClickImage = (event) => {
    setImageShown(images[event.currentTarget.value]);
  };
  return (
    <div>
      <section
        css={[
          actionStyle,
          css`
            background-color: #edeef0;
            color: #333333;
          `,
        ]}
      >
        <div>
          <h2>
            <img src={cursor} alt="cursor icon" />
            Powerful Actions
          </h2>
          <p>
            Choose from over 100 actions that expose the power of the Figma
            Plugin API at your fingertips.
          </p>
          <ul className="imageButtons">
            <button value="a" onClick={handleClickImage}>
              <img src={glass} alt="Pen icon" /> Find layers
            </button>
            <button value="b" onClick={handleClickImage}>
              <img src={dots} alt="Airdrop icon" />
              Apply styles
            </button>
            <button value="c" onClick={handleClickImage}>
              <img src={compass} alt="compass icon" />
              API requests
            </button>
            <br />
          </ul>
          <div className="overlay">
            <img src={figmaBackground} alt="Figma menu" id="figma-background" />
            <img src={imageShown} alt="Automator menu" id="foreground" />
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
}

export default Actions;
