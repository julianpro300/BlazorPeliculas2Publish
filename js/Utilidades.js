function pruebaPuntoNetStatic() {
    DotNet.invokeMethodAsync("BlazorPeliculas2.Client", "obtenerCurrentCount")
        .then(resultado => {
            console.log('conteo desde javaScript: ' + resultado);
        });
}

// Expongo la función en window por si acaso
window.pruebaPuntoNetInstancias = function (dotnetHelper) {
    // Esto llamará al método C# estático JSInvokable "IncrementCount"
    dotnetHelper.invokeMethodAsync("IncrementCount");
}

window.pruebaPuntoNetInstancias = function (dotNetObject) {
    console.log("Invocando método C# desde JavaScript");
    dotNetObject.invokeMethodAsync("IncrementCountDesdeJS");
}



window.pruebaPuntoNetStatic = function () {
    console.log("Método estático de C# invocado desde JS");
    DotNet.invokeMethodAsync("BlazorPeliculas2.Client", "obtenerCurrentCount")
        .then(resultado => {
            console.log("Resultado desde C#:", resultado);
        });
};

export function mostrarAlerta() {
    alert("¡Este es un mensaje desde JS (módulo)!");
}

function timerInactivo(dotnetHelper) {
    var timer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    function resetTimer() {
        clearTimeout(timer);
        //timer = setTimeout(logout, 3 * 1000 );
    }
    function logout() {
        dotnetHelper.invokeMethodAsync("Logout");
    }
}

