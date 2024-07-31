import { PlaywrightTestConfig, defineConfig, devices } from "playwright/test";  
export default defineConfig({
    testDir: './e2e/src/tests',
    timeout: 30000,
    maxFailures:0,
    workers:1,
    reporter: 'html',
    use:{
        headless:true,
        screenshot: "on",
        video: "off",
        baseURL: 'https://accessintegra.com/',
        trace: 'on-first-retry',
        launchOptions: {
            args:["--start-maximized"]
        }
    },
    projects:[
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'],
            viewport: { width:1912, height: 958}
            },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'],
            viewport: { width:1912, height: 958}
            },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'],
            viewport: { width:1912, height: 958}
            },
        },
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge'},
            },
    ],
});