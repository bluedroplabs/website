import type { IFeaturedServiceCategories } from "./FeaturedServiceCategories.types";

const FEATURED_SERVICE_CATEGORIES_DEFAULT_PROPS: IFeaturedServiceCategories = {
  eyebrow: "End-to-End Marketing",
  title: "Comprehensive Digital Growth Services",
  description:
    "From strategy to technical SEO, we optimize every part of your website to attract more visitors, convert more customers, and build lasting visibility no matter what platform you use.",
  groups: [
    {
      title: "Marketing Strategy and Positioning",
      description:
        "We help you define, refine, and communicate your brand message effectively across all digital touch points.",
      items: [
        {
          icon: "CampaignIcon",
          title: "Brand Messaging Workshops",
          features: [
            "Discover your unique value proposition.",
            "Define clear positioning that differentiates you from competitors.",
            "Develop messaging that resonates with your target audience.",
          ],
        },
        {
          icon: "AccountTreeIcon",
          title: "Site Structure and Information Architecture",
          features: [
            "Optimize navigation for both users and search engines.",
            "Design user pathways that guide visitors to conversion.",
            "Create logical content hierarchies that boost SEO.",
          ],
        },
        {
          icon: "EditNoteIcon",
          title: "Website Copywriting",
          features: [
            "Explain the value proposition efficiently and effectively.",
            "Communicate key brand strengths in a way that resonates with your audience.",
            "Improve conversion rates with targeted copy.",
          ],
        },
      ],
    },
    {
      title: "Content Strategy",
      description:
        "Content is the foundation of effective SEO. We help you create and optimize content that drives visibility, engagement, and conversion.",
      items: [
        {
          icon: "FindInPageIcon",
          title: "Content Audit & Gap Analysis",
          features: [
            "Evaluate existing content effectiveness.",
            "Identify topic opportunities based on search data.",
            "Map content to user journey stages.",
          ],
        },
        {
          icon: "EventNoteIcon",
          title: "Editorial Calendar Development",
          features: [
            "Brainstorm content ideas that can succeed in the AI Overviews landscape.",
            "Create sustainable content publishing schedules.",
            "Align content with business goals and seasonality.",
          ],
        },
        {
          icon: "LibraryBooksIcon",
          title: "Cornerstone Content Creation",
          features: [
            "Develop in-depth content on your core service areas.",
            "Create supplementary content for authoritative coverage of relevant topics.",
            "Optimize for competitive keywords with search volume.",
          ],
        },
      ],
    },
    {
      title: "Technical SEO",
      description:
        "We handle the behind-the-scenes optimization that makes search engines love your site — clean code, fast load times, and flawless indexing.",
      items: [
        {
          icon: "RocketIcon",
          title: "Resolve Technical Issues",
          features: [
            "Achieve 95% Core Web Vitals scores on mobile and desktop.",
            "Fix canonical URL implementation and optimize URL pattern structures.",
            "Surface and address duplicate content.",
          ],
        },
        {
          icon: "SyncAltIcon",
          title: "Site Migration Support",
          features: [
            "Ensure all links and redirects are ready so you don't lose authority.",
            "Recommendations for content consolidation and pruning.",
            "Optimize when merging multiple domains into one website.",
          ],
        },
        {
          icon: "CodeBlockIcon",
          title: "Metatag Setup and Optimization",
          features: [
            "Add structured data markup (JSON-LD).",
            "Increase rich snippet and AI-inclusion opportunities.",
            "Categorize content for inclusion in AI overviews and LLMs.",
          ],
        },
        {
          icon: "VerifiedUserIcon",
          title: "GDPR Compliance",
          features: [
            "Implement cookie consent.",
            "Set up privacy-compliant analytics.",
            "Integrate with Google Tag Manager.",
          ],
        },
      ],
    },
    {
      title: "Ongoing SEO and Performance",
      description:
        "Sustainable SEO requires consistent attention. Keep your site competitive in today's dynamic search landscape and never worry about your content pipeline.",
      items: [
        {
          icon: "SyncIcon",
          title: "Content Marketing and Engineering",
          features: [
            "Distribute and repackage content for optimal reach.",
            "Update content quarterly to ensure freshness.",
            "Ideate and produce content regularly to build authority and traffic.",
          ],
        },
        {
          icon: "AnalyticsIcon",
          title: "Analytics and Reporting",
          features: [
            "Create custom dashboards for your KPIs.",
            "Track conversions, not just rankings.",
            "Monitor search competition.",
          ],
        },
        {
          icon: "LinkIcon",
          title: "Backlink Acquisition",
          features: [
            "Outreach to websites relevant to your audience.",
            "Competitive backlink analysis to identify high-value opportunities.",
            "Regular follow-up and tracking.",
          ],
        },
      ],
    },
  ],
};

export const FEATURED_SERVICE_CATEGORIES_EXAMPLE_PROPS = {
  default: FEATURED_SERVICE_CATEGORIES_DEFAULT_PROPS,
};
