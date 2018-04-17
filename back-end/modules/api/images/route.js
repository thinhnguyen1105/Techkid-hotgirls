//map đường dẫn từ controller sang hàm 

const express = require('express');
const router = express.Router();
const imageController = require('./imageController')

//GET ALL IMAGE
router.get('/',(req,res)=>{
    imageController
    .getAllImage(req.query.page || 1)
    .then(images => res.send(images))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);

    });
});
//CREATE IMAGE 
router.post('/',(req,res)=>{
    imageController
    .createImage(req.body)
    .then(result => res.send(result))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })

})
//GET ONE IMAGE 
router.get('/:id',(req,res)=>{
    imageController
    .getImage(req.params.id)
    .then(result => res.send(result))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })

})
//ADD COMMENT 
router.post('/:imageId/comments',(req,res)=>{
    imageController
    .addComment(req.params.imageId,req.body)
    .then(id => res.send(id))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })
})
//LIKE IMAGE
router.post('/:imageId/likes',(req,res)=>{
    imageController
    .likeImage(req.params.imageId)
    .then(id => res.send(id))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })
})
//UNLIKE IMAGE
router.post('/:imageId/unlikes',(req,res)=>{
    imageController
    .unlikeImage(req.params.imageId)
    .then(id => res.send(id))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })
})
//DELETE COMMENT 
router.post('/:imageId/:commentId/deletecomment',(req,res)=>{
    imageController
    .deleteComment(req.params.imageId,req.params.commentId)
    .then(id => res.send(id))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })
})
//UPDATE IMAGE 
router.put('/:imageId',(req,res)=>{
    imageController
    .updateImage(req.params.imageId,req.body)
    .then(images => res.send(images))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })

})

router.delete('/:imageId',(req,res)=>{
    imageController
    .deleteImage(req.params.imageId)
    .then(images => res.send(images))
    .catch(err=>{
        console.error(err);
        res.status(500).send(err);
    })
})


module.exports = router;