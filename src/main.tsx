import "@oneds/tokens/css/navify-light/variables.css" // Example for Navify Light theme
import "@oneds/fonts/fonts.css"
import "@oneds/styles/styles.css"
import "@oneds/styles/globals.css"
import "./index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
