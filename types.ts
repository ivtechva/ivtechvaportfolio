
// Added React import to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  images: string[];
  logo: string;
  googleDriveLink?: string;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}