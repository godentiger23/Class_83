var mouse_event = "empty";

var startx, starty;
color = "black";
width_of_line = 2;


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

if(screen.width < 992)
{
       canvas.width = screen.width - 100;
       canvas.height = screen.height - 250;
      document.body.style.overflow = "hidden";
}
     
canvas.addEventListener("touchstart", my_touchstart);
                    //   event         function   

function my_touchstart(e) 
// e is holding position of my touch where i touch means x and y
{ 
       color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;

         
    startx = e.touches[0].clientX - canvas.offsetLeft;
    starty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath(); //pen down
    ctx.strokeStyle = color; //pen color
    ctx.lineWidth = width_of_line; // pen width

  
    ctx.moveTo(startx, starty);  
    ctx.lineTo(currentx, currenty);

    ctx.stroke(); 

   startx = currentx; 
   starty = currenty;
    
    // end of old same old as the paint web app
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        startX = e.clientX- canvas.offsetLeft;
        startY = e.clientY- canvas.offsetTop;

        mouse_event = "mouseDown";
    }


    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e)
        {
            currentX = e.clientX- canvas.offsetLeft;
            currentY = e.clientY- canvas.offsetTop;
    
         if (mouse_event == "mouseDown")
            {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
    
            ctx.moveTo(startX, startY);
            ctx.lineTo(currentX, currentY);
    
            ctx.stroke();
            
            }
    
            startX = currentX; 
            startY = currentY;
        }
    
    
canvas.addEventListener("mouseup", my_mouseup);
                      //  event      function  
        
        function my_mouseup(e)
        {
            mouse_event = "mouseup";
        }
    

    
    
    //Additional Activity
    function clearArea() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    