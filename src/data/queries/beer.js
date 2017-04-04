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
import * as fs from 'fs';
import BeerType from '../types/BeerType';

const beerDataDir = 'C:\\Users\\Tim\\Desktop\\beer-board\\beer-data';
const beers = {};
let beerList = {};

const updateTaps = function updateTaps() {
  beerList = JSON.parse(fs.readFileSync(`${beerDataDir}\\kegs.txt`, 'utf8'));
  for (let i = 0; i < 6; i += 1) {
    if (beerList[i] && beers[beerList[i]]) {
      beerList[i] = beers[beerList[i]];
    }
  }
};
updateTaps();

const updateBeers = function updateBeers() {
  const files = fs.readdirSync(`${beerDataDir}\\beers`, 'utf8');
  files.forEach((element) => {
    beers[element] = JSON.parse(fs.readFileSync(`${beerDataDir}\\beers\\${element}`, 'utf8'));
  });
};
updateBeers();

const beer = {
  type: BeerType,
  args: {
    id: {
      name: 'id',
      type: new NonNull(IntType),
    },
  },
  resolve: (root, { id }) => {
    updateBeers();
    updateTaps();
    const selectedBeer = beerList[id];
    return selectedBeer && {
      id,
      name: selectedBeer.name,
      brewery: selectedBeer.brewery,
      category: selectedBeer.category,
      ABV: selectedBeer.ABV,
      IBU: selectedBeer.IBU ? selectedBeer.IBU : 0,
      fullness: selectedBeer.fullness,
    };
  },
};

export default beer;
