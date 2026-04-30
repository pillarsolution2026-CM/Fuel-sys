
import React from 'react';

interface Props {
  selectedMonth: number;
  selectedYear: number;
  onChange: (month: number, year: number) => void;
}

const MonthSelector: React.FC<Props> = ({ selectedMonth, selectedYear, onChange }) => {
  const months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= currentYear - 2; y--) {
    years.push(y);
  }

  return (
    <div className="flex items-center gap-2 bg-white/10 p-1 rounded-xl overflow-x-auto no-scrollbar">
      <select 
        value={selectedYear}
        onChange={(e) => onChange(selectedMonth, parseInt(e.target.value))}
        className="bg-transparent text-white text-xs font-bold border-none focus:ring-0 cursor-pointer"
      >
        {years.map(y => (
          <option key={y} value={y} className="text-slate-900">{y}</option>
        ))}
      </select>
      <div className="h-4 w-[1px] bg-white/20"></div>
      <div className="flex gap-1">
        {months.map((m, i) => (
          <button
            key={i}
            onClick={() => onChange(i, selectedYear)}
            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all whitespace-nowrap ${
              selectedMonth === i 
                ? 'bg-white text-emerald-600 shadow-sm' 
                : 'text-white/70 hover:bg-white/10'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthSelector;
