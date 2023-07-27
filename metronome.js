import { left, right, display } from './pendulum.js'

;(async () => {
  // get the bpm and force it to positive, use 60 as default
  const bpm = Math.abs(+process.argv[2] || 60)
  if ((bpm - 1)*(bpm - 240) > 0) {
    console.log('Please use a value between 1 and 240 (or let it default to 60).')
    return
  }

  // clear the whole console
  console.clear()

  // define the interval to wait for in between beats
  const interval = () => {
    return new Promise(resolve => setTimeout(resolve, 60 / bpm * 1000))
  }

  // start the metronome
  for (let i = 1; true; i++) {
    // render the pendulum
    console.log(i % 2 === 0 ? right : left)

    // render the bpm display
    console.log(display.replace('bpm', bpm))

    // play the beat
    process.stdout.write('\x07')

    // wait for the interval
    await interval()

    console.clear()
  }
})()
