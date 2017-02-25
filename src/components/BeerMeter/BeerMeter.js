/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BeerMeter.css';

class BeerMeter extends React.Component {
  static propTypes = {
      id: PropTypes.number.isRequired,
      fullness: PropTypes.number
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.fullnessMeter} style={{height: String(this.props.fullness ? this.props.fullness : 0) + '%'}}/>
          <span className={s.fullnessMeterText}>
            {this.props.id}
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BeerMeter);
