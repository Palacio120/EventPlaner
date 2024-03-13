const express =require ('express');
const app=express();
const PORT=8000;

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);

app.get('/locations', (req,res)=>{
    res.json({location:'test'});
})
app.post('/locations');
app.get('/events/:id');
app.post('/events/:id');

app.listen(PORT,()=>{
    console.log('app listening in port '+PORT);
})
