import Grid from '@mui/material/Grid';
import * as React from 'react';
import PostCard from '../components/post-card';
import Layout from '../layout/layout';

const IndexPage = () => {
	return (
		<Layout>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<PostCard
						title="Download file from api with authorization token"
						date="September 14, 2016"
						image="../images/javascript-download.png"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<PostCard
						title="Download file from api with authorization token"
						date="September 14, 2016"
						image="../images/javascript-download.png"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<PostCard
						title="Download file from api with authorization token"
						date="September 14, 2016"
						image="../images/javascript-download.png"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<PostCard
						title="Download file from api with authorization token"
						date="September 14, 2016"
						image="../images/javascript-download.png"
					/>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default IndexPage;
