radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        nachLinks()
    } else {
        if (receivedNumber == 2) {
            nachRechts()
        }
    }
})
function gerade () {
    motors.dualMotorPower(Motor.AB, 100)
}
function nachLinks () {
    motors.dualMotorPower(Motor.A, 50)
    motors.dualMotorPower(Motor.B, 0)
    basic.pause(500)
    gerade()
}
function nachRechts () {
    motors.dualMotorPower(Motor.A, 0)
    motors.dualMotorPower(Motor.B, 50)
    basic.pause(500)
    gerade()
}
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
