"use client"
import { useState } from "react";
import styles from "../../../styles/styles.module.css";
import { Alert, Box, Button, TextField, TextareaAutosize, styled, } from "@mui/material";


const ContactForm = () => {
    const defaultSubmission = {
        status: null,
        message: null,
    }

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const handleNameChange = e => {
        setName(e.target.value);
        if (e.target.validity.valid) {
            setNameError(false);
        } else {
            setNameError(true);
        }
    };

    // const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState(false);
    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    //     if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
    //         setEmailError(false);
    //     } else {
    //         setEmailError(true);
    //     }
    // };


    const [submission, setSubmission] = useState(defaultSubmission);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData: any = {};
        const elements = e.currentTarget.elements as unknown as Array<
            HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
        >;

        Array.from(elements).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        console.log(formData);
        await fetch('/contact/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("MY SUPER AWESOME RESPONSE", res);
                setSubmission(res);
            });
    }

    return (
        <div className={styles.contact_container}>
            {submission?.status ? (
                <Alert variant="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            ) : null}

            <form className={styles.contactform} onSubmit={handleSubmit}>
                <Box sx={{ pb: { xs: 1, md: 1 }, width: 1 }}>
                    <StyledTextField
                        fullWidth
                        name="name"
                        id="name-basic"
                        label="Name"
                        value={name}
                        onChange={handleNameChange}
                        error={nameError}
                        variant="outlined"
                        type="text"
                        required
                        inputProps={{
                            pattern: "[A-Za-z ]+",
                        }}
                        helperText={
                            nameError ? "Please enter your name (letters and spaces only)" : ""
                        }
                    />
                </Box>
                <Box sx={{ pb: { xs: 1, md: 1 }, width: 1 }}>
                    <StyledTextField
                        fullWidth
                        name="email"
                        id="email-basic"
                        label="Email"
                        variant="outlined"
                        // value={email}
                        // onChange={handleEmailChange}
                        // error={emailError}
                        // helperText={emailError ? "Please enter a valid email" : ""}
                        inputProps={{
                            type: "email",
                        }}
                        required />
                </Box>
                <Box sx={{ pb: { xs: 1, md: 1 }, width: 1 }}>
                    <StyledTextArea
                        name="message"
                        id="message"
                        placeholder="Write your message here!"
                        minRows={6} />
                </Box>
                <StyledButton type="submit" variant="contained">Submit</StyledButton>
            </form>
        </div>
    );
}

export default ContactForm;

const StyledTextField = styled(TextField)`
    width: 100%;
    color: white;
    background-color: #e3d5f7;
    border-radius: 5px;
    font-family: var(--asap-font);

    field-set {
        border-color: white;
    }
`
const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    border-color: #161033;
    background-color: #e3d5f7;
    border-radius: 5px;
    font-family: var(--asap-font);
`

const StyledButton = styled(Button)`
    background-color: #E9B820;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    color: black;

`