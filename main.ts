function right () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    225
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    225
    )
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.servoWritePin(AnalogPin.P1, 45)
}
function rear () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    spped
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    spped
    )
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function left () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    225
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    225
    )
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.servoWritePin(AnalogPin.P1, 135)
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
input.onButtonPressed(Button.A, function () {
    if (r < 1) {
        r += 1
    } else {
        r = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    r = 1
    basic.pause(1000)
    if (item == 2) {
        basic.showIcon(IconNames.Happy)
        item = 0
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (item == 0) {
        basic.showIcon(IconNames.Confused)
        item = 1
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(247, music.beat(BeatFraction.Eighth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Eighth))
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Eighth))
    } else {
        basic.showIcon(IconNames.Sad)
        item = 2
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(175, music.beat(BeatFraction.Eighth))
        music.playTone(175, music.beat(BeatFraction.Eighth))
        music.playTone(220, music.beat(BeatFraction.Eighth))
        music.playTone(165, music.beat(BeatFraction.Eighth))
        music.playTone(131, music.beat(BeatFraction.Eighth))
        music.playTone(147, music.beat(BeatFraction.Eighth))
    }
    basic.pause(1000)
    r = 0
})
function go () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    spped
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    spped
    )
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.servoWritePin(AnalogPin.P1, 90)
}
let light2 = 0
let random2 = 0
let spped = 0
let item = 0
let r = 0
pins.servoWritePin(AnalogPin.P1, 90)
r = 1
item = 2
stop()
basic.forever(function () {
    led.setBrightness(spped)
    if (r == 0) {
        if (item == 1) {
            basic.showLeds(`
                . . # . .
                # # # . .
                # . # # #
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                . # # # #
                . # . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . .
                # # # . #
                . . . # #
                . . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # # . # #
                . . # # .
                . . . # .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                # . # # #
                . # # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . # . . #
                . # # # #
                # # . . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # #
                # # # . #
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . # # .
                # # . # #
                . . . # .
                . . . . .
                `)
        } else {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        stop()
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (r == 0) {
        if (item == 1) {
            if (spped >= 180) {
                go()
                basic.pause(700)
            } else if (spped <= 110) {
                spped = 0 - spped
                rear()
                basic.pause(700)
            } else {
                right()
                basic.pause(700)
            }
        } else if (item == 0) {
            go()
            basic.pause(1200)
            stop()
            basic.pause(100)
            rear()
            basic.pause(1200)
            stop()
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.servoWritePin(AnalogPin.P1, 45)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.servoWritePin(AnalogPin.P1, 135)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.servoWritePin(AnalogPin.P1, 90)
        } else {
            random2 = randint(0, 3)
            if (random2 == 0) {
                go()
                basic.pause(1000)
                stop()
                basic.pause(100)
            } else if (random2 == 1) {
                rear()
                basic.pause(1000)
                stop()
                basic.pause(100)
            } else if (random2 == 2) {
                left()
                basic.pause(500)
                stop()
                basic.pause(100)
            } else {
                right()
                basic.pause(500)
                stop()
                basic.pause(100)
            }
        }
    } else {
    	
    }
})
basic.forever(function () {
    light2 = input.lightLevel() / 100
    if (light2 >= 225) {
        light2 = 225
    }
    spped = light2
})
