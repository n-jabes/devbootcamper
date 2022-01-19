//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootCamps = (req, res, next) =>{
    res.status(200).json( {success: false, msg: `Show all bootcamps`});
};

//@desc     Get single bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootCamp = (req, res, next) =>{
    res.status(200).json( {success: false, msg: `Show bootcamp ${req.params.id}`});
};

//@desc     Create bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootCamp = (req, res, next) =>{
    res.status(200).json( {success: false, msg: 'Create new bootcamp'});
};


 //@desc    Update bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootCamp = (req, res, next) =>{
    res.status(200).json( {success: false, msg: `Update bootcamp ${req.params.id}`});
};


//@desc     Delete bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootCamp = (req, res, next) =>{
    res.status(200).json( {success: false, msg: `Delete bootcamp ${req.params.id}`});
};