const { authenticateJWT } = require("../middleware/authMiddleware")
const post_ctrl = require('../controllers/post_ctrl');
const { body } = require("express-validator");

module.exports = (app) => {
  const router = app.Router()

  router.get('/list', authenticateJWT, post_ctrl.index)
  router.post('/create', authenticateJWT, post_ctrl.save
    [
        body('content_text').notEmpty().withMessage('content text is required')
    ],post_ctrl.save)

  return router
}
