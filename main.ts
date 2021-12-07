input.onButtonPressed(Button.A, function () {
    nachLinks()
})
function gerade () {
    motors.dualMotorPower(Motor.AB, 56)
}
function nachLinks () {
    motors.dualMotorPower(Motor.A, 50)
    motors.dualMotorPower(Motor.B, 0)
}
input.onButtonPressed(Button.AB, function () {
    gerade()
})
input.onButtonPressed(Button.B, function () {
    nachRechts()
})
function nachRechts () {
    motors.dualMotorPower(Motor.A, 0)
    motors.dualMotorPower(Motor.B, 50)
}
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ff00)
basic.forever(function () {
	
})
