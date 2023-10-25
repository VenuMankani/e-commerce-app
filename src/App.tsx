import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Container sx={{ marginTop: 4, marginBottom: 4 }}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Store />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
