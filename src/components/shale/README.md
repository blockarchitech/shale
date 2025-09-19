# Shale UI Components

A set of reusable React components styled with styled-components and a custom theme. These components are designed for rapid prototyping and consistent UI in your projects.

## Components

### Button
A styled button using the theme's orange color.
```tsx
import { Button } from './shale';
<Button value="Click me" />
```

### Checkbox
A custom checkbox with a styled box and checkmark.
```tsx
import Checkbox from './shale/Checkbox';
<Checkbox checked={true} onChange={handleChange} />
```

### Container
A set of container components for grouping and styling items.
```tsx
import { ItemContainer, ItemContainerHeader, ItemContainerContent, ItemContainerFooter, Item, ButtonContainer } from './shale/Container';
<ItemContainer>
  <ItemContainerHeader>Header</ItemContainerHeader>
  <ItemContainerContent>Content</ItemContainerContent>
  <ItemContainerFooter>Footer</ItemContainerFooter>
</ItemContainer>
```

### DateInput
A styled date input field.
```tsx
import DateInput from './shale/DateInput';
<DateInput />
```

### Paragraph
A styled paragraph for text blocks.
```tsx
import { Paragraph } from './shale/Paragraph';
<Paragraph>Some text</Paragraph>
```

### Select
A custom select dropdown with a triangle indicator.
```tsx
import Select from './shale/Select';
<Select value={val} onChange={handleChange}>
  <option value="1">One</option>
</Select>
```

### Toggle
A toggle switch with an animated slider.
```tsx
import Toggle from './shale/Toggle';
<Toggle checked={true} onChange={handleChange} />
```

## Theming
All components use the theme provided by styled-components. Make sure to wrap your app with a ThemeProvider and provide the `theme` from `shale/theme.ts`.

```tsx
import { ThemeProvider } from 'styled-components';
import theme from './shale/theme';

<ThemeProvider theme={theme}>
  {/* your app */}
</ThemeProvider>
```

## License
MIT
