# React useEffect Hook: Missing Cleanup in setInterval

This repository demonstrates a common error in React's `useEffect` hook when using `setInterval`.  The example shows a component that increments a counter every second.  However, the original code lacks a cleanup function to clear the interval when the component unmounts or updates. This leads to memory leaks and unexpected behavior.  The solution provided correctly implements the cleanup function.

## Bug
The `bug.js` file contains the buggy code.  The `setInterval` function is not properly cleaned up. This means that even after the component is unmounted, the interval continues to run, potentially causing memory leaks and unexpected behavior.

## Solution
The `bugSolution.js` file demonstrates the correct implementation.  A cleanup function is used to clear the interval using `clearInterval` when the component unmounts or re-renders, preventing memory leaks and ensuring correct behavior.