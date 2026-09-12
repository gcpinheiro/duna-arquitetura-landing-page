import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  use: {
    baseURL: 'http://127.0.0.1:4203',
    launchOptions: { executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' },
  },
  webServer: {
    command:
      'python -m http.server 4203 --bind 127.0.0.1 --directory dist/duna-arquitetura-landing-page/browser',
    url: 'http://127.0.0.1:4203',
    reuseExistingServer: false,
  },
});
