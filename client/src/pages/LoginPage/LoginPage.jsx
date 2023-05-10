import React from "react"
import styles from "./LoginPage.module.css"
import { Header } from "../../components/Header/Header"
import { Xinput } from "../../components/Xinput/Xinput"

export const LoginPage = () => {
	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.wrapper}>
				<form className={styles.form}>
					<h1 className={styles.login}>Вход</h1>
					<Xinput id="email" type="text" placeholder="Email" />
					<Xinput id="password" type="password" placeholder="Пароль" />
					<button type="submit" className={styles.submit}>
						Войти
					</button>
				</form>
			</div>
		</div>
	)
}
