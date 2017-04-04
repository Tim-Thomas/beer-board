/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action() {
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
      credentials: 'include',
    });
    const { data } = await resp.json();
    const beers = [data.beer1, data.beer2, data.beer3, data.beer4, data.beer5].filter(item => item);
    return {
      title: 'Main Page',
      component: <Layout><Home beers={beers} /></Layout>,
    };
  },

};
