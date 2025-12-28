
export enum ConversionMethod {
  PWA = 'PWA',
  WEBVIEW = 'WEBVIEW',
  CAPACITOR = 'CAPACITOR',
  NATIVE = 'NATIVE'
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface MethodDetail {
  id: ConversionMethod;
  title: string;
  description: string;
  difficulty: 'Baja' | 'Media' | 'Alta';
  time: string;
  cost: string;
  icon: string;
  steps: string[];
}
