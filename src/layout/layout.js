import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import Footer from './footer';
import Header from './header';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
	status: {
		danger: orange[500],
	},
	palette: {
		mode: 'dark',
	},
});

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<header style={{ marginBottom: 30 }}>
					<Header />
				</header>
				<main>
					<Container>{children}</Container>
				</main>
				<footer style={{ marginTop: 20 }}>
					<Footer />
				</footer>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default Layout;
