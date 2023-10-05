// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = proces.env.FROM_EMAIL

export async function POST(req, res) {

  const { body } = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['davcastellanos01@gmail.com', email],
      subject: subject,
    //   react: EmailTemplate({ firstName: 'John' }),
       react:(
        <>
          <h1>{subject}</h1>
          <h2>Thank you for contacting us!</h2>
          <p>{message}</p>
        </>
       ) 
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
