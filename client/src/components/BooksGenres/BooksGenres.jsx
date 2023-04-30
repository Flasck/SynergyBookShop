import React from "react"
import styles from "./BooksGenres.module.css"

export const BooksGenres = () => {
	const sp = ["Комедия", "Триллер", "Романтика", "Боевик", "Мистика", "Детектив"]
	return (
		<ul className={styles.root}>
			{sp.map((el) => (
				<li className={styles.genre}>{el}</li>
			))}
		</ul>
	)
}
