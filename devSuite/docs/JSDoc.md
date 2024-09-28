## Classes

<dl>
<dt><a href="#Lab">Lab</a></dt>
<dd><p>{Object} Lab                        Lab with ace-editor</p>
</dd>
<dt><a href="#Log">Log</a></dt>
<dd><p>{Object} Log                        Log class</p>
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
</dl>

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
    * [.setAngle()](#Lab+setAngle)
    * [.setCoordinates()](#Lab+setCoordinates)
    * [.setGrid()](#Lab+setGrid)
    * [.setLabDefaults(defaults)](#Lab+setLabDefaults)
    * [._copyToClipboard(contents)](#Lab+_copyToClipboard)
    * [._rotatePoint(origin, degree, distance)](#Lab+_rotatePoint)
    * [.loadScript(script)](#Lab+loadScript)
    * [.runCode()](#Lab+runCode)
    * [.scripts()](#Lab+scripts)
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

<a name="Log+entries"></a>

### log.entries() ⇒ <code>string</code>
Gets entries

**Kind**: instance method of [<code>Log</code>](#Log)  
**Returns**: <code>string</code> - Page's entries  
**Access**: public  
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

