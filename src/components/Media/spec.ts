export interface MediaSpec {
  id: string;
  component: 'Media';
  type?: 'image' | 'video';
  src: string;
  alt?: string;
  events?: Record<string, string>;
}
