import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Wifi, 
  Sun, 
  CheckCircle2, 
  Activity,
  Wrench,
  Package,
  Download,
  Upload,
  Cpu
} from 'lucide-react';

// --- COMPONENTE: BOTÓN ANIMADO ---
const AnimatedButton = ({ children = 'Confirmar', className = '', as = 'a', whileTap = { scale: 0.97 }, transition = { stiffness: 20, damping: 15, mass: 2 }, ...rest }) => {
  const Component = motion[as] || motion.button;
  return (
    <Component
      {...rest}
      whileTap={whileTap}
      transition={transition}
      className={`px-10 py-5 rounded-2xl relative overflow-hidden bg-black border border-amber-500/50 text-white shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-3 cursor-pointer decoration-none ${className}`}
      style={{ '--shine': 'rgba(245,158,11,0.8)' }}
    >
      <motion.span
        className="tracking-wide font-black h-full w-full flex items-center justify-center relative z-10 gap-2 text-2xl uppercase"
        style={{
          WebkitMaskImage: 'linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))',
          maskImage: 'linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))',
        }}
        initial={{ '--mask-x': '100%' }}
        animate={{ '--mask-x': '-100%' }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear', repeatDelay: 1 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="block absolute inset-0 rounded-2xl p-px"
        style={{
          background: 'linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
        initial={{ backgroundPosition: '100% 0', opacity: 0 }}
        animate={{ backgroundPosition: ['100% 0', '0% 0'], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />
    </Component>
  );
};

// --- COMPONENTE: LOGO LIMPIO Y MODERNO ---
const ModernLogo = () => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-to-tr from-amber-600 to-amber-400 rounded-xl flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] relative overflow-hidden">
      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[spin_4s_linear_infinite] origin-bottom-left"></div>
      <span className="relative z-10">SF</span>
    </div>
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-white leading-none">
        Soluciones <span className="text-amber-500">Fabrick</span>
      </h1>
      <span className="text-[10px] text-amber-500/70 uppercase tracking-[0.3em] font-bold mt-1">División Tecnológica</span>
    </div>
  </div>
);

// --- SECCIÓN: GRÁFICA DE VELOCIDAD 2K (AMBAS VERDES) ---
const TechSpeedBars = () => (
  <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-3xl w-full max-w-4xl mx-auto my-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
    <h3 className="text-white font-black text-center mb-10 text-2xl uppercase tracking-widest flex justify-center items-center gap-3">
      <Activity className="text-emerald-500" /> Test de Rendimiento de Red
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Columna: Internet Rural Común */}
      <div className="space-y-6 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="text-neutral-400 font-bold uppercase tracking-widest text-sm">Internet Común</span>
          <span className="text-emerald-700 font-black text-xl">10 <span className="text-xs">MBPS</span></span>
        </div>

        {/* Bajada */}
        <div>
          <div className="flex justify-between text-xs text-neutral-500 mb-2 uppercase font-bold">
            <span className="flex items-center gap-1"><Download className="w-4 h-4"/> Bajada</span>
            <span>Máx. 10 Mbps</span>
          </div>
          <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-800"
              initial={{ width: "0%" }}
              whileInView={{ width: "15%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Subida */}
        <div>
          <div className="flex justify-between text-xs text-neutral-500 mb-2 uppercase font-bold">
            <span className="flex items-center gap-1"><Upload className="w-4 h-4"/> Subida</span>
            <span>Máx. 2 Mbps</span>
          </div>
          <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-900"
              initial={{ width: "0%" }}
              whileInView={{ width: "5%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {/* Columna: Starlink */}
      <div className="space-y-6 bg-[#05100a] p-6 rounded-2xl border border-emerald-500/30 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full"></div>
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Starlink
          </span>
          <span className="text-emerald-400 font-black text-2xl drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">250+ <span className="text-xs">MBPS</span></span>
        </div>

        {/* Bajada */}
        <div className="relative z-10">
          <div className="flex justify-between text-xs text-emerald-500 mb-2 uppercase font-bold">
            <span className="flex items-center gap-1"><Download className="w-4 h-4"/> Bajada 2K Fluido</span>
            <span>250 Mbps</span>
          </div>
          <div className="w-full h-3 bg-neutral-950 rounded-full overflow-hidden shadow-[0_0_10px_rgba(52,211,153,0.3)]">
            <motion.div 
              className="h-full bg-emerald-400 relative"
              initial={{ width: "0%" }}
              whileInView={{ width: "95%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.3)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0.3)_75%,transparent_75%,transparent)] bg-[length:15px_15px] animate-[moveStripes_0.5s_linear_infinite]"></div>
            </motion.div>
          </div>
        </div>

        {/* Subida */}
        <div className="relative z-10">
          <div className="flex justify-between text-xs text-emerald-500 mb-2 uppercase font-bold">
            <span className="flex items-center gap-1"><Upload className="w-4 h-4"/> Subida de Video</span>
            <span>30 Mbps</span>
          </div>
          <div className="w-full h-3 bg-neutral-950 rounded-full overflow-hidden shadow-[0_0_10px_rgba(52,211,153,0.3)]">
            <motion.div 
              className="h-full bg-emerald-500 relative"
              initial={{ width: "0%" }}
              whileInView={{ width: "45%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:15px_15px] animate-[moveStripes_0.5s_linear_infinite]"></div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
    <style>{`@keyframes moveStripes { from { background-position: 0 0; } to { background-position: 30px 0; } }`}</style>
  </div>
);

// --- SECCIÓN: NUEVO SIMULADOR DE RED AVANZADO ---
const AdvancedSimulator = () => (
  <div className="w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[21/9] bg-[#050505] rounded-3xl border border-neutral-800 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-16 group">
    
    <div className="absolute top-6 left-8 z-10">
      <h3 className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
        <Cpu className="text-amber-500" /> Panel de Control de Red
      </h3>
      <p className="text-neutral-500 text-sm mt-1 font-mono">ESTADO: ONLINE Y ASEGURADO</p>
    </div>

    <svg viewBox="0 0 1200 600" className="w-full h-full absolute inset-0">
      <defs>
        <filter id="glowGreen"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="glowRed"><feGaussianBlur stdDeviation="5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="glowAmber"><feGaussianBlur stdDeviation="6" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        
        <path id="linkSat" d="M 600,60 Q 600,150 600,240" fill="none" />
        <path id="linkHub" d="M 600,280 Q 600,350 600,420" fill="none" />
        <path id="linkCam1" d="M 600,450 Q 250,450 250,540" fill="none" />
        <path id="linkCam2" d="M 600,450 Q 450,450 450,540" fill="none" />
        <path id="linkCam3" d="M 600,450 Q 750,450 750,540" fill="none" />
        <path id="linkCam4" d="M 600,450 Q 950,450 950,540" fill="none" />
      </defs>

      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />

      <path d="M 600,60 Q 600,150 600,240" stroke="#333" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
      <path d="M 600,280 Q 600,350 600,420" stroke="#22c55e" strokeWidth="3" strokeOpacity="0.3" fill="none"/>
      
      <path d="M 600,450 Q 250,450 250,540" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
      <path d="M 600,450 Q 450,450 450,540" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
      <path d="M 600,450 Q 750,450 750,540" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
      <path d="M 600,450 Q 950,450 950,540" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>

      <circle r="4" fill="#f59e0b" filter="url(#glowAmber)">
        <animateMotion dur="1s" repeatCount="indefinite"><mpath href="#linkSat"/></animateMotion>
      </circle>
      <circle r="5" fill="#22c55e" filter="url(#glowGreen)">
        <animateMotion dur="0.8s" repeatCount="indefinite"><mpath href="#linkHub"/></animateMotion>
      </circle>
      
      {["linkCam1", "linkCam2", "linkCam3", "linkCam4"].map((path, i) => (
        <circle key={i} r="3" fill="#ef4444" filter="url(#glowRed)">
          <animateMotion dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite"><mpath href={`#${path}`}/></animateMotion>
        </circle>
      ))}

      {/* SATÉLITE */}
      <g transform="translate(600, 60)">
        <circle cx="0" cy="0" r="30" fill="#000" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5"/>
        <text x="0" y="8" fontSize="28" fill="#fff" textAnchor="middle" filter="url(#glowAmber)">🛰️</text>
        <text x="50" y="5" fill="#a3a3a3" fontSize="10" fontWeight="bold" letterSpacing="1">LINK SATELITAL</text>
      </g>

      {/* ANTENA */}
      <g transform="translate(600, 260)">
        <rect x="-80" y="-25" width="160" height="50" rx="25" fill="#111" stroke="#f59e0b" strokeWidth="2" />
        <text x="-40" y="5" fontSize="20" fill="#fff" textAnchor="middle">📡</text>
        <text x="20" y="5" fill="#fff" fontSize="16" textAnchor="middle" fontWeight="bold">STARLINK</text>
      </g>

      {/* REPETIDOR */}
      <g transform="translate(600, 430)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#22c55e" strokeWidth="2">
          <animate attributeName="r" values="20; 250" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8; 0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="25" fill="#0a0a0a" stroke="#22c55e" strokeWidth="3" filter="url(#glowGreen)" />
        <text x="0" y="8" fontSize="24" fill="#fff" textAnchor="middle">📶</text>
      </g>

      {/* CÁMARAS */}
      {[250, 450, 750, 950].map((x, i) => (
        <g key={i} transform={`translate(${x}, 540)`}>
          <rect x="-35" y="-20" width="70" height="40" rx="8" fill="#111" stroke="#ef4444" strokeWidth="2" />
          <text x="-10" y="6" fontSize="20" fill="#fff" textAnchor="middle">📹</text>
          <circle cx="15" cy="-8" r="4" fill="#ef4444" filter="url(#glowRed)">
            <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="40" fill="#a3a3a3" fontSize="10" textAnchor="middle" fontWeight="bold">CAM {i+1}</text>
        </g>
      ))}

      {/* INTRUSOS */}
      <path id="intruder" d="M 100,580 C 300,550 900,550 1100,580" fill="none"/>
      <circle r="4" fill="#ef4444" filter="url(#glowRed)">
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto"><mpath href="#intruder"/></animateMotion>
      </circle>
    </svg>
  </div>
);


// --- APP PRINCIPAL ---
export default function App() {
  const [date] = useState(new Date().toLocaleDateString('es-CL', { month: 'long', day: 'numeric' }));

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black pb-20">
      
      {/* HEADER */}
      <header className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-neutral-900">
        <ModernLogo />
        <div className="text-right bg-neutral-900/40 p-4 rounded-2xl border border-neutral-800">
          <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-1">Presupuesto Especial</p>
          <p className="text-white font-black text-xl">Para Don Hugo</p>
          <p className="text-neutral-500 text-sm mt-1">Vara Gruesa, Linares - {date}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-16">
        
        {/* HERO */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
              Seguridad inteligente <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">y conexión autónoma.</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium">
              Hola Don Hugo. Equipos que funcionan solos 24/7. <br className="hidden md:block"/>
              A prueba de cortes de luz y con el internet más rápido.
            </p>
          </motion.div>
        </section>

        {/* BENEFICIOS RÁPIDOS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 text-center">
            <Sun className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg">Energía Solar</h3>
            <p className="text-neutral-500 text-sm mt-2">Cámaras que nunca se apagan.</p>
          </div>
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 text-center">
            <Wifi className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg">Internet Starlink</h3>
            <p className="text-neutral-500 text-sm mt-2">Transmisión de video ultra rápida.</p>
          </div>
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 text-center">
            <ShieldCheck className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <h3 className="text-white font-bold text-lg">Cobertura Total</h3>
            <p className="text-neutral-500 text-sm mt-2">Repetidor para llegar a cada rincón.</p>
          </div>
        </section>

        {/* VISUALIZADORES */}
        <TechSpeedBars />
        <AdvancedSimulator />

        {/* TABLA DE PRECIOS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-black mb-8 text-center text-white">Detalle de la Inversión</h2>
          
          <div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* MATERIALES */}
            <div className="p-6 md:p-10 border-b border-neutral-800">
              <h3 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <Package className="w-5 h-5"/> 1. Materiales y Equipos
              </h3>
              
              <div className="flex flex-col md:flex-row justify-between mb-4 pb-4 border-b border-neutral-800/50">
                <div>
                  <p className="text-white font-bold text-lg">Kit de Vigilancia Solar</p>
                  <p className="text-neutral-500 text-sm mt-1 max-w-lg">4 Cámaras, 4 Memorias, 1 Repetidor Wi-Fi y 2 Postes Metálicos ($17.000 c/u).</p>
                  <p className="text-amber-500 text-xs mt-2 font-bold tracking-widest uppercase">Llegada estimada: 7 a 12 días tras la compra</p>
                </div>
                <p className="text-white font-bold text-xl mt-2 md:mt-0">$529.000</p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <p className="text-white font-bold text-lg">Kit Internet Starlink</p>
                  <p className="text-neutral-500 text-sm mt-1 max-w-lg">Antena, Soporte original de pared, Envío y Primer mes pagado.</p>
                  <p className="text-amber-500 text-xs mt-2 font-bold tracking-widest uppercase">Llegada estimada: 2 a 4 semanas tras la compra</p>
                </div>
                <p className="text-white font-bold text-xl mt-2 md:mt-0">$423.900</p>
              </div>

              <div className="bg-neutral-900 p-4 rounded-xl flex justify-between items-center border border-neutral-800">
                <p className="text-neutral-400 uppercase text-sm font-bold">Total Equipos:</p>
                <p className="text-amber-500 font-black text-2xl">$952.900</p>
              </div>
            </div>

            {/* MANO DE OBRA */}
            <div className="p-6 md:p-10 border-b border-neutral-800">
              <h3 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <Wrench className="w-5 h-5"/> 2. Mano de Obra e Instalación
              </h3>

              <div className="space-y-4 mb-6">
                {[
                  { label: 'Instalación de 4 cámaras solares con fijación a postes', price: '$60.000' },
                  { label: 'Configuración de red Starlink + repetidor Wi-Fi', price: '$40.000' },
                  { label: 'Configuración de acceso remoto desde celular (app)', price: '$20.000' },
                  { label: 'Traslado a terreno (Vara Gruesa, Linares)', price: '$30.000' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 border-b border-neutral-800/50 last:border-0">
                    <span className="text-neutral-300 flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {item.label}
                    </span>
                    <span className="text-white font-bold mt-1 md:mt-0">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-900 p-4 rounded-xl flex justify-between items-center border border-neutral-800">
                <p className="text-neutral-400 uppercase text-sm font-bold">Total Mano de Obra:</p>
                <p className="text-amber-500 font-black text-2xl">$150.000</p>
              </div>
            </div>

            {/* TOTAL FINAL */}
            <div className="p-6 md:p-10 bg-gradient-to-br from-amber-950/20 to-transparent">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-neutral-400 uppercase text-sm font-bold tracking-widest mb-1">Inversión Total del Proyecto</p>
                  <p className="text-neutral-500 text-xs">Equipos + Instalación completa lista para usar</p>
                </div>
                <div className="text-right">
                  <p className="text-amber-400 font-black text-5xl drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">$1.102.900</p>
                  <p className="text-neutral-500 text-xs mt-1">IVA incluido</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* GARANTÍAS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {[
            { icon: <ShieldCheck className="w-6 h-6 text-amber-500" />, title: 'Garantía 12 meses', desc: 'En todos los equipos instalados' },
            { icon: <Wrench className="w-6 h-6 text-amber-500" />, title: 'Soporte técnico', desc: 'Asistencia remota post-instalación' },
            { icon: <CheckCircle2 className="w-6 h-6 text-amber-500" />, title: 'Instalación certificada', desc: 'Técnicos con experiencia en terreno' },
          ].map((item, i) => (
            <div key={i} className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2 bg-amber-500/10 rounded-xl">{item.icon}</div>
              <div>
                <p className="text-white font-bold text-sm">{item.title}</p>
                <p className="text-neutral-500 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-neutral-400 mb-6 text-lg">¿Listo para proteger su campo con la mejor tecnología?</p>
          <AnimatedButton
            as="button"
            className="mx-auto"
            onClick={() => window.open('https://wa.me/56912345678?text=Hola,%20estoy%20interesado%20en%20el%20presupuesto%20para%20Don%20Hugo', '_blank')}
          >
            ✅ Aceptar Presupuesto
          </AnimatedButton>
          <p className="text-neutral-600 text-xs mt-4">Al confirmar, nos pondremos en contacto para coordinar la instalación.</p>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 pt-10 border-t border-neutral-900 text-center">
        <p className="text-neutral-600 text-sm">© {new Date().getFullYear()} Soluciones Fabrick — División Tecnológica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
