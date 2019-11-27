function enviar() {
    const formData = new FormData()
    const arquivo = document.getElementById('arquivoInput').files[0]
    const xhr = new XMLHttpRequest()

    formData.append("file", arquivo)
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            const div = document.getElementById('mensagem')
            const resposta = xhr.responseText
            div.innerHTML += resposta
        }
    }
    xhr.open('POST', 'http://localhost:8080/api/upload')
    xhr.send(formData)
}