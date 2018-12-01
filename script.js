var slideIndex = 1;
                
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {

 
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";

  if(n==1)
    TrocaLegenda("Catedral de Nossa Senhora dos Remédios");
  if(n==2)
    TrocaLegenda("Igreja Coração de Jesus.");
  if(n==3)
    TrocaLegenda("Catedral de Nossa Senhora dos Remédios.");
  if(n==4)
    TrocaLegenda("Centro de picos a noite.");



}

function TrocaLegenda(txt){

  document.getElementById('legenda').innerHTML = "<p id ='legenda'>"+txt+"</p> ";}