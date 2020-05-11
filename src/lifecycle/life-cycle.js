"use strict";

let lifeCycle = new Vue({
  el: ".life-cycle",
  data: {
    greeting: `This Vue object is going to
      explain how the life cycle of Vue works.`,
    exampleAttributes: [1, 'example', 12 + 45],
    anotherExamples: {
      a: 1,
      b: 2,
      c: 3,
    },

    styleObject: {
      textAlign: "center",
    },
  },
  methods: {
    /**
     * Will destroy the instance which invokes it.
     */
    destroyInstance() {
      this.$destroy();
    },
  },

  /**
   * Instantiation of the Vue object, right before creating its elements.
   */
  beforeCreate: function () {
    console.log("beforeCreate");
  },

  /**
   * This phase is reached when creating methods, observers and events,
   * but before accessing the DOM.
   * In this phase, we can't access the elements, not before mounting
   * the instance on the DOM.
   */
  created() {
    console.log("created");
  },

  /**
   * Before render and inserting on the DOM.
   */
  beforeMount() {
    console.log("beforeMount");
  },

  /**
   * When inserted on the DOM.
   */
  mounted() {
    console.log("mounted");
  },

  /**
   * When a change is detected.
   */
  beforeUpdate() {
    console.log("beforeUpdate");
  },

  /**
   * When changes are done.
   */
  updated() {
    console.log("updated");
  },

  /**
   * Before destroying the instance.
   */
  beforeDestroy() {
    console.log("beforeDestroy");
  },

  /**
   * When the instance is destroyed.
   */
  destroyed() {
    console.log("destroyed");
  },
});

/**
 * To test all functions and to know when they run:
 * 1. When the file is loaded, these run:
 *    - beforeCreate()
 *    - created()
 *    - beforeMount()
 *    - mounted()
 * 2. When something in the Vue object is changed, these run:
 *    - beforeUpdate()
 *    - updated()
 * 3. When destroyInstance() is run, these run:
 *    - beforeDestroy()
 *    - destroy()
 *
 * After that, the instance is no more, so changes we do will not show.
 */