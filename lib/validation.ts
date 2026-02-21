// lib/validation.ts

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const validateContactForm = (
  form: ContactFormData
): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Enter valid email";
  }

  if (!form.phone.trim()) {
    errors.phone = "Contact number is required";
  } else if (!/^[0-9]{10}$/.test(form.phone)) {
    errors.phone = "Enter valid 10-digit number";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};