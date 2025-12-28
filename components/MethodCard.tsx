
import React from 'react';
import { MethodDetail } from '../types';

interface MethodCardProps {
  method: MethodDetail;
  onSelect: (method: MethodDetail) => void;
  isSelected: boolean;
}

const MethodCard: React.FC<MethodCardProps> = ({ method, onSelect, isSelected }) => {
  return (
    <div 
      onClick={() => onSelect(method)}
      className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border-2 ${
        isSelected 
        ? 'border-blue-500 bg-blue-50 ring-4 ring-blue-100' 
        : 'border-white bg-white hover:border-slate-200 hover:shadow-lg'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600'
      }`}>
        <i className={`fa-solid ${method.icon} text-xl`}></i>
      </div>
      <h3 className="text-lg font-bold mb-2">{method.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{method.description}</p>
      
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase rounded text-slate-500">
          Dificultad: {method.difficulty}
        </span>
        <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase rounded text-slate-500">
          Tiempo: {method.time}
        </span>
      </div>
    </div>
  );
};

export default MethodCard;
