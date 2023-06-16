 
function simularPrestamo() {
    let repetir = true;
    const resultadoElement = document.getElementById("resultado");

    
    const prestamos = [];

    while (repetir) {
        let nombre = prompt("Ingresa Nombre y Apellido");
        let monto =  prompt("Indique el monto a solicitar");
        let plazo = prompt("Indique el plazo a pagar");
        
        if (!nombre || !monto || !plazo) {
            alert("No ingresó los datos requeridos");
        } else if (monto <= 0 || plazo <= 0) { 
            alert("El monto y el plazo deben ser mayores a cero.");
        } else {
            let InteresAnual = 0.12;
            let InteresMensual = InteresAnual / 12;
            let cuotaMensual = monto * (InteresMensual / (1 - Math.pow(1 + InteresMensual, -plazo)));

            // Objeto
            let prestamo = {
                nombreCompleto: nombre,
                montoSolicitado: monto,
                plazo: plazo,
                cuotaMensual: cuotaMensual.toFixed(2)
            };

            prestamos.push(prestamo); //OBJETO AGREGADO Y PUSHEADO

            alert("El monto a pagar mensualmente es: $" + cuotaMensual.toFixed(2));
        }
      
        repetir = confirm("¿Deseas simular otro préstamo?"); 
    }

    console.log(prestamos); 

    const prestamoEncontrado = prestamos.find((prestamo) => prestamo.nombreCompleto === "Liliana Estevez");
    if (prestamoEncontrado) {
        const mensaje = "El préstamo de Liliana Estevez ha sido encontrado.";
        resultadoElement.textContent = mensaje;
        alert(mensaje);
      } else {
        const mensaje = "El préstamo de Liliana Estevez no ha sido encontrado.";
        resultadoElement.textContent = mensaje; 
        alert(mensaje);
      }

}

simularPrestamo();


  
  