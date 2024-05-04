const express = require('express');
// const fs = require('fs')
const router = express.Router();
// const data = fs.readFileSync('assest.json')
// const assest = JSON.parse(data);  

router.get('/', (req, res) => { 
    res.status(201).send({msg:"Manav rupani"})
});

router.get('/api/users',(req,res)=>{
    res.send([
        {id:1, username:"anson", displayName:"Anson" },
        {id:2, username:"jack", displayName:"Jack" },
        {id:3, username:"master", displayName:"Master" }
    ]);
});

router.get('/api/products',(req,res)=>{
    res.send([
        {id:123, name: 'chicken breast', price: 12}
    ])
});


router.get('/api/users/:id',(req,res)=>{
    console.log(req.params);
});



router.get('/assets', (req, res) => {
    // const title = assest.map(assest => assest.name)
    res.render('assest');
});

    
module.exports = router;