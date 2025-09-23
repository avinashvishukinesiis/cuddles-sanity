import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { child_name, age, guardian, phone, email, comments } = body

    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "cuddles.communication@gmail.com", // your receiving email
      subject: `New Inquiry from ${guardian} (for ${child_name})`,
      html: `
        <h2>Child Information</h2>
        <p><strong>Child's Name:</strong> ${child_name}</p>
        <p><strong>Age:</strong> ${age}</p>

        <h2>Guardian Information</h2>
        <p><strong>Name:</strong> ${guardian}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h2>Additional Comments</h2>
        <p>${comments || "No comments provided."}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
