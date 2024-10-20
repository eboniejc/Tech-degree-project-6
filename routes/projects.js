const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/:id', (req, res) => {
  const projectId = req.params.id;
  const project = data.projects[projectId];
  if (project) {
    res.render('project', { project });
  } else {
    res.status(404).render('error', { message: 'Project not found' });
  }
});



module.exports = router;