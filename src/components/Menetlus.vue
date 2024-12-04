<template>
  <div class="timeline">
    <div
        class="timeline-block"
        v-for="(block, index) in timeline"
        :key="index"
        @click="toggleDetails(index)"
        :class="{ active: block.active }"
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
            <button v-if="stepIndex === 2" @click="navigateToStep(index - 5)">Go Back 5 Steps</button>

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
          title: "Euroopa Komisjon esitab algatuse",
          details: [
            {
              institution: "KOK",
              title: "Algatuse ettevalmistamine",
              description: "Komisjon valmistab ette seaduseelnõu.",
            },
            {
              institution: "Ministeerium",
              title: "Avalik konsultatsioon",
              description: "Kaasatakse huvirühmad ja avalikkus.",
            },
            {
              institution: "ELS",
              title: "Mõjuhinnang",
              description:
                  "Hinnatakse ettepaneku mõju majandusele, keskkonnale ja ühiskonnale.",
            },
          ],
          active: false,
        },
        {
          title: "Seisukohtade kaitsmine eri tasanditel",
          details: [
            {
              institution: "ELS",
              title: "Esimene lugemine",
              description: "Seaduseelnõu arutatakse esimest korda.",
            },
            {
              institution: "ELS",
              title: "Teine lugemine",
              description: "Muudetud eelnõu arutatakse uuesti.",
            },
            {
              institution: "ELS",
              title: "Vahenduskomitee",
              description: "Erimeelsuste korral moodustatakse vahenduskomitee.",
            },
          ],
          active: false,
        },
        {
          title: "Rakendamine liikmesriikides",
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
          title: "Järelevalve ja hindamine",
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

/* Apply Roboto font to the body and component elements */
body {
  font-family: 'Roboto', sans-serif;
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
  margin-bottom: 30px;
  width: 80%;
  cursor: pointer;
}

.main-box {
  background-color: #e3f2fd; /* Light blue */
  padding: 15px;
  border: 2px solid #90caf9; /* Border blue */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.2em;
}

.main-box:hover {
  transform: scale(1.02);
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
  width: 15%;
  text-align: center;
  font-weight: 500;
  color: #007BFF;
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
}

.sub-box-right {
  width: 85%;
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


