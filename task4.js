window.onload = function() {
    paint();    

    var ceils = document.querySelectorAll(".elem");
    ceils.forEach((ceil) => {
        ceil.addEventListener('click', () => {
            var id = ceil.id;
            if(stepsDone) {
                location.reload();                                                               
            }else{
                calculateSteps(id);
                paintCeils(ceil);
                stepsDone = true;
            }                    
        });
    });
};
var steps = [];
var stepsDone = false;
               
var paint = function(){
    var cls = document.querySelectorAll("div.rowgr > div.elem");                    
    for(var idx = 0; idx < cls.length; idx++){                        
        switch(idx){
            case 0:
            case 2:
            case 4:
            case 6:
            case 9:
            case 11:
            case 13:
            case 15:
            case 16:
            case 18:
            case 20:
            case 22:
            case 25:
            case 27:
            case 29:
            case 31:
            case 32:
            case 34:
            case 36:
            case 38:
            case 41:
            case 43:
            case 45:
            case 47:
            case 48:
            case 50:
            case 52:
            case 54:
            case 57:
            case 59:
            case 61:
            case 63:
                cls[idx].style.backgroundColor = "#FFF";
                break;
            default:
                cls[idx].style.backgroundColor = "#000";
                break;
        }                        
    }
};

function calculateSteps(ceilVal){
    var regex = new RegExp(/^[A-H]{1}[1-8]{1}$/);    
    if(regex.test(ceilVal)){
        var chOne = ceilVal.charCodeAt(0);
        var chTwo = Number(ceilVal.charAt(1));
        var arrOfSteps = [];
        arrOfSteps.push(String.fromCharCode(chOne + 2) + (chTwo + 1));
        arrOfSteps.push(String.fromCharCode(chOne + 2) + (chTwo - 1));
        arrOfSteps.push(String.fromCharCode(chOne - 2) + (chTwo + 1));
        arrOfSteps.push(String.fromCharCode(chOne - 2) + (chTwo - 1));
        arrOfSteps.push(String.fromCharCode(chOne + 1) + (chTwo + 2));
        arrOfSteps.push(String.fromCharCode(chOne + 1) + (chTwo - 2));
        arrOfSteps.push(String.fromCharCode(chOne - 1) + (chTwo + 2));
        arrOfSteps.push(String.fromCharCode(chOne - 1) + (chTwo - 2));
        for(var i = 0; i < arrOfSteps.length; i++){
            if(regex.test(arrOfSteps[i])){
                steps.push(arrOfSteps[i]);
            }
        }
    }
}

function paintCeils(ceil){
    ceil.style.backgroundColor = "blue";
    for(var i = 0; i < steps.length; i++){
        var elem = document.getElementById(steps[i]);
        elem.style.backgroundColor = "green";
    }
}