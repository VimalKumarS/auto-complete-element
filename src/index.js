/* @flow strict */

import AutocompleteElement from './auto-complete-element'
export {AutocompleteElement as default}
export {default as AutocompleteEvent} from './auto-complete-event'

if (!window.customElements.get('auto-complete')) {
  window.AutocompleteElement = AutocompleteElement
  window.customElements.define('auto-complete', AutocompleteElement)
}
