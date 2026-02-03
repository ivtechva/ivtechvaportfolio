
import React from 'react';
import { 
  Workflow, 
  Database, 
  UserPlus, 
  Layout, 
  Bot 
} from 'lucide-react';
import { Service, Project, NavItem, Experience } from './types';

// ==================================================================================
// IMAGE CONFIGURATION
// ==================================================================================
// Using raw.githubusercontent.com for direct file access.
// Updated paths to match likely file structure inside folders.
// ==================================================================================

const BASE_URL = 'https://raw.githubusercontent.com/ivtechva/ivtechvaportfolio/main/images';

// Helper to handle nested paths and encode segments correctly
const getImg = (path: string) => {
  const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/');
  return `${BASE_URL}/${encodedPath}`;
};

// GHL Images - Barbershop
export const imgBarber1 = getImg('ghl/Barbershop CRM Booking System/Barbershop CRM Booking System 1.png');
export const imgBarber2 = getImg('ghl/Barbershop CRM Booking System/Barbershop CRM Booking System 2.png');
export const imgBarber3 = getImg('ghl/Barbershop CRM Booking System/Barbershop CRM Booking System 3.png');

// GHL Images - HVAC
export const imgHVAC1 = getImg('ghl/HVAC/HVAC 1.png');
export const imgHVAC2 = getImg('ghl/HVAC/HVAC 2.png');
export const imgHVAC3 = getImg('ghl/HVAC/HVAC 3.png');

// GHL Images - Landscaping
export const imgLandscaping1 = getImg('ghl/Landscaping/Landscaping 1.png');
export const imgLandscaping2 = getImg('ghl/Landscaping/Landscaping 2.png');
export const imgLandscaping3 = getImg('ghl/Landscaping/Landscaping 3.png');

// GHL Images - Medical
export const imgMedical1 = getImg('ghl/Medical Clinic/Medical Clinic 1.png');
export const imgMedical2 = getImg('ghl/Medical Clinic/Medical Clinic 2.png');
export const imgMedical3 = getImg('ghl/Medical Clinic/Medical Clinic 3.png');

// Other Images
export const imgMake = getImg('Make Project 2.jpg'); 
export const imgN8N1 = getImg('N8N Project 1.png');
export const imgN8N2 = getImg('N8N Project 2.png');

// Zapier Images - Temporarily Removed
// export const imgZapier1 = getImg('Zapier Project 2.jpg'); 
// export const imgZapier2 = getImg('Zapier Project 2.jpg');
// export const imgZapier3 = getImg('Zapier Project 3.jpg');

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#featured-projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const GALLERY_IMAGES = [
  // GHL Systems
  { src: imgBarber1, title: 'Barbershop CRM Booking System', platform: 'GHL', ref: 'GHL-SYS-01' },
  { src: imgHVAC1, title: 'HVAC Service Request Pipeline', platform: 'GHL', ref: 'GHL-SYS-02' },
  { src: imgLandscaping1, title: 'Landscaping Inquiry System', platform: 'GHL', ref: 'GHL-SYS-03' },
  { src: imgMedical1, title: 'Medical Clinic Intake Flow', platform: 'GHL', ref: 'GHL-SYS-04' },
  
  // Make.com Systems
  { src: imgMake, title: 'Automated Financial Sync', platform: 'Make', ref: 'MKE-SYS-01' },
  { src: imgMake, title: 'Xero to Asana Financial Sync', platform: 'Make', ref: 'MKE-SYS-02' },
  
  // n8n AI Systems
  { src: imgN8N1, title: 'AI Webhook Response Agent', platform: 'n8n', ref: 'N8N-SYS-01' },
  { src: imgN8N2, title: 'Weather-Triggered Social AI', platform: 'n8n', ref: 'N8N-SYS-02' },
  
  // Zapier Systems - Removed due to missing images
];

export const TOOLS = [
  { name: 'GoHighLevel', logo: 'https://www.vectorlogo.zone/logos/gohighlevel/gohighlevel-icon.svg', category: 'CRM' },
  { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF6600', category: 'Automation' },
  { name: 'Make.com', logo: 'https://cdn.simpleicons.org/make/6D28D9', category: 'Automation' },
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/FF6C37', category: 'Automation' },
  { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/4285F4', category: 'AI' },
  { name: 'ChatGPT', logo: 'https://cdn.simpleicons.org/openai/412991', category: 'AI' }
];

export const SERVICES: Service[] = [
  {
    id: 'ghl',
    title: 'GHL Automation',
    description: 'Custom snapshots, nurture sequences, and logic-heavy workflows for maximum conversion.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: 'ai-workflows',
    title: 'AI Native Systems',
    description: 'Deploying Gemini and GPT-powered agents to handle triage, content, and data processing.',
    icon: <Bot className="w-6 h-6" />,
  },
  {
    id: 'process-ops',
    title: 'Operations Scaling',
    description: 'Turning manual chaos into documented, automated systems using Make, Zapier, and n8n.',
    icon: <Workflow className="w-6 h-6" />,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: 'Technical Virtual Assistant & Automation Specialist',
    company: 'Freelance Specialist',
    period: '2022 - Present',
    results: [
      'Engineered 100+ production workflows for agencies and clinics.',
      'Reduced admin overhead by 80% for medical intake systems.',
      'Automated social distribution for high-traffic content creators.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Psych Therapy Intake & CRM Automation',
    category: 'GHL',
    description: 'Medical clinic intake form with automated workflows',
    overview: 'This integrated CRM automation streamlines the entire mental health patient journey—from initial intake to follow-ups and ongoing engagement. It captures patient intake forms, creates opportunities, triggers internal alerts, sends confirmations, and logs data securely—allowing therapy practices to manage patients efficiently while staying focused on care delivery.',
    problem: 'Manual intake processing, delayed follow-ups, and inconsistent appointment coordination created administrative bottlenecks. Missed calls and slow response times increased no-shows, reduced patient engagement, and pulled therapists away from direct patient care.',
    solution: 'The automation centralizes patient intake and communication inside a single CRM. New intake submissions automatically trigger lead tagging, opportunity creation, internal notifications for timely outreach, secure data logging, and confirmation emails—ensuring every patient is acknowledged and followed up without manual effort.',
    result: 'The system reduced no-shows by 40%, saved 20–35 hours per month in administrative work, improved patient engagement through faster response times, and increased practice revenue by approximately $2,000–$8,000 per month by optimizing intake and follow-up processes.',
    tags: ['GHL', 'Healthcare', 'Automation'],
    images: [imgMedical1, imgMedical2, imgMedical3],
    logo: ''
  },
  {
    id: 'p2',
    title: 'Landscaping Service CRM & Automation',
    category: 'GHL',
    description: 'New inquiry workflow with opportunity management',
    overview: 'A comprehensive lead management system for landscaping businesses that captures inquiries, automates quotes, and manages service scheduling. The system ensures no lead is left behind during peak seasons.',
    problem: 'During high season, the business was losing 30% of leads due to slow response times and disorganized paper-based scheduling.',
    solution: 'Implemented a GHL snapshot with instant SMS acknowledgement, automated quote follow-ups, and a drag-and-drop dispatch pipeline.',
    result: 'Doubled lead conversion rate within 30 days and reduced administrative scheduling time by 15 hours per week.',
    tags: ['GHL', 'Service', 'Booking'],
    images: [imgLandscaping1, imgLandscaping2, imgLandscaping3], 
    logo: ''
  },
  {
    id: 'p3',
    title: 'HVAC Workflow CRM Automation',
    category: 'GHL',
    description: 'Service request form with automated dispatching',
    overview: 'An end-to-end service dispatch system for HVAC companies handling emergency calls and routine maintenance requests.',
    problem: 'Dispatchers were overwhelmed with calls, leading to double-bookings and missed emergency service requests.',
    solution: 'Created a smart form that categorizes urgency. High-priority requests trigger instant SMS alerts to technicians, while routine requests enter a nurturing sequence.',
    result: 'Response time for emergency calls dropped from 2 hours to 5 minutes. Technician utilization efficiency increased by 25%.',
    tags: ['GHL', 'Field Service', 'Dispatch'],
    images: [imgHVAC1, imgHVAC2, imgHVAC3],
    logo: ''
  },
  {
    id: 'p4',
    title: 'Barbershop Booking & CRM System',
    category: 'GHL',
    description: 'Appointment confirmation and barber assignment workflow',
    overview: 'A stylish, easy-to-use booking system for a modern barbershop that handles appointments, reminders, and customer retention campaigns.',
    problem: 'High no-show rate and constant phone interruptions during cuts.',
    solution: 'Automated SMS reminders 24h and 1h before appointments. Integrated a review request workflow post-appointment to boost Google Maps ranking.',
    result: 'No-shows reduced by 60%. Generated 50+ 5-star reviews in the first two months.',
    tags: ['GHL', 'Booking', 'Retail'],
    images: [imgBarber1, imgBarber2, imgBarber3],
    logo: ''
  }
];
