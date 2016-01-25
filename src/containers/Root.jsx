if (process.env.DEV) {
  module.exports = require('./Root.dev.jsx')
} else {
  module.exports = require('./Root.prod.jsx')
}
