
getAllteachers=(req,res,next)=>{
    res.status(200).json({message:"Get all teacher"});
}
getoneteacher = (req,res,next)=>{
    res.status(200).json({message:`Get one teacher with id ${req.params.id}`});    
}
deleteteacher=(req,res,next)=>{
    res.status(200).json({message:`Delete the teacher with id ${req.params.id}`});
}
addTeacher = (req,res,next)=>{
   const teachers= req.body; 
   console.log('This is the data',teachers);
   //res.send("Data received");
   if(!teachers){
       return res.status(400).json({message:'No data provided'})
   }else{
       res.status(201).json(teachers)
   }
}
exports=module.exports={getAllteachers,getoneteacher,addTeacher,deleteteacher};


