const router = require('express').Router();

const blogController = require('../controllers/blog.js');
const upload = require('../middlewares/upload-photo.js');

/** Add new Blog */
router.post('/blog', upload.single('photo'), blogController.PostAddBlog);

/** Get All Blogs */
router.get('/blog', blogController.getAllBlogs);

/** get User Blogs */
router.get('/blog/:userId', blogController.getUserBlogs);

router.get('/interest', blogController.getInterstedBlogs);
router.get('/going', blogController.getGoingBlogs);

router.get('/going/:id/:userid', blogController.getAddGoing);
router.get('/interest/:id/:userid', blogController.getAddInterseted);


module.exports = router;
