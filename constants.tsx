import React from 'react';
import { 
  Workflow, 
  Database, 
  UserPlus, 
  Layout, 
  Bot 
} from 'lucide-react';
import { Service, Experience, Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const TOOLS = [
  { 
    name: 'Zapier', 
    logo: 'https://cdn.simpleicons.org/zapier/FF6600', 
    category: 'Automation' 
  },
  { 
    name: 'Make.com', 
    logo: 'https://cdn.simpleicons.org/make/6D28D9', 
    category: 'Automation' 
  },
  { 
    name: 'n8n', 
    logo: 'https://cdn.simpleicons.org/n8n/FF6C37', 
    category: 'Automation' 
  },
  { 
    name: 'GoHighLevel', 
    logo: 'https://www.vectorlogo.zone/logos/gohighlevel/gohighlevel-icon.svg', 
    category: 'CRM' 
  },
  { 
    name: 'Gemini', 
    logo: 'https://cdn.simpleicons.org/googlegemini/4285F4', 
    category: 'AI' 
  },
  { 
    name: 'Canva', 
    logo: 'https://cdn.simpleicons.org/canva/00C4CC', 
    category: 'Design' 
  },
  { 
    name: 'ChatGPT', 
    logo: 'https://cdn.simpleicons.org/openai/412991', 
    category: 'AI' 
  },
  { 
    name: 'Claude', 
    logo: 'https://cdn.simpleicons.org/anthropic/D97757', 
    category: 'AI' 
  }
];

export const SERVICES: Service[] = [
  {
    id: 'ghl',
    title: 'GoHighLevel Setup & Automation',
    description: 'Full GHL implementation from custom sub-accounts to multi-stage nurture sequences.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: 'ai-workflow',
    title: 'AI Workflow Automation',
    description: 'Connecting AI agents with your tech stack to handle customer queries and data processing.',
    icon: <Bot className="w-6 h-6" />,
  },
  {
    id: 'crm',
    title: 'CRM Management & Optimization',
    description: 'Cleaning data, setting up custom fields, and ensuring CRM health for maximum sales efficiency.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: 'lead-gen',
    title: 'Lead Capture & Follow-up',
    description: 'Building high-converting funnels and automated SMS/Email follow-up systems.',
    icon: <UserPlus className="w-6 h-6" />,
  },
  {
    id: 'process',
    title: 'Process Optimization',
    description: 'Documenting workflows and building SOPs to turn chaotic operations into scalable systems.',
    icon: <Workflow className="w-6 h-6" />,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Technical Virtual Assistant & Automation Specialist',
    company: 'Freelance / Self-Employed',
    period: '2022 - Present',
    results: [
      'Architected 50+ automation workflows using n8n, Zapier, and Make for agencies and small businesses.',
      'Implemented full GoHighLevel snapshots for 10+ clients, reducing lead response time by 80%.',
      'Developed custom AI agents for customer support and lead qualification using Gemini and ChatGPT APIs.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Enterprise IT Support Engineer',
    company: 'Confidential (Enterprise IT Sector)',
    period: '2019 - 2022',
    results: [
      'Managed complex IT infrastructure and service delivery for enterprise-level organizations.',
      'Optimized internal service level agreements (SLAs), improving resolution rates by 35%.',
      'Documented and standardized standard operating procedures (SOPs) for technical troubleshooting.'
    ]
  }
];

export const PROJECTS: Project[] = [
  // --- HIGH LEVEL ---
  {
    id: 'ghl-appointment',
    title: '#1 Project #2 Appointment Confirmed',
    category: 'HIGH LEVEL',
    description: 'Multi-staff barbershop booking flow with automated confirmations and no-show tracking.',
    overview: '🔍 Advanced GHL workflow that triggers on pipeline stage changes to manage confirmed and unconfirmed appointments.',
    problem: '⚠️ Managing multiple barbers calendars manually was leading to double bookings and missed appointments.',
    solution: '🤖 Automated branches for specific barbers (Adam, Jake, Jin) with custom confirmation emails and calendar notes.',
    result: '📊 100% reduction in double bookings and standardized confirmation delivery across the team.',
    tags: ['GHL', 'Booking', 'Multi-Path'],
    images: ['https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'ghl-hvac',
    title: '#2 Project 1 HVAC Service Request',
    category: 'HIGH LEVEL',
    description: 'Complete lead-to-service automation for field service businesses.',
    overview: '🔍 A full-cycle HVAC automation managing service requests from form submission to dispatcher assignment.',
    problem: '⚠️ Lead response time for urgent HVAC repairs was too slow, leading to lost business.',
    solution: '🤖 Automatic lead tagging, dispatcher notifications, and task creation for 30-minute follow-ups.',
    result: '📊 Lead response time reduced to under 30 minutes for all service requests.',
    tags: ['GHL', 'Field Service', 'Lead Gen'],
    images: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'ghl-landscaping',
    title: 'Project #3.1 New Landscaping Inquiry',
    category: 'HIGH LEVEL',
    description: 'Smart routing system for landscaping inquiries based on client history.',
    overview: '🔍 Differentiates between new leads and existing customer scheduling requests.',
    problem: '⚠️ Project inquiries were getting buried in general scheduling emails.',
    solution: '🤖 Logic-based branching to route new inquiries to sales and schedule requests to ops.',
    result: '📊 Zero missed sales leads and 40% faster scheduling for repeat clients.',
    tags: ['GHL', 'CRM', 'Routing'],
    images: ['https://images.unsplash.com/photo-1558904541-efa8c196b27d?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'ghl-psych',
    title: 'Project #4.0 Psych Intake Automation',
    category: 'HIGH LEVEL',
    description: 'HIPAA-compliant intake process for medical practices.',
    overview: '🔍 Automates patient intake data flow from forms to clinical pipelines and internal sheets.',
    problem: '⚠️ Manual data entry for patient intake was error-prone and delayed treatment starts.',
    solution: '🤖 Multi-step automation connecting GHL forms to Google Sheets and internal clinical alerts.',
    result: '📊 Intake processing time reduced by 60% with 100% data integrity.',
    tags: ['GHL', 'Medical', 'Data Sync'],
    images: ['https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  // --- ZAPIER ---
  {
    id: 'zap-content',
    title: 'AI Content Repurposing Engine',
    category: 'ZAPIER',
    description: 'Transforming single form inputs into multi-channel social content.',
    overview: '🔍 Uses AI by Zapier to transcribe and generate blog/social posts from a single source file.',
    problem: '⚠️ High cost and time required for social media content distribution.',
    solution: '🤖 Path-based AI workflow that publishes to LinkedIn, Facebook, and Instagram simultaneously.',
    result: '📊 10+ social assets generated automatically from one simple input form.',
    tags: ['Zapier', 'AI', 'Social Media'],
    images: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'zap-asana',
    title: 'Automated Client Onboarding (Asana)',
    category: 'ZAPIER',
    description: 'Workflow-driven onboarding journey triggered by CRM updates.',
    overview: '🔍 Complex multi-path onboarding triggered by Asana task status changes.',
    problem: '⚠️ Inconsistent client experiences and missing documents during project launch.',
    solution: '🤖 Automated folder creation, welcome emails, and quote follow-up sequences.',
    result: '📊 50% reduction in onboarding time-to-launch for new clients.',
    tags: ['Zapier', 'Asana', 'Onboarding'],
    images: ['https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'zap-enrich',
    title: 'Lead Enrichment Automation',
    category: 'ZAPIER',
    description: 'AI-powered lead qualification and priority routing.',
    overview: '🔍 Catch hook triggers lead enrichment to split inquiries into High and Low priority.',
    problem: '⚠️ Sales team spent 4 hours daily researching low-quality leads.',
    solution: '🤖 Real-time enrichment via AI and instant Slack notifications for VIP leads.',
    result: '📊 80% reduction in manual lead research time for sales teams.',
    tags: ['Zapier', 'AI', 'Lead Gen'],
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  // --- MAKE ---
  {
    id: 'make-gmail',
    title: 'Auto Sort Gmail Attachments on Drive',
    category: 'MAKE',
    description: 'AI-driven file management and document sorting.',
    overview: '🔍 Watches Gmail and uses Gemini AI to classify and sort attachments into Drive folders.',
    problem: '⚠️ Important project files were lost in massive inbox threads.',
    solution: '🤖 AI Completion workflow that reads document context for smart folder routing.',
    result: '📊 100% automated file organization with instant access to clinical data.',
    tags: ['Make.com', 'Gemini AI', 'Drive'],
    images: ['https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'make-xero',
    title: 'Xero to Asana Transaction Sync',
    category: 'MAKE',
    description: 'Accounting automation for project-based financial tracking.',
    overview: '🔍 Exports account transactions from Xero and uploads formatted CSV data to Asana tasks.',
    problem: '⚠️ Project managers lacked real-time visibility into account billing statuses.',
    solution: '🤖 Automated transaction sync via Make.com router and data iterators.',
    result: '📊 Automated financial reporting and zero manual data entry errors.',
    tags: ['Make.com', 'Xero', 'Asana'],
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  // --- N8N ---
  {
    id: 'n8n-fb',
    title: 'Facebook Auto Responds AI',
    category: 'N8N',
    description: 'Intelligent chatbot with persistent memory for customer support.',
    overview: '🔍 n8n workflow using Simple Memory and Gemini AI to handle social media inquiries.',
    problem: '⚠️ Delayed customer responses during off-hours led to lost leads.',
    solution: '🤖 AI Agent with context memory that responds to webhooks instantly via FB Graph API.',
    result: '📊 24/7 instant support with 90% accuracy in handling standard FAQs.',
    tags: ['n8n', 'Gemini AI', 'Chatbot'],
    images: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  },
  {
    id: 'n8n-weather',
    title: 'AI Weather Social Media Automation',
    category: 'N8N',
    description: 'Daily automated social posting based on real-time environmental data.',
    overview: '🔍 Connects OpenWeatherMap with Gemini AI to generate daily social media posts.',
    problem: '⚠️ High workload maintaining localized social media presence for multiple cities.',
    solution: '🤖 AI Agent that generates quotes, processes images, and posts to Facebook daily.',
    result: '📊 100% hands-off daily social media engagement for multiple client locations.',
    tags: ['n8n', 'AI', 'OpenWeatherMap'],
    images: ['https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200'],
    logo: ''
  }
];