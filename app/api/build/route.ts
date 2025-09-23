import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      Type_of_partnership,
      Category,
      Business_full_name,
      phone,
      email,
      comments,
    } = body

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
      to: "cuddles.communication@gmail.com", // receiving email
      subject: `New Partnership Request from ${Business_full_name}`,
      html: `
        <h2>Partnership Information</h2>
        <p><strong>Type of Partnership:</strong> ${Type_of_partnership}</p>
        <p><strong>Category:</strong> ${Category}</p>

        <h2>Business & Contact</h2>
        <p><strong>Business Name:</strong> ${Business_full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h2>Expected Benefits / Comments</h2>
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
