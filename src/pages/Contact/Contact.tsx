import React, { useState } from 'react';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';

//styles
import "./Contact.scss";

interface StateProps {
    name: string;
    surname: string;
    email: string;
    phone: string;
}

export const Contact = () => {
    const [state, setState] = useState<StateProps>({
        name: '',
        surname: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleSubmitForm = () => {
        console.log('submit');
    }

    console.log('state', state);
    return (
        <div className="Contact">
            <section className="block_section">
                <div className="container">
                    <Form>
                        <FormGroup>
                            <Label for="name">Emri juaj</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Emri"
                                value={state.name}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="surname">Mbiemri juaj</Label>
                            <Input
                                id="surname"
                                name="surname"
                                type="text"
                                placeholder="Mbiemri"
                                value={state.surname}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email juaj</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={state.email}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Nr. Telefoni</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Nr Telefonit"
                                value={state.phone}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button
                            outline
                            type="submit"
                            color="success"
                            onClick={handleSubmitForm}
                        >Dërgo</Button>
                    </Form>
                </div>
            </section>
        </div>
    )
}
