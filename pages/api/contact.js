export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, budget, area, propertyType, moveDate, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Format WhatsApp message
    const whatsappMessage = `🏠 *New Property Inquiry*

👤 *Name:* ${name}
📧 *Email:* ${email}
${phone ? `📱 *Phone:* ${phone}` : ''}
${budget ? `💰 *Budget:* ${budget}` : ''}
${area ? `📍 *Preferred Area:* ${area}` : ''}
${propertyType ? `🏢 *Property Type:* ${propertyType}` : ''}
${moveDate ? `📅 *Move Date:* ${moveDate}` : ''}

💬 *Message:*
${message}

---
*Sent from Pin Property Pro website*`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/66959124769?text=${encodeURIComponent(whatsappMessage)}`;

    // Return success response with WhatsApp URL
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully',
      whatsappUrl: whatsappURL
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
