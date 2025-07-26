/**
 * Регистрация компонентов feld в движке userface
 * Этот файл автоматически регистрирует все компоненты библиотеки
 */

// Временный заглушка для userEngine
// В реальном проекте здесь будет импорт из userface
const userEngine = {
  registerComponents: (components: Record<string, any>) => {
    console.log('Registering feld components:', Object.keys(components));
  }
};

// Импортируем все компоненты
import Button from './Button/Button';
import Card from './Card/Card';
import Accordion from './Accordion/Accordion';
import Checkbox from './Checkbox/Checkbox';
import Code from './Code/Code';
import Feed from './Feed/Feed';
import Filter from './Filter/Filter';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import Image from './Image/Image';
import Input from './Input/Input';
import Layout from './Layout/Layout';
import Link from './Link/Link';
import List from './List/List';
import Media from './Media/Media';
import Modal from './Modal/Modal';
import Panel from './Panel/Panel';
import Progress from './Progress/Progress';
import Radio from './Radio/Radio';
import Side from './Side/Side';
import Slider from './Slider/Slider';
import Table from './Table/Table';
import Tabs from './Tabs/Tabs';
import Text from './Text/Text';
import Article from './Article/Article';
import CardCart from './CardCart/CardCart';
import Container from './Container/Container';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';

// Регистрируем все компоненты в движке
const feldComponents = {
  button: Button,
  card: Card,
  accordion: Accordion,
  checkbox: Checkbox,
  code: Code,
  feed: Feed,
  filter: Filter,
  footer: Footer,
  form: Form,
  image: Image,
  input: Input,
  layout: Layout,
  link: Link,
  list: List,
  media: Media,
  modal: Modal,
  panel: Panel,
  progress: Progress,
  radio: Radio,
  side: Side,
  slider: Slider,
  table: Table,
  tabs: Tabs,
  text: Text,
  article: Article,
  cardcart: CardCart,
  container: Container,
  select: Select,
  textarea: Textarea,
};

// Регистрируем компоненты в движке userface
userEngine.registerComponents(feldComponents);

export default feldComponents; 