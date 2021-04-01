const Blog = require('../models/blog');
const User = require('../models/user');


exports.PostAddBlog = async (req, res) => {
   try{
       let blog = new Blog;
       blog.authorName = req.body.authorName;
       blog.title = req.body.title;
       blog.content = req.body.content;
       blog.date = Date.now();
       blog.photo = '/_nuxt/_/server/uploads/'+req.file.filename;
       await blog.save();
       res.json({
           status: true,
           message: "Successfully add blog",
       });
    }catch (err){
       console.log(err);
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

exports.getAllBlogs = async (req, res) => {
    try{
        let blogs = await Blog.find();
        res.json({
            status: true,
            blogs: blogs,
        });
    }catch (err){
        console.log(err)
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

exports.getUserBlogs = async (req, res) => {
    try{
        let blogs = await Blog.find({
            authorId: req.body.authorId,
        });
        res.json({
            status: true,
            blogs: blogs,
        });
    }catch (err){
        console.log(err)
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

exports.getInterstedBlogs = async (req, res) => {
    Blog.find().sort({interest: -1}).limit(3).exec(
        function(err, posts) {
            res.send(posts);
        }
    );
}

exports.getGoingBlogs = async (req, res) => {
    Blog.find().sort({going: -1}).limit(3).exec(
        function(err, posts) {
            res.send(posts);
        }
    );
}

exports.getAddGoing = async (req, res, next) => {
    Blog.findOne({_id:req.params.id}, function(error, post) {
        res.send(post);
        var going=post.going+1;
        post.set({interest:going});
        post.save(function(error, post){
        });
    });
    User.findOne({_id:req.params.userid}, function(error, user) {
        var state=user.state;
        state.push({postid:req.params.id,method:"going"})
        user.set({states:state});
        user.save(function(error, post){
            res.send(user);
        });
    });
}

exports.getAddInterseted = async (req, res, next) => {
    Post.findOne({_id:req.params.id}, function(error, post) {
        res.send(post);
        let interest=post.interest+1;
        post.set({
            interest:interest
        });
        post.save(function(error, post){});
    });
    User.findOne({_id:req.params.userid}, function(error, user) {
        let state=user.state;
        state.push({
            postid:req.params.id,
            method:"interest"
        })
        user.set({states:state});
        user.save(function(error, post){
            res.send(user);
        });
    });
}
