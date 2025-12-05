#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const PREFIX_LOG = '[app-sandbox-react] ';

const logger = {
  error: (message) => {
    console.error(`${PREFIX_LOG} ${message}`);
  },
  info: (message) => {
    console.info(`${PREFIX_LOG} ${message}`);
  },
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, 'dist', 'assets');

// Find the main JS bundle file
const files = readdirSync(distPath);
const jsFile = files.find(
  (file) => file.startsWith('index-') && file.endsWith('.js'),
);

if (!jsFile) {
  logger.error('❌ Error: Could not find bundled JS file in dist/assets');
  process.exit(1);
}

const bundlePath = join(distPath, jsFile);
const bundleContent = readFileSync(bundlePath, 'utf-8');

logger.info(`Verifying tree-shaking for bundle: ${jsFile}`);

// Positive checks - these SHOULD be in the bundle
const requiredPatterns = [
  {
    name: 'Button component',
    pattern: /["']Button["']/,
  },
  {
    name: 'Incognito symbol',
    pattern: /["']Incognito["']/,
  },
];

// Negative checks - these SHOULD NOT be in the bundle
// Using a subset of other components and symbols to verify tree-shaking
// Simplified patterns that work with minified code
const excludedPatterns = [
  // Other components
  { name: 'Switch component', pattern: /["']Switch["']/ },
  { name: 'Checkbox component', pattern: /["']Checkbox["']/ },
  { name: 'TextInput component', pattern: /["']TextInput["']/ },
  { name: 'Select component', pattern: /["']Select["']/ },
  { name: 'Dialog component', pattern: /["']Dialog["']/ },
  { name: 'Tooltip component', pattern: /["']Tooltip["']/ },
  { name: 'AmountInput component', pattern: /["']AmountInput["']/ },
  { name: 'AddressInput component', pattern: /["']AddressInput["']/ },
  { name: 'ListItem component', pattern: /["']ListItem["']/ },
  { name: 'Tag component', pattern: /["']Tag["']/ },
  // Other symbols that should not be included
  { name: 'Airplane symbol', pattern: /["']Airplane["']/ },
  { name: 'Android symbol', pattern: /["']Android["']/ },
  { name: 'Apple symbol', pattern: /["']Apple["']/ },
  { name: 'Calendar symbol', pattern: /["']Calendar["']/ },
  { name: 'Cart symbol', pattern: /["']Cart["']/ },
  { name: 'Wallet symbol', pattern: /["']Wallet["']/ },
  { name: 'Settings symbol', pattern: /["']Settings["']/ },
  { name: 'Github symbol', pattern: /["']Github["']/ },
  { name: 'Twitter symbol', pattern: /["']Twitter["']/ },
  { name: 'Discord symbol', pattern: /["']Discord["']/ },
  { name: 'Facebook symbol', pattern: /["']Facebook["']/ },
];

let hasErrors = false;

// Check required patterns
for (const { name, pattern } of requiredPatterns) {
  const found = pattern.test(bundleContent);
  if (!found) {
    logger.error(`❌ ${name} NOT FOUND - this is required!`);
    hasErrors = true;
  }
}

// Check excluded patterns
const foundUnwanted = [];
for (const { name, pattern } of excludedPatterns) {
  const found = pattern.test(bundleContent);
  if (found) {
    foundUnwanted.push(name);
    logger.error(`  ✗ ${name} found in bundle (should be tree-shaken)`);
    hasErrors = true;
  }
}

if (foundUnwanted.length === 0) {
  logger.info('No unwanted components/symbols found');
}

// Summary
if (hasErrors) {
  logger.error(' FAILED: Tree-shaking verification failed');
  if (foundUnwanted.length > 0) {
    logger.error(`Found ${foundUnwanted.length} unwanted items in bundle:`);
    logger.error(`${foundUnwanted.join(', ')}`);
  }
  process.exit(1);
} else {
  logger.info('✅ SUCCESS: Tree-shaking working correctly!');
  process.exit(0);
}
