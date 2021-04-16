<template>  
  <div class="pt-5">
      <div class="flex">        
        <button @click="showCreateInventory = true" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create Inventory
        </button>
      </div>
    </div>
  <div class="p-3" style="display: flex; flex-direction: column; overflow: hidden;">
    <div class="bg-white shadow overflow-hidden sm:rounded-md"  style="display: flex; flex-direction: column; overflow: hidden;">
      <ul class="divide-y divide-gray-200" style="overflow-y: auto;">
        <li v-for="slot in slots" :key="slot.hour">
          <div class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="min-w-0 flex-1 px-4 md:grid md:gap-4">
                  <div style="display: flex">
                    <div style="align-items: flex-start; display: flex; flex-direction: column;">
                      
                      <p class="text-sm font-medium text-blue-600 truncate">{{ slot.hour }}</p>
                      
                      <!-- <p class="mt-2 flex items-center text-sm text-gray-500">
                        <span class="truncate">{{ reservation.email }}</span>
                      </p> -->
                    </div>
                    <div style="align-items: center; display: flex;">
                      <div v-for="time in slot.times" :key="time.interval" style="display: flex; margin-left: 5px">
                        <div style="padding: 0px 20px;">
                          <div class="text-sm font-medium text-gray-800 truncate">interval: {{time.interval}}</div>
                          <div class="text-sm font-medium text-gray-600 truncate">available: {{time.available}} reserved: {{time.reserved}}</div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
              <div>
                <a href="#" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                  Edit
                </a>
                <a href="#" style="margin-left: 5px;" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                  Clear
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <create-inventory-modal @close-dialog="showCreateInventory = false" :open="showCreateInventory"></create-inventory-modal>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { ref, defineComponent, computed } from 'vue'
import CreateInventoryModal from '../modals/CreateInventoryModal.vue'
export default defineComponent({    
  name: 'Inventory',
    components: {
    CreateInventoryModal
  },
  setup() {
    var store = useStore()
    const showCreateInventory = ref(false)
    const slots = computed(() => {
      return store.state.reservation.slots
    })
    return {
      showCreateInventory, slots
    }
  },
  created() {
    this.$store.dispatch('reservation/loadInventory');
  }
})

</script>

<style scoped>
</style>