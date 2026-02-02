"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "@/components/Container";
import Image from "next/image";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  description: string;
  quantity: string;
  deadline?: string;
  additionalNotes?: string;
}

export default function QuotePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: QuoteFormData) => {
    setIsError(false);
    setIsSuccess(false);

    // Submit directly from client-side (like PopupWidget does)
    // This bypasses Cloudflare blocking
    const web3formsAccessKey = '1971af10-b447-47c8-ba14-60b45e95890e';
    
    // Format the message content
    const messageContent = `
New Quote Request - Kan Printers & Signs

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.company ? `Company: ${data.company}` : ''}

PROJECT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Type: ${data.serviceType}
Quantity: ${data.quantity} units
${data.deadline ? `Desired Deadline: ${new Date(data.deadline).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}` : ''}

Description:
${data.description}

${data.additionalNotes ? `Additional Notes:\n${data.additionalNotes}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This quote request was submitted from the Kan Printers website.
    `;

    // Web3Forms format - use 'access_key' for API calls
    // Note: Configure recipient emails in Web3Forms dashboard for this access key
    const web3formsData: any = {
      access_key: web3formsAccessKey,
      subject: `New Quote Request: ${data.serviceType} - ${data.name}`,
      from_name: data.name,
      email: data.email,
      // Set recipients (comma-separated)
      to: 'info@kanprinters.co.za,mario@kanprinters.co.za',
      message: messageContent,
      // Bot check (required by Web3Forms - must be false or checkbox)
      botcheck: false,
      // Additional custom fields
      service_type: data.serviceType,
      quantity: data.quantity,
      phone: data.phone,
      company: data.company || 'Not provided',
      deadline: data.deadline || 'Not specified',
    };

    try {
      console.log('Submitting quote request to Web3Forms...');
      console.log('Data being sent:', { ...web3formsData, apikey: '***hidden***' });
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(web3formsData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Web3Forms HTTP error:', response.status, errorText.substring(0, 200));
        throw new Error(`HTTP ${response.status}: ${errorText.substring(0, 100)}`);
      }

      const result = await response.json();
      console.log('Web3Forms response:', result);

      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        setIsError(true);
        setErrorMessage(result.message || 'Failed to submit quote request. Please try again or email us directly at kanprinters@mweb.co.za');
        console.error('Web3Forms returned error:', result);
      }
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(`Error: ${error.message}. Please email us directly at kanprinters@mweb.co.za with your quote details.`);
      console.error('Quote submission error:', error);
    }
  };

  const services = [
    "Design",
    "Screen Printing",
    "Pad Printing",
    "Digital Printing",
    "Laser Engraving",
    "Sublimation",
    "Heat Transfer",
    "UV DTF Printing",
    "Other",
  ];

  return (
    <Container>
      <div className="py-16 min-h-screen">
        {/* Success Message */}
        {isSuccess && (
          <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                  Quote Request Received!
                </h3>
                <p className="text-green-700 dark:text-green-300 mt-1">
                  Thank you for your request. We'll review your requirements and get back to you within 24 hours with a detailed quote.
                </p>
                {errorMessage && errorMessage.includes('email') && (
                  <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Note:</strong> {errorMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {isError && (
          <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <XCircleIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
                  Submission Failed
                </h3>
                <p className="text-red-700 dark:text-red-300 mt-1">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/Logo/Resize the Kan Print.png"
              alt="Kan Printers & Signs Logo"
              width={320}
              height={115}
              className="h-24 md:h-32 w-auto object-contain"
              quality={100}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Request a Free Quote
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fill out the form below with your printing requirements, and we'll provide you with a detailed quote within 24 hours.
          </p>
        </div>

        {/* Quote Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-trueGray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-trueGray-700">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              {/* Contact Information Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-trueGray-700">
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[\d\s\-\+\(\)]+$/,
                          message: "Invalid phone number",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      placeholder="021 691 0170"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-trueGray-700">
                  Project Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceType"
                      {...register("serviceType", {
                        required: "Please select a service type",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.serviceType.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      {...register("description", {
                        required: "Please describe your project",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters",
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      placeholder="Please describe what you need printed, including details about materials, colors, sizes, and any specific requirements..."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        {...register("quantity", {
                          required: "Quantity is required",
                          pattern: {
                            value: /^\d+$/,
                            message: "Please enter a valid number",
                          },
                        })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                        placeholder="e.g., 100, 500, 1000"
                      />
                      {errors.quantity && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.quantity.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Desired Completion Date (Optional)
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        {...register("deadline")}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={3}
                      {...register("additionalNotes")}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-trueGray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-trueGray-700 dark:text-white"
                      placeholder="Any additional information or special requirements..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                </button>
                <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                  By submitting this form, you agree to be contacted regarding your quote request.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">Need immediate assistance?</p>
            <p>
              Call us at{" "}
              <a href="tel:+27216910170" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                021 691 0170
              </a>{" "}
              or email{" "}
              <a href="mailto:kanprinters@mweb.co.za" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                kanprinters@mweb.co.za
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
