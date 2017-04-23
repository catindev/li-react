import React from 'react';
import Sidebar from './common/Sidebar';
import ScrollToTopOnMount from './common/ScrollToTopOnMount';
import ContentContainer from './common/ContentContainer';

const style = { textAlign: 'right' };

const Home = () => (
  <div className="row">
    <ScrollToTopOnMount />
    <Sidebar active="/" />
    <ContentContainer>
      <div>
        <form>
          <fieldset>
            <legend style={{ borderBottom: '1xp solid #000 !important' }}>
              Home Form
            </legend>
            <div className="form-group row">
              <label
                htmlFor="inputEmail3"
                className="col-sm-2 col-form-label"
                style={style}
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
                style={style}
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </ContentContainer>
  </div>
);

export default Home;
