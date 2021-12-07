module.exports = {
	pathPrefix: '/blog',
	siteMetadata: {
		siteUrl: 'https://useforcode.com',
		title: 'Use For Code',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'blog',
				path: `${__dirname}/blog`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							terminal: 'carbon',
							theme: 'blackboard',
							lineNumbers: true,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 12000,
						},
					},
				],
			},
		},
	],
};
