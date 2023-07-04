function clock() {
    var img = document.getElementById("imagem")

    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();
    const formatoHoras = horas.toString().padStart(2, "0");
    //const formatoHoras = 17
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector(".frase");
    dia = new Array ("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado")
    //Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.
    mes = new Array ("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")

    hoje = new Date()
    frase.innerHTML =`${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,"0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}.`

    if(formatoHoras >= 6 && formatoHoras <17) {
        document.body.style.backgroundImage = "url(https://preview.redd.it/cherry-blossom-1920x1080-v0-adfe3rrihdaa1.png?width=1080&crop=smart&auto=webp&v=enabled&s=33fa6b1a5310a4f3241dc4020049e07310ef84be)"
        document.body.style.backgroundsize = "cover"
        
    }
    else if(formatoHoras >=17 && formatoHoras <18) {
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/65/bc/b8/65bcb85e46e5a768e53851d70ef61586.jpg)"
    }
    else {
        document.body.style.backgroundImage = "url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/087c9032070725.567524c492a62.png)" 
        img.src = "img/imgnoite.png"
    }
}

setInterval(clock, 1000) 