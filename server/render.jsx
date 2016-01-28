
import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import DevTools from '../src/containers/DevTools.jsx'

export default React => (renderProps, store) => {
  return process.env.PROD ? renderToString(
    <Provider store={store}>
      <RouterContext { ...renderProps } />
    </Provider>
  ) : renderToString(
    <Provider store={store}>
      <div>
        <RouterContext { ...renderProps } />
        <DevTools />
      </div>
    </Provider>
  )
}
