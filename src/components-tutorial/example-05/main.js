/**
 * @author Fabio Ovidio Bianchini Cano
 * @mail alu0101040929@ull.edu.es
 * @author José Nicolás Cabrera Domínguez
 * @mail nicolas.cabrera.14@ull.edu.es
 * @date 07/05/2020
 * @copyright Universidad de La Laguna
 * Programación de Aplicaciones Interactivas
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática.
 * @description:     Vue.js presentation example 05.
 *
 * References        Repo containing the full presentation:
 *                   https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-vuejs-fabio-nicolas-pai2020
 *
 * Version History
 *                   07/05/2020 - Creation (first version) of the code.
 */
 
let PlanComponent = {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      required: true,
    },
    selectedPlan: {
      type: String,
    }
  },
  methods: {
    select() {
      // Custom event
      // First argument: custom event's name
      // Second argument: the data we want to pass with the argument (optional)
      this.$emit("select", this.name);
    },
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    }
  }
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    plan: PlanComponent,
  },
  data() {
    return {
      plans: [
        { id: 1, city: "Buenos Aires" },
        { id: 2, city: "El Salvador" },
        { id: 3, city: "Maracaibo" },
      ],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(planName) {
      this.selectedPlan = planName;
    },
  },
};

new Vue({
  el: "#app",
  components: {
    // To use kebab-case we have put it inside quotes.
    "plan-picker": PlanPickerComponent,
  },
});