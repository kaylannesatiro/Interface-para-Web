import StudentProfile from "./StudentProfile"

const StudentProfileList = () => {

    const StudentDataBase = [
        {
            name: "Luisa",
            description: "Bla bla bla",
            img: "",
            escolhido: false

        },

        {
            name: "Mikael",
            description: "Bla bla bla",
            img: "",
            escolhido: true

        },

        {
            name: "Nicholas",
            description: "Bla bla bla",
            img: "",
            escolhido: false

        },

        {
            name: "Diego",
            description: "Bla bla bla",
            img: "",
            escolhido: true

        },

        {
            name: "Amanda",
            description: "Bla bla bla",
            img: "",
            escolhido: false

        },

        {
            name: "Raimundo",
            description: "Bla bla bla",
            img: "",
            escolhido: false

        }
    ]

    return (
        <div style={{display: "flex", gap: "15px", flexWrap: "nowrap"}}>
            {
                StudentDataBase.map(
                    ({name, img, description, escolhido}) => <StudentProfile
                        name={name}
                        img={img}
                        description={description}
                        escolhido={escolhido}
                    />
                        
                )
            }
        </div>
    )
}

export default StudentProfileList