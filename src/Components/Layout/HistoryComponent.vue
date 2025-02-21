<script setup>
import { defineProps } from "vue";

const props = defineProps({
  history: {
    type: Object,
    default: () => ({})
  },
  config: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <div class="history-component">
    <!-- Loop through each date group in the history object -->
    <div v-for="(groups, date) in history" :key="date" class="history-date">
      <div class="date-header">
        <!-- Render the date icon if provided in config -->
        <component
            v-if="config['date-icons']"
            :is="config['date-icons']['icon']"
            :class="config['date-icons']['classes']"
        />
        <span class="date-text">{{ date }}</span>
      </div>
      <!-- Loop through each group for the date -->
      <div v-for="(group, groupKey) in groups" :key="groupKey" class="history-group">
        <div class="group-header">
          <!-- Render the group icon if provided -->
          <component
              v-if="config['group-icon']"
              :is="config['group-icon']['icon']"
              :class="config['group-icon']['classes']"
          />
          <span class="group-title">{{ group.title }}</span>
        </div>
        <!-- Loop through details inside each group -->
        <div class="group-details">
          <div v-for="(detail, index) in group.details" :key="index" class="history-detail">
            <component
                v-if="config['detail-icon']"
                :is="config['detail-icon']['icon']"
                :class="config['detail-icon']['classes']"
            />
            <div class="detail-content">
              <div class="detail-header">
                <span class="detail-title">{{ detail.title }}</span>
                <span class="detail-date">{{ detail.date }}</span>
              </div>
              <div class="detail-body">
                <p class="detail-description">{{ detail.description }}</p>
                <div class="detail-user">
                  <!-- If user.userName exists, use it otherwise build from first and last name -->
                  <span v-if="detail.user.userName">{{ detail.user.userName }}</span>
                  <span v-else>{{ detail.user.firstName }} {{ detail.user.lastName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
