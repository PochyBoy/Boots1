import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'

function Thumbs(){
    //<FontAwesomeIcon  icon={faThumbsDown} />
    //<FontAwesomeIcon  icon={faThumbsUp} />
    let [actiu, setActiu] = useState(false)
    
    
    return(
        <>
        <span style={{color: 'red', fontSize:'50px' }} onClick={()=> setActiu(!actiu)} >
            {actiu? <FontAwesomeIcon  icon={faThumbsDown}/>:<FontAwesomeIcon  icon={faThumbsUp}/>
            }
        </span>
        </>
    )
}
export default Thumbs