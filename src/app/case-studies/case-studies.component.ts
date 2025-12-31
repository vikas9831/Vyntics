import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Result {
  metric: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  icon: string;
  challenge: string;
  solutions: string[];
  results: Result[];
  tags: string[];
}

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css'],
  standalone: false
})
export class CaseStudiesComponent {

  constructor(private router: Router) {}

  caseStudies: CaseStudy[] = [
    {
      title: "Global Retail Chain Cloud Migration",
      description: "Complete infrastructure modernization for a Fortune 500 retail company with 1,000+ stores worldwide.",
      industry: "Retail",
      icon: `<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" stroke="currentColor" stroke-width="2" fill="none"/>
             <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" stroke-width="2"/>
             <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="2"/>
             <line x1="7" y1="16" x2="17" y2="16" stroke="currentColor" stroke-width="2"/>`,
      challenge: "Legacy on-premise infrastructure causing downtime, high maintenance costs, and inability to scale during peak seasons.",
      solutions: [
        "Designed multi-cloud architecture using AWS and Azure",
        "Implemented automated CI/CD pipelines",
        "Established real-time inventory management system",
        "Created disaster recovery and backup solutions"
      ],
      results: [
        { metric: "60%", description: "Reduction in operational costs" },
        { metric: "99.9%", description: "Uptime achieved" },
        { metric: "3x", description: "Faster deployment cycles" },
        { metric: "50%", description: "Improved system performance" }
      ],
      tags: ["Cloud Migration", "Infrastructure", "DevOps", "Scalability"]
    },
    {
      title: "Financial Services Data Analytics Platform",
      description: "Real-time fraud detection and customer analytics system for a leading financial institution.",
      industry: "Finance",
      icon: `<line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
             <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2" fill="none"/>`,
      challenge: "High fraud rates, slow transaction processing, and lack of real-time customer insights affecting business decisions.",
      solutions: [
        "Built machine learning-powered fraud detection system",
        "Implemented real-time data streaming with Apache Kafka",
        "Created comprehensive customer analytics dashboard",
        "Established automated risk assessment workflows"
      ],
      results: [
        { metric: "85%", description: "Reduction in fraudulent transactions" },
        { metric: "40%", description: "Faster transaction processing" },
        { metric: "$2M", description: "Annual savings from fraud prevention" },
        { metric: "95%", description: "Accuracy in fraud detection" }
      ],
      tags: ["Data Analytics", "Machine Learning", "Real-time Processing", "Fraud Detection"]
    },
    {
      title: "Manufacturing AI Automation",
      description: "Intelligent process automation and predictive maintenance for a major automotive manufacturer.",
      industry: "Manufacturing",
      icon: `<rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
             <circle cx="8" cy="10" r="2" stroke="currentColor" stroke-width="2" fill="none"/>
             <path d="M14 10h6" stroke="currentColor" stroke-width="2"/>`,
      challenge: "Unplanned downtime, inefficient quality control, and high maintenance costs impacting production targets.",
      solutions: [
        "Deployed agentic AI for autonomous quality control",
        "Implemented predictive maintenance algorithms",
        "Created automated production optimization system",
        "Established IoT sensor network for real-time monitoring"
      ],
      results: [
        { metric: "75%", description: "Reduction in unplanned downtime" },
        { metric: "30%", description: "Increase in production efficiency" },
        { metric: "90%", description: "Accuracy in defect detection" },
        { metric: "$5M", description: "Annual cost savings" }
      ],
      tags: ["Agentic AI", "Predictive Maintenance", "IoT", "Process Automation"]
    },
    {
      title: "Healthcare Data Engineering Platform",
      description: "Secure, compliant data infrastructure for a multi-hospital healthcare network serving 2M+ patients.",
      industry: "Healthcare",
      icon: `<path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="2" fill="none"/>`,
      challenge: "Fragmented patient data across systems, compliance concerns, and slow access to critical medical information.",
      solutions: [
        "Built HIPAA-compliant data lake architecture",
        "Implemented real-time patient data integration",
        "Created advanced analytics for patient outcomes",
        "Established secure data sharing protocols"
      ],
      results: [
        { metric: "80%", description: "Faster access to patient records" },
        { metric: "100%", description: "HIPAA compliance maintained" },
        { metric: "25%", description: "Improvement in patient outcomes" },
        { metric: "60%", description: "Reduction in administrative costs" }
      ],
      tags: ["Data Engineering", "Healthcare", "Compliance", "Integration"]
    }
  ];

  getStarted(): void {
    this.router.navigate(['/'], { fragment: 'contact-us' });
  }
}
