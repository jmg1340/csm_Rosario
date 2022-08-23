<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title >
          CSM - El Santo Rosario
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div class="q-gutter-x-xs">
          <q-btn color="indigo-10" label="+" @click="aumentar()" />
          <q-btn color="indigo-10" label="-" @click="disminuir()" />
        </div>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          MISTERIOS
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import { defineComponent, ref } from 'vue'
  import EssentialLink from 'components/EssentialLink.vue'
  import { useTamanyStore } from '../stores/store_tamany.js'    

  const leftDrawerOpen = ref(false)
  const toggleLeftDrawer = () => {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
  const tamanyStore = useTamanyStore()


  // let tamany = ref(12)
  const aumentar = () => tamanyStore.increment()
  const disminuir = () => tamanyStore.decrement()


  const linksList = [
  {
    title: 'Misterios Gozosos',
    caption: 'Lunes y Sabado',
    icon: 'school',
    link: '/gozosos'
  },
  {
    title: 'Misterios Luminosos',
    caption: 'Jueves',
    icon: 'code',
    link: '/luminosos'
  },
  {
    title: 'Misterios Dolorosos',
    caption: 'Martes y Viernes',
    icon: 'chat',
    link: '/dolorosos'
  },
  {
    title: 'Misterios Gloriosos',
    caption: 'Miércoles y Domingo' ,
    icon: 'record_voice_over',
    link: '/gloriosos'
  }
]
/* 
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const tamanyStore = useTamanyStore()


    // let tamany = ref(12)
    const aumentar = () => tamanyStore.increment()
    const disminuir = () => tamanyStore.decrement()

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      aumentar,
      disminuir,
      tamanyStore
    }
  }
})
 */

</script>
