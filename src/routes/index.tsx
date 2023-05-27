import { component$, useStore } from '@builder.io/qwik';
import { DocumentHead, server$ } from '@builder.io/qwik-city';
import path from 'path';
import { processFilesInFolder } from '~/services/addHeadersToFiles';

export default component$(() => {
  const store = useStore({
    folder: ''
  })
  const processFiles = server$(()=>{
    if(store.folder != ''){
      const folder = path.resolve(store.folder);
      const filePattern = /\.tsx$/;
      console.log(folder,filePattern);
      processFilesInFolder(folder,filePattern);
    }
  })

  
  return (
    <>
      <input type="text" 
      value={store.folder}
      onInput$={(ev) => (store.folder = (ev.target as HTMLInputElement).value)}
      />
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