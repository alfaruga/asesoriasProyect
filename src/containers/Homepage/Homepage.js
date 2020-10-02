import React, { Component } from "react";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Navbar from "../../components/UI/Navigation/navbar/navbar";
import Aux from "../../hoc/Aux";
import Features from "../Features/Features";
import Advantages from "../Advantages/Advantages";
import Footer from "../../components/UI/Footer/Footer";
import FAQ from "../FAQ/FAQ";
import axios from "../../axios-dudas";
import Contact from "../Contact/Contact";

class Homepage extends Component {
    state = {
        show: false,
        sections: ["#Inicio", "#Servicios", "#¿Cómo trabajamos?", "#Preguntas Frecuentes", "#Contáctanos"],
        features: [
            { title: "Servicio de Tutorías personalizadas", src: "https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/personalizadas.jpg?alt=media&token=3fe62702-8c82-4a35-8951-b78b9a509518" },
            { title: "Ingreso a preparatoria y facultad ", src: "https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/examenes.jpg?alt=media&token=4793845d-d092-4c4a-abce-5813b60d9d5a" },
            { title: "Profesores de Inglés", src: "https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/english.jpg?alt=media&token=5136806f-ff74-46f8-bbe7-6eb4c5caf67c" }
        ],
        formIsValid: false,
        informationQuery: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Nombre y Apellido"
                }
                , value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                msg: "Introduce un nombre válido"
            },
            phone: {
                elementType: "input",
                elementConfig: {
                    type: "tel",
                    pattern: "[0-9]{10}",
                    placeholder: "Teléfono o whatsapp a 10 dígitos"
                }
                , value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                msg: "Número de teléfono a 10 dígitos, p. ej. 9876543210"

            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Correo electrónico de uso frecuente"
                }
                , value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                msg: "Introduce un correo válido (ejemplo@ejemplo.com)"

            },
            sale: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { value: "Asesoria exámen de Ingreso", displayValue: "Asesoria exámen de Ingreso" },
                        { value: "Matemáticas o ciencias", displayValue: "Tutoría en matemáticas o ciencias" },
                        { value: "Inglés", displayValue: "Tutorías en inglés" },
                        { value: "Otro", displayValue: "Otro" }
                    ]
                }, value: "Asesoria exámen de Ingreso",
                valid: true,
                touched: false,
                msg: ""


            },
            question: {
                elementType: "textArea",
                elementConfig: {
                    type: "text",
                    placeholder: "Compartenos tus dudas..."
                }
                , value: "",
                validation: {
                    maxLength: 500
                },
                valid: false,
                touched: false,
                msg: "Brinda más información para poder ayudarte"
            },
        }

    }
    linkClickHandler = () => {
        this.setState({
            show: false
        })
    }
    checkValidation(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;

    }

    informationChangeHandler = (event, inputId) => {
        const updatedQuestionForm = {
            ...this.state.informationQuery,
        }
        const updatedQuestionElement = { ...updatedQuestionForm[inputId] }
        updatedQuestionElement.value = event.target.value;

        //Validation
        if (updatedQuestionElement.validation) {
            updatedQuestionElement.valid = this.checkValidation(updatedQuestionElement.value, updatedQuestionElement.validation)
        }
        //Has been touched
        updatedQuestionElement.touched = true;

        //Check if form is full of valid data

        let formIsValid = true;
        for (let inputIdentifier in updatedQuestionForm) {
            formIsValid = updatedQuestionForm[inputIdentifier].valid && formIsValid;
        }
        console.log(formIsValid)
        //Update state

        updatedQuestionForm[inputId] = updatedQuestionElement;
        this.setState({
            informationQuery: updatedQuestionForm,
            formIsValid: formIsValid
        })
    }
    showModalHandler = () => {
        let toggle = { ...this.state }
        toggle = toggle.show;

        this.setState({ show: !toggle })
    }
    submitQuestionHandler = (event) => {
        event.preventDefault();
        const questionData = {};
        for (let elementId in this.state.informationQuery) {
            questionData[elementId] = this.state.informationQuery[elementId].value;
        }
        axios.post('/preguntas.json', questionData)
            .then(response => {
                alert("done")
            })
            .catch(error => {
                alert("error")
            })
    }


    render() {
        let content = !this.state.show ? [<WelcomeSection />, <Features features={this.state.features} />, <Advantages />, <FAQ />, <Contact formIsValid={this.state.formIsValid}
            inputField={this.state.informationQuery}
            clicked={(event, inputId) => this.informationChangeHandler(event, inputId)}
            send={this.submitQuestionHandler} />, <Footer />] : null


        return (
            <Aux>
                <Navbar show={this.state.show} linkClicked={this.linkClickHandler} clicked={this.showModalHandler} sections={this.state.sections} />
                {content}
            </Aux>
        )
    }
}

export default Homepage;