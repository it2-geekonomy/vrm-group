"use client";

import { useState, useEffect } from "react";
import Typography from "@/lib/typography";

interface BusinessEnquiryFormData {
  name: string;
  phone: string;
  email: string;
  numberOfPeople: string;
  dateFrom: string;
  dateTo: string;
}

interface BusinessEnquiryFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  numberOfPeople?: string;
  dateFrom?: string;
  dateTo?: string;
}

interface BusinessEnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessEnquiryForm({ isOpen, onClose }: BusinessEnquiryFormProps) {
  const [form, setForm] = useState<BusinessEnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    numberOfPeople: "",
    dateFrom: "",
    dateTo: "",
  });

  const [errors, setErrors] = useState<BusinessEnquiryFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: BusinessEnquiryFormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!form.numberOfPeople.trim()) {
      newErrors.numberOfPeople = "Number of people is required";
    } else if (parseInt(form.numberOfPeople) < 1) {
      newErrors.numberOfPeople = "Must be at least 1";
    }

    if (!form.dateFrom.trim()) {
      newErrors.dateFrom = "Start date is required";
    }

    if (!form.dateTo.trim()) {
      newErrors.dateTo = "End date is required";
    } else if (form.dateFrom && form.dateTo && new Date(form.dateTo) < new Date(form.dateFrom)) {
      newErrors.dateTo = "End date must be after start date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch("/api/business-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send enquiry");
      }

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        numberOfPeople: "",
        dateFrom: "",
        dateTo: "",
      });
      
      // Auto close after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full bg-transparent border-b border-gray-600 pb-2 text-white focus:outline-none focus:border-[#ED1C2475] focus:ring-0 transition-all duration-300";

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#090d12]/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-[#090d12] border border-white/20 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 lg:p-8">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-md">
                <Typography variant="body-lg" className="text-green-400 text-center">
                  Thank you! Your enquiry has been submitted successfully.
                </Typography>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* NAME */}
                <div>
                  <Typography variant="body-xl" className="text-white font-poppins mb-2">
                    NAME
                  </Typography>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputStyle}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <Typography variant="body-xl" className="text-white font-poppins mb-2">
                    PHONE
                  </Typography>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputStyle}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <Typography variant="body-xl" className="text-white font-poppins mb-2">
                    EMAIL
                  </Typography>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputStyle}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* NUMBER OF PEOPLE */}
                <div>
                  <Typography variant="body-xl" className="text-white font-poppins mb-2">
                    NUMBER OF PEOPLE
                  </Typography>
                  <input
                    type="number"
                    min="1"
                    value={form.numberOfPeople}
                    onChange={(e) => setForm({ ...form, numberOfPeople: e.target.value })}
                    className={inputStyle}
                    placeholder="Enter number of people"
                  />
                  {errors.numberOfPeople && (
                    <p className="text-red-500 text-xs mt-1">{errors.numberOfPeople}</p>
                  )}
                </div>

                {/* DATE FROM */}
                <div>
                  <Typography variant="body-xl" className="text-white font-poppins mb-2">
                    DATE (FROM)
                  </Typography>
                  <input
                    type="date"
                    value={form.dateFrom}
                    onChange={(e) => setForm({ ...form, dateFrom: e.target.value })}
                    className={inputStyle}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.dateFrom && (
                    <p className="text-red-500 text-xs mt-1">{errors.dateFrom}</p>
                  )}
                </div>

                {/* DATE TO */}
                <div>
                  <Typography variant="body-xl" className="text-white font-poppins mb-2">
                    DATE (TO)
                  </Typography>
                  <input
                    type="date"
                    value={form.dateTo}
                    onChange={(e) => setForm({ ...form, dateTo: e.target.value })}
                    className={inputStyle}
                    min={form.dateFrom || new Date().toISOString().split("T")[0]}
                  />
                  {errors.dateTo && (
                    <p className="text-red-500 text-xs mt-1">{errors.dateTo}</p>
                  )}
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center lg:justify-start pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-animated px-8 py-3 bg-[#ED1C2475] border border-white text-white font-cormorant text-lg rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
