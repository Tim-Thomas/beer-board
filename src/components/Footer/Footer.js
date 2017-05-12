/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

class Footer extends React.Component {
  static randomFacing() {
    return Math.random() > 0.5 ? 'left' : 'right';
  }

  constructor(props) {
    super(props);
    this.state = { facing: Footer.randomFacing() };
  }
  componentDidMount() {
    setInterval(() => this.setState({ facing: Footer.randomFacing() }), 5000);
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>LIBATIONS ARE FOR CITIZENS OF THE CAPITAL ONLY</span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
