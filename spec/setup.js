import jsdom from 'jsdom'

const exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom.jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

Object.defineProperty(global, 'navigator', {
  value: { userAgent: 'node.js' },
  writable: true,
  configurable: true,
})
