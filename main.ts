function gerade () {
    motors.dualMotorPower(Motor.AB, motorLeistung)
}
function nachLinks () {
    motors.dualMotorPower(Motor.A, 100)
    motors.dualMotorPower(Motor.B, 0)
}
function nachRechts () {
    motors.dualMotorPower(Motor.A, 0)
    motors.dualMotorPower(Motor.B, 100)
}
let motorLeistung = 0
motorLeistung = 100
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 50) {
        basic.setLedColor(0xff0000)
        nachRechts()
    } else {
        if (grove.measureInCentimeters(DigitalPin.C16) < 80) {
            basic.setLedColor(0xffff00)
            nachLinks()
        } else {
            basic.setLedColor(0x00ff00)
            gerade()
        }
    }
})
