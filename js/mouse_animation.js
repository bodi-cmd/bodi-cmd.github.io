(function() {
  if ($(window).width() >1000) {
    // code for small viewports

    document.onmousemove = handleMouseMove;

    
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        var Xcoord=(Math.floor(((window.innerWidth-event.pageX)/window.innerWidth)*120)+1)
       // console.log(Xcoord+"   "+ event.pageX+"   "+ window.innerWidth)
        if(Xcoord<=1)Xcoord=1;
        if(Xcoord>=120)Xcoord=120;
        var url_blinkr = "./img/Cadre_blinkr/";
        var url_sportier = "./img/Cadre_sportier/";
        if(Xcoord<=9){
          url_blinkr=url_blinkr +"000"
          url_sportier=url_sportier +"000"
        }
        if(Xcoord>=10&&Xcoord<=99){
          url_blinkr=url_blinkr +"00"
          url_sportier=url_sportier +"00"
        }
        if(Xcoord>=100&&Xcoord<=999){
          url_blinkr=url_blinkr +"0"
          url_sportier=url_sportier +"0"

        }
          url_blinkr = url_blinkr + Xcoord.toString(10);
          url_blinkr = url_blinkr+".webp";
          url_sportier = url_sportier + Xcoord.toString(10);
          url_sportier = url_sportier+".webp";
        document.getElementById("blinkr").src = url_blinkr;
        document.getElementById("sportier").src = url_sportier;   
    }
  }
  else{
        
    document.body.addEventListener("touchmove", checkscroll, false);



    function checkscroll(){

        var scroll = $(window).scrollTop();
        // Do something
        console.log(scroll - $("#blinkr").offset().top);
    
    
        var Xcoord=(Math.floor((scroll - $("#blinkr").offset().top+800)/7));
        // console.log(Xcoord+"   "+ event.pageX+"   "+ window.innerWidth)
         if(Xcoord<=1)Xcoord=1;
         if(Xcoord>=120)Xcoord=120;
         var url_blinkr = "./img/Cadre_blinkr/";
         var url_sportier = "./img/Cadre_sportier/";
         if(Xcoord<=9){
           url_blinkr=url_blinkr +"000"
           url_sportier=url_sportier +"000"
         }
         if(Xcoord>=10&&Xcoord<=99){
           url_blinkr=url_blinkr +"00"
           url_sportier=url_sportier +"00"
         }
         if(Xcoord>=100&&Xcoord<=999){
           url_blinkr=url_blinkr +"0"
           url_sportier=url_sportier +"0"
 
         }
           url_blinkr = url_blinkr + Xcoord.toString(10);
           url_blinkr = url_blinkr+".webp";
           url_sportier = url_sportier + Xcoord.toString(10);
           url_sportier = url_sportier+".webp";
         document.getElementById("blinkr").src = url_blinkr;
        document.getElementById("sportier").src = url_sportier;   
    
    
    
    
      };


        
    }
  


})();