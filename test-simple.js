// Простой тест FELD без userface
console.log('=== ПРОСТОЙ ТЕСТ FELD ===\n');

// 1. Проверяем структуру проекта
const fs = require('fs');
const path = require('path');

console.log('1. Проверка структуры проекта...');

const components = [
  'Button', 'Input', 'Text', 'Card', 'CardCart', 'Checkbox', 'Code',
  'Container', 'Feed', 'Filter', 'Footer', 'Form', 'Image', 'Layout',
  'Link', 'List', 'Media', 'Modal', 'Panel', 'Progress', 'Radio',
  'Select', 'Side', 'Slider', 'Table', 'Tabs', 'Textarea'
];

console.log('Компоненты FELD:', components.length);
components.forEach(component => {
  const componentPath = path.join(__dirname, component, `${component}.tsx`);
  if (fs.existsSync(componentPath)) {
    console.log(`✅ ${component} - существует`);
  } else {
    console.log(`❌ ${component} - НЕ существует`);
  }
});

// 2. Проверяем package.json
console.log('\n2. Проверка package.json...');
const packageJson = require('./package.json');
console.log('Имя:', packageJson.name);
console.log('Версия:', packageJson.version);
console.log('Зависимости:', Object.keys(packageJson.dependencies || {}));

// 3. Проверяем register.ts
console.log('\n3. Проверка register.ts...');
const registerPath = path.join(__dirname, 'register.ts');
if (fs.existsSync(registerPath)) {
  console.log('✅ register.ts существует');
  const content = fs.readFileSync(registerPath, 'utf8');
  console.log('Размер файла:', content.length, 'символов');
  console.log('Импорты userface:', content.includes('userface') ? '✅' : '❌');
  console.log('Импорты engine:', content.includes('engine') ? '✅' : '❌');
} else {
  console.log('❌ register.ts НЕ существует');
}

// 4. Проверяем index.ts
console.log('\n4. Проверка index.ts...');
const indexPath = path.join(__dirname, 'index.ts');
if (fs.existsSync(indexPath)) {
  console.log('✅ index.ts существует');
  const content = fs.readFileSync(indexPath, 'utf8');
  console.log('Размер файла:', content.length, 'символов');
  console.log('Экспорты компонентов:', content.includes('export') ? '✅' : '❌');
} else {
  console.log('❌ index.ts НЕ существует');
}

console.log('\n=== ТЕСТ ЗАВЕРШЕН ==='); 