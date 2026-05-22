import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, email, message } = parsed.data
    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL ?? process.env.RESEND_TO_EMAIL

    if (!apiKey || !toEmail) {
      return Response.json(
        {
          error:
            "Contact form is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment.",
        },
        { status: 503 },
      )
    }

    const resend = new Resend(apiKey)
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }
}
