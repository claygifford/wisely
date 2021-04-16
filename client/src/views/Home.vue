<template>
  <div class="py-12 bg-white overflow-y-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <div class="flex-shrink-0 flex items-center">
          <div class="bg-white text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
            <div style="border-radius: 50%;background-color: #2563eb;height: 200px;width: 200px;display: flex;align-items: center;justify-content: center;">
              <svg width="128" height="128" viewBox="0 0 28 28" fill="green" xmlns="http://www.w3.org/2000/svg">
                <path style="fill:white" fill-rule="evenodd" clip-rule="evenodd" d="M14 2C9.58206 2.00071 6.00079 5.58175 6.00008 9.9994C5.99664 12.4832 6.57408 14.9333 7.68628 17.1542C7.88852 17.5581 8.10697 17.9521 8.34163 18.336C10.3401 21.6043 13.4423 24.0494 17.0871 25.2291C17.5144 25.367 17.949 25.4877 18.3909 25.5911C19.14 25.7637 19.9006 25.882 20.6667 25.9449C21.1064 25.9811 21.5508 25.9995 21.9999 26V9.9994C21.9999 5.58141 18.4183 2 14 2ZM9.28585 5.28585C11.8894 2.68257 16.1105 2.68257 18.7141 5.28585C18.9828 5.55434 19.2283 5.84501 19.4481 6.15476C18.884 5.90543 18.2739 5.77691 17.6571 5.77745C16.1227 5.77745 14.7727 6.55585 14 7.72707C13.2272 6.55585 11.8772 5.77745 10.3428 5.77745C9.72606 5.77691 9.116 5.90543 8.55188 6.15476C8.77168 5.84501 9.01721 5.55434 9.28585 5.28585ZM9.72968 18.0372C11.3281 20.4704 13.6113 22.3759 16.2914 23.5134C16.5447 23.6199 16.7998 23.7192 17.0569 23.8113C16.6267 20.4876 13.7961 17.9996 10.4445 17.9992C10.2057 17.9992 9.96711 18.0119 9.72968 18.0372ZM20.6667 24.606C19.9133 24.5385 19.1663 24.4126 18.4325 24.2292C18.2944 21.6799 16.9469 19.35 14.8061 17.9588C17.1909 17.7178 19.3419 16.4198 20.6667 14.4224V24.606ZM11.5258 16.1901C14.0018 17.1793 16.829 16.5983 18.7141 14.7128C19.968 13.4652 20.6707 11.7678 20.6657 9.999C20.6657 8.40626 19.2945 7.11039 17.6561 7.11039C16.0178 7.11039 14.6846 8.40626 14.6846 9.999V13.11H13.3139V9.999C13.3139 8.40626 11.9812 7.11039 10.3423 7.11039C8.70345 7.11039 7.33276 8.40626 7.33276 9.999C7.33294 10.0549 7.33363 10.1106 7.33483 10.1663C7.4015 12.8316 9.04987 15.2008 11.5258 16.1901ZM10.4445 11.7775C11.1809 11.7775 11.7779 11.1805 11.7779 10.4441C11.7779 9.7077 11.1809 9.11073 10.4445 9.11073C9.70803 9.11073 9.11102 9.7077 9.11102 10.4441C9.11102 11.1805 9.70803 11.7775 10.4445 11.7775ZM18.8889 10.4441C18.8889 11.1805 18.2919 11.7775 17.5555 11.7775C16.8191 11.7775 16.222 11.1805 16.222 10.4441C16.222 9.7077 16.8191 9.11073 17.5555 9.11073C18.2919 9.11073 18.8889 9.7077 18.8889 10.4441Z" fill="#005ACD"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> -->
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" style="padding-top: 50px;">
          Hey there, thanks for reviewing my submission
        </p>
        <h2 class="text-base p-t-4 text-blue-600 font-semibold tracking-wide uppercase" style="padding-top: 50px;">Problem Statement</h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          As a restaurant owner, I’d like to be able to book reservations through a website. I’d also like
to control how many reservations can be made available throughout the day so as to not
overbook my restaurant.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import ReservationIcon from '../icons/ReservationIcon.vue'
import InventoryIcon from '../icons/InventoryIcon.vue'
import TablesIcon from '../icons/TablesIcon.vue'
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
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Create Reservations',
    description:
      `I should be able to book a reservation on behalf of my guest. I should only be able to book times where I have inventory.`,
    icon: ReservationIcon,
  },
  {
    name: 'Create Inventory',
    description:
      'I should be able to control how many reservations I’m willing to take every 15 minutes.',
    icon: InventoryIcon,
  },
  {
    name: 'View Inventory',
    description:
      'I should be able to view how many parties my restaurant can take within the time ranges that I have inventory available.',
    icon: InventoryIcon,
  },
  {
    name: 'Settings',
    description:
      'Here you can view the raw data',
    icon: CogIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>