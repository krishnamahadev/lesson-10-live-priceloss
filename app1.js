var initialprice = document.querySelector("#initial-price");

var qtyofstocks = document.querySelector("#qty-of-stocks");

var currentprice = document.querySelector("#current-price");

var checkbutton = document.querySelector("#check-button");

var showmessage = document.querySelector("#show-message");




var plnum =
    {
        sp : 100,
        cp : 120,
        qty : 34
    }


function lossorprofit(plnum)
{
    // console.log(plnum.sp>plnum.cp)
    if(plnum.sp===plnum.cp)
    {
        showmessage.innerText = "No gain no loss!"
    }
    else
    {
        if(plnum.sp>plnum.cp)
        {
            console.log("Hello");
            var p = profit();
            var pp = profitpercent();
            showmessage.innerText="Your profit is "+ p + "and profit percent is"+ pp ;
            return [p,pp];
        }
        else
        {
            var l = loss();
            var lp = losspercent();
            return [l,lp];
            
        }
    }
      
}

function loss(plnum)
{
    var sp=plnum.sp;
    var cp=plnum.cp;
    var qty = plnum.qty;
    var l=0;
    return l  = (cp-sp)*qty;
}

function losspercent(plnum)
{

    var lpercent = (loss()/plnum.cp)*100;
    return lpercent;
}

function profit(plnum)
{
    var sp=plnum.sp;
    var cp=plnum.cp;
    var qty = plnum.qty;
    var p=0;
    return p  = (sp-cp)*qty;
}

function profitpercent(plnum)
{

    var ppercent = (profit()/plnum.cp)*100;
    return ppercent;
}


console.log(lossorprofit());

// console.log(profitpercent());

// console.log(profitpercent());

function plhandler()
{
    console.log("In the handler")
    var plnum = 
    {
        sp : Number(currentprice.value),
        cp : Number(initialprice.value),
        qty : Number(qtyofstocks.value)

    }
    // console.log(typeof plnum.sp)
    var hey = lossorprofit(plnum);
    return hey;
    

}


checkbutton.addEventListener("click", plhandler);