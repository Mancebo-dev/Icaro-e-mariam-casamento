import React from 'react';

export const StorySection: React.FC = () => {
  const stories = [
    {
      title: "O Primeiro Encontro",
      date: "Agosto de 2023",
      text: "Nossas histórias se cruzaram pela primeira vez em um culto na igreja. O que parecia apenas mais um dia se tornou o começo de algo que Deus já estava preparando para nós.",
      image: "/primeiro_encontro.jpeg",
      number: "01"
    },
    {
      title: "O Início do Namoro",
      date: "Dezembro de 2023",
      text: "Após meses nos conhecendo e fortalecendo nossa amizade, decidimos dar um passo à frente e iniciar nossa caminhada juntos. Foi o início de uma história construída com amor, fé e propósito.",
      image: "/pedido_de_namoro.jpeg",
      number: "02"
    },
    {
      title: "Construindo Sonhos",
      date: "2024 – 2025",
      text: "Entre momentos felizes, aprendizados e planos compartilhados, nosso relacionamento cresceu dia após dia. Descobrimos que o verdadeiro amor é escolher um ao outro em cada etapa da jornada.",
      image: "/noivado.jpeg",
      number: "03"
    },
    {
      title: "O Noivado",
      date: "Agosto de 2025",
      text: "Com o coração cheio de certezas e sonhos para o futuro, dissemos \"sim\" a uma nova fase de nossas vidas. O noivado marcou o início da preparação para o nosso maior compromisso.",
      image: "/img_01.jpeg",
      number: "04"
    },
    {
      title: "O Grande Dia",
      date: "06 de Março de 2027",
      text: "Depois de uma linda caminhada guiada por Deus, chegou o momento de celebrar a união das nossas vidas. Cercados por nossos familiares e amigos, iniciaremos o capítulo mais especial da nossa história: o nosso para sempre.",
      number: "05"
    }
  ];

  return (
    <section
      id="historia"
      className="bg-[url('/story_img.jpeg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-16 min-h-[100dvh] relative w-full overflow-hidden"
    >
      <div className="bg-[#fd710b] absolute inset-0 opacity-20" />
      <div className="flex flex-col items-center relative max-w-[430px] w-full px-6">

        {/* Title */}
        <div className="flex flex-col justify-center text-center text-white mb-12">
          <p className="text-[46px] leading-[0.89] whitespace-nowrap">
            <span className="font-outfit font-light text-white">Nossa</span>
            <span className="leading-[0.89]">{` `}</span>
            <span className="font-petit-formal not-italic text-white">Historia</span>
          </p>
        </div>

        {/* Story blocks */}
        <div className="flex flex-col gap-12 w-full">
          {stories.map((story, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={index} className={`flex gap-4 items-center w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>

                {/* Image Box */}
                {story.image && (
                  <div className="relative w-[120px] h-[100px] shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                    <img
                      src={story.image}
                      alt={`Momento ${story.number}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5">
                      <span className="font-outfit text-white text-[10px] font-bold">{story.number}</span>
                    </div>
                  </div>
                )}

                {/* Text Box */}
                <div className={`flex flex-col justify-center w-full ${!story.image ? 'items-center text-center' : ''}`}>
                  <h3 className="font-petit-formal text-[18px] text-white mb-0.5">{story.title}</h3>
                  <span className="font-outfit text-white/80 text-[11px] mb-2 block uppercase tracking-wider">{story.date}</span>
                  <p className="font-libre-caslon text-[14px] leading-[1.4] text-white">
                    {story.text}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
