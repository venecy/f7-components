# Change Log

## v0.8.6 - August 31, 2018
  * Toast:
    * add `mask` prop, whether to show a transparent mask to prevent touch event of the whole page.
    * add `onOpen` `onClose` hook.
    * `Toast.text`:
      * add `onClose` `mask` `onClick` param.
      * now `duration` can be `0`, which means you need close it by hand.
    * add new method `Toast.hide` to close opened toast

  * Picker: 
    * `Picker.openModal` rename to `Picker.modal`
    * `Picker.open` `Picker.modal` now return actions to close or update it.
    * `Picker.close` is removed.

  * Panel:
    * `Panel.update` is removed.
  
  * Loading:
    * add new method `Loading.create`, create individual loading indicator closed by returned actions

  * Dialog:
    * dialog methods now return actions to let you close it outside.
    * `Dialog.setDefault` rename to `Dialog.config`


## v0.8.5 - August 29, 2018

  * Add new component `Panel`.
  * More specific doc in typing files
  * Update `Picker` component.
    * add `onOpen` and `onClose` hooks
    * update `Picker.Toolbar` component
    * update picker method options
  * Update `Transiton` component:
    * update animation hooks, now only `onEntered` is provided, other hooks replced by in child's lifecycle.