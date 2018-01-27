resultadoAcumulado = 0

window.addEventListener('load', function() {
    
    /*
    obterResultado()
    .then((resultado) => {
        resultadoAcumulado += resultado
        return obterResultado2()         
    }).then(resultado2 => {
        resultadoAcumulado += resultado2 + obterResultado3()
        const paragrafoDoResultado = document.getElementById("resultado")
        paragrafoDoResultado.innerText = resultadoAcumulado        
    }).catch(error => {
        const paragrafoDoResultado = document.getElementById("resultado")        
        paragrafoDoResultado.innerText = "deu pau: " + error
    })
    */


    (async function() {
        try {
            const resultado1 = await obterResultado()
            const resultado2 = await obterResultado2()
            const paragrafoDoResultado = document.getElementById("resultado")
            paragrafoDoResultado.innerText = resultado1 + resultado2
        } catch(error) {
            const paragrafoDoResultado = document.getElementById("resultado")        
            paragrafoDoResultado.innerText = "deu pau: " + error
        }       
    }())

    
})


async function obterResultado() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (Math.random() > 0.20) {
                resolve(15)
            } else {
                reject("Deu um pau na primeira")
            }
        }, 1000);
    });
}


async function obterResultado2() {
    const resultadoDa3 = await obterResultado3()    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.20) {
                const resultado = 28 + resultadoDa3
                resolve(resultado)
            } else {
                reject("Deu um pau na segunda")
            }
        }, 1000);
    });
}

async function obterResultado3() {
    return 18
}