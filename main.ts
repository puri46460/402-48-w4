let temp = 0
input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    basic.showString("" + (input.temperature()))
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    temp = input.temperature()
    whaleysans.showNumber(input.temperature())
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
