<script>
import {computed, defineComponent} from "vue";
export default defineComponent({
  name: "ErrorComponent",
  props: {
    message: [String, Array]
  },
  setup(props) {
    const displayMessage = computed(() => {
      if (Array.isArray(props.message)) return props.message[0];
      return props.message;
    });
    return { displayMessage };
  }
})
</script>

<template>
    <div v-show="displayMessage">
        <p class="wv-error text-sm text-red-600">
            {{ displayMessage }}
        </p>
    </div>
</template>