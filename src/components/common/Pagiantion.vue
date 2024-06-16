<script setup lang="ts">
defineProps({
  data: {
    type: [Object, Array],
  },
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: [Array, Number],
    default: 10,
  },
  pageCount: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const onPageChange = () => {};
</script>

<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :current-page="page"
    :total="total"
    :page-size="pageSize"
    :page-count="pageCount"
    @current-change="onPageChange"
  />
</template>

<style scoped></style>
