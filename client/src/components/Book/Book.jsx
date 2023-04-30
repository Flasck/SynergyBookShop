import React from "react"
import styles from "./Book.module.css"
import { BookCounter } from "../BookCounter/BookCounter"
import { Link } from "react-router-dom"

export const Book = ({ id, name, author, genre, price }) => {
	return (
		<article className={styles.wrapper}>
			<div className={styles.description}>
				<Link to={`/book/${id}`} className={styles.title}>
					{name}
				</Link>
				<h3 className={styles.subtitle}>{author}</h3>
				<h3 className={styles.subtitle}>{genre}</h3>
				<h2 className={styles.price}>{price} ₽</h2>
			</div>
			<BookCounter />
		</article>
	)
}
