// Obtener el formulario de manera segura
const form = document.getElementById("contact-form") as HTMLFormElement | null;

// Validar campo del formulario.
const validateField = (field: HTMLInputElement | HTMLTextAreaElement): boolean => {
  const { name, value } = field;
  let valid = true;

  switch (name) {
    case "name":
      valid = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(value); // Validar nombre.
      break;
    case "email":
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validar email.
      break;
    case "message":
      valid = value.length >= 20; // Validar mensaje.
      break;
  }

  const errorElement = document.getElementById(`${name}-error`);
  if (errorElement) {
    errorElement.textContent = valid
      ? ""
      : `Invalid ${name}: ${
          name === "name"
            ? "Name must start with an uppercase and be properly formatted."
            : name === "email"
            ? "Enter a valid email address."
            : "Message must be at least 20 characters long."
        }`;
    errorElement.classList.toggle("hidden", valid);
  }

  return valid;
};

// Asegurarse de que el formulario existe antes de agregar eventos
if (form) {
  // Validar campos en tiempo real.
  form.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    validateField(target);

    const submitButton = document.getElementById("submit-button") as HTMLButtonElement | null;
    if (submitButton) {
      submitButton.disabled = !Array.from(form.elements).every((field) =>
        validateField(field as HTMLInputElement)
      );
    }
  });

  // Manejar el envío del formulario.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!"); // Mensaje de éxito.
    form.reset(); // Reiniciar formulario.
  });
} else {
  console.error("⚠️ El formulario no se encontró en el DOM.");
}
