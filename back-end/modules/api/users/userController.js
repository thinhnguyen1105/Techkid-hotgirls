const userModel = require('./userModel');

const createUser = ({
        avatar,
        username,
        password,
        email
    }) => new Promise((resolve, reject) => {
        userModel.create({
            avatar,
            username,
            password,
            email
        })
    })
    .then(data => resolve({
        id: data._id
    }))
    .catch(err => reject(err))

const getAllUser = page => new Promise((resolve, reject) => {
    userModel.find({
            'active': true
        })
        .sort({
            createAt: -1
        })
        .skip((page - 1) * 20)
        .limit(20)
        .select("avatar username password email")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const getUser = id => new Promise((resolve, reject) => {
    userModel.findOne({
            active: true,
            _id: id
        })
        .select("avatar username password email")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const updateUserName = (id, {
    username
}) => new Promise((resolve, reject) => {
    userModel.update({
            _id: id
        }, {
            username
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const updateUserEmail = (id, {
    email
}) => new Promise((resolve, reject) => {
    userModel.update({
            _id: id
        }, {
            email
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const updateUserAvatar = (id, {
    avatar
}) => new Promise((resolve, reject) => {
    userModel.update({
            _id: id
        }, {
            avatar
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const updateUserPassword = (id, {
    password
}) => new Promise((resolve, reject) => {
    userModel.update({
            _id: id
        }, {
            password
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const deleteUser = id => new Promise((resolve, reject) => {
    userModel.update({
            _id: id
        }, {
            active: false
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

module.exports = {
    createUser,
    getUser,
    getAllUser,
    updateUserAvatar,
    updateUserEmail,
    updateUserName,
    updateUserPassword,
    deleteUser
}