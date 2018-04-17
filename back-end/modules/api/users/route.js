const express = require('express');
const router = express.Router();

const userController = require('./userController')

router.get('/', (req, res) => {
  userController
  .getAllUser(req.query.page || 1) 
  .then(users => res.send(users))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.get('/:id', (req, res) => {
  userController
  .getUser(req.params.id)
  .then(user => res.send(user))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.post ('/', (req,res) => {
  userController
  .createUser(req.body)
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.delete ('/:id', (req, res) => {
  userController
  .deleteUser(req.params.id)
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/username', (req, res) => {
  userController
  .updateUserName(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/email', (req, res) => {
  userController
  .updateUserEmail(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/avatar', (req, res) => {
  userController
  .updateUserAvatar(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/username', (req, res) => {
  userController
  .updateUserName(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/password', (req, res) => {
  userController
  .updateUserPassword(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/avatar', (req, res) => {
  userController
  .updateUserAvatar(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

router.put ('/:id/email', (req, res) => {
  userController
  .updateUserEmail(req.params.id, req.body) 
  .then(result => res.send(result))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  })
})

module.exports = router;