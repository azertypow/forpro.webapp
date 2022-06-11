import './style/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useForProDataStore} from "@/stores/forProData"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

useForProDataStore().dataFPApi = {
  title: 'hello webapp title',
  sections: [
    {
      type: 'timeline',
      title: 'Timeline ForPro',
      description: '<p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipisicing elit. A alias aspernatur blanditiis debitis doloremque ea ipsa ipsum libero modi molestias, praesentium quaerat quidem repudiandae sequi, soluta veritatis voluptatem voluptatum. Et!</p>',
      status: 'listed',
      items: [
        {
          date: '02.01.2022',
          title: 'Le LearningLab prend forme !',
          text: '<p>Contribuer à faire de la formation professionnelle une voie d’excellence, une voie désirée et désirableImusapedit atemporitem ut ipsam cusam dem ilit etur molupis molorumVitem volessitatis pro berumquaesto magnatur, ut is debis.</p>',
        },
        {
          date: '12.09.2022',
          title: 'Ouverture du bâtiment',
          text: '<p>Contribuer à faire de la formation professionnelle une voie d’excellence, une voie désirée et désirableImusapedit atemporitem ut ipsam cusam dem ilit etur molupis molorumVitem volessitatis pro berumquaesto magnatur, ut is debis.</p>',
        },
        {
          date: '19.01.2022',
          title: 'title item',
          text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias architecto at aut commodi dolorem dolorum ducimus eligendi expedita id iusto, modi nobis, quaerat quod reprehenderit similique vel voluptas voluptatem.</p>',
        }
      ],
    }
    ]
}
