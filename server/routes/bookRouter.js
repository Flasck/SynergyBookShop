const Router = require("express")

const router = new Router()

router.get("/") // Получить все книги
router.get("/:id") // Получить заданную книгу
router.post("/") // Создать книгу

module.exports = router
