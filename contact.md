---
layout: default
title: "Contact | GhostVector"
description: "Contact GhostVector for security research collaboration, responsible disclosure, or encrypted communications."
permalink: /contact/
---
<div style="padding-top: var(--nav-h);">
<section style="padding: 4rem 0;">
<div class="container" style="max-width: 720px;">

<span style="font-family:var(--font-mono);font-size:0.7rem;color:var(--green);text-transform:uppercase;letter-spacing:0.12em;">Contact</span>
<h1 style="font-family:var(--font-display);font-size:2.2rem;font-weight:700;color:var(--white);margin:1rem 0 0.5rem;">Contact</h1>
<p style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-2);margin-bottom:2.5rem;">For vulnerability reports, research collaboration, or tool feedback.</p>

<div class="cve-content">

<h2>Encrypted Contact (Preferred)</h2>
<p>For vulnerability disclosures and sensitive communications, please encrypt your message using my <a href="/pgp/">PGP public key</a> before sending.</p>

<h2>Contact Form</h2>

</div>

<form action="https://formspree.io/f/xkokzvpq" method="POST" style="display:flex;flex-direction:column;gap:1rem;margin-top:1.5rem;">
  <input type="hidden" name="_subject" value="Contact — GhostVector" />
  <div style="display:flex;flex-direction:column;gap:0.4rem;">
    <label style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);letter-spacing:0.05em;">Handle or Name</label>
    <input type="text" name="name" placeholder="Your handle or name" required style="background:var(--bg-card);border:1px solid var(--border);color:var(--text);border-radius:var(--radius);padding:0.65rem 0.85rem;font-family:var(--font-mono);font-size:0.85rem;outline:none;" />
  </div>
  <div style="display:flex;flex-direction:column;gap:0.4rem;">
    <label style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);letter-spacing:0.05em;">Email</label>
    <input type="email" name="email" placeholder="your@email.com" required style="background:var(--bg-card);border:1px solid var(--border);color:var(--text);border-radius:var(--radius);padding:0.65rem 0.85rem;font-family:var(--font-mono);font-size:0.85rem;outline:none;" />
  </div>
  <div style="display:flex;flex-direction:column;gap:0.4rem;">
    <label style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);letter-spacing:0.05em;">Subject</label>
    <select name="subject" style="background:var(--bg-card);border:1px solid var(--border);color:var(--text);border-radius:var(--radius);padding:0.65rem 0.85rem;font-family:var(--font-mono);font-size:0.85rem;outline:none;">
      <option value="">Select...</option>
      <option>Vulnerability Report</option>
      <option>Research Collaboration</option>
      <option>Tool Feedback</option>
      <option>CVE Discussion</option>
      <option>Other</option>
    </select>
  </div>
  <div style="display:flex;flex-direction:column;gap:0.4rem;">
    <label style="font-family:var(--font-mono);font-size:0.7rem;color:var(--text-3);letter-spacing:0.05em;">Message</label>
    <textarea name="message" rows="6" placeholder="Your message (encrypt with PGP for sensitive content)" required style="background:var(--bg-card);border:1px solid var(--border);color:var(--text);border-radius:var(--radius);padding:0.65rem 0.85rem;font-family:var(--font-mono);font-size:0.85rem;outline:none;resize:vertical;"></textarea>
  </div>
  <button type="submit" style="align-self:flex-start;background:var(--green);color:#000;border:none;font-family:var(--font-mono);font-weight:500;font-size:0.85rem;padding:0.65rem 1.5rem;border-radius:var(--radius);cursor:pointer;">Send Message →</button>
</form>

<p style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-3);margin-top:1.5rem;">
  GitHub: <a href="https://github.com/0xGhostVector" target="_blank" rel="noopener">github.com/0xGhostVector ↗</a>
</p>

</div>
</section>
</div>
