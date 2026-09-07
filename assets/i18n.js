/* =====================================================================
   Ginier & Co — moteur multilingue FR / EN / DE
   Usage :
     - Texte      : <span data-i18n="cle">Texte FR par défaut</span>
     - HTML        : <h1 data-i18n-html="cle">…<br>…</h1>
     - Placeholder : <input data-i18n-ph="cle">
     - aria-label  : <a data-i18n-aria="cle">
     - alt (image) : <img data-i18n-alt="cle">
   Le choix de langue est mémorisé dans localStorage ("ginier_lang").
   ===================================================================== */
(function () {
  "use strict";

  var T = {
    /* ---------- barre supérieure ---------- */
    "top.quote":      { fr: "✦ Devis gratuit sous 24 h", en: "✦ Free quote within 24 h", de: "✦ Gratis-Offerte in 24 Std." },
    "top.intl":       { fr: "✦ Suisse & international", en: "✦ Switzerland & international", de: "✦ Schweiz & international" },
    "top.insured":    { fr: "✦ Équipe assurée", en: "✦ Insured team", de: "✦ Versichertes Team" },

    /* ---------- navigation ---------- */
    "nav.services":   { fr: "Services", en: "Services", de: "Leistungen" },
    "nav.ba":         { fr: "Avant / Après", en: "Before / After", de: "Vorher / Nachher" },
    "nav.reviews":    { fr: "Avis", en: "Reviews", de: "Bewertungen" },
    "nav.intl":       { fr: "International", en: "International", de: "International" },
    "nav.about":      { fr: "À propos", en: "About", de: "Über uns" },
    "nav.quote":      { fr: "Devis 👇🏻", en: "Quote 👇🏻", de: "Offerte 👇🏻" },
    "nav.home":       { fr: "Accueil", en: "Home", de: "Startseite" },
    "cta.quote":      { fr: "Demander mon devis", en: "Get my quote", de: "Offerte anfragen" },
    "cta.call":       { fr: "Appeler maintenant", en: "Call now", de: "Jetzt anrufen" },

    /* ---------- hero ---------- */
    "hero.badge":     { fr: "✦ Déménagement · Transport · Débarras", en: "✦ Moving · Transport · Clearance", de: "✦ Umzug · Transport · Entrümpelung" },
    "hero.h1":        { fr: "On déménage<br>votre vie&nbsp;!", en: "We move<br>your life&nbsp;!", de: "Wir zügeln<br>Ihr Leben&nbsp;!" },
    "hero.thin":      { fr: "Rapide · Sûr · Efficace", en: "Fast · Safe · Efficient", de: "Schnell · Sicher · Effizient" },
    "hero.sub":       { fr: "Particuliers et professionnels : on emballe, on charge, on transporte et on réinstalle. Vous n'avez qu'à ouvrir la porte.", en: "Private clients and businesses: we pack, load, transport and set everything back up. All you do is open the door.", de: "Privat und Geschäft: Wir packen, laden, transportieren und richten wieder ein. Sie öffnen nur die Tür." },
    "hero.tagline":   { fr: "Partout, pour vous.", en: "Everywhere, for you.", de: "Überall, für Sie." },
    "hero.star":      { fr: "On<br>déménage<br>votre<br>vie&nbsp;!", en: "We<br>move<br>your<br>life&nbsp;!", de: "Wir<br>zügeln<br>Ihr<br>Leben&nbsp;!" },

    /* ---------- services ---------- */
    "srv.eyebrow":    { fr: "Nos services", en: "Our services", de: "Unsere Leistungen" },
    "srv.h2":         { fr: "Tout ce qu'il faut<br>pour changer d'adresse.", en: "Everything you need<br>to change address.", de: "Alles für<br>den Adresswechsel." },
    "srv.lead":       { fr: "Une seule équipe du premier carton au dernier meuble remonté. Pas de sous-traitance surprise, pas de facture qui gonfle le jour J.", en: "One single team, from the first box to the last piece of furniture reassembled. No surprise subcontracting, no bill that swells on moving day.", de: "Ein einziges Team – von der ersten Kiste bis zum letzten aufgebauten Möbel. Keine überraschende Fremdvergabe, keine aufgeblähte Rechnung am Umzugstag." },
    "srv.1.t":        { fr: "Déménagement", en: "Moving", de: "Umzug" },
    "srv.1.p":        { fr: "Emballage, démontage, chargement, remontage. Studio ou villa, on s'adapte au volume.", en: "Packing, dismantling, loading, reassembly. Studio or villa, we adapt to the volume.", de: "Verpacken, Demontage, Laden, Aufbau. Studio oder Villa – wir passen uns dem Volumen an." },
    "srv.2.t":        { fr: "Transport", en: "Transport", de: "Transport" },
    "srv.2.p":        { fr: "Livraison de mobilier, objets lourds ou fragiles, dans toute la Suisse et à l'étranger.", en: "Delivery of furniture, heavy or fragile items, across Switzerland and abroad.", de: "Lieferung von Möbeln, schweren oder zerbrechlichen Gütern – schweizweit und ins Ausland." },
    "srv.3.t":        { fr: "Débarras", en: "Clearance", de: "Entrümpelung" },
    "srv.3.p":        { fr: "Caves, greniers, locaux commerciaux : on vide, on trie et on évacue en déchetterie.", en: "Cellars, attics, commercial spaces: we empty, sort and haul to the recycling centre.", de: "Keller, Estriche, Gewerberäume: Wir räumen, sortieren und entsorgen fachgerecht." },
    "srv.4.t":        { fr: "Aménagement", en: "Set-up", de: "Einrichtung" },
    "srv.4.p":        { fr: "Montage de meubles, agencement des pièces, fixation murale. On repart quand c'est habitable.", en: "Furniture assembly, room layout, wall mounting. We leave once it's liveable.", de: "Möbelmontage, Raumgestaltung, Wandbefestigung. Wir gehen erst, wenn alles bewohnbar ist." },

    /* ---------- segments ---------- */
    "seg.eyebrow":    { fr: "Pour qui", en: "Who we serve", de: "Für wen" },
    "seg.h2":         { fr: "Particuliers &amp; entreprises,<br>deux façons de travailler.", en: "Private &amp; business,<br>two ways of working.", de: "Privat &amp; Geschäft,<br>zwei Arbeitsweisen." },
    "seg.b2c.k":      { fr: "B2C · Particuliers", en: "B2C · Private", de: "B2C · Privat" },
    "seg.b2c.h":      { fr: "Votre déménagement<br>sans y penser.", en: "Your move<br>off your mind.", de: "Ihr Umzug,<br>ganz ohne Sorgen." },
    "seg.b2c.p":      { fr: "Du studio à la villa familiale, week-ends compris. On s'occupe aussi du débarras de l'ancien logement.", en: "From studio to family villa, weekends included. We also handle clearing out the old home.", de: "Vom Studio bis zur Familienvilla, auch am Wochenende. Wir übernehmen auch die Räumung der alten Wohnung." },
    "seg.b2c.1":      { fr: "Emballage, démontage et remontage du mobilier", en: "Packing, dismantling and reassembly of furniture", de: "Verpacken, Demontage und Aufbau der Möbel" },
    "seg.b2c.2":      { fr: "Cartons, housses et protections fournis", en: "Boxes, covers and protections provided", de: "Kartons, Hüllen und Schutzmaterial inklusive" },
    "seg.b2c.3":      { fr: "Débarras cave, grenier, garage", en: "Cellar, attic, garage clearance", de: "Räumung von Keller, Estrich, Garage" },
    "seg.b2c.4":      { fr: "Pose de luminaires, TV et meubles muraux à l'arrivée", en: "Lights, TV and wall units mounted on arrival", de: "Montage von Lampen, TV und Wandmöbeln bei Ankunft" },
    "seg.b2c.5":      { fr: "Devis ferme, sans acompte", en: "Firm quote, no deposit", de: "Verbindliche Offerte, keine Anzahlung" },
    "seg.b2b.k":      { fr: "B2B · Entreprises", en: "B2B · Business", de: "B2B · Firmen" },
    "seg.b2b.h":      { fr: "Bureaux déplacés,<br>activité non stoppée.", en: "Offices moved,<br>business never stops.", de: "Büro verlegt,<br>Betrieb läuft weiter." },
    "seg.b2b.p":      { fr: "Commerces, cabinets, bureaux et régies. Intervention le soir ou le week-end, planning validé avec votre responsable de site.", en: "Shops, practices, offices and property managers. Evening or weekend work, schedule agreed with your site manager.", de: "Geschäfte, Praxen, Büros und Verwaltungen. Einsatz abends oder am Wochenende, Planung mit Ihrer Standortleitung abgestimmt." },
    "seg.b2b.1":      { fr: "Repérage technique et plan de charge écrit", en: "Technical survey and written load plan", de: "Technische Besichtigung und schriftlicher Ladeplan" },
    "seg.b2b.2":      { fr: "Déménagement hors horaires d'ouverture", en: "Moving outside opening hours", de: "Umzug ausserhalb der Öffnungszeiten" },
    "seg.b2b.3":      { fr: "Débarras de locaux et évacuation en déchetterie", en: "Premises clearance and disposal at recycling centre", de: "Räumung der Räume und fachgerechte Entsorgung" },
    "seg.b2b.4":      { fr: "Montage du mobilier et agencement des postes", en: "Furniture assembly and workstation set-up", de: "Möbelmontage und Einrichtung der Arbeitsplätze" },
    "seg.b2b.5":      { fr: "Facturation entreprise, interlocuteur unique", en: "Business invoicing, single point of contact", de: "Firmenrechnung, ein fester Ansprechpartner" },

    /* ---------- méthode ---------- */
    "met.eyebrow":    { fr: "Comment ça marche", en: "How it works", de: "So läuft es ab" },
    "met.h2":         { fr: "Quatre étapes, zéro surprise.", en: "Four steps, zero surprises.", de: "Vier Schritte, keine Überraschungen." },
    "met.1.t":        { fr: "Visite & devis", en: "Visit & quote", de: "Besuch & Offerte" },
    "met.1.p":        { fr: "Sur place ou en visio en 15 minutes. Devis ferme, gratuit, valable 60 jours.", en: "On site or by video in 15 minutes. Firm, free quote, valid 60 days.", de: "Vor Ort oder per Video in 15 Minuten. Verbindliche, kostenlose Offerte, 60 Tage gültig." },
    "met.2.t":        { fr: "Planification", en: "Planning", de: "Planung" },
    "met.2.p":        { fr: "Date bloquée, cartons livrés, autorisations de stationnement demandées.", en: "Date locked, boxes delivered, parking permits requested.", de: "Termin fixiert, Kartons geliefert, Parkbewilligungen beantragt." },
    "met.3.t":        { fr: "Jour J", en: "Moving day", de: "Umzugstag" },
    "met.3.p":        { fr: "Équipe assurée, protection des sols et des angles, inventaire signé au départ.", en: "Insured team, floor and corner protection, inventory signed at departure.", de: "Versichertes Team, Boden- und Kantenschutz, Inventar bei Abfahrt unterschrieben." },
    "met.4.t":        { fr: "Installation", en: "Set-up", de: "Einrichtung" },
    "met.4.p":        { fr: "Meubles remontés, cartons déposés pièce par pièce, emballages repris.", en: "Furniture reassembled, boxes placed room by room, packaging taken back.", de: "Möbel aufgebaut, Kartons Raum für Raum verteilt, Verpackung mitgenommen." },

    /* ---------- avant / après ---------- */
    "team.alt.calvin":   { fr: "Calvin monte une armoire sur un chantier", en: "Calvin assembling a wardrobe on site", de: "Calvin baut vor Ort einen Schrank auf" },
    "team.alt.chantier": { fr: "Dressing monté et posé en fin de chantier", en: "Fitted wardrobe assembled at the end of the job", de: "Fertig montierter Einbauschrank am Ende des Auftrags" },
    "team.alt.camion":   { fr: "Piano protégé et sanglé dans le camion", en: "Piano padded and strapped down in the van", de: "Klavier geschützt und im Lieferwagen verzurrt" },
    "ab.alt.chantier":   { fr: "Chambre remise en état après intervention", en: "Bedroom restored after our intervention", de: "Zimmer nach unserem Einsatz wiederhergestellt" },
    "ba.cta":         { fr: "Devis débarras gratuit →", en: "Free clearance quote →", de: "Kostenlose Offerte Entrümpelung →" },
    "srv.1.alt":      { fr: "Salon remonté et installé après un déménagement", en: "Living room reassembled and set up after a move", de: "Wohnzimmer nach dem Umzug wieder aufgebaut" },
    "srv.2.alt":      { fr: "Scooter sanglé dans le camion pour un transport", en: "Scooter strapped down in the van for transport", de: "Roller für den Transport im Lieferwagen verzurrt" },
    "srv.3.alt":      { fr: "Pièce vidée et nettoyée après un débarras", en: "Room emptied and cleaned after a clearance", de: "Raum nach der Entrümpelung geleert und gereinigt" },
    "srv.4.alt":      { fr: "Dressing en cours de montage", en: "Wardrobe being assembled", de: "Kleiderschrank im Aufbau" },
    "srv.3.link":     { fr: "Voir avant / après →", en: "See before / after →", de: "Vorher / nachher ansehen →" },
    "ba.eyebrow":     { fr: "Débarras · avant / après", en: "Clearance · before / after", de: "Entrümpelung · vorher / nachher" },
    "ba.h2":          { fr: "Un débarras,<br>avant et après.", en: "A clearance,<br>before and after.", de: "Eine Entrümpelung,<br>vorher und nachher." },
    "ba.lead":        { fr: "Ces trois glissières montrent uniquement nos chantiers de débarras : on vide, on trie, on évacue et on rend la pièce nette. Appartement à Nyon, photos réelles — faites glisser la poignée.", en: "These three sliders show our clearance jobs only: we empty, sort, dispose of everything and hand back a clean room. Flat in Nyon, real photos — drag the handle.", de: "Diese drei Schieber zeigen ausschliesslich unsere Entrümpelungen: leeren, sortieren, entsorgen und den Raum sauber übergeben. Wohnung in Nyon, echte Fotos — Griff verschieben." },
    "ba.drag":        { fr: "Glissez", en: "Slide", de: "Schieben" },
    "ba.before":      { fr: "Avant", en: "Before", de: "Vorher" },
    "ba.after":       { fr: "Après", en: "After", de: "Nachher" },
    "ba.1":           { fr: "Chambre encombrée → vidée et nettoyée", en: "Cluttered room → cleared and cleaned", de: "Vollgestelltes Zimmer → geräumt und gereinigt" },
    "ba.2":           { fr: "Appartement en travaux → prêt à remettre", en: "Flat under works → ready to hand over", de: "Wohnung im Umbau → übergabebereit" },
    "ba.3":           { fr: "Gravats et démontage → pièce nette", en: "Rubble and stripping → clean room", de: "Bauschutt und Rückbau → sauberer Raum" },

    /* ---------- international ---------- */
    "intl.eyebrow":   { fr: "Sans frontières", en: "No borders", de: "Ohne Grenzen" },
    "intl.h2":        { fr: "De la Suisse romande<br>à l'international.", en: "From French-speaking<br>Switzerland, worldwide.", de: "Von der Westschweiz<br>international." },
    "intl.lead":      { fr: "Vous partez à l'étranger ou vous arrivez en Suisse ? On organise le déménagement transfrontalier de bout en bout, France, Allemagne et Union européenne comprises.", en: "Moving abroad or arriving in Switzerland? We organise the cross-border move end to end — France, Germany and the European Union included.", de: "Ziehen Sie ins Ausland oder in die Schweiz? Wir organisieren den grenzüberschreitenden Umzug von A bis Z — Frankreich, Deutschland und EU inbegriffen." },
    "intl.1.t":       { fr: "Transport longue distance", en: "Long-distance transport", de: "Ferntransport" },
    "intl.1.p":       { fr: "Camions équipés pour les longs trajets, mobilier arrimé et protégé porte à porte.", en: "Trucks equipped for long hauls, furniture strapped and protected door to door.", de: "Für lange Strecken ausgerüstete Fahrzeuge, Möbel von Tür zu Tür gesichert und geschützt." },
    "intl.2.t":       { fr: "Formalités douanières", en: "Customs formalities", de: "Zollformalitäten" },
    "intl.2.p":       { fr: "On vous guide sur l'inventaire, les documents et le passage de frontière.", en: "We guide you through the inventory, documents and border crossing.", de: "Wir begleiten Sie bei Inventar, Dokumenten und Grenzübertritt." },
    "intl.3.t":       { fr: "Garde-meubles", en: "Storage", de: "Möbellager" },
    "intl.3.p":       { fr: "Décalage entre deux logements ? On stocke vos affaires au sec, le temps qu'il faut.", en: "Gap between two homes? We store your belongings dry, for as long as needed.", de: "Lücke zwischen zwei Wohnungen? Wir lagern Ihre Sachen trocken, so lange nötig." },

    /* ---------- équipe ---------- */
    "team.eyebrow":   { fr: "L'équipe", en: "The team", de: "Das Team" },
    "team.h2":        { fr: "Une petite équipe,<br>toujours la même.", en: "A small team,<br>always the same.", de: "Ein kleines Team,<br>immer dasselbe." },
    "team.lead":      { fr: "Pas d'intérimaires envoyés au hasard : c'est Calvin qui fait le devis — sur place, en visio ou sur photos — et c'est lui que vous retrouvez le jour du déménagement.", en: "No temps sent at random: Calvin does the quote — on site, by video call or from photos — and he's the one you meet again on moving day.", de: "Keine zufällig geschickten Aushilfen: Calvin erstellt die Offerte — vor Ort, per Videoanruf oder anhand von Fotos — und ihn treffen Sie am Umzugstag wieder." },
    "team.quote":     { fr: "« On a monté Ginier & Co pour faire les choses proprement : un devis honnête, du matériel qui protège vraiment, et des gens qui font attention à vos meubles comme aux leurs. »", en: "“We founded Ginier & Co to do things properly: an honest quote, gear that truly protects, and people who treat your furniture like their own.”", de: "„Wir haben Ginier & Co gegründet, um es richtig zu machen: eine ehrliche Offerte, Material das wirklich schützt, und Leute, die Ihre Möbel wie ihre eigenen behandeln.“" },
    "team.sign":      { fr: "Calvin — fondateur", en: "Calvin — founder", de: "Calvin — Gründer" },
    "team.about":     { fr: "En savoir plus sur nous", en: "More about us", de: "Mehr über uns" },

    /* ---------- avis ---------- */
    "rev.eyebrow":    { fr: "Avis clients vérifiés", en: "Verified client reviews", de: "Verifizierte Kundenbewertungen" },
    "rev.h2":         { fr: "Ce que disent<br>nos clients.", en: "What our<br>clients say.", de: "Was unsere<br>Kunden sagen." },
    "rev.lead":       { fr: "Ponctualité, soin et bonne humeur — chantier après chantier.", en: "Punctuality, care and good spirits — site after site.", de: "Pünktlichkeit, Sorgfalt und gute Laune — Einsatz für Einsatz." },
    "rev.ago.13d":    { fr: "il y a 13 jours", en: "13 days ago", de: "vor 13 Tagen" },
    "rev.ago.15d":    { fr: "il y a 15 jours", en: "15 days ago", de: "vor 15 Tagen" },
    "rev.ago.21d":    { fr: "il y a 21 jours", en: "21 days ago", de: "vor 21 Tagen" },
    "rev.ago.1m":     { fr: "il y a 1 mois", en: "1 month ago", de: "vor 1 Monat" },
    "rev.ago.2m":     { fr: "il y a 2 mois", en: "2 months ago", de: "vor 2 Monaten" },

    /* ---------- contact / devis (home) ---------- */
    "ct.eyebrow":     { fr: "Devis gratuit", en: "Free quote", de: "Gratis-Offerte" },
    "ct.h2":          { fr: "Dites-nous où<br>vous allez.", en: "Tell us where<br>you're going.", de: "Sagen Sie uns,<br>wohin es geht." },
    "ct.lead":        { fr: "Réponse sous 24 h ouvrées avec un prix ferme. Aucun acompte demandé avant la visite.", en: "Reply within 24 business hours with a firm price. No deposit required before the visit.", de: "Antwort in 24 Arbeitsstunden mit Festpreis. Keine Anzahlung vor dem Besuch." },
    "ct.zone":        { fr: "Suisse romande & international", en: "French-speaking Switzerland & international", de: "Westschweiz & international" },
    "ct.openquote":   { fr: "Ouvrir le formulaire de devis complet", en: "Open the full quote form", de: "Vollständiges Offertformular öffnen" },

    /* ---------- footer ---------- */
    "ft.slogan":      { fr: "© 2026 Ginier & Co Sàrl — On déménage votre vie !", en: "© 2026 Ginier & Co Sàrl — We move your life!", de: "© 2026 Ginier & Co Sàrl — Wir zügeln Ihr Leben!" },

    /* ============ PAGE À PROPOS ============ */
    "ab.badge":       { fr: "✦ À propos de nous", en: "✦ About us", de: "✦ Über uns" },
    "ab.h1":          { fr: "Une entreprise de quartier,<br>pas une usine à déménager.", en: "A neighbourhood business,<br>not a moving factory.", de: "Ein Betrieb aus der Nachbarschaft,<br>keine Umzugsfabrik." },
    "ab.sub":         { fr: "Ginier & Co Sàrl, c'est Calvin et une petite équipe fidèle qui déménagent, transportent et débarrassent en Suisse romande depuis plusieurs années.", en: "Ginier & Co Sàrl is Calvin and a small, loyal team who have been moving, transporting and clearing across French-speaking Switzerland for several years.", de: "Ginier & Co Sàrl, das sind Calvin und ein kleines, treues Team, die seit mehreren Jahren in der Westschweiz zügeln, transportieren und entrümpeln." },
    "ab.story.eye":   { fr: "Notre histoire", en: "Our story", de: "Unsere Geschichte" },
    "ab.story.h2":    { fr: "Fait proprement,<br>depuis le premier carton.", en: "Done properly,<br>from the very first box.", de: "Sauber gemacht,<br>ab der ersten Kiste." },
    "ab.story.p1":    { fr: "On a créé Ginier & Co avec une idée simple : un déménagement, ça se juge à la fin de journée. Meubles intacts, appartement propre, client tranquille. Pas de mauvaise surprise sur la facture.", en: "We created Ginier & Co with a simple idea: a move is judged at the end of the day. Furniture intact, flat clean, client at ease. No nasty surprise on the bill.", de: "Wir haben Ginier & Co mit einer einfachen Idee gegründet: Ein Umzug entscheidet sich am Ende des Tages. Möbel heil, Wohnung sauber, Kunde entspannt. Keine böse Überraschung auf der Rechnung." },
    "ab.story.p2":    { fr: "Ici, la personne qui fait le devis est celle qui porte les cartons. Ça change tout : on connaît l'accès, l'ascenseur, le piano du 3e — et on tient nos promesses parce que c'est nous qui les tenons.", en: "Here, the person who makes the quote is the one who carries the boxes. That changes everything: we know the access, the lift, the piano on the 3rd floor — and we keep our promises because we're the ones keeping them.", de: "Hier ist die Person, die die Offerte macht, dieselbe, die die Kisten trägt. Das ändert alles: Wir kennen den Zugang, den Lift, das Klavier im 3. Stock — und wir halten unsere Versprechen, weil wir es selbst tun." },
    "ab.val.eye":     { fr: "Ce qui compte pour nous", en: "What matters to us", de: "Was uns wichtig ist" },
    "ab.val.h2":      { fr: "Trois règles<br>qu'on ne lâche pas.", en: "Three rules<br>we never drop.", de: "Drei Regeln,<br>die wir nie brechen." },
    "ab.val.1.t":     { fr: "Devis honnête", en: "Honest quote", de: "Ehrliche Offerte" },
    "ab.val.1.p":     { fr: "Un prix ferme, expliqué, sans ligne cachée. Ce qu'on annonce est ce que vous payez.", en: "A firm price, explained, with no hidden line. What we announce is what you pay.", de: "Ein Festpreis, erklärt, ohne versteckte Posten. Was wir nennen, zahlen Sie." },
    "ab.val.2.t":     { fr: "Matériel qui protège", en: "Gear that protects", de: "Material das schützt" },
    "ab.val.2.p":     { fr: "Housses, sangles, protections d'angles et de sols. On traite vos meubles comme les nôtres.", en: "Covers, straps, corner and floor protection. We treat your furniture like our own.", de: "Hüllen, Gurte, Kanten- und Bodenschutz. Wir behandeln Ihre Möbel wie unsere eigenen." },
    "ab.val.3.t":     { fr: "La même équipe", en: "The same team", de: "Dasselbe Team" },
    "ab.val.3.p":     { fr: "Pas d'intérim au hasard. Des visages que vous reconnaissez, du devis à la dernière caisse.", en: "No random temps. Faces you recognise, from the quote to the last crate.", de: "Keine zufälligen Aushilfen. Gesichter, die Sie wiedererkennen, von der Offerte bis zur letzten Kiste." },
    "ab.num.eye":     { fr: "En chiffres", en: "In numbers", de: "In Zahlen" },
    "ab.num.1":       { fr: "note moyenne sur Yoojo", en: "average rating on Yoojo", de: "Durchschnittsnote auf Yoojo" },
    "ab.num.2":       { fr: "avis clients vérifiés", en: "verified client reviews", de: "verifizierte Kundenbewertungen" },
    "ab.num.3":       { fr: "de ponctualité", en: "punctuality", de: "Pünktlichkeit" },
    "ab.num.4":       { fr: "ans au service des Romands", en: "years serving the region", de: "Jahre im Dienst der Region" },
    "ab.zone.eye":    { fr: "Zone d'intervention", en: "Service area", de: "Einsatzgebiet" },
    "ab.zone.h2":     { fr: "Basés en Suisse romande,<br>mobiles partout.", en: "Based in French-speaking<br>Switzerland, mobile everywhere.", de: "In der Westschweiz,<br>überall mobil." },
    "ab.zone.p":      { fr: "Genève, Vaud, Nyon, Lausanne, Montreux et toute la Romandie — jusqu'à l'international quand vous partez plus loin.", en: "Geneva, Vaud, Nyon, Lausanne, Montreux and all of Romandie — going international when you move further.", de: "Genf, Waadt, Nyon, Lausanne, Montreux und die ganze Westschweiz — international, wenn es weiter geht." },
    "ab.cta.h2":      { fr: "On parle de<br>votre déménagement ?", en: "Shall we talk about<br>your move?", de: "Sprechen wir über<br>Ihren Umzug?" },
    "ab.cta.p":       { fr: "Devis gratuit et ferme sous 24 h ouvrées, sans engagement.", en: "Free, firm quote within 24 business hours, no commitment.", de: "Gratis-Festofferte in 24 Arbeitsstunden, unverbindlich." },

    /* ============ PAGE DEVIS ============ */
    "dv.badge":       { fr: "✦ Devis gratuit sous 24 h", en: "✦ Free quote within 24 h", de: "✦ Gratis-Offerte in 24 Std." },
    "dv.h1":          { fr: "Votre devis de déménagement,<br>gratuit et sans engagement.", en: "Your moving quote,<br>free and without commitment.", de: "Ihre Umzugsofferte,<br>gratis und unverbindlich." },
    "dv.sub":         { fr: "Décrivez votre projet en 2 minutes. Plus c'est précis (et avec des photos), plus le prix est juste. Réponse sous 24 h ouvrées.", en: "Describe your project in 2 minutes. The more precise (and with photos), the fairer the price. Reply within 24 business hours.", de: "Beschreiben Sie Ihr Projekt in 2 Minuten. Je genauer (und mit Fotos), desto fairer der Preis. Antwort in 24 Arbeitsstunden." },
    "dv.trust.1":     { fr: "Devis ferme, sans acompte", en: "Firm quote, no deposit", de: "Festofferte, keine Anzahlung" },
    "dv.trust.3":     { fr: "Réponse sous 24 h", en: "Reply within 24 h", de: "Antwort in 24 Std." },

    /* ---- libellés du formulaire ---- */
    "q.1.legend":     { fr: "Votre demande", en: "Your request", de: "Ihre Anfrage" },
    "q.youare":       { fr: "Vous êtes", en: "You are", de: "Sie sind" },
    "q.private":      { fr: "Particulier", en: "Private", de: "Privat" },
    "q.business":     { fr: "Entreprise", en: "Business", de: "Firma" },
    "q.service":      { fr: "Prestation souhaitée", en: "Service needed", de: "Gewünschte Leistung" },
    "q.moving":       { fr: "Déménagement", en: "Moving", de: "Umzug" },
    "q.transport":    { fr: "Transport de marchandise", en: "Goods transport", de: "Warentransport" },
    "q.clearance":    { fr: "Débarras", en: "Clearance", de: "Entrümpelung" },
    "q.fitin":        { fr: "Aménagement d'intérieur", en: "Interior fit-out", de: "Innenausbau" },
    "q.both":         { fr: "Les deux", en: "Both", de: "Beides" },
    "q.handy":        { fr: "Bricolage seul", en: "Handywork only", de: "Nur Handwerk" },

    "q.2.legend":     { fr: "Adresses", en: "Addresses", de: "Adressen" },
    "q.addr.from":    { fr: "Adresse de départ", en: "Departure address", de: "Startadresse" },
    "q.addr.to":      { fr: "Adresse d'arrivée", en: "Arrival address", de: "Zieladresse" },
    "q.addr.single":  { fr: "Adresse du lieu", en: "Address of the location", de: "Adresse des Ortes" },
    "q.addr.ph":      { fr: "Rue, NPA, localité", en: "Street, ZIP, town", de: "Strasse, PLZ, Ort" },
    "q.addr.hint":    { fr: "Les adresses servent uniquement à préparer l'accès et le trajet.", en: "Addresses are used only to prepare access and the route.", de: "Die Adressen dienen nur der Vorbereitung von Zugang und Route." },

    "q.3.legend":     { fr: "Accès", en: "Access", de: "Zugang" },
    "q.housing":      { fr: "Type de logement", en: "Type of home", de: "Art der Wohnung" },
    "q.apartment":    { fr: "Appartement", en: "Apartment", de: "Wohnung" },
    "q.house":        { fr: "Maison", en: "House", de: "Haus" },
    "q.floor.single": { fr: "Étage", en: "Floor", de: "Stockwerk" },
    "q.lift.single":  { fr: "Ascenseur", en: "Lift", de: "Lift" },
    "q.floor.from":   { fr: "Étage au départ", en: "Floor at departure", de: "Stockwerk Start" },
    "q.floor.to":     { fr: "Étage à l'arrivée", en: "Floor at arrival", de: "Stockwerk Ziel" },
    "q.lift.from":    { fr: "Ascenseur au départ", en: "Lift at departure", de: "Lift Start" },
    "q.lift.to":      { fr: "Ascenseur à l'arrivée", en: "Lift at arrival", de: "Lift Ziel" },
    "q.floor.0":      { fr: "Rez-de-chaussée", en: "Ground floor", de: "Erdgeschoss" },
    "q.floor.5p":     { fr: "5e et +", en: "5th and above", de: "5. und höher" },
    "q.lift.none":    { fr: "Aucun", en: "None", de: "Keiner" },
    "q.lift.small":   { fr: "Petit (2–4 personnes)", en: "Small (2–4 people)", de: "Klein (2–4 Personen)" },
    "q.lift.big":     { fr: "Grand (monte-charge)", en: "Large (goods lift)", de: "Gross (Lastenlift)" },
    "q.park":         { fr: "Stationnement du camion", en: "Truck parking", de: "Parkplatz LKW" },
    "q.park.1":       { fr: "Devant l'entrée", en: "In front of the entrance", de: "Vor dem Eingang" },
    "q.park.2":       { fr: "À moins de 50 m", en: "Less than 50 m away", de: "Weniger als 50 m" },
    "q.park.3":       { fr: "Plus de 50 m / accès difficile", en: "Over 50 m / difficult access", de: "Über 50 m / schwieriger Zugang" },

    "q.4.legend":     { fr: "Volume", en: "Volume", de: "Volumen" },
    "q.rooms":        { fr: "Nombre de pièces", en: "Number of rooms", de: "Anzahl Zimmer" },
    "q.area":         { fr: "Surface (m²)", en: "Area (m²)", de: "Fläche (m²)" },
    "q.furniture":    { fr: "Nombre de meubles", en: "Number of items", de: "Anzahl Möbel" },
    "q.desc":         { fr: "Descriptif des meubles", en: "Furniture description", de: "Möbelbeschreibung" },
    "q.desc.ph":      { fr: "Armoire 3 portes, lit 160, canapé d'angle, buffet, 2 bureaux, lave-linge, piano droit, 25 cartons…", en: "3-door wardrobe, king bed, corner sofa, sideboard, 2 desks, washing machine, upright piano, 25 boxes…", de: "3-türiger Schrank, Bett 160, Ecksofa, Buffet, 2 Schreibtische, Waschmaschine, Klavier, 25 Kartons…" },

    "q.5.legend":     { fr: "Prestations supplémentaires", en: "Additional services", de: "Zusatzleistungen" },
    "q.furn":         { fr: "Meubles", en: "Furniture", de: "Möbel" },
    "q.dismantle":    { fr: "Démontage au départ", en: "Dismantling at departure", de: "Demontage am Start" },
    "q.reassemble":   { fr: "Remontage à l'arrivée", en: "Reassembly at arrival", de: "Aufbau am Ziel" },
    "q.pack":         { fr: "Emballage par nos soins", en: "Packing by us", de: "Verpacken durch uns" },
    "q.boxes":        { fr: "Fourniture de cartons", en: "Boxes supplied", de: "Kartons geliefert" },
    "q.boxes.title":  { fr: "Cartons souhaités", en: "Boxes needed", de: "Gewünschte Kartons" },
    "q.boxes.s":      { fr: "Petit (S)", en: "Small (S)", de: "Klein (S)" },
    "q.boxes.m":      { fr: "Moyen (M)", en: "Medium (M)", de: "Mittel (M)" },
    "q.boxes.l":      { fr: "Grand (L)", en: "Large (L)", de: "Gross (L)" },
    "q.boxes.qty":    { fr: "Quantité", en: "Quantity", de: "Menge" },
    "q.boxes.refund": { fr: "On s'occupe de tout : nous achetons les cartons pour vous et gardons la quittance — le montant exact est simplement reporté sur la facture, sans marge.", en: "We take care of everything: we buy the boxes for you and keep the receipt — the exact amount is simply added to the invoice, with no mark-up.", de: "Wir kümmern uns um alles: Wir kaufen die Kartons für Sie und behalten den Beleg — der exakte Betrag wird einfach auf die Rechnung übertragen, ohne Aufschlag." },
    "q.fitout":       { fr: "Aménagement & bricolage à l'arrivée", en: "Set-up & handywork on arrival", de: "Einrichtung & Handwerk bei Ankunft" },
    "q.lights":       { fr: "Pose de luminaires", en: "Light fitting", de: "Lampen montieren" },
    "q.tv":           { fr: "Fixation TV au mur", en: "Wall-mount TV", de: "TV an Wand" },
    "q.shelves":      { fr: "Étagères / meubles muraux", en: "Shelves / wall units", de: "Regale / Wandmöbel" },
    "q.assembly":     { fr: "Montage de meubles neufs", en: "New furniture assembly", de: "Neumöbel aufbauen" },
    "q.precise":      { fr: "Précisions", en: "Details", de: "Präzisierungen" },
    "q.precise.ph":   { fr: "Démonter le lit et l'armoire, poser 3 suspensions, fixer la TV 55\" et deux étagères dans le salon…", en: "Dismantle the bed and wardrobe, fit 3 pendant lights, mount the 55\" TV and two shelves in the living room…", de: "Bett und Schrank demontieren, 3 Hängeleuchten montieren, 55\"-TV und zwei Regale im Wohnzimmer anbringen…" },

    "q.6.legend":     { fr: "Photos", en: "Photos", de: "Fotos" },
    "q.photos.b":     { fr: "Envoyez-nous 4–5 photos de vos pièces", en: "Send us 4–5 photos of your rooms", de: "Senden Sie uns 4–5 Fotos Ihrer Räume" },
    "q.photos.wa":    { fr: "WhatsApp 078 812 81 99", en: "WhatsApp +41 78 812 81 99", de: "WhatsApp +41 78 812 81 99" },
    "q.photos.mail":  { fr: "info@ginier-co.ch", en: "info@ginier-co.ch", de: "info@ginier-co.ch" },
    "q.photos.s":     { fr: "Un devis est deux fois plus précis avec des photos (salon, chambres, cave, accès).", en: "A quote is twice as accurate with photos (living room, bedrooms, cellar, access).", de: "Eine Offerte ist mit Fotos doppelt so genau (Wohnzimmer, Zimmer, Keller, Zugang)." },
    "q.photos.hint":  { fr: "Envoyez vos photos avant ou après le formulaire, en indiquant votre nom — on les rattache à votre demande.", en: "Send your photos before or after the form, with your name — we'll attach them to your request.", de: "Senden Sie Ihre Fotos vor oder nach dem Formular mit Ihrem Namen — wir ordnen sie Ihrer Anfrage zu." },
    "q.required":     { fr: "Merci de renseigner votre nom et votre téléphone.", en: "Please enter your name and phone number.", de: "Bitte geben Sie Namen und Telefonnummer an." },

    "q.7.legend":     { fr: "Vos coordonnées", en: "Your details", de: "Ihre Kontaktdaten" },
    "q.name":         { fr: "Nom et prénom", en: "Full name", de: "Vor- und Nachname" },
    "q.phone":        { fr: "Téléphone", en: "Phone", de: "Telefon" },
    "q.email":        { fr: "E-mail", en: "Email", de: "E-Mail" },
    "q.date":         { fr: "Date souhaitée", en: "Preferred date", de: "Wunschdatum" },
    "q.date.ph":      { fr: "Fin septembre / flexible", en: "End of September / flexible", de: "Ende September / flexibel" },
    "q.submit":       { fr: "Recevoir mon devis", en: "Get my quote", de: "Offerte erhalten" },
    "q.sending":      { fr: "Envoi en cours…", en: "Sending…", de: "Wird gesendet…" },
    "q.sent":         { fr: "Demande envoyée ✦ merci !", en: "Request sent ✦ thank you!", de: "Anfrage gesendet ✦ danke!" },
    "q.error":        { fr: "Envoi impossible — appelez-nous au 078 812 81 99.", en: "Sending failed — call us on +41 78 812 81 99.", de: "Senden fehlgeschlagen — rufen Sie +41 78 812 81 99 an." },
    "q.backend":      { fr: "Votre demande arrive directement dans la boîte mail de l'équipe. Réponse sous 24 h ouvrées, sans engagement.", en: "Your request goes straight to the team's inbox. Reply within 24 business hours, no commitment.", de: "Ihre Anfrage landet direkt im Postfach des Teams. Antwort in 24 Arbeitsstunden, unverbindlich." },
    "q.consent":      { fr: "En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de votre demande de devis.", en: "By sending this form, you agree to be contacted about your quote request.", de: "Mit dem Absenden erklären Sie sich einverstanden, zu Ihrer Offertanfrage kontaktiert zu werden." },
    "q.consent.link": { fr: "Voir notre politique de confidentialité.", en: "See our privacy policy.", de: "Siehe unsere Datenschutzerklärung." },
    "q.notconfig":    { fr: "⚠︎ Configurez d'abord votre clé Web3Forms (voir README-integration.md).", en: "⚠︎ Set your Web3Forms key first (see README-integration.md).", de: "⚠︎ Zuerst Ihren Web3Forms-Schlüssel einrichten (siehe README-integration.md)." },

    /* ---------- pied de page ---------- */
    "ft.legal":       { fr: "Mentions légales & confidentialité", en: "Legal notice & privacy", de: "Impressum & Datenschutz" },

    /* ============ PAGE MENTIONS LÉGALES / CONFIDENTIALITÉ ============ */
    "lg.badge":       { fr: "✦ Informations légales", en: "✦ Legal information", de: "✦ Rechtliche Hinweise" },
    "lg.h1":          { fr: "Mentions légales<br>& confidentialité.", en: "Legal notice<br>& privacy.", de: "Impressum<br>& Datenschutz." },
    "lg.updated":     { fr: "Dernière mise à jour : août 2026.", en: "Last updated: August 2026.", de: "Zuletzt aktualisiert: August 2026." },
    "lg.1.h":         { fr: "1 · Éditeur du site", en: "1 · Site owner", de: "1 · Betreiber" },
    "lg.1.p":         { fr: "Ginier & Co Sàrl — Chemin de la Chevillarde 13, c/o Pasture-Ginier Calvin, 1224 Chêne-Bougeries (GE), Suisse. IDE / TVA : CHE-194.665.058. Contact : info@ginier-co.ch · 078 812 81 99.", en: "Ginier & Co Sàrl — Chemin de la Chevillarde 13, c/o Pasture-Ginier Calvin, 1224 Chêne-Bougeries (GE), Switzerland. Business ID / VAT: CHE-194.665.058. Contact: info@ginier-co.ch · +41 78 812 81 99.", de: "Ginier & Co Sàrl — Chemin de la Chevillarde 13, c/o Pasture-Ginier Calvin, 1224 Chêne-Bougeries (GE), Schweiz. UID / MWST: CHE-194.665.058. Kontakt: info@ginier-co.ch · +41 78 812 81 99." },
    "lg.2.h":         { fr: "2 · Données collectées", en: "2 · Data collected", de: "2 · Erhobene Daten" },
    "lg.2.p":         { fr: "Via le formulaire de devis, nous collectons uniquement les informations que vous fournissez : nom, téléphone, e-mail, adresses de départ et d'arrivée, détails du logement (pièces, m², meubles, accès) et les photos que vous ajoutez. Aucune donnée n'est collectée à votre insu.", en: "Through the quote form we collect only the information you provide: name, phone, email, departure and arrival addresses, home details (rooms, m², furniture, access) and any photos you add. No data is collected without your knowledge.", de: "Über das Offertformular erheben wir nur die von Ihnen angegebenen Informationen: Name, Telefon, E-Mail, Start- und Zieladresse, Wohnungsdetails (Zimmer, m², Möbel, Zugang) und hochgeladene Fotos. Es werden keine Daten ohne Ihr Wissen erhoben." },
    "lg.3.h":         { fr: "3 · Finalité & base légale", en: "3 · Purpose & legal basis", de: "3 · Zweck & Rechtsgrundlage" },
    "lg.3.p":         { fr: "Ces données servent exclusivement à établir votre devis et à vous recontacter. Elles ne sont ni vendues, ni utilisées à des fins publicitaires. Traitement fondé sur votre demande (mesures précontractuelles) et votre consentement (nLPD suisse, RGPD pour l'UE).", en: "This data is used solely to prepare your quote and to contact you. It is never sold or used for advertising. Processing is based on your request (pre-contractual steps) and your consent (Swiss FADP, EU GDPR).", de: "Diese Daten dienen ausschliesslich der Offerterstellung und der Kontaktaufnahme. Sie werden nicht verkauft oder zu Werbezwecken genutzt. Verarbeitung auf Basis Ihrer Anfrage (vorvertragliche Massnahmen) und Ihrer Einwilligung (Schweizer DSG, EU-DSGVO)." },
    "lg.4.h":         { fr: "4 · Destinataires & sous-traitants", en: "4 · Recipients & processors", de: "4 · Empfänger & Auftragsverarbeiter" },
    "lg.4.p":         { fr: "Votre demande est acheminée par e-mail à notre équipe via le service Web3Forms, qui transmet le message sans l'exploiter à d'autres fins. Seule l'équipe de Ginier & Co accède à vos données.", en: "Your request is delivered by email to our team via the Web3Forms service, which forwards the message without using it for other purposes. Only the Ginier & Co team accesses your data.", de: "Ihre Anfrage wird per E-Mail über den Dienst Web3Forms an unser Team übermittelt, der die Nachricht nicht anderweitig verwendet. Nur das Team von Ginier & Co hat Zugriff auf Ihre Daten." },
    "lg.5.h":         { fr: "5 · Durée de conservation", en: "5 · Retention period", de: "5 · Aufbewahrungsdauer" },
    "lg.5.p":         { fr: "Les demandes sans suite sont supprimées dans un délai raisonnable. En cas de mandat, les données sont conservées le temps de la relation commerciale et des obligations légales (comptabilité).", en: "Requests without follow-up are deleted within a reasonable time. If a job is booked, data is kept for the duration of the business relationship and legal obligations (accounting).", de: "Anfragen ohne Folge werden innert angemessener Frist gelöscht. Bei einem Auftrag werden die Daten für die Dauer der Geschäftsbeziehung und der gesetzlichen Pflichten (Buchhaltung) aufbewahrt." },
    "lg.6.h":         { fr: "6 · Vos droits", en: "6 · Your rights", de: "6 · Ihre Rechte" },
    "lg.6.p":         { fr: "Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données en écrivant à info@ginier-co.ch. Nous répondons dans les meilleurs délais.", en: "You may at any time request access to, correction or deletion of your data by writing to info@ginier-co.ch. We reply as soon as possible.", de: "Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Daten unter info@ginier-co.ch verlangen. Wir antworten so rasch wie möglich." },
    "lg.7.h":         { fr: "7 · Cookies & stockage local", en: "7 · Cookies & local storage", de: "7 · Cookies & lokaler Speicher" },
    "lg.7.p":         { fr: "Ce site n'utilise aucun cookie de suivi ni traceur publicitaire. Seule votre préférence de langue est mémorisée localement dans votre navigateur (localStorage) pour votre confort.", en: "This site uses no tracking cookies or advertising trackers. Only your language preference is stored locally in your browser (localStorage) for your convenience.", de: "Diese Website verwendet keine Tracking-Cookies oder Werbe-Tracker. Nur Ihre Sprachauswahl wird lokal in Ihrem Browser (localStorage) gespeichert." },
    "lg.8.h":         { fr: "8 · Contact", en: "8 · Contact", de: "8 · Kontakt" },
    "lg.8.p":         { fr: "Pour toute question relative à ces informations : info@ginier-co.ch · 078 812 81 99.", en: "For any question about this information: info@ginier-co.ch · +41 78 812 81 99.", de: "Bei Fragen zu diesen Angaben: info@ginier-co.ch · +41 78 812 81 99." }
  };

  var LANGS = ["fr", "en", "de"];
  var KEY = "ginier_lang";

  function pick() {
    var s = null;
    try { s = localStorage.getItem(KEY); } catch (e) {}
    if (s && LANGS.indexOf(s) !== -1) return s;
    var n = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) !== -1 ? n : "fr";
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "fr";
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var t = T[el.getAttribute("data-i18n")];
      if (t && t[lang] != null) el.textContent = t[lang];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var t = T[el.getAttribute("data-i18n-html")];
      if (t && t[lang] != null) el.innerHTML = t[lang];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var t = T[el.getAttribute("data-i18n-ph")];
      if (t && t[lang] != null) el.setAttribute("placeholder", t[lang]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var t = T[el.getAttribute("data-i18n-aria")];
      if (t && t[lang] != null) el.setAttribute("aria-label", t[lang]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var t = T[el.getAttribute("data-i18n-alt")];
      if (t && t[lang] != null) el.setAttribute("alt", t[lang]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var t = T[el.getAttribute("data-i18n-content")];
      if (t && t[lang] != null) el.setAttribute("content", t[lang]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function init() {
    apply(pick());
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  window.GinierI18n = { apply: apply, dict: T };
})();
