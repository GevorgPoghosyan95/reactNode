const Router = require('express').Router
const router = new Router();
const authRouter = new Router();
const AdminController = require('../controllers/admin-controller')
const LoginController = require('../controllers/login-controller')
const RegisterController = require('../controllers/register-controller')
const checkMiddleware = require('../middlewares/checkMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const errorMiddleware = require('../middlewares/error-middleware')
const loginRequest = require('../requests/createUser')
const registrationRequest = require('../requests/registrationRequest')
const PostController = require('../controllers/post-controller')


router.use(errorMiddleware)
router.post('/login',checkMiddleware(loginRequest),LoginController.login)
router.post('/registration',checkMiddleware(registrationRequest),RegisterController.registration)
router.get('/refresh',LoginController.refresh)


authRouter.use(authMiddleware)
authRouter.post('/logout',LoginController.logout)
authRouter.post('/getPostsById',AdminController.getPostsById)
authRouter.post('/post/create',PostController.create)
authRouter.post('/post/delete',PostController.delete)
authRouter.post('/getUsers',AdminController.get_users)
authRouter.post('/editUserById',AdminController.editUserById)
authRouter.post('/sendRequest',AdminController.sendRequest)
authRouter.post('/getRequests',AdminController.getRequests)

module.exports = {router,authRouter};