import { reactive } from "vue";
import fn from "./functions";

const data = reactive({
  todo: [],
});

export { data, fn };
