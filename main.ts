radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        nachLinks()
    } else {
        if (receivedNumber == 2) {
            nachRechts()
        } else {
            if (receivedNumber == 3) {
                gerade()
            }
        }
    }
})
function gerade () {
    if (modusGerade == 0) {
        modusGerade = 1
        motors.dualMotorPower(Motor.AB, 50)
    } else {
        modusGerade = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
function nachLinks () {
    if (modusLinks == 0) {
        modusLinks = 1
        motors.dualMotorPower(Motor.A, 50)
        motors.dualMotorPower(Motor.B, 0)
    } else {
        modusLinks = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
function nachRechts () {
    if (modusRechts == 0) {
        modusRechts = 1
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, 50)
    } else {
        modusRechts = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
let modusRechts = 0
let modusLinks = 0
let modusGerade = 0
modusGerade = 0
modusLinks = 0
modusRechts = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
