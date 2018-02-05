var css = require('sheetify')
var choo = require('nanochoo')
var html = require('bel')
var animations = require('.')

css('tachyons')

var app = choo()

app.view(main)

function main (state, emit) {
  var blacklist = ['fade', 'move', 'playAll']
  return html`
    <body>
      <section class="cf w-100 pv3 f6 ph3 ph4-ns">
        <div class="mw9 center ph3-ns">
          <div class="fl w-20 pa2" onclick=${custom}>
            <div class="outline bg-gold tc pv4"><code>Custom animation</code></div>
          </div>
        </div>
        <div class="mw9 center ph3-ns">
          ${Object.keys(animations).filter(anim => blacklist.indexOf(anim) === -1).map(anim => {
            return html`
              <div class="fl w-20 pa2" onclick=${e => (animations[anim](e.currentTarget).play())}>
                <div class="outline bg-moon-gray tc pv4"><code>${anim}</code></div>
              </div>
            `
          })}
        </div>
      </section>
    </body>
  `
  function custom (e) {
    var el = e.currentTarget
    animations.playAll(
      animations.moveDown(el),
      animations.fadeOut(el),
      () => {
        alert('animation finished')
      }
    )
  }
}

if (!module.parent) app.mount('body')
else module.exports = app
