function table(a)
{
document.write("<b>TABLE OF: " + a + " <br><br></b>");
 for(var i=1; i<=10; i++)
 {
  document.write(a + "*" + i + "=" + (a*i)+ "<br>");
 }
}

function pyramid()
{
document.write("<b>PRINT PYRAMID<br><br></b>");
 for(var i=1; i<=5; i++)
 {
  for(var j=1; j<=i; j++)
  {
    document.write("*");
  }
  document.write("<br>");
 } 
}

function invert(a,b)
{
 document.write("<b>PRINT INVERTED TABLE IN A GIVEN RANGE<br><br></b>");
  for(var i=a; i>=b; i--)
  {
   
    for(var j=1; j<=10; j++)
    {
     document.write(a + "*" + j + "=" + j*a + "<br>");
    }
    a--;
    document.write("<br>");
 } 
}

