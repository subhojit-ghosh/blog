import { Container } from '@mui/material';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import Footer from './footer';
import Header from './header';
import { Helmet } from 'react-helmet';

const theme = createTheme({
	status: {
		danger: orange[500],
	},
	palette: {
		mode: 'dark',
	},
});

const Layout = ({ children, helmetProps = {} }) => {
	return (
		<React.Fragment>
			<Helmet
				htmlAttributes={{
					lang: 'en',
				}}
				{...helmetProps}
			/>
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
