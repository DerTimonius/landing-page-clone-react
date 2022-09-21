/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import arrow from '../images/arrow.svg';
import community from '../images/community.svg';

const topStyle = css`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 112px;
  width: 960px;
  margin: 0 auto;
  h2 {
    font-size: 16px;
  }

  a {
    color: black;
  }
  a p {
    color: gray;
  }
  .logo a {
    display: flex;
    flex-direction: row;
  }
  .logo img {
    margin-right: 12px;
    height: 80px;
  }
  .logo .text {
    padding-top: 15px;
    margin-left: -15px;
  }

  .explore a {
    width: 100px;
    background-color: #333333;
    border-radius: 48px;
    padding: 12px 24px;
    color: white;
    width: 200px;
  }
  .explore a img {
    margin-left: 15px;
    margin-top: -2px;
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
        <div className="explore btn-transform">
          <a href="#a">
            Explore <img src={arrow} alt="Arrow" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Top;
