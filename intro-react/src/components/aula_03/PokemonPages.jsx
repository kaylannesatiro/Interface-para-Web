import { use, useState } from "react";

const PokemonPages = () => {

    const spriteURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [id, setId] = useState(1020)

    const addId = () => {
        if (id < 1025) {
            setId((x) => x + 1) //funçao anonima
        }
    }

    const subId = () => {
        if (id > 1) {
            setId((x) => x - 1)
        }
    }

    return (
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pokemon Pages</a>
                </div>
            </nav>

            <main className="container">
                <h2>Navegador de Pokemons</h2>

                <div className="card" style={{width: 300}}>
                    <img src={spriteURL + id + ".png"} className="card-img-top" alt="Pokemon" style={{width: 250}}/>

                    <div className="card-body">
                        <h5 className="card-title">
                            {id} - Nome do Pokemon
                        </h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id exercitationem voluptate at dolores dolorum molestiae omnis dolor quae quaerat dicta animi assumenda, dolorem nulla saepe, eligendi ab eveniet ipsum.</p>

                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <button className="btn btn-primary" onClick={subId}>Diminuir</button>
                            <button className="btn btn-primary" onClick={addId}>Acrescentar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PokemonPages;