import fileUpload from "express-fileupload"
import { read, write } from "../utils/model.js"
import path from 'path'
import moment from 'moment';
moment.locale('uz-latn')

let GET = (req, res) => {
    let posts = read('posts')
    let users = read('users')
    let {
        page = process.DEFAULT.pagination.page,
        limit = process.DEFAULT.pagination.limit,
    } = req.query

    let data = posts.filter(post => {

        post.user = users.find(user => user.admin_id == post.users_id && user.fullname && user.tel && delete user.password && delete user.userId)

        posts.date_to = moment(posts.date_to).format("LLLL")

        return post
    }).slice((page - 1) * limit, page * limit);

    res.send(data)
}

let POSTS = (req, res) => {
    try {
        let posts = read('posts')
        let users = read('users')

        let { avatar } = req.files;

        let {
            title,
            body,
            count = 0,
            delete_at,
            dataH,
            dataY,
            status,
            dataX,
            date_to,
            fullname,
            tel
        } = req.body
        // // // // // 

        if (!title) {
            res.json('invalid title')
            return
        }
        if (!(title.trim() && title.length >= 3)) {
            res.json('invalid title')
            return
        }
        if (!tel) {
            res.json('invalid tel')
            return
        }
        if (!(tel.trim() && tel.length >= 3)) {
            res.json('invalid phone number')
            return
        }
        // // // // //

        if (!body) {
            res.json('invalid body')
            return
        }
        if (!(body.trim() && body.length >= 1)) {
            res.json('invalid body')
            return
        }
        // // // // //

        if (!tel) {
            res.json('invalid number')
            return
        }
        if (!(tel.trim() && tel.length >= 8)) {
            res.json('invalid tel')
            return
        }
        // // // // //
        if (!delete_at) {
            res.json('delete_at undefined')
            return
        }
        if (!(delete_at.trim() && delete_at.length >= 3)) {
            res.json('invalid delete_at')
            return
        }
        // // // // // 

        if (!dataH) {
            res.json('dataH')
            return
        }
        if (!(dataH.trim() && dataH.length >= 1)) {
            res.json('invalid dataH')
            return
        }
        // // // // //

        if (!dataY) {
            res.json('dataY')
            return
        }
        if (!(dataY.trim() && dataY.length >= 1)) {
            res.json('invalid dataY')
            return
        }
        // // // // // //

        if (!status) {
            res.json('status')
            return
        }
        if (!(status.trim() && status.length >= 1)) {
            res.json('invalid status')
            return
        }
        // // // // // //

        if (!dataX) {
            res.json('dataX undefined')
            return
        }
        if (!(dataX.trim() && dataX.length >= 1)) {
            res.json('invalid dataX')
            return
        }
        // // // // // //

        // if (!date_to) {
        //     res.json('date_to undefined')
        //     return
        // }
        // if (!(date_to.trim() && date_to.length >= 1)) {
        //     res.json('invalid date_to')
        //     return
        // }
        // // // // //

        if (!fullname) {
            res.json('FullName Undefined')
            return
        }
        if (!(fullname.trim() && fullname.length >= 6)) {
            res.json('invalid FullName')
            return
        }
        // // // // //

        // let telVerify = posts.find(post => post.tel == tel)

        // if (telVerify) {
        //     throw new Error('tel number exist')
        // }

        let fileName = Date.now() + avatar.name.replace(/\s/g, '')

        if (avatar.mimetype == 'image/jpeg' || avatar.mimetype == 'image/png' || avatar.mimetype == 'image/webp' || avatar.mimetype == 'image/svg') {
            avatar.mv(path.resolve('uploads/avatar', fileName))
        } else {
            avatar.mv(path.resolve('uploads/video', fileName))
        }

        let newPosts = {
            post_id: posts.at(-1)?.post_id + 1 || 1,
            title,
            body,
            avatar: fileName,
            count,
            delete_at,
            dataH,
            dataY,
            status,
            dataX,
            date_to: Date.now()
        }

        console.log(newPosts);

        if (!newPosts) {
            throw new Error('invalid posts')
        }

        let newUsers = {
            users_id: posts.at(-1)?.post_id + 1 || 1,
            fullname,
            tel
        }

        users.push(newUsers)

        write('users', users)

        posts.push(newPosts)

        write('posts', posts)

        res.status(201).json(
            {
                status: 201,
                message: 'posts added',
                posts: newPosts,
                info: newUsers
            }
        )

    } catch (error) {

        res.status(
            {
                status: 400,
                message: error.message
            }
        )
    }
}

export {
    GET,
    POSTS
}