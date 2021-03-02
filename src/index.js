// @flow
import * as result from './result';
import ensure from './ensure';

export { ensure };
export * from './result';

export default {
  ensure,
  ...result,
};
