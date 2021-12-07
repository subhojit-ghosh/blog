import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

const PostCard = ({ title, date, image }) => {
	return (
		<Card
			sx={{
				borderRadius: 2,
				':hover': {
					boxShadow: 20,
				},
			}}
			style={{
				height: '100%',
			}}
		>
			<CardHeader
				titleTypographyProps={{
					fontSize: 18,
					marginBottom: 1,
				}}
				title={title}
				subheaderTypographyProps={{
					fontSize: 14,
				}}
				subheader={date}
			/>
			<CardContent>
				<GatsbyImage
					image={getImage(image)}
					alt={`Thumbnail ${title}`}
					style={{ borderRadius: 5, overflow: 'hidden' }}
				/>
			</CardContent>
		</Card>
	);
};

export default PostCard;
