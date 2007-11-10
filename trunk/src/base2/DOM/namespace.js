
var DOM = new base2.Namespace(this, {
  name:    "DOM",
  version: "0.9.2 (alpha)",
  exports:
    "Interface, Binding, Node, Document, Element, AbstractView, Event, EventTarget, DocumentEvent, " +
    "NodeSelector, DocumentSelector, ElementSelector, StaticNodeList, " +
    "ViewCSS, HTMLDocument, HTMLElement, Selector, Traversal, XPathParser",
  
  bind: function(node) {
    // Apply a base2 DOM Binding to a native DOM node.
    if (node && node.nodeType) {
      var uid = assignID(node);
      if (!arguments.callee[uid]) {
        switch (node.nodeType) {
          case 1: // Element
            if (typeof node.className == "string") {
              // It's an HTML element, so use bindings based on tag name.
              (HTMLElement.bindings[node.tagName] || HTMLElement).bind(node);
            } else {
              Element.bind(node);
            }
            break;
          case 9: // Document
            if (node.writeln) {
              HTMLDocument.bind(node);
            } else {
              Document.bind(node);
            }
            break;
          default:
            Node.bind(node);
        }
        arguments.callee[uid] = true;
      }
    }
    return node;
  },
  
  "@MSIE5.+win": {  
    bind: function(node) {
      if (node && node.writeln) {
        node.nodeType = 9;
      }
      return this.base(node);
    }
  }
});

eval(this.imports);