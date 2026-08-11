export type Opportunity = {
  id: string;
  title: string;
  category: string;
  type: string;
  eligibility: string;
  experience: string;
  status: string;
  summary: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "cs-support",
    title: "Remote Customer Support Associate",
    category: "Customer Support",
    type: "Contract / Part-time",
    eligibility: "Reliable internet · headset · quiet workspace",
    experience: "Beginner–intermediate",
    status: "Open for preparation & matching",
    summary:
      "Help customers through chat or email with clear communication and professional follow-up.",
  },
  {
    id: "data-ops",
    title: "Data Entry & Operations Assistant",
    category: "Operations",
    type: "Remote project-based",
    eligibility: "Laptop preferred · spreadsheet basics",
    experience: "Beginner welcome with training",
    status: "Open for preparation & matching",
    summary:
      "Accurate data handling, organisation, and reporting for growing remote teams.",
  },
  {
    id: "social",
    title: "Social Media Support Assistant",
    category: "Creative / Marketing",
    type: "Part-time remote",
    eligibility: "Smartphone or laptop · strong writing",
    experience: "Beginner–intermediate",
    status: "Open for preparation & matching",
    summary:
      "Content scheduling support, community replies, and brand-safe communication.",
  },
  {
    id: "research",
    title: "Online Research Assistant",
    category: "Research",
    type: "Freelance / project",
    eligibility: "Laptop · attention to detail",
    experience: "Intermediate preferred",
    status: "Open for preparation & matching",
    summary:
      "Structured research, note-taking, and summary delivery for business clients.",
  },
  {
    id: "sales-support",
    title: "Sales Support / Lead Follow-up",
    category: "Sales",
    type: "Remote contract",
    eligibility: "Phone + laptop · professional tone",
    experience: "Intermediate",
    status: "Open for preparation & matching",
    summary:
      "Follow up leads, update CRM notes, and support outbound communication workflows.",
  },
  {
    id: "admin",
    title: "Virtual Administrative Assistant",
    category: "Administration",
    type: "Part-time remote",
    eligibility: "Laptop · calendar & email tools",
    experience: "Beginner–intermediate",
    status: "Open for preparation & matching",
    summary:
      "Inbox support, scheduling, document prep, and day-to-day remote coordination.",
  },
];

export type SuccessStory = {
  id: string;
  name: string;
  role: string;
  startingPoint: string;
  action: string;
  result: string;
  audience: "candidate" | "employer";
  image: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Biden O.",
    role: "Customer Support Associate",
    startingPoint: "Graduate with limited remote experience and an outdated CV.",
    action:
      "Completed readiness guidance, profile improvement, and communication practice.",
    result:
      "Shortlisted for a remote support role after assessment and prepared interviews.",
    audience: "candidate",
    image: "/images/employee1.jpg",
  },
  {
    id: "2",
    name: "James K.",
    role: "Operations Assistant",
    startingPoint: "Underemployed and unsure how to present transferable skills.",
    action:
      "Role pathway coaching, digital skills practice, and application readiness support.",
    result:
      "Matched into a project-based operations support opportunity with clear expectations.",
    audience: "candidate",
    image: "/images/employee3.jpg",
  },
  {
    id: "3",
    name: "Daniel M.",
    role: "Hiring Manager, Northline Digital",
    startingPoint: "Needed dependable remote support without long hiring cycles.",
    action:
      "Shared a role brief; EarnBridge assessed and prepared candidates before introduction.",
    result:
      "Received a shortlist of readiness-checked candidates and began onboarding support.",
    audience: "employer",
    image: "/images/employer.jpg",
  },
  {
    id: "4",
    name: "Maya S.",
    role: "Research Assistant",
    startingPoint: "Strong academic background but weak online professional profile.",
    action: "LinkedIn and portfolio guidance plus assessment preparation.",
    result:
      "Improved profile clarity and progressed through a structured matching review.",
    audience: "candidate",
    image: "/images/portrait-3.jpg",
  },
];

export const teamMembers = [
  {
    name: "Mickael Johnson",
    role: "Career Support Lead",
    image: "/images/portrait-1.jpg",
  },
  {
    name: "Herber Macaulay",
    role: "Talent Partnerships",
    image: "/images/portrait-2.jpg",
  },
  {
    name: "Sarah Mensah",
    role: "Training Coordinator",
    image: "/images/portrait-3.jpg",
  },
  {
    name: "David Kings",
    role: "Employer Success",
    image: "/images/portrait-4.jpg",
  },
];
