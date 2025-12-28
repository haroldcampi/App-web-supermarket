
import React, { useState } from 'react';
import { METHODS } from './constants';
import { MethodDetail } from './types';
import MethodCard from './components/MethodCard';
import ChatInterface from './components/ChatInterface';
import BuildCenter from './components/BuildCenter';
import ExportModal from './components/ExportModal';

const App: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<MethodDetail>(METHODS[2]); // Default to Capacitor
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <ExportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
      
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-200">
              <i className="fa-solid fa-cart-shopping text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 leading-none">Supermarket23</h1>
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Project Native iOS 26</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:flex bg-slate-100 rounded-full px-4 py-2 gap-4">
                <span className="text-xs font-semibold text-slate-500">Status: <span className="text-green-600">Architech Ready</span></span>
             </div>
             <button 
               onClick={() => setIsExportModalOpen(true)}
               className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl text-sm font-bold hover:scale-105 transition-transform"
             >
               Exportar Comandos
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Build Simulation Center */}
          <BuildCenter />

          {/* New: Signing & Identity Validator */}
          <section className="bg-white rounded-[2.5rem] p-10 ios-shadow border border-slate-100">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center">
                  <i className="fa-solid fa-id-card"></i>
                </div>
                <div>
                   <h3 className="text-xl font-bold">Identidad y Firma (Code Signing)</h3>
                   <p className="text-xs text-slate-500">Configuración vital para el .ipa final</p>
                </div>
             </div>

             <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-bold">Bundle Identifier</span>
                   </div>
                   <code className="text-[10px] bg-white px-3 py-1 rounded-lg border border-slate-200">com.supermarket23.app</code>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                   <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-bold">App Groups</span>
                   </div>
                   <code className="text-[10px] bg-white px-3 py-1 rounded-lg border border-slate-200">group.com.supermarket23.push</code>
                </div>
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                   <p className="text-xs text-indigo-900 font-medium">
                     <i className="fa-solid fa-circle-info mr-2"></i>
                     Recuerda: El .ipa solo funcionará en tu iPhone si el UDID de tu dispositivo está registrado en el perfil de 'Ad Hoc' o si usas una cuenta de desarrollador de pago.
                   </p>
                </div>
             </div>
          </section>

          {/* Technology Strategy */}
          <section className="bg-white/40 glass p-8 rounded-[2.5rem] ios-shadow">
            <h2 className="text-3xl font-extrabold mb-2">Estrategia de Despliegue</h2>
            <p className="text-slate-600 mb-8">Elige el motor de renderizado.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {METHODS.map((method) => (
                <MethodCard 
                  key={method.id} 
                  method={method} 
                  onSelect={setSelectedMethod}
                  isSelected={selectedMethod.id === method.id}
                />
              ))}
            </div>
          </section>

          {/* Compilation Guide UI */}
          <section className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full"></div>
             <h3 className="text-2xl font-bold mb-8">Flujo Maestro Xcode</h3>
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'fa-terminal', title: 'Prepare', desc: 'npx cap sync ios genera el proyecto Xcode listo.' },
                  { icon: 'fa-microchip', title: 'Compile', desc: 'xcodebuild transforma JS/HTML en binario ARM64.' },
                  { icon: 'fa-box', title: 'Package', desc: 'Se genera el archivo .ipa firmado y comprimido.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <i className={`fa-solid ${item.icon} text-indigo-400 text-xl mb-4`}></i>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-8">
          <ChatInterface />
          
          <div className="bg-white/40 glass rounded-[2rem] p-8 border border-white/50 ios-shadow">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </div>
                <h4 className="font-bold text-slate-800">CI/CD</h4>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed italic">
               ¿No tienes Mac? Conecta tu GitHub a <strong>Codemagic</strong>. Ellos compilarán el .ipa en sus servidores Mac y te enviarán el link de descarga por email automáticamente.
             </p>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-12 text-center text-slate-400 text-[10px] uppercase tracking-widest font-bold">
        <p>Supermarket23 iOS Architect & Build System</p>
      </footer>
    </div>
  );
};

export default App;
