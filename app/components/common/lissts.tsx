import {
  Database,
  Globe,
  Mail,
  Settings,
  Shield,
  UserCheck,
} from "lucide-react";

export const DataCollection = () => {
  const dataCollectionList = [{}];

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
          <li>Create an account or profile</li>
          <li>Enroll in courses or educational programs</li>
          <li>Submit assignments or participate in discussions</li>
          <li>Contact us for support or inquiries</li>
          <li>Subscribe to our newsletters or updates</li>
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
  return (
    <section id="use-of-data" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Use of Data</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>We use the information we collect to:</p>
        <ul className="pl-6 space-y-2 list-disc">
          <li>Provide, maintain, and improve our educational services</li>
          <li>Process enrollments and track course progress</li>
          <li>Send you important updates about your courses and account</li>
          <li>Respond to your comments, questions, and support requests</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Comply with legal obligations and protect our rights</li>
        </ul>
      </div>
    </section>
  );
};

export const CookiesTracking = () => {
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
          <li>
            <strong>Essential Cookies:</strong> Required for basic platform
            functionality
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us understand how you use
            our platform
          </li>
          <li>
            <strong>Preference Cookies:</strong> Remember your settings and
            preferences
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver relevant
            educational content
          </li>
        </ul>
      </div>
    </section>
  );
};

export const ThirdParties = () => {
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
          <li>Analytics services to understand platform usage</li>
          <li>Payment processors for course enrollments</li>
          <li>Email services for communications</li>
          <li>Cloud storage providers for content delivery</li>
          <li>Video hosting platforms for educational content</li>
        </ul>
      </div>
    </section>
  );
};

export const Rights = () => {
  return (
    <section id="your-rights" className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <UserCheck className="w-6 h-6" style={{ color: "#ED8B00" }} />
        <h2 className="text-gray-900">Your Rights</h2>
      </div>
      <div className="space-y-4 text-gray-700">
        <p>You have several rights regarding your personal information:</p>
        <ul className="pl-6 space-y-2 list-disc">
          <li>
            <strong>Access:</strong> Request a copy of the personal information
            we hold about you
          </li>
          <li>
            <strong>Correction:</strong> Ask us to correct any inaccurate or
            incomplete information
          </li>
          <li>
            <strong>Deletion:</strong> Request deletion of your personal
            information
          </li>
          <li>
            <strong>Portability:</strong> Request a copy of your data in a
            structured format
          </li>
          <li>
            <strong>Restriction:</strong> Ask us to limit how we use your
            information
          </li>
          <li>
            <strong>Objection:</strong> Object to certain uses of your personal
            information
          </li>
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
          <p>
            <strong>Email:</strong> privacy@eduplatform.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Education Street, Learning City, LC
            12345
          </p>
          <p>
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            EST
          </p>
        </div>
        <p>
          We will respond to your inquiry within 30 days of receiving your
          request.
        </p>
      </div>
    </section>
  );
};
