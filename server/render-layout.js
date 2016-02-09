export default ({ settings, rootMarkup, initialState }) => {
  const bundle = process.env.PROD ? '/static/client.js' : 'http://localhost:8888/static/client.js'

  return `
<!doctype html>
<html>
  <head>
    <title>${ settings.TITLE }</title>
    ${Object.keys(settings.assets.styles).map((style, key) =>
      `<link href='${settings.assets.styles[ style ]}' media='screen, projection'
            onload="if(media!='all')media='all'"
            rel='stylesheet' type='text/css'/>`
    )}
  </head>
  <body>
    <div id='root'>${ rootMarkup }</div>
    <script>
      window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
    </script>
    ${Object.keys(settings.assets.javascript).map((js, key) =>
      `<script src='${settings.assets.javascript[ js ]}'></script>`
    )}
  </body>
</html>
  `
}
