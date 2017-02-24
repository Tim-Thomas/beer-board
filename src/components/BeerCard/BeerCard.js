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

class BeerCard extends React.Component {
  static propTypes = {
    beer: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brewery: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      ABV: PropTypes.any.isRequired,
      IBU: PropTypes.any.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.fullnessMeter}>
            <span className={s.fullnessMeterText}>{this.props.beer.id}</span>
          </div>
          <div className={s.mainInfo}>
            <span className={s.text}>Name: {this.props.beer.name}</span>
            <span className={s.text}>Brewery: {this.props.beer.brewery}</span>
          </div>
          <div className={s.secondaryInfo}>
            <span className={s.text}>Category: {this.props.beer.category}</span>
            <span className={s.text}>ABV: {this.props.beer.ABV}</span>
            <span className={s.text}>IBU: {this.props.beer.IBU}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BeerCard);
