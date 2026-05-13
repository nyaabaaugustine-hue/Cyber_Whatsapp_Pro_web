import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Will my WhatsApp account get banned?",
    answer:
      "Cyber WhatsApp Pro is designed to work within WhatsApp's normal usage patterns. As long as you use it responsibly — avoiding mass-spamming unknown numbers — the risk is minimal. We recommend messaging people who have opted in or already know you, and using the built-in delay settings to keep send rates natural.",
  },
  {
    question: "Does it work on Mac or Windows?",
    answer:
      "It works on any operating system that can run Google Chrome — Windows, macOS, and Linux are all fully supported. The extension runs inside Chrome, so the OS doesn't matter. Just install Chrome, load the extension, and you're ready.",
  },
  {
    question: "Do I need a WhatsApp Business account?",
    answer:
      "No. Cyber WhatsApp Pro works with both regular WhatsApp Web and WhatsApp Business Web. You just open web.whatsapp.com in Chrome with the extension active, and all features become available.",
  },
  {
    question: "What happens after I pay? How do I get the extension?",
    answer:
      "After a successful Paystack payment you'll receive a download link via WhatsApp or email within minutes. The link contains a ZIP file — follow the Installation Guide on this page to load it into Chrome. The whole process takes less than 2 minutes.",
  },
  {
    question: "How long is my licence valid?",
    answer:
      "Monthly plans are valid for 30 days from purchase. Yearly plans are valid for 12 months (365 days) and billed as a single payment of GHS 1,044. You'll receive a renewal reminder before your plan expires.",
  },
  {
    question: "Can I use it on more than one computer?",
    answer:
      "Each licence covers one Chrome profile. If you need to use it on a second machine, simply load the same extension files into Chrome on that machine while your licence is active — just ensure you're logged in to the same WhatsApp account.",
  },
  {
    question: "Does it support sending images and files?",
    answer:
      "Yes. You can send text messages, images, documents, and even voice notes through the bulk-send feature. Templates also support media attachments so every recipient gets a personalised, rich message.",
  },
  {
    question: "What if I need help after installing?",
    answer:
      "Our support team is available via WhatsApp (+233 54 198 8383) and email (cybertechgh@gmail.com). WhatsApp responses are typically instant during business hours. We also have a full video installation guide on this page.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Got Questions?
          </h2>
          <p className="text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-emerald-200 shadow-md shadow-emerald-50" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-600 text-sm mb-3">Still have a question?</p>
          <a
            href={`https://wa.me/233541988383?text=${encodeURIComponent("Hi! I have a question about Cyber WhatsApp Pro.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-200 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
