<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "ErrorComponent",
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