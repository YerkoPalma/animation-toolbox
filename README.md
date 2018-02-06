# animation-toolbox

Just a litle set of animation functions using [WebAnimation][WebAnimation] API

## Usage

```js
// require a single animation
var { fadeIn } = require('animation-toolbox')
// to require all just do
// var animations = require('animation-toolbox')

var anim = fadeIn(el, () => {
  console.log('done')
})
anim.play()
```

## API

This modules exports an object where every own property is an animation, 
except by the `playAll`function, and every animation is a function that returns 
a WebAnimation instance. Every animation has its own arguments, the only common 
argument is the element to which to apply the animation (always the first 
argument). 

### `playAll(...animations, cb)`
This function take some animations, play them all simultaneously, and when all 
of them has finished, runs a callback. For example,

```js
var { playAll, moveDown, fadeOut } = require('animation-toolbox')

playAll(
  moveDown(el),
  fadeOut(el),
  () => {
    alert('animation finished')
  }
)
```

### `fade(el, from, to [, delay] [, cb])`
Fade the opacity between `from` and `to`. Required arguments are `el`, the 
HtmlElement to animate, `from`, a value between 0 and 1, `to` a value between 0 
and 1. Optional arguments are `delay` a number for the duration of the animation 
in miliseconds, defaults to 1000 (1s) and `cb`, a callback to run when the 
animtion finish, defaults to `undefined`.

### `fadeIn(el, [, delay] [, cb])`
Runs the `fade` animation with `from = 0` and `to = 1`.

### `fadeOut(el, [, delay] [, cb])`
Runs the `fade` animation with `from = 1` and `to = 0`.

### `move(el, axis, from, to [, delay] [, cb])`
Translate `el` in some bidimensional `axis` ('x' or 'y') between `from` and `to`.
Required arguments are `el`, the HTMLElement to animate, `axis` a string 'x' or 
'y', `from` a string with the initial position to move, can be in any valid css 
unit for distance (eg. '100%', '20px') and `to` a string with the final 
position to move, can be in any valid css unit for distance (eg. '100%', '20px').
Optional arguments are `delay` a number for the duration of the animation 
in miliseconds, defaults to 1000 (1s) and `cb`, a callback to run when the 
animtion finish, defaults to `undefined`.

### `moveRight(el [, from] [, to] [, delay] [, cb])`
Runs the `move` animation with `axis = x`. If `from` and `to` are not set, they 
default to `'0%'` and `'100%'` respectively.

### `moveDown(el [, from] [, to] [, delay] [, cb])`
Runs the `move` animation with `axis = y`. If `from` and `to` are not set, they 
default to `'0%'` and `'100%'` respectively.

### `moveLeft(el [, from] [, to] [, delay] [, cb])`
Runs the `move` animation with `axis = x`. If `from` and `to` are not set, they 
default to `'0%'` and `'-100%'` respectively, notice that whatever `to`value 
passed, is going to be forced to a negative value, so, for example, setting to 
move `to = '35px'` will actually move -35px in the x axis (35px to the left).

### `moveUp(el [, from] [, to] [, delay] [, cb])`
Runs the `move` animation with `axis = y`. If `from` and `to` are not set, they 
default to `'0%'` and `'-100%'` respectively, notice that whatever `to`value 
passed, is going to be forced to a negative value, so, for example, setting to 
move `to = '35px'` will actually move -35px in the x axis (35px up).

### `bounce(el [, loop] [, cb])`
Vertically bounce `el` three times. Optionally, you can pass a `loop` number to 
determine how many times should the element bounce, defaults to 3.

### `shake(el [, repeat] [, cb])`
Horizontally shake an element. Set the `repeat` argument to true to shake forever.

## License
MIT

[WebAnimation]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
