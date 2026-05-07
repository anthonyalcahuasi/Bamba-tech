"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  // Estado para controlar el modal
  // Estados existentes
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "51924685605"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20necesito%20soporte%20t%C3%A9cnico%20de%20Bamba%20Tech.`;

  // NUEVOS ESTADOS PARA EL FORMULARIO
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    servicio: "Mantenimiento PC/Laptop",
    descripcion: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle', 'success', 'error'

  // FUNCIÓN PARA ENVIAR LOS DATOS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // AQUÍ PONDRÁS LA URL DE TU WEBHOOK (ej. n8n)
      const WEBHOOK_URL = "https://us2.make.com/public/shared-scenario/NJKZ9BCrroQ/bamba-tech";

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Limpiar formulario y cerrar modal después de 2 segundos
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus("idle");
          setFormData({ nombre: "", celular: "", servicio: "Mantenimiento PC/Laptop", descripcion: "" });
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bamba-light text-gray-800 tracking-tight relative">
      
      {/* Navegación */}
      <nav className="sticky top-4 z-40 mx-auto max-w-7xl px-8 py-4 bg-white/80 backdrop-blur-md border border-white/40 shadow-sm rounded-2xl flex justify-between items-center mb-8 transition-all">
        
        {/* Logo de Bamba Tech */}
        <a href="#" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Bamba Tech Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#como-funciona" className="hover:text-bamba-blue transition-colors pb-1">Cómo Funciona</a>
          <a href="#servicios" className="hover:text-bamba-blue transition-colors pb-1">Servicios</a>
          <a href="#elegirnos" className="hover:text-bamba-blue transition-colors pb-1">¿Por qué elegirnos?</a>
          <a href="#contacto" className="hover:text-bamba-blue transition-colors pb-1">Contacto</a>

        </div>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bamba-green text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-500 transition-all shadow-md inline-block"
        >
          Pedir un Técnico
        </a>
      </nav>

      {/* Hero Section - Nivel PRO */}
      <section className="relative pt-16 pb-24 px-6 max-w-7xl mx-auto min-h-[600px] flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        
        {/* Resplandor de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-green-50 rounded-full blur-[120px] opacity-60"></div>
        </div>

        {/* Columna Izquierda con Animación de entrada */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-8 relative z-10"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bamba-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bamba-blue"></span>
            </span>
            <span className="text-bamba-blue text-sm font-semibold tracking-wide">Soporte Técnico en Quillabamba</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Tu tecnología en las <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bamba-blue to-blue-400">mejores manos</span>, <br />
            sin moverte de casa.
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed">
            Diagnóstico, reparación y mantenimiento de computadoras y redes directamente en tu domicilio. Rápido, seguro y garantizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-bamba-green text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#00b368] transition-all shadow-[0_8px_30px_rgb(0,200,117,0.3)] hover:shadow-[0_8px_30px_rgb(0,200,117,0.5)] hover:-translate-y-0.5"
            >
              Agendar Visita
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="#servicios"
              className="group flex items-center justify-center gap-2 bg-white text-gray-600 border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:border-bamba-blue hover:text-bamba-blue hover:bg-blue-50/50 transition-all"
            >
              Ver Servicios
            </a>
          </div>

          {/* Social Proof pequeño */}
          <div className="pt-4 flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden z-${4-i}`}>
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Cliente" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Clientes satisfechos</p>
          </div>
        </motion.div>

        {/* Columna Derecha con Imagen y Flotantes Avanzados */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full flex justify-center md:justify-end relative z-10 mt-10 md:mt-0"
        >
          {/* Contenedor Padre (SIN overflow-hidden) para permitir que los íconos sobresalgan */}
          <div className="w-full max-w-md aspect-square md:aspect-[4/5] relative">
            
            {/* Contenedor exclusivo para la Imagen (CON overflow-hidden para redondear bordes) */}
            <div className="absolute inset-0 rounded-[2.5rem] shadow-2xl overflow-hidden group border border-gray-100 z-0">
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1000&auto=format&fit=crop" 
                alt="Técnico Bamba Tech" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bamba-blue/20 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Íconos Flotantes (Ahora están FUERA del contenedor que corta, con z-10 para estar por encima) */}
            
            {/* Ícono Wi-Fi (Arriba derecha) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} 
              className="absolute top-10 -right-4 md:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 text-bamba-blue z-10"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
            </motion.div>

            {/* Ícono Engranaje (Centro Derecha) */}
            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }} 
              className="absolute top-1/2 -right-6 md:-right-10 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/50 text-orange-500 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </motion.div>

            {/* Ícono Escudo con texto (Abajo Izquierda) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} 
              className="absolute bottom-10 -left-6 md:-left-12 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-10"
            >
              <div className="bg-green-100 p-2 rounded-full text-bamba-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">100% Seguro</p>
                <p className="text-xs text-gray-500">Garantía incluida</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Contenedores para las siguientes secciones */}
      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-24 bg-white px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
          <p className="text-gray-500 mb-16 text-lg">Un proceso simple y transparente diseñado para tu comodidad.</p>
          
          <div className="relative max-w-5xl mx-auto">
            
            {/* Línea conectora de fondo (Solo visible en Desktop) */}
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                { step: "01", color: "blue", title: "Contáctanos", desc: "Escríbenos y cuéntanos el problema. Te responderemos al instante.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
                { step: "02", color: "green", title: "Te Visitamos", desc: "Un técnico experto llega a tu puerta en el horario acordado.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { step: "03", color: "teal", title: "Problema Resuelto", desc: "Reparamos tu equipo al instante con garantía de satisfacción.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all relative overflow-hidden group text-left"
                >
                  {/* Marca de agua gigante de fondo */}
                  <div className="absolute -bottom-6 -right-4 text-9xl font-black text-gray-50 group-hover:text-gray-100 transition-colors z-0 pointer-events-none select-none">
                    {item.step}
                  </div>

                  {/* Círculo superior decorativo (Efecto de luz) */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${item.color}-50 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity z-0`}></div>

                  {/* Icono */}
                  <div className={`bg-${item.color}-50 text-${item.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-sm border border-white group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                  </div>

                  {/* Contenido (Etiqueta de Paso + Título + Texto) */}
                  <div className="relative z-10">
                    <span className={`inline-block text-xs font-bold text-${item.color}-600 bg-${item.color}-100 px-3 py-1 rounded-full mb-3 tracking-wide uppercase`}>
                      Paso {i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Nuestros Servicios */}
      <section id="servicios" className="py-24 bg-bamba-light px-6 border-t border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-500 mb-16 text-lg">Soluciones integrales para todas tus necesidades tecnológicas.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { 
                title: "Mantenimiento Preventivo y Correctivo", 
                desc: "Prolonga la vida de tus equipos con nuestro servicio especializado en hardware y software.", 
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Diagnóstico y Reparación de Hardware", 
                desc: "Solucionamos fallas físicas de manera rápida y precisa, reemplazando componentes dañados.", 
                icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Instalación de Redes, Wi-Fi y Cámaras", 
                desc: "Conectividad y seguridad robusta para tu hogar o negocio. Cero puntos ciegos en tu red.", 
                icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Optimización y Limpieza de Virus", 
                desc: "Recupera la velocidad original de tu equipo y protege tus datos sensibles de amenazas.", 
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
              }
            ].map((servicio, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden flex flex-col"
              >
                {/* Imagen Superior con efecto Hover */}
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={servicio.image} 
                    alt={servicio.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Capa superpuesta azul sutil */}
                  <div className="absolute inset-0 bg-bamba-blue/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                </div>

                {/* Contenedor Inferior de Texto */}
                <div className="p-8 pt-10 relative flex flex-col flex-1">
                  
                  {/* Ícono Flotante (Truco de diseño: se posiciona en medio de la foto y el texto) */}
                  <div className="absolute -top-8 left-8 bg-white p-2 rounded-2xl shadow-sm">
                    <div className="bg-blue-50 text-bamba-blue w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-bamba-blue group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={servicio.icon}></path></svg>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 text-xl mb-3">{servicio.title}</h4>
                  <p className="text-gray-500 text-base leading-relaxed">{servicio.desc}</p>
                </div>
                
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Por qué elegirnos - Versión PRO */}
      <section id="elegirnos" className="py-24 bg-bamba-blue text-white px-6 relative overflow-hidden">
        
        {/* Decoración de fondo: Resplandor (Glow) para dar profundidad */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[130px] opacity-40 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Por qué elegirnos</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-md">Nuestro compromiso es brindarte soluciones tecnológicas estables, seguras y sin demoras.</p>
            
            <div className="space-y-4">
              {[
                { title: "Atención rápida en el día", desc: "Entendemos la urgencia. Llegamos cuando más nos necesitas.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Transparencia total", desc: "Precios claros desde el primer momento, sin sorpresas.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
                { title: "Soporte especializado", desc: "Técnicos certificados con años de experiencia en el sector.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
              ].map((beneficio, idx) => (
                
                // Efecto de iluminación interactiva al pasar el mouse (Hover Card)
                <div key={idx} className="flex gap-5 p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-default group">
                  <div className="bg-white/10 p-4 rounded-xl h-fit shadow-inner group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={beneficio.icon}></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white group-hover:text-blue-100 transition-colors">{beneficio.title}</h4>
                    <p className="text-blue-200 text-sm mt-1.5 leading-relaxed">{beneficio.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gráfico representativo derecho */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            {/* Contenedor de la Imagen */}
            <div className="w-full h-80 md:h-[500px] rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1604754742629-3e5728249d73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Soporte técnico de hardware" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-bamba-blue/40 mix-blend-multiply transition-opacity duration-500 group-hover:bg-bamba-blue/30"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bamba-blue to-transparent opacity-80"></div>
            </div>

            {/* INSIGNIA FLOTANTE (Badge) - El detalle "Pro" */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg leading-tight">Servicio Garantizado</p>
                <p className="text-gray-500 text-sm">Respuesta en el mismo día</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* Footer Nivel Corporativo */}
      <footer id="contacto" className="bg-gray-50 pt-24 pb-10 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid Principal del Footer */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Columna 1: Marca y CTA (Toma 4 columnas de espacio) */}
            <div className="md:col-span-4 space-y-6">
              <a href="#" className="inline-block">
                <img 
                  src="/logo.png" 
                  alt="Bamba Tech Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </a>
              <p className="text-gray-500 text-sm leading-relaxed pr-6">
                Tu socio estratégico en soporte técnico e infraestructura de redes. Brindamos soluciones rápidas, seguras y efectivas directamente en tu domicilio o empresa.
              </p>
              <div className="flex gap-4 pt-2">
                {/* Íconos Sociales (Placeholders) */}
                <a href="#" className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-bamba-blue hover:shadow-md transition-all border border-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-bamba-blue hover:shadow-md transition-all border border-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.708-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos (Toma 2 columnas) */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Empresa</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-bamba-blue transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-200"></span> Inicio</a></li>
                <li><a href="#como-funciona" className="hover:text-bamba-blue transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-200"></span> Cómo Funciona</a></li>
                <li><a href="#servicios" className="hover:text-bamba-blue transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-200"></span> Servicios</a></li>
                <li><a href="#elegirnos" className="hover:text-bamba-blue transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-200"></span> Por qué elegirnos</a></li>
              </ul>
            </div>

            {/* Columna 3: Servicios Especializados (Toma 3 columnas) */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Especialidades</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#servicios" className="hover:text-bamba-blue transition-colors">Soporte Hardware y Software</a></li>
                <li><a href="#servicios" className="hover:text-bamba-blue transition-colors">Diseño de Redes y Wi-Fi</a></li>
                <li><a href="#servicios" className="hover:text-bamba-blue transition-colors">Sistemas CCTV y Seguridad</a></li>
                <li><a href="#servicios" className="hover:text-bamba-blue transition-colors">Mantenimiento Preventivo</a></li>
              </ul>
            </div>

            {/* Columna 4: Contacto y Operaciones (Toma 3 columnas) */}
            <div className="md:col-span-3 space-y-6">
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Contacto Directo</h4>
              
              <div className="space-y-4 text-sm text-gray-500">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-bamba-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <p className="leading-relaxed">Quillabamba, La Convención<br />Cusco, Perú</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-bamba-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p>Lun - Dom: 8:00 AM - 10:00 PM</p>
                </div>
              </div>

              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#1ebe5d] transition-all shadow-md flex items-center gap-2 w-fit mt-4"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.765-5.77zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                Chat por WhatsApp
              </a>
            </div>

          </div>

          {/* Línea inferior (Copyright y Legales) */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm font-medium text-gray-400 gap-4">
            <p>© 2026 Bamba Tech. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-600 transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Política de Privacidad</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Modal de Agendamiento */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Agendar Visita</h3>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>

                {submitStatus === "success" ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h4>
                    <p className="text-gray-500">Hemos recibido tus datos. Nos contactaremos pronto.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                      <input 
                        type="text" required 
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bamba-blue focus:border-transparent outline-none transition-all" 
                        placeholder="Ej. Juan Pérez" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
                        <input 
                          type="tel" required 
                          value={formData.celular}
                          onChange={(e) => setFormData({...formData, celular: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bamba-blue focus:border-transparent outline-none transition-all" 
                          placeholder="999 999 999" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Servicio Requerido</label>
                        <select 
                          value={formData.servicio}
                          onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bamba-blue focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option>Mantenimiento PC/Laptop</option>
                          <option>Redes y Wi-Fi</option>
                          <option>Instalación de Cámaras</option>
                          <option>Otro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Describe el problema brevemente</label>
                      <textarea 
                        rows={3} 
                        value={formData.descripcion}
                        onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-bamba-blue focus:border-transparent outline-none transition-all resize-none" 
                        placeholder="Mi laptop está muy lenta..."
                      ></textarea>
                    </div>

                    {submitStatus === "error" && (
                      <p className="text-red-500 text-sm text-center">Hubo un error al enviar. Intenta de nuevo.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-bamba-blue text-white py-3.5 rounded-xl font-medium hover:bg-blue-700 transition-all mt-2 shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          Enviando...
                        </>
                      ) : (
                        "Enviar Solicitud"
                      )}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">Tus datos están seguros. Nos contactaremos en los próximos 15 minutos.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
