# react-hooks-usedebounce

React hook for callback debouncing

## Installation

```sh
npm i @andideve/react-hooks-usedebounce
```

## Usage

```jsx
import { useDebounce } from '@andideve/react-hooks-usedebounce';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useDebounce(
    // function
    () => setResults([]),
    [
      1000, // delay in ms
      keyword, // watched value(s), wrap it into an array if you have more dependencies
    ],
  );

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return <main>{/* Some contents */}</main>;
}
```

[MIT License](LICENSE)
