    var stepsDone = false;
    var steps = [];

    var ceils = document.querySelectorAll(".elem");
    ceils.forEach((ceil) => {
        ceil.addEventListener('click', () => {
            var id = ceil.id;
            calculateSteps(id);
            paintCeils(ceil);
            stepsDone = true;        
        });
    });

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
    };

    function paintCeils(ceil){
        ceil.style.backgroundColor = "blue";
        for(var i = 0; i < steps.length; i++){
            var elem = document.getElementById(steps[i]);
            elem.style.backgroundColor = "green";
        }
    };
    
    var interval = setInterval(() => {
        if(stepsDone){
            window.location.reload();
        }
    }, 3000);