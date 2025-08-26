import './style.css'

function Images() {
    return (
        <section>
            <h2>Imagens e Vídeos</h2>
            <h3>Imagem</h3>
            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXg_2qCfebgMYpBlMAVzW-vbXiBN1IdHckgw&s" alt="Imagem de um cachorro na praia" />
            </figure>

            <h3>Vídeo</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JpYVZpuMPYM?si=r-_M8DL8WN3QGqXS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    )
}

export default Images