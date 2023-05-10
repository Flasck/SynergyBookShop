import React from "react"
import styles from "./Xinput.module.css"

export const Xinput = ({ id, type, placeholder }) => {
	return (
		<article className={styles.wrapper}>
			<input id={id} name={id} type={type} className={styles.input} required="required" />
			<label htmlFor={id} className={styles.placeholder}>
				{placeholder}
			</label>
		</article>
	)
}
