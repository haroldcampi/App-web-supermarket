
import React, { useState, useEffect } from 'react';

const BuildCenter: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'building' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const runBuild = () => {
    setStatus('building');
    setProgress(0);
    setLogs(['[1/5] Sincronizando assets de supermarket23.com...', '[2/5] Inyectando plugins de Notificaciones y Apple Pay...']);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('completed');
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  useEffect(() => {
    if (progress === 40) setLogs(prev => [...prev, '[3/5] Resolviendo dependencias de CocoaPods (PassKit, UserNotifications)...']);
    if (progress === 70) setLogs(prev => [...prev, '[4/5] Firmando binarios con el certificado de Supermarket23...']);
    if (progress === 95) setLogs(prev => [...prev, '[5/5] Generando archivo .ipa y manifiesto de distribución...']);
  }, [progress]);

  return (
    <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white ios-shadow border border-white/10 overflow-hidden relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <i className="fa-solid fa-box-archive text-indigo-400"></i>
            Build Center
          </h3>
          <p className="text-slate-400 text-xs">Generador de binarios para Supermarket23</p>
        </div>
        {status === 'completed' && (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full animate-pulse">
            READY FOR IOS 26
          </span>
        )}
      </div>

      {status === 'idle' ? (
        <div className="text-center py-10">
          <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-cloud-arrow-up text-indigo-500 text-3xl"></i>
          </div>
          <p className="text-slate-400 text-sm mb-6">Prepara el bundle nativo para generar el .ipa instalable.</p>
          <button 
            onClick={runBuild}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-bold transition-all"
          >
            Iniciar Compilación
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span>PROCESANDO IPA</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-black/50 rounded-2xl p-4 font-mono text-[10px] h-32 overflow-y-auto border border-white/5">
            {logs.map((log, i) => (
              <p key={i} className="text-indigo-300 mb-1">
                <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                {log}
              </p>
            ))}
            {status === 'building' && <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse"></span>}
          </div>

          {status === 'completed' && (
            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4">
              <button className="flex-1 bg-white text-black py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                <i className="fa-solid fa-download"></i>
                Descargar .ipa (Dev)
              </button>
              <button className="flex-1 bg-slate-800 text-white py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                <i className="fa-solid fa-cloud-share"></i>
                Enviar a TestFlight
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BuildCenter;
