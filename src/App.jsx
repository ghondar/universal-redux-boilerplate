import Client from 'react-engine/lib/client'
import routes from './routes/routes.jsx'

const options = {
  routes: routes,
  viewResolver: function(viewName) {
    return require('./containers/' + viewName)
  }
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot(options)
})
