const express = require('express')
const authRouteHandler = require('./routesAPI/auth.js')
const userRouteHandler = require('./routesAPI/users.js')
const postRouteHandler = require('./routesAPI/post.js')
const likeRouteHandler = require('./routesAPI/likes.js')
const commentsRouteHandler = require('./routesAPI/comments.js')
const filesRouteHandler = require('./routesAPI/files.js')

const router = express.Router()

router.use("/auth", authRouteHandler)
router.use("/api/users", userRouteHandler)
router.use("/api/posts", postRouteHandler)
router.use("/api/likes", likeRouteHandler)
router.use("/api/comments", commentsRouteHandler)
router.use("/api/files", filesRouteHandler)

module.exports = () => router