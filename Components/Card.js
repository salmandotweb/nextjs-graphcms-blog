import React from "react";
import moment from "moment";
import classes from "../styles/Card.module.css";
import Link from "next/link";

const Card = ({ post }) => {
	console.log(post);
	return (
		<div className={classes.card}>
			<div className={classes.authorImg}>
				<img src={post.author.photo.url} alt="" />
			</div>
			<h4 className={classes.title}>{post.excerpt}</h4>
			<p className={classes.date}>
				{moment(post.createdAt).format("MMM DD, YYYY")}
			</p>
			<div className={classes.featuredImage}>
				<img src={post.featuredImage.url} alt="" />
			</div>
			<Link href={`/post/${post.slug}`} passHref>
				<button className="ghostBtn">Continue</button>
			</Link>
		</div>
	);
};

export default Card;
