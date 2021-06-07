let numbervalues = 0
OLED12864_I2C.init(60)
OLED12864_I2C.on()
OLED12864_I2C.zoom(false)
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
basic.pause(14000)
let Biggestnumber = OrientBit.getwheelPulseCount(OrientBit.wheelSide.right)
if (Biggestnumber < OrientBit.getwheelPulseCount(OrientBit.wheelSide.right)) {
    Biggestnumber = OrientBit.getwheelPulseCount(OrientBit.wheelSide.left)
    numbervalues = OrientBit.getwheelPulseCount(OrientBit.wheelSide.right)
} else if (Biggestnumber > OrientBit.getwheelPulseCount(OrientBit.wheelSide.left)) {
    Biggestnumber = OrientBit.getwheelPulseCount(OrientBit.wheelSide.right)
    numbervalues = OrientBit.getwheelPulseCount(OrientBit.wheelSide.left)
}
OLED12864_I2C.showString(
0,
3,
"diff:",
1
)
OLED12864_I2C.showNumber(
3,
4,
Biggestnumber - numbervalues,
1
)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "R:",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    0,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.right),
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "L:",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    1,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.left),
    1
    )
})
