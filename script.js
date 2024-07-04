function inseirTextoResultado(id, texto) {
    let elemento = document.getElementById(id);
    elemento.innerHTML = `<textarea disabled="disabled" class="texto-inserido" id="texto-inserido">${texto}</textarea>` + '<button onclick="copiarTexto()" id="bt-copiar" onclick="copiarTexto">Copiar</button>';
}

function inserirHTML(id, html) {
    let marcador = document.getElementById(id);
    marcador.innerHTML = html;
}

function mensagemDeErroSaida() {
    inserirHTML('saida',
        '<img src="./img/High quality products 1 1.png" alt="imagem de avatar com uma lupa" class="img-saida" id="img-saida">' + '<span class="mensagem-negrito" id="msg-neg">Nenhuma mensagem encontrada</span>' + '<span class="mensagem-comum" id="msg-comum">Digite um texto que você deseja criptografar ou descriptografar.</span>'
    );

}

function criptografar() {
    let textoEntrada = document.getElementById('txtarea').value;
    if (textoEntrada == '') {
        mensagemDeErroSaida();
        return;
    }
    let textoCriptografado = '';
    for (let index = 0; index < textoEntrada.length; index++) {
        switch (textoEntrada[index]) {
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break;
            case 'u':
                textoCriptografado += 'ufat';
                break;
            default:
                textoCriptografado += textoEntrada[index];
                break;
        }
    }
    inseirTextoResultado('saida', textoCriptografado);
}

function copiarTexto() {
    let texto = document.getElementById('texto-inserido');
    navigator.clipboard.writeText(texto.innerHTML);
}

function descriptografar() {
    let textoEntrada = document.getElementById('txtarea').value;
    if (textoEntrada == '') {
        mensagemDeErroSaida();
        return;
    }
    let ArrayCriptografada = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let ArrayDescriptografada = ['a', 'e', 'i', 'o', 'u'];
    let textoDescriptografado = textoEntrada;
    for (let index = 0; index < 5; index++) {
        textoDescriptografado = textoDescriptografado.replaceAll(ArrayCriptografada[index], ArrayDescriptografada[index]);
    }
    inseirTextoResultado('saida', textoDescriptografado);
}