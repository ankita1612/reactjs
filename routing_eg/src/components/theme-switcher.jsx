/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

 const ThemeSwitcher = ({ children }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: isDarkMode ? "#121212" : "#f0f0f0",
        color: isDarkMode ? "#fff" : "#000",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "3rem",
      }}
    >
      <h1>{isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}  

export default ThemeSwitcher;