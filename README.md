# Feld UI

Минималистичная библиотека React-компонентов для UserFace и любых declarative UI движков.

## Структура

- Каждый компонент — отдельная папка (Button, Card, ...)
- В каждой папке:
  - .tsx — исходник компонента
  - .css — стили
  - spec.json — спека для userface
  - index.ts — экспорт компонента

## Пример

```
feld/
├── Button/
│   ├── Button.tsx
│   ├── Button.css
│   ├── spec.json
│   └── index.ts
├── Card/
│   ├── Card.tsx
│   ├── Card.css
│   ├── spec.json
│   └── index.ts
...
```

## Использование

1. Установите пакет:
   ```bash
   npm install feld
   ```
2. Добавьте в userface:
   ```bash
   npx userface add feld
   ```
3. Используйте компоненты и спеки в userface или напрямую в React-проектах.

## Лицензия
MIT 