// pages/api/send-email.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import  EmailTemplate from '@/components/emailMessage';


// Configura tu clave de API de Resend

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req , res) {
    const { formData } = await req.json();
   
    const { firstname, lastname, email, phone, service, message } = formData ;
   
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Cambia esto a tu dirección de correo
        to: ['carlos.alvarado78@gmail.com'], // Cambia esto a la dirección de correo del destinatario
        subject: `New message from ${firstname} ${lastname}`,
        react: EmailTemplate({
          firstname,
          lastname,
          email,
          phone,
          service,
          message
        }),
        text: ""
      });
      
      
      return NextResponse.json({ message: 'Email sent' }, { status: 200 });
    } catch (error) {
      console.log(error)
      return NextResponse.json({  message: 'Failed to send email' }, { status: 500 });
    }
 
};

