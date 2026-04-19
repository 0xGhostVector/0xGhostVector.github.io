---
layout: default
title: "PGP Key | GhostVector"
description: "GhostVector PGP public key for encrypted communications."
permalink: /pgp/
---
<div style="padding-top: var(--nav-h);">
<section style="padding: 4rem 0;">
<div class="container" style="max-width: 720px;">

<span style="font-family:var(--font-mono);font-size:0.7rem;color:var(--green);text-transform:uppercase;letter-spacing:0.12em;">Encryption</span>
<h1 style="font-family:var(--font-display);font-size:2.2rem;font-weight:700;color:var(--white);margin:1rem 0 0.5rem;">PGP Public Key</h1>
<p style="font-family:var(--font-mono);font-size:0.85rem;color:var(--text-2);margin-bottom:2rem;">Use this key to encrypt sensitive communications, vulnerability reports, or responsible disclosure submissions.</p>

<div class="cve-content">

<h2>How to Use</h2>

<p>Import the key below into your PGP client (GPG, Kleopatra, etc.):</p>

<pre><code># Import via command line
gpg --import ghostvector-public.asc

# Or import directly from keyserver (once uploaded)
gpg --keyserver keys.openpgp.org --recv-keys YOUR_KEY_ID</code></pre>

<h2>Generating Your PGP Key (Setup Guide)</h2>

<p>To generate your own PGP key on Ubuntu:</p>

<pre><code># Install GPG
sudo apt install gnupg

# Generate new key (use your research email)
gpg --full-generate-key
# Choose: RSA and RSA → 4096 bits → 2 years expiry

# List your keys
gpg --list-secret-keys --keyid-format LONG

# Export public key
gpg --armor --export YOUR_KEY_ID > ghostvector-public.asc

# View your fingerprint
gpg --fingerprint YOUR_KEY_ID</code></pre>

<h2>Upload to Keyserver</h2>

<pre><code># Upload to public keyserver
gpg --keyserver keys.openpgp.org --send-keys YOUR_KEY_ID</code></pre>

<h2>Public Key</h2>
<p style="font-family:var(--font-mono);font-size:0.8rem;color:var(--amber);margin-bottom:1rem;">⚠ Add your generated public key block here after setup.</p>

<div class="pgp-block">
<pre>-----BEGIN PGP PUBLIC KEY BLOCK-----

[ Add your PGP public key here after generating it.
  Run: gpg --armor --export YOUR_KEY_ID
  Then paste the output between these markers. ]

-----END PGP PUBLIC KEY BLOCK-----</pre>
</div>

<h3>Key Details</h3>
<ul>
  <li><strong>Handle:</strong> GhostVector</li>
  <li><strong>Email:</strong> [your research email]</li>
  <li><strong>Algorithm:</strong> RSA 4096</li>
  <li><strong>Fingerprint:</strong> [add after generation]</li>
</ul>

</div>
</div>
</section>
</div>
