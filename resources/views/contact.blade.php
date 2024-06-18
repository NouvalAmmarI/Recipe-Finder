<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link rel="stylesheet" href="css/contact.css">
</head>

<body>
  <div class="contact-container">
    <form action="https://api.web3forms.com/submit" method="POST" class="contact-left">

      <div class="contact-left-title">
        <h2>Contact Us</h2>
        <hr>
      </div>

      <input type="hidden" name="access_key" value="02086bf5-b999-4716-b1ef-dd76e1bb9df3">

      <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required>

      <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required>

      <textarea name="message" placeholder="Your Message" class="contact-inputs"></textarea>

      <div class="contact-button">
        
        <button type="submit">Submit <img src="img/arrow_icon.png" alt=""></button>

        <button >
          <a href="/FinalProject"> Back</a>
        </button>

      </div>
      
    </form>

    <div class="contact-right">
      <img src="img/chef1.png" alt="">
    </div>
  </div>
</body>
</html>