import React from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
const classnames = require("classnames")

export const Header = () => {
	let path = window.location.pathname

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.group}>
					<Link to="/" className={classnames(styles.link, { [styles.underlined]: path == "/" })}>
						Магазин
					</Link>
					<Link to="/basket" className={classnames(styles.link, { [styles.underlined]: path == "/basket" })}>
						Корзина
					</Link>
				</div>
				<div className={styles.group}>
					<Link to="/login" className={classnames(styles.link, { [styles.underlined]: path == "/login" })}>
						Вход
					</Link>
					<Link
						to="/registration"
						className={classnames(styles.link, { [styles.underlined]: path == "/registration" })}
					>
						Регистрация
					</Link>
				</div>
			</nav>
		</header>
	)
}
