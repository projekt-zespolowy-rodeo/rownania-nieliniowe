
let calculateButton = document.getElementById("calculate");

function newtonsMethod(func, derivative, epsilon){
    let solution = document.getElementById("solution");
    
    let iterations = 0;
    let przedzial = -5;
    let counter = 20;
    let output = ''
    for(let i=-47; i<=przedzial; i++){
        if(i==-47){
            solution.innerHTML = "";
        }
        counter = 20;
        let xn = i;
        iterations = 0;
        while(counter>0){
            let f = func(xn);
            let df = derivative(xn);
             
            if (Math.abs(f) <= epsilon){
                console.log("x0= "+i+" xn= "+xn);
                let newline = document.createElement("br");
                let textnode = document.createTextNode("Znaleziono rozwiązanie po: "+iterations+" krokach, przybliżone rozwiązanie to: "+xn+"\n")
            
                solution.appendChild(newline);
                solution.appendChild(textnode);
                
                break;
            }
            if(df == 0){
                console.log("Zerowa pochodna, nie znaleziono rozwiązania.");
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

