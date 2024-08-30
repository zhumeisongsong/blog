# cache optimization

Cache optimization is often `the simplest and most effective way to optimize`, and `useMemo` is commonly used in React components to cache the results of the last calculation.
When the dependencies of useMemo have not changed, a recalculation is not triggered. This is typically used in scenarios where "calculating derived state code" is very time-consuming, `e.g., traversing a large list for statistical information`.

You should only rely on useMemo as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useMemo to improve performance.

useMemo can only cache the result of the most recent function execution. If you want to cache the results of more executions, The [memoizee](https://www.npmjs.com/package/memoizee) is available.





