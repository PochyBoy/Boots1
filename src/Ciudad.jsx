import ciutats from './ciutats'

function Ciudad(){

    let paso1 = [...ciutats]

    function ordenamiento1 (a,b){
        if(a.municipi < b.municipi){return -1;}
        if(a.municipi > b.municipi){return +1;}
    };

    let lista = paso1.sort(ordenamiento1).map(e =>  <tr>
        <td>{e.municipi}</td>
        <td>{e.poblacio}</td>
        <td>{e.comarca}</td>
        <td>{e.provincia}</td>
    </tr>);

    let paso2 = [...ciutats]
    function transformaPoblacio(ciutat){
        if (typeof ciutat.poblacio == "string"){
            ciutat.poblacio = ciutat.poblacio.replaceAll(".", "")*1;
        }
        return ciutat;
      };
    function ordenamiento2 (a,b){
        if(a.poblacio < b.poblacio){return -1;}
        if(a.poblacio > b.poblacio){return +1;}}

    let lista2=  paso2.map(transformaPoblacio).sort(ordenamiento2).map(e =>  <tr>
        <td>{e.municipi}</td>
        <td>{e.poblacio}</td>
        <td>{e.comarca}</td>
        <td>{e.provincia}</td>
    </tr>);
    
    let paso3 = [...ciutats]

    let lista3 = paso3.map(transformaPoblacio).filter(e => e.poblacio > 100000).map(e =>  <tr>
        <td>{e.municipi}</td>
        <td>{e.poblacio}</td>
        <td>{e.comarca}</td>
        <td>{e.provincia}</td>
    </tr>);

    


    return(
        <>
           <table>
                <thead>
                    <tr>
                        <th>Municipi</th>
                        <th>Població</th>
                        <th>Provincia</th>
                        <th>Comarca</th>
                    </tr>
                </thead>
                <tbody>
                    {lista}
                    <br />
                    <br />
                    {lista2}
                    <br />
                    <br />
                    {lista3}
                </tbody>
           </table>
                 </>
    )}
    export default Ciudad