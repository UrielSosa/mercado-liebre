const fs = require('fs');
const path = require('path');

let products = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), { encoding:'utf8' });
products = JSON.parse(products);

module.exports = {
    root: function (req, res) {
        res.render('index', { products });
    }
}