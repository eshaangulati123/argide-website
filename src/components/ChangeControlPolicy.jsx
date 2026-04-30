export default function ChangeControlPolicy() {
  return (
    <main className="policy-page">
      <div className="policy-container">
        <a href="/" className="policy-back-link">← Back to home</a>

        <header className="policy-header">
          <span className="mono-label">Policy</span>
          <h1 className="policy-title">Change Control Policy</h1>
          <p className="policy-org">Excatalyst, Inc.</p>
        </header>

        <section className="policy-section">
          <h2>Policy Statement</h2>
          <p>
            Changes to systems within the development lifecycle shall be controlled through formal change control procedures. Change control procedures and requirements are described in the Excatalyst, Inc. Operations Security Policy.
          </p>
          <p>
            Significant code changes must be reviewed and approved before being merged into any production branch, in accordance with the process found here: <span className="policy-placeholder">{'{link to process outline in company wiki}'}</span>.
          </p>
        </section>

        <section className="policy-section">
          <h2>Definition of a Significant Change</h2>
          <p>
            For the purposes of this policy, a &ldquo;significant code change&rdquo; is any change that meets one or more of the following criteria:
          </p>
          <ul className="policy-list">
            <li>Modifies or introduces functionality affecting authentication, authorization, encryption, secrets management, or data handling of customer or production data.</li>
            <li>Alters production infrastructure, deployment configuration, networking rules, or third-party integrations.</li>
            <li>Changes database schemas, data migrations, or any code path executed against production data stores.</li>
            <li>Adds, upgrades, or removes a third-party dependency, library, or service.</li>
            <li>Modifies the build, test, release, or branch-protection pipeline itself.</li>
            <li>Affects more than a single isolated module or exceeds an engineering-defined size threshold (e.g., &gt;400 lines changed).</li>
          </ul>
          <p>
            Routine, low-risk changes (such as documentation updates, copy edits, internal tooling tweaks, or test-only changes) are not considered significant and follow the standard pull-request review process, but remain subject to the merge requirements and branch protection rules below.
          </p>
        </section>

        <section className="policy-section">
          <h2>Reviewer Requirements</h2>
          <ul className="policy-list">
            <li>All significant code changes require approval from both the Chief Executive Officer (CEO) and the Chief Technology Officer (CTO), or their formally designated alternates.</li>
            <li>A minimum of two (2) approving reviewers is required before any merge to a production branch.</li>
            <li>The author of a change shall not count toward the required reviewer quorum for that change.</li>
            <li>If either the CEO or CTO is unavailable, an alternate may approve in their place only if that alternate is named in the current Change Approval Roster maintained by the Security and Compliance team. Approval by an undesignated reviewer is not permitted.</li>
            <li>The current holders of the CEO and CTO roles, and their designated alternates, are tracked in a separate, regularly reviewed Change Approval Roster document and not within this policy.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Merge Requirements</h2>
          <p>Code may only be merged into a production branch after it has:</p>
          <ul className="policy-list">
            <li>Passed all required unit tests, as enforced by the continuous integration (CI) pipeline; and</li>
            <li>Passed all required code quality checks, including linting, static analysis, and any security scans configured for the repository.</li>
          </ul>
          <p>
            Merges that bypass these checks (for example, via administrator override) are prohibited except in declared emergency change scenarios, which must be documented and reviewed retroactively.
          </p>
        </section>

        <section className="policy-section">
          <h2>Branch Protection</h2>
          <ul className="policy-list">
            <li>Force pushes to master and any other designated production branches are strictly prohibited.</li>
            <li>Branch protection rules shall be configured in the source control system to enforce this restriction technically, in addition to its statement as policy. This includes requiring pull requests, blocking force pushes, blocking direct pushes, and requiring status checks to pass before merging.</li>
            <li>Branch protection settings shall be reviewed at least annually and after any change to the source control platform or its administrators.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Separation of Duties</h2>
          <p>
            Change control procedures shall ensure that the development, testing, and deployment of changes are not performed by a single individual without independent approval and oversight. No single person shall be able to author, approve, and deploy a significant change unilaterally.
          </p>
        </section>

        <section className="policy-section">
          <h2>Exceptions and Emergency Changes</h2>
          <p>
            Emergency changes (for example, in response to a live incident or security vulnerability) may be deployed with reduced review on the explicit authorization of the CEO or CTO, provided that:
          </p>
          <ul className="policy-list">
            <li>The justification, scope, and authorizing approver are recorded at the time of the change; and</li>
            <li>A full retrospective review, including the standard reviewer requirements, is completed within five (5) business days of the change.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Policy Ownership and Review</h2>
          <p>
            This policy is owned by the Security and Compliance team and shall be reviewed at least annually, or upon any material change to the development lifecycle, source control platform, or organizational roles referenced herein.
          </p>
        </section>
      </div>
    </main>
  );
}
