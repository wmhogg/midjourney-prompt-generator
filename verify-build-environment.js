// Simple build environment verification script
const fs = require('fs');
const path = require('path');

function checkFileExists(filePath, required = true) {
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✅' : '❌'} ${filePath} ${exists ? 'exists' : 'is missing'}${required ? ' (REQUIRED)' : ' (optional)'}`);
  return exists;
}

console.log('🔍 Verifying build environment for Midjourney Prompt Generator');
console.log('=============================================================');

// Check essential directory structure
const directories = [
  { path: 'src', required: true },
  { path: 'public', required: true },
  { path: 'build', required: false },
  { path: 'node_modules', required: false }
];

console.log('\n📁 Checking directory structure:');
for (const dir of directories) {
  checkFileExists(dir.path, dir.required);
}

// Check essential files
const files = [
  { path: 'package.json', required: true },
  { path: 'src/index.js', required: true },
  { path: 'src/App.js', required: true },
  { path: 'public/index.html', required: true },
  { path: 'src/components/MidjourneyPromptBuilder.js', required: true }
];

console.log('\n📄 Checking essential files:');
for (const file of files) {
  checkFileExists(file.path, file.required);
}

// Check package.json contents
if (fs.existsSync('package.json')) {
  console.log('\n📦 Validating package.json:');
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  // Check scripts
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log(`✅ build script found: ${packageJson.scripts.build}`);
  } else {
    console.log('❌ build script missing in package.json (REQUIRED)');
  }
  
  // Check dependencies
  const requiredDeps = ['react', 'react-dom', 'react-scripts'];
  for (const dep of requiredDeps) {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`✅ ${dep} dependency found: ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep} dependency missing in package.json (REQUIRED)`);
    }
  }
}

console.log('\n=============================================================');
console.log('🔎 Verification complete. See above for any missing requirements.');
