<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="open = false" :open="open">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
              <!-- <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              </div> -->
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-blue-600">
                  Create Inventory
                </DialogTitle>
              <form class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                  <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div style="text-align: left;">
                      <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Ability to control how many reservations I'm willing to take every 15 minutes.
                      </p>
                    </div>
                    <div class="space-y-6 sm:space-y-5">
                      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="reservation_date" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          From
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-1">
                          <select id="reservation_date" name="reservation_date" autocomplete="date" class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            <option>1 AM</option>
                            <option>2 AM</option>
                            <option>3 AM</option>
                            <option>4 AM</option>
                            <option>5 AM</option>
                            <option>6 AM</option>
                            <option>7 AM</option>
                            <option>8 AM</option>
                            <option>9 AM</option>
                            <option>10 AM</option>
                            <option>11 AM</option>
                            <option>12 PM</option>
                            <option>1 PM</option>
                            <option>2 PM</option>
                            <option>3 PM</option>
                            <option>4 PM</option>
                            <option>5 PM</option>
                            <option>6 PM</option>
                            <option>7 PM</option>
                            <option>8 PM</option>
                            <option>9 PM</option>
                            <option>10 PM</option>
                            <option>11 PM</option>
                          </select>
                        </div>
                        <div class="mt-1 sm:mt-0 sm:col-span-1">
                          <select id="reservation_date" name="reservation_date" autocomplete="date" class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            <option>0</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                          </select>
                        </div>
                      </div>

                      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="reservation_date" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          To
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-1">
                          <select id="reservation_date" name="reservation_date" autocomplete="date" class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            <option>1 AM</option>
                            <option>2 AM</option>
                            <option>3 AM</option>
                            <option>4 AM</option>
                            <option>5 AM</option>
                            <option>6 AM</option>
                            <option>7 AM</option>
                            <option>8 AM</option>
                            <option>9 AM</option>
                            <option>10 AM</option>
                            <option>11 AM</option>
                            <option>12 PM</option>
                            <option>1 PM</option>
                            <option>2 PM</option>
                            <option>3 PM</option>
                            <option>4 PM</option>
                            <option>5 PM</option>
                            <option>6 PM</option>
                            <option>7 PM</option>
                            <option>8 PM</option>
                            <option>9 PM</option>
                            <option>10 PM</option>
                            <option>11 PM</option>
                          </select>
                        </div>
                        <div class="mt-1 sm:mt-0 sm:col-span-1">
                          <select id="reservation_date" name="reservation_date" autocomplete="date" class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            <option>0</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                          </select>
                        </div>
                      </div>

                      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label for="reservation_email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Available
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-1">
                          <input id="reservation_email" name="reservation_email" type="text" autocomplete="available" class="block max-w-lg w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md" placeholder="0"/>
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

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  setup() {
    var store = useStore()    
    // const reservations = computed(() => {
    //       return store.state.reservation.reservations
    // })
    return { }
  },
  props: {
    open: Boolean
  },
  data() {
    return {
      name: '',
      email: '',      
      partysize: 0,
      selectedSlot: { },
      selectedInterval: {}
    }
  },
  methods: {
      OnSubmit() {
        this.$store.dispatch('reservation/setInventory', { name: 'testing' })
        this.$emit('close-dialog', true)
      },
      OnCancel() {
        this.$emit('close-dialog', false)
      }
  }
}
</script>