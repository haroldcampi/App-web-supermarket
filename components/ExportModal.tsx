
import React from 'react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const commands = [
    "# 1. Instalar dependencias nativas",
    "npm install && npx cap sync ios",
    "",
    "# 2. Limpiar builds anteriores",
    "xcodebuild clean -workspace ios/App/App.xcworkspace -scheme App",
    "",
    "# 3. Generar el Archivo (.xcarchive)",
    "xcodebuild archive -workspace ios/App/App.xcworkspace -scheme App -archivePath build/Supermarket23.xcarchive",
    "",
    "# 4. Exportar el .IPA",
    "xcodebuild -exportArchive -archivePath build/Supermarket23.xcarchive -exportPath build/ipa -exportOptionsPlist ios/App/ExportOptions.plist"
  ].join('\n');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Script de Compilación Real</h3>
            <p className="text-sm text-slate-500">Ejecuta estos comandos en tu terminal (Requiere Mac + Xcode)</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 font-mono text-xs text-indigo-300 overflow-x-auto relative group">
            <pre>{commands}</pre>
            <button 
              onClick={() => navigator.clipboard.writeText(commands)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-copy"></i>
              Copiar
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 text-sm mb-1">ExportOptions.plist</h4>
              <p className="text-[10px] text-blue-700 leading-tight">Archivo crucial que define si el IPA es para App Store, Ad-Hoc o Enterprise.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <h4 className="font-bold text-amber-900 text-sm mb-1">Provisioning Profile</h4>
              <p className="text-[10px] text-amber-700 leading-tight">Asegúrate de tener el perfil 'Distribution' activo en developer.apple.com.</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors">Cerrar</button>
          <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-200">
            Descargar Documentación
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
