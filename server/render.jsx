import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import DevTools from '../src/containers/DevTools.jsx'

export default React => (renderProps, store) => renderToString(
  <Provider store={store}>
    <div>
      <RouterContext { ...renderProps } />
      {process.env.PROD ? null : <DevTools />}
    </div>
  </Provider>
)
