// nav.js — injects consistent sidebar navigation on every page
(function() {
  const terms = [
    { id: 'www',    label: 'World Wide Web',           icon: '🌐', file: 'www.html' },
    { id: 'tcpip',  label: 'TCP/IP',                   icon: '🔗', file: 'tcpip.html' },
    { id: 'browser',label: 'Web Browsers',             icon: '🖥️', file: 'browser.html' },
    { id: 'server', label: 'Web Servers',              icon: '🗄️', file: 'server.html' },
    { id: 'url',    label: 'URLs',                     icon: '📎', file: 'url.html' },
    { id: 'dns',    label: 'Domain Name Server',       icon: '📡', file: 'dns.html' },
    { id: 'http',   label: 'HTTP',                     icon: '↔️', file: 'http.html' },
    { id: 'intranet',label: 'Intranet',                icon: '🏢', file: 'intranet.html' },
    { id: 'extranet',label: 'Extranet',                icon: '🤝', file: 'extranet.html' },
    { id: 'multitier',label: 'Multitier Architecture', icon: '🏗️', file: 'multitier.html' },
    { id: 'ftp',    label: 'File Transfer Protocol',   icon: '📁', file: 'ftp.html' },
    { id: 'html',   label: 'HTML',                     icon: '📝', file: 'html.html' },
    { id: 'web10',  label: 'Web 1.0',                  icon: '1️⃣', file: 'web10.html' },
    { id: 'web20',  label: 'Web 2.0',                  icon: '2️⃣', file: 'web20.html' },
    { id: 'web30',  label: 'Web 3.0',                  icon: '3️⃣', file: 'web30.html' },
    { id: 'web40',  label: 'Web 4.0',                  icon: '4️⃣', file: 'web40.html' },
  ];

  // Determine path prefix based on current page location
  const inPages = window.location.pathname.includes('/pages/');
  const prefix  = inPages ? '' : 'pages/';
  const homeHref = inPages ? '../index.html' : 'index.html';

  // Determine active page
  const currentFile = window.location.pathname.split('/').pop();

  const sidebar = document.createElement('nav');
  sidebar.className = 'sidebar';
  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <span>Internet Terminology</span>
      <small>Topic 1 Reference Guide</small>
    </div>
    <div class="nav-section">
      <div class="nav-section-label">Home</div>
      <a class="nav-link ${currentFile === 'index.html' || currentFile === '' ? 'active' : ''}" href="${homeHref}">🏠 Overview</a>
    </div>
    <div class="nav-section" style="flex:1">
      <div class="nav-section-label">All Terms</div>
      ${terms.map(t => `<a class="nav-link ${currentFile === t.file ? 'active' : ''}" href="${prefix}${t.file}">${t.icon} ${t.label}</a>`).join('')}
    </div>
  `;

  document.body.insertBefore(sidebar, document.body.firstChild);
})();
