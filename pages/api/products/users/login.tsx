//import Products from "../../../../models/Products";
import Users from "../../../../models/Users";
import connectDB from "../../../../middleware/mongoose";

const handler = async (req, res) => {

  if (req.method == 'POST') {
    //console.log(req.body);
    try {

      let res = await Users.findOne({ email: req.body.email });
      if (Object.keys(res) !== 0) {

        if (res.password === req.body.password) {
          res.status(200).json(res);
        } else {
          res.status(400).json({ message: "Incorrect Password" });
        }
      } else {
        res.status(400).json({ message: "Not an User" });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

  } else {
    res.status(400).json({ message: "Method Not Allowed" });
  }

}

export default connectDB(handler);