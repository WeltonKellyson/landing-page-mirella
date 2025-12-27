import fundo from '../assets/fundo1.png';
import logo from '../assets/Logo.png';
import aparelho1 from '../assets/aparelho1.png';
import aparelho2 from '../assets/aparelho2.jpg';
import aparelho3 from '../assets/aparelho3.png';
import aparelho4 from '../assets/aparelho4.jpg';
//import aparelho5 from '../assets/aparelho1.png';
import fundo1 from '../assets/img6.jpeg';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import React from "react";

type CounterProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  run?: boolean;
};

function Counter({ end, duration = 2, prefix = "", suffix = "", run = true }: CounterProps) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let frame: number;
    if (!run) {
      setValue(0);
      return;
    }
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, run]);

  return (
    <>
      {prefix}
      {value.toLocaleString("pt-BR")}
      {suffix}
    </>
  );
}


const testimonials = [
  {
    name: 'Maria Eduarda',
    text: 'O atendimento domiciliar fez toda diferença para a recuperação da minha mãe. Muito atenciosa e profissional.',
    stars: 5,
  },
  {
    name: 'João Henrique',
    text: 'Minha filha adora as sessões! A fisioterapeuta trabalha com muita paciência e criatividade.',
    stars: 5,
  },
  {
    name: 'Dona Francisca',
    text: 'Tive uma melhora significativa nas dores após poucas sessões. Recomendo demais!',
    stars: 5,
  },
  {
    name: 'Carlos Alberto',
    text: 'Profissional excelente, explica tudo com clareza e acompanha cada evolução.',
    stars: 5,
  },
  {
    name: 'Helena Souza',
    text: 'Gostei muito da dedicação e do cuidado. Sempre pontual e muito humana.',
    stars: 5,
  },
  {
    name: 'Seu Antônio',
    text: 'A reabilitação do meu pai só foi possível graças ao trabalho dela. Muito competente!',
    stars: 5,
  },
  {
    name: 'Letícia Ramos',
    text: 'Os exercícios com faixas elásticas ajudaram muito na minha mobilidade. Atendimento nota 10!',
    stars: 5,
  },
  {
    name: 'Paulo Roberto',
    text: 'Meu filho evoluiu muito em equilíbrio e coordenação. Atendimento divertido e eficaz.',
    stars: 5,
  },
  {
    name: 'Marina Lopes',
    text: 'Atendimento acolhedor, cuidadoso e personalizado. Me senti bem desde a primeira sessão.',
    stars: 5,
  },
  {
    name: 'Dona Betina',
    text: 'Recomendo a todos que precisam de fisioterapia. O tratamento é completo e muito profissional.',
    stars: 5,
  },
  {
    name: 'Seu João',
    text: 'Depois das sess?es, voltei a caminhar com mais seguran?a e confian?a. Atendimento excelente e muito atencioso.',
    stars: 5,
  },
  {
    name: 'Dona Maria',
    text: 'A fisioterapia em casa facilitou muito minha rotina. Profissional dedicada, cuidadosa e sempre pontual.',
    stars: 5,
  },
];

const items = [
  {
    title: 'Reabilitação motora',
    desc: 'AVC, fraturas, pós-cirúrgico e mobilidade.',
    img: img1,
  },
  {
    title: 'Fortalecimento muscular',
    desc: 'Força, estabilidade e equilíbrio.',
    img: img2,
  },
  {
    title: 'Alongamentos e mobilidade',
    desc: 'Flexibilidade e amplitude dos movimentos.',
    img: img3,
  },
  {
    title: 'Treino de marcha e postura',
    desc: 'Caminhada correta e ajustes posturais.',
    img: img4,
  },
  {
    title: 'Prevenção de quedas',
    desc: 'Equilíbrio, coordenação e segurança.',
    img: img5,
  },
  {
    title: 'Tratamento de dores',
    desc: 'Técnicas manuais e liberação miofascial.',
    img: img6,
  },
  {
    title: 'Estimulação precoce infantil',
    desc: 'Desenvolvimento motor e coordenação.',
    img: img7,
  },
  {
    title: 'Reabilitação respiratória',
    desc: 'Respiração, secreções e capacidade pulmonar.',
    img: img8,
  },
];

const aparelhos = [
  {
    title: 'Faixas elásticas (Thera Band)',
    desc: 'Fortalecimento, alongamento e exercícios funcionais.',
    img: aparelho2,
  },
  {
    title: 'Bola suíça terapêutica',
    desc: 'Equilíbrio, postura, coordenação e fortalecimento.',
    img: aparelho3,
  },
  {
    title: 'Mini Band',
    desc: 'Excelente para quadril, glúteos, joelhos e estabilidade.',
    img: aparelho2,
  },
  {
    title: 'TENS/EMS portátil',
    desc: 'Redução da dor e estimulação muscular.',
    img: aparelho1,
  },
  {
    title: 'Step / Plataforma de equilíbrio',
    desc: 'Marcha, força de MMII e prevenção de quedas.',
    img: aparelho4,
  },
];

const faqs = [
  {
    question: "O atendimento é realmente domiciliar?",
    answer:
      "Sim! A fisioterapia é realizada diretamente na sua casa, com toda praticidade e conforto. Levo todos os materiais necessários para o tratamento.",
  },
  {
    question: "Preciso de encaminhamento médico?",
    answer:
      "Não obrigatoriamente. No entanto, se você tiver uma recomendação médica, ela ajuda a direcionar ainda melhor o tratamento.",
  },
  {
    question: "Quantas sessões preciso para ver resultados?",
    answer:
      "Cada caso é único, mas a maioria dos pacientes relata melhora entre 1 e 3 sessões. No primeiro atendimento faço uma avaliação completa para definir o plano ideal.",
  },
  {
    question: "Atende quais tipos de pacientes?",
    answer:
      "Atendo idosos, adultos, crianças, pacientes pós-cirúrgicos, pessoas com AVC, dores musculares, limitações de mobilidade, estimulação precoce e muito mais.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "PIX e cartão. Não realizo atendimento via planos de saúde.",
  },
];


export default function Hero() {
  const name = "Mirella Albuquerque";
  const nameDelayPerLetter = 0.04;
  const nameTypingDuration = name.length * nameDelayPerLetter;
  const subtitleDelay = nameTypingDuration + 0.3;
  // Dados das métricas usadas no contador animado
  const metrics = [
    { label: "Pacientes atendidos", value: 200, suffix: "", duration: 2.2 },
    { label: "Anos de experiência", value: 3, suffix: "", duration: 1.6 },
    { label: "Pacientes satisfeitos", value: 100, suffix: "%", duration: 1.8 },
  ];
  // Número de cards por vez → responsivo
  // Responsividade do carrossel de depoimentos (quantidade de cards por tela)
  const getCardsPerView = () => {
    if (window.innerWidth < 640) return 1;     // Mobile
    if (window.innerWidth < 1024) return 2;    // Tablet
    return 3;                                  // Desktop
  };

  // Estado do carrossel de depoimentos
  const [visibleCards, setVisibleCards] = useState(getCardsPerView());

  // Avanço automático do carrossel (pausa em hover)
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Estado do carrossel de depoimentos
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalPages = Math.ceil(testimonials.length / visibleCards);

  // Sempre volta para a primeira pagina ao mudar quantidade de cards visiveis
  useEffect(() => {
    setCurrentPage(0);
  }, [visibleCards]);

  // Auto avanca as paginas
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages, isPaused]);

  const currentStart = currentPage * visibleCards;
  const currentTestimonials = testimonials.slice(currentStart, currentStart + visibleCards);
  // Estado do FAQ (qual item está aberto)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: treatmentsRef, inView: treatmentsInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: devicesRef, inView: devicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });
  // const [mapSelection, setMapSelection] = useState<"recife" | "jaboatao" | "olinda" | "camaragibe">("recife");
  // Auto-rotate mapa (desativado; ative se quiser ciclo automático de regiões)
  // const mapOrder: Array<"recife" | "jaboatao" | "olinda" | "camaragibe"> = ["recife", "jaboatao", "olinda", "camaragibe"];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMapSelection((prev) => {
  //       const currentIndex = mapOrder.indexOf(prev);
  //       const nextIndex = (currentIndex + 1) % mapOrder.length;
  //       return mapOrder[nextIndex];
  //     });
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  const mapSelection = "recife";
  const avatarPalettes = [
    "linear-gradient(135deg, #1F4E79, #6FAFE3)",
    "linear-gradient(135deg, #2F6DA6, #1F4E79)",
    "linear-gradient(135deg, #173f63, #2F6DA6)",
    "linear-gradient(135deg, #285F97, #6FAFE3)",
  ];
  const hasMultiplePages = totalPages > 1;

  return (
    <>
    <style>{`html { scroll-behavior: smooth; }`}</style>
    {/* ===== SEÇÃO 1 — HERO ===== */}
      <section
        id="hero"
        className="relative w-full overflow-x-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fundo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/18 to-white/10" />
        <div className="relative max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32 min-h-[85vh] flex items-center pb-10">
          <div className="flex-1 flex flex-col items-center text-center space-y-2">
            
            {/* ===== TEXTO ===== */}
            <div className="flex-1 space-y-4 text-center md:text-center">

              {/* LOGO com pulso suave */}
              <motion.img 
                src={logo}
                alt="Logo Mirella"
                className="
                  w-80 
                  mx-auto
                  mb-2 md:mb-4
                "
                style={{ objectFit: 'contain' }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                loading="lazy"
              />

              {/* Nome com efeito de digitação em gradiente */}
              <div className="
                flex flex-wrap justify-center md:justify-center
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold leading-[1.1]
                bg-gradient-to-r from-[#0F2B46] via-[#1F4E79] to-[#2F6DA6]
                bg-clip-text text-transparent
                drop-shadow-[0_12px_28px_rgba(0,0,0,0.3)]
              ">
                {name.split("").map((char, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * nameDelayPerLetter, duration: 0.3 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              {/* Subtítulo com atraso após a digitação */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: subtitleDelay, duration: 0.45, ease: "easeOut" }}
                className="
                  inline-flex flex-wrap items-center justify-center gap-3
                  px-5 sm:px-6 py-3 rounded-2xl        
                  text-[#0c2339] text-lg sm:text-xl md:text-xl font-semibold tracking-tight
                  text-center
                  max-w-full
                "
              >
                <span className="bg-gradient-to-r from-[#0F2B46] to-[#2F6DA6] bg-clip-text text-transparent">
                  Fisioterapia domiciliar e particular em Recife e região
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTÃO CENTRAL */}
        <div className="text-center mb-10">
          <div className="relative inline-flex group">
            {/* Halo suave para destacar o botão */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#6FAFE3]/50 via-[#1F4E79]/40 to-[#6FAFE3]/50 blur-lg opacity-70 group-hover:opacity-90 transition" />

            <a
              href="#"
              target="_blank"
              aria-label="Agendar avaliação via WhatsApp"
              className="
                relative inline-flex items-center gap-3
                px-14 py-3 rounded-2xl
                bg-gradient-to-r from-[#1F4E79] via-[#285F97] to-[#6FAFE3]
                text-white font-semibold shadow-[0_20px_40px_rgba(31,78,121,0.35)]
                ring-2 ring-white/20 ring-offset-2 ring-offset-[#1F4E79]/30
                transition-all duration-300 ease-out
                hover:translate-y-[-2px] hover:shadow-[0_25px_45px_rgba(31,78,121,0.45)]
                active:translate-y-[0px] active:shadow-[0_12px_28px_rgba(31,78,121,0.35)]
                animate-[pulse-custom_2.4s_ease-in-out_infinite]
              "
            >
              Agendar uma avaliação gratis
            </a>
          </div>
        </div>

        {/* ===== SEÇÃO 2 — SERVIÇOS ===== */}
        <div id="servicos" className="w-full bg-gradient-to-r from-[#1F4E79] via-[#194268] to-[#0F2B46] text-white py-10 px-6">
          <div
            ref={servicesRef}
            className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-center"
          >

            {/* CARD 1 */}
            <motion.div
              className="flex flex-col items-center space-y-3 hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 24 }}
              animate={
                servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.5, delay: 0 * 0.12, ease: "easeOut" }}
            >
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Reabilitação Motora</h3>
              <p className="text-sm opacity-90">AVC, fraturas e mobilidade</p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="flex flex-col items-center space-y-3 hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 24 }}
              animate={
                servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.5, delay: 1 * 0.12, ease: "easeOut" }}
            >
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Fortalecimento & Mobilidade</h3>
              <p className="text-sm opacity-90">Alongamentos e equilíbrio</p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="flex flex-col items-center space-y-3 hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 24 }}
              animate={
                servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.5, delay: 2 * 0.12, ease: "easeOut" }}
            >
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Tratamento da Dor</h3>
              <p className="text-sm opacity-90">Técnicas manuais</p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              className="flex flex-col items-center space-y-3 hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 24 }}
              animate={
                servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.5, delay: 3 * 0.12, ease: "easeOut" }}
            >
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Respiração & Orientação</h3>
              <p className="text-sm opacity-90">Acompanhamento familiar</p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ===== SEÇÃO 3 — DOENÇAS E TRATAMENTOS ===== */}
      <section id="tratamentos" className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#F0F6FF] py-20 px-6 overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto text-center mb-14 px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79]">
            Doenças e <span className="text-[#2F6DA6]">Tratamentos</span>
          </h2>
          <p className="text-[#2F6DA6] text-lg mt-2">
            Conheça alguns tipos de dores e condições tratadas rotineiramente
          </p>
        </div>

        {/* GRID 5 EM CIMA + 5 EMBAIXO */}
        <div
          ref={treatmentsRef}
          className="
            max-w-[1200px] mx-auto px-4 sm:px-6
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-10
          "
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0] flex flex-col hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={
                treatmentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.55,
                delay: (index < 4 ? index : (index - 4) + 4) * 0.12,
                ease: "easeOut",
              }}
            >
              {/* FOTO */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* CONTEÚDO */}
              <div className="bg-gradient-to-r from-[#1F4E79] via-[#285F97] to-[#1F4E79] p-6 text-center text-white flex flex-col flex-grow">
                {/* TITULO */}
                <h3 className="text-lg font-semibold">{item.title}</h3>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-blue-100 mt-2 flex-grow">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO CENTRAL */}
        <div className="text-center mt-14">
          <div className="relative inline-flex group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#6FAFE3]/50 via-[#1F4E79]/40 to-[#6FAFE3]/50 blur-lg opacity-70 group-hover:opacity-90 transition" />

            <a
              href="#"
              target="_blank"
              aria-label="Agendar avaliação via WhatsApp"
              className="
                relative inline-flex items-center gap-3
                px-14 py-3 rounded-2xl
                bg-gradient-to-r from-[#1F4E79] via-[#285F97] to-[#6FAFE3]
                text-white font-semibold shadow-[0_20px_40px_rgba(31,78,121,0.35)]
                ring-2 ring-white/20 ring-offset-2 ring-offset-[#1F4E79]/30
                transition-all duration-300 ease-out
                hover:translate-y-[-2px] hover:shadow-[0_25px_45px_rgba(31,78,121,0.45)]
                active:translate-y-[0px] active:shadow-[0_12px_28px_rgba(31,78,121,0.35)]
                animate-[pulse-custom_2.4s_ease-in-out_infinite]
              "
            >
              Agendar avaliação

              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                <img
                  src='https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff'
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 4 — APRELHOS E RECURSOS ===== */}
      <section id="aparelhos" className="bg-[#F8FAFC] py-20 px-6 overflow-x-hidden">
        {/* TÍTULO */}
        <div className="max-w-[1200px] mx-auto text-center mb-14 px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79]">
            Aparelhos e <span className="text-[#2F6DA6]">Recursos</span> utilizados
          </h2>
        </div>

        {/* GRID COM 5 CARDS */}
        <div
          ref={devicesRef}
          className="
            max-w-[1200px] mx-auto px-4 sm:px-6
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            gap-16 place-items-center
          "
        >
          {aparelhos.map((item, index) => (
            <motion.div
              key={index}
              className="
                relative bg-gradient-to-b from-[#1F4E79] via-[#285F97] to-[#1F4E79]
                rounded-3xl w-full max-w-[320px]
                pt-20 pb-10 px-6 shadow-lg
                h-full flex flex-col justify-between
                hover:shadow-2xl transition-shadow
              "
              initial={{ opacity: 0, y: 26 }}
              animate={
                devicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
              }
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            >

              {/* FOTO CIRCULAR */}
              <div
                className="
                  absolute -top-14 left-1/2 -translate-x-1/2
                  w-28 h-28 rounded-full overflow-hidden shadow-md 
                  border-4 border-[#F8FAFC]
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* TEXTO */}
              <div className="min-h-[120px] flex flex-col justify-center items-center text-center">
                <h3 className="text-lg font-semibold text-white mt-4">
                  {item.title}
                </h3>

                <p className="text-sm text-blue-100 mt-2">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOTÃO CENTRAL */}
        <div className="text-center mt-14">
          <div className="relative inline-flex group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#6FAFE3]/50 via-[#1F4E79]/40 to-[#6FAFE3]/50 blur-lg opacity-70 group-hover:opacity-90 transition" />

            <a
              href="#"
              target="_blank"
              aria-label="Agendar avaliação via WhatsApp"
              className="
                relative inline-flex items-center gap-1
                px-10 py-3 rounded-2xl
                bg-gradient-to-r from-[#1F4E79] via-[#285F97] to-[#6FAFE3]
                text-white font-semibold shadow-[0_20px_40px_rgba(31,78,121,0.35)]
                ring-2 ring-white/20 ring-offset-2 ring-offset-[#1F4E79]/30
                transition-all duration-300 ease-out
                hover:translate-y-[-2px] hover:shadow-[0_25px_45px_rgba(31,78,121,0.45)]
                active:translate-y-[0px] active:shadow-[0_12px_28px_rgba(31,78,121,0.35)]
                animate-[pulse-custom_2.4s_ease-in-out_infinite]
              "
            >
              Agendar avaliação

              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                <img
                  src='https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff'
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 5 — AGENDAMENTO ===== */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-24 px-6 relative overflow-x-hidden"
        style={{
          backgroundImage: `url(${fundo1})`,
        }}
      >
        {/* CAMADA CLARA ELEGANTE SOBRE A FOTO */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/65 to-white/40 backdrop-blur-[2px]" />

        {/* CONTEÚDO */}
        <div className="relative max-w-[900px] mx-auto text-center text-[#0F2B46]">
          
          {/* TÍTULO */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Solicite um{" "}
            <span className="bg-gradient-to-r from-[#1F4E79] via-[#2F6DA6] to-[#6FAFE3] bg-clip-text text-transparent">
              agendamento
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#1F4E79] mt-3 mb-10"
          >
            Atendimento humanizado e focado na sua evolução
          </motion.p>

          {/* LISTA — UMA COLUNA CENTRALIZADA */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {[
              "Excelente localização em Recife-PE",
              "Atendimento profissional e humanizado",
              "Especializada em fisioterapia domiciliar",
              "Acompanhamento contínuo da evolução",
              "Tratamentos personalizados para cada paciente",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.1, ease: "easeOut" }}
                className="flex items-center gap-3 text-lg md:text-xl font-medium text-[#12365A] bg-white/70 px-4 py-2 rounded-full shadow-sm border border-white/50"
              >
                <span className="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 rounded-full bg-gradient-to-br from-[#1F4E79] to-[#6FAFE3] text-white text-base shadow-md flex-shrink-0">
                  ✔
                </span>
                <span className="text-[#0F2B46]">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* BOTÃO CENTRAL */}
          <div className="text-center mt-14">
            <div className="relative inline-flex group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6FAFE3]/50 via-[#1F4E79]/40 to-[#6FAFE3]/50 blur-lg opacity-70 group-hover:opacity-90 transition" />

              <a
                href="#"
                target="_blank"
                aria-label="Agendar avaliação via WhatsApp"
                className="
                  relative inline-flex items-center gap-3
                  px-14 py-3 rounded-2xl
                  bg-gradient-to-r from-[#1F4E79] via-[#285F97] to-[#6FAFE3]
                  text-white font-semibold shadow-[0_20px_40px_rgba(31,78,121,0.35)]
                  ring-2 ring-white/20 ring-offset-2 ring-offset-[#1F4E79]/30
                  transition-all duration-300 ease-out
                  hover:translate-y-[-2px] hover:shadow-[0_25px_45px_rgba(31,78,121,0.45)]
                  active:translate-y-[0px] active:shadow-[0_12px_28px_rgba(31,78,121,0.35)]
                  animate-[pulse-custom_2.4s_ease-in-out_infinite]
                "
              >
                Agendar avaliação

                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner">
                  <img
                    src='https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff'
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 6 — DEPOIMENTOS ===== */}
      <section id="depoimentos" className="bg-[#F8FAFC] py-20 px-6 overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79]">
            O que dizem <span className="text-[#2F6DA6]">os pacientes</span>
          </h2>
          <p className="text-[#2F6DA6] text-lg mt-2">
            Feedbacks reais de pessoas que já passaram pelo tratamento:
          </p>
        </div>

        {/* CARDS POR TELA */}
        <div
          className="relative max-w-[1200px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((t, i) => (
              <div
                key={`${currentPage}-${i}`}
                className="bg-white rounded-3xl border border-[#E2E8F0] p-6 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center text-lg font-bold shadow-md"
                    style={{
                      background:
                        avatarPalettes[(currentStart + i) % avatarPalettes.length],
                    }}
                  >
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                </div>

                <p className="font-semibold text-[#1F4E79]">{t.name}</p>

                <div className="flex gap-1 my-2">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <img
                      key={s}
                      src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=E0C22B"
                      className="w-5 h-5"
                      loading="lazy"
                    />
                  ))}
                </div>

                <p className="text-[#1E293B] text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          {hasMultiplePages && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentPage === idx
                      ? "w-3 h-3 bg-[#1F4E79]"
                      : "w-2.5 h-2.5 bg-[#94A3B8] hover:bg-[#1F4E79]/60"
                  }`}
                  aria-label={`Ir para pagina ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== SEÇÃO — MÉTRICAS ===== */}
      <section ref={metricsRef} className="w-full bg-gradient-to-r from-[#1F4E79] via-[#194268] to-[#0F2B46] py-20 text-white overflow-x-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-6">

          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: idx * 0.15, ease: "easeOut" }}
                className="text-6xl font-extrabold"
              >
                <Counter
                  end={m.value}
                  duration={m.duration}
                  suffix={m.suffix}
                  prefix={idx === 0 ? "+" : idx === 1 ? "+" : ""}
                  run={metricsInView}
                />
              </motion.span>
              <p className="text-lg mt-2 opacity-90">{m.label}</p>
            </div>
          ))}

        </div>
      </section>

      
      {/* ===== SEÇÃO — FAQ ===== */}
      <section
        id="faq"
        className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F0F6FF] py-20 px-6 overflow-x-hidden"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(111,175,227,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(31,78,121,0.12),transparent_35%)]"></div>
        <div className="relative max-w-[900px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79]">
            Dúvidas <span className="text-[#2F6DA6]">frequentes</span>
          </h2>
          <p className="text-[#2F6DA6] text-lg mt-3">
            Tire suas principais dúvidas antes de agendar sua consulta
          </p>
        </div>

        {/* LISTA DE FAQ */}
        <div className="relative max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative border border-gray-200 rounded-2xl transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "bg-white shadow-xl" : "bg-white/95 shadow-md"
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-[#6FAFE3]/10 via-white to-[#1F4E79]/5" />
                {/* CABEÇALHO */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-[#1F4E79] hover:bg-gray-50 rounded-2xl transition relative"
                >
                  {faq.question}

                  {/* Ícone da seta */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 text-[#2F6DA6] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* RESPOSTA */}
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 text-gray-600 border-t border-gray-100 leading-relaxed bg-white"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== SEÇÃO — ONDE NOS ENCONTRAR? ===== */}
      <section id="contato" className="bg-[#F8FAFC] pt-24 pb-12 px-6 overflow-x-hidden">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center px-2 sm:px-4">
          {/* COLUNA ESQUERDA — TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F4E79] mb-6">
              Onde nos encontrar?
            </h2>

            <p className="text-lg text-[#1F4E79]/80 mb-6">
              Fale pelo WhatsApp, visite nosso Instagram ou envie um e-mail.
            </p>

            <div className="flex flex-col gap-4 text-lg text-[#0F2B46]">

              {/* WHATSAPP */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-[#E2E8F0] min-h-[90px]"
              >
                <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=1F4E79" className="w-7" />
                <div>
                  <p className="font-semibold text-[#1F4E79]">WhatsApp</p>
                  <p className="text-[#0F2B46] text-sm sm:text-base">(81) 99157-5469</p>
                </div>
              </motion.div>

              {/* INSTAGRAM */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-[#E2E8F0] min-h-[90px]"
              >
                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" className="w-7" />
                <div>
                  <p className="font-semibold text-[#1F4E79]">Instagram</p>
                  <p className="text-[#0F2B46] text-sm sm:text-base">@mirellaalbuquerque_20</p>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-[#E2E8F0] min-h-[90px]"
              >
                <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=1F4E79" className="w-7" />
                <div className="flex flex-col min-w-0">
                  <p className="font-semibold text-[#1F4E79]">E-mail</p>
                  <p className="text-[#0F2B46] text-sm sm:text-base leading-snug">mirellaleticiaalbuquerque@gmail.com</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* COLUNA DIREITA — MAPA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]"
          >
            {/* Controles desativados */}
            {/*
            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10 pointer-events-none">
              {[...].map(...buttons...)}
            </div>
            */}
            <iframe
              key={mapSelection}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197155.99912305336!2d-35.102!3d-8.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10.5!3m3!1m2!1s0x7ab18a3d3c7b6f3%3A0x917f4bd074a8d6f8!2sRecife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1700000000004!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </section>
      
      {/* ===== RODAPÉ ===== */}
      <section
        id="footer"
        className="relative overflow-x-hidden bg-gradient-to-br from-[#0D1B2A] via-[#102844] to-[#0D1B2A] text-gray-300 py-12 px-6"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_15%,rgba(111,175,227,0.08),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(47,109,166,0.08),transparent_40%)]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

        <div
          className="
            relative
            max-w-[1200px] mx-auto 
            flex flex-col md:flex-row 
            justify-between 
            items-start 
            gap-12
          "
        >

          {/* ==== COLUNA ESQUERDA ==== */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#7EC3F5]">
              Mirella Letícia
            </h3>

            <p className="mt-3 text-gray-300 leading-relaxed max-w-[420px]">
              Fisioterapia domiciliar em Recife-PE.
              Tratamentos personalizados, cuidado profissional
              e evolução real para cada paciente.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
              {[
                { label: "Seguro", icon: "🔒" },
                { label: "Atendimento local", icon: "📍" },
                { label: "WhatsApp", icon: "", img: "https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff" },
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-200 shadow-sm"
                >
                  {item.img ? (
                    <img src={item.img} alt={item.label} className="w-4 h-4" />
                  ) : (
                    <span>{item.icon}</span>
                  )}
                  <span className="text-xs">{item.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* ==== NAVEGAÇÃO ==== */}
          <div className="relative md:text-right w-full md:w-auto ml-auto">
            <h4 className="font-semibold text-[#7EC3F5] text-md mb-3">
              Navegação
            </h4>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-300 text-sm md:text-right">
              <a href="#hero" className="hover:text-white transition">Início</a>
              <a href="#aparelhos" className="hover:text-white transition">Aparelhos</a>

              <a href="#servicos" className="hover:text-white transition">Serviços</a>
              <a href="#depoimentos" className="hover:text-white transition">Depoimentos</a>

              <a href="#tratamentos" className="hover:text-white transition">Tratamentos</a>
              <a href="#faq" className="hover:text-white transition">Perguntas</a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="relative max-w-[1200px] mx-auto mt-8 pt-4 border-t border-white/10 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://www.instagram.com/we_tech.oficial?igsh=Nng2czAxNnIwbWow&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 decoration-current hover:text-white"
          >
            We_Tech
          </a>{' '}
          — Todos os direitos reservados.
        </div>
      </section>


      {/* WHATSAPP FIXO */}
      <a
        href="#"
        target="_blank"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform"
      >
        <img
          src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff"
          alt="WhatsApp"
          className="w-16 h-16 drop-shadow-xl"
        />
      </a>
    </>
  );
}
