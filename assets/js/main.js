function convertir() {
    //valor a recolectar
    let valor = parseFloat(document.getElementById("cantidad").value);
    let de = document.querySelector("#de").value;
    let a = document.querySelector("#a").value;
    let error = document.getElementById("error");
    //valores a convertir
    const moneda = [
        {
            "dolar": 3996,
            "dolar_eu": 0.88,
            "dolar_mx": 20.60,
            "dolar_lb": 0.76,
            "euro": 4532,
            "euro_mx": 23.31,
            "euro_lb": 0.84,
            "Mexicano": 195,
            "libra": 5396,
            "libra_mx": 27.70,
        }
    ]
    //condiciones para convertir
    moneda.forEach((moneda) => {
        const { dolar, dolar_eu, dolar_lb, dolar_mx, euro, euro_lb, euro_mx, Mexicano, libra, libra_mx } = moneda;
        
        if (isNaN(valor)) {
            document.getElementById("error").innerHTML = "ingresa una cantidad a convertir";
            error.style.display = "inline";
        }
        if (de != 0 && a != 0) {
            if (de == 1 && a == 3) {
                resul = valor * dolar;
            }
            if (de == 3 && a == 1) {
                resul = valor / dolar;
            }
            if (de == 5 && a == 3) {
                resul = valor * euro;
            }
            if (de == 3 && a == 5) {
                resul = valor / euro;
            }
            if (de == 2 && a == 3) {
                resul = valor * Mexicano;
            }
            if (de == 3 && a == 2) {
                resul = valor / Mexicano;
            }
            if (de == 4 && a == 3) {
                resul = valor * libra;
            }
            if (de == 3 && a == 4) {
                resul = valor / libra;
            }
            if (de == 1 && a == 1) {
                resul = valor * 1;
            }
            if (de == 2 && a == 2) {
                resul = valor * 1;
            }
            if (de == 3 && a == 3) {
                resul = valor * 1;
            }
            if (de == 4 && a == 4) {
                resul = valor * 1;
            }
            if (de == 5 && a == 5) {
                resul = valor * 1;
            }
            if (de == 1 && a == 2) {
                resul = valor * dolar_mx;
            }
            if (de == 2 && a == 1) {
                resul = valor / dolar_mx;
            }
            if (de == 1 && a == 4) {
                resul = valor * dolar_lb;
            }
            if (de == 4 && a == 1) {
                resul = valor / dolar_lb;
            }
            if (de == 1 && a == 5) {
                resul = valor * dolar_eu;
            }
            if (de == 5 && a == 1) {
                resul = valor / dolar_eu;
            }
            if (de == 5 && a == 2) {
                resul = valor * euro_mx;
            }
            if (de == 2 && a == 5) {
                resul = valor / euro_mx;
            }
            if (de == 5 && a == 4) {
                resul = valor * euro_lb;
            }
            if (de == 4 && a == 5) {
                resul = valor / euro_lb;
            }
            if (de == 4 && a == 2) {
                resul = valor * libra_mx;
            }
            if (de == 2 && a == 4) {
                resul = valor / libra_mx;
            }
        } else {
            document.getElementById("error").innerHTML = "No Has Elige Tu Moneda";
            error.style.display = "inline";
        }
        if(resul > 0 ){
            error.style.display = "none"
        }
        document.getElementById("resultado").innerHTML = "Resultado: " + resul.toFixed(2);
    })
}

