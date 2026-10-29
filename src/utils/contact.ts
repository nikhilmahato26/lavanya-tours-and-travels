import { BUSINESS_CONFIG } from "../config/business";

export function callPrimaryPhone(): void {
  window.location.href = `tel:${BUSINESS_CONFIG.phones.primary.replace(/\s+/g, '')}`;
}

export function callSecondaryPhone(): void {
  window.location.href = `tel:${BUSINESS_CONFIG.phones.secondary.replace(/\s+/g, '')}`;
}

export function emailPrimary(): void {
  window.location.href = `mailto:${BUSINESS_CONFIG.emails.primary}`;
}

export function emailSecondary(): void {
  window.location.href = `mailto:${BUSINESS_CONFIG.emails.secondary}`;
}

export function scrollToSection(sectionId: string, prefill?: {
  vehicle?: string;
  destination?: string;
  bookingType?: string;
}): void {
  if (prefill) {
    window.dispatchEvent(new CustomEvent('prefill-booking', { detail: prefill }));
  }
  const element = document.getElementById(sectionId);
  if (element) {
    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
