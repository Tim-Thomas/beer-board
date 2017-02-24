/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLFloat as FloatType,
} from 'graphql';

const BeerType = new ObjectType({
  name: 'BeerType',
  fields: {
    id: { type: new NonNull(IntType) },
    name: { type: new NonNull(StringType) },
    brewery: { type: new NonNull(StringType) },
    category: { type: new NonNull(StringType) },
    ABV: { type: new NonNull(FloatType) },
    IBU: { type: new NonNull(FloatType) },
    fullness: { type: new NonNull(IntType) },
  },
});

export default BeerType;
