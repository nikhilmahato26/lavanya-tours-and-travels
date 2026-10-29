import { BUSINESS_CONFIG } from "../config/business";

export interface BookingEnquiryData {
  name: string;
  phone: string;
  email?: string;
  bookingType: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  passengers: string;
  vehicle?: string;
  acPreference?: string;
  requirements?: string;
}

export function buildVehicleBookingMessage(data: {
  name: string;
  phone: string;
  vehicle: string;
  passengers?: string;
  pickup?: string;
  destination?: string;
  travelDate?: string;
  returnDate?: string;
  acPreference?: string;
  requirements?: string;
}): string {
  return [
    `Hello Lavanya Tours & Travels,`,
    ``,
    `I would like to enquire about a vehicle booking.`,
    ``,
    `Name: ${data.name || 'Not specified'}`,
    `Phone: ${data.phone || 'Not specified'}`,
    `Preferred Vehicle: ${data.vehicle || 'Any Available Vehicle'}`,
    `Number of Passengers: ${data.passengers || 'Not specified'}`,
    `Pickup Location: ${data.pickup || 'Not specified'}`,
    `Destination: ${data.destination || 'Not specified'}`,
    `Travel Date: ${data.travelDate || 'Not specified'}`,
    `Return Date: ${data.returnDate || 'One way / Not specified'}`,
    `AC / Non-AC Preference: ${data.acPreference || 'Subject to availability'}`,
    data.requirements ? `Additional Requirements: ${data.requirements}` : '',
    ``,
    `Please share availability, pricing, and booking terms.`,
  ].filter(line => line !== null).join('\n');
}

export function buildTourEnquiryMessage(data: {
  destination: string;
  name?: string;
  phone?: string;
  travelDates?: string;
  passengers?: string;
  pickup?: string;
  vehicle?: string;
  requirements?: string;
}): string {
  return [
    `Hello Lavanya Tours & Travels,`,
    ``,
    `I would like to enquire about a tour.`,
    ``,
    `Destination: ${data.destination}`,
    data.name ? `Name: ${data.name}` : '',
    data.phone ? `Phone: ${data.phone}` : '',
    `Travel Dates: ${data.travelDates || 'Flexible / To be confirmed'}`,
    `Number of Passengers: ${data.passengers || 'To be confirmed'}`,
    `Pickup Location: ${data.pickup || 'Mysore / To be confirmed'}`,
    `Preferred Vehicle: ${data.vehicle || 'Any recommended vehicle'}`,
    data.requirements ? `Additional Requirements: ${data.requirements}` : '',
    ``,
    `Please share the available options and package details.`,
  ].filter(Boolean).join('\n');
}

export function buildBusRentalMessage(data: {
  organizerName: string;
  phone: string;
  busType: string;
  passengers: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  acPreference?: string;
  requirements?: string;
}): string {
  return [
    `Hello Lavanya Tours & Travels,`,
    ``,
    `I would like to request a Bus Rental quote.`,
    ``,
    `Group Organizer Name: ${data.organizerName || 'Not specified'}`,
    `Contact Number: ${data.phone || 'Not specified'}`,
    `Preferred Bus Type: ${data.busType || 'Bus Option'}`,
    `Number of Passengers: ${data.passengers || 'Not specified'}`,
    `Pickup Location: ${data.pickup || 'Not specified'}`,
    `Destination: ${data.destination || 'Not specified'}`,
    `Travel Date: ${data.travelDate || 'Not specified'}`,
    `Return Date: ${data.returnDate || 'Same day / Not specified'}`,
    `AC / Non-AC Preference: ${data.acPreference || 'Subject to availability'}`,
    data.requirements ? `Additional Requirements: ${data.requirements}` : '',
    ``,
    `Please share availability, pricing, and booking terms.`,
  ].filter(Boolean).join('\n');
}

export function buildGeneralEnquiryMessage(): string {
  return `Hello Lavanya Tours & Travels, I would like to enquire about your travel and vehicle rental services. Please share availability and booking details.`;
}

export function buildCompleteBookingMessage(data: BookingEnquiryData): string {
  return [
    `Hello Lavanya Tours & Travels,`,
    ``,
    `I would like to send a booking enquiry.`,
    ``,
    `Booking Type: ${data.bookingType}`,
    `Full Name: ${data.name}`,
    `Phone Number: ${data.phone}`,
    data.email ? `Email: ${data.email}` : '',
    `Pickup Location: ${data.pickup}`,
    `Destination: ${data.destination}`,
    `Travel Date: ${data.travelDate}`,
    data.returnDate ? `Return Date: ${data.returnDate}` : '',
    `Number of Passengers: ${data.passengers}`,
    data.vehicle ? `Preferred Vehicle: ${data.vehicle}` : '',
    data.acPreference ? `AC / Non-AC Preference: ${data.acPreference}` : '',
    data.requirements ? `Additional Requirements: ${data.requirements}` : '',
    ``,
    `Please share availability, pricing, and booking terms.`,
  ].filter(Boolean).join('\n');
}

export function openWhatsApp(message: string): void {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${BUSINESS_CONFIG.phones.primaryRaw}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
