/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import arrow from '../images/arrow.svg';
import community from '../images/community.svg';

const topStyle = css`
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 112px;
  width: 100%;
  h2 {
    font-size: 16px;
  }

  a {
    color: black;
  }
  a p {
    color: gray;
  }

  .logo {
    display: inline-block;
    vertical-align: middle;
  }
  .logo img {
    margin-right: 12px;
    height: 80px;
  }
  .explore a {
    width: 100px;
    background-color: #333333;
    border-radius: 48px;
    padding: 12px 24px;
    color: white;
  }
`;
function Top() {
  return (
    <div>
      <section className="top" css={topStyle}>
        <div className="logo">
          <a href="#a">
            <img src={community} alt="three colored paper icons stacked" />
            <div className="text">
              <h2>Explore the Automator Community</h2>
              <p>Download automations from the community</p>
            </div>
          </a>
        </div>
        <div className="explore">
          <a href="#a">
            Explore <img src={arrow} alt="Arrow" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Top;
