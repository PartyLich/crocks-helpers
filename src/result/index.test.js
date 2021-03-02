// @flow
import test from 'tape';

import * as index from '.';

import ensure from './ensure';
import unwrap from './unwrap';
import unwrapOr from './unwrapOr';
import unwrapOrElse from './unwrapOrElse';
import wrappedErr from './wrappedErr';


const expected = {
  ensure,
  unwrap,
  unwrapOr,
  unwrapOrElse,
  wrappedErr,
};

test('result entry', (t) => {
  Object.entries(expected).forEach(([key, value]) =>
    t.equal(index[key], value, `provides the ${ key } function`));

  t.deepEqual(index, expected, 'provides the expected entry');

  t.end();
});
