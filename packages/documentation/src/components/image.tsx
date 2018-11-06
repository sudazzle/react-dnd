// tslint:disable jsx-no-lambda
import * as React from 'react'
const Img = require('gatsby-image').default
const { StaticQuery, graphql } = require('gatsby')

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image: React.SFC = () => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
					childImageSharp {
						fluid(maxWidth: 300) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={(data: any) => (
			<Img fluid={data.placeholderImage.childImageSharp.fluid} />
		)}
	/>
)
export default Image
