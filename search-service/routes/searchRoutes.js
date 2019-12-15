const searchCtrl = require('../controllers/search');

module.exports = (app, router) => {
    router.get('/search', searchCtrl.search);

    app.use('/api', router);
}