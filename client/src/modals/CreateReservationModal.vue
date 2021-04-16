<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" :open="open">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
              <!-- <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div> -->
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" style="flex: 1; display: flex; flex-direction: column;">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-blue-600">
                  Create Reservation
                </DialogTitle>
              <form class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                  <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div style="text-align: left;">
                      <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Ability to control how many reservations I'm willing to take every 15 minutes.
                      </p>
                    </div>
                    <div style="display: flex;">
                      <div class="space-y-6 sm:space-y-5" style="display: flex; flex-direction: column; flex: 1;">
                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label for="reservation_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Name
                          </label>
                          <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input v-model="name" type="text" name="reservation_name" id="reservation_name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label for="reservation_email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Email
                          </label>
                          <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input v-model="email" id="reservation_email" name="reservation_email" type="email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"/>
                          </div>
                        </div>
                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label for="reservation_email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Party Size
                          </label>
                          <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input v-model="partysize" id="reservation_szie" name="reservation_size" type="text" autocomplete="partysize" class="block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md" placeholder="0"/>
                          </div>
                        </div>
                        <div style="display: flex; flex: 1;">
                          <div style="overflow: hidden; padding: 20px; flex: 1">
                            <div>Times</div>
                            <div style="overflow-y: auto; overflow-y: auto; max-height: 250px;">
                              <div v-for="slot in slots" :key="slot.hour" style="padding: 2px 10px" @click="selectSlot(slot)" v-bind:class="{ 'bg-blue-200': slot === selectedSlot }">
                                <p class="text-sm font-medium text-blue-600 truncate" v-bind:class="{ 'text-white': slot === selectedSlot }">{{ slot.hour }}</p>
                              </div>
                            </div>
                          </div>
                          <div style="overflow: hidden; padding: 20px; flex: 1">
                            <div style="overflow-y: auto; overflow-y: auto; max-height: 250px;">
                              <div style="display: flex; justify-content: center;">
                                <p class="text-sm font-medium text-gray-600 truncate" style="flex-basis: 80px;">Interval</p>
                                <p class="text-sm font-medium text-gray-600 truncate" style="flex-basis: 80px;">Available</p>
                                <p class="text-sm font-medium text-gray-600 truncate" style="flex-basis: 80px;">Reserved</p>
                              </div>
                              <div v-for="time in selectedSlot.times" :key="time.interval" style="padding: 2px 10px; display: flex; justify-content: center;" @click="selectInterval(time)" v-bind:class="{ 'bg-blue-200': time === selectedInterval }">
                                <p class="text-sm font-medium text-gray-600 truncate" style="flex-basis: 80px;">{{ time.interval }}</p>
                                <p class="text-sm font-medium text-gray-600 truncate" style="flex-basis: 80px;">{{ time.available }}</p>
                                <p class="text-sm font-medium text-gray-600 truncate" style="flex-basis: 80px;">{{ time.reserved }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:ml-10 sm:pl-4 sm:flex">
              <button type="button" style="margin-left: auto;" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm" @click="OnSubmit()">
                Submit
              </button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="OnCancel()" ref="cancelButtonRef">
                Cancel
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { useStore } from 'vuex'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
import { computed } from 'vue'
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  props: {
    open: Boolean
  },
  setup() {
    var store = useStore()    
    const slots = computed(() => {
      return store.state.reservation.slots
    })
    return { slots }
  },
  data() {
    return {
      name: '',
      email: '',      
      partysize: 0,
      selectedSlot: object,
      selectedInterval: object
    }
  },
  mounted() {
    this.$store.dispatch('reservation/loadInventory');
  },
  methods: {
      OnSubmit() {
        this.$store.dispatch('reservation/createReservation', { name: this.$data.name, status: 'Active', time: '12 PM : 15', email: this.$data.email, partysize: this.$data.partysize })
        this.$emit('close-dialog', true)
      },
      OnCancel() {
        this.$emit('close-dialog', false)
      },
      selectSlot(slot) {
        this.$data.selectedSlot = slot;
      },
      selectInterval(interval) {
        this.$data.selectedInterval = interval;
      }
  }
}
</script>