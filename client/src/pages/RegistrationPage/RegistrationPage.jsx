import React from "react"
import styles from "./RegistrationPage.module.css"
import { Header } from "../../components/Header/Header"
import { Xinput } from "../../components/Xinput/Xinput"

export const RegistrationPage = () => {
	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.wrapper}>
				<form className={styles.form}>
					<h1 className={styles.login}>Регистрация</h1>
					<Xinput id="fullname" type="text" placeholder="ФИО" />
					<Xinput id="passport" type="text" placeholder="Паспортные данные" />
					<Xinput id="email" type="text" placeholder="Email" />
					<Xinput id="password" type="password" placeholder="Пароль" />
					<button type="submit" className={styles.submit}>
						Продолжить
					</button>
				</form>
			</div>
		</div>
	)
}
