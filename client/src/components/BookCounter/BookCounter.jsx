import React, { useState } from "react"
import styles from "./BookCounter.module.css"
const classnames = require("classnames")

export const BookCounter = () => {
	const [score, setScore] = useState(0)

	const minus = () => setScore((state) => (state > 0 ? state - 1 : state))
	const plus = () => setScore((state) => (state < 10 ? state + 1 : state))

	return (
		<div className={styles.wrapper}>
			<button onClick={() => minus()} className={classnames(styles.minus_dis, { [styles.minus_act]: score > 0 })}>
				−
			</button>
			<span className={classnames(styles.score_dis, { [styles.score_act]: score > 0 })}>{score}</span>
			<button onClick={() => plus()} className={classnames(styles.plus_dis, { [styles.plus_act]: score < 10 })}>
				+
			</button>
		</div>
	)
}
