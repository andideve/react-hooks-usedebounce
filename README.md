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
      [keyword], // watched values
    ],
    // options here
  );

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return <main>{/* Some contents */}</main>;
}
```

## Options

### options.preventInitialRender

Type: `Boolean`

Default: `true`

Skip to function call on first render.

[MIT License](LICENSE)
