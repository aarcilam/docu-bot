import { component$, $, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import path from 'path';
import { processFilesInFolder } from '~/services/addHeadersToFiles';

export default component$(() => {
  // const folder = path.resolve('src');
  // const filePattern = /\.tsx$/;

  // processFilesInFolder(folder,filePattern)

  
  return (
    <>
      <button >processFilesInFolder</button>
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
