<script setup>
import { ref, computed } from "vue";
import AvatarComponent from "./AvatarComponent.vue";
import NotesInputComponent from "./NotesInputComponent.vue";

const props = defineProps({
  user: {
    type: Object,
    default: () => ({
      name: 'John Doe',
      size: 40,
      initials: 'JD',
      backgroundColor: '#ffcc00',
      textColor: '#ffffff'
    })
  },
  comments: {
    type: Array,
    default: () => [
      {
        id: 1,
        parent_id: null,
        content: 'Comment content',
        created_at: '2021-09-01T00:00:00Z',
        user: {
          name: 'Jane Doe',
          size: 50,
          initials: 'JD',
          backgroundColor: '#ffcc00',
          textColor: '#ffffff'
        },
        children: [
          {
            id: 2,
            parent_id: 1,
            content: 'Comment content',
            created_at: '2021-09-01T00:00:00Z',
            user: {
              name: 'John Smith',
              size: 40,
              initials: 'JS',
              backgroundColor: '#00ccff',
              textColor: '#000000'
            },
            children: []
          }
        ]
      }
    ]
  },
  createdAtTextColor: {
    type: String,
    default: 'rgba(125,211,252, 1)'
  }
});

const replyMode = ref(null);

const commentsArray = computed(() => {
  return props.comments;
});

const getUsername = (comment) => {
  return comment.user.name || "Unknown";
};

const canReply = (comment) => {
  return comment.parent_id === null && replyMode.value !== comment.id;
};

const isReplyOpen = (comment) => {
  return replyMode.value === comment.id;
};

const toggleReplyMode = (comment) => {
  replyMode.value = replyMode.value === comment.id ? null : comment.id;
};

const sendReply = ($event, comment) => {
  $event.parent_id = comment.id;
  emit('send', $event);
  toggleReplyMode(comment);
};
</script>

<template>
  <div class="grid grid-cols-1 gap-2 px-2" v-if="commentsArray.length">
    <div v-for="(comment, index) in commentsArray" :key="index" class="flex">
      <div class="pr-2">
        <AvatarComponent
          :name="comment.user.name"
          :size="comment.user.size"
          :initials="comment.user.initials"
          :backgroundColor="comment.user.backgroundColor"
          :textColor="comment.user.textColor"
        />
      </div>

      <div class="flex-1">
        <div class="border rounded-2xl p-3 bg-accent-50">
          <div>
            {{ comment.content }}
          </div>
          <div class="text-right text-xs" :style="{ color: props.createdAtTextColor }" v-if="comment.created_at">
            {{ new Date(comment.created_at).toLocaleString() }}
          </div>
        </div>
        <div class="mt-2">
          <NotesCommentComponent v-if="comment.children && comment.children.length" :comments="comment.children" :user="comment.user" />
        </div>
        <div class="flex">
          <div class="ml-4 mt-1 text-secondary w-full">
            <span class="cursor-pointer hover:underline" v-if="canReply(comment)" @click="toggleReplyMode(comment)">Répondre</span>
            <NotesInputComponent v-if="isReplyOpen(comment)" @send="sendReply($event, comment)" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center bg-accent-50 py-6 text-accent-400 rounded font-bold">
    Aucun commentaires pour l'instant
  </div>
</template>

<style scoped>
  .bg-accent-50 {
    background-color: rgba(248,250,252, 1);
  }
</style>