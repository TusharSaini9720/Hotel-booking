const User = require("./../models/userModel");
const factoryhandler=require('./factoryhandler');
const multer=require('multer');
const sharp=require('sharp');
const path=require('path');
// const multerStroage=multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'dev_data/user');
//   },
//   filename: (req, file, cb) => {
//     const ext=file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   }
// })
const multerStroage=multer.memoryStorage();
const multerFilter=(req,file,cb)=>{
  if(file.mimetype.split('/')[0]!=='image'){
    cb(new Error('Only images are allowed'),false);
  }
  cb(null,true);
}
const upload=multer({
  storage:multerStroage,
  fileFilter:multerFilter
})
exports.uploadUserPhoto = upload.single("photo");
exports.resizeUserPhoto = async(req,res,next)=>{
  if(!req.file)return next();

  req.file.filename=`user-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
  .resize(500,500)
  .toFormat('jpeg')
  .jpeg({quality:90})
  .toFile(`dev_data/user/${req.file.filename}`);
  next();
}
exports.sendImage =async (req, res, next) => {
  res.sendFile(
    path.resolve(`${__dirname}/../Images/users/${req.params.fileName}`)
  );
};
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      result: users.length,
      users,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      updatedUser,
    });
  } catch (err) {
    res.status(200).json({
      status: "failed",
      message: err + "",
    });
  }
};


exports.deleteUser=factoryhandler.deleteOne(User);

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;

  next();
};
