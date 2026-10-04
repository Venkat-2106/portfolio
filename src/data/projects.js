export const projects = [
  {
    id: 'smartbillr',
    title: 'SmartBillr',
    tagline: 'Live multi-tenant billing and inventory SaaS for small retail shops',
    overview: 'A live, multi-tenant SaaS for billing and inventory with Razorpay recurring subscriptions, row-level security and an admin panel. Built for small retail shops to manage GST/VAT invoicing, inventory, purchases, returns, staff roles, and reports.',
    problem: 'Small retail shops often rely on manual billing and inventory tracking, leading to errors, stock mismanagement, and time-consuming processes.',
    whatIBuilt: 'Developed a complete multi-tenant SaaS platform with tenant isolation via row-level security, comprehensive billing workflows, inventory management, staff role management, reporting, and integrated Razorpay for recurring subscriptions.',
    tools: ['React', 'FastAPI', 'PostgreSQL (Supabase)', 'Redis', 'Razorpay', 'Tailwind CSS', 'Vercel', 'Render'],
    impact: 'Provides a production-ready billing and inventory solution designed for small retail businesses.',
    screenshots: [
      { label: 'SmartBillr - Billing Dashboard', placeholder: 'https://placehold.co/800x500/e5e7eb/4b5563?text=SmartBillr+Dashboard' }
    ],
    liveUrl: '[LIVE_URL]',
    githubUrl: '[GITHUB_URL]'
  },
  {
    id: 'dataiq',
    title: 'DataIQ – Enterprise Data Validation Tool',
    tagline: 'Python + Tkinter desktop app for data validation and cleanup',
    overview: 'A menu-driven desktop application with a live log panel and thread-safe execution, designed for automated validation of large Excel datasets.',
    problem: 'Manual validation of large Excel datasets is time-consuming and error-prone, especially when dealing with multiple sources.',
    whatIBuilt: 'Built a multi-module desktop app with automated validation across data sources, Excel comparison, integrated cleanup tools, and thread-safe execution. Includes a menu-driven interface and live logging.',
    tools: ['Python', 'Tkinter', 'pandas', 'openpyxl'],
    impact: 'Streamlines data validation workflows, enabling faster and more reliable data preparation for reporting.',
    screenshots: [
      { label: 'DataIQ - Main Interface', placeholder: 'https://placehold.co/800x500/e5e7eb/4b5563?text=DataIQ+Interface' }
    ],
    liveUrl: null,
    githubUrl: '[GITHUB_URL]'
  },
  {
    id: 'powerbi-suite',
    title: 'Business & Entertainment Data Insights Suite',
    tagline: 'Power BI dashboards for business and sports analytics',
    overview: 'A collection of interactive Power BI dashboards covering business, food delivery, sales, education, and sports analytics.',
    problem: 'Stakeholders need clear, interactive visualizations to make data-driven decisions across different domains.',
    whatIBuilt: 'Created five dashboards: Northwind, Meal Delivery, Sales & Budget Analysis, Australia Student Graduation, and IPL performance dashboards. Applied Power Query, DAX, and data modeling best practices.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Modeling'],
    impact: 'Provides comprehensive insights across multiple domains, improving data accessibility and decision-making.',
    screenshots: [
      { label: 'Power BI Dashboard', placeholder: 'https://placehold.co/800x500/e5e7eb/4b5563?text=Power+BI+Dashboard' }
    ],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 'vba-automation',
    title: 'Enterprise Reporting Automation using VBA',
    tagline: 'Excel to PowerPoint to Outlook automated reporting',
    overview: 'Automated the generation and distribution of reports from Excel to PowerPoint via Outlook.',
    problem: 'Manual report generation was taking hours and prone to errors.',
    whatIBuilt: 'Built VBA macros to automate the flow from Excel to PowerPoint and email distribution via Outlook.',
    tools: ['VBA', 'Excel', 'PowerPoint', 'Outlook'],
    impact: 'Reduced manual effort by up to 75%; reports now generated in minutes instead of hours.',
    screenshots: [
      { label: 'VBA Automation Workflow', placeholder: 'https://placehold.co/800x500/e5e7eb/4b5563?text=VBA+Automation' }
    ],
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 'python-workflows',
    title: 'Smart Workflow Automation using Python',
    tagline: 'Scheduled data processing and report generation',
    overview: 'Automated scheduled data processing, validation, report generation, and file management using Python and Windows Task Scheduler.',
    problem: 'Routine data processing tasks required manual intervention and were not consistently executed.',
    whatIBuilt: 'Created Python scripts for scheduled workflows with validation, cleaning, and automated reporting, deployed via Windows Task Scheduler.',
    tools: ['Python', 'pandas', 'openpyxl', 'Windows Task Scheduler'],
    impact: 'Ensures reliable, consistent execution of data workflows with minimal manual intervention.',
    screenshots: [
      { label: 'Python Workflow Automation', placeholder: 'https://placehold.co/800x500/e5e7eb/4b5563?text=Python+Automation' }
    ],
    liveUrl: null,
    githubUrl: null
  }
];
