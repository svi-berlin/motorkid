radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        nachRechts()
    } else {
        if (receivedNumber == 2) {
            nachLinks()
        } else {
            if (receivedNumber == 3) {
                gerade()
            }
        }
    }
})
function gerade () {
    modusLinks = 0
    modusRechts = 0
    if (modusGerade == 0) {
        modusGerade = 1
        motors.dualMotorPower(Motor.AB, motorLeistung)
    } else {
        modusGerade = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
function nachLinks () {
    modusRechts = 0
    modusGerade = 0
    if (modusLinks == 0) {
        modusLinks = 1
        motors.dualMotorPower(Motor.A, motorLeistung)
        motors.dualMotorPower(Motor.B, 0)
    } else {
        modusLinks = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
function nachRechts () {
    modusLinks = 0
    modusGerade = 0
    if (modusRechts == 0) {
        modusRechts = 1
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, motorLeistung)
    } else {
        modusRechts = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
let modusRechts = 0
let modusLinks = 0
let modusGerade = 0
let motorLeistung = 0
motorLeistung = 60
modusGerade = 0
modusLinks = 0
modusRechts = 0
radio.setGroup(1)
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 50) {
        basic.setLedColor(0xff0000)
    } else {
        if (grove.measureInCentimeters(DigitalPin.C16) > 50 && grove.measureInCentimeters(DigitalPin.C16) < 100) {
            basic.setLedColor(0xffff00)
        } else {
            if (grove.measureInCentimeters(DigitalPin.C16) > 100) {
                basic.setLedColor(0x00ff00)
            }
        }
    }
})
