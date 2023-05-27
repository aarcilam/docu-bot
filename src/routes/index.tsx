import { component$, useStore, $ } from '@builder.io/qwik';
import type { DocumentHead} from '@builder.io/qwik-city';
import { server$ } from '@builder.io/qwik-city';
import path from 'path';
import { processFilesInFolder } from '~/services/addHeadersToFiles';

export default component$(() => {
  const store = useStore({
    folder: '/Users/andresarcila/Desktop/aarcila/Work/qwik/src',
    filePattern: '\.tsx$',
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
      const filePattern = new RegExp(store.filePattern);
      console.log(folder,filePattern,store.header);
      processFilesInFolder(folder,filePattern,store.header);
    }
  })

  const onClickProcessFiles = $(async ()=>{
    await processFiles();
  })
  
  return (
    <>
      <input 
        type="text" 
        placeholder='paste folder path'
        value={store.folder}
        onInput$={(ev) => (store.folder = (ev.target as HTMLInputElement).value)}
      />
      <select value={store.filePattern} onInput$={(ev) => (store.filePattern = (ev.target as HTMLInputElement).value)}>
        <option value="\.tsx$">Archivos terminados en .tsx</option>
        <option value="\.ts$">Archivos terminados en .ts</option>
        <option value="\.js$">Archivos terminados en .js</option>
      </select>
      <textarea 
        value={store.header}
        onInput$={(ev) => (store.header = (ev.target as HTMLInputElement).value)}
      ></textarea>
      <button onClick$={onClickProcessFiles} >processFilesInFolder</button>
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