import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';

class Base extends Component {
  render() {
    return (
      <div className="bs-container">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Base