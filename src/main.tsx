
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createSystem } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

const system = createSystem()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)