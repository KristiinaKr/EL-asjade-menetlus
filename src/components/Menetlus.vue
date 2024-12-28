<template>
  <!-- <div class="app-container">
    Top Center Title
    <header class="app-header">
      <h1>EL asjade menetlus</h1>
    </header> -->
  <div class="timeline">
    <div
        class="timeline-block"
        v-for="(block, index) in timeline"
        :key="index"
        @click="toggleDetails(index)"
        :class="{ active: block.active, 'first-block': block.firstBlock }"
    >
      <!-- Main Step Box -->
      <div class="main-box">

        <h3>{{ block.title }}</h3>
      </div>
      <!-- Expanded Details -->
      <div class="details">
        <div class="sub-box"
            v-for="(step, stepIndex) in block.details"
            :key="stepIndex"
        >
          <div class="sub-box-left">
            <span :style="{ color: institutionColors[step.institution] || '#000' }">
               {{ step.institution }}
            </span>
          </div>

          <div class="sub-box-right">
            <h4>{{ step.title }}</h4>
            <p v-html="step.description"></p>

            <!-- Example of a link to jump 5 steps back -->
           <!-- <button v-if="stepIndex === 2" @click="navigateToStep(index - 5)">Tekst</button> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InteractiveTimeline",
  data() {
    return {
      timeline: [
        {
          title: "Eelfaas: avalikud konsultatsioonid, proaktiivsed seisukohad, valged paberid",
          firstBlock: true,
        },

        {
          title: "Euroopa Komisjon esitab algatuse",
          details: [
            {
              institution: "ELS",
              title: "Uute EL algatuste seire",
              description: "Uuendab iganädalaset algatuste tabelit. Kooskõlastab ministeeriumitega, kas Eesti seisukohad esitatakse KOK-ile ja valitsuse istungile.",
            },
            {
              institution: "KOK",
              title: "Vastutajate ja tähtaegade määramine",
              description: "Määrab kindlaks algatuse vastutava ministeeriumi ja kaasvastutaja(d) ning KOK-i/VV-sse esitamise vajaduse.",
            },
            {
              institution: "ELS",
              title: "Resolutsiooni koostamine",
              description:
                  "ELS saadab pea- ja kaasvastutajatele resolutsiooni EL algatuse osas seisukohtade koostamiseks. Määrab tähtajad (tavapäraselt 6 nädalat VV-sse jõudmiseks  subsidiaarsuskontrolli tähtaja sees).",
            },
          ],
          active: false,
        },
        {
          title: "Eesti seisukohtade kujundamine",
          details: [
            {
              institution: "Ministeerium",
              title: "Seisukohtade koostamine ja taustadokumentide ettevalmistamine",
              description: "Ministeeriumi eksperdid analüüsivad algatust ja selle valguses Eesti huvisid. Kaasatakse huvigrupid sisendi saamiseks. Koostatakse materjalid (seisukohad, seletuskiri)."
            },
            {
              institution: "KOK",
              title: "Seisukohtade kooskõlastamine",
              description: "Kõik KOK-i osapooled kooskõlastavad ja vajadusel täiendavad. Tehakse lõplik otsus seisukohtade VV-le esitamiseks.",
            },
            {
              institution: "Valitsus",
              title: "Seisukohtade heaks kiitmine",
              description: "Vabariigi Valitsus kiidab heaks esitatud seisukohad. Saadab Riigikogule.",
            },
            {
              institution: "Riigikogu juhatus",
              title: "Vastutavate komisjonide ja menetlustähtaja määramine",
              description: "Juhatus määrab Riigikogu valdkondliku komisjoni (või mitu) ELAK-ile arvamust andma. Tavapärane tähtaeg 2 töönädalat.",
            },
            {
              institution: "Riigikogu valdkondlik komisjon",
              title: "Arvamuse andmine",
              description: "Valdkondlik komisjon (või mitu) arutab  valitsuse esitatud seisukohti ning annab arvamuse EL asjade komisjonile.",
            },
            {
              institution: "Riigikogu EL asjade komisjon",
              title: "Lõplike Eesti seisukohtade kinnitamine",
              description: "ELAK arutab seisukohti võttes arvesse valdkondlike komisjonide arvamust, tehes vajadusel muudatusi ja/või täiendusi, ning kinnitab lõplikud Eesti seisukohad. <br> <span style='color: gray'> Vajadusel analüüsib ELAK subsidiaarsusprintsiibile vastavust. </span>",
            },
            {
            institution: "(Erandkorras)",
        title: "",
        description: "<span style='color: darkgray;'>Juhul kui ELAKi kinnitatud seisukoht erineb <strong>märkimisväärselt</strong> VV seisukohast, esitab ministeerium seisukohad uuesti VV-le. " +
            "RKKTS § 152 prim 4 lõige 3 alusel on Valitsus kohustatud Riigikogu seisukohast kinni pidama.</span>",
            },
          ],
          active: false,
        },
        {
          title: "EL tasandil seisukohtade kaitsmine",
          details: [
          {
            institution: "Ministeerium",
            title: "Seisukohtade esitamine ja töörühmades kaitsmine",
            description: "Ministeerium edastab Eesti seisukohad Euroopa Komisjonile ning esindab neid töörühmades. Vajadusel algatatakse seisukohtade täiendamine ministrite nõukogu materjalide raames."
          },
          {
            institution: "AEEL",
            title: "Seisukohtade ettevalmistamine Coreperi kohtumisteks",
            description: "Eesti alaline esindus (AEEL) edastab ministeeriumitele sisendipalve Coreperi läbirääkimiste juhisteks. Coreperis esindab Eesti seisukohti suursaadik."
          },
          {
            institution: "Ministeerium",
            title: "Ministrite nõukogu materjalide koostamine",
            description: "Erinevate EL ministrite nõukogu koosseisude kohtumisteks koostatakse materjal. Hinnatakse, kas vajalik on VV mandaat (näiteks kui pole olemasolevat mandaati või materjali raames täiendatakse mõne EL algatuse kohta Eesti seisukohti)."
          },
            {
              institution: "KOK/Valitsus",
              title: "Nõukogu materjali esmane heakskiit",
              description: "Kõik KOK-i osapooled kooskõlastavad ja vajadusel täiendavad materjali. Kui vaja, saadetakse materjal valitsusele heaks kiitmiseks.",
            },
          {
            institution: "Riigikogu EL asjade komisjon",
            title: "Nõukogu materjalile lõpliku mandaadi andmine",
            description: "Nõukogu seisukohad saadetakse otse ELAK-ile. Minister tutvustab ELAKile Eesti põhisõnumeid, komisjon arutab ja annab mandaadi, vajadusel materjale täiendades."
          },
          {
            institution: "Ministeerium",
            title: "Eesti seisukohtade kaitsmine ja kohtumiste ülevaadete koostamine",
            description: "Minister esindab Eesti kinnitatud seisukohti EL nõukogus. Koostab ka aruteludest ülevaated, mis edastatakse Riigikogule ja valitsusele. <br> Kui minister ei ole ELAKi mandaadist kinni pidanud, peab ta RKKTS alusel selles esimesel võimalusel aru andma."
          }
        ],
          active: false,
        },
        {
          title: "EL õigusakti ülevõtmine ja järelvalve",
          details: [
            {
              institution: "Euroopa Parlament ja nõukogu",
              title: "Seadusakti vastuvõtmine",
              description: "Seadusakti lõpptekst võetakse vastu ning tõlgitakse kõikidesse EL ametlikesse keeltesse.",
            },
            {
              institution: "ELS / ministeerium",
              title: "Siseriiklik rakendamine või ülevõtmine",
              description: "Tagab EL õigusaktide õigeaegse ülevõtmise, planeerib vajalikke tegevusi.",
            },
            {
              institution: "Riigikogu",
              title: "Direktiivi ülevõtmine",
              description: "Kavandab direktiiviga sätestatud õigused ja kohustused riigisisesesse õigusesse (seadus või määrus).",
            },
          ],
          active: false,
        },
      ],
      institutionColors: {
        ELS: '#EF6c00',  // orange
        KOK: '#00a86b',  // Green
        Ministeerium: '#8E44AD', // Purple
        Valitsus: '#028A0f', //
        "KOK/Valitsus": '#00a86b',
        Riigikogu: '#29b6f6',
        AEEL: '#de3161',
        "Euroopa Parlament ja nõukogu": '#de3161',
        "Riigikogu juhatus": '#29b6f6',
        "Riigikogu valdkondlik komisjon": '#039be5', //
        "Riigikogu EL asjade komisjon": '#01579b', //
        "ELS / ministeerium": '#EF6c00',
        "(Erandkorras)": '#a9a9a9',
      },
    };
  },
  methods: {
    toggleDetails(index) {
      this.timeline[index].active = !this.timeline[index].active;
    },
    navigateToStep(stepIndex) {
      // Ensure the stepIndex is within bounds
      if (stepIndex >= 0 && stepIndex < this.timeline.length) {
        // Close all blocks first
        this.timeline.forEach(block => block.active = false);

        // Activate the desired block
        this.timeline[stepIndex].active = true;
      }
    }
  },
};
</script>

<style scoped>
/* Import Roboto font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Apply Roboto font to the body and component elements */
body {
  font-family: 'Roboto Thin', sans-serif;
  margin: 0;
  padding: 0;
}

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
}

.timeline-block {
  text-align: center;
  margin-bottom: 10px;
  width: 90%;
  cursor: pointer;
}
.timeline-block:first-child {
  margin-bottom: 10px; /* Adjust margin for the first block */
}

.main-box {
  background-color: #e3f2fd; /* Light blue */
  padding: 15px;
  border: 1px solid #b1f2ff; /* Border blue */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  font-family: 'Roboto Thin', sans-serif;
  font-weight: 100;
  font-size: 1.2em;
}

.main-box:hover {
  transform: scale(1.02);
}

/* Styling for the first timeline block */
.first-block .main-box {
  background-color: #ffffe0; /* Light yellow background */
  border: 1px solid #ffff99;  /* Soft yellow border */
  color: #000000;             /* Black text color */
  font-size: 0.9em;           /* Smaller font size */
  font-weight: normal;        /* Normal font weight */
  padding: 10px 20px;         /* Reduced padding for a smaller height */
  margin: 10px 0;             /* Margin for some spacing */
}

.details {
  margin-top: 20px;
  display: none;
}

.timeline-block.active .details {
  display: block;
}

.sub-box {
  display: flex;
  align-items: center;
  background-color: #f9f9f9; /* Light gray */
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sub-box-left {
  width: 20%;
  text-align: center;
  font-weight: 500;
  color: #007BFF;
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
}

.sub-box-right {
  width: 80%;
  padding-left: 10px;
  text-align: left;
  font-family: 'Roboto', sans-serif;
}

.sub-box-right h4 {
  margin: 0 0 5px 0;
  font-size: 1.2em;
  color: #333;
  font-weight: 500;
}

.sub-box-right p {
  margin: 0;
  font-size: 1em;
  color: #666;
  font-weight: 300;
}
</style>


