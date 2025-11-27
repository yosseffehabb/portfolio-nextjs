"use client";

import {
  ContactModalProvider,
  useContactModal,
} from "@/contexts/ContactModalContext";
import ContactModal from "./ContactModal";

function ContactModalContent() {
  const { isOpen, closeModal } = useContactModal();
  return <ContactModal isOpen={isOpen} onClose={closeModal} />;
}

export function ContactModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModalContent />
    </ContactModalProvider>
  );
}
