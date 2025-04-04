<template>
  <div class="container py-6">
    <div class="flex flex-col gap-10">
      <h3 class="text-3xl">Forms</h3>
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(route, idx) in forms"
          :key="idx"
          class="p-4 rounded-xl bg-secondary duration-200 hover:bg-primary hover:text-white font-roboto text-3xl h-20 cursor-pointer active:scale-95"
          @click="() => handleNavigate(route.path)"
        >
          {{ route.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const forms = [
    {
      label: 'Complex',
      path: '/complex',
    },
    {
      label: 'Rate',
      path: '/rate',
    },
    {
      label: 'Job',
      path: '/job',
    },
  ];

  const handleNavigate = (path: string) => {
    router.push({
      path,
    });
  };
</script>
