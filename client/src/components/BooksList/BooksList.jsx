import React from "react"
import styles from "./BooksList.module.css"
import { Book } from "../Book/Book"

export const BooksList = () => {
	return (
		<div className={styles.root}>
			<Book id="1" name="Война и мир" author="Л.Н. Толстой" genre="роман-эппопея" price="999" />
			<Book id="1" name="Война и мир" author="Л.Н. Толстой" genre="роман-эппопея" price="999" />
			<Book id="1" name="Война и мир" author="Л.Н. Толстой" genre="роман-эппопея" price="999" />
			<Book id="1" name="Война и мир" author="Л.Н. Толстой" genre="роман-эппопея" price="999" />
			<Book id="1" name="Война и мир" author="Л.Н. Толстой" genre="роман-эппопея" price="999" />
			<Book id="1" name="Война и мир" author="Л.Н. Толстой" genre="роман-эппопея" price="999" />
		</div>
	)
}
