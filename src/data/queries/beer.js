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
import path from 'path';
import BeerType from '../types/BeerType';


const appRoot = path.resolve(__dirname);
const beerDataDir = `${appRoot}/../beer-data`;
const beers = {};
const beerList = {};

const updateTaps = function updateTaps() {
  const parsedBeerList = JSON.parse(fs.readFileSync(`${beerDataDir}/kegs.txt`, 'utf8'));
  for (let i = 0; i < 6; i += 1) {
    if (parsedBeerList[i] && beers[parsedBeerList[i].beer]) {
      beerList[i] = beers[parsedBeerList[i].beer];
      beerList[i].fullness = parsedBeerList[i].fullness;
    }
  }
};
updateTaps();

const updateBeers = function updateBeers() {
  const files = fs.readdirSync(`${beerDataDir}/beers`, 'utf8');
  files.forEach((element) => {
    beers[element] = JSON.parse(fs.readFileSync(`${beerDataDir}/beers/${element}`, 'utf8'));
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
      fullness: Math.max(selectedBeer.fullness, 0),
    };
  },
};

export default beer;
