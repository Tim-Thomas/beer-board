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
import s from './BeerCard.css';
import BeerMeter from '../BeerMeter/BeerMeter';

class BeerCard extends React.Component {
  static propTypes = {
    beer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brewery: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      ABV: PropTypes.any.isRequired,
      IBU: PropTypes.any.isRequired,
      fullness: PropTypes.number,
    }).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <BeerMeter id={this.props.beer.id} fullness={this.props.beer.fullness} />
          <div className={s.mainInfo}>
            <div className={s.brewText}>{this.props.beer.brewery}</div>
            <div className={s.nameText} style={{ textDecoration: this.props.beer.fullness === 0 ? 'line-through' : '' }}>{this.props.beer.name} | {this.props.beer.category}</div>
            <div className={s.secondaryInfo}>
              <span className={s.ABVValue}>
                {this.props.beer.ABV}%
              </span>
              <span className={s.ABVLabel}>
              &nbsp;ABV
              </span>
              <span className={s.IBUValue}>
                {this.props.beer.IBU ? ` / ${this.props.beer.IBU}` : ''}
              </span>
              <span className={s.IBULabel}>
                {this.props.beer.IBU ? 'IBU' : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BeerCard);
