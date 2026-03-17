import "./StudentProfile.css";

const StudentProfile = ({name, img, descricao, escolhido}) => {
    function selectEscolhido(escolhido) {
        if(escolhido) {
            return {borderColor:"red"}
        }
        return {}
    }

    return (
        <>
            <div className="student-card" style={selectEscolhido(escolhido)}>
                <div className="student-title">
                    <h1> {name} </h1>
                </div>

                <div className="student-picture">
                    <img src={img} 
                    alt={"Este é o estudante" + name}
                    style={{width:"150px"}}
                    />
                </div>

                <div className="student-description">
                    <p>{descricao}</p>
                </div>
            </div>
        </>
    )
}

export default StudentProfile