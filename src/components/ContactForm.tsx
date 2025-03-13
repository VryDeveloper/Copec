import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cria um formulário virtual para envio via FormSubmit
    const form = document.createElement("form");
    form.action = "https://formsubmit.co/acoscopec@gmail.com"; // Seu email de destino
    form.method = "POST";

    // Adiciona os campos do formulário (mantemos o nome original para que apareçam no corpo do email)
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key; // mantém o nome original (ex.: "email")
      input.value = value;
      form.appendChild(input);
    });

    // Campo oculto para definir o endereço de resposta (_replyto)
    const replytoInput = document.createElement("input");
    replytoInput.type = "hidden";
    replytoInput.name = "_replyto";
    replytoInput.value = formData.email;
    form.appendChild(replytoInput);

    // Campo para desativar o CAPTCHA
    const captchaInput = document.createElement("input");
    captchaInput.type = "hidden";
    captchaInput.name = "_captcha";
    captchaInput.value = "false";
    form.appendChild(captchaInput);

    // Define um assunto padrão para os emails recebidos
    const subjectInput = document.createElement("input");
    subjectInput.type = "hidden";
    subjectInput.name = "_subject";
    subjectInput.value = "Nova mensagem do formulário de contato";
    form.appendChild(subjectInput);

    // (Opcional) Define uma URL para redirecionamento após o envio
    const nextInput = document.createElement("input");
    nextInput.type = "hidden";
    nextInput.name = "_next";
    nextInput.value = window.location.href; // ou especifique outra URL
    form.appendChild(nextInput);

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Reseta o formulário e exibe a mensagem de sucesso
    setFormData({ name: "", email: "", message: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="seu@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Mensagem</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            rows={4}
            placeholder="Descreva o seu Pedido."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Enviar Mensagem
        </button>
      </form>

      {success && (
        <div className="mt-4 p-3 bg-green-600 text-white text-center rounded-lg transition-all duration-300">
          ✅ Sua mensagem foi enviada com sucesso!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
