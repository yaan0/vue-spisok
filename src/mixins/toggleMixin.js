export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialogs() {
      this.$emit("update:show", false);
    },
  },
  mounted() {},
};
