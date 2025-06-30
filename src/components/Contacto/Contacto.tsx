"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormContact } from '../FormContact/FormContact';

// Definimos la interfaz para los datos del formulario
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Estilos con styled-components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f3f3f3;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(3, 36, 125, 0.854);
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 1rem;
  margin-top: 100px;
`;

const ContactDetails = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: #0f0c0c;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin: 0.5rem 0;
  }

  strong {
    color: #04396f;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.1rem;
    color: #333333;
    margin-bottom: 0.5rem;
    
  }

  input,
  textarea {
    background-color: #fff;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  textarea {
    resize: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: #fff;
  background-color: #04396f;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #04396f;
  }
`;

const ContactInfo: React.FC = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que todos los campos obligatorios estén completos
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    try {
      // Simular el envío del formulario a un backend o API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('¡Tu mensaje ha sido enviado con éxito!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Ocurrió un error inesperado. Por favor, intenta más tarde.');
    }
  };

  return (
    <ContactContainer>
      {/* Sección de información de contacto */}
      <ContactDetails>
        <h2>Información de Contacto</h2>
        <p>
          <strong>Dirección:</strong> Alajuela, Tuetar Norte
        </p>
        <p>
          <strong>Teléfono:</strong> +506 4000-1230
        </p>
        <p>
          <strong>Email:</strong>  info@varmedical.com
        </p>
        <p>
          <strong>Horario de Atención:</strong> Lunes a Viernes, 8:00 AM - 5:00 PM
        </p>
      </ContactDetails>

      {/* Formulario de contacto */}
      <FormContact/>
    </ContactContainer>
  );
};

export default ContactInfo;