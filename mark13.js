var initialprice = document.querySelector("#initial-price");

var qtyofstocks = document.querySelector("#qty-of-stocks");

var currentprice = document.querySelector("#current-price");

var checkbutton = document.querySelector("#check-button");

var showmessage = document.querySelector("#show-message");





function profit(sp,cp,qty)
{
    var pro = (sp-cp)*qty;
    var profitpercent = (pro/cp)*100;
    showmessage.innerText="Your profit is "+pro+" and your profit percentage is "+profitpercent+"%";
}

function loss(sp,cp,qty)
{
    var loss = (cp-sp)*qty;
    var losspercent = (loss/cp)*100;
    showmessage.innerText="Your loss is "+loss+" and your loss percentage is "+losspercent+"%";
}

function profitloss()
{
    
    var sp = Number(currentprice.value);
    var cp = Number(initialprice.value);
    var qty = Number(qtyofstocks.value);

    if(currentprice.value && initialprice.value && qtyofstocks.value)
    {
        console.log("if")
        console.log(currentprice.value && initialprice.value && qtyofstocks.value)
        if(sp===cp)
        {
            showmessage.innerText = "No pain no gain";
        }
        else if(sp>cp)
        {
            profit(sp,cp,qty);
        }
        else
        {
            loss(sp,cp,qty)
        }
    }
    else
    {
        console.log("else")
        console.log(currentprice.value && initialprice.value && qtyofstocks.value)
        showmessage.innerText="Please enter all the fields";
    }
}


checkbutton.addEventListener("click", profitloss);
