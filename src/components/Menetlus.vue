<template>
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
        <div
            class="sub-box"
            v-for="(step, stepIndex) in block.details"
            :key="stepIndex"
        >
          <div class="sub-box-left">
            <span>{{ step.institution }}</span>
          </div>
          <div class="sub-box-right">
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>

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
              description: "Uuendab iganädalaset algatuste tabelit. Kooskõlastab ministeeriumitega, kas seisukohad esitatakse KOKile ja/või VV istungile.",
            },
            {
              institution: "KOK",
              title: "Vastutajate ja tähtaegade määramine",
              description: "Määrab kindlaks algatuse vastutaja ja kaasvastutaja(d) ning KOKi/VVsse esitamise tähtaja.",
            },
            {
              institution: "ELS",
              title: "Resolutsiooni koostamine",
              description:
                  "ELS saadab pea- ja kaasvastutajatele resolutsiooni EL algatuse osas seisukohtade koostamiseks.s",
            },
          ],
          active: false,
        },
        {
          title: "Eesti seisukohtade kujundamine",
          details: [
            {
              institution: "Ministeerium",
              title: "Seisukohtade koostamine ja taustadokumentide ettevalmistamine.",
              description: "Ministeeriumi eksperdid analüüsivad algatust ja selle valguses Eesti huvisid. Kaasamisring huvirühmade sisendi saamiseks. Materjalide (sh seletuskirja) koostamine",
            },
            {
              institution: "KOK",
              title: "Seisukohtade kooskõlastamine",
              description: "Kõik KOKi osapooled kooskõlastavad ja vajadusel täiendavad. Tehakse lõplik otsus seisukohtade VVle esitamiseks.",
            },
            {
              institution: "Valitsus",
              title: "Seisukohtade heaks kiitmine",
              description: "Vabariigi Valitsus kiidab heaks esitatud seisukohad.",
            },
            {
              institution: "ELS / ministeerium",
              title: "Seisukohtade edastamine",
              description: "Valitsuse seisukohad saadetakse Riigikogule mandaadi andmiseks ning teadmiseks kaasatud huvigruppidele.",
            },
            {
              institution: "Riigikogu juhatus",
              title: "Määrab vastutavad komisjonid ja menetlustähtaja",
              description: "Juhatuse otsusega saadetakse VV seisukohad valdkondlikule komisjonile arvamuse andmiseks. Tavapärane tähtaeg 2 töönädalat.",
            },
            {
              institution: "Riigikogu valdkondlik komisjon",
              title: "Arvamuse andmine",
              description: "Valdkondlik komisjon (või mitu) arutab  VV seisukohti ning annab arvamuse EL asjade komisjonile.",
            },
            {
              institution: "Riigikogu EL asjade komisjon",
              title: "Kinnitab Eesti seisukohad",
              description: "ELAK arutab seisukohti ning kooskõlas valdkondlike komisjonide arvamusega kinnitab Eesti seisukohad.",
            },
          ],
          active: false,
        },
        {
          title: "EL tasandil seisukohtade kaitsmine",
          details: [
            {
              institution: "RK",
              title: "Direktiivi ülevõtmine",
              description: "Liikmesriigid kohandavad seadusi direktiivi järgi.",
            },
            {
              institution: "RK",
              title: "Rakendusaktide vastuvõtmine",
              description:
                  "Praktilised rakendusmeetmed määratakse kindlaks.",
            },
            {
              institution: "RK",
              title: "Järelevalve",
              description: "Jälgitakse direktiivi rakendamist.",
            },
          ],
          active: false,
        },
        {
          title: "Rakendamine ja järelvalve",
          details: [
            {
              institution: "RK",
              title: "Aruandlus",
              description: "Koostatakse rakendamise aruanded.",
            },
            {
              institution: "RK",
              title: "Hindamisaruanded",
              description: "Hinnatakse direktiivi mõju aja jooksul.",
            },
            {
              institution: "RK",
              title: "Parandusmeetmed",
              description: "Probleemide korral võetakse meetmeid.",
            },
          ],
          active: false,
        },
      ],
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
  margin-bottom: 20px;
  width: 80%;
  cursor: pointer;
}
.timeline-block:first-child {
  margin-bottom: 10px; /* Adjust margin for the first block */
}

.main-box {
  background-color: #e3f2fd; /* Light blue */
  padding: 15px;
  border: 2px solid #90caf9; /* Border blue */
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
   background-color: #fff9c4; /* Light yellow background */
   border: 2px solid #fbc02d;  /* Soft yellow border */
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
  width: 18%;
  text-align: center;
  font-weight: 500;
  color: #007BFF;
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
}

.sub-box-right {
  width: 82%;
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


