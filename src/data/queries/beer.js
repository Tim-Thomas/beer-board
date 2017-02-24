/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import BeerType from '../types/BeerType';

const beerList = {
  0: {
    name: 'Drumroll APA',
    brewery: 'Odell',
    category: 'Pale Ale',
    ABV: 6.5,
    IBU: 35,
    fullness: 97,
  },
  1: {
    name: 'King Julius',
    brewery: 'Tree House',
    category: 'Imperial IPA',
    ABV: 8.3,
    IBU: 85,
    fullness: 97,
  },
};

const beer = {
  type: BeerType,
  args: {
    id: {
      name: 'id',
      type: new NonNull(IntType),
    },
  },
  resolve: (root, { id }) => {
    const selectedBeer = beerList[id];
    return selectedBeer && {
      id,
      name: selectedBeer.name,
      brewery: selectedBeer.brewery,
      category: selectedBeer.category,
      ABV: selectedBeer.ABV,
      IBU: selectedBeer.IBU,
      fullness: selectedBeer.fullness,
    };
  },
};

export default beer;
