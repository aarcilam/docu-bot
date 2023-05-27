/**
 * eCloud4 Backend service - services for app and bo of eCloud4
 * @fileoverview index.tsx
 * @description 
 * @version 1.0.0
 * @date Fri May 26 2023 22:58:47 GMT-0500 (hora estándar de Colombia)
 * @company eCloud4 Corporation
 *
 * This software is the property of eCloud4 Corporation. Unauthorized reproduction or distribution of
 * this software, or any portion of it, may result in severe civil and criminal penalties, and will be
 * prosecuted to the maximum extent possible under the law.
 *
 * @license MIT
 * @copyright Copyright (c) 2023 eCloud4
 * @license eCloud4 Corporation Software License
 */
import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import path from 'path';
import { processFilesInFolder } from '~/services/addHeadersToFiles';

export default component$(() => {
  const folder = path.resolve('src');
  const filePattern = /\.tsx$/;

  //processFilesInFolder(folder,filePattern);

  
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