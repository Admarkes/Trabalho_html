function cadastrar() {
    let usuario = {};
    
    let nome = document.getElementById("nomeUsuario");
    let email = document.getElementById("emailUsuario");
    
    usuario.nome =  nome.value;
    usuario.email = email.value; 
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
}
