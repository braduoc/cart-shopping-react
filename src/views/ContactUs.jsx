import React, { useState } from 'react';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Manejo de cambios en los campos del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías agregar lógica para enviar el formulario (como una llamada a una API)
        setIsSubmitted(true);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Contáctanos</h1>
            {isSubmitted && (
                <div className="alert alert-success" role="alert">
                    ¡Gracias por ponerte en contacto con nosotros! Te responderemos pronto.
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu correo con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Asunto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};
 