import { left, right, display } from './pendulum.js'

;(async () => {
  // clear the whole console
  console.clear()

  // set the beats per minute
  const bpm = +process.argv[2] || 60

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
