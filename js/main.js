function calc() {
var in1= document.getElementById('pages').value;
    var result =  document.getElementById('result');
    
    
    
    var myresult = (in1*50);
    result.value= myresult;    
}


function confirm()
{
   var in1= document.getElementById('pages').value;
    
    var myresult = (in1*50);
    result.value= myresult;  
    
    if (in1<=0) 
    {
        alert("Please enter number of pages");
        
    }
    else
    {
     document.getElementById("domm").innerHTML="Thanks for using our service";
    }   
    

    
}

    $("a.co").hover(function(){
        $(this).css("background-color", "red");
        }, function(){
        $(this).css("background-color", "white");
    });
     $("a.na").hover(function(){
        $(this).css("background-color", "red");
        }, function(){
        $(this).css("background-color", "dodgerblue");
    });
    $("a.mail").hover(function(){
        $(this).css("background-color", "red");
        }, function(){
        $(this).css("background-color", "white");
    });
    

