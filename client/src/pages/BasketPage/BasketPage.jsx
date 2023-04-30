import React from "react"
import styles from "./BasketPage.module.css"
import { Header } from "../../components/Header/Header"
import { BasketPrices } from "../../components/BasketPrices/BasketPrices"
import { BooksList } from "../../components/BooksList/BooksList"

export const BasketPage = () => {
	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.wrapper}>
				<div className={styles.left_block}>
					<BasketPrices />
				</div>
				<div className={styles.right_block}>
					<BooksList />
				</div>
			</div>
		</div>
	)
}
