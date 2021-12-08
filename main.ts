radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        nachLinks()
    } else {
        if (receivedNumber == 2) {
            music.playTone(330, music.beat(BeatFraction.Sixteenth))
            nachRechts()
        } else {
            if (receivedNumber == 3) {
                music.playTone(988, music.beat(BeatFraction.Sixteenth))
                gerade()
            }
        }
    }
})
function gerade () {
    motors.dualMotorPower(Motor.AB, 100)
}
function nachLinks () {
    motors.dualMotorPower(Motor.A, 50)
    motors.dualMotorPower(Motor.B, 0)
}
function nachRechts () {
    motors.dualMotorPower(Motor.A, 0)
    motors.dualMotorPower(Motor.B, 50)
}
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
