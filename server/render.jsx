import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import Root from '../src/containers/Root.jsx'

export default React => (renderProps, store, server) => renderToString(
  <Root store={store} server={server}>
    <RouterContext { ...renderProps } />
  </Root>
)
