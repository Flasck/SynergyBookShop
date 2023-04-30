import React from "react"
import styles from "./ShopPage.module.css"
import { Header } from "../../components/Header/Header"
import { BooksGenres } from "../../components/BooksGenres/BooksGenres"
import { BooksList } from "../../components/BooksList/BooksList"

export const ShopPage = () => {
	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.wrapper}>
				<div className={styles.left_block}>
					<BooksGenres />
				</div>
				<div className={styles.right_block}>
					<BooksList />
				</div>
			</div>
		</div>
	)
}
