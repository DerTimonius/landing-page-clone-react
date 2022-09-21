/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import profile6 from '../images/A7FuqpUP_400x400.png';
import profile2 from '../images/CmrlU5Gf_400x400.jpg';
import discord from '../images/discord.svg';
import profile5 from '../images/F_SYhnoo_400x400.jpg';
import figma from '../images/figma-logo.svg';
import profile1 from '../images/HfHVug3o_400x400.jpg';
import profile4 from '../images/kM_0x5Nz_400x400.jpg';
import logo from '../images/logo.svg';
import twitter from '../images/twitter.svg';
import profile3 from '../images/v3pgUHqR_400x400.jpg';

const comment =
  "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 9.58333C2.49713 10.6832 2.75411 11.7682 3.25 12.75C3.83797 13.9265 4.74188 14.916 5.86046 15.6077C6.97904 16.2995 8.26813 16.6662 9.58333 16.6667C10.6832 16.6695 11.7682 16.4126 12.75 15.9167L17.5 17.5L15.9167 12.75C16.4126 11.7682 16.6695 10.6832 16.6667 9.58333C16.6662 8.26813 16.2995 6.97904 15.6077 5.86046C14.916 4.74187 13.9265 3.83797 12.75 3.25C11.7682 2.75411 10.6832 2.49713 9.58333 2.5H9.16667C7.42971 2.59583 5.78913 3.32897 4.55905 4.55905C3.32897 5.78913 2.59583 7.42971 2.5 9.16667V9.58333Z' stroke='black' stroke-opacity='0.32' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A";

const retweet =
  "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.4596 0.126229C13.8501 -0.264295 14.4832 -0.264295 14.8738 0.126229L18.2054 3.45787C18.3874 3.63897 18.5 3.88966 18.5 4.16667C18.5 4.42856 18.3993 4.66695 18.2346 4.84522C18.2256 4.8549 18.2165 4.86442 18.2071 4.87378L14.8738 8.20711C14.4832 8.59763 13.8501 8.59763 13.4596 8.20711C13.069 7.81658 13.069 7.18342 13.4596 6.7929L15.0858 5.16666H5.83333C5.21449 5.16666 4.621 5.4125 4.18342 5.85008C3.74583 6.28767 3.5 6.88116 3.5 7.5V9.16666C3.5 9.71895 3.05228 10.1667 2.5 10.1667C1.94772 10.1667 1.5 9.71895 1.5 9.16666V7.5C1.5 6.35073 1.95655 5.24853 2.7692 4.43587C3.58186 3.62321 4.68406 3.16666 5.83333 3.16666H15.0858L13.4596 1.54044C13.069 1.14992 13.069 0.516753 13.4596 0.126229Z' fill='black' fill-opacity='0.32'/%3E%3Cpath d='M16.5 10.8333C16.5 10.2811 16.9477 9.83334 17.5 9.83334C18.0523 9.83334 18.5 10.2811 18.5 10.8333V12.5C18.5 13.6493 18.0435 14.7515 17.2308 15.5641C16.4181 16.3768 15.3159 16.8333 14.1667 16.8333H4.91422L6.54044 18.4596C6.93096 18.8501 6.93096 19.4832 6.54044 19.8738C6.14992 20.2643 5.51675 20.2643 5.12623 19.8738L1.79437 16.5419L1.78205 16.5294C1.60747 16.3494 1.5 16.1039 1.5 15.8333C1.5 15.6982 1.52679 15.5694 1.57535 15.4518C1.62416 15.3334 1.69667 15.2224 1.79289 15.1262L5.12623 11.7929C5.51675 11.4024 6.14992 11.4024 6.54044 11.7929C6.93096 12.1834 6.93096 12.8166 6.54044 13.2071L4.91421 14.8333H14.1667C14.7855 14.8333 15.379 14.5875 15.8166 14.1499C16.2542 13.7123 16.5 13.1188 16.5 12.5V10.8333Z' fill='black' fill-opacity='0.32'/%3E%3C/svg%3E%0A";

const fav =
  "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.3667 3.84167C16.941 3.41584 16.4357 3.07804 15.8795 2.84757C15.3232 2.6171 14.7271 2.49848 14.125 2.49848C13.5229 2.49848 12.9268 2.6171 12.3705 2.84757C11.8143 3.07804 11.309 3.41584 10.8833 3.84167L10 4.725L9.11666 3.84167C8.25692 2.98192 7.09086 2.49892 5.875 2.49892C4.65914 2.49892 3.49307 2.98192 2.63333 3.84167C1.77359 4.70141 1.29059 5.86747 1.29059 7.08333C1.29059 8.29919 1.77359 9.46526 2.63333 10.325L3.51666 11.2083L10 17.6917L16.4833 11.2083L17.3667 10.325C17.7925 9.89937 18.1303 9.39401 18.3608 8.83779C18.5912 8.28158 18.7099 7.68541 18.7099 7.08333C18.7099 6.48126 18.5912 5.88509 18.3608 5.32887C18.1303 4.77265 17.7925 4.2673 17.3667 3.84167V3.84167Z' stroke='black' stroke-opacity='0.32' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A";
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
  .btn img,
  a img {
    display: inline-block;
    vertical-align: middle;
  }
`;

const footerStyle = css`
  text-align: center;
  background: linear-gradient(
    180deg,
    #daebf7 0%,
    rgba(218, 235, 247, 0) 100%,
    rgba(218, 235, 247, 0) 100%
  );
  .tweets {
    margin: 64px auto 128px auto;
    display: flex;
    justify-content: center;
  }
  .tweets ul {
    display: grid;
    grid-template-columns: 480px 480px;
    grid-template-rows: repeat(3, auto);
  }
  .tweet {
    background: white;
    list-style: none;
    max-width: 420px;
    border-radius: 40px;
    height: max-content;
    padding: 32px;
    margin: 16px;
    margin-bottom: 0px;
    text-align: left;
  }
  .tweet p {
    font-size: 18px;
    font-weight: normal;
    color: black;
  }
  span {
    color: #18a0fb;
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
  }
  h5 {
    font-size: 16px;
    font-weight: normal;
    opacity: 0.7;
    margin-top: 2px;
  }
  .tweet img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .person {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  .person-name {
    display: block;
    text-align: left;
  }
  .controls {
    display: flex;
    justify-content: space-around;
    margin-top: -35px;
  }
  .controls img {
    height: 20px;
    width: 20px;
  }
  .underline a {
    color: black;
    opacity: 0.7;
    display: inline-block;
    padding: 6px;
    margin-bottom: 150px;
  }
  .underline a img {
    vertical-align: text-bottom;
  }
  footer {
    display: flex;
    justify-content: space-between;
  }
  footer #automator {
    font-weight: 700;
    display: inline-block;
  }
  footer #automator img {
    vertical-align: text-bottom;
    margin-right: 4px;
  }
  footer a {
    color: black;
  }
  footer nav a {
    padding: 12px;
    margin: 12px;
  }
`;
function Bottom() {
  return (
    <div>
      <section css={[heroHeadlineStyle, footerStyle]}>
        <div>
          <h2>
            <img src={twitter} alt="Twitter Logo" /> What Designers Are Saying
          </h2>
          <div className="tweets">
            <ul>
              <li className="tweet">
                <div className="person">
                  <img src={profile1} alt="Twitter profile avatar" />
                  <div className="person-name">
                    <h4>Rogie</h4>
                    <h5>Designer Advocate, Figma</h5>
                  </div>
                </div>
                <p>
                  Srsly <span>Automator</span> is like the one plugin to rule
                  them all. What can’t this thing do?
                </p>
                <div className="controls">
                  <img src={comment} alt="Comment icon" />
                  <img src={retweet} alt="Retweet icon" />
                  <img src={fav} alt="Fav icon" />
                </div>
              </li>
              <li className="tweet">
                <div className="person">
                  <img src={profile2} alt="Twitter profile avatar" />
                  <div className="person-name">
                    <h4>Joey Banks</h4>
                    <h5>Design Systems, Twitter</h5>
                  </div>
                </div>
                <p>the easiest money a design team can spend.</p>
                <div className="controls">
                  <img src={comment} alt="Comment icon" />
                  <img src={retweet} alt="Retweet icon" />
                  <img src={fav} alt="Fav icon" />
                </div>
              </li>
              <li className="tweet">
                <div className="person">
                  <img src={profile3} alt="Twitter profile avatar" />
                  <div className="person-name">
                    <h4>Kate Hsaio</h4>
                    <h5>Product Designer, Segment</h5>
                  </div>
                </div>
                <p>
                  Late to the game but <span>Automator</span> is such a life
                  saver on productivity. A Figma plugin that serves as a
                  low-code platform, you can create your own script with the
                  actions provided. Has community too!
                </p>
                <div className="controls">
                  <img src={comment} alt="Comment icon" />
                  <img src={retweet} alt="Retweet icon" />
                  <img src={fav} alt="Fav icon" />
                </div>
              </li>
              <li className="tweet">
                <div className="person">
                  <img src={profile4} alt="Twitter profile avatar" />
                  <div className="person-name">
                    <h4>Ming-Ya Wang</h4>
                    <br />
                    <h5>Product Designer</h5>
                  </div>
                </div>
                <p>
                  Been trying out <span>Automator</span>. It's a game-changer
                  for us who work on Figma. Just thinking of all the tasks you
                  can automate with little-to-no time (0 code)... It's worth
                  every penny spent on it. Also, make it lets you create
                  stunning designs!
                </p>
                <div className="controls">
                  <img src={comment} alt="Comment icon" />
                  <img src={retweet} alt="Retweet icon" />
                  <img src={fav} alt="Fav icon" />
                </div>
              </li>
              <li className="tweet">
                <div className="person">
                  <img src={profile5} alt="Twitter profile avatar" />
                  <div className="person-name">
                    <h4>Georges Raad</h4>
                    <h5>Product Designer</h5>
                  </div>
                </div>
                <p>
                  <span>Automator</span> is by far the best money I ever spent
                  on a design related tool. Worth way way more than its price
                  tag.
                </p>
                <div className="controls">
                  <img src={comment} alt="Comment icon" />
                  <img src={retweet} alt="Retweet icon" />
                  <img src={fav} alt="Fav icon" />
                </div>
              </li>
              <li className="tweet">
                <div className="person">
                  <img src={profile6} alt="Twitter profile avatar" />
                  <div className="person-name">
                    <h4>Noah Levin</h4>
                    <h5>Designer Director, Figma</h5>
                  </div>
                </div>
                <p>
                  So fun!!! I’ve made 6 automations so far in just a few hours
                  this week... I love that they also work in FigJam!
                </p>
                <div className="controls">
                  <img src={comment} alt="Comment icon" />
                  <img src={retweet} alt="Retweet icon" />
                  <img src={fav} alt="Fav icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h2>Get Started with Automator</h2>
        <p>Automate your Figma tasks in one click.</p>
        <a href="#4" className="btn btn-transform">
          {' '}
          <img src={figma} alt="Fimga logo" /> Try it for free
        </a>
        <br />
        <br />
        <br />
        <div className="underline">
          <a href="#FAQ"> Read the FAQ</a>
          <a href="'disc">
            <img src={discord} alt="logo of discord" /> Join the Discord
          </a>
        </div>

        <br />
        <footer>
          <a href="#a" id="automator">
            <img src={logo} alt="Automator logo" />
            Automator
          </a>
          <nav>
            <a href="#a">Help</a>
            <a href="#a">Contact</a>
            <a href="#a">Privacy</a>
            <a href="#a">Terms</a>
          </nav>
        </footer>
      </section>
    </div>
  );
}

export default Bottom;
