var n1, n2 , n3, n4, i;
$(document).ready(function (){
    cargar();
   
{
   n3=n2+n1;
   n4=$("#t1").val();
   if(n3===n4)
   {
        $("#divMsg").html("<p>Felicidades!!</p>");        
   }
   else
   {
       $("#divMsg").html("<p>Vuelve a intentarlo</p>");     
   }   
});
});
function cargar()
{
   n1= (Math.random()*10) + 1;
   n1= parseInt(n1.toFixed(0));
   
   n2= (Math.random()*10) + 1;
   n2= parseInt(n2.toFixed(0));
   
   if(n1>10) n1=10; if(n2>10) n2=10;
   
   $("#cara1").html("<img src='image/face.jpg'>");
   for(i=0; i<n1-1; i++)
   {
       $("#cara1").append("<img src='image/face.jpg'>");
   }
   
   $("#cara2").html("<img src='image/face.jpg'>");
   for(i=0; i<n2-1; i++)
   {
       $("#cara2").append("<img src='image/face.jpg'>");
   }
}



