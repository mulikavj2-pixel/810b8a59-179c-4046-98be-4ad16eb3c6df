"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, Rocket, Briefcase, Cloud, Shield, Brain, BarChart3, Lightbulb, Smartphone, Code, Trophy, Users, Star, HelpCircle, Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechFlow"
          button={{
            text: "Get Started",
            href: "/contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Build Tomorrow's Tech Today"
          description="Empower your business with cutting-edge software solutions. We transform ideas into scalable, innovative products that drive growth and efficiency."
          tags={["Cloud Native", "AI-Powered", "Scalable", "Secure"]}
          buttons={[
            {
              text: "Start Your Project",
              href: "/contact"
            },
            {
              text: "Explore Services",
              href: "#services"
            }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870710643-4bt8h90g.jpg"
          showcaseImageAlt="Tech startup team collaborating"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870712182-bt3yi1t5.jpg"
          imageAlt="Digital technology background"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About TechFlow"
          tagIcon={Zap}
          title="We're redefining how enterprises build and deploy software at scale."
          description="Founded by experienced technologists with 50+ years combined experience"
          subdescription="Serving 200+ companies across 15 industries"
          icon={Rocket}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870710643-4bt8h90g.jpg"
          imageAlt="TechFlow team"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          features={[
            {
              id: "1",
              title: "Cloud Architecture",
              description: "Design and deploy robust, scalable cloud infrastructure tailored to your needs.",
              reverse: false,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870713364-z3cwmm47.jpg",
              imageAlt: "Cloud architecture diagram",
              items: [
                {
                  icon: Cloud,
                  text: "Multi-cloud deployment strategies"
                },
                {
                  icon: Shield,
                  text: "Enterprise-grade security"
                },
                {
                  icon: Zap,
                  text: "99.99% uptime guarantee"
                }
              ]
            },
            {
              id: "2",
              title: "AI & Machine Learning",
              description: "Harness the power of AI to automate processes and gain competitive insights.",
              reverse: true,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870714778-gj6oz3qc.jpg",
              imageAlt: "AI machine learning interface",
              items: [
                {
                  icon: Brain,
                  text: "Custom ML model development"
                },
                {
                  icon: BarChart3,
                  text: "Predictive analytics solutions"
                },
                {
                  icon: Lightbulb,
                  text: "Intelligent automation workflows"
                }
              ]
            },
            {
              id: "3",
              title: "Web & Mobile Solutions",
              description: "Build cross-platform applications that users love with modern frameworks.",
              reverse: false,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870716647-1q4q4amf.jpg",
              imageAlt: "Mobile app development",
              items: [
                {
                  icon: Smartphone,
                  text: "React, Vue, Flutter expertise"
                },
                {
                  icon: Code,
                  text: "RESTful & GraphQL APIs"
                },
                {
                  icon: Zap,
                  text: "Performance optimized apps"
                }
              ]
            }
          ]}
          title="Our Services"
          description="Comprehensive tech solutions for every stage of your digital journey."
          tag="What We Offer"
          tagIcon={Briefcase}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          metrics={[
            {
              id: "1",
              value: "200+",
              title: "Clients Served",
              description: "Trusted by industry leaders and startups",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870730135-w2dtvz5z.jpg",
              imageAlt: "Successful client portfolio"
            },
            {
              id: "2",
              value: "500+",
              title: "Projects Delivered",
              description: "From concept to production deployment",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870731580-3z67ur2w.jpg",
              imageAlt: "Successful project deliveries"
            }
          ]}
          title="Our Impact"
          description="Proven track record of delivering exceptional results."
          tag="Results"
          tagIcon={Trophy}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          team={[
            {
              id: "1",
              name: "Alex Johnson",
              role: "CEO & Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870717744-jaxaz9r4.jpg",
              imageAlt: "Alex Johnson CEO"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "CTO",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870718936-jp9dcpj1.jpg",
              imageAlt: "Sarah Chen CTO"
            },
            {
              id: "3",
              name: "Marcus Williams",
              role: "Lead Architect",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870720026-gx3mfqvq.jpg",
              imageAlt: "Marcus Williams Lead Architect"
            },
            {
              id: "4",
              name: "Emma Davis",
              role: "Head of Design",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870721471-661kjimj.jpg",
              imageAlt: "Emma Davis Head of Design"
            }
          ]}
          title="Meet Our Team"
          description="Talented engineers and designers passionate about solving complex problems."
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          testimonials={[
            {
              id: "1",
              nameTitle: "Michael Torres, CEO of FinanceFlow",
              quote: "TechFlow transformed our entire infrastructure. We went from monthly deployments to continuous delivery in just 3 months. Their team's expertise is unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870723167-5rx0ewhi.jpg",
              imageAlt: "Michael Torres CEO"
            },
            {
              id: "2",
              nameTitle: "Lisa Zhang, Product Director at DataSync",
              quote: "Working with TechFlow was a game-changer. They built our AI recommendation engine that increased user engagement by 45%. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870724473-iwjeo0ch.jpg",
              imageAlt: "Lisa Zhang Product Director"
            },
            {
              id: "3",
              nameTitle: "David Kumar, Founder of AppForce",
              quote: "From initial consultation to launch, TechFlow handled everything professionally. Their mobile app is now our fastest-growing revenue stream.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870726441-ppl0rsz0.jpg",
              imageAlt: "David Kumar Founder"
            },
            {
              id: "4",
              nameTitle: "Jennifer Brown, VP Engineering at CloudPlus",
              quote: "The cloud migration was seamless. Zero downtime, excellent documentation, and their support team is responsive and knowledgeable. 5 stars.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764870728316-5ijx8zfa.jpg",
              imageAlt: "Jennifer Brown VP Engineering"
            }
          ]}
          title="What Our Clients Say"
          description="Real testimonials from companies we've partnered with."
          tag="Client Success"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",
              title: "What technologies does TechFlow specialize in?",
              content: "We specialize in cloud-native architecture, machine learning, web and mobile development, and enterprise solutions. Our team has expertise in AWS, Azure, Kubernetes, React, Node.js, Python, and more."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on scope and complexity. Small applications take 2-4 weeks, medium projects 2-3 months, and enterprise solutions typically 3-6 months. We provide detailed timelines during the discovery phase."
            },
            {
              id: "3",
              title: "Do you provide ongoing support and maintenance?",
              content: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, performance optimization, security updates, and new feature development tailored to your needs."
            },
            {
              id: "4",
              title: "What is your development process?",
              content: "We follow Agile methodology with 2-week sprints, regular client communication, and transparent progress tracking. You'll have access to a project dashboard and weekly status reports."
            },
            {
              id: "5",
              title: "How do you ensure code quality?",
              content: "We implement rigorous quality assurance through automated testing, code reviews, CI/CD pipelines, and security audits. All code follows industry best practices and standards."
            },
            {
              id: "6",
              title: "Can you work with existing legacy systems?",
              content: "Absolutely. We specialize in modernizing legacy systems through careful refactoring, API development, and gradual migration to cloud infrastructure. We ensure zero downtime during transitions."
            }
          ]}
          title="Frequently Asked Questions"
          description="Common questions about our services and process."
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your tech vision into reality? Let's discuss how we can help your business scale and innovate."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Schedule Consultation",
              href: "/contact"
            },
            {
              text: "View Case Studies",
              href: "/case-studies"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="TechFlow"
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/about"
                },
                {
                  label: "Our Team",
                  href: "/team"
                },
                {
                  label: "Careers",
                  href: "/careers"
                },
                {
                  label: "Blog",
                  href: "/blog"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Cloud Solutions",
                  href: "/services/cloud"
                },
                {
                  label: "AI & ML",
                  href: "/services/ai"
                },
                {
                  label: "Web Development",
                  href: "/services/web"
                },
                {
                  label: "Consulting",
                  href: "/services/consulting"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Documentation",
                  href: "/docs"
                },
                {
                  label: "FAQ",
                  href: "#faq"
                },
                {
                  label: "Support",
                  href: "/support"
                },
                {
                  label: "Contact",
                  href: "/contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "/terms"
                },
                {
                  label: "Cookie Policy",
                  href: "/cookies"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Github,
              href: "https://github.com",
              ariaLabel: "GitHub"
            },
            {
              icon: Mail,
              href: "mailto:hello@techflow.com",
              ariaLabel: "Email"
            }
          ]}
          copyrightText="© TechFlow, Inc. 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}