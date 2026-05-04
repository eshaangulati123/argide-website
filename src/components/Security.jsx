export default function Security() {
  return (
    <main className="policy-page security-page">
      <div
        className="security-hero-image"
        role="img"
        aria-label="Argide trust and security"
      >
        <div className="security-hero-overlay">
          <a href="/" className="policy-back-link">← Back to home</a>
          <span className="mono-label">Trust</span>
          <h1 className="policy-title">Security and privacy at Argide</h1>
          <p className="policy-org">
            Security is at the heart of what we do—helping our customers automate critical
            customer-service workflows starts with earning their trust in how we handle their data
            and ours.
          </p>
        </div>
      </div>
      <div className="policy-container">

        <section className="policy-section">
          <h2>Governance</h2>
          <p>
            Argide&rsquo;s Security and Privacy functions establish policies and controls, monitor
            compliance with those controls, and prove our security posture to independent
            third-party auditors.
          </p>
          <p>Our policies are based on the following foundational principles:</p>
          <ol className="security-principles">
            <li>
              <span className="security-principle-num">01.</span>
              Access is limited to those with a legitimate business need and granted based on the
              principle of least privilege.
            </li>
            <li>
              <span className="security-principle-num">02.</span>
              Security controls are implemented and layered according to the principle of
              defense-in-depth.
            </li>
            <li>
              <span className="security-principle-num">03.</span>
              Security controls are applied consistently across all areas of the company.
            </li>
            <li>
              <span className="security-principle-num">04.</span>
              The implementation of controls is iterative—continuously maturing across
              effectiveness, auditability, and reduced friction for engineers and customers.
            </li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Compliance</h2>
          <p>
            Argide maintains a SOC 2 Type II attestation covering the Security trust services
            criteria. Our SOC 2 Type II report is available under NDA on request to current and
            prospective customers.
          </p>
          <div className="security-badge-row">
            <div className="security-badge-card">
              <img
                src="/compliance/soc2-type2.webp"
                alt="SOC 2 Type II"
                className="security-badge-img"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="security-badge-title">SOC 2 Type II</div>
                <div className="security-badge-sub">Audited by an independent CPA firm</div>
              </div>
            </div>
          </div>
          <p>
            To request our latest report, please contact{' '}
            <a className="security-link" href="mailto:support@argide.ai">
              support@argide.ai
            </a>
            .
          </p>
        </section>

        <section className="policy-section">
          <h2>Data protection</h2>

          <h3 className="security-subhead">Data at rest</h3>
          <p>
            All datastores containing customer data, including managed databases and object storage,
            are encrypted at rest using AES-256. Sensitive fields—such as authentication credentials
            and integration tokens for connected helpdesks and APIs—are additionally protected with
            application-layer encryption, so neither physical nor logical database access alone is
            sufficient to read them.
          </p>

          <h3 className="security-subhead">Data in transit</h3>
          <p>
            Argide uses TLS 1.2 or higher anywhere data is transmitted over untrusted networks. We
            enable HTTP Strict Transport Security (HSTS) on all customer-facing endpoints. Server
            TLS certificates are managed by our cloud provider and terminated at managed load
            balancers.
          </p>

          <h3 className="security-subhead">Secret management</h3>
          <p>
            Encryption keys are managed via our cloud provider&rsquo;s Key Management Service.
            Key material is stored in FIPS 140-2 validated hardware security modules and is never
            directly accessible to Argide employees. Application secrets are stored in a managed
            secrets manager with strict access controls and full audit logging.
          </p>

          <h3 className="security-subhead">Customer data isolation</h3>
          <p>
            Customer data is logically isolated by tenant. Argide enforces tenant scoping at the
            application layer and validates this with automated tests on every change to data-access
            code paths.
          </p>
        </section>

        <section className="policy-section">
          <h2>Product security</h2>

          <h3 className="security-subhead">Penetration testing</h3>
          <p>
            Argide engages an independent security firm to perform a penetration test of the
            production application and supporting infrastructure at least annually. Source code is
            made available to testers to maximize coverage. A summary of the most recent
            penetration test report is available under NDA on request.
          </p>

          <h3 className="security-subhead">Vulnerability management</h3>
          <p>Argide enforces vulnerability scanning at key stages of our Secure Development Lifecycle:</p>
          <ul className="policy-list">
            <li>Static analysis (SAST) of code on every pull request and on a continuous schedule.</li>
            <li>Software composition analysis (SCA) to detect known vulnerabilities in third-party dependencies.</li>
            <li>Container image scanning of every artifact built by our CI pipeline before it is eligible for deployment.</li>
            <li>Dynamic analysis (DAST) of running applications in staging environments.</li>
            <li>Continuous external attack-surface monitoring of all internet-facing assets.</li>
          </ul>

          <h3 className="security-subhead">Secure development</h3>
          <p>
            All changes to production systems follow Argide&rsquo;s Change Control Policy. Significant
            changes require independent code review and may not be merged by their author. Branch
            protection rules technically enforce required reviewers, passing tests, and passing
            security checks. The full policy is available{' '}
            <a className="security-link" href="/change-control-policy">here</a>.
          </p>

          <h3 className="security-subhead">AI safety and evaluation</h3>
          <p>
            Argide is an AI-native product, and our security program treats model behavior as a
            first-class component of product security. Every release of the Argide AI Engine&trade;
            is evaluated against a regression suite of safety, accuracy, and policy-adherence tests
            before it is eligible for promotion to production. Customer policies and procedures
            constrain the actions an agent is permitted to take on a customer&rsquo;s product.
          </p>
        </section>

        <section className="policy-section">
          <h2>Enterprise security</h2>

          <h3 className="security-subhead">Endpoint protection</h3>
          <p>
            All corporate devices are centrally managed via a mobile device management (MDM)
            platform. We enforce full-disk encryption, screen-lock requirements, automatic OS
            updates, and endpoint detection and response (EDR) software on every employee device.
          </p>

          <h3 className="security-subhead">Identity and access management</h3>
          <p>
            Argide uses single sign-on for all internal applications wherever supported. Multi-factor
            authentication is required for every employee account, and we prefer phishing-resistant
            authenticators (WebAuthn / hardware security keys) for access to production systems.
            Access is granted based on role and is automatically revoked when an employee&rsquo;s
            employment ends. Production access is reviewed at least quarterly.
          </p>

          <h3 className="security-subhead">Secure remote access</h3>
          <p>
            Argide is a remote-first company. Access to internal systems and the production
            environment is mediated through an authenticated zero-trust network overlay rather than
            a flat corporate VPN, with device posture checks enforced at every connection.
          </p>

          <h3 className="security-subhead">Vendor security</h3>
          <p>
            Argide takes a risk-based approach to vendor security. Factors that influence the risk
            rating of a vendor include access to customer data, integration with our production
            environment, and the sensitivity of any data shared with the vendor. New vendors are
            reviewed by Security before procurement, and high-risk vendors are reviewed at least
            annually thereafter.
          </p>

          <h3 className="security-subhead">Security education</h3>
          <p>
            All employees complete security training during onboarding and on at least an annual
            cadence thereafter. Engineers receive additional training on secure coding practices,
            and the Security team distributes regular threat briefings on emerging risks relevant
            to our environment.
          </p>
        </section>

        <section className="policy-section">
          <h2>Incident response</h2>
          <p>
            Argide maintains a documented Incident Response Plan that defines roles, severity
            classifications, communication procedures, and post-incident review requirements.
            Production systems and security signals are monitored continuously, with on-call
            coverage for high-severity events.
          </p>
          <p>
            In the event of a security incident affecting customer data, Argide will notify
            affected customers without undue delay and in accordance with the commitments in our
            Data Processing Addendum.
          </p>
          <p>
            To report a suspected vulnerability or security incident, please contact{' '}
            <a className="security-link" href="mailto:support@argide.ai">
              support@argide.ai
            </a>
            .
          </p>
        </section>

        <section className="policy-section">
          <h2>Data privacy</h2>
          <p>
            Argide acts as a data processor for customer data submitted to the platform and is
            committed to handling personal data in accordance with applicable privacy laws,
            including the GDPR and CCPA. We offer a Data Processing Addendum (DPA) to all customers
            on request.
          </p>
          <ul className="policy-list">
            <li>Privacy Policy &mdash; available at <a className="security-link" href="/privacy">/privacy</a>.</li>
            <li>Data Processing Addendum (DPA) &mdash; available on request to <a className="security-link" href="mailto:support@argide.ai">support@argide.ai</a>.</li>
            <li>Subprocessor list &mdash; available on request and updated when material changes occur.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Service availability</h2>
          <p>
            Argide&rsquo;s production infrastructure runs on hyperscale cloud providers across
            multiple availability zones. Service health is published in real time at our{' '}
            <a
              className="security-link"
              href="https://stats.uptimerobot.com/WXUivgIFAV"
              target="_blank"
              rel="noopener noreferrer"
            >
              status page
            </a>
            .
          </p>
        </section>

        <section className="policy-section">
          <h2>Ownership and review</h2>
          <p>
            This page is owned by Argide&rsquo;s Security and Compliance function and is reviewed at
            least annually, or whenever there is a material change to our practices, audits, or
            policies. Questions and security inquiries can be directed to{' '}
            <a className="security-link" href="mailto:support@argide.ai">
              support@argide.ai
            </a>
            .
          </p>
          <p className="security-meta">
            Last reviewed: May 2026 &middot; Excatalyst, Inc. (d/b/a Argide)
          </p>
        </section>
      </div>
    </main>
  );
}
