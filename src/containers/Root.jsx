if (process.env.NODE_ENV === 'production' || process.env.PROD) {
  module.exports = require('./Root.prod.jsx')
} else {
  module.exports = require('./Root.dev.jsx')
}
