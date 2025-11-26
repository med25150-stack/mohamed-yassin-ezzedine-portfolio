import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { TrendingUp, Users, ShoppingCart, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 border border-slate-100 dark:border-slate-700 shadow-lg rounded-lg">
        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{payload[0].payload.label}</p>
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          +{payload[0].value}{payload[0].payload.suffix}
        </p>
      </div>
    );
  }
  return null;
};

const StatCard = ({ icon: Icon, value, label, colorClass }: { icon: any, value: string, label: string, colorClass: string }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{value}</h3>
    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</p>
  </div>
);

const StatsSection: React.FC = () => {
  const { content } = useLanguage();
  const data = content.performance;

  return (
    <section id="performance" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{content.sectionTitles.performance_title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {content.sectionTitles.performance_subtitle}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <StatCard icon={TrendingUp} value="+38%" label={data[0].label} colorClass="bg-indigo-500" />
          <StatCard icon={Users} value="+40%" label={data[1].label} colorClass="bg-pink-500" />
          <StatCard icon={ShoppingCart} value="35%" label={data[2].label} colorClass="bg-emerald-500" />
          <StatCard icon={Activity} value="+22%" label={data[3].label} colorClass="bg-amber-500" />
        </div>

        {/* Chart Visualization */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{content.sectionTitles.performance_chart_title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {content.sectionTitles.performance_chart_desc}
              </p>
              <ul className="space-y-3">
                {data.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-3 h-3 rounded-full me-3" style={{ backgroundColor: item.color }}></span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-2/3 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#94a3b8" strokeOpacity={0.2} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    tickFormatter={(value) => `${value}%`}
                    orientation={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={50}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;