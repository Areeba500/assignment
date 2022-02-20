document.write('<H3>50 TABLES USING FOR LOOP<br></H3>');
for(var a=1; a<=50; a++)
{
   document.write("<br><br>TABLE OF: " + a + "<br>"); 
     for(var b=1; b<=10; b++)
         {
            document.write("<br>" + a + "*" + b + "=" + (a*b));
            
            }
}
