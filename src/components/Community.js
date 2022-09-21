/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import compass from '../images/compass.svg';

const communityStyle = css`
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

  a {
    width: 100px;
    background-color: #333333;
    border-radius: 48px;
    padding: 12px 24px;
    color: white;
    font-weight: bold;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
    width: 720px;
    height: 644px;
    margin: 64px auto;
    text-align: left;
    color: white;
  }
  .cards h3 {
    font-size: 24px;
  }
  .cards p {
    color: inherit;
    font-size: 18px;
    font-weight: normal;
  }
  .cards .card {
    border-radius: 40px;
    width: 100%;
    padding: 32px;
    min-height: 320px;
  }
  .cards .card:nth-of-type(1) {
    background: #7b61ff;
  }
  .cards .card:nth-of-type(2) {
    background: #18a0fb;
  }
  .cards .card:nth-of-type(3) {
    background: #f24822;
  }
  .cards .card:nth-of-type(4) {
    background: #1bc47d;
  }
  .card-head {
    margin-bottom: 24px;
  }
  .card img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .card a {
    color: inherit;
  }
  .card .btn {
    position: relative;
    top: -80px;
    background-color: rgba(255, 255, 255, 0.24);
    margin: 0;
  }
  .card-head a {
    background: rgba(0, 0, 0, 0.15);
    position: relative;
    top: -15px;
    left: 4px;
  }
`;
function Community() {
  return (
    <div>
      <section css={communityStyle}>
        <div className="community-section">
          <h2>Explore the community</h2>
          <p>
            Explore automations made by the community and remix them to work
            best for you.
          </p>
          <a href="#community">
            <img src={compass} alt="Compass icon" /> Visit automator.community
          </a>

          <div className="cards">
            <div className="card">
              <div className="card-head">
                <img
                  src="https://dl.airtable.com/.attachments/cf5392c70e87835b0022a32225255d1d/7b67a1cc/IMG_5823.jpg"
                  alt="Portrait of man"
                />{' '}
                <a href="#blnk"> Productivity</a>
              </div>

              <br />
              <h3>Screen Size Tester</h3>
              <p>
                Test out a mobile screen design on min/max screen size for
                edge...
              </p>
              <br />
              <br />
              <br />
              <br />
              <a href="#down" className="btn">
                Download
              </a>
            </div>
            <div className="card">
              <div className="card-head">
                <img
                  src="https://dl.airtable.com/.attachments/83d62a85c9eb8da40b45117e9271c045/11b49261/40D0E556-0873-4B5D-AECD-26C008E12497.jpeg"
                  alt="Robot claw"
                />{' '}
                <a href="#blnk"> Icons</a>
              </div>

              <br />
              <h3>Icon Grid Sorter</h3>
              <p>
                This automation gets all the icons in a selection and organises
                them...
              </p>
              <br />
              <br />
              <br />
              <br />
              <a href="#down" className="btn">
                Download
              </a>
            </div>
            <div className="card">
              <div className="card-head">
                <img
                  src="https://dl.airtable.com/.attachments/2ebade7018fe29fa678824b52d6f0fed/85cba8fc.png"
                  alt="Icon in front of colored background"
                />{' '}
                <a href="#blnk"> Productivity</a>
              </div>

              <br />
              <h3>Scale by number</h3>
              <p>Scale each selected layer by number</p>
              <br />
              <br />
              <br />
              <br />
              <a href="#down" className="btn">
                Download
              </a>
            </div>
            <div className="card">
              <div className="card-head">
                <img
                  src="https://dl.airtable.com/.attachments/207c9d4ee7b7c0da54adf95b2766f30f/dddf2df6/26992607_10211560439911199_1737994193076549107_n.jpg"
                  alt="Portrait of man"
                />{' '}
                <a href="#blnk"> Design Systems</a>
              </div>

              <br />
              <h3>Generate style guide</h3>
              <p>Generates a style guide using your local styles</p>
              <br />
              <br />
              <br />
              <br />
              <a href="#down" className="btn">
                Download
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  );
}

export default Community;
