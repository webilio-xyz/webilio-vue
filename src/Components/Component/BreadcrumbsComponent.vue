<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  currentStep: {
    type: Number,
    default: 0
  },
  activeItemColor: {
    type: String,
    default: '#0000ff'
  },
  hoverItemColor: {
    type: String,
    default: 'lightsalmon'
  }
});

const getItemStyle = (item) => {
  return {
    '--active-bg-color': item.active ? props.activeItemColor : 'transparent',
    '--hover-bg-color': item.active ? props.activeItemColor : props.hoverItemColor
  };
};
</script>

<template>
  <nav>
    <ol class="breadcrumb flex space-x-2" itemscope itemtype="http://schema.org/BreadcrumbList">
      <li
        v-for="(item, index) in props.items"
        :key="index"
        class="breadcrumb-item relative"
        itemprop="itemListElement"
        itemscope
        itemtype="http://schema.org/ListItem"
        :style="getItemStyle(item)"
      >
        <a
          v-if="index < props.items.length - 1"
          :href="item.href"
          itemprop="item"
          :class="['inline-block relative px-4 py-2 text-gray-500 no-underline', hoverItemColor]"
        >
          <span itemprop="name">{{ item.name }}</span>
        </a>
        <span
          v-else
          itemprop="name"
          class="inline-block relative px-4 py-2 text-gray-500"
        >
          {{ item.name }}
        </span>
        <meta itemprop="position" :content="index + 1" />
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb-item::before,
.breadcrumb-item::after {
  content: '';
  position: absolute;
  left: 0;
  height: 52%;
  width: 100%;
  background: white;
  border-left: 2px solid #666;
  border-right: 2px solid #666;
  z-index: -2;
}

.breadcrumb-item::before {
  transform: skew(30deg);
  border-top: 2px solid #666;
}

.breadcrumb-item::after {
  bottom: -2px;
  transform: skew(-30deg);
  border-bottom: 2px solid #666;
}

.breadcrumb-item::before,
.breadcrumb-item::after {
  background: var(--active-bg-color, transparent);
}

.breadcrumb-item:hover::before,
.breadcrumb-item:hover::after {
  background: var(--hover-bg-color, lightgray);
}
</style>