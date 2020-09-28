import React, { Component } from "react";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import Navbar from "../../components/UI/Navigation/navbar/navbar";
import Aux from "../../hoc/Aux";
import Features from "../Features/Features";
import Advantages from "../Advantages/Advantages";
import Information from "../Information/Information";
import axios from "../../axios-dudas";

class Homepage extends Component {
    state = {
        sections: ["#Welcome", "#Features", "#How", "#Contact"],
        features: [
            { title: "Servicio de Tutorías personalizadas", src: "https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/pexels-rfstudio-3825527.jpg?alt=media&token=759939aa-5be4-4f54-99ef-adbd63cd6f18" },
            { title: "Asesores para ingreso a preparatorioa y facultad ", src: "https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/pexels-thisisengineering-3862130.jpg?alt=media&token=867c50b9-74c0-498e-980a-65cec814e8ff" },
            { title: "Profesores de Inglés", src: "https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/invonto-m4n7lOvFqog-unsplash.jpg?alt=media&token=bc54f243-a174-43f8-8bff-4e36bafed920" }
        ],
        informationQuery: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Ejemplo Sr. (Sr.a) Pérez"
                }
                , value: "",
                validation: {
                    required: true
                },
                valid: false
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
                valid: false
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
                valid: false
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
                }, value: ""
                ,validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 500
                }
            },
            question: {
                elementType: "textArea",
                elementConfig: {
                    type: "text",
                    placeholder: "Compartenos tus dudas..."
                }
                , value: "",
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 500
                }
            }
        }

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
        updatedQuestionElement.valid = this.checkValidation(updatedQuestionElement.value, updatedQuestionElement.validation)


        updatedQuestionForm[inputId] = updatedQuestionElement;
        console.log(updatedQuestionElement)
        this.setState({
            informationQuery: updatedQuestionForm,
        })
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
        return (
            <Aux>
                <Navbar sections={this.state.sections} />
                <WelcomeSection />
                <Features features={this.state.features} />
                <Advantages />
                <Information
                    inputField={this.state.informationQuery}
                    clicked={(event, inputId) => this.informationChangeHandler(event, inputId)}
                    send={this.submitQuestionHandler} />
            </Aux>
        )
    }
}

export default Homepage;