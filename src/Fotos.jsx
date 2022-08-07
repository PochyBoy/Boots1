
import {useState} from 'react'
function Fotos (){

    const [lista, setLista] = useState([])
    const [imagen, setImagen] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNzzzqlAGwhiE8FAX9VLoE1NI2eid0C5uHtI7VXXx&s')
    const arreglo = ['moto','bici','bus','coche']
    const selector = arreglo.map(selector => selector)

    function cambio(){
        if(lista = ''){
            setImagen(imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNzzzqlAGwhiE8FAX9VLoE1NI2eid0C5uHtI7VXXx&s')
        }else if(lista = 'moto'){
            setImagen( imagen = 'https://motor.elpais.com/wp-content/uploads/2019/11/Bimota-TESI-H2-1-980x540.jpg')
        }else if(lista = 'bici'){
            setImagen(imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNzzzqlAGwhiE8FAX9VLoE1NI2eid0C5uHtI7VXXx&s')
        }else if(lista = 'bus'){
            setImagen(imagen='https://st4.depositphotos.com/1719108/20270/i/600/depositphotos_202700522-stock-photo-funny-looking-cartoon-yellow-bus.jpg')
        }else{ setImagen( imagen = 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/01/mejores-coches-10000-15000-1855853.jpg?itok=5pYXRSSw')}
    }
    return(

        <>

            <img  src={imagen} alt="" />
           <form>
                <select onChange={e => setLista(e.target.value)} value={lista} name="" id="">
                    {selector.map((transporte, key) => <option value={key}>{transporte}</option>)}
                </select>
           </form>
        
        </>
    )
     
}
export default Fotos