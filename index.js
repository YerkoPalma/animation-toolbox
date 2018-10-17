import animation from 'nanoanimation'
import assert from 'nanoassert'

function fade (el, from, to, delay, cb) {
  assert.ok(el)
  assert.equal(typeof from, 'number')
  assert.equal(typeof to, 'number')

  if (typeof delay === 'function') {
    cb = delay
    delay = null
  }
  delay = delay || 1000
  assert.equal(typeof delay, 'number')

  var animate = animation({
    opacity: [ from, to ]
  }, delay)
  return animate(el, cb)
}

function fadeIn (el, delay, cb) {
  return fade(el, 0, 1, delay, cb)
}

function fadeOut (el, delay, cb) {
  return fade(el, 1, 0, delay, cb)
}

function move (el, axis, from, to, delay, cb) {
  assert.ok(el)
  assert.equal(typeof axis, 'string')

  if (typeof delay === 'function') {
    cb = delay
    delay = null
  }
  delay = delay || 1000
  assert.equal(typeof delay, 'number')

  var animate = animation([
    { transform: `translate${axis.toUpperCase()}(${from})`},
    { transform: `translate${axis.toUpperCase()}(${to})`}
  ], delay)
  return animate(el, cb)
}

function moveRight (el, from, to, delay, cb) {
  if (!to && typeof from === 'string') {
    to = from
    from = null
  }
  if (!to && typeof from === 'number') {
    delay = from
    from = null
  }
  if (typeof to === 'number') {
    delay = to
    to = null
  }
  return move(el, 'x', from || '0%', to || '100%', delay, cb)
}

function moveDown (el, from, to, delay, cb) {
  if (!to && typeof from === 'string') {
    to = from
    from = null
  }
  if (!to && typeof from === 'number') {
    delay = from
    from = null
  }
  if (typeof to === 'number') {
    delay = to
    to = null
  }
  return move(el, 'y', from || '0%', to || '100%', delay, cb)
}

function moveLeft (el, from, to, delay, cb) {
  if (!to && typeof from === 'string') {
    to = from
    from = null
  }
  if (!to && typeof from === 'number') {
    delay = from
    from = null
  }
  if (typeof to === 'number') {
    delay = to
    to = null
  }
  return move(el, 'x', from || '0%', `-${to || '100%'}`, delay, cb)
}

function moveUp (el, from, to, delay, cb) {
  if (!to && typeof from === 'string') {
    to = from
    from = null
  }
  if (!to && typeof from === 'number') {
    delay = from
    from = null
  }
  if (typeof to === 'number') {
    delay = to
    to = null
  }
  return move(el, 'y', from || '0%', `-${to || '100%'}`, delay, cb)
}

function bounce (el, loop, cb) {
  assert.ok(el)
  if (typeof loop === 'function') {
    cb = loop
    loop = null
  }
  loop = loop || 3
  var animate = animation([
    { transform: 'translate3d(0, -4px, 0)' },
    { transform: 'translate3d(0, -15px, 0)', offset: 0.2 },
    { transform: 'translate3d(0, -20px, 0)', offset: 0.4 },
    { transform: 'translate3d(0, -30x, 0)', offset: 0.43 },
    { transform: 'translate3d(0, -20px, 0)', offset: 0.7 },
    { transform: 'translate3d(0, -15px, 0)', offset: 0.8 },
    { transform: 'translate3d(0, -4px, 0)', offset: 0.9 },
    { transform: 'translate3d(0, 0, 0)' }
  ], {
    duration: 400,
    iterations: loop,
    easing: 'ease-in-out'
  })
  return animate(el, cb)
}

function shake (el, repeat, cb) {
  assert.ok(el)
  if (typeof repeat === 'function') {
    cb = repeat
    repeat = null
  }
  repeat = !!repeat
  var animate = animation([
    { transform: 'translate3d(-4px, 0, 0)' },
    { transform: 'translate3d(-15px, 0, 0)', offset: 0.2 },
    { transform: 'translate3d(-8px, 0, 0)', offset: 0.4 },
    { transform: 'translate3d(0, 0, 0)', offset: 0.5 },
    { transform: 'translate3d(8px, 0, 0)', offset: 0.7 },
    { transform: 'translate3d(15px, 0, 0)', offset: 0.8 },
    { transform: 'translate3d(4px, 0, 0)', offset: 0.9 },
    { transform: 'translate3d(0, 0, 0)' }
  ], {
    duration: 300,
    iterations: repeat ? Infinity : 3
  })
  return animate(el, cb)
}

function playAll() {
  var animations = []
  var finishedAnimations = 0
  var totalAnimations = arguments.length - 1
  var cb = arguments[arguments.length - 1]
  for (var i = 0; i < arguments.length - 1; i++) {
    animations.push(arguments[i])
    animations[i].onfinish = () => {
      finishedAnimations++
      if (finishedAnimations === totalAnimations) cb()
    }
  }
  for (var i = 0; i < animations.length; i++) {
    animations[i].play()
  }
}

export default {
  playAll,
  fade,
  fadeIn,
  fadeOut,
  move,
  moveRight,
  moveLeft,
  moveDown,
  moveUp,
  bounce,
  shake
}
