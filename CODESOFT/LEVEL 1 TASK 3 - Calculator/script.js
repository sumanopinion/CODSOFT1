const inputText = document.getElementById("input");
const buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
            if (e.target.innerHTML == "=") {
                if(string.length == 0){
                    string = "";
                    inputText.value = string;
                }
                else{
                    string = eval(string);
                    inputText.value = string;
                }
            }
            else if(e.target.innerHTML == "DEL"){
                string = string.substring(0, string.length-1);
                inputText.value = string;
            }
            else if(e.target.innerHTML == "AC"){
                string = "";
                inputText.value = string;
            }
            else{
                string += e.target.innerHTML;
                inputText.value = string;
            }
        })
})