import React from "react"
import styles from "./Comment.module.css"

export const Comment = ({ name, message }) => {
	return (
		<div className={styles.root}>
			<h1 className={styles.name}>{name}</h1>
			<p className={styles.message}>{message}</p>
		</div>
	)
}
