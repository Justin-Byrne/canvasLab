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
<dt><a href="#editor">editor(editor)</a></dt>
<dd><p>Sets editor</p>
</dd>
<dt><a href="#editor">editor()</a> ⇒ <code>Object</code></dt>
<dd><p>Gets editor</p>
</dd>
<dt><a href="#runCode">runCode()</a></dt>
<dd><p>Executes lab code from editor</p>
</dd>
<dt><a href="#init">init()</a></dt>
<dd><p>Sets lab &amp; ace-editor</p>
</dd>
<dt><a href="#entries">entries()</a> ⇒ <code>string</code></dt>
<dd><p>Gets entries</p>
</dd>
<dt><a href="#type">type(value)</a></dt>
<dd><p>Sets type</p>
</dd>
<dt><a href="#type">type()</a> ⇒ <code>string</code></dt>
<dd><p>Gets type</p>
</dd>
<dt><a href="#group">group(value)</a></dt>
<dd><p>Sets group</p>
</dd>
<dt><a href="#group">group()</a> ⇒ <code>string</code></dt>
<dd><p>Gets group</p>
</dd>
<dt><a href="#handler">handler(value)</a></dt>
<dd><p>Sets handler</p>
</dd>
<dt><a href="#handler">handler()</a> ⇒ <code>string</code></dt>
<dd><p>Gets handler</p>
</dd>
<dt><a href="#standard">standard()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a standard HTML card template</p>
</dd>
<dt><a href="#blank">blank()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a blank HTML card template</p>
</dd>
<dt><a href="#getCards">getCards(cardObjects)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an Array of standard &amp; extra HTML templates for each card-object</p>
</dd>
<dt><a href="#isCanvasLabObject">isCanvasLabObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Whether the passed value is an &#39;Object&#39; canvasLab category</p>
</dd>
<dt><a href="#delay">delay(time)</a> ⇒ <code>Promise</code></dt>
<dd><p>Simple programmatic delay</p>
</dd>
<dt><a href="#copyObjectWithKey">copyObjectWithKey(object)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns a copied object</p>
</dd>
<dt><a href="#copyCode">copyCode()</a></dt>
<dd><p>Copy code to clipboard</p>
</dd>
<dt><a href="#cardButton">cardButton(event)</a></dt>
<dd><p>Toggles the card button associated with the passed &#39;event&#39; param</p>
</dd>
<dt><a href="#externalLinks">externalLinks(element)</a></dt>
<dd><p>Toggles opacity from bottom links in navigation area</p>
</dd>
<dt><a href="#navigation">navigation()</a></dt>
<dd><p>Toggles visibility of navigation menu</p>
</dd>
<dt><a href="#fullscreen">fullscreen(button)</a></dt>
<dd><p>Toggles fullscreen mode                          @TODO: fix this crap</p>
</dd>
<dt><a href="#script">script(script)</a> ⇒ <code>string</code></dt>
<dd><p>Cleans script of it&#39;s function wrapper</p>
</dd>
<dt><a href="#code">code(script)</a> ⇒ <code>string</code></dt>
<dd><p>Cleans code of enumerators for card-objects</p>
</dd>
<dt><a href="#blankCards">blankCards()</a></dt>
<dd><p>Cleans the remaining &#39;.blank&#39; cards while converting the first to a &#39;.plus&#39; card; @see Ui.toggle._cardPlus ( )</p>
</dd>
<dt><a href="#toggle">toggle()</a> ⇒ <code>Object</code></dt>
<dd><p>Gets toggle object</p>
</dd>
<dt><a href="#clean">clean()</a> ⇒ <code>Object</code></dt>
<dd><p>Gets clean object</p>
</dd>
<dt><a href="#getClass">getClass(code)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the likely class name for the passed code</p>
</dd>
<dt><a href="#setNavLinks">setNavLinks(element, links)</a></dt>
<dd><p>Sets navigation links</p>
</dd>
<dt><a href="#alert">alert(message, type)</a></dt>
<dd><p>Displays an alert message within the modal</p>
</dd>
<dt><a href="#clearScreen">clearScreen(setCardAlbum)</a></dt>
<dd><p>Clears screen prior to rebuilding</p>
</dd>
<dt><a href="#init">init()</a></dt>
<dd><p>Sets User Interface</p>
</dd>
<dt><a href="#runEasingAnimation">runEasingAnimation(easingFunction, index)</a></dt>
<dd><p>Sets easing animation for an animation card</p>
</dd>
</dl>

<a name="module_devSuite"></a>

## devSuite
Call main module


| Param | Type | Description |
| --- | --- | --- |
| window | <code>Object</code> | Window containing a DOM document |


* [devSuite](#module_devSuite)
    * [~toggleCardButton(easingFunction, index)](#module_devSuite..toggleCardButton)
    * [~runEasingAnimation(easingFunction, index)](#module_devSuite..runEasingAnimation)
    * [~_runLabStationCode()](#module_devSuite.._runLabStationCode)

<a name="module_devSuite..toggleCardButton"></a>

### devSuite~toggleCardButton(easingFunction, index)
Toggles individual card buttons using their 'suite-data' attributes

**Kind**: inner method of [<code>devSuite</code>](#module_devSuite)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| easingFunction | <code>string</code> | Easing function; as a string |
| index | <code>number</code> | Index of animation card |

<a name="module_devSuite..runEasingAnimation"></a>

### devSuite~runEasingAnimation(easingFunction, index)
Runs easing animation for an animation card

**Kind**: inner method of [<code>devSuite</code>](#module_devSuite)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| easingFunction | <code>string</code> | Easing function; as a string |
| index | <code>number</code> | Index of animation card |

<a name="module_devSuite.._runLabStationCode"></a>

### devSuite~\_runLabStationCode()
Runs lab-station code from editor

**Kind**: inner method of [<code>devSuite</code>](#module_devSuite)  
**Access**: public  
<a name="Lab"></a>

## Lab
{Object} Lab                        Lab with ace-editor

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| editor | <code>Object</code> | Primary ace-editor object |

<a name="Log"></a>

## Log
{Object} Log                        Log class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| entries | <code>string</code> | Log entries |

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

<a name="new_Page_new"></a>

### new Page()
Creates a page

<a name="Template"></a>

## Template
{Object} Template                   HTML card template for UI

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| standard | <code>string</code> | Standard HTML card template |
| blank | <code>string</code> | Blank HTML card template |

<a name="Tool"></a>

## Tool
{Object} Tool                       General helper class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| copy | <code>Object</code> | Standard HTML card template |

<a name="Ui"></a>

## Ui
{Object} UserInterface              User Interface

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| toggle | <code>Object</code> | Toggling functions |
| clean | <code>Object</code> | Cleaning functions |

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

<a name="editor"></a>

## editor(editor)
Sets editor

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| editor | <code>Object</code> | Primary ace-editor object |

<a name="editor"></a>

## editor() ⇒ <code>Object</code>
Gets editor

**Kind**: global function  
**Returns**: <code>Object</code> - Primary ace-editor object  
**Access**: public  
<a name="runCode"></a>

## runCode()
Executes lab code from editor

**Kind**: global function  
**Access**: public  
<a name="init"></a>

## init()
Sets lab & ace-editor

**Kind**: global function  
**Access**: public  
<a name="entries"></a>

## entries() ⇒ <code>string</code>
Gets entries

**Kind**: global function  
**Returns**: <code>string</code> - Page's entries  
**Access**: public  
<a name="type"></a>

## type(value)
Sets type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Page's type |

<a name="type"></a>

## type() ⇒ <code>string</code>
Gets type

**Kind**: global function  
**Returns**: <code>string</code> - Page's type  
**Read only**: true  
<a name="group"></a>

## group(value)
Sets group

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Page's group |

<a name="group"></a>

## group() ⇒ <code>string</code>
Gets group

**Kind**: global function  
**Returns**: <code>string</code> - Page's group  
**Read only**: true  
<a name="handler"></a>

## handler(value)
Sets handler

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Page's handler |

<a name="handler"></a>

## handler() ⇒ <code>string</code>
Gets handler

**Kind**: global function  
**Returns**: <code>string</code> - Page's handler  
**Read only**: true  
<a name="standard"></a>

## standard() ⇒ <code>string</code>
Returns a standard HTML card template

**Kind**: global function  
**Returns**: <code>string</code> - HTML card standard template  
**Read only**: true  
<a name="blank"></a>

## blank() ⇒ <code>string</code>
Returns a blank HTML card template

**Kind**: global function  
**Returns**: <code>string</code> - HTML card blank template  
**Read only**: true  
<a name="getCards"></a>

## getCards(cardObjects) ⇒ <code>Array</code>
Returns an Array of standard & extra HTML templates for each card-object

**Kind**: global function  
**Returns**: <code>Array</code> - Array of HTML templates for each card-object  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| cardObjects | <code>Array.&lt;Object&gt;</code> | Array of card-objects |

<a name="isCanvasLabObject"></a>

## isCanvasLabObject(value) ⇒ <code>boolean</code>
Whether the passed value is an 'Object' canvasLab category

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Object, i.e.: 'Line', 'Circle', 'Rectangle', etc... |

<a name="delay"></a>

## delay(time) ⇒ <code>Promise</code>
Simple programmatic delay

**Kind**: global function  
**Returns**: <code>Promise</code> - An async promise  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | Time to delay |

<a name="copyObjectWithKey"></a>

## copyObjectWithKey(object) ⇒ <code>Object</code>
Returns a copied object

**Kind**: global function  
**Returns**: <code>Object</code> - Copied object  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object to copy |

<a name="copyCode"></a>

## copyCode()
Copy code to clipboard

**Kind**: global function  
**Access**: public  
<a name="cardButton"></a>

## cardButton(event)
Toggles the card button associated with the passed 'event' param

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>HTMLEvent</code> | UI DOM event |

<a name="externalLinks"></a>

## externalLinks(element)
Toggles opacity from bottom links in navigation area

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Main button element |

<a name="navigation"></a>

## navigation()
Toggles visibility of navigation menu

**Kind**: global function  
**Access**: public  
<a name="fullscreen"></a>

## fullscreen(button)
Toggles fullscreen mode                          @TODO: fix this crap

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | Button under the #control-panel .button class |

<a name="script"></a>

## script(script) ⇒ <code>string</code>
Cleans script of it's function wrapper

**Kind**: global function  
**Returns**: <code>string</code> - Function as a string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | JavaScript function |

<a name="code"></a>

## code(script) ⇒ <code>string</code>
Cleans code of enumerators for card-objects

**Kind**: global function  
**Returns**: <code>string</code> - Function as a string  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| script | <code>function</code> | JavaScript function; for card-objects only |

<a name="blankCards"></a>

## blankCards()
Cleans the remaining '.blank' cards while converting the first to a '.plus' card; @see Ui.toggle._cardPlus ( )

**Kind**: global function  
**Access**: public  
<a name="toggle"></a>

## toggle() ⇒ <code>Object</code>
Gets toggle object

**Kind**: global function  
**Returns**: <code>Object</code> - Toggle object  
**Access**: public  
<a name="clean"></a>

## clean() ⇒ <code>Object</code>
Gets clean object

**Kind**: global function  
**Returns**: <code>Object</code> - Clean object  
**Access**: public  
<a name="getClass"></a>

## getClass(code) ⇒ <code>string</code>
Returns the likely class name for the passed code

**Kind**: global function  
**Returns**: <code>string</code> - Likely class name  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | Code string |

<a name="setNavLinks"></a>

## setNavLinks(element, links)
Sets navigation links

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Parent navigation element |
| links | <code>Array.&lt;Object&gt;</code> | Array of Objects containing navigation link data |

<a name="alert"></a>

## alert(message, type)
Displays an alert message within the modal

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Message to display |
| type | <code>string</code> | Type of message; success || failure |

<a name="clearScreen"></a>

## clearScreen(setCardAlbum)
Clears screen prior to rebuilding

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| setCardAlbum | <code>boolean</code> | Sets card album display to block (true) || none (false) |

<a name="init"></a>

## init()
Sets User Interface

**Kind**: global function  
**Access**: public  
<a name="runEasingAnimation"></a>

## runEasingAnimation(easingFunction, index)
Sets easing animation for an animation card

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| easingFunction | <code>string</code> | Easing function; as a string |
| index | <code>number</code> | Index of animation card |

