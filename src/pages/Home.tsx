import fakemirella from "../assets/fakemirella.webp";
import vei1 from "../assets/vei1.jpg";
import aparelho1 from "../assets/aparelho1.png";
import fundo1 from "../assets/fundo1.jpeg";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Maria Eduarda",
    text: "O atendimento domiciliar fez toda diferença para a recuperação da minha mãe. Muito atenciosa e profissional.",
    stars: 5,
  },
  {
    name: "João Henrique",
    text: "Minha filha adora as sessões! A fisioterapeuta trabalha com muita paciência e criatividade.",
    stars: 5,
  },
  {
    name: "Dona Francisca",
    text: "Tive uma melhora significativa nas dores após poucas sessões. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Carlos Alberto",
    text: "Profissional excelente, explica tudo com clareza e acompanha cada evolução.",
    stars: 5,
  },
  {
    name: "Helena Souza",
    text: "Gostei muito da dedicação e do cuidado. Sempre pontual e muito humana.",
    stars: 5,
  },
  {
    name: "Seu Antônio",
    text: "A reabilitação do meu pai só foi possível graças ao trabalho dela. Muito competente!",
    stars: 5,
  },
  {
    name: "Letícia Ramos",
    text: "Os exercícios com faixas elásticas ajudaram muito na minha mobilidade. Atendimento nota 10!",
    stars: 5,
  },
  {
    name: "Paulo Roberto",
    text: "Meu filho evoluiu muito em equilíbrio e coordenação. Atendimento divertido e eficaz.",
    stars: 5,
  },
  {
    name: "Marina Lopes",
    text: "Atendimento acolhedor, cuidadoso e personalizado. Me senti bem desde a primeira sessão.",
    stars: 5,
  },
  {
    name: "Dona Betina",
    text: "Recomendo a todos que precisam de fisioterapia. O tratamento é completo e muito profissional.",
    stars: 5,
  },
];

const items = [
  {
    title: "Reabilitação motora",
    desc: "AVC, fraturas, pós-cirúrgico e mobilidade.",
    img: vei1,
  },
  {
    title: "Fortalecimento muscular",
    desc: "Força, estabilidade e equilíbrio.",
    img: vei1,
  },
  {
    title: "Alongamentos e mobilidade",
    desc: "Flexibilidade e amplitude dos movimentos.",
    img: vei1,
  },
  {
    title: "Treino de marcha e postura",
    desc: "Caminhada correta e ajustes posturais.",
    img: vei1,
  },
  {
    title: "Prevenção de quedas",
    desc: "Equilíbrio, coordenação e segurança.",
    img: vei1,
  },
  {
    title: "Tratamento de dores",
    desc: "Técnicas manuais e liberação miofascial.",
    img: vei1,
  },
  {
    title: "Estimulação precoce infantil",
    desc: "Desenvolvimento motor e coordenação.",
    img: vei1,
  },
  {
    title: "Orientação a cuidadores",
    desc: "Movimentação, posicionamento e segurança.",
    img: vei1,
  },
  {
    title: "Reabilitação respiratória",
    desc: "Respiração, secreções e capacidade pulmonar.",
    img: vei1,
  },
  {
    title: "Avaliação e evolução",
    desc: "Acompanhamento e ajustes no tratamento.",
    img: vei1,
  },
];

const aparelhos = [
    {
      title: "Faixas elásticas (Thera Band)",
      desc: "Fortalecimento, alongamento e exercícios funcionais.",
      img: aparelho1,
    },
    {
      title: "Bola suíça terapêutica",
      desc: "Equilíbrio, postura, coordenação e fortalecimento.",
      img: aparelho1,
    },
    {
      title: "Mini Band",
      desc: "Excelente para quadril, glúteos, joelhos e estabilidade.",
      img: aparelho1,
    },
    {
      title: "TENS/EMS portátil",
      desc: "Redução da dor e estimulação muscular.",
      img: aparelho1,
    },
    {
      title: "Step / Plataforma de equilíbrio",
      desc: "Marcha, força de MMII e prevenção de quedas.",
      img: aparelho1,
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
                  "Reabilitação motora",
                  "Fortalecimento muscular",
                  "Alongamentos e mobilidade",
                  "Treino de marcha e postura",
                  "Prevenção de quedas",
                  "Tratamento de dores",
                  "Estimulação precoce infantil",
                  "Orientação a cuidadores",
                  "Reabilitação respiratória",
                  "Avaliação do paciente",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-base text-[#2B2B2B]">
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
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Reabilitação Motora</h3>
              <p className="text-sm opacity-90">AVC, fraturas e mobilidade</p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Fortalecimento & Mobilidade</h3>
              <p className="text-sm opacity-90">Alongamentos e equilíbrio</p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Tratamento da Dor</h3>
              <p className="text-sm opacity-90">Técnicas manuais</p>
            </div>

            {/* CARD 4 */}
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
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
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
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
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                {/* DESCRIÇÃO */}
                <p className="text-sm text-gray-200 mt-2 flex-grow">
                  {item.desc}
                </p>

                {/* BOTÃO — LINHA ÚNICA */}
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold 
                  px-6 py-3 rounded-xl mt-6 hover:bg-white hover:text-[#43523D] transition-all
                  whitespace-nowrap"
                >
                  Agendar consulta
                  <img
                    src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=ffffff"
                    alt="WhatsApp ícone"
                    className="w-5 h-5"
                  />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ===== SEÇÃO 4 — APRELHOS E RECURSOS ===== */}   
      <section className="bg-[#F4EFE7] py-20 px-6">
      
      {/* TÍTULO */}
      <div className="max-w-[1400px] mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#43523D]">
          Aparelhos e <span className="text-[#6F7F5F]">Recursos</span> utilizados
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
            className="relative bg-[#43523D] rounded-3xl w-full max-w-[320px]
            text-center pt-20 pb-10 px-6 shadow-lg"
          >

            {/* FOTO CIRCULAR */}
            <div className="
              absolute -top-14 left-1/2 -translate-x-1/2
              w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-[#F4EFE7]
            ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TÍTULO */}
            <h3 className="text-lg font-semibold text-white mt-4">
              {item.title}
            </h3>

            {/* DESCRIÇÃO */}
            <p className="text-sm text-gray-200 mt-2">
              {item.desc}
            </p>

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
            "Excelente localização em Recife-PE",
            "Atendimento profissional e humanizado",
            "Especializada em fisioterapia domiciliar",
            "Acompanhamento contínuo da evolução",
            "Tratamentos personalizados para cada paciente",
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
          transform: `translateX(-${slide * (100 / testimonials.length)}%)`,
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
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
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
