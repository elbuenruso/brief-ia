import { motion } from "motion/react"; // Nota: En tu PC usa "framer-motion" en lugar de "motion/react"
import { 
  Cpu, 
  Database, 
  Layout, 
  MessageSquare, 
  PieChart, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Search,
  MapPin,
  Mail,
  Download
} from "lucide-react";

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <span className="text-4xl font-bold text-brand-blue/20 font-mono">{number}</span>
    <h2 className="text-3xl font-bold tracking-tight text-brand-dark uppercase">{title}</h2>
  </div>
);

const CaseStudy = ({ 
  id, 
  title, 
  subtitle, 
  problem, 
  solution, 
  impact, 
  architecture,
  icon: Icon
}: any) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="py-20 border-b border-gray-100"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-brand-blue text-white rounded-lg">
              <Icon size={24} />
            </div>
            <span className="text-sm font-bold tracking-widest text-brand-blue uppercase">Caso {id}</span>
          </div>
          <h3 className="text-4xl font-bold mb-4 leading-tight">{title}</h3>
          <p className="text-lg text-gray-500 mb-8 italic">{subtitle}</p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Problema</h4>
              <p className="text-gray-700 leading-relaxed">{problem}</p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Impacto</h4>
              <ul className="space-y-2">
                {impact.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-brand-blue mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-brand-grey rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Arquitectura & Proceso</h4>
          
          <div className="space-y-6">
            {architecture.map((step: string, i: number) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold shadow-sm">
                  {i + 1}
                </div>
                <div className="flex-1 p-4 bg-white rounded-xl border border-gray-100 shadow-sm font-medium text-sm">
                  {step}
                </div>
                {i < architecture.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight size={16} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Autonomía</h4>
            <div className="grid grid-cols-2 gap-4">
              {solution.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-brand-dark">
                  <Zap size={14} className="text-brand-blue fill-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1a4da1,transparent_70%)]" />
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full" />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-brand-blue text-brand-blue text-xs font-bold tracking-[0.3em] uppercase mb-8 rounded-full">
              Brief de Proyectos 2024-2025
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              SISTEMAS <br />
              <span className="text-brand-blue">AUTÓNOMOS</span> <br />
              EN PRODUCCIÓN
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl mb-12">
              Arquitectura, Orquestación y Motores de Decisión para la automatización operativa real.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10 items-center justify-between w-full">
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Arquitecto</p>
                  <p className="font-bold">Uriel Ríos Cervantes</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Especialidad</p>
                  <p className="font-bold">Sistemas Autónomos</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Ubicación</p>
                  <p className="font-bold flex items-center gap-1">
                    <MapPin size={14} /> CDMX | México
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.print()}
                className="no-print flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/20"
              >
                <Download size={18} /> Exportar PDF
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
        </motion.div>
      </header>

      {/* Executive Summary */}
      <section className="py-32 bg-brand-grey">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader number="00" title="Resumen Ejecutivo" />
          <p className="text-2xl md:text-3xl leading-relaxed text-brand-dark font-medium mb-12">
            Diseño y despliego sistemas autónomos operativos que reemplazan procesos manuales, 
            orquestan múltiples fuentes de datos y ejecutan acciones sin intervención humana directa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Eliminación de roles reactivos de soporte",
              "Automatización de reportes ejecutivos diarios",
              "Transformación de señales en decisiones",
              "Operación continua en entornos reales"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Activity size={20} />
                </div>
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-brand-blue text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Enfoque en Producción</h4>
              <p className="text-blue-100">No desarrollo prototipos conceptuales. Desarrollo sistemas que operan en producción.</p>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 font-bold uppercase tracking-widest text-xs">
              Sistemas Operativos
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudy 
        id="1"
        title="Agente Operativo Conversacional"
        subtitle="(MyAppMonitor + Bot WhatsApp)"
        icon={MessageSquare}
        problem="Cuello de botella operativo en diagnóstico técnico. Los técnicos en campo dependían de un ejecutivo para validar el estado de dispositivos en tienda."
        impact={[
          "Eliminación del rol reactivo de soporte",
          "Reducción de diagnóstico de minutos a segundos",
          "Estandarización de validación técnica",
          "Cobertura continua sin supervisión"
        ]}
        architecture={[
          "Técnico solicita vía WhatsApp (Twilio)",
          "Webhook Listener recibe la señal",
          "Motor de Orquestación (Flask) consulta APIs",
          "Validación de MeshCentral, IPs y Cámaras",
          "Respuesta estructurada automática al técnico"
        ]}
        solution={[
          "Acciones automáticas",
          "Sin intervención humana",
          "Estatus en segundos",
          "Disponible 24/7"
        ]}
      />

      <CaseStudy 
        id="2"
        title="Pipeline Autónomo de Reporteo"
        subtitle="(Monitoring Daily Update)"
        icon={PieChart}
        problem="Generación manual de reportes diarios. Los reportes operativos se generaban manualmente en Excel, consumiendo tiempo valioso y con alto riesgo de error."
        impact={[
          "Eliminación total de tarea manual diaria",
          "Reducción drástica de errores humanos",
          "Liberación de tiempo para análisis",
          "Sistema estable en producción"
        ]}
        architecture={[
          "Extracción automática vía GraphQL API",
          "Procesamiento de datos con Pandas",
          "Generación de Excel multi-hoja",
          "Envío automático vía SMTP",
          "Distribución programada a ejecutivos"
        ]}
        solution={[
          "Ejecución programada diaria",
          "Generación estructurada",
          "Distribución sin intervención",
          "Soporte formatos legacy"
        ]}
      />

      <CaseStudy 
        id="3"
        title="Motor de Decisión Multi-Señal"
        subtitle="(PSI + RADAR)"
        icon={Cpu}
        problem="Señales comerciales dispersas y análisis manual. Se analizaban fragmentadamente sell-out, inventario, pricing y competencia sin integración."
        impact={[
          "Conversión de datos dispersos en decisiones",
          "Reducción de fricción comercial",
          "Estandarización de análisis",
          "Motor de lógica reutilizable"
        ]}
        architecture={[
          "Ingesta de señales internas y externas",
          "Normalización de datos en tiempo real",
          "Motor de Scoring personalizado",
          "Generación de Flags de Riesgo",
          "Brief Ejecutivo Automático con acción sugerida"
        ]}
        solution={[
          "Scoring continuo",
          "Clasificación automática",
          "Alertas estructuradas",
          "Abstracción de decisión"
        ]}
      />

      <CaseStudy 
        id="4"
        title="Sistema Phygital Autónomo"
        subtitle="(Retail Interactive System)"
        icon={Layout}
        problem="Activación interactiva en entorno físico con estabilidad operativa. Se requería un entorno de kiosco estable con persistencia e integración backend."
        impact={[
          "Sistema estable en retail real",
          "Engagement medible y persistente",
          "Capa de inteligencia sobre hardware",
          "Operación sin supervisión técnica"
        ]}
        architecture={[
          "VSBLTY Mini PC (Ubuntu) como base",
          "Overlay Trigger para interacción",
          "Browser en Modo Kiosco",
          "Flask App gestionando lógica local",
          "Integración con SQLite y SMTP Engine"
        ]}
        solution={[
          "Corre sin supervisión",
          "Persistencia local",
          "Notificaciones automáticas",
          "Integración Full-stack"
        ]}
      />

      {/* Additional Systems */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader number="05" title="Sistemas Adicionales" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-blue rounded-xl">
                  <Search size={24} />
                </div>
                <h4 className="text-2xl font-bold">LinkedIn Job Judge</h4>
              </div>
              <p className="text-gray-400 mb-8">Motor de scoring CV vs Vacante. Automatiza la extracción de texto y ponderación de perfiles.</p>
              <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                <Zap size={14} /> ACELERACIÓN DE RECLUTAMIENTO
              </div>
            </div>

            <div className="p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-blue rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-2xl font-bold">Detección de Fraude</h4>
              </div>
              <p className="text-gray-400 mb-8">Piloto de validación documental mediante OCR y clasificadores de estructura para IMG/PDF.</p>
              <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                <Zap size={14} /> REDUCCIÓN DE RIESGO FINANCIERO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <footer className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-blue">
            <Database size={40} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Patrón Arquitectónico Repetido</h2>
          <p className="text-xl text-gray-500 mb-12">
            En todos los casos: Identificación de proceso manual → Modelado como sistema → 
            Integración multi-fuente → Motor estructurado → Despliegue en producción → Autonomía operativa real.
          </p>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Contacto</p>
              <p className="text-lg font-bold">Uriel Ríos Cervantes</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:rususrc@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-brand-blue transition-colors">
                <Mail size={18} /> Contactar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}