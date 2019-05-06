---
marp: true
title: StimulusJS
---


# History and Philosophy

- Extracted from Basecamp codebase
- One of the preset JS/webpacker configurations for Rails 5.2+ (along with Vue, React, Elm, Ember, AngularJS)
- Uses data-attributes
- Convention over configuration

---

# Install
`yarn add stimulus`

---

# The Basics
- Controllers
- Actions
- Targets

---

# Controllers
```
<div data-controller="demo"></div>
```

- the controller is scoped to the element its declared on and children
- autoloaded when using `@stimulus/webpack-helpers`
- convention over configuration: code expected in `controllers/demo_controller.js`
- controllers use "kebab-case"!!

---

---------:potato:-:carrot:-:cucumber:-:hot_pepper:--
          :fire::fire::fire::fire::fire::fire:

---

# Controllers - Data Map

If you name a data attribute data-CONTROLLER-field-name, you acquire magically generated getter/setters.
```
<div data-controller="demo" data-demo-some-value="foo"></div>
```

produces

```
this.data.get("someValue") # => "foo"
this.data.has("someValue") # => true
this.data.set("someValue", bar) # => data-demo-some-value === "bar"s
this.data.delete("someValue") # => value is destroyed
```

---

# Strongly Typed?
* All values are strings...



---

# Controllers - Lifecycle

- `initialize()`
- `connect()`
- `disconnect()`

These work when and how you'd expect

---

# Actions
```
<div data-controller="demo">
  <button data-action="click->demo#doThing">…</button>
</div>
```
- handles a DOM event
- *action descriptor* links event (click) to the controller (demo) with the function to run (doThing)
- special global event notation: `foo@window` `bar@document`

---

# Targets - Syntax
```
<div data-controller="demo">
  <button data-action="click->demo#getMessage">…</button>
  <div data-target="demo.message"></div>
</div>

// controllers/demo_controller.js
export default class extends Controller {
  static targets = [ "message" ]
...
```

---
# Targets - Properties

- `this.messageTarget`
- `this.messageTargets`
- `this.hasMessageTarget`

Controller generates a singular, plural, and existential property for each target, `message` in this example

---

# Webscale

* multiple controllers per element are supported (left-to-right execution)
* multiple instances of controllers on different elements are supported

---

# Demo - Carousel
