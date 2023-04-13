let display = document.querySelector('#display');

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
                case 'CE':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '⌫':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case 'x²':
                    if(display.innerText){
                        display.innerText = display.innerText**2
                        break;
                    }
                    case '√x':
                        if(display.innerText){

                        display.innerText = Math.sqrt(display.innerText)

                        break;

                    }
                    case '1/x':
                        if(display.innerText){
                            display.innerText = 1/display.innerText
                            break;
                        }
                        
                        case '-/+':
                            if(display.innerText){
                                display.innerText = - display.innerText
                                break;
                            }
                            case '%':
                                if(display.innerText){
                                    display.innerText = display.innerText/100
                                    break;
                                }
                    
            default:
                display.innerText += e.target.innerText;
        }
    });
});
