"use client";

import { Dictionary } from "@/dictionaries";
import { FC, FormEvent } from "react";

interface Props {
  dict: Dictionary;
}

export const ContactForm: FC<Props> = ({ dict }) => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("your-subject", "Contact");
    formData.append("_wpcf7_unit_tag", "15");

    try {
      const response = await fetch(
        "https://monasaad.com/wp-json/contact-form-7/v1/contact-forms/15/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Response data:", data);

      // Reset the form fields
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h3 className="text-primary font-extrabold text-3xl sm:text-4xl lg:text-5xl">
        {dict.contact_us.contact_us}
      </h3>
      <p className="text-primary text-base lg:text-xl pt-1 sm:pt-2 lg:pt-4">
        {dict.contact_us.form_title}
      </p>
      <div className="relative">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 mt-4 sm:mt-6 lg:mt-8 items-center"
        >
          <input
            type="text"
            name="your-name"
            placeholder={dict.contact_us.your_name}
            className="input"
            minLength={3}
            required
          />
          <input
            type="email"
            name="your-email"
            placeholder={dict.contact_us.enter_your_email}
            className="input"
            required
          />
          <textarea
            name="your-message"
            placeholder={dict.contact_us.enter_your_message}
            rows={8}
            className="input"
            minLength={8}
            required
          />
          <button className="rounded-full bg-[#961F5F] text-white p-3 lg:p-4 w-full text-center">
            {dict.contact_us.send}
          </button>
        </form>
      </div>
    </>
  );
};
