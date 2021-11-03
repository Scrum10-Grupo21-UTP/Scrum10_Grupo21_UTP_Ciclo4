
import CardRazasPerros from 'components/CardRazasPerros';
import a from './imag/a.png';
import './styles/App.css';
import b from './imag/b.jpg';
import c from './imag/c.jpg';


function Index() {
    return (
        <div className="App">
            <header>

                <ul class="navbar">
                    <li>
                        <img src={a} alt="imagen" class="logo" />
                    </li>
                    <li>
                        <button class="botonGenerico mainButton">Nuevo post</button>
                    </li>
                    <li>
                        <div class="buscar">
                            <input placeholder="Buscar una raza" />
                            <i class="fas fa-search botonGenerico iconoBusqueda"></i>
                        </div>
                    </li>
                    <li><button class="botonGenerico secondaryButton">Login</button></li>
                    <li><button class="botonGenerico mainButton">Registro</button></li>
                </ul>
            </header>
            <main>
                <section>
                    <h1>Razas de Perros</h1>
                    <ul class="breedCardContainer">
                        <CardRazasPerros nombreRaza='b' imagen={b} color='backGroundRojo' />
                        <CardRazasPerros nombreRaza='c' imagen={c} color='backGroundVerde' />
                        <CardRazasPerros nombreRaza='b' imagen={b} color='backGroundAmarillo' />
                        <CardRazasPerros nombreRaza='c' imagen={c} color='backGroundRojo' />

                    </ul>
                </section>

                <section></section>
            </main>
            <footer>

            </footer>
        </div>
    );
}


export default Index;