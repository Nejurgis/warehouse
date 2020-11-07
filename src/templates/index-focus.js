import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll, Layout } from "_components";

export const IndexFocus = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} />;
};
IndexFocus.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query IndexFocusQuerry {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "focus-page" } }
					}
				) {
					edges {
						node {
							htmlAst
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								author
								date(formatString: "MMMM DD, YYYY")
								content {
									type
									image {
										publicURL
										childImageSharp {
											fixed(maxWidth: 1040, quality: 80) {
												...GatsbyImageSharpFluid_withWebp_tracedSVG
											}
										}
									}
									caption
									body
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <IndexFocus data={data} count={count} />}
	/>
);
