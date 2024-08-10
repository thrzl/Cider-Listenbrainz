<script setup lang="ts">
import { useConfig } from "../config";

const cfg = useConfig()

function urlUpdate(e: KeyboardEvent) {
  //@ts-expect-error
  cfg.url = e.target!.value
}
function keyUpdate(e: KeyboardEvent) {
  //@ts-expect-error
  cfg.apiKey = e.target!.value
}
</script>

<template>
  <div class="q-px-lg plugin-base">
    ListenBrainz Settings
    <div>
      <label>
        <input type="checkbox" v-model="cfg.enabled" /> Enable?
      </label>
    </div>
    <div>
      <label>
        ListenBrainz API
        <input class="c-input" type="text" :value="cfg.url" @keyup="urlUpdate($event)" />
      </label>
    </div>
    <div>
      <label>
        API Key
        <input class="c-input" type="text" :value="cfg.apiKey" @keyup="keyUpdate($event)" />
      </label>
    </div>
  </div>
</template>

<style scoped></style>
