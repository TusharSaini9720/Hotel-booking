const multer=require('multer');
const sharp=require('sharp');
const Hotel=require('./../models/hotelModel');
const factoryhandler = require('./factoryhandler');
const path=require('path');
//const APIFeatures=require('./../utils/Apifeature');

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
exports.uploadHotelPhoto = upload.array("image",2);

exports.resizeHotelPhoto=async(req,res,next)=>{
    //console.log(req.files);
    if(!req.files){
       // console.log("in ! condition");
        return next();}

    // req.files.filename=`user-${req.params.id}-${Date.now()}.jpeg`;
    // await sharp(req.files.buffer)
    // .resize(1000,700)
    // .toFormat('jpeg')
    // .jpeg({quality:90})
    // .toFile(`dev_data/hotels/${req.files.filename}`);
    req.body.image=[];
     await Promise.all(
    req.files.map(async(file,i)=>{
    const filename=`hotels-${req.params.id}-${Date.now()}-${i+1}.jpeg`;
    await sharp(file.buffer)
    .resize(1000,700)
    .toFormat('jpeg')
    .jpeg({quality:90})
    .toFile(`dev_data/hotels/${filename}`);
    req.body.image.push(`${req.protocol}://${req.get(
        "host"
      )}/api/v1/hotels/images/${filename}`);
}))
//console.log("after map ");
    next();
}
exports.sendImage = async (req, res, next) => {
    res.sendFile(
      path.resolve(`${__dirname}/../dev_data/hotels/${req.params.fileName}`)
    );
  };
// upload.field({name:"image",6},{name:}); it use for adding different images means for different parts

// exports.aliasTopTours = (req, res, next) => {
//    // req.query.limit = '5';
//     req.query.sort = '-ratingsAverage,price';
//     // req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//     next();
//   };

class APIFeatures{
    
    constructor(query,queryString,aggregate=false){
       
        this.query=query;
        this.queryString=queryString;
        this.aggregate=aggregate;
    }

    convertToNumbers(obj) {
        for (let key in obj) {
          if (typeof obj[key] === "object") {
            this.convertToNumbers(obj[key]); // Recursively convert nested objects
          } else if (typeof obj[key] === "string" && !isNaN(obj[key])) {
            obj[key] = parseFloat(obj[key]);
          }
        }
      }
    filter(){
        const queryObj = { ...this.queryString };
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach(el => delete queryObj[el]);
  
      // 1B) Advanced filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//   this.query.find(JSON.parse(queryStr));
      queryStr = JSON.parse(queryStr);
    if (this.queryString.facility)
      queryStr.facility = { $all: this.queryString.facility.split(",") };
    if (this.queryString.Theme)
      queryStr.Theme = { $in: this.queryString.Theme.split(",") };

    if (this.aggregate) {
      this.convertToNumbers(queryStr);
      this.query = this.query.match(queryStr); // same way with sort and project
    } else {
      this.query = this.query.find(queryStr);
    }
    return this;
    }
    sort(){
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy); 
          } else {
            this.query = this.query.sort('-createdAt');
          }
          return this;
    }
}
exports.getallhotel=async(req,res)=>{
    try{
         const features = new APIFeatures(Hotel.find(), req.query)
         .filter()
         .sort();

        const hotels= await features.query;
        res.status(200).json({
            status:'success',
            result:hotels.length,
            data:{
                Hotels:hotels
            }
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}
exports.createhotel=async(req,res)=>{
    try{
        const hotel=await Hotel.create(req.body);
        res.status(201).json({
            status:'success',
            hotel
        })
    }
    catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
}

exports.gethotel=async(req,res)=>{
    try{const hotel=await Hotel.findById(req.params.id).populate('reviews');
    res.status(200).json({
        status:'success',
        data:{
            Hotel:hotel
        }
    })
}catch(err){
    res.status(400).json({
        status:'failed',
        message:err
    })
}
};

exports.updatehotel=async(req,res)=>{
    try{
//         const filteredBody = filterObj(req.body, "name","email");
//  if(req.file)filteredBody.photo=req.file.filename;
        const hotel=await Hotel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            status:'success',
            hotel
        })
    }catch(err){
        res.status(400).json({
            status:'failed',
            message:err
        })
    }
};
exports.deletehotel=factoryhandler.deleteOne(Hotel);

exports.hotelswithin=async(req,res)=>{
   try{ const {distance,latlng,unit} = req.params;
    const [lat,lng]=latlng.split(',');
    //console.log(distance,lat,lng,unit);
    const radius=unit==='mil'?distance/3963.2:distance/6378.1;
    //console.log(radius);
   // if(!lng||!lat)console.log("inlng ");
    const hotels=await Hotel.find({
        location:{$geoWithin:{$centerSphere:[[lng,lat],radius]}}
    })
     //console.log(hotels);
    res.status(200).json({
        status:'success',
        result:hotels.length,
        data:{
            data:hotels
        }
    });}
    catch(err){
        res.status(400).json ({ 
        status:'failed',
        message:err
    });
    }
}

exports.hotelsposition=async(req,res)=>{
    try{
    const {latlng,unit} = req.params;
    const [lat,lng]=latlng.split(',');
    //console.log(distance,lat,lng,unit);
   // const radius=unit==='mil'?distance/3963.2:distance/6378.1;
   const multipler=unit==='mil'?0.000621371:0.001;
   // console.log(radius);
   // if(!lng||!lat)console.log("inlng ");

    const distances=await Hotel.aggregate([
         {
            $geoNear:{
                near:{
                    type:"Point",
                    coordinates:[lng*1,lat*1]
                },
                distanceField:"distance",
                distanceMultiplier:multipler
                // maxDistance:radius,
                // spherical:true,
                // includeLocs:"distance"
            }
        },{
        $project : {
            name:1,
            distance:1
        }}
    ]);

    res.status(200).json ({ 
        status:'success',
        data:{
            data:distances
        }
    });
}
catch(err){
res.status(400).json ({ 
        status:'failed',
        message:err
    });
}
}