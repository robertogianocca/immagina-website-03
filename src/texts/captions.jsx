export const Captions = (portfolioCultura) => {
  const addCaptions = (gallery, source) => {
    // Check if the gallery exists and iterate
    if (gallery && Array.isArray(gallery)) {
      source.forEach((item, index) => {
        if (gallery[index]) {
          gallery[index].shortDescription = item;
        }
      });
    } else {
      console.error("Gallery or images not found");
    }
  };

  const captionRenzoFontana = ["Tomba di Giovanni Züst a Basilea", "Mostra “openair” a Balerna"];

  const captionTicino = [
    "Chiesa di Negrentino, Romanico XI sec. Dedicata a Sant’Ambrogio, Prugiasco, Valle di Blenio",
    "Chiesa di Negrentino, Romanico XI sec. Dedicata a Sant’Ambrogio, Prugiasco, Valle di Blenio",
    "Chiesaromanica di san Pietro e Paolo, risale al 1171, Biasca",
    "Chiesa-Oratorio di San Vigilio, Rovio",
    "Chiesa di Santa Maria del Sasso, edificata nel 1470, Morcote",
    "Chiesa di Santa Maria del Sasso, edificata nel 1470, Morcote",
    "Chiesa di Santa Maria del Sasso, edificata nel 1470, Morcote",
    "Chiesa di Sant’Antonio Abate (ca. 1300), Morcote",
    "Isole di Brissago",
    "Isola di Brissago",
    "Isola di Brissago",
    "Castello Sasso Corbaro (Unterwaldo), XV secolo, Bellinzona",
    "Castello Sasso Corbaro (Unterwaldo), XV secolo, Bellinzona",
    "Castello Montebello (Svitto), XV secolo, Bellinzona",
    "Rovine di Serravalle nel comune di Malvaglia",
    "Rovine di Serravalle nel comune di Malvaglia",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.). Nello sfondo Melide e Lago 'Lugano'",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.). Nello sfondo: Città di Lugano",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
    "Monte Generoso: Trenino/cremagliera. Capolago (270 s.l.)- Vetta (1700 s.l.m.)",
  ];

  addCaptions(portfolioCultura["Photography"]["Drone"]["Ticino"].images.pictures, captionTicino);

  const captionGottardo = [
    "Biasca",
    "Giornico",
    "Biaschina",
    "Chiggionia chiesa S.ta Maria Assunta",
    "Rodi",
    "Airolo",
    "Göschenen",
    "Göschenen",
    "Wassen",
    "Gurtnellen",
    "Zgraggen-Tahlbücke",
    "Intschi-Aelmen",
    "Amsteg",
    "Silenen",
  ];

  addCaptions(
    portfolioCultura["Photography"]["Drone"]["Gotthardbahn"].images.pictures,
    captionGottardo
  );

  const captionFinziPasca = [
    "Donka",
    "Ritratto Daniele Finzi Pasca",
    "Nebbia",
    "Donka",
    "Verità",
    "Verità",
    "Verità",
    "Nebbia",
    "Nebbia",
    "Verità",
    "Donka",
    "Nebbia",
    "Nebbia",
    "Nebbia",
    "Nebbia",
    "Nebbia",
    "Nebbia",
    "Nebbia",
    "Verità",
    "Nebbia",
    "Bianco su Bianco",
    "Nebbia",
    "Nebbia",
    "Daniele Finzi Pasca conversa con la compianta moglie Julie Hamelin",
    "Daniela Finzi Pasca",
    "Troupe della Compagnia F.P.",
    "Troupe della Compagnia F.P.",
  ];

  addCaptions(
    portfolioCultura["Photography"]["Teatro"]["Finzi Pasca"].images.pictures,
    captionFinziPasca
  );
};
