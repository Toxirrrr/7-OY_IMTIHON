import { read, write } from '../utils/model.js';
import { checkToken } from '../utils/tokens.js';

let GETPENDING =  (req, res) => {
    try {
        let posts = read("posts")

        let pendining = posts.filter(post => post.status == "pending")

        res.status(200).json({ status: 200, data: pendining })
    } catch (error) {
        res.status(403)
    }
}

let USERSAPPLY = (req, res) => {
    try {
        let posts = read("posts")
        let { postId } = req.params

        let post = posts.find(post => post.post_id == postId)
        if (post.status == "pending") {
            post.status = "active"

            write("posts", posts)
            res.status(200).json({ status: 200, data: post })
        } else {
            res.status(400).json({ status: 400, message:"post is not pending"})
        }
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message })
    }
}

let USERSEJECT =  (req, res) => {
    try {
        let posts = read("posts")
        let { postId } = req.params

        let post = posts.find(post => post.post_id == postId)
        if (post.status == "pending") {
            post.status = "rejected"

            write("posts", posts)
            res.status(200).json({ status: 200, data: post })
        } else {
            res.status(400).json({ status: 400, message:"post is not pending"})
        }
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message })
    }
}

export {
    GETPENDING,
    USERSAPPLY,
    USERSEJECT
}