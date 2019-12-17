const searchCtrl = require('../controllers/searchRestaurant');

module.exports = (app, router) => {
    router.get('/search', searchCtrl.validate('searchRestaurant'), searchCtrl.search);

    app.use('/api', router);
}