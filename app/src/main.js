import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {}
  }

  render() {
    return(
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
