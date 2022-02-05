(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{518:function(t,e,a){"use strict";a.r(e);var s=a(23),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity"}},[t._v("#")]),t._v(" Entity")]),t._v(" "),a("p",[t._v("Creates an entity in Home Assistant which can be manipulated from this node.")]),t._v(" "),a("p",[a("code",[t._v("binary sensor")]),t._v(", "),a("code",[t._v("sensor")]),t._v(", and "),a("code",[t._v("switch")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("em",[t._v("Needs "),a("a",{attrs:{href:"https://github.com/zachowj/hass-node-red",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom Integration"),a("OutboundLink")],1),t._v(" installed\nin Home Assistant for this node to function")])])]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" Type "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Values "),a("code",[t._v("binary_sensor|sensor|switch")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("sensor")])])]),t._v(" "),a("p",[t._v("The state the entity should be updated to")]),t._v(" "),a("h3",{attrs:{id:"home-assistant-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-assistant-config"}},[t._v("#")]),t._v(" Home Assistant Config")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])])]),t._v(" "),a("p",[t._v("Configuration options available for the selected entity")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Entity nodes will not work in a subflow due to the way they register themselves\nwith Home Assistant. After a Node-RED restart, a new entity will be created in\nHome Assistant.")])]),t._v(" "),a("h2",{attrs:{id:"sensor-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensor-configuration"}},[t._v("#")]),t._v(" Sensor Configuration")]),t._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string | number | boolean")])])]),t._v(" "),a("p",[t._v("The state the entity should be updated to")]),t._v(" "),a("h3",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])])]),t._v(" "),a("p",[t._v("Key/Value pair of attributes to update. The key should be a string and the value can be a [string | number | boolean | object]")]),t._v(" "),a("h3",{attrs:{id:"input-override"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-override"}},[t._v("#")]),t._v(" Input Override")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Values: "),a("code",[t._v("accept | merge | block")])])]),t._v(" "),a("p",[t._v("Determine how input values will be handled. When merge is selected the message object values will override the configuration values.")]),t._v(" "),a("h3",{attrs:{id:"resend-state-and-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resend-state-and-attributes"}},[t._v("#")]),t._v(" Resend state and attributes")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("When creating the entity in Home Assistant this will also send the last updated state and attributes then node sent to Home Assistant")]),t._v(" "),a("h2",{attrs:{id:"switch-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-configuration"}},[t._v("#")]),t._v(" Switch Configuration")]),t._v(" "),a("h3",{attrs:{id:"output-on-state-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-on-state-change"}},[t._v("#")]),t._v(" Output on state change")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("When the state of the switch changes it will output to the top if the switch is on or to the bottom if it is in the off position.")]),t._v(" "),a("h3",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" Payload")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("str | num | bool | JSONata | timestamp")])])]),t._v(" "),a("p",[t._v("Customizable output set to "),a("code",[t._v("msg.payload")]),t._v(" if "),a("code",[t._v("Output on state change")]),t._v(" is enabled.")]),t._v(" "),a("h2",{attrs:{id:"sensors-inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensors-inputs"}},[t._v("#")]),t._v(" Sensors Inputs")]),t._v(" "),a("p",[t._v("properties of "),a("code",[t._v("msg.payload")])]),t._v(" "),a("h3",{attrs:{id:"state-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-2"}},[t._v("#")]),t._v(" state")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string | number | boolean")])])]),t._v(" "),a("p",[t._v("The state the entity should be updated to")]),t._v(" "),a("h3",{attrs:{id:"attributes-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes-2"}},[t._v("#")]),t._v(" attributes")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])])]),t._v(" "),a("p",[t._v("Key/Value pair of attributes to update. The key should be a string and the value can be a "),a("code",[t._v("[string | number | boolean | object]")])]),t._v(" "),a("h2",{attrs:{id:"switch-inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-inputs"}},[t._v("#")]),t._v(" Switch Inputs")]),t._v(" "),a("h3",{attrs:{id:"msg-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msg-enable"}},[t._v("#")]),t._v(" msg.enable")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("Set to "),a("code",[t._v("true")]),t._v(" to turn on the switch and "),a("code",[t._v("false")]),t._v(" to turn off. If the message has a property "),a("code",[t._v("enable")]),t._v(" set to the type "),a("code",[t._v("boolean")]),t._v(" the node will not have any output.")]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("p",[a("strong",[t._v("Status Color")])]),t._v(" "),a("ul",[a("li",[t._v("Green/Red: output from the node was due to input to the node")]),t._v(" "),a("li",[t._v("Blue: output from the node was due to the state of the node changing")]),t._v(" "),a("li",[t._v("Yellow: state of node changed but no output")])])])}),[],!1,null,null,null);e.default=o.exports}}]);