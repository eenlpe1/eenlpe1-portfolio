import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1>Hello World</h1>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
