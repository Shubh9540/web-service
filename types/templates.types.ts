export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  contactInfoLeft: HeaderContactItem[];
  contactInfoRight: HeaderContactItem[];
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

export interface TopBarData {
  phoneLabel: string;
  phoneValue: string;
  emailValue: string;
  followLabel: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  primaryButton: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
}

export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  button: { text: string; url: string };
  slides?: HeroSlide[];
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: { id: string; icon: string; title: string; description?: string }[];
  checklists?: string[];
  avatars?: string[];
  customersText?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  videoText?: string;
  videoSubtext?: string;
  button: { text: string; url: string };
  bgImage?: string;
  imageMain: string;
  imageSmall1?: string;
  imageSmall2: string;
  badgeText1?: string;
  badgeText2?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface ProcessItem {
  id: string;
  icon: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessData {
  subtitle: string;
  title1: string;
  title2: string;
  description?: string;
  bgImage: string;
  steps: ProcessItem[];
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
  button: { text: string; url: string };
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  features: ServiceDetailFeature[];
  overviewTitle: string;
  overviewText: string[];
  overviewImage: string;
  processTitle: string;
  processSteps: ServiceDetailProcessStep[];
  faqTitle: string;
  faqs: { id: string; question: string; answer: string }[];
  sidebar: {
    quoteForm: {
      title: string;
      description: string;
      buttonText: string;
      servicesList: string[];
    };
    servicesList: {
      title: string;
      services: { id: string; label: string; url: string }[];
    };
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FooterData {
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  hoursTitle: string;
  hours: string;
  hoursDays: string;
  socialLinks: { id: string; icon: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
  instagram: string[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  button: { text: string; url: string };
  imageMain: string;
  badgeTitle: string;
  badgeText: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryItem[];
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  title: string;
}

export interface VideoGalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videos: VideoItem[];
}

export interface ContactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
  mapUrl: string;
  infoBoxes?: {
    icon: string;
    title: string;
    desc1: string;
    desc2: string;
  }[];
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}

export interface CtaData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  button1: { text: string; url: string };
  button2: { text: string; url: string };
  image: string;
}

export interface BlogItem {
  id: string;
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
  url: string;
  content?: {
    intro: string;
    sections: {
      heading: string;
      text: string;
    }[];
  };
}

export interface BlogsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  button: { text: string; url: string };
  blogs: BlogItem[];
  sidebarCta?: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface PortfolioFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioCategory {
  id: string;
  icon: string;
  label: string;
  subtitle: string;
  title: string;
  description: string;
  features: PortfolioFeature[];
  sliderImages: string[];
  fixedImage: string;
  button: {
    text: string;
    url: string;
  };
}

export interface CounterItem {
  id: string;
  icon: string;
  number: string;
  label: string;
}

export interface CounterData {
  items: CounterItem[];
}

export interface TechnologyItem {
  id: string;
  title: string;
  image: string;
}

export interface TechnologiesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  items: TechnologyItem[];
}

export interface PortfolioData {
  subtitle: string;
  title1: string;
  title2: string;
  categories: PortfolioCategory[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  icon: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  footerText: string;
  buttonText: string;
  buttonUrl: string;
  isPopular?: boolean;
}

export interface PricingData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  plans: PricingPlan[];
}

export interface WebserviceTemplateData {
  common: {
    aboutBreadcrumb?: any;
    servicesBreadcrumb?: any;
    contactBreadcrumb?: any;
    enquiryBreadcrumb?: any;
    Footer?: FooterData;
  };
  categories: {
    Webservice: {
      templateComponents?: any;
      sections: {
        TopBar?: { variants?: { WebserviceTopBar1?: TopBarData } };
        Header?: { variants?: { WebserviceHeader1?: HeaderData } };
        Hero?: { variants?: { WebserviceHero1?: HeroData } };
        AboutUs?: { variants?: { WebserviceAboutUs1?: AboutUsData } };
        Services?: { variants?: { WebserviceServices1?: ServicesData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        Process?: { variants?: { WebserviceProcess1?: ProcessData } };
        Testimonials?: { variants?: { WebserviceTestimonials1?: TestimonialsData } };
        Portfolio?: { variants?: { WebservicePortfolio1?: PortfolioData } };
        Pricing?: { variants?: { WebservicePricing1?: PricingData } };
        Counter?: { variants?: { WebserviceCounter1?: CounterData } };
        Technologies?: { variants?: { WebserviceTechnologies1?: TechnologiesData } };
        Cta?: { variants?: { WebserviceCta1?: CtaData } };
        Blogs?: { variants?: { WebserviceBlogs1?: BlogsData } };
        whyChooseUs?: { variants?: { WebserviceWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { WebserviceContact1?: ContactData } };
        enquiry?: { variants?: { WebserviceEnquiry1?: EnquiryData } };
      };
    };
  };
}
