document.querySelector(".add").addEventListener("submit" , async (e) => {
    e.preventDefault();

    const data = {
        nom : e.target.nom.value ,
        montant : e.target.montant.value
    }

    const optionsRequete = { method : "POST" , body : JSON.stringify(data) , headers :  {'Content-Type': 'application/json'}  }
    const reponse = await fetch("http://localhost:4221/depenses" , optionsRequete)

    if(reponse.status) e.target.reset()

})