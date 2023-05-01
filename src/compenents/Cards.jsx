import { useNavigate } from 'react-router-dom'
import '../Main.css'
import deportiva from '../assets/img/deportiva.jpg'
import clasica from '../assets/img/clasica.jpg'
import boulder from '../assets/img/boulder.jpg'


export const Cards = () => {
    const navigate = useNavigate()
    const info = [
        {   
            id: 1,
            img: clasica,
            title: "Clásica",
            to: "rutas/clasica"
        },
        {   
            id: 2,
            img: deportiva,
            title: "Deportiva",
            to: "rutas/deportiva"
        },
        {   
            id: 3,
            img:boulder,
            title: "Boulder",
            to: "rutas/boulder"
        },
    ]
  return (

    <>  {info.map((value, index) =>

        <div className='card' key={value.id}>
        <div className='card-image'>
            <img src={value.img} alt="" />
        </div>
        <div>
            <p className='card-title'>{value.title}</p>
            <button onClick={() => navigate(`${value.to}`)}> {value.to} </button>
        </div>                
        </div>
        )
        
        }

    </>    
  )
}

