const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('landing')
})
app.get('/hells', (req, res) => {
    const hells = [
        {name:'szorongas', image:'https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489__340.jpg'},
        {name:'sznobizmus', image:'https://cdn.pixabay.com/photo/2019/11/10/00/31/empire-state-building-4614731__340.jpg'},
        {name:'hiszekenyseg', image:'https://cdn.pixabay.com/photo/2019/10/28/11/47/flowers-4584088__340.jpg'}
    ]
    res.render('hells', {hells: hells})
})


app.listen(3000, () => {
    console.log('burn to ethernety!!!')
})