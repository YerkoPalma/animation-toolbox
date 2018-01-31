var css = require('sheetify')
var choo = require('nanochoo')
var html = require('bel')
var animations = require('.')

css('tachyons')

var app = choo()

app.view(main)

function main (state, emit) {
  var blacklist = ['fade', 'move']
  return html`
    <body>
      <section class="cf w-100 pv3 f6 ph3 ph4-ns">
        <div class="mw9 center ph3-ns">
          ${Object.keys(animations).filter(anim => blacklist.indexOf(anim) === -1).map(anim => {
            return html`
              <div class="fl w-20 pa2" onclick=${e => (animations[anim](e.currentTarget))}>
                <div class="outline bg-moon-gray tc pv4"><code>${anim}</code></div>
              </div>
            `
          })}
        </div>
      </section>
    </body>
  `
}

if (!module.parent) app.mount('body')
else module.exports = app
