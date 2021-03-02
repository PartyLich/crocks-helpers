// @flow
import constant from 'crocks/combinators/constant';
import identity from 'crocks/combinators/identity';

import type { ResultType } from '../types';


// returns the contained `Ok` value or a provided default
type signature = (mixed) => ((ResultType) => mixed);
const unwrapOr: signature = (def) => (result) =>
  result.either(constant(def), identity);

export default unwrapOr;
