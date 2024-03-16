<script>

import Assignment from "./Assignment.vue";

export default {
    name: "AssignmentList",

    components: { Assignment },

    props: {
        assignments: Array,
        tags: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            } else {
                return this.assignments.filter(assignment => {
                    // Check if any of the assignment's tags match the current tag
                    return assignment.tags.some(tag => tag.name === this.currentTag);
                });
            }
        }
    }
}
</script>

<template>
    <section v-if="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}

            <span>({{ assignments.length }})</span>
        </h2>

        <div class="flex gap-2">
            <button
                @click="currentTag = 'all'"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': currentTag === 'all'
                }"
            >
                All
            </button>

            <button
                @click="currentTag = tag.name"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{
                        'border-blue-500 text-blue-500': tag.name === currentTag
                    }"
            >
                {{ tag.name }}
            </button>
        </div>

        <template v-if="filteredAssignments.length > 0">
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment
                        v-for="assignment in filteredAssignments"
                        :key="assignment.id"
                        :assignment="assignment"
                    ></assignment>
            </ul>
        </template>

        <template v-else>
            <div class="border border-gray-600 divide-y divide-gray-600 mt-6">
                No assignments found.
            </div>
        </template>
    </section>
</template>
