const Router = require("express")

const router = new Router()

router.post("/registration") // Создать пользователя
router.post("/login") // Авторизовать пользователя
router.get("/auth") // Проверить JWT

module.exports = router
