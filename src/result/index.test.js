// @flow
import test from 'tape';

import * as index from '.';

import unwrapOr from './unwrapOr';
import unwrapOrElse from './unwrapOrElse';


const expected = {
  unwrapOr,
  unwrapOrElse,
};

test('result entry', (t) => {
  Object.entries(expected).forEach(([key, value]) =>
    t.equal(index[key], value, `provides the ${ key } function`));

  t.deepEqual(index, expected, 'provides the expected entry');

  t.end();
});
