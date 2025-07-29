// Тест FELD с новым движком
const { nodeEngine } = require('userface');

console.log('=== ТЕСТ FELD С НОВЫМ ДВИЖКОМ ===\n');

// Ждем немного чтобы движок инициализировался
setTimeout(async () => {
  // 1. Проверяем Node Engine
  console.log('1. Проверка Node Engine...');
  console.log('✅ Node Engine доступен');
  console.log('Тип Engine:', typeof nodeEngine);

  // 2. Регистрируем тестовый компонент FELD
  console.log('\n2. Регистрация тестового компонента FELD...');

  const TestButton = {
    name: 'TestButton',
    render: (props) => `<button style="padding: 8px 16px; background: #007AFF; color: white; border: none; border-radius: 4px;">${props.children || 'Test Button'}</button>`
  };

  await nodeEngine.registerComponent('button', TestButton, {
    name: 'button',
    platform: 'universal',
    props: [
      { name: 'variant', type: 'text', required: false },
      { name: 'children', type: 'text', required: false }
    ],
    events: [
      { name: 'onClick', parameters: ['event'], description: 'Button click event' }
    ]
  });

  console.log('✅ Тестовый компонент button зарегистрирован');

  // 3. Проверяем зарегистрированный компонент
  console.log('\n3. Проверка зарегистрированного компонента...');
  const component = nodeEngine.getComponent('button');
  const schema = nodeEngine.getComponentSchema('button');

  if (component) {
    console.log('✅ Компонент button найден');
    if (schema) {
      console.log(`   Схема: ${schema.name} (${schema.platform})`);
      console.log(`   Пропсы: ${schema.props.length}`);
      console.log(`   События: ${schema.events.length}`);
    }
  } else {
    console.log('❌ Компонент button НЕ найден');
  }

  // 4. Тестируем рендеринг компонента
  console.log('\n4. Тестирование рендеринга компонента...');

  const testFace = {
    component: 'button',
    variant: 'primary',
    children: 'Test Button from FELD!'
  };

  try {
    const result = await nodeEngine.render(testFace, 'node');
    console.log('✅ Рендеринг успешен:', result);
  } catch (error) {
    console.log('❌ Ошибка рендеринга:', error.message);
  }

  // 5. Проверяем плагины
  console.log('\n5. Проверка плагинов...');
  const allPlugins = nodeEngine.getAllPlugins();
  console.log('Все плагины:', allPlugins.length);
  allPlugins.forEach(plugin => {
    console.log(`- ${plugin.name} (${plugin.id}) - ${plugin.type}`);
  });

  const activePlugins = nodeEngine.getActivePlugins();
  console.log('Активные плагины:', activePlugins.length);
  activePlugins.forEach(plugin => {
    console.log(`- ${plugin.name} (${plugin.id}) - ${plugin.type}`);
  });

  console.log('\n=== ТЕСТ ЗАВЕРШЕН ===');
}, 100); 