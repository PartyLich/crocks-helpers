// @flow
import identity from 'crocks/combinators/identity';
import isFunction from 'crocks/predicates/isFunction';

import type { ResultType } from '../types';


// returns the contained `Ok` value or computes it from a closure.
type signature = (() => mixed) => ((ResultType) => mixed);
const unwrapOrElse: signature = (fn) => (result) => {
  if (!isFunction(fn)) {
    throw new TypeError('unwrapOrElse: Function required for first argument');
  }

  return result.either(fn, identity);
};

export default unwrapOrElse;
