import SEO from '@/components/SEO'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Privacy Policy | Pin Hemmawan Bangkok Real Estate Services"
        description="Privacy Policy for Pin Hemmawan Bangkok real estate services. Learn how we collect, use, and protect your personal information when using our property services."
        keywords="privacy policy, data protection, Pin Hemmawan, Bangkok real estate, personal information"
        canonicalUrl="https://pinpropertypro.com/privacy-policy"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-700">
          <p>
            This Privacy Policy describes how Pin Hemmawan collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
          </p>
          <h2>Collecting Personal Information</h2>
          <p>
            When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.
          </p>
          <ul>
            <li>
              <strong>Device information</strong>
              <ul>
                <li><strong>Purpose of collection:</strong> To load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
                <li><strong>Source of collection:</strong> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
                <li><strong>Disclosure for a business purpose:</strong> Shared with our processor Shopify.</li>
                <li><strong>Personal Information collected:</strong> Version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
              </ul>
            </li>
            <li>
              <strong>Order information</strong>
              <ul>
                <li><strong>Purpose of collection:</strong> To provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                <li><strong>Source of collection:</strong> Collected from you.</li>
                <li><strong>Disclosure for a business purpose:</strong> Shared with our processor Shopify, payment gateways, and shipping companies.</li>
                <li><strong>Personal Information collected:</strong> Name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</li>
              </ul>
            </li>
            <li>
              <strong>Customer support information</strong>
              <ul>
                <li><strong>Purpose of collection:</strong> To provide customer support.</li>
                <li><strong>Source of collection:</strong> Collected from you.</li>
                <li><strong>Disclosure for a business purpose:</strong> [ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]</li>
                <li><strong>Personal Information collected:</strong> [ADD OR SUBTRACT INFORMATION AS NEEDED]</li>
              </ul>
            </li>
          </ul>

          <h2>Sharing Personal Information</h2>
          <p>
            We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:
          </p>
          <ul>
            <li>We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">https://www.shopify.com/legal/privacy</a>.</li>
            <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access the Personal Information we hold about you and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise this right, please contact us through the contact information below.
          </p>
          <p>
            Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
          </p>

          <h2>Contact</h2>
          <p>
            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at [EMAIL ADDRESS] or by mail using the details provided below:
          </p>
          <p>
            [FULL BUSINESS ADDRESS]
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

