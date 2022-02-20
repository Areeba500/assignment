document.write("<b>PRINT TABLE IN A GIVEN RANGE<br><br></b>");
function table(a,b)
{
  for(var i=a; i<=b; i++)
  {
   
    for(var j=1; j<=10; j++)
    {
     document.write(a + "*" + j + "=" + j*a + "<br>");
    }
    a++;
    document.write("<br>");
 } 
}

table(2,10);
