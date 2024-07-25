import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { email } = req.body; // Assuming email is sent in the request body

  try {
    const data = await resend.emails.send({
      from: 'Windrose Video Uploader <david@windrose.dev>',
      to: email,
      subject: 'Welcome to the Windrose Video Uploader',
      html: '<p>Thank you for signing up! Your account has been created. Please monitor this email address and add david@windrose.dev to your contacts to ensure your receive all notifications. Your next email will be confirmation that your account has been activated by Windrose, at which time you can begin uploading assets on the site at:</p><a>https://windrose.dev</a>'
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ error });
  }
}