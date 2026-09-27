export const toolsData = [
  {
    id: "chat-pilot",
    slug: "chat-pilot",
    name: "Chat Pilot - AI Website Co-pilot for WordPress",
    shortName: "Chat Pilot AI",
    tagline: "Autonomous 24/7 AI Co-pilot for WordPress & WooCommerce powered by Gemini Flash",
    category: "WordPress & AI",
    badge: "Bestseller",
    version: "v1.2 Live",
    rating: 5.0,
    reviewsCount: 38,
    status: "active",
    currency: "₹",
    price: 1499,
    originalPrice: 2999,
    discount: "50% OFF",
    bannerImage: "/images/tools/chat-pilot/chat-pilot-hero-banner.jpg",
    gallery: [
      {
        id: 1,
        url: "/images/tools/chat-pilot/chat-pilot-hero-banner.jpg",
        title: "Chat Pilot Live AI Co-pilot Interface",
      },
      {
        id: 2,
        url: "/images/tools/chat-pilot/chat-pilot-leads-showcase.jpg",
        title: "Intelligent Lead Capture & Appointment Booking",
      },
      {
        id: 3,
        url: "/images/tools/chat-pilot/chat-pilot-analytics-screen.jpg",
        title: "0.05s Smart Cache Performance & Analytics",
      },
    ],
    overview:
      "Chat Pilot is an autonomous 24/7 AI website co-pilot built specifically for WordPress & WooCommerce websites, powered by Google Gemini Flash. Unlike generic bots that drain API limits and hallucinate, Chat Pilot utilizes an intelligent 0.05s response cache, semantic micro-chunking, and strict anti-hallucination guardrails to answer customer queries accurately and capture high-intent leads automatically.",
    licenseTiers: [
      {
        id: "single",
        name: "Single Site License",
        price: 1499,
        originalPrice: 2999,
        discount: "50% OFF",
        desc: "Ideal for business websites, WooCommerce stores & client projects.",
        features: [
          "1 WordPress / WooCommerce Website",
          "Google Gemini 1.5 Flash AI Engine",
          "0.05s Smart Response Cache (0 API Cost on repeats)",
          "Strict Anti-Hallucination Guardrails",
          "Automated Lead Capture & Contact Handover",
          "1-Click Knowledge Base Scanner",
          "1 Year Free Updates & Standard Support",
        ],
      },
      {
        id: "agency",
        name: "Agency Unlimited License",
        price: 3999,
        originalPrice: 7999,
        discount: "50% OFF",
        isPopular: true,
        desc: "For web agencies & freelancers deploying AI co-pilots across client sites.",
        features: [
          "Unlimited WordPress Client Websites",
          "Everything in Single Site License",
          "100% White-label & Custom Branding",
          "Multi-Site Central Hub & API Secret Key Ready",
          "Lifetime Free Updates",
          "Priority 1-on-1 Developer Support",
          "Commercial Resell & Client Distribution Rights",
        ],
      },
    ],
    keyFeatures: [
      {
        title: "⚡ 0.05s Smart Response Cache",
        desc: "70% of visitor queries are repetitive (hours, shipping, pricing, address). Chat Pilot checks an exact local cache first. Repeat queries return in <0.05s with zero API calls!",
      },
      {
        title: "🎯 Semantic Micro-Chunker",
        desc: "Scans WordPress Pages, Posts, and WooCommerce products into clean 150-200 word micro-chunks without HTML noise or shortcodes.",
      },
      {
        title: "🛡️ Strict Anti-Hallucination Guardrails",
        desc: "Answers strictly using grounded website chunks. If information isn't available, it politely offers to connect the visitor to human staff and collects lead information.",
      },
      {
        title: "🚀 Sub-1.5s Streaming Speed",
        desc: "Reasoning delays are suppressed using thinkingBudget: 0, and internal thought tags are sanitized before reaching the visitor.",
      },
      {
        title: "💎 Pure Vanilla JavaScript Widget",
        desc: "Frontend widget is written in 100% Vanilla JS (<25 KB). Zero jQuery dependency, zero conflicts with Elementor, Divi, Astra, or custom themes.",
      },
      {
        title: "🌐 Multi-Site Central Hub Ready",
        desc: "Each site generates a secure platform secret token to stream live conversations, leads, and analytics to a central dashboard.",
      },
    ],
    whatsIncluded: [
      "Ready-to-upload `chat-pilot.zip` WordPress plugin",
      "Step-by-step PDF & Video installation guide",
      "Gemini Free API Key configuration walkthrough",
      "CSS customization templates to match your website theme",
      "Direct developer support via WhatsApp / Email",
    ],
    techSpecs: [
      { label: "WordPress Compatibility", value: "WordPress 5.8, 6.0, 6.4, 6.5+" },
      { label: "WooCommerce Support", value: "WooCommerce 7.0+ & all product types" },
      { label: "PHP Requirement", value: "PHP 7.4, 8.0, 8.1, 8.2+" },
      { label: "AI Engine", value: "Google Gemini 1.5 Flash (Free / Paid Key)" },
      { label: "Widget Weight", value: "<25 KB Vanilla JS (Zero jQuery)" },
      { label: "Delivery", value: "Instant .ZIP Download & License Key" },
    ],
    faqs: [
      {
        q: "Does Chat Pilot require a paid Gemini API subscription?",
        a: "No! Google Gemini Flash provides a generous free tier (up to 1,500 requests/day). Combined with Chat Pilot's 0.05s Smart Cache, most small to medium businesses never exceed the free tier.",
      },
      {
        q: "Will Chat Pilot hallucinate or make up false information?",
        a: "No. Chat Pilot is engineered with strict anti-hallucination system prompt guardrails. It only answers questions using verified chunks extracted from your WordPress site.",
      },
      {
        q: "How do I install Chat Pilot on my WordPress website?",
        a: "Installation takes less than 2 minutes. Go to Plugins > Add New > Upload Plugin, select chat-pilot.zip, paste your Gemini API key, click 'Scan Website Now', and your co-pilot is immediately live!",
      },
      {
        q: "Does it slow down my website or interfere with my theme?",
        a: "Not at all. The frontend chat widget is written in pure lightweight Vanilla JavaScript (less than 25KB) and loads asynchronously without blocking page render or jQuery.",
      },
    ],
  },
];
