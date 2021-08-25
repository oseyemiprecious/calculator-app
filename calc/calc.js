var screenV=document.getElementById("screen");
var c1=document.getElementById("click1");
var c2=document.getElementById("click2");
var c3=document.getElementById("click3");
var c4=document.getElementById("click4");
var c5=document.getElementById("click5");
var c6=document.getElementById("click6");
var c7=document.getElementById("click7");
var c8=document.getElementById("click8");
var c9=document.getElementById("click9");
var c0=document.getElementById("click0");
var cPlus=document.getElementById("clickPlus");
var cMinus=document.getElementById("clickMinus");
var cDot=document.getElementById("clickDot");
var cDiv=document.getElementById("clickDiv");
var cReset=document.getElementById("clickReset");
var cEquals=document.getElementById("clickEquals");
var cDel=document.getElementById("clickDel");
var cMul=document.getElementById("clickMul");
var MathAns = 0;
var MathAns1 = 0;
var addVal;
var subVal;
var mulVal;
var divVal;
var mathOpSign="";
var KeyVal;
var count=0;

function NumberF(KeyVal)
{ 
    var screenVal=screenV.innerHTML;
    if (screenVal!="0")
    {
        var NewNum=document.getElementById("screen").innerHTML+ KeyVal;
        do {
            NewNum=NewNum.replace(',','');
        }            
        while(NewNum.indexOf(",")!=-1)
        MathAns=parseFloat(NewNum);
        screenV.innerHTML = new Intl.NumberFormat().format(MathAns);
    }
    else
    {
        document.getElementById("screen").innerHTML=KeyVal;
    }
}



function CleanCal(KeyVal){
    if (addVal.length>0 || mulVal.length>0 || divVal.length>0 || subVal.length>0)
    {   
        screenV.innerHTML="";
        NumberF(KeyVal);
        addVal="";
        subVal="";
        mulVal="";
        divVal="";
    }
    else{
        NumberF(KeyVal);
    }
}

function MathOp(){
    if (addVal.length>0) {
        MathAns1=MathAns1+MathAns;
        MathAns=0;
        screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
        addval="";
    }
    else if (subVal.length>0) {
        if (count<1)
        {
            MathAns1=MathAns1+MathAns;
            MathAns=0;
            screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
            addval="";
            count =1;
        }
        else
        {
            MathAns1=MathAns1-MathAns;
            MathAns=0;
            screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
            addval="";
        }
        
    }
    else if (mulVal.length>0) {
        if (count<1)
        {
            MathAns1=1*MathAns;
            MathAns=0;
            screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
            addval="";
            count =1;
        }
        else
        {
            MathAns1=MathAns1*MathAns;
            MathAns=0;
            screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
            addval="";
        }
        
    }
    else if (divVal.length>0) {
        if (count<1)
        {
            MathAns1=1*MathAns;
            MathAns=0;
            screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
            addval="";
            count =1;
        }
        else
        {
            MathAns1=MathAns1/MathAns;
            MathAns=0;
            screenV.innerHTML = new Intl.NumberFormat().format(MathAns1);
            addval="";
        }
        
    }
}


function EqualsTo(){
    addVal="";
    subVal="";
    mulVal=""; 
    divVal=""
    if(mathOpSign=="+")
    {
        addVal="+";
        MathOp();
        addVal="";
    }
    else if(mathOpSign=="-")
    {
        subVal="-";
        MathOp();
        subVal="";
    }
    else if(mathOpSign=="/")
    {
        divVal="/";
        MathOp();
        divVal="";
    }
    else if(mathOpSign=="*")
    {
        mulVal="*";
        MathOp();
        mulVal="";
    }
}

c1.addEventListener("click", function(){
    CleanCal("1");
})

c2.addEventListener("click", function(){
    CleanCal("2");
})

c3.addEventListener("click", function(){
    CleanCal("3");
})

c4.addEventListener("click", function(){
    CleanCal("4");
})

c5.addEventListener("click", function(){
    CleanCal("5");
})

c6.addEventListener("click", function(){
    CleanCal("6");
})

c7.addEventListener("click", function(){
    CleanCal("7");
})

c8.addEventListener("click", function(){
    CleanCal("8");
})

c9.addEventListener("click", function(){
    CleanCal("9");
})

c0.addEventListener("click", function(){
    CleanCal("0");
})
cReset.addEventListener("click", function(){
    screenV.innerHTML='0';
    mathOpSign="";
    MathAns1=0;
    MathAns=0;
    count=0;
})

cDel.addEventListener("click", function(){
    screenV.innerHTML=screenV.innerHTML.slice(0,-1);
    if(screenV.innerHTML.length==0)
    {
        screenV.innerHTML='0';
        mathOpSign="";
        MathAns1=0;
        MathAns=0;
        count=0;
    }
    else
    {
        NumberF(",");  
        mathOpSign="";
        MathAns1=0;
        MathAns=0;
        count=0;
    }
    
})

cPlus.addEventListener("click", function(){
    EqualsTo();
    addVal=screenV.innerHTML+"+";
    MathOp();
    subVal="";
    mulVal="";
    divVal="";
    mathOpSign="+";
})
addVal=screenV.innerHTML+"+";
MathOp();
subVal="";
mulVal="";
divVal="";

cMinus.addEventListener("click", function(){
    EqualsTo();
    subVal=screenV.innerHTML+"-";
    MathOp();
    addVal="";
    mulVal="";
    divVal="";
    mathOpSign="-";
})

cMul.addEventListener("click", function(){
    EqualsTo();
    mulVal=screenV.innerHTML+"*";
    MathOp();
    addVal="";
    subVal="";
    divVal="";
    mathOpSign="*";
})

cDiv.addEventListener("click", function(){
    EqualsTo();
    divVal=screenV.innerHTML+"/";
    MathOp();
    addVal="";
    subVal="";
    mulVal=""; 
    mathOpSign="/";
})

cEquals.addEventListener("click", function(){
    EqualsTo();
})

