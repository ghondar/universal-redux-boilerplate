import React, { PropTypes, Component } from 'react'

export default class Layout extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const bundle = process.env.DEV ?
      <script src='http://localhost:8888/build/client.js' defer></script> :
      <script src='/client.js' defer></script>

    return (
      <html>
        <head>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        </head>
        <body>
          <div>
            {this.props.children}
          </div>
          <script src='http://localhost:8888/build/client.js' defer></script>
        </body>
      </html>
    )
  }
}

