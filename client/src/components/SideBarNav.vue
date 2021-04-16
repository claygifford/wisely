<template>
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-blue-600 overflow-y-auto md:block">
      <div class="w-full py-6 flex flex-col items-center">
          
        <div class="flex-shrink-0 flex items-center">
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" /> -->
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" /> -->
          <div class="bg-white text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C9.58206 2.00071 6.00079 5.58175 6.00008 9.9994C5.99664 12.4832 6.57408 14.9333 7.68628 17.1542C7.88852 17.5581 8.10697 17.9521 8.34163 18.336C10.3401 21.6043 13.4423 24.0494 17.0871 25.2291C17.5144 25.367 17.949 25.4877 18.3909 25.5911C19.14 25.7637 19.9006 25.882 20.6667 25.9449C21.1064 25.9811 21.5508 25.9995 21.9999 26V9.9994C21.9999 5.58141 18.4183 2 14 2ZM9.28585 5.28585C11.8894 2.68257 16.1105 2.68257 18.7141 5.28585C18.9828 5.55434 19.2283 5.84501 19.4481 6.15476C18.884 5.90543 18.2739 5.77691 17.6571 5.77745C16.1227 5.77745 14.7727 6.55585 14 7.72707C13.2272 6.55585 11.8772 5.77745 10.3428 5.77745C9.72606 5.77691 9.116 5.90543 8.55188 6.15476C8.77168 5.84501 9.01721 5.55434 9.28585 5.28585ZM9.72968 18.0372C11.3281 20.4704 13.6113 22.3759 16.2914 23.5134C16.5447 23.6199 16.7998 23.7192 17.0569 23.8113C16.6267 20.4876 13.7961 17.9996 10.4445 17.9992C10.2057 17.9992 9.96711 18.0119 9.72968 18.0372ZM20.6667 24.606C19.9133 24.5385 19.1663 24.4126 18.4325 24.2292C18.2944 21.6799 16.9469 19.35 14.8061 17.9588C17.1909 17.7178 19.3419 16.4198 20.6667 14.4224V24.606ZM11.5258 16.1901C14.0018 17.1793 16.829 16.5983 18.7141 14.7128C19.968 13.4652 20.6707 11.7678 20.6657 9.999C20.6657 8.40626 19.2945 7.11039 17.6561 7.11039C16.0178 7.11039 14.6846 8.40626 14.6846 9.999V13.11H13.3139V9.999C13.3139 8.40626 11.9812 7.11039 10.3423 7.11039C8.70345 7.11039 7.33276 8.40626 7.33276 9.999C7.33294 10.0549 7.33363 10.1106 7.33483 10.1663C7.4015 12.8316 9.04987 15.2008 11.5258 16.1901ZM10.4445 11.7775C11.1809 11.7775 11.7779 11.1805 11.7779 10.4441C11.7779 9.7077 11.1809 9.11073 10.4445 9.11073C9.70803 9.11073 9.11102 9.7077 9.11102 10.4441C9.11102 11.1805 9.70803 11.7775 10.4445 11.7775ZM18.8889 10.4441C18.8889 11.1805 18.2919 11.7775 17.5555 11.7775C16.8191 11.7775 16.222 11.1805 16.222 10.4441C16.222 9.7077 16.8191 9.11073 17.5555 9.11073C18.2919 9.11073 18.8889 9.7077 18.8889 10.4441Z" fill="#005ACD"/>
            </svg>
          </div>
        </div>
        <div class="flex-1 mt-6 w-full px-2 space-y-1">            
            <a v-for="item in sidebarNavigation" @click="goto(item)" :key="item.name" :href="item.href" :class="[isCurrent(item) ? 'bg-blue-500 text-white' : 'text-blue-100 hover:bg-blue-500 hover:text-white', 'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[isCurrent(item) ? 'text-white' : 'text-blue-100 group-hover:text-white', 'h-6 w-6']" aria-hidden="true" />
                <span class="mt-2 font-semibold">{{ item.name }}</span>
            </a>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" static class="md:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </TransitionChild>
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-1 right-0 -mr-14 p-1">
                  <button type="button" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white" @click="mobileMenuOpen = false">
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 px-4 flex items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow" />
              </div>
              <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav class="h-full flex flex-col">
                  <div class="space-y-1">
                    <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-800 hover:text-white', 'group py-2 px-3 rounded-md flex items-center text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                      <component :is="item.icon" :class="[item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white', 'mr-3 h-6 w-6']" aria-hidden="true" />
                      <span>{{ item.name }}</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  MenuAlt2Icon,
  PhotographIcon,
  PlusIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/solid'
import { SearchIcon } from '@heroicons/vue/solid'

//import MenuIcon from 'vue-material-design-icons/Menu.vue';
import InventoryIcon from '../icons/InventoryIcon.vue'
import ReservationIcon from '../icons/ReservationIcon.vue'
import TablesIcon from '../icons/TablesIcon.vue'


const sidebarNavigation = [
  { name: 'Home', path: '', href: '#', icon: HomeIcon, current: false },
  { name: 'Reservations', path: 'reservations', href: '#', icon: ReservationIcon, current: false },
  { name: 'Inventory', path: 'inventory', href: '#', icon: InventoryIcon, current: true },
  { name: 'Tables', path: 'tables', href: '#', icon: TablesIcon, current: false },
  { name: 'Settings', path: 'settings', href: '#', icon: CogIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    MenuAlt2Icon,
    PlusIcon,
    SearchIcon,
    XIcon,
    //MenuIcon
  },
  setup() {
    const mobileMenuOpen = ref(false)    
    return {
      sidebarNavigation,
      userNavigation,
      mobileMenuOpen,
    }
  },
    methods: {
        goto(item) {
            if (item) {
                this.$router.push(`/${item.path}`)    
            }
        },
        isCurrent(item) {
          return this.$route.matched.some(({ name }) => name.toLowerCase() === item.name.toLowerCase())
          //return true;
                
                      //{{$route.matched.some(({ name }) => name === 'reservations')}}
        }
    }
}
</script>