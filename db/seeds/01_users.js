exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Georgeanne Targetter",
          email: "gtargetter0@shutterfly.com",
          registered: false
        },
        {
          name: "Elianora Troctor",
          email: "etroctor1@sitemeter.com",
          registered: true
        },
        {
          name: "Elise Sheerin",
          email: "esheerin2@cam.ac.uk",
          registered: true
        },
        {
          name: "Philis Hanwright",
          email: "phanwright3@yale.edu",
          registered: true
        },
        {
          name: "Alfonso Rookeby",
          email: "arookeby4@slate.com",
          registered: true
        },
        {
          name: "Traci Facchini",
          email: "tfacchini5@gizmodo.com",
          registered: true
        },
        { name: "Zorana Nel", email: "znel6@yelp.com", registered: true },
        {
          name: "Quintina Tellenbrook",
          email: "qtellenbrook7@webnode.com",
          registered: true
        },
        {
          name: "Oliy Beviss",
          email: "obeviss8@bbc.co.uk",
          registered: true
        },
        {
          name: "Sheelagh Andrioletti",
          email: "sandrioletti9@wikimedia.org",
          registered: true
        },
        {
          name: "Shelbi Pendlebery",
          email: "spendleberya@washington.edu",
          registered: false
        },
        {
          name: "Garret Peron",
          email: "gperonb@seesaa.net",
          registered: false
        },
        {
          name: "Giles Nesbitt",
          email: "gnesbittc@census.gov",
          registered: true
        },
        {
          name: "Corella Haisell",
          email: "chaiselld@guardian.co.uk",
          registered: true
        },
        {
          name: "Daven Bebb",
          email: "dbebbe@foxnews.com",
          registered: false
        },
        {
          name: "Shem Moan",
          email: "smoanf@cyberchimps.com",
          registered: true
        },
        {
          name: "Gal Camerello",
          email: "gcamerellog@etsy.com",
          registered: true
        },
        {
          name: "Matthew Shingfield",
          email: "mshingfieldh@ft.com",
          registered: false
        },
        {
          name: "Freemon Lagne",
          email: "flagnei@clickbank.net",
          registered: false
        },
        {
          name: "Con Conechie",
          email: "cconechiej@yellowpages.com",
          registered: false
        },
        {
          name: "Shanta Shucksmith",
          email: "sshucksmithk@chron.com",
          registered: true
        },
        {
          name: "Loy Pibsworth",
          email: "lpibsworthl@canalblog.com",
          registered: true
        },
        {
          name: "Florida Chalfain",
          email: "fchalfainm@tripod.com",
          registered: false
        },
        {
          name: "Gerrie Wittering",
          email: "gwitteringn@europa.eu",
          registered: true
        },
        {
          name: "Locke Eschalotte",
          email: "leschalotteo@businesswire.com",
          registered: false
        },
        { name: "Corilla Petti", email: "cpettip@pbs.org", registered: true },
        {
          name: "Arvie Shannon",
          email: "ashannonq@furl.net",
          registered: false
        },
        {
          name: "Mariette Wimms",
          email: "mwimmsr@pinterest.com",
          registered: true
        },
        {
          name: "Hakeem Mollene",
          email: "hmollenes@behance.net",
          registered: true
        },
        {
          name: "Dennison Eldon",
          email: "deldont@google.com.br",
          registered: false
        },
        {
          name: "Marieann Ariss",
          email: "marissu@seattletimes.com",
          registered: true
        },
        {
          name: "Alexandrina Dundredge",
          email: "adundredgev@mashable.com",
          registered: false
        },
        { name: "Kenny Stark", email: "kstarkw@salon.com", registered: true },
        {
          name: "Floyd Dumberrill",
          email: "fdumberrillx@jiathis.com",
          registered: true
        },
        {
          name: "Worth Lamden",
          email: "wlamdeny@etsy.com",
          registered: false
        },
        {
          name: "Cristina Spilsbury",
          email: "cspilsburyz@businessweek.com",
          registered: false
        },
        {
          name: "Joseito Mulvany",
          email: "jmulvany10@goo.ne.jp",
          registered: false
        },
        {
          name: "Cristine Hillan",
          email: "chillan11@wix.com",
          registered: true
        },
        {
          name: "Heloise Demann",
          email: "hdemann12@parallels.com",
          registered: true
        },
        {
          name: "Chloette Perrelle",
          email: "cperrelle13@google.com",
          registered: false
        },
        {
          name: "Berty Sheehy",
          email: "bsheehy14@sourceforge.net",
          registered: false
        },
        {
          name: "Pete Welden",
          email: "pwelden15@discuz.net",
          registered: false
        },
        {
          name: "Natale Phillimore",
          email: "nphillimore16@constantcontact.com",
          registered: false
        },
        { name: "Milton Adin", email: "madin17@de.vu", registered: true },
        { name: "Eamon Muck", email: "emuck18@desdev.cn", registered: false },
        {
          name: "Norina Clemens",
          email: "nclemens19@histats.com",
          registered: true
        },
        {
          name: "Martainn Reglar",
          email: "mreglar1a@globo.com",
          registered: false
        },
        {
          name: "Carlye Siebart",
          email: "csiebart1b@yolasite.com",
          registered: true
        },
        {
          name: "Friedrick Ludwikiewicz",
          email: "fludwikiewicz1c@fotki.com",
          registered: false
        },
        {
          name: "Sallee Szymon",
          email: "sszymon1d@arizona.edu",
          registered: false
        }
      ]);
    });
};
