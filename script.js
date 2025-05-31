document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "🌸 You’re awesome just the way you are!",
    "🐱 Cats make everything better, don’t they?",
    "🍰 Baking makes the world sweeter — just like you!",
    "✨ Keep shining bright like the stars!",
    "🏃‍♀️ Running towards your dreams, one step at a time!",
    "💖 Sending you a virtual hug — you’ve got this!",
    "🌈 Life’s better with a splash of color and joy!",
    "🌟 Believe in yourself, magic happens!",
  ];

  const btn = document.getElementById("message-btn");
  const messagePara = document.getElementById("cute-message");

  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messagePara.textContent = messages[randomIndex];
  });
});
