/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/**
 * Conversión de unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param {String} id - Id de los inputs del formulario
 * @param {Number} valor - El valor de los inputs del formulario
 */
function conversionUnidades(id, valor){
    let metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingresó un valor incorrecto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id==="metro"){
        metro = valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
        pulgada = 39.3701*valor;
    }else if(id==="pulgada"){
        pulgada = valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
        metro = 0.0254*valor;
    }else if(id==="pie"){
        pie = valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
        metro = 0.3048*valor;
    }else if (id==="yarda"){
        yarda = valor;
        pulgada = 36*valor;
        pie = 3*valor;
        metro = 0.9144*valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = yarda.toFixed(2);
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
}

function convertirGR(id){
    let grad, rad;

    if (id==="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;

}

function mostrar_ocultar(valorMO){
    if (valorMO==="val_mostrar"){
        document.getElementById("unDiv").style.display = 'block';
    }else if(valorMO==="val_ocultar"){
        document.getElementById("unDiv").style.display = 'none';
    }
}

function cargarWeb(){
    let cantidad, unidad, urlComp;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    let cantidad, unidad, urlComp;

    urlComp = window.location.href;
    urlComp = urlComp.split("#");
    console.log(urlComp);

    cantidad = urlComp[1];
    unidad = urlComp[2];

    document.getElementById("dist").value = cantidad + " " + unidad;
}
/**
function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('segundaWeb.html');
}

function cargarLocalStorage(){
    let cantidad, unidad;
    cantidad = localStorage.getItem("distanciaLS");
    unidad = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cantidad + " " + unidad;
}
*/
function cSuma(){
    let num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementById("totalS").innerHTML = num1 + Number(num2);
}

function cResta(){
    let num1, num2;
    num1 = Number(document.getElementById("numr1").value);
    num2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = num1 - num2;
}

function cMulti(){
    let num1, num2;
    num1 = Number(document.getElementById("numm1").value);
    num2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = num1 * num2;
}

function cDivision(){
    let num1, num2;
    num1 = Number(document.getElementById("numd1").value);
    num2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = num1 / num2;
}


function dibujarCuadriculado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;

    //Dibujar Lineas Horizontales

    for (let i=20; i<yMax;){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#1b73f8";
        ctx.stroke();
        ctx.closePath();
        i=i+20;
    }

    //Dibujar Lineas Verticales

    for (let i=20; i<xMax;){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8";
        ctx.stroke();
        ctx.closePath();
        i=i+20;
    }

    //Ejex
    ctx.beginPath();
    ctx.moveTo(0, yMax/2);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#ff0009";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font="10pt Verdana";
    ctx.fillStyle = "blue";
    ctx.fillText( "Eje x", canvas.width/2, canvas.height/2);
    ctx.closePath()

    //Ejey
    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#ff0009";
    ctx.stroke();
    ctx.closePath();
}

function dibujarAuto(posX, posY){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";

    console.log(posX, posY);

    img.onload = function(){
        ctx.drawImage(img, posX, posY);
        console.log("Se deberia dibujar la imagen.");
    }
}

x = 0;
dx = 2;
function animarAuto(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }

    if (x>canvas.width){
        x = 0;
    }

    x = x + dx;
}

function dibujarCirculoCuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    let margen = 10;
    let tamCuadrado = 50;

    ctx.fillRect(0+margen, yMax-50-margen, tamCuadrado, tamCuadrado);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#3c91d2";
    ctx.fill();
}
