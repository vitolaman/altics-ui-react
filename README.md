# Altics UI

An accessible React component library with TypeScript types and a token-based theme. The packaged CSS includes all component styles, so consuming Tailwind projects do not need to scan this package.

## Install and use

```bash
npm install @altics/ui
```

```tsx
import "@altics/ui/styles.css";
import { Button, Card, Input } from "@altics/ui";

export function SignIn() {
  return <Card className="p-6"><Input placeholder="Email" /><Button className="mt-4">Continue</Button></Card>;
}
```

## Theming

The stylesheet follows the system preference by default. Add `light` or `dark` to the document root to explicitly choose a theme, or use `ThemeProvider` with `defaultTheme="light"`, `"dark"`, or `"system"`. Override semantic CSS variables such as `--color-primary` in your application stylesheet.

Available components: Button, Input, Textarea, Label, Card, Badge, Avatar, Separator, Alert, Spinner, Skeleton, Stack, Container, and Grid.

## Development and publishing

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm pack --dry-run
```

The playground is development-only and is excluded from npm through the `files` allowlist. `prepublishOnly` builds the package before `npm publish`.
