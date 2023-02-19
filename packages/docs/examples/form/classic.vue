<template>
    <kl-form :model="form" label-width="120px">
        <kl-form-item label="Activity name">
            <kl-input v-model="form.name" />
        </kl-form-item>
        <kl-form-item label="Activity zone">
            <kl-select v-model="form.region" placeholder="please select your zone">
                <kl-option label="Zone one" value="shanghai" />
                <kl-option label="Zone two" value="beijing" />
            </kl-select>
        </kl-form-item>
        <kl-form-item label="Activity time">
            <kl-date-picker isDateTime v-model="form.date"></kl-date-picker>
        </kl-form-item>
        <kl-form-item label="Instant delivery">
            <kl-switch v-model="form.delivery" />
        </kl-form-item>
        <kl-form-item label="Activity type">
            <kl-checkbox-group v-model="form.type">
                <kl-checkbox label="Online activities" value="Online activities" name="type" />
                <kl-checkbox
                    label="Promotion activities"
                    value="Promotion activities"
                    name="type"
                />
                <kl-checkbox label="Offline activities" value="Offline activities" name="type" />
                <kl-checkbox
                    label="Simple brand exposure"
                    value="Simple brand exposure"
                    name="type"
                />
            </kl-checkbox-group>
        </kl-form-item>
        <kl-form-item label="Resources">
            <kl-radio-group v-model="form.resource">
                <kl-radio label="Sponsor" value="Sponsor" />
                <kl-radio label="Venue" value="Venue" />
            </kl-radio-group>
        </kl-form-item>
        <kl-form-item label="Activity form">
            <kl-input v-model="form.desc" type="textarea" />
        </kl-form-item>
        <kl-form-item>
            <kl-button type="primary" @click="onSubmit">Create</kl-button>
            <kl-button type="info">Cancel</kl-button>
        </kl-form-item>
    </kl-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date: new Date(),
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

const onSubmit = () => {
    console.log(form)
}
</script>
