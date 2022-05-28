import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

const graphqlAPI = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

const query = gql`
	query Post($slug: String!) {
		post(where: { slug: $slug }) {
			author {
				bio
				id
				name
				photo {
					url
				}
			}
			createdAt
			slug
			title
			excerpt
			featuredImage {
				url
			}
			content {
				text
			}
		}
	}
`;

const SLUGLIST = gql`
	{
		posts {
			slug
		}
	}
`;

export async function getStaticPaths() {
	const { posts } = await graphqlAPI.request(SLUGLIST);
	return {
		paths: posts.map((post) => ({ params: { slug: post.slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const slug = params.slug;
	const data = await graphqlAPI.request(query, { slug });
	const post = data.post;

	return {
		props: { post },
	};
}

export default function BlogPost({ post }) {
	return (
		<>
			<p>{post.content.text}</p>
			<Link href="/">Home</Link>
		</>
	);
}
