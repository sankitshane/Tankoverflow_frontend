import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {}
  }

  render() {
    return(
      <div className="front">
        <h2>Hello World!</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
