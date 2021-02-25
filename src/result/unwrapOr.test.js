// @flow
import test from 'tape';

import unwrapOr from './unwrapOr';

import { Ok, Err } from 'crocks/Result';


test('unwrapOr', (t) => {
  {
    const msg = 'returns contained value if Ok';
    const expected = 87;
    const actual = unwrapOr(null)(Ok(expected));

    t.equal(actual, expected, msg);
  }

  {
    const msg = 'returns provided default value if Err';
    const expected = 987;
    const actual = unwrapOr(expected)(Err());

    t.equal(actual, expected, msg);
  }

  t.end();
});
