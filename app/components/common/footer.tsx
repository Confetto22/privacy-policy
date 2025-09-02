import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Link } from "react-router";
import { Separator } from "../ui/separator";

const footerSections = [
  {
    name: "terms of use",
    refLink: "#",
    category: "legal",
  },
  {
    name: "privacy policy",
    refLink: "#",
    category: "legal",
  },
  {
    name: "cookie policy",
    refLink: "#",
    category: "legal",
  },
  {
    name: "contact us",
    refLink: "#",
    category: "support",
  },
  {
    name: "help center",
    refLink: "#",
    category: "support",
  },
  {
    name: "community",
    refLink: "#",
    category: "support",
  },
];

const footerLinks = [
  {
    icon: <FiFacebook className="w-5 h-5" />,
    refLink: "#",
  },
  {
    icon: <FiTwitter className="w-5 h-5" />,
    refLink: "#",
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    refLink: "#",
  },
  {
    icon: <FiInstagram className="w-5 h-5" />,
    refLink: "#",
  },
];

const legalLinks = footerSections.filter((link) => link.category === "legal");
const supportLinks = footerSections.filter(
  (link) => link.category === "support"
);

const Footer = () => {
  return (
    <footer className="mt-16 bg-white border-t border-gray-200">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-gray-900">EduPlatform</h3>
            <p className="mb-4 text-gray-600">
              Empowering learners worldwide with quality education and
              innovative learning experiences.
            </p>

            <menu className="flex items-center space-x-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.refLink}
                  to={link.refLink}
                  target="_blank"
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  {link.icon}
                </Link>
              ))}
            </menu>
          </div>
          <div>
            <h4 className="mb-4 text-gray-900">Legal</h4>
            <ul className="flex flex-col space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.refLink}
                  className="text-gray-600 capitalize transition-colors hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-gray-900">Support</h4>
            <ul className="flex flex-col space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.refLink}
                  className="text-gray-600 capitalize transition-colors hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} EduPlatform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
