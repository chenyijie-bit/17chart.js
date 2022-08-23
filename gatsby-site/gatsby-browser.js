window.g2 = require('@antv/g2')
window.react = require('react')
window.reactDom = require('react-dom')
window.addEventListener('load', e => {
  setTimeout(() => {
    let parent = document.getElementById('gatsby-focus-wrapper')
    let doms = parent.getElementsByTagName('a')
    let logoDom
    if (doms && doms) {
      logoDom = doms[0]
    }
    if (logoDom) {
      logoDom.setAttribute('href', '')
    }
  }, 300)
})
