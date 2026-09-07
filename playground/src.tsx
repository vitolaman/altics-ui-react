import { createRoot } from "react-dom/client";
import { useState } from "react";
import "../src/styles/index.css";
import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Input,
  Skeleton,
  Stack,
  Textarea,
} from "../src";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <main
      className={
        dark
          ? "dark min-h-screen bg-background py-10 text-foreground"
          : "min-h-screen bg-background py-10 text-foreground"
      }
    >
      <Container>
        <Stack>
          <Button
            className="self-start"
            variant="outline"
            onClick={() => setDark(!dark)}
          >
            Toggle theme
          </Button>
          <Card>
            <Card.Header>
              <h1 className="text-xl font-semibold">Altics UI</h1>
              <Badge>Preview</Badge>
            </Card.Header>
            <Card.Content>
              <Stack>
                <Alert>Accessible, token-based components.</Alert>
                <Input placeholder="Email address" />
                <Textarea placeholder="Message" />
                <div className="flex gap-2">
                  <Button>Save</Button>
                  <Button loading variant="secondary">
                    Saving
                  </Button>
                  <Button disabled variant="outline">
                    Disabled
                  </Button>
                </div>
                <Skeleton className="h-8 w-48" />
              </Stack>
            </Card.Content>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
