import React from 'react'
import reactDom from 'react-dom/server'
import test from 'tape'
import dom from 'cheerio'

import Counter from '../../src/components/Counter.jsx'

const render = reactDom.renderToStaticMarkup

test('Count', assert => {
  const CountNumber = 2
  const props = {
    counterStore    : {
      count: 2
    }
  }
  const re = new RegExp(CountNumber, 'g')

  const el = <Counter { ...props } />
  const $ = dom.load(render(el))
  const output = $('span').html()
  const actual = re.test(output)
  const expected = true

  assert.equal(actual, expected,
    'should output the correct count text')

  assert.end()
})
