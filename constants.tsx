
import { ConversionMethod, MethodDetail } from './types';

export const METHODS: MethodDetail[] = [
  {
    id: ConversionMethod.PWA,
    title: "Progressive Web App (PWA)",
    description: "Instalación directa desde Safari. No requiere Xcode ni compilación compleja.",
    difficulty: "Baja",
    time: "Horas",
    cost: "Gratis",
    icon: "fa-mobile-screen-button",
    steps: [
      "Abrir supermarket23.com en Safari desde el iPhone.",
      "Tocar el botón de 'Compartir' (cuadrado con flecha).",
      "Seleccionar 'Añadir a la pantalla de inicio'.",
      "La app aparecerá con su icono y funcionará sin la interfaz del navegador."
    ]
  },
  {
    id: ConversionMethod.WEBVIEW,
    title: "WKWebView (Xcode)",
    description: "Compilación manual en Swift. Requiere Mac y Xcode para generar el binario .ipa.",
    difficulty: "Media",
    time: "Días",
    cost: "Apple Developer ($99/año)",
    icon: "fa-code",
    steps: [
      "Instalar Xcode en un Mac con macOS actualizado.",
      "Crear un proyecto 'App' en Xcode.",
      "Arrastrar la carpeta de tu web o configurar la URL en WKWebView.",
      "Conectar iPhone, seleccionar 'Product > Run' para instalar."
    ]
  },
  {
    id: ConversionMethod.CAPACITOR,
    title: "Capacitor / Ionic",
    description: "Método recomendado. Sincroniza tu web con el entorno nativo de forma automatizada.",
    difficulty: "Media",
    time: "Días/Semanas",
    cost: "Apple Developer ($99/año)",
    icon: "fa-layer-group",
    steps: [
      "Ejecutar 'npm run build' en tu proyecto web.",
      "Sincronizar con iOS: 'npx cap sync ios'.",
      "Abrir Xcode: 'npx cap open ios'.",
      "Configurar 'Signing & Capabilities' con tu Apple ID.",
      "Seleccionar tu iPhone como destino y pulsar 'Play'."
    ]
  },
  {
    id: ConversionMethod.NATIVE,
    title: "Nativo (React Native)",
    description: "Máximo rendimiento. Requiere compilación de módulos nativos y JavaScript.",
    difficulty: "Alta",
    time: "Meses",
    cost: "Elevado",
    icon: "fa-rocket",
    steps: [
      "Instalar dependencias nativas con CocoaPods ('pod install').",
      "Configurar el esquema de build en Xcode.",
      "Habilitar el servidor de Metro para desarrollo.",
      "Compilar y desplegar usando 'npx react-native run-ios --device'."
    ]
  }
];
