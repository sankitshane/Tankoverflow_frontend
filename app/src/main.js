import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {}
  }

  render() {
    return(
      <div className="demo-layout-transparent mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Tank Over Flow</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Login</a>
            </nav>
          </div>
        </header>
        <main className="mdl-layout__content">
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
