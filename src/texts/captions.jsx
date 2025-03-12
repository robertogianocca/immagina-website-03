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

  // const captionRenzoFontana = ["Tomba di Giovanni Züst a Basilea", "Mostra “openair” a Balerna"];

  const captionPietroLeemann = [
    "Piatto non solo buono ma anche bello, sempre presentato con un pizzico di umore e sempre sorprendente.",
    "Splüi chez Pietro presso Giumaglio, (Valle Maggia), dove maturano i formaggi",
    "Ritratto di Pietro Leemann",
    "Paesaggio interiore",
    "Resti di un frugale pasto (degli scoiattoli) nel bosco di Giumaglio",
    "Appunti di viaggio",
    "Cammino verso la cascata (Giumaglio, valle Maggia)",
    "Titolo dimenticato",
    "Sotto la coltre colorata: Spuma decorata con petali di fiori",
    "Pozz’ Froda: Cascata di Giumaglio in Valle Maggia",
    "Quello che mangerei tutti i giorni",
    "L’uovo apparente",
    "Muschio su pietra nel bosco di Giumaglio, valle Maggia",
    "Umami, il sesto gusto che affascina",
    "Omaggio alla cucina giapponese (titolo descrittivo)",
    "Gong: il celebre dessert di Joia (Ristorante), servito con un tocco di gong",
  ];

  addCaptions(
    portfolioCultura["Photography"]["Gastronomia"]["Pietro Leemann"].images.pictures,
    captionPietroLeemann
  );

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

  const captionRomanico = [
    "Negrentino (valle di Blenio) San Carlo (XI sec.) sulla via di transito verso il passo del Nara",
    "Negrentino (valle di Blenio) San Carlo (XI sec.) sulla via di transito verso il passo del Nara",
    "Negrentino (valle di Blenio) San Carlo (XI sec.) sulla via di transito verso il passo del Nara",
    "Negrentino (valle di Blenio) San Carlo (XI sec.) sulla via di transito verso il passo del Nara",
    "Biasca San Pietro e Paolo (XII sec.)",
    "Biasca San Pietro e Paolo (XII sec.)",
    "Giornico Santa Maria del Castello (XII sec.) e chiesa di San Nicolao nel fondo valle vicino alla ferrovia",
    "Chiggiogna Santa Maria Assunta (XIII sec.)",
    "Giubiasco Santa Maria Assunta (XII sec.)",
    "Giubiasco Santa Maria Assunta (XII sec.)",
    "Giubiasco Santa Maria Assunta (XII sec.)",
    "Giubiasco Santa Maria Assunta (XII sec.)",
    "Ravecchia (Bellinzona) San Biagio (XII-XV sec.)",
    "Ravecchia (Bellinzona) San Biagio (XII-XV sec.)",
    "Arbedo San Paolo (o chiesa Rossa) ricostruita dopo 1422",
    "Mezzovico San Mamete (1055 e ampliata XV-XVI sec.)",
    "Mezzovico San Mamete (1055 e ampliata XV-XVI sec.)",
    "Mezzovico San Mamete (1055 e ampliata XV-XVI sec.)",
    "Lugano Alto medievale e ricostruita nel XV sec. San Lorenzo (cattedrale)",
    "Lugano Alto medievale e ricostruita nel XV sec. San Lorenzo (cattedrale)",
    "Lugano Alto medievale e ricostruita nel XV sec. San Lorenzo (cattedrale)",
    "Sureggio San Pietro e Paolo (X sec.)",
    "Sureggio San Pietro e Paolo (X sec.)",
    "Sureggio San Pietro e Paolo (X sec.)",
    "Rovio San Virgilio (XI sec.)",
    "Rovio San Virgilio (XI sec.)",
  ];

  addCaptions(
    portfolioCultura["Photography"]["Drone"]["Romanico"].images.pictures,
    captionRomanico
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
