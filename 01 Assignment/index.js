function input(num)
{
	form1.textview.value= form1.textview.value + num;
}
function equal()
{
	var total = form1.textview.value;
	if(total)
	{
		form1.textview.value = eval(total);
	}
}