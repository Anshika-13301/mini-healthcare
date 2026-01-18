const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  let autoReply =
    "Thank you for contacting us. Our team will reach out shortly.";

  if (message?.toLowerCase().includes("appointment")) {
    autoReply = "For appointments, our team will contact you within 24 hours.";
  } else if (message?.toLowerCase().includes("emergency")) {
    autoReply =
      "If this is an emergency, please contact the nearest hospital immediately.";
  } else if (message?.toLowerCase().includes("volunteer")) {
    autoReply =
      "Thank you for showing interest in volunteering. We will share next steps soon.";
  }

  res.status(200).json({
    success: true,
    name,
    email,
    message,
    autoReply,
  });
});

module.exports = router;
