const notAllowed = ['doodoo', 'kitten', '42', 'cleveland browns', 'atlanta braves', 'atlanta hawks', 'phoenix suns'];

module.exports = function(req, res, next) {
  while ( notAllowed.find( word => req.body.text.includes(word) ) ) {
    const badWord = notAllowed.find( word => req.body.text.includes(word) );
    req.body.text = req.body.text.replace( badWord, '*'.repeat( badWord.length ) );
  }
  next();
};
