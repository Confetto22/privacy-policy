import {
  Database,
  Globe,
  Mail,
  Settings,
  Shield,
  UserCheck,
} from "lucide-react";

export const DataCollection = () => {
  const collectionList = [
    "Create an account or profile",
    "Enroll in courses or educational programs",
    "Submit assignments or participate in discussions",
    "Contact us for support or inquiries",
    "Subscribe to our newsletters or updates",
  ];
  return (
    <section id="data-collection" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Database className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Data Collection</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>
          We collect information you provide directly to us, such as when you:
        </p>
        <ul className="pl-6 space-y-2 list-disc">
          {collectionList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
        <p>
          The types of information we may collect include your name, email
          address, educational background, course progress, and any other
          information you choose to provide.
        </p>
      </div>
    </section>
  );
};

export const UseData = () => {
  const dataList = [
    "Provide, maintain, and improve our educational services",
    "Process enrollments and track course progress",
    "Send you important updates about your courses and account",
    "Respond to your comments, questions, and support requests",
    "Analyze usage patterns to enhance user experience",
    "Comply with legal obligations and protect our rights",
  ];
  return (
    <section id="use-of-data" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Use of Data</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>We use the information we collect to:</p>
        <ul className="pl-6 space-y-2 list-disc">
          {dataList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const CookiesTracking = () => {
  const cookiesList = [
    {
      title: "Essential Cookies: ",
      text: "Required for basic platform functionality",
    },
    {
      title: "Performance Cookies:: ",
      text: "Help us understand how you use our platform",
    },
    {
      title: "Preference  Cookies: ",
      text: "Remember your settings and preferences",
    },
    {
      title: "Marketing  Cookies: ",
      text: "Used to deliver relevant educational content",
    },
  ];
  return (
    <section id="cookies" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Globe className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Cookies and Tracking</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our platform. Cookies help us remember your preferences
          and provide personalized content.
        </p>
        <p>Types of cookies we use:</p>
        <ul className="pl-6 space-y-2 list-disc">
          {cookiesList.map((list) => (
            <li key={list.title}>
              <strong>{list.title}</strong> {list.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const ThirdParties = () => {
  const thirdParties = [
    "Analytics services to understand platform usage",
    "Payment processors for course enrollments",
    "Email services for communications",
    "Cloud storage providers for content delivery",
    "Video hosting platforms for educational content",
  ];
  return (
    <section id="third-party" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Third-party Services</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>
          We may use third-party services to enhance our educational platform.
          These services have their own privacy policies and may collect
          information about you.
        </p>
        <p>Third-party services we use include:</p>
        <ul className="pl-6 space-y-2 list-disc">
          {thirdParties.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const Rights = () => {
  const rights = [
    {
      title: "Access: ",
      text: " Request a copy of the personal information we hold about you",
    },
    {
      title: "Correction: ",
      text: "Ask us to correct any inaccurate or incomplete information",
    },
    {
      title: "Deletion: ",
      text: "Request deletion of your personal information",
    },
    {
      title: "Portability: ",
      text: "Request a copy of your data in a structured format",
    },
    {
      title: "Restriction: ",
      text: "Ask us to limit how we use your information",
    },
    {
      title: "Objection: ",
      text: " Object to certain uses of your personal information",
    },
  ];
  return (
    <section id="your-rights" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <UserCheck className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Your Rights</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>You have several rights regarding your personal information:</p>
        <ul className="pl-6 space-y-2 list-disc">
          {rights.map((list) => (
            <li key={list.title}>
              <strong>{list.title}</strong> {list.text}
            </li>
          ))}
        </ul>
        <p>
          To exercise any of these rights, please contact us using the
          information provided in the Contact Us section below.
        </p>
      </div>
    </section>
  );
};

export const Contacts = () => {
  const contacts = [
    {
      title: "Email: ",
      text: " privacy@eduplatform.com",
    },
    {
      title: "Phone: ",
      text: "+1 (555) 123-4567",
    },
    {
      title: "Address: ",
      text: "123 Education Street, Learning City, LC 12345",
    },
    {
      title: "Business Hours: ",
      text: " Monday - Friday, 9:00 AM - 6:00 PM EST",
    },
  ];
  return (
    <section id="contact" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Contact Us</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us:
        </p>
        <div className="p-6 space-y-3 rounded-lg bg-gray-50">
          {contacts.map((contact) => (
            <p key={contact.title}>
              <strong>{contact.title}</strong> {contact.text}
            </p>
          ))}
        </div>
        <p>
          We will respond to your inquiry within 30 days of receiving your
          request.
        </p>
      </div>
    </section>
  );
};
