import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SPAM_PATTERNS = [
  /https?:\/\//i,
  /www\./i,
  /seo/i,
  /backlinks?/i,
  /crypto/i,
  /casino/i,
  /telegram/i,
  /whatsapp/i,
];

const Contact = () => {
  const form = useRef();
  const renderTime = useRef(Date.now());
  const firstInteractionTime = useRef(null);

  const markInteraction = () => {
    if (!firstInteractionTime.current) {
      firstInteractionTime.current = Date.now();
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const { name, email, project, trk, website } = e.target.elements;
    const message = project.value.trim();
    const senderName = name.value.trim();
    const senderEmail = email.value.trim();
    const secondsSinceRender = (Date.now() - renderTime.current) / 1000;
    const secondsSinceInteraction = firstInteractionTime.current
      ? (Date.now() - firstInteractionTime.current) / 1000
      : 0;
    const lastSubmittedAt = Number(
      localStorage.getItem("contact-last-submit") || 0
    );
    const repeatedTooSoon = lastSubmittedAt && Date.now() - lastSubmittedAt < 60000;
    const looksSpammy = SPAM_PATTERNS.some((pattern) => pattern.test(message));

    if (!senderName || !senderEmail || !message) {
      alert("Please fill out all info");
      return;
    }

    if (trk.value || website.value) {
      return;
    }

    if (
      secondsSinceRender < 8 ||
      !firstInteractionTime.current ||
      secondsSinceInteraction < 2 ||
      repeatedTooSoon ||
      message.length < 20 ||
      looksSpammy
    ) {
      alert("Please revise your message and try again.");
      return;
    }

    await emailjs.sendForm(
      "service_sqrqiwq",
      "template_uc60i8n",
      form.current,
      "uIXRdmH3kUyJh3oXm"
    );
    localStorage.setItem("contact-last-submit", String(Date.now()));
    e.target.reset();
    firstInteractionTime.current = null;
    alert("I will get back to you soon!");
  };

  const panelClass =
    "grid content-start rounded-[1.5rem] border border-border bg-white/90 p-4 shadow-sm xs:p-6";
  const inputClass =
    "min-h-[3.35rem] w-full rounded-2xl border border-border bg-white/80 px-4 py-[0.95rem] text-text transition duration-200 placeholder:text-textLight focus:border-[rgba(15,23,42,0.2)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(15,23,42,0.05)]";

  return (
    <section className="app-section" id="contact">
      <h2 className="app-section-title">Get in touch</h2>
      <span className="app-section-subtitle">Contact Me</span>

      <div className="app-container grid items-stretch gap-4 pb-12 md:grid-cols-[minmax(290px,340px)_minmax(0,1fr)] md:gap-6">
        <div className={`${panelClass} gap-5`}>
          <div className="grid gap-2 text-center md:text-left">
            <h3 className="text-[1.1rem] font-semibold text-title md:text-[1.2rem]">
              Let&apos;s talk
            </h3>
            <p className="text-text">
              Reach out for software engineering, research, or collaboration.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-surface p-4 text-left">
              <i className="bx bx-mail-send mb-2 text-[2rem] text-title"></i>
              <h3 className="mb-1.5 text-[0.86rem] font-medium text-title md:text-[0.92rem]">
                Email
              </h3>
              <span className="mb-3 block text-[0.86rem] text-text md:text-[0.92rem]">
                yunxuant@umich.edu
              </span>

              <a
                href="mailto:yunxuant@umich.edu"
                className="inline-flex items-center gap-1 text-[0.86rem] font-medium text-title md:text-[0.92rem]"
              >
                Email me
                <i className="bx bx bx-right-arrow-alt text-base transition duration-300 hover:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={`${panelClass} gap-4`}>
          <h3 className="text-[1.1rem] font-semibold text-title md:text-[1.2rem]">
            Start a conversation
          </h3>

          <form ref={form} onSubmit={sendEmail} className="grid gap-[1.1rem]">
            <div className="grid gap-4 xs:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="contact-name" className="text-[0.86rem] font-medium text-title md:text-[0.92rem]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className={inputClass}
                  placeholder="Your name"
                  onFocus={markInteraction}
                  onChange={markInteraction}
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="contact-email" className="text-[0.86rem] font-medium text-title md:text-[0.92rem]">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  onFocus={markInteraction}
                  onChange={markInteraction}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="contact-message" className="text-[0.86rem] font-medium text-title md:text-[0.92rem]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="project"
                cols="30"
                rows="10"
                className={`${inputClass} min-h-[11rem] resize-y`}
                placeholder="Tell me what you&apos;re working on"
                onFocus={markInteraction}
                onChange={markInteraction}
              ></textarea>
            </div>

            <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
              <input name="trk" tabIndex="-1" autoComplete="off" />
              <input name="website" tabIndex="-1" autoComplete="url" />
            </div>

            <button className="button mt-1 w-full justify-center xs:w-auto" type="submit">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
