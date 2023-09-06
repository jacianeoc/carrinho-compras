exports.fallback=(req, res) =>{
    res.status(404).json({eroos:[{location:req.path, msg: 'NOT FOUND', param:null}]});
}