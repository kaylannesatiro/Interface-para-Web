import TeacherProfile from "./TeacherProfile";

const TeacherProfileList = () => {
    const TeacherDataBase = [
        {
            name: "Alisson Barbosa de Souza",
            descricao: "Professor Adjunto e Pesquisador na Universidade Federal do Ceará, Campus de Quixadá. Possui graduação, mestrado e doutorado em Ciência da Computação e especialização em Ciência de Dados e Big Data.",
            img: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Alisson-Barbosa-de-Souza1.png",
            titulacao: "Doutor em Ciências da Computação."
        },

        {
            name: "Críston Pereira de Souza",
            descricao: "Professor associado no Campus da Universidade Federal do Ceará em Quixadá. Tem doutorado em Informática pela PUC-Rio, na área de Otimização e Raciocínio Automático.",
            titulacao: "Doutor em Informática",
            img: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/criston-22-768x832.png"
        },

        {
            name: "Jeferson Kenedy Morais Vieira",
            descricao: "Bacharel em Sistemas de Informação (Faculdade de Juazeiro do Norte), mestre em Engenharia de Software (Centro de Estudos e Sistemas Avançados do Recife – CESAR School) e doutor em Ciência da Computação (Universidade Federal de Pernambuco – UFPE). Tem experiência na área de Sistemas de Informação e Engenharia de Software.",
            titulacao: "Doutor em Ciência da Computação",
            img: "https://www.quixada.ufc.br/wp-content/uploads/2015/05/jkmv-jeferson-kenedy-scaled-e1709910173521-768x946.jpeg"
        },

        {
            name: "Rainara Maia Carvalho",
            descricao: "Professora adjunta da Universidade Federal do Ceará (UFC) – Campus Quixadá. Possui doutorado e mestrado pelo programa de Mestrado e Doutorado em Ciência da Computação (MDCC) da Universidade Federal do Ceará. Possui graduação em Sistemas de Informação pela mesma universidade. Seus interesses de pesquisa são nas áreas de Engenharia de Software, com ênfase em Requisitos Não-Funcionais e Medição de Software, e Interação Humano-Computador, ambas as áreas voltadas para aplicações no ambiente da Computação Ubíqua e Internet das Coisas.",
            titulacao: "Doutora em Ciência da Computação",
            img: "https://www.quixada.ufc.br/wp-content/uploads/2016/12/rainara-947x1024.jpg"
        },

        {
            name: "Sidartha Azevedo Lobo de Carvalho",
            descricao: "Professor da Universidade Federal do Ceará. Doutor e Mestre em Ciência da Computação pela Universidade Federal de Pernambuco (UFPE). Graduado em Sistemas de Informação pela Universidade Federal do Ceará (UFC), Campus de Quixadá.",
            titulacao: "Doutor em Ciência da Computação",
            img: "https://www.quixada.ufc.br/wp-content/uploads/2024/02/Foto-Sidartha-Carvalho-768x981.jpeg"
        },

        {
            name: "Wesley Castro Sabino",
            descricao: "Mestre em Ciência Tecnologia e Inovação (UFRN), graduado em Gestão de Turismo, especialista em Docência no Ensino Superior e aluno especial no doutorado em Administração e Controladoria da UFC em 2023.2.",
            titulacao: "Mestre em Ciência Tecnologia e Inovação",
            img: "https://www.quixada.ufc.br/wp-content/uploads/2024/08/WhatsApp-Image-2025-07-16-at-14.31.43-300x300.jpeg"
        }
    ]

    return (
        <>
            <div style={{display: "flex", gap: "15px", flexWrap: "nowrap"}}>
                {
                    TeacherDataBase.map(
                        ({name, img, descricao, titulacao}) => 
                        <TeacherProfile
                            name={name}
                            img={img}
                            descricao={descricao}
                            titulacao={titulacao}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TeacherProfileList