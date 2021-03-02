// @flow
import Result from 'crocks/Result';


export type PredicateFn<T> = (T) => boolean;

export type ResultType = typeof Result;
