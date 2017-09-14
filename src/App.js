import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from './actions/actionCreators'

import './App.css';


const SomeComponent = (props) => (<div>Hello {props.count}</div>)

SomeComponent.PropTypes = {
  count: PropTypes.number.isRequired,
}

class AppComponent extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="App-header" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }} onClick={() => this.props.increment()}>
          <h2>INCREMENT!</h2>
        </div>
        <div style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h1 style={{ fontSize: 100 }}>{this.props.count}</h1>
        </div>
      </div>
    );
  }
}

AppComponent.PropTypes = {
  setTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dupa: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state.settings }
}

export const App = connect(mapStateToProps, actions)(AppComponent);
