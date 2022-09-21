/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import arrowGreen from '../images/arrow-green.svg';
import figmaDark from '../images/figma-logo-dark.svg';
import figma from '../images/figma-logo.svg';
import heart from '../images/heart.svg';
import logo from '../images/logo.svg';

const heroHeaderStyle = css`
  background: linear-gradient(180deg, #edeef0 0%, #e6e7e8 100%);
  padding: 64px;
  font-size: 16px;
  line-height: 24px;
  nav a {
    padding: 10px;
    margin-left: 10px;
    opacity: 0.8;
  }
  a {
    color: black;
  }
  .container {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #automator {
    font-weight: 700;
  }
  span {
    font-weight: 600;
    opacity: 0.4;
  }
  .container img {
    display: inline-block;
    vertical-align: middle;
    margin: 12px;
  }
`;

const heroHeadlineStyle = css`
  text-align: center;
  padding: 128px;

  h2 {
    font-size: 36px;
    line-height: 44px;
  }
  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin: 12px auto 48px;
    opacity: 0.64;
    max-width: 480px;
  }
  .btn {
    background-color: #18a0fb;
    width: 172px;
    height: 48px;
    border-radius: 48px;
    color: white;
    padding: 12px 24px;
    margin: 50px;
    font-weight: 700;
    line-height: 24px;
  }
  .btn img {
    display: inline-block;
    vertical-align: middle;
  }
  .gif {
    max-width: 720px;
    max-height: 480;
    margin: 48px;
    border-radius: 40px;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 24%), 0px 24px 40px rgb(0 0 0 / 24%);
  }
`;

const buttonsStyle = css`
  display: flex;
  justify-content: center;
  margin-top: -100px;

  .likes,
  .installs {
    border: 2px solid rgba(0, 0, 0, 0.08);
    color: black;
    padding: 12px 24px;
    border-radius: 48px;
    line-height: 24px;
    margin: 0 8px;
    font-weight: 700;
  }
  img {
    display: inline-block;
    vertical-align: middle;
  }
  #arrow {
    rotate: 90deg;
    fill: red;
  }
`;

const poweredStyles = css`
  text-align: center;
  padding: 24px;
  margin: 24px;
  p {
    color: rgba(0, 0, 0, 0.4);
    font-weight: 600;
  }
  p img {
    display: inline-block;
    vertical-align: middle;
  }
`;
function Hero() {
  return (
    <div>
      {' '}
      <section className="hero" css={heroHeaderStyle}>
        <header>
          <div className="container">
            <a href="#a" id="automator">
              <img src={logo} alt="Automator logo" />
              Automator <span>for Figma</span>
            </a>
            <nav>
              <a href="#ä">Community</a>
              <a href="#ü">Features</a>
              <a href="#p">Pricing</a>
              <a href="#o">Install</a>
            </nav>
          </div>
        </header>
        <div className="headline" css={heroHeadlineStyle}>
          <h2>There’s an automation for that</h2>
          <p>Automate your Figma tasks in one click.</p>
          <a href="#4" className="btn btn-transform">
            {' '}
            <img src={figma} alt="Fimga logo" /> Try it for free
          </a>
          <br />
          <img
            src="https://automator.design/assets/images/gifs/automator-hero.gif"
            alt="Gif of automator workflow"
            className="gif"
          />
        </div>
        <div className="buttons" css={buttonsStyle}>
          <div className="likes">
            <img src={heart} alt="Heart icon" /> 1.1k likes
          </div>
          <div className="installs">
            <img src={arrowGreen} alt="arrow" id="arrow" /> 17.6k installs
          </div>
        </div>
        <div className="powered" css={poweredStyles}>
          <p>
            Made by{' '}
            <img
              src="https://automator.design/assets/images/diagram-text.svg"
              alt="Diagram"
            />{' '}
            {'       '}
            Works with <img src={figmaDark} alt="Figma logo" /> Figma
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
