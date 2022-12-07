//import Products from "../../../../models/Products";
import Users from "../../../../models/Users";
import connectDB from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    try {

        let res = await Users.find();
        res.status(200).json(res);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }


}

export default connectDB(handler);