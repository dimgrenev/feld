/**
 * Основные типы для Feld Design System
 * Восстановлены из feld_legacy
 */

import React from 'react';

// Базовый тип для всех спецификаций
export interface FeldSpec {
  type: string;
  id: string;
  [key: string]: any;
}

// Типы для компонентов
export interface ComponentData {
  type: string;
  id: string;
  [key: string]: any;
}

// Типы для рендерера
export type ComponentRenderer = (data: ComponentData) => React.ReactNode;

// Базовые пропсы для всех компонентов
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
  'data-feld-id'?: string;
  'data-feld-type'?: string;
}

// Типы для размеров (убраны - не нужны)
// export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
// export type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
// export type Radius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

// Типы для цветов (убраны - объединены в variant)
// export type Color = 
//   | 'primary'
//   | 'secondary'
//   | 'accent'
//   | 'success'
//   | 'warning'
//   | 'error'
//   | 'info'
//   | 'neutral';

// Типы для вариантов (объединены с цветами)
export type Variant = 
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'outlined'
  | 'filled'
  | 'elevated'
  | 'ghost'
  | 'link'
  | 'danger'
  | 'round';

// Типы для позиционирования
export type Position = 
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';

export type Alignment = 
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'baseline';

// Типы для лейаута
export type FlexDirection = 
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

export type FlexWrap = 
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse';

export type JustifyContent = 
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItems = 
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

// Типы для анимации
export type AnimationType = 
  | 'fade'
  | 'slide'
  | 'scale'
  | 'rotate'
  | 'bounce'
  | 'elastic';

export type AnimationDirection = 
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'in'
  | 'out';

export type AnimationDuration = 
  | 'fast'
  | 'normal'
  | 'slow'
  | number; // в миллисекундах

// Типы для состояний
export type LoadingState = 
  | 'idle'
  | 'loading'
  | 'success'
  | 'error';

export type InteractionState = 
  | 'normal'
  | 'hover'
  | 'focus'
  | 'active'
  | 'disabled';

// Типы для адаптивности
export type Breakpoint = 
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl';

export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

// Типы для доступности
export interface AccessibilityProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-disabled'?: boolean;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-live'?: 'polite' | 'assertive' | 'off';
  'aria-atomic'?: boolean;
  'aria-busy'?: boolean;
  role?: string;
  tabIndex?: number;
}

// Типы для событий DOM
export interface DOMEventHandlers {
  onClick?: React.MouseEventHandler;
  onDoubleClick?: React.MouseEventHandler;
  onMouseDown?: React.MouseEventHandler;
  onMouseUp?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onMouseMove?: React.MouseEventHandler;
  onMouseOver?: React.MouseEventHandler;
  onMouseOut?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onKeyUp?: React.KeyboardEventHandler;
  onKeyPress?: React.KeyboardEventHandler;
  onChange?: React.ChangeEventHandler;
  onInput?: React.FormEventHandler;
  onSubmit?: React.FormEventHandler;
  onReset?: React.FormEventHandler;
  onScroll?: React.UIEventHandler;
  onWheel?: React.WheelEventHandler;
  onDrag?: React.DragEventHandler;
  onDragStart?: React.DragEventHandler;
  onDragEnd?: React.DragEventHandler;
  onDragEnter?: React.DragEventHandler;
  onDragLeave?: React.DragEventHandler;
  onDragOver?: React.DragEventHandler;
  onDrop?: React.DragEventHandler;
  onTouchStart?: React.TouchEventHandler;
  onTouchMove?: React.TouchEventHandler;
  onTouchEnd?: React.TouchEventHandler;
  onTouchCancel?: React.TouchEventHandler;
}

// Типы для полей формы
export interface FormFieldProps {
  name?: string;
  value?: any;
  defaultValue?: any;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  hint?: string;
  label?: string;
  placeholder?: string;
}

// Утилиты
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
} 