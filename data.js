window.addEventListener("DOMContentLoaded"  , async() => {
    const reponse = await fetch("http://localhost:4221/depenses" )
    const data = await reponse.json(); 
    console.log(data);

    document.getElementById("results").innerHTML = resultats(data);
    document.getElementById("total").innerHTML = total(data);
    document.getElementById("depenses").innerHTML = dep(data);
    document.getElementById("recettes").innerHTML = recettes(data);

    function total(data){
        total = 0;
        depenses = data.map (d => { return d.montant} );
        for(i=0; i<data.length ;i++){
            total = total + depenses[i];
        }
        return total;
    }

    function recettes(data){
        recette = 0;
        depenses = data.map (d => { return d.montant} );
        for(i=0; i<data.length ;i++){
            if(depenses[i]<0){
                recette = recette + depenses[i];
            }
        }
        return recette;
    }

    function dep(data){
        depense = 0;
        depenses = data.map (d => { return d.montant} );
        for(i=0; i<data.length ;i++){
            if(depenses[i]>=0){
                depense = depense + depenses[i];
            }
        }
        return depense;
    }

    function resultats(data){

        if(data.length === 0 ) return "<p>Pas de dépenses récente</p>";

        return data.map( d => {


            return `<tr class="">
                        <th>${d.id}</th>
                        <th>${d.name}</th>
                        <th>${d.montant}</th>
                        <th>
                        <form class="d-flex my-3">
                            <input type="submit" class="btn btn-primary mx-3" value="modifier">
                            <input type="submit" class="btn btn-danger" value="supprimer">
                        </form>
                        </th>
                    </tr>
                `
        }).join("")
    }
});