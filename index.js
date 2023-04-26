const express = require('express') ; 
const news = require('./data/news.json') ; 
const error = require('./data/error.json')

// import news from './data/news.json' assert { type: 'json' };
// import error from './data/error.json' assert{ type: 'json' }; 

const app = express();

const port = process.env.PORT || 5000;
console.log(port)


app.get('/', (req, res) => {
    res.send(news)
});
app.get('/news/:id', (req, res) => {
    // res.send(df)
    const id = req.params.id
    const specificNews = news.find(item => item._id == id)
    if (specificNews) {
        res.send(specificNews)
    }
    else{
        res.send(error) ;
    }
})

app.get('/category/:id' , (req , res )=>{
    let id = req.params.id ;
    const  filteredNews = news.filter(item=> item.category_id == id) ; 
    if(filteredNews.length > 0){
        res.send(filteredNews) ;
    }
    else{
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`App is running on ${port}`)
})