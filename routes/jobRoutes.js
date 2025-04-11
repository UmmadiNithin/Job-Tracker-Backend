const express = require('express');
const router = express.Router();
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');

router.get('/getAll', getJobs);
router.post('/add', addJob);
router.put('/update/:id', updateJob);
router.delete('/delete/:id', deleteJob);

module.exports = router;
