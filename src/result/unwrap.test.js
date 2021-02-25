// @flow
import test from 'tape';

import unwrap from './unwrap';

import { Ok, Err } from 'crocks/Result';


test('unwrap', (t) => {
  {
    const msg = 'throws if Result is an Err';
    const expected = /attempted to unwrap an Err/;
    const actual = () => unwrap(Err());

    t.throws(actual, expected, msg);
  }

  {
    const msg = 'returns contained value if Ok';
    const expected = 987;
    const actual = unwrap(Ok(expected));

    t.equal(actual, expected, msg);
  }

  t.end();
});
