const express = require('express');
const router = express.Router();
const {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile,
} = require('../controllers/fileController');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getFiles).post(protect, createFile);
router.route('/:id').get(protect, getFile).put(protect, updateFile).delete(protect, deleteFile);

module.exports = router;