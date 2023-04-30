import React from "react"
import styles from "./BasketPrices.module.css"

export const BasketPrices = () => {
	const books = [
		["Book1", "1", "200"],
		["Book2", "4", "400"],
		["Book3", "2", "500"],
	]
	return (
		<div className={styles.wrapper}>
			<div>
				<p className={styles.order}>Ваш заказ:</p>
				<div className={styles.books}>
					{books.map((el) => (
						<div className={styles.book}>
							<p className={styles.book_name}>{el[0]}</p>
							<p className={styles.book_amount}>{el[1]} шт</p>
							<p className={styles.book_price}>{el[2]} ₽</p>
						</div>
					))}
				</div>
			</div>
			<div className={styles.total}>
				<p className={styles.total_summ}>
					Итого: {books.reduce((partialSum, a) => partialSum + Number(a[2]), 0)} ₽
				</p>
				<button className={styles.buy_btn}>Купить</button>
			</div>
		</div>
	)
}
