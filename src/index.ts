import { sayHello } from './hello-world'

console.log(sayHello())

declare let __MYLIB_VERSION__: string

export default class MyLib {
  static version = __MYLIB_VERSION__
}
