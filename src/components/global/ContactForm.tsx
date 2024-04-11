"use client"
import React from "react";
import styles from "../../../styles/contact.module.css";
import { Box, Button, TextField, TextareaAutosize } from "@mui/material";


const ContactForm = () => {
    const defaultSubmission =

    const [submission, setSubmission] = useState({
        status: null,
        message: null,
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData: { [key: string]: string } = {};
        const elements = formData.currentTarget.elements as unknown as Array<
            HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
        >;

        Array.from(elements).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        console.log(formData)
        // let object: any = {};
        // formData.forEach((value: string, key: string) => object[key] = value);
        await fetch('/contact/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("MY SUPER AWESOME RESPONSE", res)
                setSubmission
            });
    }

    return (
        <div>
            {submission?.status ? (
                <Alert variant="filled" severity={submission.status}>
                    {submission.message}
                </Alert>
            ) : null}

            <form className={styles.contactform} onSubmit={handleSubmit}>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <TextField name="name" id="name-basic" label="Name" variant="outlined" type="text" />
                </Box>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <TextField name="email" id="email-basic" label="Email" variant="outlined" type="email" />
                </Box>
                <Box sx={{ pb: { xs: 1, md: 1 } }}>
                    <TextareaAutosize name="message" id="message" placeholder="Write your message here!" />
                </Box>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
}

export default ContactForm;