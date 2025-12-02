import fakemirella from '../assets/fakemirella.webp';
import vei1 from '../assets/vei1.jpg';
import aparelho1 from '../assets/aparelho1.png';
import fundo1 from '../assets/fundo1.jpeg';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


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
];

const items = [
  {
    title: 'Reabilitação motora',
    desc: 'AVC, fraturas, pós-cirúrgico e mobilidade.',
    img: vei1,
  },
  {
    title: 'Fortalecimento muscular',
    desc: 'Força, estabilidade e equilíbrio.',
    img: vei1,
  },
  {
    title: 'Alongamentos e mobilidade',
    desc: 'Flexibilidade e amplitude dos movimentos.',
    img: vei1,
  },
  {
    title: 'Treino de marcha e postura',
    desc: 'Caminhada correta e ajustes posturais.',
    img: vei1,
  },
  {
    title: 'Prevenção de quedas',
    desc: 'Equilíbrio, coordenação e segurança.',
    img: vei1,
  },
  {
    title: 'Tratamento de dores',
    desc: 'Técnicas manuais e liberação miofascial.',
    img: vei1,
  },
  {
    title: 'Estimulação precoce infantil',
    desc: 'Desenvolvimento motor e coordenação.',
    img: vei1,
  },
  {
    title: 'Reabilitação respiratória',
    desc: 'Respiração, secreções e capacidade pulmonar.',
    img: vei1,
  },
];

const aparelhos = [
  {
    title: 'Faixas elásticas (Thera Band)',
    desc: 'Fortalecimento, alongamento e exercícios funcionais.',
    img: aparelho1,
  },
  {
    title: 'Bola suíça terapêutica',
    desc: 'Equilíbrio, postura, coordenação e fortalecimento.',
    img: aparelho1,
  },
  {
    title: 'Mini Band',
    desc: 'Excelente para quadril, glúteos, joelhos e estabilidade.',
    img: aparelho1,
  },
  {
    title: 'TENS/EMS portátil',
    desc: 'Redução da dor e estimulação muscular.',
    img: aparelho1,
  },
  {
    title: 'Step / Plataforma de equilíbrio',
    desc: 'Marcha, força de MMII e prevenção de quedas.',
    img: aparelho1,
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
  const visibleCards = 3;

  const extended = [
    ...testimonials.slice(-visibleCards),
    ...testimonials,
    ...testimonials.slice(0, visibleCards),
  ];

  const [slide, setSlide] = useState(visibleCards);
  const total = extended.length;

  useEffect(() => {
    if (slide === 0) {
      setTimeout(() => {
        setSlide(testimonials.length);
      }, 500);
    }

    if (slide === testimonials.length + visibleCards) {
      setTimeout(() => {
        setSlide(visibleCards);
      }, 500);
    }
  }, [slide]);

  const nextSlide = () => setSlide((prev) => prev + 1);
  const prevSlide = () => setSlide((prev) => prev - 1);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-[#F4EFE7] w-full">
        {/* ===== HERO — ALTURA PROPORCIONAL ===== */}
        <div className="max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32 min-h-[85vh] flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
            {/* ===== TEXTO ===== */}
            <div className="flex-1 space-y-5 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#43523D] leading-[1.1]">
                Mirella Letícia
              </h1>

              <p className="text-[#6F7F5F] text-2xl md:text-3xl font-semibold">
                Fisioterapia domiciliar e particular <br /> em Recife-PE
              </p>

              {/* LISTA EM 2 COLUNAS */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-4 max-w-[600px]">
                {[
                  'Reabilitação motora',
                  'Fortalecimento muscular',
                  'Alongamentos e mobilidade',
                  'Treino de marcha e postura',
                  'Prevenção de quedas',
                  'Tratamento de dores',
                  'Estimulação precoce infantil',
                  'Orientação a cuidadores',
                  'Reabilitação respiratória',
                  'Avaliação do paciente',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-base text-[#2B2B2B]"
                  >
                    <span className="text-[#6F7F5F] text-lg">✔</span> {item}
                  </div>
                ))}
              </div>

              <p className="text-red-700 font-semibold mt-2">
                ✘ Não atendo planos de saúde
              </p>

              {/* BOTÃO */}
              <a
                href="#"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#43523D] text-white font-semibold px-10 py-4 rounded-xl shadow-lg 
                          hover:bg-[#2f3d2b] transition-all mt-2"
              >
                Agendar consulta
                <img
                  src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff"
                  alt="WhatsApp ícone"
                  className="w-5 h-5"
                />
              </a>
            </div>

            {/* ===== IMAGEM ===== */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={fakemirella}
                alt="Fisioterapeuta"
                className="w-[95%] md:w-[80%] lg:w-[75%] xl:w-[70%] rounded-[35px] shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2 — SERVIÇOS ===== */}
        <div className="w-full bg-[#43523D] text-white py-14 px-6">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-center">
            {/* CARD 1 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Reabilitação Motora</h3>
              <p className="text-sm opacity-90">AVC, fraturas e mobilidade</p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">
                Fortalecimento & Mobilidade
              </h3>
              <p className="text-sm opacity-90">Alongamentos e equilíbrio</p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Tratamento da Dor</h3>
              <p className="text-sm opacity-90">Técnicas manuais</p>
            </div>

            {/* CARD 4 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">
                ✔
              </div>
              <h3 className="text-lg font-semibold">Respiração & Orientação</h3>
              <p className="text-sm opacity-90">Acompanhamento familiar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 3 — DOENÇAS E TRATAMENTOS ===== */}
      <section className="bg-[#F4EFE7] py-20 px-6">
        <div className="max-w-[1400px] mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#43523D]">
            Doenças e <span className="text-[#6F7F5F]">Tratamentos</span>
          </h2>
          <p className="text-[#6F7F5F] text-lg mt-2">
            Conheça alguns tipos de dores e condições tratadas rotineiramente
          </p>
        </div>

        {/* GRID 5 EM CIMA + 5 EMBAIXO */}
        <div
          className="
            max-w-[1400px] mx-auto
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-10
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EEE] flex flex-col"
            >
              {/* FOTO */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTEÚDO COM ALTURA IGUAL PARA TODOS */}
              <div className="bg-[#43523D] p-6 text-center text-white flex flex-col flex-grow">
                {/* TITULO */}
                <h3 className="text-lg font-semibold">{item.title}</h3>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-gray-200 mt-2 flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
            
          ))}
        </div>

        {/* BOTÃO CENTRAL */}
        <div className="text-center mt-14">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#43523D] text-white 
          font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-[#2f3d2b] 
          transition-all"
          >
            Agendar avaliação
            <img
              src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff"
              alt="WhatsApp"
              className="w-5 h-5"
            />
          </a>
        </div>
      </section>

      {/* ===== SEÇÃO 4 — APRELHOS E RECURSOS ===== */}
      <section className="bg-[#F4EFE7] py-20 px-6">
        {/* TÍTULO */}
        <div className="max-w-[1400px] mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#43523D]">
            Aparelhos e <span className="text-[#6F7F5F]">Recursos</span>{' '}
            utilizados
          </h2>
        </div>

        {/* GRID COM 5 CARDS */}
        <div
  className="
    max-w-[1400px] mx-auto
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    gap-12 place-items-center
  "
>
  {aparelhos.map((item, index) => (
    <div
      key={index}
      className="
        relative bg-[#43523D] rounded-3xl w-full max-w-[320px]
        pt-20 pb-10 px-6 shadow-lg
        h-full flex flex-col justify-between
      "
    >

      {/* FOTO CIRCULAR */}
      <div
        className="
          absolute -top-14 left-1/2 -translate-x-1/2
          w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-[#F4EFE7]
        "
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* BLOCO DE TEXTO COM ALTURA PADRÃO */}
      <div className="min-h-[120px] flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-semibold text-white mt-4">
          {item.title}
        </h3>

        <p className="text-sm text-gray-200 mt-2">
          {item.desc}
        </p>
      </div>

    </div>
  ))}
</div>


        {/* BOTÃO CENTRAL */}
        <div className="text-center mt-14">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#43523D] text-white 
          font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-[#2f3d2b] 
          transition-all"
          >
            Agendar avaliação
            <img
              src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff"
              alt="WhatsApp"
              className="w-5 h-5"
            />
          </a>
        </div>
      </section>

      {/* ===== SEÇÃO 5 — AGENDAMENTO ===== */}
      <section
        className="w-full bg-cover bg-center bg-no-repeat py-24 px-6 relative"
        style={{
          backgroundImage: `url(${fundo1})`,
        }}
      >
        {/* CAMADA ESCURA LEVE */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTEÚDO */}
        <div className="relative max-w-[900px] mx-auto text-center text-white">
          {/* TÍTULO */}
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Solicite um <span className="text-[#CDE6C1]">agendamento</span>
          </h2>

          <p className="text-lg md:text-xl opacity-90 mt-3 mb-10">
            Atendimento humanizado e focado na sua evolução
          </p>

          {/* LISTA — UMA COLUNA CENTRALIZADA */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {[
              'Excelente localização em Recife-PE',
              'Atendimento profissional e humanizado',
              'Especializada em fisioterapia domiciliar',
              'Acompanhamento contínuo da evolução',
              'Tratamentos personalizados para cada paciente',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-lg md:text-xl font-light"
              >
                <span className="text-[#CDE6C1] text-2xl leading-none">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* BOTÃO CENTRAL */}
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#43523D] text-white font-semibold 
          px-12 py-5 rounded-xl shadow-xl text-lg hover:bg-[#2f3d2b] transition-all"
          >
            Agendar pelo WhatsApp
            <img
              src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>
        </div>
      </section>

      {/* ===== SEÇÃO 6 — DEPOIMENTOS ===== */}
      <section className="bg-[#F4EFE7] py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#43523D]">
            O que dizem <span className="text-[#6F7F5F]">os pacientes</span>
          </h2>
          <p className="text-[#6F7F5F] text-lg mt-2">
            Feedbacks reais de pessoas que já passaram pelo tratamento
          </p>
        </div>

        {/* CONTAINER EXTERNO */}
        <div className="relative max-w-[1200px] mx-auto overflow-visible">
          {/* CARROSSEL */}
          <div className="overflow-hidden rounded-xl">
            {/* WRAPPER DOS SLIDES */}
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  slide * (100 / testimonials.length)
                }%)`,
                width: `${(testimonials.length / 3) * 100}%`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="px-4 flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white rounded-3xl shadow-xl border p-6 h-full flex flex-col">
                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#43523D] text-white flex items-center justify-center text-lg font-bold">
                        {t.name
                          .split(' ')
                          .map((p) => p[0])
                          .join('')
                          .toUpperCase()}
                      </div>
                    </div>

                    {/* NOME */}
                    <p className="font-semibold text-[#43523D]">{t.name}</p>

                    {/* ESTRELAS */}
                    <div className="flex gap-1 my-2">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <img
                          key={s}
                          src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=E0C22B"
                          className="w-5 h-5"
                        />
                      ))}
                    </div>

                    {/* TEXTO */}
                    <p className="text-[#2B2B2B] text-sm leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SETA ESQUERDA */}
          <button
            onClick={prevSlide}
            className="
            absolute top-1/2 -left-10
            transform -translate-y-1/2
            bg-white shadow-md rounded-full
            p-3 hover:scale-110 transition
          "
          >
            <img
              src="https://img.icons8.com/?size=100&id=26144&format=png&color=000000"
              className="w-6 h-6"
              alt="Seta esquerda"
            />
          </button>

          {/* SETA DIREITA */}
          <button
            onClick={nextSlide}
            className="
            absolute top-1/2 -right-10
            transform -translate-y-1/2
            bg-white shadow-md rounded-full
            p-3 hover:scale-110 transition
          "
          >
            <img
              src="https://img.icons8.com/?size=100&id=26138&format=png&color=000000"
              className="w-6 h-6"
              alt="Seta direita"
            />
          </button>
        </div>
      </section>

      {/* ===== SEÇÃO — MÉTRICAS ===== */}
      <section className="w-full bg-[#43523D] py-20 text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-6">

          {/* CARD 1 */}
          <div>
            <p className="text-6xl font-extrabold">+500</p>
            <p className="text-lg mt-2 opacity-90">Pacientes atendidos</p>
          </div>

          {/* CARD 2 */}
          <div>
            <p className="text-6xl font-extrabold">+6</p>
            <p className="text-lg mt-2 opacity-90">Anos de experiência</p>
          </div>

          {/* CARD 3 */}
          <div>
            <p className="text-6xl font-extrabold">100%</p>
            <p className="text-lg mt-2 opacity-90">Pacientes satisfeitos</p>
          </div>

        </div>
      </section>
      
      {/* ===== SEÇÃO — FAQ ===== */}
      <section id="faq" className="bg-[#F4EFE7] py-20 px-6">
        <div className="max-w-[900px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#43523D]">
            Dúvidas <span className="text-[#6F7F5F]">frequentes</span>
          </h2>
          <p className="text-[#6F7F5F] text-lg mt-3">
            Tire suas principais dúvidas antes de agendar sua consulta
          </p>
        </div>

        {/* LISTA DE FAQ */}
        <div className="max-w-[900px] mx-auto space-y-4">
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
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`border border-gray-200 rounded-xl shadow-sm transition-all duration-300 ${
                  openIndex === index ? "bg-white shadow-md" : "bg-white"
                }`}
              >
                {/* CABEÇALHO */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-[#43523D] hover:bg-gray-50 rounded-xl transition"
                >
                  {faq.question}

                  {/* Ícone da seta */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 text-[#6F7F5F] transform transition-transform duration-300 ${
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
                  <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>



      {/* ===== SEÇÃO — ONDE NOS ENCONTRAR? ===== */}
      <section className="bg-[#F4EFE7] py-24 px-6">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* COLUNA ESQUERDA — TEXTO */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#43523D] mb-10">
              Onde nos encontrar?
            </h2>

            <div className="flex flex-col gap-6 text-lg text-[#43523D]">

              {/* WHATSAPP */}
              <p className="flex items-center gap-3">
                <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=43523D" className="w-6" />
                (81) 99151-2002
              </p>

              {/* INSTAGRAM */}
              <p className="flex items-center gap-3">
                <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=43523D" className="w-6" />
                @fisioglaucefonseca
              </p>

              {/* EMAIL */}
              <p className="flex items-center gap-3">
                <img src="https://img.icons8.com/?size=100&id=53388&format=png&color=43523D" className="w-6" />
                contato@clinicafisioterapia.com.br
              </p>

              {/* ENDEREÇO */}
              <p className="flex items-center gap-3">
                <img src="https://img.icons8.com/?size=100&id=59817&format=png&color=43523D" className="w-6" />
                R. José Nunes da Cunha, 5000 – Candeias, Jaboatão dos Guararapes – PE, 54440-030
              </p>

            </div>
          </div>

          {/* COLUNA DIREITA — MAPA */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0887019870914!2d-34.94036802591203!3d-8.18901308387623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f2ee8c66a0d%3A0x7cf3943c08495c7d!2sR.%20Jos%C3%A9%20Nunes%20da%20Cunha%2C%205000%20-%20Candeias%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054440-030!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      
      {/* ===== RODAPÉ ===== */}
      <section
        id="footer"
        className="bg-[#1F2A1D] text-gray-300 py-12 px-6 mt-24"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ==== COLUNA ESQUERDA ==== */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#CDE6C1]">
              Mirella Letícia
            </h3>

            <p className="mt-3 text-gray-400 leading-relaxed max-w-[420px]">
              Fisioterapia domiciliar humanizada em Recife-PE.
              Tratamentos personalizados, cuidado profissional
              e evolução real para cada paciente.
            </p>

            <div className="flex items-center gap-6 mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">🔒 Seguro</span>
              <span className="flex items-center gap-1">🇧🇷 Atendimento local</span>
              <span className="flex items-center gap-1">💬 WhatsApp</span>
            </div>
          </div>

          {/* ==== NAVEGAÇÃO EM 2 COLUNAS ==== */}
          <div className="md:text-right w-full md:w-auto">
            <h4 className="font-semibold text-[#CDE6C1] text-md mb-3">
              Navegação
            </h4>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-gray-400 text-sm md:text-right">

              <a href="#hero" className="hover:text-white transition">
                Início
              </a>
              <a href="#aparelhos" className="hover:text-white transition">
                Aparelhos
              </a>

              <a href="#servicos" className="hover:text-white transition">
                Serviços
              </a>
              <a href="#depoimentos" className="hover:text-white transition">
                Depoimentos
              </a>

              <a href="#tratamentos" className="hover:text-white transition">
                Tratamentos
              </a>
              <a href="#faq" className="hover:text-white transition">
                Perguntas
              </a>

              <a href="#contato" className="hover:text-white transition">
                Contato
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="max-w-[1200px] mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Mirella Letícia — Todos os direitos reservados.
        </div>
      </section>

        


      {/* WHATSAPP FIXO */}
      <a
        href="#"
        target="_blank"
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
