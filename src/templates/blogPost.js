import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import Layout from '../layout/layout';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const BlogPosts = ({ data }, pageContext) => {
	const { frontmatter, body } = data.mdx;
	const { previous, next } = pageContext;

	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<article>
				<MDXRenderer>{body}</MDXRenderer>
			</article>
			{previous && (
				<Link to={previous.slug}>
					<button>{previous.frontmatter.title}</button>{' '}
				</Link>
			)}
			{next && (
				<Link to={next.slug}>
					<button>{next.frontmatter.title}</button>{' '}
				</Link>
			)}
		</Layout>
	);
};

export default BlogPosts;

export const query = graphql`
	query PostsBySlug($slug: String!) {
		mdx(slug: { eq: $slug }) {
			body
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;
