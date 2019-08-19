


function changefontweight(){
    var gettext=document.getElementById("mytext");
    if (gettext.style.fontWeight=="normal"){
        console.log("1")
        gettext.style.fontWeight="bold";
        }
        else{
            console.log("2")
            gettext.style.fontWeight="normal";
    }
    }


    
function changefontstyle(){
    var gettext=document.getElementById("mytext");
    if (gettext.style.fontstyle=="normal"){
        console.log("3")
        gettext.style.fontstyle="italic";
        }
        else{
            console.log("4")
            gettext.style.fontstyle="normal";
    }
    }




    

    function changetextdecoration (){
        var getText=document.getElementById("mytext");
        if(getText.style.textDecoration=="none"){
            console.log("5")

            getText.style.textDecoration="underline";
        }
    else
    {
        console.log("6")
        
    getText.style.textDecoration="none";
    }
    }


    


function changefontsize(){
    var size=document.getElementById("size").value;
    console.log(7)
    document.getElementById("mytext").style.fontSize = size 
}
function changefontfamily(){

    var size = document.getElementById("size2").value ;
    console.log(8)
    document.getElementById("mytext").style.fontFamily = size
}

    