/**
 * Регистрация компонентов Feld в UserFace движке
 * Этот файл автоматически регистрирует все компоненты библиотеки
 */

// Регистрация компонентов Feld в UserFace движке
import { engine } from 'userface';

// Импортируем все компоненты Feld
import Button from './Button/Button';
import Input from './Input/Input';
import Text from './Text/Text';
import Card from './Card/Card';
import CardCart from './CardCart/CardCart';
import Checkbox from './Checkbox/Checkbox';
import Code from './Code/Code';
import Container from './Container/Container';
import Feed from './Feed/Feed';
import Filter from './Filter/Filter';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import Image from './Image/Image';
import Layout from './Layout/Layout';
import Link from './Link/Link';
import List from './List/List';
import Media from './Media/Media';
import Modal from './Modal/Modal';
import Panel from './Panel/Panel';
import Progress from './Progress/Progress';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Side from './Side/Side';
import Slider from './Slider/Slider';
import Table from './Table/Table';
import Tabs from './Tabs/Tabs';
import Textarea from './Textarea/Textarea';

// Схемы компонентов Feld
const feldSchemas = {
  button: {
    name: 'button',
    platform: 'universal',
    props: [
      { name: 'variant', type: 'text', required: false },
      { name: 'size', type: 'text', required: false },
      { name: 'disabled', type: 'boolean', required: false },
      { name: 'children', type: 'text', required: false }
    ],
    events: [
      { name: 'onClick', parameters: ['event'], description: 'Button click event' }
    ]
  },
  input: {
    name: 'input',
    platform: 'universal',
    props: [
      { name: 'type', type: 'text', required: false },
      { name: 'placeholder', type: 'text', required: false },
      { name: 'value', type: 'text', required: false },
      { name: 'disabled', type: 'boolean', required: false }
    ],
    events: [
      { name: 'onChange', parameters: ['event'], description: 'Input change event' },
      { name: 'onFocus', parameters: ['event'], description: 'Input focus event' },
      { name: 'onBlur', parameters: ['event'], description: 'Input blur event' }
    ]
  },
  text: {
    name: 'text',
    platform: 'universal',
    props: [
      { name: 'variant', type: 'text', required: false },
      { name: 'size', type: 'text', required: false },
      { name: 'children', type: 'text', required: false }
    ],
    events: []
  },
  card: {
    name: 'card',
    platform: 'universal',
    props: [
      { name: 'variant', type: 'text', required: false },
      { name: 'children', type: 'text', required: false }
    ],
    events: []
  },
  // Добавь схемы для остальных компонентов...
};

// Регистрируем компоненты в новом Engine
const feldComponents = {
  button: Button,
  input: Input,
  text: Text,
  card: Card,
  cardcart: CardCart,
  checkbox: Checkbox,
  code: Code,
  container: Container,
  feed: Feed,
  filter: Filter,
  footer: Footer,
  form: Form,
  image: Image,
  layout: Layout,
  link: Link,
  list: List,
  media: Media,
  modal: Modal,
  panel: Panel,
  progress: Progress,
  radio: Radio,
  select: Select,
  side: Side,
  slider: Slider,
  table: Table,
  tabs: Tabs,
  textarea: Textarea
};

// Регистрируем все компоненты с их схемами
(async () => {
  for (const [name, component] of Object.entries(feldComponents)) {
    const schema = feldSchemas[name as keyof typeof feldSchemas];
    if (schema) {
      await engine.registerComponent(name, component, schema);
    } else {
      // Базовая схема если нет специфичной
      await engine.registerComponent(name, component, {
        name,
        platform: 'universal',
        props: [],
        events: []
      });
    }
  }
})();

console.log('[Feld] Registered', Object.keys(feldComponents).length, 'components in UserFace Engine');

export default feldComponents; 