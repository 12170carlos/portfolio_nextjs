import React from 'react';



const MessageUsEmail = ({ firstname, lastname, email, phone, service, message }) => {
  const previewText = `${firstname} ${lastname} sent you a message about ${service}.`;

  return (
    <html>
      <body className="bg-white font-sans">
        <div className="container my-20 mx-auto p-5 max-w-4xl">
          <h1 className="text-black text-2xl font-normal text-left">
            <strong>Hello Carlos,</strong>
          </h1>
          <p className="text-black text-base leading-6">
            You have a new message from <span className='font-bold'>{firstname} {lastname}:</span>
          </p>
          <p className="text-black text-base leading-6"><strong>Email:</strong> {email}</p>
          <p className="text-black text-base leading-6"><strong>Phone:</strong> {phone}</p>
          <p className="text-black text-base leading-6"><strong>Service:</strong> {service}</p>
          <p className="text-black text-base leading-6">{message}</p>
          <hr className="my-4 border-t" />
          <p className="text-gray-600 text-xs">
            In a world where every email matters, Resend empowers you to send emails that captivate, engage, and convert. It's more than just an email platform; it's a catalyst for modernizing your email communication. Don't settle for outdated email practices. Embrace the future of email communication with Resend and watch your messages soar to new heights.
          </p>
          <p className="text-gray-600 text-xs">
            This email is delivered to you through the Resend SDK integrations.✨
          </p>
        </div>
      </body>
    </html>
  );
};

export default MessageUsEmail;
