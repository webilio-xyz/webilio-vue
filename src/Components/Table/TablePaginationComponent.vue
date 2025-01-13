<script setup>
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/24/solid/index.js";
import {range} from "lodash-es";
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  lastPage: {
    type: Number,
    default: 1
  },
   buttonClass: {
    type: String,
    default: ''
  },
    buttonLrClass: {
        type: String,
        default: ''
    },
    buttonPageClass: {
        type: String,
        default: ''
    },
});

const currentPage = computed(() => props.modelValue);
const lrClassButtons = computed(() => {
    return `${props.buttonClass} ${props.buttonLrClass}`;
})
const pageClassButtons = computed(() => {
    return `${props.buttonClass} ${props.buttonPageClass}`;
})

const emits = defineEmits(['update:modelValue']);

const changePage = (page) => {
  emits('update:modelValue', page);
};

</script>

<template>
  <div class="flex space-x-1.5">
      <slot name="before">
          <button
              :class="lrClassButtons"
              class="wv-pagination-button wv-pagination-before"
              :disabled="currentPage === 1"
              @click="changePage(currentPage - 1)"
          >
              <ChevronLeftIcon class="w-5 h-5" />
          </button>
      </slot>

    <template v-if="currentPage === 1">
        <slot name="current">
            <button :class="pageClassButtons" class="wv-pagination-button wv-pagination-current" disabled>
                {{ currentPage }}
            </button>
        </slot>
        <slot name="next">
            <template v-if="lastPage < 5">
                <button
                    :class="pageClassButtons"
                    class="wv-pagination-button wv-pagination-next"
                    v-for="pageId in range(currentPage + 1, lastPage + 1)"
                    :key="pageId"
                    @click="changePage(pageId)"
                >
                    {{ pageId }}
                </button>
            </template>
            <template v-else>
                <button
                    :class="pageClassButtons"
                    class="wv-pagination-button wv-pagination-next"
                    v-for="pageId in range(currentPage + 1, currentPage + 3)"
                    :key="pageId"
                    @click="changePage(pageId)"
                >
                    {{ pageId }}
                </button>
                <span class="wv-pagination-dot py-2">...</span>
                <button :class="pageClassButtons" class="wv-pagination-button wv-pagination-next" @click="changePage(lastPage)">
                    {{ lastPage }}
                </button>
            </template>
        </slot>
    </template>

    <template v-else-if="currentPage === lastPage">
        <slot name="previous">
            <template v-if="lastPage < 5">
                <ButtonComponent
                    :class="pageClassButtons"
                    class="wv-pagination-button wv-pagination-previous"
                    v-for="pageId in range(1, lastPage)"
                    :key="pageId"
                    @click="changePage(pageId)"
                >
                    {{ pageId }}
                </ButtonComponent>
            </template>
            <template v-else>
                <ButtonComponent :class="pageClassButtons" class="wv-pagination-button wv-pagination-previous" @click="changePage(1)">
                    1
                </ButtonComponent>
                <span class="wv-pagination-dot py-2">...</span>
                <ButtonComponent
                    :class="pageClassButtons"
                    v-for="pageId in range(currentPage - 2, currentPage)"
                    :key="pageId"
                    @click="changePage(pageId)"
                >
                    {{ pageId }}
                </ButtonComponent>
            </template>
        </slot>
        <slot name="current">
            <ButtonComponent :class="pageClassButtons" disabled>
                {{ currentPage }}
            </ButtonComponent>
        </slot>
    </template>
    <template v-else>
        <slot name="previous">
            <template v-if="currentPage > 2">
                <button :class="pageClassButtons" class="wv-pagination-button wv-pagination-previous" @click="changePage(1)">
                    1
                </button>
                <span
                    v-if="currentPage > 3"
                    class="wv-pagination-dot py-2"
                >...</span>
            </template>
            <button
                :class="pageClassButtons"
                class="wv-pagination-button wv-pagination-previous"
                v-for="pageId in range(currentPage - 1, currentPage)"
                :key="pageId"
                @click="changePage(pageId)"
            >
                {{ pageId }}
            </button>
        </slot>
        <slot name="current">
            <button :class="pageClassButtons" class="wv-pagination-button wv-pagination-current" disabled>
                {{ currentPage }}
            </button>
        </slot>
        <slot name="next">
            <button
                :class="pageClassButtons"
                class="wv-pagination-button wv-pagination-next"
                v-for="pageId in range(currentPage + 1, currentPage + 2)"
                :key="pageId"
                @click="changePage(pageId)"
            >
                {{ pageId }}
            </button>
            <template v-if="currentPage < (lastPage - 1)">
                    <span
                        v-if="currentPage < (lastPage - 2)"
                        class="wv-pagination-dot py-2"
                    >...</span>
                <button :class="pageClassButtons" class="wv-pagination-button wv-pagination-next" @click="changePage(lastPage)">
                    {{ lastPage }}
                </button>
            </template>
        </slot>
    </template>
      <slot name="after">
          <button
              :class="lrClassButtons"
              class="wv-pagination-button wv-pagination-after"
              :disabled="currentPage === lastPage"
              @click="changePage(currentPage + 1)"
          >
              <ChevronRightIcon class="w-5 h-5" />
          </button>
      </slot>
  </div>
</template>

<style scoped>

</style>
