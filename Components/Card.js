import React from "react";
import classes from "../styles/Card.module.css";

const Card = ({ post }) => {
	return (
		<div className={classes.card}>
			<div className={classes.authorImg}>
				<img src={post.author.photo.url} alt="" />
			</div>
			<h4 className={classes.title}>{post.excerpt}</h4>
			<p className={classes.date}>{post.createdAt}</p>
			<div className={classes.featuredImage}>
				<img src={post.featuredImage.url} alt="" />
			</div>
		</div>
	);
};

export default Card;
