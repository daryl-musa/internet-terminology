# Git Commit Guide — 20+ Commits Checklist

Use these commands after setting up your GitHub repository.

## Initial Setup

```bash
# 1. Create repo on GitHub (github.com → New Repository → "internet-terminology")
# 2. Clone it locally:
git clone https://github.com/YOUR_USERNAME/internet-terminology.git
cd internet-terminology

# 3. Copy all project files into this folder, then:
git add README.md
git commit -m "Initial commit: Add README and project overview"
git push
```

## Suggested 20+ Commit Sequence

```bash
# Commit 2
git add style.css
git commit -m "Add shared stylesheet with dark theme and sidebar navigation"
git push

# Commit 3
git add nav.js
git commit -m "Add shared navigation JS — injects sidebar on every page"
git push

# Commit 4
git add index.html
git commit -m "Add homepage with term overview grid"
git push

# Commit 5
git add pages/www.html
git commit -m "Add World Wide Web (WWW) term page"
git push

# Commit 6
git add pages/tcpip.html
git commit -m "Add TCP/IP term page with four-layer model diagram"
git push

# Commit 7
git add pages/browser.html
git commit -m "Add Web Browsers term page"
git push

# Commit 8
git add pages/server.html
git commit -m "Add Web Servers term page with request-response diagram"
git push

# Commit 9
git add pages/url.html
git commit -m "Add URL term page with anatomy diagram"
git push

# Commit 10
git add pages/dns.html
git commit -m "Add DNS term page with resolution chain diagram"
git push

# Commit 11
git add pages/http.html
git commit -m "Add HTTP term page with methods and status codes"
git push

# Commit 12
git add pages/intranet.html
git commit -m "Add Intranet term page with firewall diagram"
git push

# Commit 13
git add pages/extranet.html
git commit -m "Add Extranet term page with partner access diagram"
git push

# Commit 14
git add pages/multitier.html
git commit -m "Add Multitier Architecture term page with 3-tier diagram"
git push

# Commit 15
git add pages/ftp.html
git commit -m "Add FTP term page with client-server transfer diagram"
git push

# Commit 16
git add pages/html.html
git commit -m "Add HTML term page with code syntax diagram"
git push

# Commit 17
git add pages/web10.html
git commit -m "Add Web 1.0 term page — static/read-only web era"
git push

# Commit 18
git add pages/web20.html
git commit -m "Add Web 2.0 term page — social and participatory web"
git push

# Commit 19
git add pages/web30.html
git commit -m "Add Web 3.0 term page — semantic and decentralised web"
git push

# Commit 20
git add pages/web40.html
git commit -m "Add Web 4.0 term page — symbiotic and intelligent web"
git push

# Commit 21
git add images/
git commit -m "Add images folder for project assets"
git push

# Commit 22 — after any refinements
git add -A
git commit -m "Refine navigation active states and typography"
git push

# Commit 23 — final check
git add -A
git commit -m "Final review: verify all 16 pages interlinked and consistent"
git push
```

## Verify commit count
git log --oneline | wc -l
```
