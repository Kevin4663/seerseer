import { defineConfig } from 'wxt';

// See https://wxt.dev/api/reference/wxt/interfaces/inlineconfig.html
export default defineConfig({
  manifest: {
    name: 'seerseer',
    description: 'Local-first real-time marketplace valuation and safety copilot',
    version: '0.1.0',
    permissions: ['storage', 'activeTab'],
    host_permissions: [
      'http://localhost:11434/*',
      'https://*.facebook.com/marketplace/*',
      'https://*.craigslist.org/*'
    ],
  },
});
