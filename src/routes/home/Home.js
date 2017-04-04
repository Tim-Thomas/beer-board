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
import BeerCard from '../../components/BeerCard';
import Footer from '../../components/Footer';
import fetch from '../../core/fetch';
import s from './Home.css';


class Home extends React.Component {
  static propTypes = {
    beers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { beers: this.props.beers };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.fetchBeers(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  async fetchBeers() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{beer1:beer(id:1){id,name,category,ABV,IBU,fullness,brewery}' +
                'beer2:beer(id:2){id,name,category,ABV,IBU,fullness,brewery}' +
                'beer3:beer(id:3){id,name,category,ABV,IBU,fullness,brewery}' +
                'beer4:beer(id:4){id,name,category,ABV,IBU,fullness,brewery}' +
                'beer5:beer(id:5){id,name,category,ABV,IBU,fullness,brewery}}',
      }),
    });
    const { data } = await resp.json();
    this.setState(
      { beers: [data.beer1, data.beer2, data.beer3, data.beer4, data.beer5].filter(item => item) },
    );
  }

  render() {
    const beerCards = this.state.beers.map(beer =>
      beer && <BeerCard key={beer.id} beer={beer} />,
    );
    return (
      <div className={s.root}>
        <div className={s.container}>
          {beerCards}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
