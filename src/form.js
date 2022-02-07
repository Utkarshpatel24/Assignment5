
function bodyMassRatio(){
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var weight=document.getElementById('weight').value;
    var result="";
    var recommended_weight="";

    if( checkType(name,age,weight))
    {
       if(age>=5&&age<=7)
      {
        if(weight<15)
        {
            result="less";
            recommended_weight=15;
        }
        else if(weight>20)
        {
            result="greater";
            recommended_weight=20;
        }
        else
        result="perfect";
     }
      else if(age>=8&&age<=10)
      {
        if(weight<21)
        {
            result="less";
            recommended_weight=21;
        }
        else if(weight>25)
        {
            result="greater";
            recommended_weight=25;
        }
        else
        result="perfect";
    

      }
      else if(age>=11&&age<=15)
     {
        if(weight<26)
        {
            result="less";
            recommended_weight=26;
        }
        else if(weight>30)
        {
            result="greater";
            recommended_weight=30;
        }
        else
        result="perfect";
    
     }
      else if(age>=16&&age<=20)
     {
        if(weight<31)
        {
            result="less";
            recommended_weight=31;
        }
        else if(weight>40)
        {
            result="greater";
            recommended_weight=40;
        }
        else
        result="perfect";
    
     }
     else{
        result="age";
     }

    }
    else
    {
        result="input";
    }
    
    
    display(result,name,age,weight,recommended_weight);

    
}


function checkType(name , age, weight){
    
    if ((name=="") || (age=="undefined"||isNaN(age)) || (weight=="undefined" || isNaN(weight)))
    return false;
    return true;
}




function display(result,name,age ,weight,recommended_weight)
{
    if(result=="age")
    document.getElementById('result').innerHTML="Invalid age";
    else if(result=="input")
    document.getElementById('result').innerHTML="Invalid input";
    else if(result=="perfect")
    document.getElementById('result').innerHTML="Hello "+name+" !!! your weight is "+result+" .";
    else
    document.getElementById('result').innerHTML="Hello "+name+" !!! your weight is "+result+" than the recommended value of "+recommended_weight+"KG at an age of "+age;
}