import { useTheme } from "./mock-theme-context";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

