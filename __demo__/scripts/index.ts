import MyLib from 'mylib';

// for debug
(window as any).MyLib = MyLib;

(document.getElementById('version') as HTMLElement).textContent = MyLib.version;
