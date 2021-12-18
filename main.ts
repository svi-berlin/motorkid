radio.onReceivedNumber(function (receivedNumber) {
    remoteControl = 1
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, motorLeistung)
        beideMotorenStandard()
    } else {
        if (receivedNumber == 2) {
            motors.dualMotorPower(Motor.B, 0)
            motors.dualMotorPower(Motor.A, motorLeistung)
            beideMotorenStandard()
        } else {
            if (receivedNumber == 3) {
                motors.dualMotorPower(Motor.A, 0)
                motors.dualMotorPower(Motor.B, 0)
            } else {
                if (receivedNumber == 4) {
                    motors.dualMotorPower(Motor.A, 100)
                    motors.dualMotorPower(Motor.B, 100)
                    beideMotorenStandard()
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
function beideMotorenStandard () {
    basic.pause(1000)
    motors.dualMotorPower(Motor.A, motorLeistung)
    motors.dualMotorPower(Motor.B, motorLeistung)
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
let remoteControl = 0
let ausweichen = 0
let motorLeistung = 0
radio.setGroup(1)
motorLeistung = 60
ausweichen = 0
remoteControl = 0
basic.forever(function () {
    if (remoteControl == 0) {
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
    }
})
