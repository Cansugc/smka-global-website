import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const RECIPIENT_EMAIL = "info@smkaglobal.ca"
const EMAIL_SUBJECT = "New Project Request - SMKA Global"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""
    const projectType = typeof body.projectType === "string" ? body.projectType.trim() : ""
    const timeline = typeof body.timeline === "string" ? body.timeline.trim() : ""
    const description = typeof body.description === "string" ? body.description.trim() : ""

    // Server-side validation of required fields
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 },
      )
    }

    // Server-side email format validation
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Toronto",
      dateStyle: "full",
      timeStyle: "short",
    })

    const rows: Array<[string, string]> = [
      ["Full Name", name],
      ["Email", email],
      ["Phone Number", phone || "Not provided"],
      ["Project Type", projectType],
      ["Desired Timeline", timeline || "Not provided"],
      ["Project Description", description],
      ["Submitted", submittedAt],
    ]

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; max-width: 640px;">
        <h2 style="margin-bottom: 16px;">New Project Request</h2>
        <table style="border-collapse: collapse; width: 100%;">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: 600; vertical-align: top; white-space: nowrap;">${escapeHtml(
                label,
              )}</td>
              <td style="padding: 8px 12px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(
                value,
              )}</td>
            </tr>`,
            )
            .join("")}
        </table>
      </div>
    `

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n")

    const { error } = await resend.emails.send({
      from: "SMKA Global <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: EMAIL_SUBJECT,
      html,
      text,
    })

    if (error) {
      console.error("[v0] Resend send error:", error)
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[v0] Contact route error:", err)
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
