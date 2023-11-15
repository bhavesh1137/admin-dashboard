"use client"
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import Form5 from './Form5'

const Form = ({ data }) => {
    const { formStep, setFormStep, incrementStep, decrimentStep } = data;

    switch (formStep) {
        case 1:
            return <Form1 />
        case 2:
            return <Form2 />
        case 3:
            return <Form3 />
        case 4:
            return <Form4 />
        case 5:
            return <Form5 />
        default:
            return null
    }
}

export default Form