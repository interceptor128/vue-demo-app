<template>
    <v-app id="inspire">
        <v-content>
            <v-container
            class="fill-height"
            fluid
            >
                <v-row
                align="center"
                justify="center"
                >
                    <v-calendar></v-calendar>
                </v-row>
            </v-container>
        </v-content>
        <v-content>
            <v-date-picker :mode="mode"
               :formats="formats"
               v-model="selectedDate"></v-date-picker>
        </v-content>
    </v-app>
</template>