# animation-toolbox

Just a litle set of animation functions using [WebAnimation][WebAnimation] API

## Usage

```js
// require a single animation
var { fadeIn } = require('animation-toolbox')
// to require all just do
// var animations = require('animation-toolbox')

fadeIn(el, () => {
  console.log('done')
})
```

## API

This modules exports an object where every own property is an animation, and 
every animation is a function. Every animation has its own arguments, the only 
common argument is the element to which to apply the animation (always the first 
argument). Currently implemented animations are:

### `fade(el, from, to [, delay] [, cb])`
### `fadeIn(el, [, delay] [, cb])`
### `fadeOut(el, [, delay] [, cb])`
### `move(el, axis, from, to [, delay] [, cb])`
### `moveRight(el [, from] [, to] [, delay] [, cb])`
### `moveDown(el [, from] [, to] [, delay] [, cb])`
### `moveLeft(el [, from] [, to] [, delay] [, cb])`
### `moveUp(el [, from] [, to] [, delay] [, cb])`
### `bounce(el [, loop] [, cb])`
### `shake(el [, repeat] [, cb])`

## License
MIT

[WebAnimation]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
