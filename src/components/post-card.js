import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const PostCard = ({ title, date, image }) => {
	return (
		<Card sx={{ borderRadius: 2 }}>
			<CardHeader
				titleTypographyProps={{
					fontSize: 20,
					marginBottom: 1,
				}}
				title={title}
				subheaderTypographyProps={{
					fontSize: 14,
				}}
				subheader={date}
			/>
			<CardContent>
				<StaticImage
					src="../images/javascript-download.png"
					alt="A dinosaur"
					placeholder="blurred"
					style={{ borderRadius: 5, overflow: 'hidden' }}
				/>
			</CardContent>
		</Card>
	);
};

export default PostCard;
