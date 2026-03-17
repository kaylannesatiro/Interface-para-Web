//criar um perfil do professor com:
//-nome
//-imagem
//descrição
//-titulação

import "./TeacherProfile.css";

const TeacherProfile = ({name, img, descricao, titulacao}) => {
    return (
        <>
            <div className="teacher-card">
                <div className="teacher-title">
                    <h3>{name}</h3>
                </div>

                <div className="teacher-titulacao">
                    <h4>{titulacao}</h4>
                </div>

                <div className="teacher-img">
                    <img src={img} alt="{Esse é o professor + name}"/>
                </div>

                <div className="teacher-descricao">
                    <p>{descricao}</p>
                </div>
            </div>
        </>
    )
}

export default TeacherProfile