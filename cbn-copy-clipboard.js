/**
`cbn-copy-clipboard` Element that copies a text to clipboard

@group CBN-IT Elements
@element cbn-copy-clipboard
@demo demo.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import './cbn-copy-clipboard-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({
    is: 'cbn-copy-clipboard',
    properties: {
				/**
				 * This value will override the text that will be copied
				 */
				value: {
            type: String,
            value: ""
				}
    },
    listeners: {
				"click": "copy"
    },
    behaviors: [Cbn.CopyClipboard],
    /**
     * This function is called when the user clicks on something that is inside the element<br />
     * You can manually call this function, but only from a click event<br/>
     * Does not work with tap event
     */
    copy: function () {
				//this function call must come from an event like click
				if (this.value != null && this.value != '') {
            this.copyTextToClipboard(this.value);
				} else {
            var c = '';
            var distributedNodes = this.shadowRoot.querySelector('slot').assignedNodes({flatten:true});
            for (var i = 0; i < distributedNodes.length; ++i) {
                var el = distributedNodes[i];
                if (el.nodeType == 3) {
                    c += el.nodeValue;
                } else {
                    c += el.innerText;
                }
            }
            this.copyTextToClipboard(c);
				}
    }
});
