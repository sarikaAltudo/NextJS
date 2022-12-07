//import Products from "../../../../models/Products";
import Users from "../../../../models/Users";
import connectDB from "../../../../middleware/mongoose";

const handler = async (req, res) => {

  if(req.method == 'POST'){
      //console.log(req.body);
      try{

        let tmp = new Users({
          userid: req.body.userid,
          name: req.body.name,
          email: req.body.email,
          mobile: req.body.mobile,
          password: req.body.password,
         
      })
  
  
      const response = await tmp.save();
  
     let res = await Users.findOne({email: req.body.email});
      res.status(201).json(res);
  }  catch(err){
      res.status(400).json({message: err.message});
  }
  
  } else {
      res.status(400).json({message : "Method Not Allowed"});
  }
  
  }
  
  export default connectDB(handler);