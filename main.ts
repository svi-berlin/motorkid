function gerade () {
    motors.dualMotorPower(Motor.AB, motorLeistung)
    basic.setLedColor(0x00ff00)
}
function nachLinks () {
    motors.dualMotorPower(Motor.A, motorLeistung)
    motors.dualMotorPower(Motor.B, 0)
    basic.setLedColor(0xff0000)
    basic.pause(500)
}
function nachRechts () {
    motors.dualMotorPower(Motor.A, 0)
    motors.dualMotorPower(Motor.B, motorLeistung)
    basic.setLedColor(0xffff00)
    basic.pause(500)
}
let motorLeistung = 0
motorLeistung = 60
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 80) {
        nachRechts()
    } else {
        if (grove.measureInCentimeters(DigitalPin.C16) < 120) {
            nachLinks()
        } else {
            gerade()
        }
    }
})
