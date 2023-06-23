const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const PORT = process.env.PORT || 3010;

app.set('view engine', 'ejs');
app.set('layout', '_layout/_base');
app.use(expressLayouts);
app.use(express.json({
    limit: '1mb',
}));

app.use(express.urlencoded({
    extended: true,
    limit: '1mb',
}));

app.get('', function(req, res) {
    res.json({
        ok: true,
    })
});

app.get('/landing/login', function(req, res){
    res.render('landing/login', {
        layout: '_layout/_void',
        title: 'Login'
    });
});

app.get('/landing/register', function(req, res){
    res.render('landing/register', {
        layout: '_layout/_void',
        title: 'Register'
    });
});

app.get('/dashboard/home', function(req, res){
    res.render('dashboard/home', {
        title: 'Dashboard Home'
    });
});

app.get('/dashboard/users', function(req, res){
    res.render('dashboard/users/list', {
        title: 'Dashboard User List'
    });
});

app.get('/dashboard/users/:id', function(req, res){
    res.render('dashboard/users/detail', {
        title: 'Dashboard User Detail'
    });
});

app.listen(PORT, function() {
    console.info(`app running at port: ${PORT}`);
});




