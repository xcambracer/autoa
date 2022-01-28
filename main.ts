radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ezkuineko_intermitentea()
    }
    if (receivedNumber == 2) {
        eskerreko_intermitentea()
    }
    if (receivedNumber == 3) {
        limpiaparabrisas()
    }
})
function ezkuineko_intermitentea () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
}
function limpiaparabrisas () {
    pins.digitalWritePin(DigitalPin.P0, 180)
}
function eskerreko_intermitentea () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
}
radio.setGroup(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    }
})
