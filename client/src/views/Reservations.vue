<template>  
  <div class="pt-5">
    <div class="flex">        
      <button @click="showCreateReservation = true" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Create Reservation
      </button>
    </div>
  </div>
  <div class="flex flex-col p-2">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="reservation in reservations" :key="reservation.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="reservation.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ reservation.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ reservation.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ reservation.title }}</div>
                  <div class="text-sm text-gray-500">{{ reservation.department }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ reservation.role }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <create-reservation-modal @close-dialog="showCreateReservation = false" :open="showCreateReservation"></create-reservation-modal>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { ref, defineComponent, computed } from 'vue'
import CreateReservationModal from '../modals/CreateReservationModal.vue'
export default defineComponent({    
  name: 'Reservations',
    components: {
    CreateReservationModal
  },
  setup() {
    var store = useStore();
    const showCreateReservation = ref(false)
    const reservations = computed(() => {
          return store.state.reservation.reservations
    })
    return {
      showCreateReservation, reservations
    }
  },
  created() {
    this.$store.dispatch('reservation/loadUsers');
  }
})

</script>