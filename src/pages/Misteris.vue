<template>
  <q-page class="q-pa-lg" :style="{ 'fontSize': tamanyStore.tamany + 'px'}">


    <cmp_OracionsInicials  />

    <div class="text-h4 text-center text-white bg-negative q-my-xl" >Misterios {{ misteri }}</div>

    <q-list bordered class="rounded-borders">
      <q-expansion-item
        v-for="misteri in objMisteris[misteri]"
        :key="misteri.titol"
        expand-separator
        icon="perm_identity"
        :label="misteri.titol"
        header-class="text-negative"
      >
        <q-card>
          <q-card-section>
            {{ misteri.text }}
          </q-card-section>
          <q-card-section>
            <cmp_pareNostreAvemaries/>
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>

    <cmp_letanies />

    <cmp_OracionsFinals />

  </q-page>
</template>



<script setup>
  import { useTamanyStore } from '../stores/store_tamany.js'    

  import objMisteris from "../dades/misteris.json"

  import cmp_OracionsInicials from "../components/oracionsInicials.vue"
  import cmp_pareNostreAvemaries from "../components/jmg_pareNostreAveMaries.vue"
  import cmp_letanies from "../components/Letanias.vue"
  import cmp_OracionsFinals from "../components/oracionsFinals.vue"

  const props = defineProps(['misteri'])
  const tamanyStore = useTamanyStore()

</script>
