<template>  
  <div class="pt-5">
    <div class="flex">        
      <button @click="showCreateReservation = true" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Create Reservation
      </button>
    </div>
  </div>
  <div class="p-3">
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li v-for="reservation in reservations" :key="reservation.name">
          <div class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div style="align-items: flex-start; display: flex; flex-direction: column;">
                    <p class="text-sm font-medium text-blue-600 truncate">{{ reservation.name }}</p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <!-- <MailIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                      <span class="truncate">{{ reservation.email }}</span>
                    </p>
                  </div>
                  <div class="hidden md:block">
                    <div style="align-items: flex-start; display: flex; flex-direction: column;" >
                      <p class="text-sm text-gray-900">
                        Time:
                        {{reservation.time}}
                      </p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                          Party Size:
                         {{reservation.partysize}}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div>
                <a href="#" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                  Edit
                </a>
                <a href="#" style="margin-left: 5px;" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <create-reservation-modal @close-dialog="showCreateReservation = false" :open="showCreateReservation"></create-reservation-modal>
</template>

<script lang="ts">
// import { CheckCircleIcon, MailIcon } from '@heroicons/vue/solid'

import { useStore } from 'vuex'
import { ref, defineComponent, computed } from 'vue'
import CreateReservationModal from '../modals/CreateReservationModal.vue'
export default defineComponent({    
  name: 'Reservations',
  components: {
    CreateReservationModal,
    // CheckCircleIcon,
    // MailIcon,
  },
  setup() {
    var store = useStore()
    const showCreateReservation = ref(false)
    const reservations = computed(() => {
      return store.state.reservation.reservations
    })
    return {
      showCreateReservation, reservations
    }
  },
  created() {
    this.$store.dispatch('reservation/loadReservations');
  }
})

</script>