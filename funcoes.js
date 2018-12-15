 function myprojection(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
          return point;}

 function MaisProx(P){
          var menorDist = 99999;
          var indMenor = 99999;
          for(var i = 0; i<Postos.length; i++){
            var d = Distancia(P, Postos[i][0]);
            if(d<menorDist){
              menorDist=d;
              indMenor=i;
            }
          }
          return indMenor;
        }

function Distancia(C1, C2){
          var a = myprojection(C1[0], C1[1]);
          var b = myprojection(C2[0], C2[1]);
          
          var c1 = (b.x-a.x)*(b.x-a.x);
          var c2 = (b.y-a.y)*(b.y-a.y);

          return Math.sqrt(c1+c2);

        }
