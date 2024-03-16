<script>

import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";
export default {
    components: {AssignmentCreate, AssignmentList},

    data() {
        return {
            assignments: [],
            tags: []
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

     mounted() {
        this.fetchData();
        this.fetchTags();
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
            });
        },

        fetchData(){
                axios.get('/api/assignments')
                .then(response => this.assignments = response.data.data)
                .catch(error => console.log(error))
        },

        fetchTags(){
            axios.get('/api/tags')
                .then(response => this.tags = response.data.data)
                .catch(error => console.log(error))
        }
    }
}
</script>

<template>
    <main class="flex place-content-center">
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" :tags="tags" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed"  :tags="tags" title="Completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
        </section>
    </main>
</template>
