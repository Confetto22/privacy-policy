import { useState, useEffect } from "react";

import {
  Shield,
  FileText,
  Database,
  Settings,
  Globe,
  UserCheck,
  Mail,
  ChevronUp,
} from "lucide-react";

import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import {
  CookiesTracking,
  DataCollection,
  UseData,
  ThirdParties,
  Rights,
  Contacts,
} from "~/components/common/lissts";
import Footer from "~/components/common/footer";

const navigationSections = [
  { id: "introduction", label: "Introduction", icon: FileText },
  { id: "data-collection", label: "Data Collection", icon: Database },
  { id: "use-of-data", label: "Use of Data", icon: Settings },
  { id: "cookies", label: "Cookies", icon: Globe },
  { id: "third-party", label: "Third-party Services", icon: Shield },
  { id: "your-rights", label: "Your Rights", icon: UserCheck },
  { id: "contact", label: "Contact Us", icon: Mail },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = navigationSections.map((section) => section.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(scrollToTop, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F8FA" }}>
      {/* Hero Section */}
      <div className="relative" style={{ backgroundColor: "#071773" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl text-white lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100">
              We're committed to protecting your privacy and ensuring
              transparency about how we collect, use, and safeguard your
              personal information on our educational platform.
            </p>
            <p className="mt-4 text-blue-200">Last updated: August 1, 2025</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">
          {/* Sidebar Navigation - Desktop */}
          <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-8">
              <Card className="p-6 bg-white border-gray-200">
                <h3 className="mb-4 text-gray-900">Quick Navigation</h3>
                <nav className="space-y-2">
                  {navigationSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                          activeSection === section.id
                            ? "text-white"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                        style={
                          activeSection === section.id
                            ? { backgroundColor: "#ED8B00" }
                            : {}
                        }
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{section.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </Card>
            </div>
          </div>

          <div className="mb-8 lg:hidden">
            <Card className="p-4 bg-white border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                {navigationSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          <div className="lg:flex-1">
            <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm lg:p-12">
              <section id="introduction" className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6" style={{ color: "#ED8B00" }} />
                  <h2 className="text-gray-900">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Welcome to EduPlatform. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you visit our educational platform and use our services.
                  </p>
                  <p>
                    By accessing or using our platform, you agree to the
                    collection and use of information in accordance with this
                    policy. We are committed to protecting your privacy and
                    ensuring your personal information is handled responsibly.
                  </p>
                </div>
              </section>

              <Separator className="my-8" />

              <DataCollection />

              <Separator className="my-8" />

              <UseData />

              <Separator className="my-8" />

              <CookiesTracking />

              <Separator className="my-8" />

              <ThirdParties />

              <Separator className="my-8" />

              <Rights />

              <Separator className="my-8" />

              <Contacts />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed z-50 w-12 h-12 p-0 rounded-full shadow-lg bottom-6 right-6"
          style={{ backgroundColor: "#ED8B00" }}
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
