function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.querySelector('.res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        alert('[ERRO] FALTAM DADOS')
        //Verificando se as caixas estão vazia
    }
    else {
        res.innerHTML = 'Contando.. <br/> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0 ){
            alert('Passo Invalido ! Considerando PASSO 1')
            p = 1

        }
        //contagem cresente 
        if (i < f ){
        for(let c = i; c <= f; c+=p){
            res.innerHTML += ` ${c} \u{1f449}`//concatenando a resposta
        }
    }
    else{
        //contagem regressiva
        for(let c = i; c >= f; c-=p){
            res.innerHTML += ` ${c} \u{1f449}`
        }
    }
    res.innerHTML += ` \u{1f3c1} `//concatenando a resposta com a bandeira
    
}
}
