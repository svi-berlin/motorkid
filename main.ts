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
    if (modus == 0) {
        modus = 1
        motors.dualMotorPower(Motor.AB, 50)
    } else {
        modus = 0
        motors.dualMotorPower(Motor.AB, 0)
    }
}
function nachLinks () {
    motors.dualMotorPower(Motor.A, 50)
    motors.dualMotorPower(Motor.B, 0)
}
function nachRechts () {
    motors.dualMotorPower(Motor.A, 0)
    motors.dualMotorPower(Motor.B, 50)
}
let modus = 0
modus = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
