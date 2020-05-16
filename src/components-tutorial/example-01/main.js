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
 * @description:     Vue.js presentation example 01.
 *
 * References        Repo containing the full presentation:
 *                   https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-vuejs-fabio-nicolas-pai2020
 *
 * Version History
 *                   07/05/2020 - Creation (first version) of the code.
 */

Vue.component("click-counter", {
  template: "#click-counter-template",
  data() {
    return {
      count: 0,
    };
  },
});

new Vue({
  el: ".app",
});
