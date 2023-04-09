        var x = document.getElementById("numlist").querySelectorAll(".circle");
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var e = 0;
        function myFun1(){
            if(a==0){
                x[0].style.backgroundColor = "hsl(25, 97%, 53%)";
                x[0].style.color = "white";
                a++;
            }
            else{
                x[0].style.backgroundColor = "hsl(213, 19%, 24%)";
                x[0].style.color = "hsl(217, 12%, 63%)";
                a--;
            }

        }

        function myFun2(){
            if(b==0){
                x[1].style.backgroundColor = "hsl(25, 97%, 53%)";
                x[1].style.color = "white";
                b++
            }
            else{
                x[1].style.backgroundColor = "hsl(213, 19%, 24%)";
                x[1].style.color = "hsl(217, 12%, 63%)";
                b--;
            }
        }

        function myFun3(){
            if(c==0){
                x[2].style.backgroundColor = "hsl(25, 97%, 53%)";
                x[2].style.color = "white";
                c++
            }
            else{
                x[2].style.backgroundColor = "hsl(213, 19%, 24%)";
                x[2].style.color = "hsl(217, 12%, 63%)";
                c--;
            }
        }

        function myFun4(){
            if(d==0){
                x[3].style.backgroundColor = "hsl(25, 97%, 53%)";
                x[3].style.color = "white";
                d++
            }
            else{
                x[3].style.backgroundColor = "hsl(213, 19%, 24%)";
                x[3].style.color = "hsl(217, 12%, 63%)";
                d--;
            }


        } 

        function myFun5(){
            if(e==0){
                x[4].style.backgroundColor = "hsl(25, 97%, 53%)";
                x[4].style.color = "white";
                e++
            }
            else{
                x[4].style.backgroundColor = "hsl(213, 19%, 24%)";
                x[4].style.color = "hsl(217, 12%, 63%)";
                e--;
            }
        }


let total = (a+b+c+d+e);
function myJS(){
window.location.href='thank.html?count='+(a+b+c+d+e);
console.log("Total is " + (a+b+c+d+e) )
}
