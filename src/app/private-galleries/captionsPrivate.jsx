export const CaptionsPrivate = (portfolioCultura) => {
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

  const captionIngeborg = [
    "Glasbild 75/15",
    "Grande sala dedicata ad opere realizzate con zolfo con l’opera (senza titolo, 1996) pneumatici, vetro, zolfo.",
    "Grande sala dedicata ad opere realizzate con zolfo con l’opera (senza titolo, 1996) pneumatici, vetro, zolfo.",
    "Grande sala dedicata ad opere realizzate con zolfo con l’opera (senza titolo, 1996) pneumatici, vetro, zolfo.",
    "Sala: Voglio vedere le mie montagne (1999). A sinistra autoritratti solarizzati (1979-1980).",
    "Sala: Voglio vedere le mie montagne (1999). Sulla parete frontale: Come inizio a sperimentare il mondo ovvero conosco il significato e le parole, solo le cose sono al di sopra di me (1975-1979)",
    "La casa dei granchi (Das Heim der Krebse 1998) ",
    "Opera con mozziconi 71/16 (Verstummelung 71/16)",
    "Sala dedicata agli” Infissi per finestre in legno, mozziconi, garza” 72/…",
    "Opera con mozziconi 70/48",
    "Sala dedicata agli” Infissi per finestre in legno, mozziconi, garza” 72/…",
    "Opera con mozziconi 71/16 (Verstummelung 71/16)",
    "Sala dedicata agli” Infissi per finestre in legno, mozziconi, garza” 72/…",
    "Sala dedicata agli” Infissi per finestre in legno, mozziconi, garza” 72/…",
    "Pesto cotonese",
    "Pesto cotonese",
    "Corridoio del Museo con affresco barocco",
    "A destra: Perché tu possa camminare a Venezia senza che nessuno ti riconosca – mantello mimetico per uomo ricercato (1998). A sinistra: Herry e Una (1981)",
    "A destra: Perché tu possa camminare a Venezia senza che nessuno ti riconosca – mantello mimetico per uomo ricercato (1998). A sinistra: Herry e Una (1981). Al fondo: I giardini pensili di Semiramide (1999-20249)",
    "A destra: Perché tu possa camminare a Venezia senza che nessuno ti riconosca – mantello mimetico per uomo ricercato (1998). A sinistra: Herry e Una (1981). Al fondo: I giardini pensili di Semiramide (1999-2024)",
    "Perché tu possa camminare a Venezia senza che nessuno ti riconosca – mantello mimetico per uomo ricercato (1998). Alle pareti: Herry e Una (1981) e Senza titolo (Nuvola, 1986) ",
    "Corridoio lato est del Museo: Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Corridoio lato est del Museo: Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Corridoio lato est del Museo: Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Corridoio lato est del Museo: Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
    "Dettagli della Documentazione su Armand Schulthess, Versione VI. (1972-2024)",
  ];

  addCaptions(portfolioCultura["Museo Mendrisio"].images.pictures, captionIngeborg);
};
