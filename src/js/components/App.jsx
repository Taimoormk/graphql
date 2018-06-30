// ########## Import Dependencies Here ##########
import React, { Fragment, Component } from 'react';
// import { } from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Components Here ##########
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>Hello World</div>
      </Fragment>
    );
  }
}

function mapStateToProps({}) {
  return {

  }
}

export default connect(mapStateToProps, {})(App);