const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve('./src/templates/blogPost.js');

	return graphql(`
		{
			allMdx(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { published: { eq: true } } }
			) {
				nodes {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
					}
					slug
				}
			}
		}
	`).then((result) => {
		if (result.error) {
			throw result.error;
		}
		const posts = result.data.allMdx.nodes;

		posts.forEach((post, index) => {
			const previous = index === post.length - 1 ? null : post[index + 1];
			const next = index === 0 ? null : post[index - 1];
			createPage({
				path: post.slug,
				component: blogPostTemplate,
				context: {
					slug: post.slug,
					previous,
					next,
				},
			});
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MDX') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
