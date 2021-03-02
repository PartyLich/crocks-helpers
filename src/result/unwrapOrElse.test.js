// @flow
import test from 'tape';

import unwrapOrElse from './unwrapOrElse';

import { Ok, Err } from 'crocks/Result';


const constant = (x) => () => x;

test('unwrapOrElse', (t) => {
  {
    const msg = 'throws if first arg is not a function';
    const expected = /unwrapOrElse: Function required for first argument/;
    // $FlowExpectedError[incompatible-call]
    const actual = () => unwrapOrElse(null)(Err());

    t.throws(actual, expected, msg);
  }

  {
    const msg = 'returns contained value if Ok';
    const expected = 987;
    const fn = constant(null);
    const actual = unwrapOrElse(fn)(Ok(expected));

    t.equal(actual, expected, msg);
  }

  {
    const msg = 'returns provided function\'s return value if Err';
    const expected = 987;
    const fn = constant(expected);
    const actual = unwrapOrElse(fn)(Err());

    t.equal(actual, expected, msg);
  }

  t.end();
});
