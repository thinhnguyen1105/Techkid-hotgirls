//xử lý logic 


const imageModel = require('./imageModel');

const createImage = ({
    imageUrl,
    title,
    description,
    createdBy
}) => new Promise((resolve, reject) => {
    imageModel.create({
            imageUrl,
            title,
            description,
            createdBy
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
});

const getAllImage = page => new Promise((resolve, reject) => {
    imageModel.find({
            "active": true
        })
        .sort({
            createdAt: -1
        })
        .skip((page - 1) * 20)
        .limit(20)
        .select("_id imageUrl description createdAt createdBy view like ")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const getImage = id => new Promise((resolve, reject) => {
    imageModel
        .findOne({
            active: true,
            _id: id
        })
        .select("_id imageUrl description createdAt createdBy view like comment")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
})

const updateImage = (imageId,{
    imageUrl,
    title,
    description,
    createdBy
}) => new Promise((resolve, reject) => {
    imageModel.update({
            _id: imageId
        }, {
            imageUrl,
            title,
            description,
            createdBy
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const deleteImage = id => new Promise((resolve, reject) => {
    imageModel.update({
            _id: id
        }, {
            active: false
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const addComment = (imageId, {
        createdBy,
        content
    }) =>
    new Promise((resolve, reject) => {
        imageModel.update({
                _id: imageId
            }, {
                $push: {
                    comment: {
                        createdBy,
                        content
                    }
                }
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

const likeImage = (imageId) =>
    new Promise((resolve, reject) => {

        imageModel
            .update({
                _id: imageId
            }, {
                $inc: {
                    like: +1
                }
            })

            .then(data => resolve(data))
            .catch(err => reject(err))

    })

const unlikeImage = (imageId) =>
    new Promise((resolve, reject) => {
        imageModel
            .update({
                _id: imageId

            }, {
                $inc: {
                    like: -1
                }
            })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const deleteComment = (imageId, commentId) =>
    new Promise((resolve, reject) => {
        imageModel
            .update({
                _id: imageId
            }, {
                $pull: {
                    comment: {
                        _id: commentId
                    }
                }
            })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const createUser =({

})




module.exports = {
    createImage,
    getAllImage,
    updateImage,
    deleteImage,
    getImage,
    addComment,
    likeImage,
    unlikeImage,
    deleteComment
}
