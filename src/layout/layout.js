import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <header style={{ marginBottom: 20 }}>
        <Header />
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer style={{ marginTop: 20 }}>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Layout;
