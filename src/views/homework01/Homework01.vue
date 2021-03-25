<template>
  <div>
    <p style="font-weight: bold">
      <span :style="{ color: point >= requiredPoint ? 'green' : 'red' }">
        {{ point }}
      </span>
      /{{ requiredPoint }}
    </p>
    <div class="course">
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="courseSelects" :value="c" />
          {{ c.name }} - {{ c.point }} ({{ c.term }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of courseSelects" :key="index">
        {{ c.name }} - {{ c.point }} ({{ c.term }})
        <br />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { listCourses, Course } from "@/datasource/Homework01";

export default defineComponent({
  setup() {
    const requiredPoint = 12;
    const courses = ref<Course[]>(
      listCourses().sort((a, b) => a.term - b.term)
    );
    const courseSelects = ref<Course[]>([]);
    const point = computed((): number => {
      let count = 0;
      courseSelects.value.forEach(c => {
        count = count + c.point;
      });
      return count;
    });
    watch(courseSelects, () =>
      courseSelects.value.sort((a, b) => a.term - b.term)
    );
    return {
      courses,
      courseSelects,
      point,
      requiredPoint
    };
  }
});
</script>
<style scoped>
.course {
  border: 1px solid red;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>
