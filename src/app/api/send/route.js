import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
    // Memanggil req.json() sebagai fungsi untuk mengurai JSON dari body
    const body = await req.json();
    const { subject, message } = body;

    try {
        const { data, error } = await resend.emails.send({
            from: `Guest <${fromEmail}>`,
            to: [toEmail],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>{message}</p>
                </>
            ),
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
