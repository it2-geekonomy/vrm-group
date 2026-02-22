"use client";
import { useState } from "react";
import Typography from "@/lib/typography";
import { validateContactForm, ContactFormData, ContactFormErrors,} from "@/lib/validation";

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(form);
    }
  };

  const inputStyle =
    "w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-[#ED1C2475] focus:ring-0 transition-all duration-300";

  const textareaStyle =
    "w-full box-border bg-transparent border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:border-[#ED1C2475] focus:ring-0 transition-all duration-300 resize-none overflow-hidden";

  return (
    <section className="w-full bg-black py-4 xl:py-20 px-10 sm:px-16 md:px-32 lg:px-14 xl:px-24 border-t border-gray-600">
      <div className="max-w-7xl mx-auto">
        <Typography
          variant="display-2xl"
          className="text-[#FFFFFF] font-cormorant mb-4 lg:mb-12 text-center lg:text-left"
        >
          Send Us A Message
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-stretch">
          {/* LEFT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-8 flex flex-col">
            
            {/* NAME */}
            <div>
              <Typography
                variant="body-xl"
                className="text-white font-poppins mb-2"
              >
                NAME
              </Typography>

              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className={inputStyle}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <Typography
                variant="body-xl"
                className="text-white font-poppins mb-2"
              >
                EMAIL ADDRESS
              </Typography>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className={inputStyle}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* CONTACT */}
            <div>
              <Typography
                variant="body-xl"
                className="text-white font-poppins mb-2"
              >
                CONTACT NUMBER
              </Typography>

              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className={inputStyle}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <Typography
                variant="body-xl"
                className="text-white font-poppins mb-2"
              >
                MESSAGE
              </Typography>

              <textarea
                value={form.message}
                rows={4}
                maxLength={500}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });

                  // Auto resize
                  e.target.style.height = "auto";
                  e.target.style.height =
                    e.target.scrollHeight + "px";
                }}
                className={textareaStyle}
              />

              {/* {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message}
                </p>
              )} */}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                className="cursor-pointer px-18 py-2 rounded-full bg-[#ED1C2475] border-1 border-gray-300"
              >
                <Typography
                  variant="body-xl"
                  className="text-white font-poppins"
                >
                  SUBMIT
                </Typography>
              </button>
            </div>
          </form>

          {/* RIGHT SIDE - MAP */}
          <div className="w-full h-[280px] lg:h-full min-h-[280px] rounded overflow-hidden bg-gray-900">
            <iframe
            title="VRM Group – Elite Infraa Projects, Grace City, Palasamudram"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30973.865839485978!2d77.63120177646464!3d13.974478191317074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb19d8ceded67c9%3A0x83861c6825964fb4!2sPalasamudram%2C%20Andhra%20Pradesh%20515241!5e0!3m2!1sen!2sin!4v1771657337325!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}