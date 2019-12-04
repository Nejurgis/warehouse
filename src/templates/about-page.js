import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/utils";

export const AboutPageTemplate = ({
	title,
	leftColumn,
	html,
	content,
	contentComponent,
	blurbs,
}) => {
	const PageContent = contentComponent || Content;

	return (
		<div className="about-background">
			<Link className="close" id="white" to="/">
				<span className="white"></span>
				<span className="white"></span>
			</Link>
			<div className="about-wrapper">
				<div className="about-left">
					<h2 className="about-title">
						{title}
						<span className="about-caps">{leftColumn}</span>
					</h2>

				</div>
				<div className="about-right">
					{/* <p className="about-description">{rightColumn}</p> */}
					{console.log('content:', content)}
					<PageContent
					// style ={{"marginRight":"1.8rem","flex":"0 0 50%","overflowY":"scroll","WebkitOverflowScrolling":"touch","right":"0","width":"50%","height":"100vh","top":"0", "color":"white"}}
					className="about-right"
					content={content} />
					<ul className="colophon">
						{console.log("blurbs", blurbs)}
						{blurbs &&
							blurbs.map(el => {
								return (
									<>
										<li>{el.title}</li>
										<li>{el.subtitle}</li>
									</>
								);
							})}
					</ul>
					{/* <p className="about-description">
						Warehouse is made possible through the financial support
						of Stimuleringsfonds Creatieve Industrie
					</p>
					<p className="about-description">2019 Warehouse</p>
					<p className="about-copyright">No Rights etc.....</p> */}
				</div>
			</div>
		</div>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<AboutPageTemplate
				title={post.frontmatter.title}
				content={post.html}
				contentComponent={HTMLContent}
				leftColumn={post.frontmatter.leftColumn}
				colophon={post.frontmatter.colophon}
				blurbs={post.frontmatter.blurbs}
				rightColumn={post.frontmatter.rightColumn}
			/>
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				leftColumn
				blurbs {
					title
					subtitle
				}
			}
		}
	}
`;
