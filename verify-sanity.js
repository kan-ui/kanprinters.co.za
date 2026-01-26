/**
 * Sanity CMS Verification Script
 * Run this after installing packages: node verify-sanity.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Sanity CMS Setup...\n');

let errors = [];
let warnings = [];
let success = [];

// Check package.json
console.log('📦 Checking package.json...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredPackages = [
  '@sanity/client',
  '@sanity/image-url',
  '@sanity/vision',
  'next-sanity',
  'sanity'
];

requiredPackages.forEach(pkg => {
  if (packageJson.dependencies[pkg] || packageJson.devDependencies[pkg]) {
    success.push(`✓ ${pkg} is in package.json`);
  } else {
    errors.push(`✗ ${pkg} is MISSING from package.json`);
  }
});

// Check if node_modules exists
console.log('\n📁 Checking node_modules...');
if (fs.existsSync('node_modules/@sanity')) {
  success.push('✓ Sanity packages are installed');
} else {
  warnings.push('⚠ Sanity packages are NOT installed - run: npm install');
}

// Check configuration files
console.log('\n⚙️  Checking configuration files...');
const configFiles = [
  'sanity.config.ts',
  'src/lib/sanity.client.ts',
  'src/lib/sanity.image.ts',
  'src/lib/sanity.queries.ts',
  'src/lib/sanity.api.ts',
  'src/app/studio/[[...index]]/page.tsx'
];

configFiles.forEach(file => {
  if (fs.existsSync(file)) {
    success.push(`✓ ${file} exists`);
  } else {
    errors.push(`✗ ${file} is MISSING`);
  }
});

// Check schema files
console.log('\n📋 Checking schema files...');
const schemaFiles = [
  'sanity/schemas/index.ts',
  'sanity/schemas/service.ts',
  'sanity/schemas/portfolio.ts',
  'sanity/schemas/testimonial.ts',
  'sanity/schemas/faq.ts',
  'sanity/schemas/teamMember.ts',
  'sanity/schemas/value.ts',
  'sanity/schemas/siteSettings.ts',
  'sanity/schemas/contactInfo.ts',
  'sanity/schemas/socialMedia.ts',
  'sanity/schemas/heroSection.ts',
  'sanity/schemas/companyHistory.ts',
  'sanity/schemas/ctaSection.ts'
];

schemaFiles.forEach(file => {
  if (fs.existsSync(file)) {
    success.push(`✓ ${file} exists`);
  } else {
    errors.push(`✗ ${file} is MISSING`);
  }
});

// Check environment file
console.log('\n🔐 Checking environment configuration...');
if (fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  if (envContent.includes('NEXT_PUBLIC_SANITY_PROJECT_ID')) {
    success.push('✓ .env.local exists with SANITY_PROJECT_ID');
  } else {
    warnings.push('⚠ .env.local exists but missing NEXT_PUBLIC_SANITY_PROJECT_ID');
  }
} else {
  warnings.push('⚠ .env.local not found - create it with your Sanity credentials');
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(50));

if (success.length > 0) {
  console.log('\n✅ SUCCESS:');
  success.forEach(msg => console.log('  ' + msg));
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(msg => console.log('  ' + msg));
}

if (errors.length > 0) {
  console.log('\n❌ ERRORS:');
  errors.forEach(msg => console.log('  ' + msg));
}

console.log('\n' + '='.repeat(50));

if (errors.length === 0) {
  console.log('✅ All critical files are in place!');
  if (warnings.length > 0) {
    console.log('⚠️  Please address the warnings above.');
  }
} else {
  console.log('❌ Please fix the errors above.');
  process.exit(1);
}
