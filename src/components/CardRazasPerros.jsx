


function CardRazasPerros({ nombreRaza, imagen, color }) {
    return (
        <li class="breedCard ">
            <div className={color}>
                <div className="contenedorImagen">
                    <img src={imagen} alt={nombreRaza} />
                </div>
                <span class="breedTitle">{nombreRaza}</span>
            </div>
        </li>
    )
}
export default CardRazasPerros;

