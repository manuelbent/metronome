(async () => {
  // define the beats per minute
  const bpm = +process.argv[2] || 60

  // defining the interval to wait in between beats
  const timeout = 60 / bpm * 1000

  // set the interval time between beats
  const interval = () => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }

  // start the metronome
  while (1) {
    process.stdout.write('\x07')
    await interval()
  }
})()
