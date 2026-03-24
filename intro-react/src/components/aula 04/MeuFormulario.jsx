import { useState } from "react";

const MeuFormulario = () => {

    const [aluno, setAluno] = useState({
        nome: "",
        sobrenome: ""
    })

    const onHandleAluno = (evento) => {
        const {value, name} = evento.target
        setAluno({...aluno, [name]: value}) //espalhando o objeto
    }

    return (
        <div className="container">
        <header>
            <h2>Inscrição do Aluno</h2>
        </header>

        <main>
            <div>
                {JSON.stringify(aluno)}
            </div>

            <form action="">
                <div>
                    <label>Nome: </label>
                    <input 
                        type="text" 
                        value={aluno.nome} 
                        name="nome"
                        onChange={onHandleAluno}
                    />
                </div>

                <div>
                    <label>Sobrenome: </label>
                    <input 
                        type="text" 
                        value={aluno.sobrenome}
                        name="sobrenome"
                        onChange={onHandleAluno}
                    />
                </div>

                <div>
                    <button>Enviar</button>
                </div>
            </form>
        </main>
        </div>
    )
}

export default MeuFormulario;