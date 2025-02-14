<script setup>
import {ref} from "vue";
import AvatarComponent from "./AvatarComponent.vue";

const props = defineProps({
  avatar: {
    type: Object,
    default: () => ({
      name: 'John Doe',
      size: 40,
      initials: 'JD',
      backgroundColor: '#ffcc00',
      textColor: '#ffffff'
    })
  },
  inputPlaceholder: {
    type: String,
    default: 'Écrire un commentaire'
  }
});
</script>

<template>
  <div class="flex w-full">
    <div>
      <AvatarComponent
        :name="props.avatar.name"
        :size="props.avatar.size"
        :initials="props.avatar.initials"
        :backgroundColor="props.avatar.backgroundColor"
        :textColor="props.avatar.textColor"
      />
    </div>
    <div class="flex-1 border rounded-l-2xl ml-1 p-2">
      <input
        class="w-full h-full leading-loose no-focus-border"
        type="text"
        :placeholder="props.inputPlaceholder"
      />
    </div>
    <div class="border rounded-r-2xl p-2 leading-loose cursor-pointer">
      <!-- <mat-icon
          class="icon-size-5 rotate-90 align-middle"
          [svgIcon]="'heroicons_solid:paper-airplane'"
      ></mat-icon> -->
    </div>
  </div>
</template>

<style scoped>
.no-focus-border:focus {
  outline: none;
  border: none;
}
</style>