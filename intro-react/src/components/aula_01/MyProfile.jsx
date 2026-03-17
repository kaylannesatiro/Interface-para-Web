//componente responsável por mostrar os dados do meu perfil

const MyProfile = () => {
    return (
        <>
            <table border={5}>
                <tr>
                    <td>Dado</td>
                    <td>Resultado</td>
                </tr>
                <tr>
                    <td>Nome:</td>
                    <td>Kaylanne</td>
                </tr>
                <tr>
                    <td>Curso:</td>
                    <td>Engenharia de Software</td>
                </tr>
                <tr>
                    <td>Cidade de Origem:</td>
                    <td>Oeiras - PI</td>
                </tr>
            </table>
        </>
    )
}

export default MyProfile