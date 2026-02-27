import Typography from "@/lib/typography";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#090d12] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-24">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <Typography
            variant="display-2xl"
            className="font-cinzel text-white mb-4 sm:mb-6 text-center lg:text-left"
          > 
            Privacy Policy
          </Typography>

          <Typography
            variant="body-lg"
            className="font-poppins text-white/70 text-sm sm:text-base lg:text-lg"
          >
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </div>

        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {/* Introduction */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              1. Introduction
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              VRM Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </Typography>
          </section>

          {/* Information We Collect */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              2. Information We Collect
            </Typography>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <Typography
                  variant="h3"
                  className="font-cinzel text-white mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl"
                >
                  2.1 Personal Information
                </Typography>
                <Typography
                  variant="body-lg"
                  className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 max-w-4xl"
                >
                  We may collect personal information that you voluntarily provide to us when you:
                </Typography>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4 sm:ml-6 text-white/80 text-sm sm:text-base lg:text-lg">
                  <li>Fill out contact forms or enquiry forms</li>
                  <li>Request information about our services</li>
                  <li>Interact with our website features</li>
                </ul>
                <Typography
                  variant="body-lg"
                  className="font-poppins text-white/80 leading-relaxed mt-4 text-sm sm:text-base lg:text-lg max-w-4xl"
                >
                  This information may include your name, email address, phone number, postal address, and any other information you choose to provide.
                </Typography>
              </div>

              <div>
                <Typography
                  variant="h3"
                  className="font-cinzel text-white mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl"
                >
                  2.2 Automatically Collected Information
                </Typography>
                <Typography
                  variant="body-lg"
                  className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 max-w-4xl"
                >
                  When you visit our website, we may automatically collect certain information about your device, including:
                </Typography>
                <ul className="list-disc list-inside mt-2 space-y-2 ml-4 sm:ml-6 text-white/80 text-sm sm:text-base lg:text-lg">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages you visit and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Date and time of your visit</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              3. How We Use Your Information
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              We use the information we collect to:
            </Typography>
            <ul className="list-disc list-inside space-y-2 ml-4 sm:ml-6 text-white/80 text-sm sm:text-base lg:text-lg">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services, products, and updates</li>
              <li>Improve our website and user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
              <li>Process transactions and manage business relationships</li>
            </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              4. Information Sharing and Disclosure
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </Typography>
            <ul className="list-disc list-inside space-y-3 ml-4 sm:ml-6 text-white/80 text-sm sm:text-base lg:text-lg">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email delivery, hosting, and analytics.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              5. Data Security
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </Typography>
          </section>

          {/* Your Rights */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              6. Your Rights
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              Depending on your location, you may have certain rights regarding your personal information, including:
            </Typography>
            <ul className="list-disc list-inside space-y-2 ml-4 sm:ml-6 text-white/80 text-sm sm:text-base lg:text-lg">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed mt-4 text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </Typography>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              7. Cookies and Tracking Technologies
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </Typography>
          </section>

          {/* Third-Party Links */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              8. Third-Party Links
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </Typography>
          </section>

          {/* Children's Privacy */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              9. Children's Privacy
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </Typography>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="border-b border-white/10 pb-8 sm:pb-10 lg:pb-12">
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              10. Changes to This Privacy Policy
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </Typography>
          </section>

          {/* Contact Us */}
          <section>
            <Typography
              variant="h2"
              className="font-cinzel text-white mb-5 sm:mb-6 text-xl sm:text-2xl lg:text-3xl"
            >
              11. Contact Us
            </Typography>
            <Typography
              variant="body-lg"
              className="font-poppins text-white/80 leading-relaxed mb-6 text-sm sm:text-base lg:text-lg max-w-4xl"
            >
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </Typography>
            <div className="bg-[#0d0d0d]/50 rounded-lg p-6 sm:p-8 lg:p-10 space-y-3 sm:space-y-4 max-w-2xl">
              <Typography
                variant="body-lg"
                className="font-poppins text-white text-base sm:text-lg lg:text-xl"
              >
                <strong>VRM Group</strong>
              </Typography>
              <Typography
                variant="body-lg"
                className="font-poppins text-white/80 text-sm sm:text-base lg:text-lg"
              >
                Grace City, Hindupur Road, Palasamudram
              </Typography>
              <Typography
                variant="body-lg"
                className="font-poppins text-white/80 text-sm sm:text-base lg:text-lg"
              >
                Andhra Pradesh 515241, India
              </Typography>
              <Typography
                variant="body-lg"
                className="font-poppins text-white/80 text-sm sm:text-base lg:text-lg"
              >
                Email: <a href="/contact" className="text-white underline hover:text-white/80 transition-colors">Contact Us</a>
              </Typography>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
