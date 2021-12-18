radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motors.dualMotorPower(Motor.A, 0)
        basic.pause(500)
        motors.dualMotorPower(Motor.A, 100)
    } else {
        if (receivedNumber == 2) {
            motors.dualMotorPower(Motor.B, 0)
            basic.pause(500)
            motors.dualMotorPower(Motor.B, 100)
        } else {
            if (receivedNumber == 3) {
                motors.dualMotorPower(Motor.A, 0)
                motors.dualMotorPower(Motor.B, 0)
            } else {
                if (receivedNumber == 4) {
                    motors.dualMotorPower(Motor.A, 100)
                    motors.dualMotorPower(Motor.B, 100)
                }
            }
        }
    }
})
function gerade () {
    motors.dualMotorPower(Motor.AB, motorLeistung)
    ausweichen = 0
}
function nachLinks () {
    if (ausweichen < 5) {
        motors.dualMotorPower(Motor.A, 100)
        motors.dualMotorPower(Motor.B, 0)
        ausweichen += 1
    } else {
        ausweichen = 0
        nachRechts()
    }
}
function nachRechts () {
    if (ausweichen < 5) {
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, 100)
        ausweichen += 1
    } else {
        ausweichen = 0
        nachLinks()
    }
}
let ausweichen = 0
let motorLeistung = 0
radio.setGroup(1)
motorLeistung = 100
ausweichen = 0
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 10) {
        basic.setLedColor(0xff0000)
        nachRechts()
    } else {
        if (grove.measureInCentimeters(DigitalPin.C16) < 30) {
            basic.setLedColor(0xffff00)
            nachLinks()
        } else {
            basic.setLedColor(0x00ff00)
            gerade()
        }
    }
})
