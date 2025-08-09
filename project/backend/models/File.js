const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
    maxlength: [50000, 'Content cannot exceed 50000 characters'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true,
});

// Index for better query performance
fileSchema.index({ user: 1, createdAt: -1 });
fileSchema.index({ user: 1, title: 'text', content: 'text' });

module.exports = mongoose.model('File', fileSchema);