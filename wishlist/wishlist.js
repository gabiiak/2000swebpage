document.getElementById("cucaracha").addEventListener("click", function(){
    const respuesta = confirm("te gustaría donar todo tu dinero al PUEBLO DE ISRAEL?")
    if(respuesta){window.location.href = "israel.html"}
});
document.getElementById("tux").addEventListener("click", function(){window.location.href="../index.html"});