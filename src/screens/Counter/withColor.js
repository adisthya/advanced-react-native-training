// @flow

import * as React from 'react';

const max = 255;
const min = 0;

function withColor<T>(Component: React.ComponentType<T>) {
  return class Enhancer extends React.Component<T, State> {
    constructor() {
      super(...arguments);
    }

    render() {
      return (
        <Component randomizeColor={this._randomizeColor} {...this.props} />
      );
    }

    _randomizeColor = () => {
      return `rgb(${this._randomRed()}, ${this._randomGreen()}, ${this._randomBlue()})`;
    };

    _randomRed() {
      return Math.floor(Math.random() * max) + min;
    }

    _randomGreen() {
      return Math.floor(Math.random() * max) + min;
    }

    _randomBlue() {
      return Math.floor(Math.random() * max) + min;
    }
  };
}

export default withColor;
