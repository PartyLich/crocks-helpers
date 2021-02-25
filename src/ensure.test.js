// @flow
import test from 'tape';

import ensure from './ensure';


const constant = (x) => () => x;

test('ensure', (t) => {
  {
    const msg = 'throws if first arg is not a function';
    const expected = /ensure: Function required for first argument/;
    // $FlowExpectedError[incompatible-call]
    const actual = () => ensure(null);

    t.throws(actual, expected, msg);
  }

  {
    const msg = 'returns Ok if predicate is true';
    const expected = /Ok /;
    const pred = constant(true);
    const actual = ensure(pred)();

    t.match(actual.toString(), expected, msg);
  }

  {
    const msg = 'returns Err if predicate is false';
    const expected = /Err /;
    const pred = constant(false);
    const actual = ensure(pred)();

    t.match(actual.toString(), expected, msg);
  }

  t.end();
});
