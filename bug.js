```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: adding 1 to count every second
    const intervalId = setInterval(() => {
      setCount(count + 1); 
    }, 1000);

    // Missing cleanup function to stop the interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```