"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const contactInfo = {
    email: "yosseffehab@gmail.com",
    phone: "+20 101 394 7277",
    linkedin: "https://www.linkedin.com/in/yossef-ehab-mohamed-b419bb397/",
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 md:p-6 max-h-[90vh] overflow-y-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl border border-wine/30 bg-slategray/95 backdrop-blur-xl shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full p-2 text-silver transition-colors hover:bg-wine/20 hover:text-wine active:bg-wine/20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Header */}
              <div className="border-b border-wine/20 px-4 pb-4 pt-4 sm:px-6 sm:pb-6 sm:pt-6">
                <h2 className="text-xl sm:text-2xl font-bold text-wine">
                  Get In Touch
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-silver/80">
                  Let&apos;s connect and build something amazing together!
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between gap-2 sm:gap-3 rounded-xl border border-wine/20 bg-charcoal/50 p-3 sm:p-4 transition-colors hover:border-wine/40 hover:bg-charcoal/70 active:bg-charcoal/70"
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    <div className="rounded-full bg-wine/20 p-2 sm:p-3 shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-wine" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-silver/60">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-silver hover:text-forestgreen break-words break-all"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, "email")}
                    className="rounded-lg p-2 text-silver transition-colors hover:bg-wine/20 hover:text-forestgreen active:bg-wine/20 shrink-0"
                    aria-label="Copy email"
                  >
                    {copied === "email" ? (
                      <Check className="h-4 w-4 text-forestgreen" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between gap-2 sm:gap-3 rounded-xl border border-wine/20 bg-charcoal/50 p-3 sm:p-4 transition-colors hover:border-wine/40 hover:bg-charcoal/70 active:bg-charcoal/70"
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    <div className="rounded-full bg-wine/20 p-2 sm:p-3 shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-wine" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-silver/60">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-xs sm:text-sm font-medium text-silver hover:text-forestgreen break-words"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                    className="rounded-lg p-2 text-silver transition-colors hover:bg-wine/20 hover:text-forestgreen active:bg-wine/20 shrink-0"
                    aria-label="Copy phone"
                  >
                    {copied === "phone" ? (
                      <Check className="h-4 w-4 text-forestgreen" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between gap-2 sm:gap-3 rounded-xl border border-wine/20 bg-charcoal/50 p-3 sm:p-4 transition-colors hover:border-wine/40 hover:bg-charcoal/70 active:bg-charcoal/70"
                >
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    <div className="rounded-full bg-wine/20 p-2 sm:p-3 shrink-0">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-wine" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-silver/60">LinkedIn</p>
                      <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-silver hover:text-forestgreen break-words"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-silver transition-colors hover:bg-wine/20 hover:text-forestgreen active:bg-wine/20 shrink-0"
                    aria-label="Open LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="border-t border-wine/20 px-4 sm:px-6 py-3 sm:py-4">
                <Button
                  onClick={onClose}
                  className="w-full bg-wine text-white hover:bg-forestgreen active:bg-forestgreen text-sm sm:text-base py-2 sm:py-2.5"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
