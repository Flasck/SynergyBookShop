import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import styles from "./App.module.css"
import { ShopPage } from "./pages/ShopPage/ShopPage"
import { BookPage } from "./pages/BookPage/BookPage"
import { BasketPage } from "./pages/BasketPage/BasketPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<ShopPage />} />
				<Route path="/basket" element={<BasketPage />} />
				<Route path="/book/:name" element={<BookPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
			</Routes>
		</BrowserRouter>
	)
}
