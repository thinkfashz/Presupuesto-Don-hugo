import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Wifi,
  Sun,
  CheckCircle2,
  Wrench,
  Package,
  ArrowUpRight,
  Zap,
} from 'lucide-react';

// --- Animaciones reutilizables (sutiles y profesionales) ---
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

// --- Botón bordeado minimalista ---
const OutlineButton = ({ children, as: Tag = 'button', className = '', ...rest }) => (
  <motion.span
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    className="inline-block"
  >
    <Tag
      {...rest}
      className={
        'group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 ' +
        'rounded-full border border-amber-500/60 text-white text-sm sm:text-base font-semibold tracking-wide ' +
        'bg-transparent hover:border-amber-400 hover:bg-amber-500/5 ' +
        'transition-colors duration-300 cursor-pointer no-underline ' +
        className
      }
    >
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Tag>
  </motion.span>
);

// --- Logo limpio ---
const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl border border-amber-500/40 bg-amber-500/5 flex items-center justify-center">
      <span className="text-amber-400 font-black text-sm tracking-widest">SF</span>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-white font-semibold text-sm sm:text-base tracking-wide">
        Soluciones <span className="text-amber-400">Fabrick</span>
      </span>
      <span className="text-[10px] text-neutral-500 tracking-[0.25em] uppercase mt-1">
        División Tecnológica
      </span>
    </div>
  </div>
);

// --- Tarjeta de beneficio ---
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    {...fadeUp}
    className="rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-5 sm:p-6 hover:border-amber-500/30 transition-colors duration-300"
  >
    <div className="w-10 h-10 rounded-lg border border-neutral-800 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-amber-400" strokeWidth={1.75} />
    </div>
    <h3 className="text-white font-semibold text-base">{title}</h3>
    <p className="text-neutral-400 text-sm mt-1.5 leading-relaxed">{desc}</p>
  </motion.div>
);

// --- Fila de precio (responsive) ---
const PriceRow = ({ label, sublabel, price, highlight = false }) => (
  <div
    className={
      'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 py-4 ' +
      (highlight ? '' : 'border-b border-neutral-900')
    }
  >
    <div className="min-w-0 flex-1">
      <p className="text-white text-sm sm:text-base">{label}</p>
      {sublabel && (
        <p className="text-neutral-500 text-xs sm:text-sm mt-1 leading-relaxed">{sublabel}</p>
      )}
    </div>
    <p className="text-white font-semibold text-base sm:text-lg tabular-nums whitespace-nowrap">
      {price}
    </p>
  </div>
);

// --- Sección encabezada (numerada y minimal) ---
const SectionBlock = ({ index, icon: Icon, title, children }) => (
  <div className="px-5 sm:px-8 py-7 sm:py-9 border-b border-neutral-900 last:border-0">
    <div className="flex items-center gap-3 mb-5 sm:mb-6">
      <span className="text-amber-400/70 text-xs font-mono tracking-widest">0{index}</span>
      <Icon className="w-4 h-4 text-amber-400" strokeWidth={1.75} />
      <h3 className="text-white text-sm sm:text-base font-semibold tracking-wide">{title}</h3>
    </div>
    {children}
  </div>
);

// --- APP ---
export default function App() {
  const [date] = useState(
    new Date().toLocaleDateString('es-CL', { month: 'long', day: 'numeric', year: 'numeric' })
  );

  const laborItems = [
    { label: 'Instalación de 4 cámaras solares con fijación a postes', detail: '$35.000 c/u', price: '$140.000' },
    { label: 'Instalación Antena Starlink', detail: 'Montaje y orientación', price: '$110.000' },
    { label: 'Configuración de red Starlink + repetidor Wi-Fi', detail: 'Cobertura optimizada', price: '$40.000' },
    { label: 'Configuración de acceso remoto (app)', detail: 'Visualización desde celular', price: '$20.000' },
    { label: 'Traslado a terreno', detail: 'Vara Gruesa, Linares', price: '$30.000' },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-neutral-100 antialiased selection:bg-amber-400 selection:text-black">
      {/* fondo sutil */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(245,158,11,0.10), transparent 70%)',
        }}
      />

      {/* HEADER */}
      <header className="max-w-5xl mx-auto px-5 sm:px-8 pt-6 sm:pt-10 pb-5 flex items-center justify-between gap-4">
        <Logo />
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-amber-400/80 tracking-[0.2em] uppercase font-medium">
            Presupuesto
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm mt-0.5 capitalize">{date}</p>
        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <main className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* HERO */}
        <section className="pt-14 sm:pt-24 pb-12 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 text-xs text-neutral-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Propuesta para Don Hugo · Vara Gruesa
            </div>

            <h1 className="text-[34px] leading-[1.05] sm:text-6xl sm:leading-[1.05] font-black tracking-tight text-white">
              Seguridad inteligente
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                y conexión autónoma.
              </span>
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-5 sm:mt-7 max-w-2xl">
              Cámaras solares que funcionan 24/7 a prueba de cortes de luz, e internet
              satelital Starlink con velocidad real para el campo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10">
              <OutlineButton as="a" href="#inversion">
                Ver inversión
              </OutlineButton>
              <OutlineButton
                as="a"
                href="https://wa.me/56912345678?text=Hola,%20quiero%20coordinar%20la%20instalación%20del%20presupuesto"
                target="_blank"
                rel="noreferrer"
                className="border-neutral-700 hover:border-neutral-500"
              >
                Conversar por WhatsApp
              </OutlineButton>
            </div>
          </motion.div>
        </section>

        {/* BENEFICIOS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pb-14 sm:pb-20">
          <FeatureCard
            icon={Sun}
            title="Energía solar"
            desc="Cámaras autónomas que nunca se apagan, incluso sin luz eléctrica."
          />
          <FeatureCard
            icon={Wifi}
            title="Internet Starlink"
            desc="Velocidad real de hasta 250 Mbps para video y monitoreo en vivo."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Cobertura total"
            desc="Repetidor Wi-Fi para llegar a cada rincón del terreno."
          />
        </section>

        {/* COMPARATIVA SIMPLE */}
        <motion.section
          {...fadeUp}
          className="rounded-2xl border border-neutral-900 bg-neutral-950/40 px-5 sm:px-8 py-6 sm:py-8 mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-4 h-4 text-amber-400" strokeWidth={1.75} />
            <h3 className="text-white text-sm sm:text-base font-semibold">
              Velocidad comparada
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-neutral-400 text-xs uppercase tracking-widest">
                  Internet común
                </span>
                <span className="text-neutral-300 text-sm font-semibold tabular-nums">
                  10 Mbps
                </span>
              </div>
              <div className="h-1 rounded-full bg-neutral-900 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '12%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-neutral-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-amber-400 text-xs uppercase tracking-widest">
                  Starlink
                </span>
                <span className="text-amber-400 text-sm font-semibold tabular-nums">
                  250+ Mbps
                </span>
              </div>
              <div className="h-1 rounded-full bg-neutral-900 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* DETALLE DE LA INVERSIÓN */}
        <motion.section {...fadeUp} id="inversion" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Detalle de la inversión
            </h2>
            <span className="hidden sm:block text-xs text-neutral-500 tracking-widest uppercase">
              IVA incluido
            </span>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-neutral-900 bg-neutral-950/40 overflow-hidden">
            {/* Equipos */}
            <SectionBlock index={1} icon={Package} title="Materiales y equipos">
              <PriceRow
                label="Kit de Vigilancia Solar"
                sublabel="4 Cámaras Solares ($95.000 c/u) · 4 Memorias · 1 Repetidor Wi-Fi · 2 Postes Metálicos ($17.000 c/u). Llegada estimada: 7 a 12 días."
                price="$529.000"
              />
              <PriceRow
                label="Kit Internet Starlink"
                sublabel="Antena Starlink completa, base de colgar, envío y primer mes pagado. Llegada estimada: 2 a 4 semanas."
                price="$425.000"
              />
              <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-3">
                <span className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest">
                  Subtotal equipos
                </span>
                <span className="text-amber-400 font-bold text-lg sm:text-xl tabular-nums">
                  $954.000
                </span>
              </div>
            </SectionBlock>

            {/* Mano de obra */}
            <SectionBlock index={2} icon={Wrench} title="Mano de obra e instalación">
              <div>
                {laborItems.map((item, i) => (
                  <PriceRow
                    key={i}
                    label={item.label}
                    sublabel={item.detail}
                    price={item.price}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-3">
                <span className="text-neutral-400 text-xs sm:text-sm uppercase tracking-widest">
                  Subtotal instalación
                </span>
                <span className="text-amber-400 font-bold text-lg sm:text-xl tabular-nums">
                  $340.000
                </span>
              </div>
            </SectionBlock>

            {/* Total */}
            <div className="px-5 sm:px-8 py-7 sm:py-9 bg-gradient-to-br from-amber-500/[0.06] via-transparent to-transparent">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-neutral-400 text-xs uppercase tracking-[0.25em] mb-2">
                    Inversión total
                  </p>
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Equipos + instalación completa, listo para usar.
                  </p>
                </div>
                <p className="text-amber-300 font-black text-4xl sm:text-6xl tracking-tight tabular-nums leading-none">
                  $1.294.000
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* GARANTÍAS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-14 sm:mb-20">
          <FeatureCard
            icon={ShieldCheck}
            title="Garantía 12 meses"
            desc="Cobertura completa en todos los equipos instalados."
          />
          <FeatureCard
            icon={Wrench}
            title="Soporte técnico"
            desc="Asistencia remota y seguimiento post-instalación."
          />
          <FeatureCard
            icon={CheckCircle2}
            title="Instalación certificada"
            desc="Técnicos con experiencia comprobada en terreno."
          />
        </section>

        {/* CTA FINAL */}
        <motion.section
          {...fadeUp}
          className="text-center mb-16 sm:mb-24 rounded-2xl sm:rounded-3xl border border-neutral-900 bg-neutral-950/40 px-6 sm:px-10 py-12 sm:py-16"
        >
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight">
            ¿Listo para proteger su campo
            <br className="hidden sm:block" /> con tecnología real?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-md mx-auto">
            Confirme el presupuesto y coordinaremos la fecha de instalación con usted.
          </p>

          <div className="mt-8 flex justify-center">
            <OutlineButton
              as="a"
              href="https://wa.me/56912345678?text=Hola,%20acepto%20el%20presupuesto%20de%20Don%20Hugo"
              target="_blank"
              rel="noreferrer"
            >
              Aceptar presupuesto
            </OutlineButton>
          </div>

          <p className="text-neutral-600 text-xs mt-5">
            Al confirmar, nos pondremos en contacto para coordinar la instalación.
          </p>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-5 sm:px-8 py-8 border-t border-neutral-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Soluciones Fabrick — División Tecnológica.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
