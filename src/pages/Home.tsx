import fakemirella from "../assets/fakemirella.webp";
import whats from "../assets/whats.png";

export default function Hero() {
  return (
    <>
      <section className="bg-[#F4EFE7] w-full">

        {/* ===== HERO — CONTAINER CENTRAL ===== */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-28 pt-20 pb-12">

          <div className="flex flex-col md:flex-row items-center justify-between gap-16">

            {/* TEXTO */}
            <div className="flex-1 space-y-6 text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#43523D] leading-[1.1]">
                Clínica de Fisioterapia <br />
                <span className="text-[#6F7F5F]">em Candeias</span>
              </h1>

              <ul className="text-xl text-[#2B2B2B] space-y-2 mt-3">
                <li className="flex items-center gap-2"><span className="text-[#D97B38] text-xl">✔</span> Clínica particular</li>
                <li className="flex items-center gap-2"><span className="text-[#D97B38] text-xl">✔</span> Tratamento pós cirúrgico</li>
                <li className="flex items-center gap-2"><span className="text-[#D97B38] text-xl">✔</span> Tratamento de lesões</li>
                <li className="flex items-center gap-2"><span className="text-[#D97B38] text-xl">✔</span> Geriatria</li>
                <li className="flex items-center gap-2"><span className="text-[#D97B38] text-xl">✔</span> Liberação Miofascial</li>
              </ul>

              <p className="text-red-700 font-semibold">✘ Não atendemos planos de saúde</p>

              <a
                href="#"
                target="_blank"
                className="inline-block bg-[#43523D] text-white font-semibold px-10 py-4 rounded-xl shadow-lg 
                           hover:bg-[#2f3d2b] transition-all"
              >
                Agendar consulta 💬
              </a>
            </div>

            {/* IMAGEM */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src={fakemirella}
                alt="Fisioterapeuta"
                className="w-[80%] md:w-[70%] lg:w-[75%] rounded-[35px] shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== SEÇÃO 2 — VERDE COLADA NO HERO (FULL WIDTH) ===== */}
        <div className="w-full bg-[#43523D] text-white py-14 px-6 mt-[-5px]">

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-center">

            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Pós Cirúrgico</h3>
              <p className="text-sm opacity-90">Recuperação Pós Cirúrgico</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Tratamento de Lesões</h3>
              <p className="text-sm opacity-90">Lesões agudas e crônicas</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Geriatria</h3>
              <p className="text-sm opacity-90">Vida e independência</p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-2xl">✔</div>
              <h3 className="text-lg font-semibold">Liberação Miofascial</h3>
              <p className="text-sm opacity-90">Reduz tensões musculares</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHATSAPP FIXO */}
      <a
        href="#"
        target="_blank"
        className="fixed bottom-5 right-5 z-50 p-4 hover:scale-110 transition-transform"
      >
        <img src={whats} alt="WhatsApp" className="w-8 h-8" />
      </a>
    </>
  );
}
