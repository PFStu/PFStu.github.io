import React from 'react';
import { Icon } from '@iconify/react';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import cppIcon from '@iconify-icons/simple-icons/cplusplus';
import pythonIcon from '@iconify-icons/simple-icons/python';
import nodejsIcon from '@iconify-icons/simple-icons/nodedotjs';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import linuxIcon from '@iconify-icons/simple-icons/linux';
import phpIcon from '@iconify-icons/simple-icons/php';

const Languages = () => {
  return (
    <div className="rounded-2xl bg-gray-800 py-10 px-4 md:px-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h1 className="text-2xl font-bold">我们掌握的语言:</h1>
      <ul className="col-span-1 md:col-span-2 lg:col-span-3 list-disc pl-6 space-y-2 bg-gray-900 rounded-2xl p-4">
        <li className="flex items-center space-x-2">
          <Icon icon={typescriptIcon} width="24" height="24" />
          <span>Typescript</span>
        </li>
        <li className="flex items-center space-x-2">
          <Icon icon={cppIcon} width="24" height="24" />
          <span>C++</span>
        </li>
        <li className="flex items-center space-x-2">
          <Icon icon={pythonIcon} width="24" height="24" />
          <span>Python</span>
        </li>
        <li className="flex items-center space-x-2">
          <Icon icon={nodejsIcon} width="24" height="24" />
          <span>Node.js</span>
        </li>
        <li className="flex items-center space-x-2">
          <Icon icon={javascriptIcon} width="24" height="24" />
          <span>JavaScript</span>
        </li>
        <li className="flex items-center space-x-2">
          <Icon icon={linuxIcon} width="24" height="24" />
          <span>Linux</span>
        </li>
        <li className="flex items-center space-x-2">
          <Icon icon={phpIcon} width="24" height="24" />
          <span>PHP</span>
        </li>
      </ul>
    </div>
  );
}

export default Languages;
