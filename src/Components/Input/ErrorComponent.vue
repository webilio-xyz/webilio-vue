<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "ErrorComponent",
  components: {Error},
  props: {
    message: String
  }
})
</script>

<template>
    <div v-show="message">
        <p class="wv-error text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>