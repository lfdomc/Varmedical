"use client";

import styled from 'styled-components';
import { FormContact } from '../FormContact/FormContact';


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

  h1 {
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


const ContactInfo: React.FC = () => {
  // Estado para manejar los datos del formulario


  return (
    <ContactContainer>
      {/* Sección de información de contacto */}
      <ContactDetails>
        <h1>Información de Contacto</h1>
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