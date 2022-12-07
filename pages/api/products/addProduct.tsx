import Products from '../../../models/Products';
import connectDB from '../../../middleware/mongoose';



const handler = async (req, res) => {

if(req.method == 'POST'){
    //console.log(req.body);
    try{

    let tmp = new Products({
        id: req.body.title,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
    })


    const response = await tmp.save();
    res.status(201).json(response);
}  catch(err){
    res.status(400).json({message: err.message});
}

} else {
    res.status(400).json({message : "Method Not Allowed"});
}

}

export default connectDB(handler);