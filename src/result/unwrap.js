// @flow
import identity from 'crocks/combinators/identity';

import type { ResultType } from '../types';


// [unsafe] returns the contained `Ok` value, or throws if result is an `Err`
const unwrap = (result: ResultType): mixed => result.either(
    (e) => {
      throw Error(`attempted to unwrap an Err: ${ e }`);
    },
    identity,
);

export default unwrap;
