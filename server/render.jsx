import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import Root from '../src/containers/Root.jsx'

export default React => (renderProps, store) => renderToString(
  <Root store={store}>
    <RouterContext { ...renderProps } />
  </Root>
)
