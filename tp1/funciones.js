//Gonzalo Fernandez  122693/0
//Comision 1
//https://youtu.be/yDp_wTsoXcE

function triangulosprincipales(x, y, lado) {
  triangle(x, y, x+lado, y, x+lado/2, y+lado/2);
  triangle(x, y+lado, x+lado, y+lado, x+lado/2, y+lado/2);
}

function triangulosprincipales2(x, y, lado) {
  triangle(x, y, x, y+lado, x+lado/2, y+lado/2);
  triangle(x+lado, y, x+lado, y+lado, x+lado/2, y+lado/2);
}

function triangulos(x, y, lado) {
  triangle(x, y, x+lado, y, x+lado/2, height/2);
}

function triangulos2(x, y, lado) {
  triangle(x, y, x, y+lado, width/2+width/4, height/2);
}


function modulo(cantidad, tam, tam2, x, y) {

  for (let i=0; i<=cantidad; i++) {
    noStroke();

    //mapeo triangulos

    let x1=map(i, 0, cantidad, x, x+width/2-width/4);
    let x2=map(i, 0, cantidad, width/2+width/6, width-width/4);
    let x3=map(i, 0, cantidad, width, width-width/4);



    let y1=map(i, 0, cantidad, y, height/2);
    let y2=map(i, 0, cantidad, height/3, height/2);
    let y3=map(i, 0, cantidad, height, height/2);

    let ancho=map(i, 0, cantidad, tam, cantidad);
    let ancho2=map(i, 0, cantidad, tam2, cantidad);


    if (impar(i)) {
      fill(255);
    } else {
      fill(0);
    }
    triangulosprincipales(x1, y1, ancho);



    if (impar(i)) {
      fill(0);
    } else {
      fill(255);
    }
    triangulosprincipales2(x1, y1, ancho);
    triangulos(x2, y1, ancho2);
    triangulos(x2, y3, ancho2);


    if (impar(i)) {
      fill(255);
    } else {
      fill(0);
    }
    triangulos2(x1, y2, ancho2);
    triangulos2(x3, y2, ancho2);
  }
}


function impar(indice) {
  return indice%2==1;
}
