function motion_sensor () {
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    basic.showString("" + (motion_sensor()))
})
