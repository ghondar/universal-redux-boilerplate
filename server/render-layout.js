export default ({ settings, rootMarkup, initialState }) => {
  const bundle = process.env.PROD ? '/static/client.js' : 'http://localhost:8888/static/client.js'

  return `
<!doctype html>
<html>
  <head>
    <title>${ settings.TITLE }</title>
  </head>
  <body>
    <div id='root'>${ rootMarkup }</div>
    <script>
      window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
    </script>
    <script src=${bundle}></script>
  </body>
</html>
  `;
};
