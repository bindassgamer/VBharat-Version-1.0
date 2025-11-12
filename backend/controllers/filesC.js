import File from '../models/fileM.js';
import multer from 'multer';
import userModel from '../models/userModel.js';
import path from 'path';

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  },
}).single('file');

export const uploadFile = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log("File upload error:", err.message);
      return res.status(400).send({ success: false, message: err.message });
    }

    try {
      const userid=await userModel.findById(req.user._id);
      console.log(userid);
      if (!userid) {
        return res.status(404).send({ success: false, message: 'User not found' });
      }
      const newFile = new File({
        userId: userid,
        name: req.file.originalname,
        status: 'review',
        path: req.file.path,
      });

      await newFile.save();
      res.status(200).send({ success: true, file: newFile });
    } catch (error) {
      console.error("Error saving file:", error);
      res.status(500).send({ success: false, message: 'Error saving file', error });
    }
  });
};

export const getFiles = async (req, res) => {
  try {
    const userid=await userModel.findById(req.user._id);
    console.log(userid._id);
      if (!userid) {
        return res.status(404).send({ success: false, message: 'User not found' });
      }
    const files = await File.find({ userid });
    console.log(files);
    res.status(200).send({ success: true, files });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).send({ success: false, message: 'Error fetching files', error });
  }
};