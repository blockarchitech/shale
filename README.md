# Shale 

A React component library, inspired by [Slate](https://github.com/pebble/slate).

## Installation

```bash
npm install @blockarchitech/shale
```

## Components

### Button
A button component.
```tsx
import { Button } from '@blockarchitech/shale';
<Button value="Click me" />
```

### Checkbox
A checkbox component.
```tsx
import { Checkbox } from '@blockarchitech/shale';
<Checkbox checked={true} onChange={handleChange} />
```

### Container
Components for grouping items.
```tsx
import { ItemContainer, ItemContainerHeader, ItemContainerContent, ItemContainerFooter, Item, ButtonContainer } from '@blockarchitech/shale';
<ItemContainer>
  <ItemContainerHeader>Header</ItemContainerHeader>
  <ItemContainerContent>Content</ItemContainerContent>
  <ItemContainerFooter>Footer</ItemContainerFooter>
</ItemContainer>
```

### DateInput
A date input component.
```tsx
import { DateInput } from '@blockarchitech/shale';
<DateInput />
```

### Paragraph
A paragraph component for text blocks.
```tsx
import { Paragraph } from '@blockarchitech/shale';
<Paragraph>Some text</Paragraph>
```

### Select
A select dropdown component.
```tsx
import { Select } from '@blockarchitech/shale';
<Select value={val} onChange={handleChange}>
  <option value="1">One</option>
</Select>
```

### Toggle
A toggle switch component.
```tsx
import { Toggle } from '@blockarchitech/shale';
<Toggle checked={true} onChange={handleChange} />
```

## Theming
To use Shale, wrap your application in the `ShaleTheme` provider. This will provide the theme and global styles to all components.

```tsx
import { ShaleTheme } from '@blockarchitech/shale';

<ShaleTheme>
  {/* your app */}
</ShaleTheme>
```

You can also provide a custom theme to `ShaleTheme`:
```tsx
import { ShaleTheme } from '@blockarchitech/shale';

const myTheme = {
  // ... your theme overrides
};

<ShaleTheme theme={myTheme}>
  {/* your app */}
</ShaleTheme>
```

## Contributing

This project uses Vite for development and building the library.

### Development

To start the development server, run:

```bash
npm run dev
```

### Building

The `vite.config.ts` is configured to build the library for production. The entry point is `src/components/shale/index.ts`. The build generates a `dist` folder with the library files.

The following dependencies are externalized and not included in the bundle: `react`, `react-dom`, and `styled-components`.

To build the library, run:

```bash
npm run build
```

## License
MIT
