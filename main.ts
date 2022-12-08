let previwStateAPressed = input.buttonIsPressed(Button.A);
let bornin = control.millis();

let makej = function() {
    if (input.buttonIsPressed(Button.A)) {
        if (!previwStateAPressed)
        {
            bornin = control.millis();
            previwStateAPressed = true
        }
    }else {
        if (previwStateAPressed)    {
            basic.showNumber(control.millis() - bornin)
            previwStateAPressed = false;
        }
    }
}
while (true)    {
     makej()
}