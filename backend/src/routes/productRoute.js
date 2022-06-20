const router = require('express').Router();
const axios = require('axios').default;

router.get('/', async(req, res)=> {
    console.log('in products...', req.query);
    const offset = req.query.pageNum * 10;
    const limit = req.query.limit;
    try{
        const data =  await axios(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
        // console.log("data=", data);
        res.status(200).send({"data": data.data})
    }catch(e){
    console.log('error in getting products', e);
        res.status(500).json({error: true, desc: "Failed to get products from site"})
    }
})



module.exports = router;