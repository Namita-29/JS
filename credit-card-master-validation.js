function cardnumber(inputtxt)
{
	var cardno = ^(9[0-9]{12}(?:[0,2,4,6,8]{2})?$ );
	if(inputtxt.value.match(cardno))
	{
		return true;
    }
    else
	{
    alert("Not a valid credit card number!");
    return false;
    }
}