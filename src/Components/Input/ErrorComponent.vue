<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  components: {Error},
  props: {
    message: String
  }
})
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>