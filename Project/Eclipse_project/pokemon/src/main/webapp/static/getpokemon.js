
        const data = JSON.parse(localStorage.getItem("rawdata"));
        const tablelist =document.getElementById("tablelist");
        function getpokemon(){
            console.log( data.next);
            console.log( data.results);
            
            let name=[];

            const pokemonobject = Object.values(data.results);
            pokemonobject.forEach(pokemon => {
            name.push(pokemon.name);
                const row =document.createElement("tr");
                const cellname =document.createElement("td");
                const celldetail =document.createElement("td");
                const cella =document.createElement("a");
            

                cellname.innerHTML=pokemon.name;
                cellname.id="pokemon_name";
                cella.innerHTML=`Details pokemon: ${pokemon.name}`;
                cella.href=pokemon.url;

                celldetail.appendChild(cella);
                row.appendChild(cellname);
                row.appendChild(celldetail);
                tablelist.appendChild(row);

            });
    console.log(document.getElementsByTagName("a").innerHTML);

        }

    function Collecttabledata(){
        let tabledata =[];
        let arrayrow = Array.from(tablelist.rows);
        
            for (let i = 1; i < arrayrow.length; i++) { // Bỏ qua dòng tiêu đề
            let name = tablelist.rows[i].cells[0].innerText;
            let detail = tablelist.rows[i].cells[1].innerText;
            tabledata.push({ name: name, detail: detail });
        }
        document.getElementById("serverdata").value= JSON.stringify(tabledata);
        console.log(JSON.stringify(tabledata));
    }    