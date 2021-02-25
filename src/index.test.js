// @flow
import test from 'tape';

import ensure from './ensure';

// result
import unwrapOr from './result/unwrapOr';
import unwrapOrElse from './result/unwrapOrElse';

import index from '.';


const expected = {
  ensure,
  unwrapOr,
  unwrapOrElse,
};

test('crocks-helpers entry', (t) => {
  Object.entries(expected).forEach(([key, value]) =>
    t.equal(index[key], value, `provides the ${ key } function`));

  t.deepEqual(index, expected, 'provides the expected entry');

  t.end();
});
