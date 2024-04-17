# Color2Console

Color2Console is a lightweight (2.2kb) TypeScript/JavaScript library that enables you to add color to console output easily. It provides methods to add text in different colors to a buffer and then write the buffered text to the console.

## Installation

You can install Color2Console via npm:

```bash
npm install color2console
```

## Usage

```typescript
import Color2Console from "color2console";

// Add colored text to the buffer
Color2Console.T_RED("Hello").T_GREEN("World").WRITE_LOG();
```

## API

### `T_RED(text: string): Color2Console`

Adds the specified text in red color to the buffer.

### `T_BLUE(text: string): Color2Console`

Adds the specified text in blue color to the buffer.

### `T_GREEN(text: string): Color2Console`

Adds the specified text in green color to the buffer.

### `T_YELLOW(text: string): Color2Console`

Adds the specified text in yellow color to the buffer.

### `T_MAGENTA(text: string): Color2Console`

Adds the specified text in magenta color to the buffer.

### `T_CYAN(text: string): Color2Console`

Adds the specified text in cyan color to the buffer.

### `T_WHITE(text: string): Color2Console`

Adds the specified text in white color to the buffer.

### `WRITE_LOG(): void`

Writes the buffered text to the console.

## Example

```typescript
import Color2Console from "color2console";

Color2Console.T_RED("Error: ").T_WHITE("Something went wrong").WRITE_LOG();
```

## License

This project is licensed under the MIT License.
