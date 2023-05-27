import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { server$ } from '@builder.io/qwik-city';
import path from 'path';
import { processFilesInFolder } from '~/services/addHeadersToFiles';

export default component$(() => {
  const store = useStore({
    folder: '',
    header: `/**
    * <%= projectName %> - <%= description %>
    * @fileoverview <%= filename %>
    * @description <%= fileDescription %>
    * @version <%= version %>
    * @date <%= date %>
    * @company eCloud4 Corporation
    *
    * This software is the property of eCloud4 Corporation. Unauthorized reproduction or distribution of
    * this software, or any portion of it, may result in severe civil and criminal penalties, and will be
    * prosecuted to the maximum extent possible under the law.
    *
    * @license <%= license %>
    * @copyright Copyright (c) <%= year %> <%= author %>
    * @license eCloud4 Corporation Software License
    */
    `
  })
  const processFiles = server$(()=>{
    if(store.folder != ''){
      const folder = path.resolve(store.folder);
      const filePattern = /\.tsx$/;
      console.log(folder,filePattern);
      processFilesInFolder(folder,filePattern,store.header);
    }
  })

  
  return (
    <>
      <input type="text" 
      value={store.folder}
      onInput$={(ev) => (store.folder = (ev.target as HTMLInputElement).value)}
      />
      <textarea 
      value={store.header}
      onInput$={(ev) => (store.header = (ev.target as HTMLInputElement).value)}></textarea>
      <button onClick$={async ()=>{
        await processFiles();
        }} >processFilesInFolder</button>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};