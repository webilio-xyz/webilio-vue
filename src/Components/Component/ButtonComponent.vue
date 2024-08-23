<script setup>

import {computed} from "vue";
import tailwindConfig from "../../../tailwind.config.js";
import resolveConfig from "tailwindcss/resolveConfig.js";
import {get} from "lodash-es";

const props = defineProps({
  color: {
    type: String,
    default: 'gray',
  },
  shade: {
    type: Number,
    default: 500,
  },
  textColor: {
    type: String,
    default: null,
  },
  rounded: {
    type: Boolean,
    default: true
  },
  bordered: {
    type: Boolean,
    default: true
  }
});

const classes = computed(() => {
  let classes = [];

  classes.push(`bg-${props.color}-${props.shade}`);

  const fullConfig = resolveConfig(tailwindConfig)
  const bgColor = get(fullConfig.theme.colors, `${props.color}.${props.shade}`, null);

  if (!bgColor) {
    throw new Error('Color does not exist in tailwind config');
  }

  const availableBgShade = Object.keys(get(fullConfig.theme.colors, props.color));
  const shadeIndex = availableBgShade.indexOf(props.shade.toString());
  const hoverBgShade = colorIsDark(bgColor) ? availableBgShade[shadeIndex-1] : availableBgShade[shadeIndex+1];

  classes.push(`hover:bg-${props.color}-${hoverBgShade}`);

  if (props.bordered) {
    classes.push(`border border-${props.color}-${hoverBgShade}`);
  }

  if (!props.textColor) {
    const textColor = pickTextColorBasedOnBgColorSimple(bgColor, 'white', 'black');
    classes.push(`text-${textColor}`);
  } else {
    classes.push(`text-${props.textColor}`);
  }

  if (props.rounded) {
    classes.push('rounded');
  }

  return classes;
});

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  return colorIsDark(bgColor) ? darkColor : lightColor;
}

function colorIsDark(hexColor) {
  const color = (hexColor.charAt(0) === '#') ? hexColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186);
}

</script>

<template>
  <button type="button" class="btn px-4 py-2" :class="classes">
    <slot />
  </button>
</template>

<style scoped>
</style>