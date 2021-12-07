import Grid from '@mui/material/Grid';
import { graphql, Link } from 'gatsby';
import * as React from 'react';
import PostCard from '../components/post-card';
import Layout from '../layout/layout';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Grid container spacing={2}>
				{data.allMdx.nodes.map((node) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={node.slug}>
						<Link to={node.slug}>
							<PostCard
								title={node.frontmatter.title}
								date={node.frontmatter.date}
								image={node.frontmatter.thumbnail}
							/>
						</Link>
					</Grid>
				))}
			</Grid>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	{
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM DD, YYYY")
					title
					thumbnail {
						childImageSharp {
							gatsbyImageData(
								width: 400
								placeholder: BLURRED
								formats: [AUTO, WEBP, AVIF]
							)
						}
					}
				}
				slug
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;
