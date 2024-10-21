const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/:id', (req, res, next) => {
  const projectId = req.params.id;
  const project = data.projects[projectId];

  if (project) {
    res.render('project', { project });
  } else {
    const err = new Error('Project not found');
    err.status = 404;
    next(err);
  }
});



module.exports = router;