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
 * @description:     Vue.js presentation example 04.
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
  },
};

/**
 * You could make plan-pìcker a local component too.
 * However, it wouldn't have a father component,
 * so we would be assigning it to the root instance
 * of our program. That would be the Vue object we
 * create on line 54.
 */
Vue.component("plan-picker", {
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
    };
  },
});

// Instancia root de nuestro programa
new Vue({
  el: "#app",
});
