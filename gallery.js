function upDate(previewPic){
   
        document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
      
        document.getElementById('image').innerText = previewPic.alt;
     
       }
   
       function unDo(){
        document.getElementById('image').style.backgroundImage = "url('original_img.jpg')";
         document.getElementById('image').innerText = 'Original Text';
           
     }
       function onLoadFunction() {
        console.log("Page has finished loading!");
       
        addTabindexToImages(); 
    }
    window.onload =onLoadFunction;
    
    function addTabindexToImages() {
      var my_imag = document.querySelectorAll("img")
    for (let i = 0; i < my_imag.length; i++) {
    my_imag[i].setAttribute("tabindex",i+1);
        }
    }