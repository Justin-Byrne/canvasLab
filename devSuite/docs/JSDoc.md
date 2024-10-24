## Modules

<dl>
<dt><a href="#module_devSuite">devSuite</a></dt>
<dd><p>Call main module</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Lab">Lab</a></dt>
<dd><p>{Object} Lab                        Lab with ace-editor</p>
</dd>
<dt><a href="#Log">Log</a></dt>
<dd><p>{Object} Log                        Log class</p>
</dd>
<dt><a href="#Page">Page</a></dt>
<dd><p>{Object} Page                       Page for parsing page types</p>
</dd>
<dt><a href="#Template">Template</a></dt>
<dd><p>{Object} Template                   HTML card template for UI</p>
</dd>
<dt><a href="#Tool">Tool</a></dt>
<dd><p>{Object} Tool                       General helper class</p>
</dd>
<dt><a href="#Ui">Ui</a></dt>
<dd><p>{Object} UserInterface              User Interface</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#toTitleCase">toTitleCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts string to title case</p>
</dd>
<dt><a href="#to2Digits">to2Digits(number)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a number into a multi-digit string</p>
</dd>
<dt><a href="#subStringRange">subStringRange(start, end, substring)</a> ⇒ <code>string</code></dt>
<dd><p>Substitute a string within a range</p>
</dd>
<dt><a href="#angle">angle()</a></dt>
<dd><p>Toggles angle in lab</p>
</dd>
<dt><a href="#boolean">boolean()</a></dt>
<dd><p>Toggles boolean value in lab</p>
</dd>
<dt><a href="#cardButton">cardButton(element)</a></dt>
<dd><p>Toggles the card button associated with the passed &#39;element&#39; param</p>
</dd>
<dt><a href="#coordinates">coordinates()</a></dt>
<dd><p>Toggles coordinates in lab</p>
</dd>
<dt><a href="#fullscreen">fullscreen()</a></dt>
<dd><p>Toggles fullscreen mode                              @TODO: fix this crap</p>
</dd>
<dt><a href="#grid">grid()</a></dt>
<dd><p>Toggles grid in lab</p>
</dd>
<dt><a href="#lab">lab(element)</a></dt>
<dd><p>Toggles lab from each card-object</p>
</dd>
<dt><a href="#labButton">labButton(element)</a></dt>
<dd><p>Toggles lab buttons active state</p>
</dd>
<dt><a href="#navigation">navigation()</a></dt>
<dd><p>Toggles visibility of navigation menu</p>
</dd>
<dt><a href="#ruler">ruler()</a></dt>
<dd><p>Toggles ruler in lab</p>
</dd>
<dt><a href="#blankCards">blankCards()</a></dt>
<dd><p>Cleans the remaining &#39;.blank&#39; cards while converting the first to a &#39;.plus&#39; card; @see Ui.toggle._cardPlus ( )</p>
</dd>
<dt><a href="#code">code(script)</a> ⇒ <code>string</code></dt>
<dd><p>Cleans code of enumerators for card-objects</p>
</dd>
<dt><a href="#script">script(script)</a> ⇒ <code>string</code></dt>
<dd><p>Cleans script of it&#39;s function wrapper</p>
</dd>
</dl>

<a name="module_devSuite"></a>

## devSuite
Call main module


| Param | Type | Description |
| --- | --- | --- |
| window | <code>Object</code> | Window containing a DOM document |

<a name="Lab"></a>

## Lab
{Object} Lab                        Lab with ace-editor

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| editor | <code>Object</code> | Primary ace-editor object |


* [Lab](#Lab)
    * [.editor(editor)](#Lab+editor)
    * [.editor()](#Lab+editor) ⇒ <code>Object</code>
    * [._copyToClipboard(contents)](#Lab+_copyToClipboard)
    * [._rotatePoint(origin, degree, distance)](#Lab+_rotatePoint)
    * [.loadScript(script)](#Lab+loadScript)
    * [.runCode()](#Lab+runCode)
    * [.scripts()](#Lab+scripts)
    * [.setAngle()](#Lab+setAngle)
    * [.setCoordinates()](#Lab+setCoordinates)
    * [.setGrid()](#Lab+setGrid)
    * [.setLabDefaults(defaults)](#Lab+setLabDefaults)
    * [.init(script)](#Lab+init)

<a name="Lab+editor"></a>

### lab.editor(editor)
Sets editor

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| editor | <code>Object</code> | Primary ace-editor object |

<a name="Lab+editor"></a>

### lab.editor() ⇒ <code>Object</code>
Gets editor

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Returns**: <code>Object</code> - Primary ace-editor object  
**Access**: public  
<a name="Lab+_copyToClipboard"></a>

### lab.\_copyToClipboard(contents)
Copy passed contents to clipboard

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| contents | <code>string</code> | Contents to copy to clipboard |

<a name="Lab+_rotatePoint"></a>

### lab.\_rotatePoint(origin, degree, distance)
Rotates the origin point by the degree & distance passed

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>Point</code> | Origin point |
| degree | <code>number</code> | Degree to rotate |
| distance | <code>number</code> | Distance from origin |

<a name="Lab+loadScript"></a>

### lab.loadScript(script)
Loads a script within ace-editor

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | Arrow function containing script |

<a name="Lab+runCode"></a>

### lab.runCode()
Executes lab code from editor

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  
<a name="Lab+scripts"></a>

### lab.scripts()
Returns an object of lab-station specific scripts

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  
<a name="Lab+setAngle"></a>

### lab.setAngle()
Sets angle overlay

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  
<a name="Lab+setCoordinates"></a>

### lab.setCoordinates()
Sets coordinates overlay

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  
<a name="Lab+setGrid"></a>

### lab.setGrid()
Sets grid overlay

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  
<a name="Lab+setLabDefaults"></a>

### lab.setLabDefaults(defaults)
Sets lab default options

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| defaults | <code>Array.&lt;string&gt;</code> | Array of default options |

<a name="Lab+init"></a>

### lab.init(script)
Sets lab & ace-editor

**Kind**: instance method of [<code>Lab</code>](#Lab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | Arrow function containing script |

<a name="Log"></a>

## Log
{Object} Log                        Log class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| entries | <code>string</code> | Log entries |


* [Log](#Log)
    * [.entries()](#Log+entries) ⇒ <code>string</code>
    * [.entry(message)](#Log+entry)
    * [.view()](#Log+view)

<a name="Log+entries"></a>

### log.entries() ⇒ <code>string</code>
Gets entries

**Kind**: instance method of [<code>Log</code>](#Log)  
**Returns**: <code>string</code> - Page's entries  
**Access**: public  
<a name="Log+entry"></a>

### log.entry(message)
Sets a single entry with the passed message param

**Kind**: instance method of [<code>Log</code>](#Log)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Message for log entry |

<a name="Log+view"></a>

### log.view()
View all entries

**Kind**: instance method of [<code>Log</code>](#Log)  
**Access**: public  
<a name="Page"></a>

## Page
{Object} Page                       Page for parsing page types

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Page's type |
| group | <code>string</code> | Page's group |
| handler | <code>string</code> | Page's handler |


* [Page](#Page)
    * [new Page()](#new_Page_new)
    * [.type(value)](#Page+type)
    * [.type()](#Page+type) ⇒ <code>string</code>
    * [.group(value)](#Page+group)
    * [.group()](#Page+group) ⇒ <code>string</code>
    * [.handler(value)](#Page+handler)
    * [.handler()](#Page+handler) ⇒ <code>string</code>

<a name="new_Page_new"></a>

### new Page()
Creates a page

<a name="Page+type"></a>

### page.type(value)
Sets type

**Kind**: instance method of [<code>Page</code>](#Page)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Page's type |

<a name="Page+type"></a>

### page.type() ⇒ <code>string</code>
Gets type

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>string</code> - Page's type  
**Read only**: true  
<a name="Page+group"></a>

### page.group(value)
Sets group

**Kind**: instance method of [<code>Page</code>](#Page)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Page's group |

<a name="Page+group"></a>

### page.group() ⇒ <code>string</code>
Gets group

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>string</code> - Page's group  
**Read only**: true  
<a name="Page+handler"></a>

### page.handler(value)
Sets handler

**Kind**: instance method of [<code>Page</code>](#Page)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Page's handler |

<a name="Page+handler"></a>

### page.handler() ⇒ <code>string</code>
Gets handler

**Kind**: instance method of [<code>Page</code>](#Page)  
**Returns**: <code>string</code> - Page's handler  
**Read only**: true  
<a name="Template"></a>

## Template
{Object} Template                   HTML card template for UI

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| standard | <code>string</code> | Standard HTML card template |
| blank | <code>string</code> | Blank HTML card template |


* [Template](#Template)
    * [.standard()](#Template+standard) ⇒ <code>string</code>
    * [.blank()](#Template+blank) ⇒ <code>string</code>
    * [.getCards(cardObjects)](#Template+getCards) ⇒ <code>Array</code>

<a name="Template+standard"></a>

### template.standard() ⇒ <code>string</code>
Returns a standard HTML card template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - HTML card standard template  
**Read only**: true  
<a name="Template+blank"></a>

### template.blank() ⇒ <code>string</code>
Returns a blank HTML card template

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>string</code> - HTML card blank template  
**Read only**: true  
<a name="Template+getCards"></a>

### template.getCards(cardObjects) ⇒ <code>Array</code>
Returns an Array of standard & extra HTML templates for each card-object

**Kind**: instance method of [<code>Template</code>](#Template)  
**Returns**: <code>Array</code> - Array of HTML templates for each card-object  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| cardObjects | <code>Array.&lt;Object&gt;</code> | Array of card-objects |

<a name="Tool"></a>

## Tool
{Object} Tool                       General helper class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| copy | <code>Object</code> | Standard HTML card template |


* [Tool](#Tool)
    * [.isActive(element)](#Tool+isActive) ⇒ [<code>boolean</code>](#boolean)
    * [.isCanvasLabObject(value)](#Tool+isCanvasLabObject) ⇒ [<code>boolean</code>](#boolean)
    * [.copyCode()](#Tool+copyCode)
    * [.copyObjectWithKey(object)](#Tool+copyObjectWithKey) ⇒ <code>Object</code>
    * [.delay(time)](#Tool+delay) ⇒ <code>Promise</code>

<a name="Tool+isActive"></a>

### tool.isActive(element) ⇒ [<code>boolean</code>](#boolean)
Determine whether the passed element is active

**Kind**: instance method of [<code>Tool</code>](#Tool)  
**Returns**: [<code>boolean</code>](#boolean) - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM Element |

<a name="Tool+isCanvasLabObject"></a>

### tool.isCanvasLabObject(value) ⇒ [<code>boolean</code>](#boolean)
Determine whether the passed value is an 'Object' canvasLab category

**Kind**: instance method of [<code>Tool</code>](#Tool)  
**Returns**: [<code>boolean</code>](#boolean) - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Object, i.e.: 'Line', 'Circle', 'Rectangle', etc... |

<a name="Tool+copyCode"></a>

### tool.copyCode()
Copy code to clipboard

**Kind**: instance method of [<code>Tool</code>](#Tool)  
**Access**: public  
<a name="Tool+copyObjectWithKey"></a>

### tool.copyObjectWithKey(object) ⇒ <code>Object</code>
Returns a copied object

**Kind**: instance method of [<code>Tool</code>](#Tool)  
**Returns**: <code>Object</code> - Copied object  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object to copy |

<a name="Tool+delay"></a>

### tool.delay(time) ⇒ <code>Promise</code>
Simple programmatic delay

**Kind**: instance method of [<code>Tool</code>](#Tool)  
**Returns**: <code>Promise</code> - An async promise  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to delay |

<a name="Ui"></a>

## Ui
{Object} UserInterface              User Interface

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| toggle | <code>Object</code> | Toggling functions |
| clean | <code>Object</code> | Cleaning functions |


* [Ui](#Ui)
    * [.toggle()](#Ui+toggle) ⇒ <code>Object</code>
    * [.clean()](#Ui+clean) ⇒ <code>Object</code>
    * [.alert(message, type)](#Ui+alert)
    * [.clearScreen(setCardAlbum)](#Ui+clearScreen)
    * [.getClass(code)](#Ui+getClass) ⇒ <code>string</code>
    * [.setNavLinks(element, links)](#Ui+setNavLinks)
    * [.init()](#Ui+init)
    * [.runEasingAnimation(easingFunction, index)](#Ui+runEasingAnimation)

<a name="Ui+toggle"></a>

### ui.toggle() ⇒ <code>Object</code>
Gets toggle object

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Returns**: <code>Object</code> - Toggle object  
**Access**: public  
<a name="Ui+clean"></a>

### ui.clean() ⇒ <code>Object</code>
Gets clean object

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Returns**: <code>Object</code> - Clean object  
**Access**: public  
<a name="Ui+alert"></a>

### ui.alert(message, type)
Displays an alert message within the modal

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Message to display |
| type | <code>string</code> | Type of message; success || failure |

<a name="Ui+clearScreen"></a>

### ui.clearScreen(setCardAlbum)
Clears screen prior to rebuilding

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| setCardAlbum | [<code>boolean</code>](#boolean) | <code>false</code> | Sets card album display to block (true) || none (false) |

<a name="Ui+getClass"></a>

### ui.getClass(code) ⇒ <code>string</code>
Returns the likely class name for the passed code

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Returns**: <code>string</code> - Likely class name  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | Code string |

<a name="Ui+setNavLinks"></a>

### ui.setNavLinks(element, links)
Sets navigation links

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Parent navigation element |
| links | <code>Array.&lt;Object&gt;</code> | Array of Objects containing navigation link data |

<a name="Ui+init"></a>

### ui.init()
Sets User Interface

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Access**: public  
<a name="Ui+runEasingAnimation"></a>

### ui.runEasingAnimation(easingFunction, index)
Sets easing animation for an animation card

**Kind**: instance method of [<code>Ui</code>](#Ui)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| easingFunction | <code>string</code> | Easing function; as a string |
| index | <code>number</code> | Index of animation card |

<a name="toTitleCase"></a>

## toTitleCase(string) ⇒ <code>string</code>
Converts string to title case

**Kind**: global function  
**Returns**: <code>string</code> - Title case string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String to convert |

<a name="to2Digits"></a>

## to2Digits(number) ⇒ <code>string</code>
Converts a number into a multi-digit string

**Kind**: global function  
**Returns**: <code>string</code> - Multi-digit string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | Number |

<a name="subStringRange"></a>

## subStringRange(start, end, substring) ⇒ <code>string</code>
Substitute a string within a range

**Kind**: global function  
**Returns**: <code>string</code> - String with substitution  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | Substitution's starting point |
| end | <code>number</code> | Substitution's ending point |
| substring | <code>string</code> | Substitution |

<a name="angle"></a>

## angle()
Toggles angle in lab

**Kind**: global function  
**Access**: public  
<a name="boolean"></a>

## boolean()
Toggles boolean value in lab

**Kind**: global function  
**Access**: public  
<a name="cardButton"></a>

## cardButton(element)
Toggles the card button associated with the passed 'element' param

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM Element |

<a name="coordinates"></a>

## coordinates()
Toggles coordinates in lab

**Kind**: global function  
**Access**: public  
<a name="fullscreen"></a>

## fullscreen()
Toggles fullscreen mode                              @TODO: fix this crap

**Kind**: global function  
**Access**: public  
<a name="grid"></a>

## grid()
Toggles grid in lab

**Kind**: global function  
**Access**: public  
<a name="lab"></a>

## lab(element)
Toggles lab from each card-object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM Element |

<a name="labButton"></a>

## labButton(element)
Toggles lab buttons active state

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | HTML DOM Element |

<a name="navigation"></a>

## navigation()
Toggles visibility of navigation menu

**Kind**: global function  
**Access**: public  
<a name="ruler"></a>

## ruler()
Toggles ruler in lab

**Kind**: global function  
**Access**: public  
<a name="blankCards"></a>

## blankCards()
Cleans the remaining '.blank' cards while converting the first to a '.plus' card; @see Ui.toggle._cardPlus ( )

**Kind**: global function  
**Access**: public  
<a name="code"></a>

## code(script) ⇒ <code>string</code>
Cleans code of enumerators for card-objects

**Kind**: global function  
**Returns**: <code>string</code> - Function as a string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | JavaScript function; for card-objects only |

<a name="script"></a>

## script(script) ⇒ <code>string</code>
Cleans script of it's function wrapper

**Kind**: global function  
**Returns**: <code>string</code> - Function as a string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | JavaScript function |

