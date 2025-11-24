import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log("🔑 API Key existe?", !!process.env.RESEND_API_KEY);
console.log("🔑 API Key (primeiros 10 chars):", process.env.RESEND_API_KEY?.substring(0, 10));

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    console.log("📧 Recebido:", { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["kauankelvin7777@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>Nova mensagem do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email enviado:", data);

    return NextResponse.json({
      success: true,
      data
    });

  } catch (error: unknown) {
    console.error("❌ Erro:", error);

    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}