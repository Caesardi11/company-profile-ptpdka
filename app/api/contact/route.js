import { Resend } from 'resend';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: 'ardicaesarkurniawan@gmail.com',
            subject: subject,
            html: `
            <h1>Contact Form Submission</h1>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pesan:</strong></p>
            <p>${message}</p>
            `,
        });

        return Response.json({ success: true, data: response });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
