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
});

const currentPage = computed(() => props.modelValue);

const emits = defineEmits(['update:modelValue']);

const changePage = (page) => {
  console.log(page);
  emits('update:modelValue', page);
};

</script>

<template>
  <div class="flex space-x-1.5">
    <Button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
    >
      <ChevronLeftIcon class="w-5 h-5"/>
    </Button>
    <template v-if="currentPage === 1">
      <Button disabled>
        {{ currentPage }}
      </Button>
      <template v-if="lastPage < 5">
        <Button
            v-for="pageId in range(currentPage + 1, lastPage + 1)"
            :key="pageId"
            @click="changePage(pageId)"
        >
          {{ pageId }}
        </Button>
      </template>
      <template v-else>
        <Button
            v-for="pageId in range(currentPage + 1, currentPage + 3)"
            :key="pageId"
            @click="changePage(pageId)"
        >
          {{ pageId }}
        </Button>
        <span class="py-2">...</span>
        <Button @click="changePage(lastPage)">
          {{ lastPage }}
        </Button>
      </template>
    </template>
    <template v-else-if="currentPage === lastPage">
      <template v-if="lastPage < 5">
        <Button
            v-for="pageId in range(1, lastPage)"
            :key="pageId"
            @click="changePage(pageId)"
        >
          {{ pageId }}
        </Button>
      </template>
      <template v-else>
        <Button @click="changePage(1)">
          1
        </Button>
        <span class="py-2">...</span>
        <Button
            v-for="pageId in range(currentPage - 2, currentPage)"
            :key="pageId"
            @click="changePage(pageId)"
        >
          {{ pageId }}
        </Button>
      </template>
      <Button disabled>
        {{ currentPage }}
      </Button>
    </template>
    <template v-else>
      <template v-if="currentPage > 2">
        <Button @click="changePage(1)">
          1
        </Button>
        <span
            v-if="currentPage > 3"
            class="py-2"
        >...</span>
      </template>
      <Button
          v-for="pageId in range(currentPage - 1, currentPage)"
          :key="pageId"
          @click="changePage(pageId)"
      >
        {{ pageId }}
      </Button>
      <Button disabled>
        {{ currentPage }}
      </Button>
      <Button
          v-for="pageId in range(currentPage + 1, currentPage + 2)"
          :key="pageId"
          @click="changePage(pageId)"
      >
        {{ pageId }}
      </Button>
      <template v-if="currentPage < (lastPage - 1)">
                    <span
                        v-if="currentPage < (lastPage - 2)"
                        class="py-2"
                    >...</span>
        <Button @click="changePage(lastPage)">
          {{ lastPage }}
        </Button>
      </template>
    </template>
    <Button
        :disabled="currentPage === lastPage"
        @click="changePage(currentPage + 1)"
    >
      <ChevronRightIcon class="w-5 h-5"/>
    </Button>
  </div>
</template>

<style scoped>

</style>
