var order = prompt('waht do you want coffee or tea ?');

while (order != 'coffee' &&  order !='tea')
{
 order = prompt (' waht do you want coffee or tea ?')
}
 var itemorder = '';

 if ( order == "coffee" ) 
 {
   itemorder = '<img scr ="image/coffee.jpg" />'; 
 }
 else
  {
     itemorder ='<img scr = "image/tea.png"/>';
 }

 var numofcups = prompt('How many cups do you want ?'); 
  
 var result = '';

 for (var i = 0 ; i < numofcups ; i=i+1 )
 {
     result= result + itemorder ;

 }
 console.log(result);

 document.write(result);
