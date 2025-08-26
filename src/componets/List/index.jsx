import './style.css'

function List({ titulo }) {
    return (
        <section>
            <h2>{ titulo }</h2>

            <h3>Lista não ordenada:</h3>

            <ul id="desafio">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>


            <h3>Lista ordenada:</h3>
            <ol>
                <li>Primeiro item</li>
                <li>Segundo item</li>
                <li>Terceiro item</li>
            </ol>

        </section>
    )
}

export default List