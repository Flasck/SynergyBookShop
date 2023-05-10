import React from "react"
import styles from "./BookPage.module.css"
import { Header } from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import { BookCounter } from "../../components/BookCounter/BookCounter"
import { Comment } from "../../components/Comment/Comment"

export const BookPage = () => {
	let { id } = useParams()
	const book = {
		name: "Несносное проклятье некроманта",
		author: "Блинова Маргарита",
		genre: "Фэнтези",
		price: "1230",
		annotation:
			"Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить что-нибудь для вечной любви Подумай  некромантии!",
		comments: {
			Me: [
				"С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке Несносное проклятье некроманта.",
			],
			u: [
				"С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке Несносное проклятье некроманта.",
			],
			another: [id, "wegeqrherthn"],
			another2: [id],
			another3: [id, id],
			another4: [id],
			another5: [id],
			another6: [id],
		},
	}

	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.wrapper}>
				<section className={styles.description}>
					<article className={styles.preview}>
						<h1 className={styles.name}>{book.name}</h1>
						<h5 className={styles.author}>{book.author}</h5>
						<h5 className={styles.genre}>{book.genre}</h5>
						<div className={styles.buy}>
							<h2 className={styles.price}>{book.price} ₽</h2>
							<BookCounter />
						</div>
					</article>
					<article className={styles.annotation}>
						<h1 className={styles.title}>Аннотация</h1>
						<p className={styles.text}>{book.annotation}</p>
					</article>
				</section>
				<div className={styles.comments}>
					{Object.keys(book.comments).map((el) =>
						book.comments[el].map((com) => <Comment name={el} message={com} />)
					)}
				</div>
			</div>
		</div>
	)
}
