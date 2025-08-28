import './style.css'

import List from '../../componets/List'
import Images from '../../componets/Images'
import Form from '../../componets/Form'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            


            <main>
                <Link to='/About'>
                <button type="button">Navegar</button>
                </Link>

                 <List titulo="Batata" />
                <List titulo="Aipim" />
                <Images />
                <Form /> 
            </main>


            

        </>
    )
}

export default Home