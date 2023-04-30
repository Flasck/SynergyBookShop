const Router = require("express")
const userRouter = require("./userRouter")
const bookRouter = require("./bookRouter")

const router = new Router()

router.use("/user", userRouter)
router.use("/book", bookRouter)

module.exports = router
