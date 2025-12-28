export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  return `
  <div style="background:#f4f6f8; padding:30px 0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; font-family:Arial, sans-serif; box-shadow:0 4px 16px rgba(0,0,0,0.1);">

      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f766e,#14b8a6); padding:35px 20px; text-align:center; color:#ffffff;">
          <h2 style="margin:0; font-size:28px; font-weight:700; letter-spacing:-0.5px;">🧾 Order Invoice</h2>
          <p style="margin:8px 0 0; font-size:15px; opacity:0.95;">Thank you for shopping with <strong>Hero Kidz</strong></p>
        </td>
      </tr>

       <!-- Spacer -->
      <tr>
        <td style="padding:25px 0;"></td>
      </tr>

      <!-- Order Info -->
      <tr>
        <td style="padding:0 25px 20px;">
          <div style="background:#f8fafc; padding:14px 18px; border-radius:8px; border-left:4px solid #14b8a6;">
            <p style="margin:0; font-size:13px; color:#64748b; font-weight:600; text-transform:uppercase; letter-spacing:0.5px;">Order ID</p>
            <p style="margin:4px 0 0; font-size:15px; color:#0f172a; font-weight:600;">${orderId}</p>
          </div>
        </td>
      </tr>

      <!-- Items Table -->
      <tr>
        <td style="padding:0 20px 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <thead>
              <tr style="background:#f1f5f9;">
                <th style="padding:12px 14px; text-align:left; font-size:13px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px; border-bottom:2px solid #e2e8f0;">Product</th>
                <th style="padding:12px 14px; text-align:center; font-size:13px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px; border-bottom:2px solid #e2e8f0;">Qty</th>
                <th style="padding:12px 14px; text-align:right; font-size:13px; font-weight:700; color:#475569; text-transform:uppercase; letter-spacing:0.5px; border-bottom:2px solid #e2e8f0;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${items
                .map(
                  (item) => `
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:14px; font-size:15px; color:#1e293b; font-weight:500;">${item.name}</td>
                  <td style="padding:14px; text-align:center; font-size:15px; color:#64748b; font-weight:500;">${item.quantity}</td>
                  <td style="padding:14px; text-align:right; font-size:15px; color:#1e293b; font-weight:600;">৳${item.price}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </td>
      </tr>

      <!-- Total -->
      <tr>
        <td style="padding:0 25px 25px;">
          <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); padding:18px 20px; border-radius:10px; border:2px solid #14b8a6;">
            <table width="100%">
              <tr>
                <td style="font-size:18px; font-weight:700; color:#0f172a;">Total</td>
                <td style="font-size:22px; font-weight:800; color:#0d9488; text-align:right; letter-spacing:-0.5px;">
                  ৳${totalPrice}
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc; padding:25px 20px; text-align:center; border-top:1px solid #e2e8f0;">
          <p style="margin:0; font-size:15px; color:#475569;">
            We hope you enjoy your purchase 😊
          </p>
          <p style="margin:8px 0 0; font-size:14px; color:#64748b;">
            💚 Thank you for shopping with <strong style="color:#0d9488;">Hero Kidz</strong>
          </p>
        </td>
      </tr>

    </table>
  </div>
  `;
};
