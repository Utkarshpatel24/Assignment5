let list=[];

function addProduct(){
    var p_id=document.getElementById('p_id').value ;
    var p_name=document.getElementById('p_name').value ;
    var p_price=document.getElementById('p_price').value ;
    
  

    if(checkDataType(p_id,p_name,p_price))
    {
        if(duplicateId(p_id))
        {
            insertData(p_id,p_name,p_price);
            document.getElementById('result').innerHTML="valid";
         
            display();
        }
        else{
            alert("Duplicate ID");
        }
    }
    else
    {
        document.getElementById('result').innerHTML="Invalid";
    }

}


function checkDataType(p_id,p_name,p_price)
{
    if(p_id==""||isNaN(p_id)||p_name==""||p_price==""||isNaN(p_price))
    return false;
    return true;
}


function duplicateId(p_id)
{
    for(let i=0;i<list.length;i++)
    {
        if(p_id==list[i].id)
        return false;
    }
    return true;
}


function insertData(p_id,p_name,p_price)
{
    list.push({
        "id":p_id,
        "name":p_name,
        "price":p_price
    });
}

function display()
{
    let result="";
    for(let i=0;i<list.length;i++)
    {
       
        result+=`<table><tr><td style="padding:20px">${list[i].id}</td><td style="padding:20px">${list[i].name}</td><td style="padding:20px">${list[i].price}</td></tr></table>`;
    }
    document.getElementById('result').innerHTML=`<table >
    <tr>
    <th style="padding:20px">Product_id</th>
    <th style="padding:20px">product_name</th>
    <th style="padding:20px">product_price</th>
    </tr>
    <tr>
    ${result}
    </tr>
    </table>`;
}