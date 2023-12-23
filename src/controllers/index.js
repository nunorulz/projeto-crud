function index(req, res) {
  res.render('index', {
    title: 'Página incial',
  });
}

module.exports = {
  index,
};
