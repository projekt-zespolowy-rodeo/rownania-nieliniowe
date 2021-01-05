
let calculateButton = document.getElementById("calculate");

function newtonsMethod(func, derivative, epsilon){
    let solution = document.getElementById("solution");
    // let xn = x0;
    let iterations = 0;
    let przedzial = -5;
    let counter = 20;
    for(let i=-47; i<=przedzial; i++){
        counter = 20;
        let xn = i;
        while(counter>0){
            let f = func(xn);
            let df = derivative(xn);
            if(df == 0){
                console.log("Zerowa pochodna, nie znaleziono rozwiązania.");
                break;
    
            }  
            if (Math.abs(f) <= epsilon){
                console.log("x0= "+i+" xn= "+xn);
                solution.innerHTML = "Znaleziono rozwiązanie po: "+iterations+" krokach, przybliżone rozwiązanie to: "+xn;
                break;
            }
             
            iterations+=1;
          
            xn = xn - f/df;
            counter--;
        }
        console.log("wykonano")
    }
   
}

function func(x){
    return (-1)*x**3+6*x**2+5*x-1;
}

function derivative(x){
    return (-1)*3*x**2-12*x+5;
}

calculateButton.addEventListener("click", function(e){
    e.preventDefault
    let accuracy = document.getElementById("accuracy").value;
    let solution = document.getElementById("solution");
    if(accuracy=="" || accuracy<=0 || accuracy>=1){
        solution.innerHTML = "Podaj właściwą dokładność"
    }
    else{
        newtonsMethod(func, derivative, accuracy); 
      
    }
    
})

