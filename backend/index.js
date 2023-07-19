const express = require('express')
const axios = require('axios')
const cors=require('cors');
const app = express()
const router=express.Router();
const port = 5000


app.use(cors());
app.use(express.json());
app.use("/api",
router.post('/getNews', async (req, res) => {
    // res.json(req.body);
    // console.log(req.body);
    try{
        const x=await axios.get(req.body.url)
        let y= await x.data.articles;
        res.json({articles:y})
    }catch(err){
        res.status(400);
        console.log(err)
    }
}));

app.listen(port, () => {
  console.log(`Samachar-News backend listening on port ${port}`)
})