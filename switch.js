document.write('<H3>GRADES USING SWITCH STATEMENT<br></H3>');
var marks=90;
var total=100;
var percent=(marks/total)*100;
document.write('Your percentage: ' + percent + "<br>");
switch(true)
{
  case percent >= 80:
    document.write("Your Grade is A1<br>");
    break;
  case percent >= 70:
    document.write("Your Grade is A<br>");
    break;
  case percent >= 60:
    document.write("Your Grade is B<br>");
    break;
    
  default:
  document.write("You are fail<br>");
}
