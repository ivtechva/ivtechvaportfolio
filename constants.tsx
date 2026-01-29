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
  { label: 'Experience', href: '#experience' },
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
    role: 'Freelance Automation Specialist | Technical Virtual Assistant',
    company: 'Self-Employed',
    period: 'AUGUST 2025 – PRESENT',
    results: [
      'Designed and deployed AI-driven workflow automations using Zapier, Make, and n8n, helping clients reduce manual workload by up to 70%',
      'Integrated tools like GoHighLevel, HubSpot, and Google Workspace for lead management and task scheduling',
      'Built and maintained chatbot workflows using OpenAI APIs to enhance customer engagement',
      'Delivered detailed documentation, testing, and ongoing support for automation pipelines'
    ],
  },
  {
    id: 'exp-2',
    role: 'Service Delivery Coordinator L2',
    company: 'WeServ Systems International, Inc.',
    period: 'AUGUST 2023 – MARCH 2025',
    results: [
      'Coordinated and optimized service delivery activities, ensuring seamless collaboration between teams and clients',
      'Monitored and enforced adherence to SLAs, tracked KPIs, and implemented corrective actions',
      'Managed escalation of Level 1 incidents, providing expert support for complex issue resolution',
      'Provided team leadership support, coaching members to achieve performance targets'
    ],
  },
  {
    id: 'exp-3',
    role: 'Service Desk Expert L2',
    company: 'WeServ Systems International, Inc.',
    period: 'JULY 2023 – AUGUST 2023',
    results: [
      'Provided expert-level technical support for complex hardware, software, and network issues',
      'Collaborated with support teams to drive continuous improvement of Level 1 capabilities',
      'Worked alongside Level 3 support to resolve multifaceted technical challenges'
    ],
  },
  {
    id: 'exp-4',
    role: 'Service Desk Analyst',
    company: 'WeServ Systems International, Inc.',
    period: 'MARCH 2023 – JULY 2023',
    results: [
      'Analyzed and resolved diverse customer issues with strong technical troubleshooting focus',
      'Managed Administrator Accounts, Passwords, and Domain Privileges in Active Directory',
      'Delivered customer-centric support with proactive escalation of complex issues'
    ],
  },
  {
    id: 'exp-5',
    role: 'Technical Support Representative',
    company: 'DATAMATICS',
    period: 'OCTOBER 2020 – JUNE 2022',
    results: [
      'Managed 30+ Priority 1 ticket issues per day via call, email, and chat',
      'Achieved 95-100% customer satisfaction scores, outperforming the 90% average',
      'Served as Subject Matter Expert for shift teams and trainer for new hires'
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'zapier',
    title: 'Zapier',
    category: 'ZAPIER',
    description: 'Advanced Workflow Automation',
    problem: '',
    solution: '',
    result: '',
    impact: '',
    tags: [],
    logo: 'https://cdn.simpleicons.org/zapier/FF6600',
    images: [],
    link: 'https://docs.google.com/presentation/d/1XUL2b4Bv_S4H_CksP-aA3B30ghKdFkXvm2906zDYRdw/edit?usp=drive_link'
  },
  {
    id: 'make',
    title: 'Make (Integromat)',
    category: 'MAKE',
    description: 'Complex Data Integrations',
    problem: '',
    solution: '',
    result: '',
    impact: '',
    tags: [],
    logo: 'https://cdn.simpleicons.org/make/6D28D9',
    images: [],
    link: 'https://docs.google.com/presentation/d/1ERIkU3cNBMTPRTtA9h9jX2NWV99LZ-sa0H_H1cXB4XA/edit?usp=drive_link'
  },
  {
    id: 'n8n',
    title: 'n8n',
    category: 'N8N',
    description: 'Self-Hosted Automation',
    problem: '',
    solution: '',
    result: '',
    impact: '',
    tags: [],
    logo: 'https://cdn.simpleicons.org/n8n/FF6C37',
    images: [],
    link: 'https://docs.google.com/presentation/d/1ZiJU8iHVswJxWaWIi4vb54L7_z6PLrdSyV9BS5665iA/edit?usp=drive_link'
  },
  {
    id: 'ghl',
    title: 'GoHighLevel (GHL)',
    category: 'GOHIGHLEVEL',
    description: 'All-in-one CRM & Marketing',
    problem: '',
    solution: '',
    result: '',
    impact: '',
    tags: [],
    logo: 'https://www.vectorlogo.zone/logos/gohighlevel/gohighlevel-icon.svg',
    images: [],
    link: 'https://docs.google.com/presentation/d/1mUnuB2lceA4ta9xenN-uZaa76s0hmt-8J4WZxRJyJfY/edit?usp=drive_link'
  }
];