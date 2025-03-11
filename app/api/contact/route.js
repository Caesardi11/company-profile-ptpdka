import { Resend } from 'resend';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "ardicaesarkurniawan@gmail.com",
            subject: `📩 Pesan Baru dari ${name} : ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f4f4f4; border-radius: 10px; border: 1px solid #ddd;">
                    <div style="background-color: #121212; padding: 15px; border-radius: 10px 10px 0 0;">
                        <h2 style="color: #FFCC00; text-align: center;">Pesan Baru dari Website</h2>
                    </div>
                    <div style="padding: 20px; background-color: white;">
                        <p><strong>Nama :</strong> ${name}</p>
                        <p><strong>Email :</strong> ${email}</p>
                        <p><strong>Subyek :</strong> ${subject}</p>
                        <hr style="border-top: 1px solid #ddd;">
                        <p style="margin-top: 10px;"><strong>Pesan :</strong></p>
                        <p style="padding: 10px; background-color: #f9f9f9; border-left: 4px solid #FFCC00; line-height: 1.6">${message}</p>
                    </div>
                    <div style="text-align: center; padding: 10px; background-color: #121212; color: white; border-radius: 0 0 10px 10px;">
                        <p><strong>Email dikirim dari formulir kontak website Anda.</strong></p>
                    </div>
                </div>
            `,
        });

        return Response.json({ success: true, data: response });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

