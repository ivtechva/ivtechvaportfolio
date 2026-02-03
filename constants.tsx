
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
// Updated paths to match specific files provided.
// ==================================================================================

const BASE_URL = 'https://raw.githubusercontent.com/ivtechva/ivtechvaportfolio/main/images';

// Helper to handle nested paths and encode segments correctly
const getImg = (path: string) => {
  // Split by / to encode segments individually (preserves directory structure)
  const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/');
  return `${BASE_URL}/${encodedPath}`;
};

// GHL Images
export const imgBarber1 = getImg('ghl/Barbershop CRM Booking System/Barbershop CRM Booking System 1.png');
export const imgBarber2 = getImg('ghl/Barbershop CRM Booking System/Barbershop CRM Booking System 2.png');
export const imgBarber3 = getImg('ghl/Barbershop CRM Booking System/Barbershop CRM Booking System.png');

export const imgHVAC1 = getImg('ghl/HVAC/HVAC 1.png');
export const imgHVAC2 = getImg('ghl/HVAC/HVAC 2.png');
export const imgHVAC3 = getImg('ghl/HVAC/HVAC 3.png');

export const imgLandscaping1 = getImg('ghl/Landscaping/Landscaping 1.png');
export const imgLandscaping2 = getImg('ghl/Landscaping/Landscaping 2.png');
export const imgLandscaping3 = getImg('ghl/Landscaping/Landscaping 3.png');

export const imgMedical1 = getImg('ghl/Medical Clinic/Medical Clinic 1.png');
export const imgMedical2 = getImg('ghl/Medical Clinic/Medical Clinic 2.png');
export const imgMedical3 = getImg('ghl/Medical Clinic/Medical Clinic 3.png');

// Make.com Images
export const imgMake1 = getImg('make.com/Male Project 1.jpg'); // Note: 'Male' typo in filename matches repo
export const imgMake2 = getImg('make.com/Make Project 2.jpg'); 

// n8n Images
export const imgN8N1 = getImg('n8n/N8N Project 1.jpg');
export const imgN8N2 = getImg('n8n/N8N Project 2.jpg');

// Zapier Images
export const imgZapier1 = getImg('zapier/Zapier Project 1.jpg'); 
export const imgZapier2 = getImg('zapier/Zapier Project 2.jpg');
export const imgZapier3 = getImg('zapier/Zapier Project 3.jpg');

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#featured-projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
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
  // GHL Projects
  {
    id: 'p1',
    title: 'Psych Therapy Intake & CRM',
    category: 'GHL',
    description: 'Medical clinic intake form with automated workflows',
    overview: 'This integrated CRM automation streamlines the entire mental health patient journey—from initial intake to follow-ups and ongoing engagement.',
    problem: 'Manual intake processing, delayed follow-ups, and inconsistent appointment coordination created administrative bottlenecks.',
    solution: 'The automation centralizes patient intake and communication inside a single CRM. New intake submissions automatically trigger lead tagging and alerts.',
    result: 'Reduced no-shows by 40% and saved 20–35 hours per month in administrative work.',
    tags: ['GHL', 'Healthcare', 'Automation'],
    images: [imgMedical1, imgMedical2, imgMedical3],
    logo: ''
  },
  {
    id: 'p2',
    title: 'Landscaping CRM System',
    category: 'GHL',
    description: 'New inquiry workflow with opportunity management',
    overview: 'A comprehensive lead management system for landscaping businesses that captures inquiries, automates quotes, and manages service scheduling.',
    problem: 'During high season, the business was losing 30% of leads due to slow response times.',
    solution: 'Implemented a GHL snapshot with instant SMS acknowledgement and automated quote follow-ups.',
    result: 'Doubled lead conversion rate within 30 days and reduced administrative scheduling time.',
    tags: ['GHL', 'Service', 'Booking'],
    images: [imgLandscaping1, imgLandscaping2, imgLandscaping3], 
    logo: ''
  },
  {
    id: 'p3',
    title: 'HVAC Dispatch Automation',
    category: 'GHL',
    description: 'Service request form with automated dispatching',
    overview: 'An end-to-end service dispatch system for HVAC companies handling emergency calls and routine maintenance requests.',
    problem: 'Dispatchers were overwhelmed with calls, leading to double-bookings.',
    solution: 'Created a smart form that categorizes urgency. High-priority requests trigger instant SMS alerts to technicians.',
    result: 'Response time for emergency calls dropped from 2 hours to 5 minutes.',
    tags: ['GHL', 'Field Service', 'Dispatch'],
    images: [imgHVAC1, imgHVAC2, imgHVAC3],
    logo: ''
  },
  {
    id: 'p4',
    title: 'Barbershop Booking System',
    category: 'GHL',
    description: 'Appointment confirmation and barber assignment workflow',
    overview: 'A stylish, easy-to-use booking system for a modern barbershop that handles appointments and reminders.',
    problem: 'High no-show rate and constant phone interruptions during cuts.',
    solution: 'Automated SMS reminders 24h and 1h before appointments. Integrated a review request workflow.',
    result: 'No-shows reduced by 60%. Generated 50+ 5-star reviews.',
    tags: ['GHL', 'Booking', 'Retail'],
    images: [imgBarber1, imgBarber2, imgBarber3],
    logo: ''
  },

  // Make Projects
  {
    id: 'make1',
    title: 'Financial Reconciliation',
    category: 'Make',
    description: 'Automated financial report generation from raw data.',
    overview: 'A Make.com scenario that aggregates transaction data from Stripe and PayPal into a unified Google Sheets dashboard.',
    problem: 'Manual data entry for end-of-month reporting was taking 10+ hours and prone to human error.',
    solution: 'Built a scenario to watch for new transactions, format the data, and append it to a financial master sheet.',
    result: 'Reduced reporting time to 0 hours (fully automated) with 100% accuracy.',
    tags: ['Make', 'Finance', 'Data'],
    images: [imgMake1],
    logo: ''
  },
  {
    id: 'make2',
    title: 'Enterprise CRM Sync',
    category: 'Make',
    description: 'Bidirectional sync between Marketing and Sales platforms.',
    overview: 'Complex data orchestration ensuring that leads generated in Facebook Ads are instantly reflected in Salesforce and the email marketing tool.',
    problem: 'Leads were sitting in CSV files for days before being contacted.',
    solution: 'Real-time webhook listeners trigger a Make scenario that enriches lead data and pushes it to all necessary platforms instantly.',
    result: 'Lead response time decreased from 48 hours to under 5 minutes.',
    tags: ['Make', 'CRM', 'Sync'],
    images: [imgMake2],
    logo: ''
  },

  // n8n Projects
  {
    id: 'n8n1',
    title: 'AI Email Triage Agent',
    category: 'n8n',
    description: 'Self-hosted AI agent for support ticket routing.',
    overview: 'An n8n workflow leveraging OpenAI/Gemini to analyze incoming support emails, categorize them by sentiment and urgency, and draft responses.',
    problem: 'Support team was drowning in Tier 1 tickets.',
    solution: 'Deployed an n8n webhook to intercept emails, classify them using an LLM, and auto-reply to common queries.',
    result: 'Automated 40% of incoming tickets and reduced response time by 90%.',
    tags: ['n8n', 'AI', 'Support'],
    images: [imgN8N1],
    logo: ''
  },
  {
    id: 'n8n2',
    title: 'Social Content Engine',
    category: 'n8n',
    description: 'Automated content generation from trending news.',
    overview: 'A workflow that scrapes industry news, summarizes it using AI, and generates draft LinkedIn posts for review.',
    problem: 'Inconsistent social media presence due to lack of time for content creation.',
    solution: 'n8n workflow runs daily, finding top articles and creating engaging summaries formatted for social media.',
    result: 'Maintained daily posting schedule with only 5 minutes of review time required per day.',
    tags: ['n8n', 'Content', 'Automation'],
    images: [imgN8N2],
    logo: ''
  },

  // Zapier Projects
  {
    id: 'zap1',
    title: 'AI-Powered Content Repurposing',
    category: 'Zapier',
    description: 'Automates long-form content transformation into platform-ready assets using AI.',
    overview: 'This AI-powered content repurposing workflow automatically transforms long-form content into multiple platform-ready assets. It ingests raw content, uses AI to generate transcripts and post variations, and publishes optimized content across channels like Facebook Pages, LinkedIn, and Instagram—ensuring consistent brand presence with minimal manual effort.',
    problem: 'Manually repurposing content for different platforms was time-consuming and inefficient. Creating captions, adapting formats, and posting across multiple channels required repetitive work, slowed down content distribution, and limited consistency in publishing.',
    solution: 'The automation uses AI to analyze source content, generate transcripts and platform-specific posts, split content into multiple publishing paths, and automatically create and publish posts across social platforms. This ensures each channel receives tailored content without manual rewriting or scheduling.',
    result: 'The workflow significantly reduced content creation and publishing time, increased posting consistency across platforms, and enabled faster content distribution at scale—allowing creators and teams to maintain an active social presence with minimal ongoing effort.',
    tags: ['Zapier', 'AI', 'Content Marketing'],
    images: [imgZapier1],
    logo: ''
  },
  {
    id: 'zap2',
    title: 'Client Follow-Up & Onboarding',
    category: 'Zapier',
    description: 'Automates client communications and asset organization based on CRM status.',
    overview: 'Automates client follow-ups and onboarding by monitoring client status updates in Asana and triggering the appropriate actions automatically. The system sends targeted emails (welcome, follow-ups, quote reminders, and service recommendations) while organizing client assets by creating folders in Google Drive and project subtasks in Asana—ensuring every client receives timely communication and a structured onboarding experience without manual effort.',
    problem: 'Manual client follow-ups and onboarding tasks were inconsistent and time-consuming, leading to delayed responses, missed follow-ups, and fragmented client organization. As client volume increased, maintaining consistent communication and structured project setup became difficult, impacting both efficiency and client experience.',
    solution: 'Asana status triggers specific email sequences and administrative tasks. The system sends welcome emails, reminders, and creates necessary Google Drive folders and Asana subtasks automatically, ensuring a standardized process for every client.',
    result: 'Reduced manual follow-up and onboarding work significantly. Improved response rates through timely, stage-based email communication. Faster and more consistent client onboarding with better organization of client files and project tasks.',
    tags: ['Zapier', 'Onboarding', 'CRM'],
    images: [imgZapier2],
    logo: ''
  },
  {
    id: 'zap3',
    title: 'Lead Enrichment Automation',
    category: 'Zapier',
    description: 'Real-time lead capture, data enrichment, and priority-based routing.',
    overview: 'This automation captures incoming leads in real time, enriches them with company and contact data, and intelligently routes each lead into High Priority or Low Priority paths. By automatically saving enriched data and triggering the appropriate notifications and follow-ups, the system ensures sales teams focus their effort on the most valuable opportunities first.',
    problem: 'Manual lead qualification and enrichment slowed down follow-ups, created inconsistent prioritization, and caused high-value leads to be overlooked. Sales teams spent time researching leads instead of engaging prospects, reducing response speed and conversion potential.',
    solution: 'The workflow automatically enriches lead data, evaluates lead priority, and routes each lead through the correct follow-up path. High-priority leads are logged, alerted, and prepared for immediate outreach, while lower-priority leads are handled with lighter-touch communication—ensuring efficient and consistent lead management without manual review.',
    result: 'The automation reduced lead processing time, improved response speed for high-priority leads, increased sales focus on qualified opportunities, and created a more scalable and reliable lead management process as inbound volume grows.',
    tags: ['Zapier', 'Sales', 'Enrichment'],
    images: [imgZapier3],
    logo: ''
  }
];
