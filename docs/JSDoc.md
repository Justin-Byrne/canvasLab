## Classes

<dl>
<dt><a href="#canvasLab">canvasLab</a></dt>
<dd><p>{Object} canvasLab                          CanvasLab core application</p>
</dd>
<dt><a href="#Rgb">Rgb</a></dt>
<dd><p>{Object} Rgb 								RGB color model</p>
</dd>
<dt><a href="#Options">Options</a></dt>
<dd><p>{Object}  Options                           Options for collections</p>
</dd>
<dt><a href="#Range">Range</a></dt>
<dd><p>{Object} Range                              Range object</p>
</dd>
<dt><a href="#Anchor">Anchor</a></dt>
<dd><p>{Object} Anchor                             Anchor object</p>
</dd>
<dt><a href="#Angle">Angle</a></dt>
<dd><p>{Object}  Angle                             Angle properties of associated object</p>
</dd>
<dt><a href="#Aspect">Aspect</a></dt>
<dd><p>{Object} Aspect                             Aspect dimensions of associated object</p>
</dd>
<dt><a href="#ControlPoints">ControlPoints</a></dt>
<dd><p>{Object} ControlPoints                      Defines the shape of a bezier curve</p>
</dd>
<dt><a href="#Font">Font</a></dt>
<dd><p>{Object} Font                               Font base class for text objects</p>
</dd>
<dt><a href="#Point">Point</a></dt>
<dd><p>{Object}  Point                             X &amp; Y coordinates for an object</p>
</dd>
<dt><a href="#Stop">Stop</a></dt>
<dd><p>{Object} Stop                               Color stop properties for associated array(s)</p>
</dd>
<dt><a href="#Conic">Conic</a></dt>
<dd><p>{Object}       Conic                        Conic gradient object type and properties</p>
</dd>
<dt><a href="#Linear">Linear</a></dt>
<dd><p>{Object}       Linear                       Linear gradient object type and properties</p>
</dd>
<dt><a href="#Radial">Radial</a></dt>
<dd><p>{Object}       Radial                       Radial gradient object type and properties</p>
</dd>
<dt><a href="#Fill">Fill</a></dt>
<dd><p>{Object}  Fill                              Fill container for various fill types</p>
</dd>
<dt><a href="#Shadow">Shadow</a></dt>
<dd><p>{Object} Shadow                             Shadow of associated object</p>
</dd>
<dt><a href="#Stroke">Stroke</a></dt>
<dd><p>{Object}   Stroke                           Stroke properties of associated object</p>
</dd>
<dt><a href="#OptionsCollection">OptionsCollection</a></dt>
<dd><p>{Object}  OptionsCollection                 Options for shapes, lines, and groups</p>
</dd>
<dt><a href="#PointCollection">PointCollection</a></dt>
<dd><p>{Object}            PointCollection         X &amp; Y coordinates for an object</p>
</dd>
<dt><a href="#ShadowCollection">ShadowCollection</a></dt>
<dd><p>{Object} ShadowCollection                   Shadow of associated object</p>
</dd>
<dt><a href="#StrokeCollection">StrokeCollection</a></dt>
<dd><p>{Object}   StrokeCollection                 Stroke properties of associated object</p>
</dd>
<dt><a href="#Position">Position</a></dt>
<dd><p>{Object}            Position 				Position object</p>
</dd>
<dt><a href="#Circle">Circle</a></dt>
<dd><p>{Object}            Circle                  Circle object</p>
</dd>
<dt><a href="#Ellipse">Ellipse</a> ⇐ <code><a href="#Circle">Circle</a></code></dt>
<dd><p>{Object}            Ellipse                 Ellipse object</p>
</dd>
<dt><a href="#Line">Line</a></dt>
<dd><p>{Object}            Line                    Line object</p>
</dd>
<dt><a href="#Rectangle">Rectangle</a></dt>
<dd><p>{Object}            Rectangle               Rectangle object</p>
</dd>
<dt><a href="#RoundedRectangle">RoundedRectangle</a> ⇐ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd><p>{Object}            RoundingRectangle 		RoundingRectangle object</p>
</dd>
<dt><a href="#Text">Text</a></dt>
<dd><p>{Object}            Text                    Text element to render within a canvas element</p>
</dd>
<dt><a href="#cImage">cImage</a></dt>
<dd><p>{Object}            cImage                  cImage object</p>
</dd>
<dt><a href="#Circles">Circles</a></dt>
<dd><p>{Array}             Circles                 Collection of circle elements within an array</p>
</dd>
<dt><a href="#Ellipses">Ellipses</a> ⇐ <code><a href="#Circles">Circles</a></code></dt>
<dd><p>{Array}             Ellipses                Collection of circle elements within an array</p>
</dd>
<dt><a href="#Group">Group</a></dt>
<dd><p>{Array}             Group                   Collection of Line, Circle, Rectangle &amp; Text objects</p>
</dd>
<dt><a href="#Lines">Lines</a></dt>
<dd><p>{Array}             Lines                   Collection of Line objects</p>
</dd>
<dt><a href="#Rectangles">Rectangles</a></dt>
<dd><p>{Array}             Rectangles              Collection of Rectangle objects</p>
</dd>
<dt><a href="#RoundedRectangles">RoundedRectangles</a> ⇐ <code><a href="#Rectangles">Rectangles</a></code></dt>
<dd><p>{Array}             RoundedRectangles       Collection of Rounded Rectangle objects</p>
</dd>
<dt><a href="#Texts">Texts</a></dt>
<dd><p>{Array}             Texts                   Collection of Text objects</p>
</dd>
<dt><a href="#Queue">Queue</a></dt>
<dd><p>{Object} Queue                              Queue object</p>
</dd>
<dt><a href="#Animation">Animation</a></dt>
<dd><p>{Object}          Animation                 Animation handler; for drawing a single object in one instance</p>
</dd>
<dt><a href="#Animations">Animations</a></dt>
<dd><p>{Object}                  Animations        Animations handler; for drawing multiple objects in one instance</p>
</dd>
<dt><a href="#Application">Application</a></dt>
<dd><p>{Object}   Application                      Application handler</p>
</dd>
<dt><a href="#myTransitions">myTransitions</a></dt>
<dd></dd>
<dt><a href="#SacredCircles">SacredCircles</a></dt>
<dd><p>{Object}           SacredCircles            SacredCircles template</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#PROPERTY_BLOCKS">PROPERTY_BLOCKS</a> : <code>object</code></dt>
<dd><p>Base module for shared accessors &amp; mutators</p>
</dd>
<dt><a href="#UTILITIES">UTILITIES</a> : <code>object</code></dt>
<dd><p>Shared utility functions</p>
</dd>
<dt><a href="#VALIDATION">VALIDATION</a> : <code>object</code></dt>
<dd><p>Shared validation functions</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#circle">circle(point, stroke, fill)</a> ⇒ <code><a href="#Circle">Circle</a></code></dt>
<dd><p>Returns a Circle object</p>
</dd>
<dt><a href="#ellipse">ellipse(point, stroke, fill)</a> ⇒ <code><a href="#Ellipse">Ellipse</a></code></dt>
<dd><p>Returns a Ellipse object</p>
</dd>
<dt><a href="#rectangle">rectangle(point, stroke, fill)</a> ⇒ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd><p>Returns a Rectangle object</p>
</dd>
<dt><a href="#roundedRectangle">roundedRectangle(point, stroke, fill)</a> ⇒ <code><a href="#RoundedRectangle">RoundedRectangle</a></code></dt>
<dd><p>Returns a RoundedRectangle object</p>
</dd>
<dt><a href="#text">text(point, stroke, fill)</a> ⇒ <code><a href="#Text">Text</a></code></dt>
<dd><p>Returns a Text object</p>
</dd>
<dt><a href="#line">line(startPoint, endPoint)</a> ⇒ <code><a href="#Line">Line</a></code></dt>
<dd><p>Returns a Line object</p>
</dd>
<dt><a href="#initCanvasLab">initCanvasLab([canvas])</a></dt>
<dd><p>Initiates canvasLab</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#clObject">clObject</a> : <code>Object</code></dt>
<dd><p>Canvas Lab object</p>
</dd>
<dt><a href="#clCollection">clCollection</a> : <code>Object</code></dt>
<dd><p>Canvas Lab collection</p>
</dd>
<dt><a href="#Template">Template</a> : <code>Object</code></dt>
<dd><p>Canvas Lab Template, for the creation of objects through a collection</p>
</dd>
<dt><a href="#clChange">clChange</a> : <code>Object</code></dt>
<dd><p>Change, for animation changes through a transition</p>
</dd>
<dt><a href="#Transition">Transition</a> : <code>Object</code></dt>
<dd><p>Transition, for animation transition instances</p>
</dd>
</dl>

<a name="canvasLab"></a>

## canvasLab
{Object} canvasLab                          CanvasLab core application

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| canvas | <code>Object</code> | Main canvas context |
| canvases | <code>Array</code> | Array of all canvas contexts |
| font | <code>string</code> | Main font type |


* [canvasLab](#canvasLab)
    * [new canvasLab()](#new_canvasLab_new)
    * [.canvas(value)](#canvasLab+canvas)
    * [.canvas()](#canvasLab+canvas) ⇒ <code>string</code>
    * [.canvases(canvasId)](#canvasLab+canvases)
    * [.canvases()](#canvasLab+canvases) ⇒ <code>Array</code>
    * [.font(font)](#canvasLab+font)
    * [.font()](#canvasLab+font) ⇒ <code>string</code>
    * [.rotation(value)](#canvasLab+rotation)
    * [.rotation()](#canvasLab+rotation) ⇒ <code>number</code>
    * [.application()](#canvasLab+application) ⇒ [<code>Application</code>](#Application)
    * [.get()](#canvasLab+get) ⇒ <code>Object</code>
    * [.dom()](#canvasLab+dom) ⇒ <code>Object</code>
    * [.center()](#canvasLab+center) ⇒ [<code>Point</code>](#Point)
    * [.animate()](#canvasLab+animate)

<a name="new_canvasLab_new"></a>

### new canvasLab()
Create a canvasLab object

<a name="canvasLab+canvas"></a>

### canvasLab.canvas(value)
Set canvas value

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas identifier |

<a name="canvasLab+canvas"></a>

### canvasLab.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: <code>string</code> - Canvas identifier  
**Read only**: true  
**See**: [discrete.canvas](discrete.canvas)  
<a name="canvasLab+canvases"></a>

### canvasLab.canvases(canvasId)
Set canvas value

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvasId | <code>string</code> | Canvas identifier |

<a name="canvasLab+canvases"></a>

### canvasLab.canvases() ⇒ <code>Array</code>
Set canvas value

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: <code>Array</code> - Array of canvas contexts  
**Read only**: true  
<a name="canvasLab+font"></a>

### canvasLab.font(font)
Set main font type

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| font | <code>string</code> | Main font type |

<a name="canvasLab+font"></a>

### canvasLab.font() ⇒ <code>string</code>
Get main font type

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: <code>string</code> - font                               Main font type  
**Read only**: true  
<a name="canvasLab+rotation"></a>

### canvasLab.rotation(value)
Sets rotation property value

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Rotation value |

<a name="canvasLab+rotation"></a>

### canvasLab.rotation() ⇒ <code>number</code>
Get rotation property value

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: <code>number</code> - Rotation value  
**Access**: public  
<a name="canvasLab+application"></a>

### canvasLab.application() ⇒ [<code>Application</code>](#Application)
Returns this application

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: [<code>Application</code>](#Application) - Canvas Lab application  
**Read only**: true  
<a name="canvasLab+get"></a>

### canvasLab.get() ⇒ <code>Object</code>
Get getters

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: <code>Object</code> - Get getters  
**Access**: public  
<a name="canvasLab+dom"></a>

### canvasLab.dom() ⇒ <code>Object</code>
Get dom details

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: <code>Object</code> - DOM details  
**Read only**: true  
<a name="canvasLab+center"></a>

### canvasLab.center() ⇒ [<code>Point</code>](#Point)
Returns the center X & Y coordinates of the present canvas

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Returns**: [<code>Point</code>](#Point) - Center X & Y coordinates  
**Access**: public  
<a name="canvasLab+animate"></a>

### canvasLab.animate()
Animate the transition passed

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| transition | [<code>Transition</code>](#Transition) | Transition animation |

<a name="Rgb"></a>

## Rgb
{Object} Rgb 								RGB color model

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [red] | <code>number</code> | <code>0</code> | Red value; 0 - 255 |
| [green] | <code>number</code> | <code>0</code> | Green value; 0 - 255 |
| [blue] | <code>number</code> | <code>0</code> | Blue value; 0 - 255 |
| [alpha] | <code>number</code> | <code>1</code> | Alpha value; 0 - 1 (decimal) |


* [Rgb](#Rgb)
    * [new Rgb(red, green, blue, alpha)](#new_Rgb_new)
    * [.red(red)](#Rgb+red)
    * [.red()](#Rgb+red) ⇒ <code>number</code>
    * [.green(green)](#Rgb+green)
    * [.green()](#Rgb+green) ⇒ <code>number</code>
    * [.blue(blue)](#Rgb+blue)
    * [.blue()](#Rgb+blue) ⇒ <code>number</code>
    * [.alpha(value)](#Rgb+alpha)
    * [.alpha()](#Rgb+alpha) ⇒ <code>number</code>
    * [.cycle(start, end, progress, max)](#Rgb+cycle)
    * [.toCss()](#Rgb+toCss) ⇒ <code>string</code>

<a name="new_Rgb_new"></a>

### new Rgb(red, green, blue, alpha)
Create an RGB color model


| Param | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red value |
| green | <code>number</code> | Green value |
| blue | <code>number</code> | Blue value |
| alpha | <code>number</code> | Alpha value |

<a name="Rgb+red"></a>

### rgb.red(red)
Sets the red value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red value; 0 - 255 |

<a name="Rgb+red"></a>

### rgb.red() ⇒ <code>number</code>
Gets the red value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Returns**: <code>number</code> - Red value; 0 - 255  
**Read only**: true  
<a name="Rgb+green"></a>

### rgb.green(green)
Sets the green value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| green | <code>number</code> | Green value; 0 - 255 |

<a name="Rgb+green"></a>

### rgb.green() ⇒ <code>number</code>
Gets the green value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Returns**: <code>number</code> - Green value; 0 - 255  
**Read only**: true  
<a name="Rgb+blue"></a>

### rgb.blue(blue)
Sets the blue value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blue | <code>number</code> | Blue value; 0 - 255 |

<a name="Rgb+blue"></a>

### rgb.blue() ⇒ <code>number</code>
Gets the blue value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Returns**: <code>number</code> - Blue value; 0 - 255  
**Read only**: true  
<a name="Rgb+alpha"></a>

### rgb.alpha(value)
Set alpha value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Access**: public  
**See**: [alpha](#PROPERTY_BLOCKS.individual.alpha)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; 0 - 1 |

<a name="Rgb+alpha"></a>

### rgb.alpha() ⇒ <code>number</code>
Set alpha value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Returns**: <code>number</code> - Alpha value; 0 - 1  
**Access**: public  
**See**: [alpha](#PROPERTY_BLOCKS.individual.alpha)  
<a name="Rgb+cycle"></a>

### rgb.cycle(start, end, progress, max)
Color cycling

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) | Color model & values |
| end | [<code>Rgb</code>](#Rgb) | Color model & values |
| progress | <code>number</code> | Progress time unit; 0.00 - 1.00 |
| max | <code>number</code> | Maximum number of steps between interpolation |

<a name="Rgb+toCss"></a>

### rgb.toCss() ⇒ <code>string</code>
Returns a CSS compatible <color> string value

**Kind**: instance method of [<code>Rgb</code>](#Rgb)  
**Returns**: <code>string</code> - CSS <color> string  
**Access**: public  
<a name="Options"></a>

## Options
{Object}  Options                           Options for collections

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [anchor] | <code>boolean</code> | <code>false</code> | Show anchor |
| [axis] | <code>boolean</code> | <code>false</code> | Show axis |
| [border] | <code>boolean</code> | <code>false</code> | Show border |
| [coordinates] | <code>boolean</code> | <code>false</code> | Show coordinates |
| [controlPoints] | <code>boolean</code> | <code>false</code> | Show control points |
| [points] | <code>boolean</code> | <code>false</code> | Show points |
| [shadow] | <code>boolean</code> | <code>false</code> | Show shadow |
| master | <code>Object</code> |  | Master object |


* [Options](#Options)
    * [new Options(anchor, axis, border, coordinates, controlPoints, points, shadow)](#new_Options_new)
    * [.anchor(value)](#Options+anchor)
    * [.anchor()](#Options+anchor) ⇒ <code>boolean</code>
    * [.axis(value)](#Options+axis)
    * [.axis()](#Options+axis) ⇒ <code>boolean</code>
    * [.border(value)](#Options+border)
    * [.border()](#Options+border) ⇒ <code>boolean</code>
    * [.coordinates(value)](#Options+coordinates)
    * [.coordinates()](#Options+coordinates) ⇒ <code>boolean</code>
    * [.controlPoints(value)](#Options+controlPoints)
    * [.controlPoints()](#Options+controlPoints) ⇒ <code>boolean</code>
    * [.shadow(value)](#Options+shadow)
    * [.shadow()](#Options+shadow) ⇒ <code>boolean</code>
    * [.master(value)](#Options+master)
    * [.master()](#Options+master) ⇒ [<code>clObject</code>](#clObject)

<a name="new_Options_new"></a>

### new Options(anchor, axis, border, coordinates, controlPoints, points, shadow)
Create an options object


| Param | Type | Description |
| --- | --- | --- |
| anchor | <code>boolean</code> | Show anchor |
| axis | <code>boolean</code> | Show axis |
| border | <code>boolean</code> | Show border |
| coordinates | <code>boolean</code> | Show coordinates |
| controlPoints | <code>boolean</code> | Show control points |
| points | <code>boolean</code> | Show points |
| shadow | <code>boolean</code> | Show shadow |

<a name="Options+anchor"></a>

### options.anchor(value)
Set anchor value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Anchor; true | false |

<a name="Options+anchor"></a>

### options.anchor() ⇒ <code>boolean</code>
Get anchor value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Anchor; true | false  
**Read only**: true  
<a name="Options+axis"></a>

### options.axis(value)
Set axis value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Axis; true | false |

<a name="Options+axis"></a>

### options.axis() ⇒ <code>boolean</code>
Get axis value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Axis; true | false  
**Read only**: true  
<a name="Options+border"></a>

### options.border(value)
Set border value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Border; true | false |

<a name="Options+border"></a>

### options.border() ⇒ <code>boolean</code>
Get border value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Border; true | false  
**Read only**: true  
<a name="Options+coordinates"></a>

### options.coordinates(value)
Set coordinates value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Coordinates; true | false |

<a name="Options+coordinates"></a>

### options.coordinates() ⇒ <code>boolean</code>
Get coordinates value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Coordinates; true | false  
**Read only**: true  
<a name="Options+controlPoints"></a>

### options.controlPoints(value)
Set control points value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Control points; true | false |

<a name="Options+controlPoints"></a>

### options.controlPoints() ⇒ <code>boolean</code>
Get control points value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Control points; true | false  
**Read only**: true  
<a name="Options+shadow"></a>

### options.shadow(value)
Set shadow value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Shadow; true | false |

<a name="Options+shadow"></a>

### options.shadow() ⇒ <code>boolean</code>
Get shadow value

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Shadow; true | false  
**Access**: public  
<a name="Options+master"></a>

### options.master(value)
Set master object

**Kind**: instance method of [<code>Options</code>](#Options)  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab object |

<a name="Options+master"></a>

### options.master() ⇒ [<code>clObject</code>](#clObject)
Get master object

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: [<code>clObject</code>](#clObject) - Master Canvas Lab object  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  
<a name="Range"></a>

## Range
{Object} Range                              Range object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum range |
| max | <code>number</code> | Maximum range |
| value | <code>number</code> | Current value |


* [Range](#Range)
    * [new Range()](#new_Range_new)
    * [.min(value)](#Range+min)
    * [.min()](#Range+min) ⇒ <code>number</code>
    * [.max(value)](#Range+max)
    * [.max()](#Range+max) ⇒ <code>number</code>
    * [.value(value)](#Range+value)
    * [.value()](#Range+value) ⇒ <code>number</code>

<a name="new_Range_new"></a>

### new Range()
Create a Range object

<a name="Range+min"></a>

### range.min(value)
Set min

**Kind**: instance method of [<code>Range</code>](#Range)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Min of object |

<a name="Range+min"></a>

### range.min() ⇒ <code>number</code>
Get min

**Kind**: instance method of [<code>Range</code>](#Range)  
**Returns**: <code>number</code> - Min of object  
**Access**: public  
<a name="Range+max"></a>

### range.max(value)
Set max

**Kind**: instance method of [<code>Range</code>](#Range)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Max of object |

<a name="Range+max"></a>

### range.max() ⇒ <code>number</code>
Get max

**Kind**: instance method of [<code>Range</code>](#Range)  
**Returns**: <code>number</code> - Max of object  
**Access**: public  
<a name="Range+value"></a>

### range.value(value)
Set value

**Kind**: instance method of [<code>Range</code>](#Range)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Value of object |

<a name="Range+value"></a>

### range.value() ⇒ <code>number</code>
Get value

**Kind**: instance method of [<code>Range</code>](#Range)  
**Returns**: <code>number</code> - Value of object  
**Access**: public  
<a name="Anchor"></a>

## Anchor
{Object} Anchor                             Anchor object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| align | <code>string</code> | Anchor alignment |


* [Anchor](#Anchor)
    * [.point(point)](#Anchor+point)
    * [.point()](#Anchor+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Anchor+x)
    * [.x()](#Anchor+x) ⇒ <code>number</code>
    * [.y(value)](#Anchor+y)
    * [.y()](#Anchor+y) ⇒ <code>number</code>
    * [.align(value)](#Anchor+align)
    * [.align()](#Anchor+align) ⇒ <code>string</code>

<a name="Anchor+point"></a>

### anchor.point(point)
Set point

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |

<a name="Anchor+point"></a>

### anchor.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: [<code>Point</code>](#Point) - X & Y axis coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Anchor+x"></a>

### anchor.x(value)
Set x-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Anchor+x"></a>

### anchor.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Anchor+y"></a>

### anchor.y(value)
Set y-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Anchor+y"></a>

### anchor.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Anchor+align"></a>

### anchor.align(value)
Set anchor alignment

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="Anchor+align"></a>

### anchor.align() ⇒ <code>string</code>
Get anchor alignment

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>string</code> - Anchor alignment  
**Read only**: true  
<a name="Angle"></a>

## Angle
{Object}  Angle                             Angle properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | The start of the angle, in radians; measured from the positive x-axis |
| [end] | <code>number</code> | <code>360</code> | The end of the angle, in radians; measured from the positive x-axis |
| [clockwise] | <code>boolean</code> | <code>true</code> | Path arc clockwise |


* [Angle](#Angle)
    * [new Angle(start, end, clockwise)](#new_Angle_new)
    * [.start(value)](#Angle+start)
    * [.start()](#Angle+start) ⇒ <code>number</code>
    * [.end(value)](#Angle+end)
    * [.end()](#Angle+end) ⇒ <code>number</code>
    * [.clockwise(value)](#Angle+clockwise)
    * [.clockwise()](#Angle+clockwise) ⇒ <code>boolean</code>
    * [.startInRadians()](#Angle+startInRadians) ⇒ <code>number</code>
    * [.endInRadians()](#Angle+endInRadians) ⇒ <code>number</code>

<a name="new_Angle_new"></a>

### new Angle(start, end, clockwise)
Create an angle


| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | The angle at which the arc starts in degrees, measured from the positive x-axis |
| end | <code>number</code> | The angle at which the arc ends in degrees, measured from the positive x-axis |
| clockwise | <code>boolean</code> | Draws the arc clockwise between the start and end angles |

<a name="Angle+start"></a>

### angle.start(value)
Set start angle

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Start angle; in degrees |

<a name="Angle+start"></a>

### angle.start() ⇒ <code>number</code>
Get start angle

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - Start value; in degrees  
**Read only**: true  
<a name="Angle+end"></a>

### angle.end(value)
Set end angle

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | End angle; in degrees |

<a name="Angle+end"></a>

### angle.end() ⇒ <code>number</code>
Get end angle

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - End angle; in degrees  
**Read only**: true  
<a name="Angle+clockwise"></a>

### angle.clockwise(value)
Set clockwise

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Clockwise; true | false |

<a name="Angle+clockwise"></a>

### angle.clockwise() ⇒ <code>boolean</code>
Get clockwise

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>boolean</code> - Clockwise; true | false  
**Read only**: true  
<a name="Angle+startInRadians"></a>

### angle.startInRadians() ⇒ <code>number</code>
Get start angle in radians

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - Start value; to radians  
**Read only**: true  
<a name="Angle+endInRadians"></a>

### angle.endInRadians() ⇒ <code>number</code>
Get end angle in radians

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - End value; in radians  
**Read only**: true  
<a name="Aspect"></a>

## Aspect
{Object} Aspect                             Aspect dimensions of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>number</code> | <code>0</code> | Width |
| [height] | <code>number</code> | <code>0</code> | Height |


* [Aspect](#Aspect)
    * [new Aspect(width, height)](#new_Aspect_new)
    * [.width(value)](#Aspect+width)
    * [.width()](#Aspect+width) ⇒ <code>number</code>
    * [.height(value)](#Aspect+height)
    * [.height()](#Aspect+height) ⇒ <code>number</code>
    * [.offset()](#Aspect+offset) ⇒ [<code>Point</code>](#Point)
    * [.center()](#Aspect+center) ⇒ [<code>Point</code>](#Point)
    * [.heightCenter()](#Aspect+heightCenter) ⇒ <code>number</code>
    * [.widthCenter()](#Aspect+widthCenter) ⇒ <code>number</code>

<a name="new_Aspect_new"></a>

### new Aspect(width, height)
Create an aspect


| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | Width of aspect |
| height | <code>number</code> | Height of aspect |

<a name="Aspect+width"></a>

### aspect.width(value)
Set width

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="Aspect+width"></a>

### aspect.width() ⇒ <code>number</code>
Get width

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="Aspect+height"></a>

### aspect.height(value)
Set height

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="Aspect+height"></a>

### aspect.height() ⇒ <code>number</code>
Get height

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
<a name="Aspect+offset"></a>

### aspect.offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Returns**: [<code>Point</code>](#Point) - Aspect offset  
**Read only**: true  
<a name="Aspect+center"></a>

### aspect.center() ⇒ [<code>Point</code>](#Point)
Get center of aspect

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Returns**: [<code>Point</code>](#Point) - Center point of this aspect  
**Read only**: true  
<a name="Aspect+heightCenter"></a>

### aspect.heightCenter() ⇒ <code>number</code>
Get center of height

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Center of height  
**Read only**: true  
<a name="Aspect+widthCenter"></a>

### aspect.widthCenter() ⇒ <code>number</code>
Get center of width

**Kind**: instance method of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Center of with  
**Read only**: true  
<a name="ControlPoints"></a>

## ControlPoints
{Object} ControlPoints                      Defines the shape of a bezier curve

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| p0 | <code>number</code> | Control point one |
| p1 | <code>number</code> | Control point two |
| p2 | <code>number</code> | Control point three |
| p3 | <code>number</code> | Control point four |


* [ControlPoints](#ControlPoints)
    * [new ControlPoints(p0, p1, p2, p3)](#new_ControlPoints_new)
    * [.p0(value)](#ControlPoints+p0)
    * [.p0()](#ControlPoints+p0) ⇒ <code>number</code>
    * [.p1(value)](#ControlPoints+p1)
    * [.p1()](#ControlPoints+p1) ⇒ <code>number</code>
    * [.p2(value)](#ControlPoints+p2)
    * [.p2()](#ControlPoints+p2) ⇒ <code>number</code>
    * [.p3(value)](#ControlPoints+p3)
    * [.p3()](#ControlPoints+p3) ⇒ <code>number</code>
    * [.points(value)](#ControlPoints+points)
    * [.points()](#ControlPoints+points) ⇒ <code>number</code>

<a name="new_ControlPoints_new"></a>

### new ControlPoints(p0, p1, p2, p3)
Create control points


| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>number</code> | Control point one |
| p1 | <code>number</code> | Control point two |
| p2 | <code>number</code> | Control point three |
| p3 | <code>number</code> | Control point four |

<a name="ControlPoints+p0"></a>

### controlPoints.p0(value)
Set control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point one |

<a name="ControlPoints+p0"></a>

### controlPoints.p0() ⇒ <code>number</code>
Get control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: <code>number</code> - Control point one  
**Read only**: true  
<a name="ControlPoints+p1"></a>

### controlPoints.p1(value)
Set control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point two |

<a name="ControlPoints+p1"></a>

### controlPoints.p1() ⇒ <code>number</code>
Get control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: <code>number</code> - Control point two  
**Read only**: true  
<a name="ControlPoints+p2"></a>

### controlPoints.p2(value)
Set control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point three |

<a name="ControlPoints+p2"></a>

### controlPoints.p2() ⇒ <code>number</code>
Get control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: <code>number</code> - Control point three  
**Read only**: true  
<a name="ControlPoints+p3"></a>

### controlPoints.p3(value)
Set control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point four |

<a name="ControlPoints+p3"></a>

### controlPoints.p3() ⇒ <code>number</code>
Get control point one

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: <code>number</code> - Control point four  
**Read only**: true  
<a name="ControlPoints+points"></a>

### controlPoints.points(value)
Set points

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Points of object |

<a name="ControlPoints+points"></a>

### controlPoints.points() ⇒ <code>number</code>
Get points

**Kind**: instance method of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: <code>number</code> - Points of object  
**Access**: public  
<a name="Font"></a>

## Font
{Object} Font                               Font base class for text objects

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | Font type or face; typography name |
| [size] | <code>number</code> | <code>24</code> | Size of font; in pixels |
| [weight] | <code>string</code> | <code>&quot;&#x27;normal&#x27;&quot;</code> | Weight of font |
| maxWidth | <code>number</code> |  | Font's maximum width |
| offset | [<code>Point</code>](#Point) |  | Point offset coordinates |


* [Font](#Font)
    * [.type(value)](#Font+type)
    * [.type()](#Font+type) ⇒ <code>string</code>
    * [.size(value)](#Font+size)
    * [.size()](#Font+size) ⇒ <code>number</code>
    * [.weight(value)](#Font+weight)
    * [.weight()](#Font+weight) ⇒ <code>number</code>
    * [.maxWidth(value)](#Font+maxWidth)
    * [.maxWidth()](#Font+maxWidth) ⇒ <code>number</code>
    * [.offset()](#Font+offset) ⇒ [<code>Point</code>](#Point)
    * [.font(value)](#Font+font)
    * [.font()](#Font+font) ⇒ <code>string</code>

<a name="Font+type"></a>

### font.type(value)
Set font type

**Kind**: instance method of [<code>Font</code>](#Font)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Type face; typography name |

<a name="Font+type"></a>

### font.type() ⇒ <code>string</code>
Get type

**Kind**: instance method of [<code>Font</code>](#Font)  
**Returns**: <code>string</code> - Type face; typography name  
**Read only**: true  
<a name="Font+size"></a>

### font.size(value)
Set font size

**Kind**: instance method of [<code>Font</code>](#Font)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font size |

<a name="Font+size"></a>

### font.size() ⇒ <code>number</code>
Get font size

**Kind**: instance method of [<code>Font</code>](#Font)  
**Returns**: <code>number</code> - Font size  
**Read only**: true  
<a name="Font+weight"></a>

### font.weight(value)
Set font weight

**Kind**: instance method of [<code>Font</code>](#Font)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font weight |

<a name="Font+weight"></a>

### font.weight() ⇒ <code>number</code>
Get font weight

**Kind**: instance method of [<code>Font</code>](#Font)  
**Returns**: <code>number</code> - Font weight  
**Read only**: true  
<a name="Font+maxWidth"></a>

### font.maxWidth(value)
Set font's max width

**Kind**: instance method of [<code>Font</code>](#Font)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Max width |

<a name="Font+maxWidth"></a>

### font.maxWidth() ⇒ <code>number</code>
Get font's max width

**Kind**: instance method of [<code>Font</code>](#Font)  
**Returns**: <code>number</code> - Max width  
**Read only**: true  
<a name="Font+offset"></a>

### font.offset() ⇒ [<code>Point</code>](#Point)
Get font's offset

**Kind**: instance method of [<code>Font</code>](#Font)  
**Returns**: [<code>Point</code>](#Point) - Font's offset; ( x, y )  
**Access**: public  
<a name="Font+font"></a>

### font.font(value)
Set font

**Kind**: instance method of [<code>Font</code>](#Font)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS style font property syntax |

<a name="Font+font"></a>

### font.font() ⇒ <code>string</code>
Get font

**Kind**: instance method of [<code>Font</code>](#Font)  
**Returns**: <code>string</code> - CSS style font property syntax  
**Read only**: true  
<a name="Point"></a>

## Point
{Object}  Point                             X & Y coordinates for an object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X - x-axis coordinate |
| [y] | <code>number</code> | <code>0</code> | Y - y-axis coordinate |
| options | [<code>Options</code>](#Options) |  | Ancillary properties |


* [Point](#Point)
    * [new Point(x, y)](#new_Point_new)
    * [.x(value)](#Point+x)
    * [.x()](#Point+x) ⇒ <code>number</code>
    * [.y(value)](#Point+y)
    * [.y()](#Point+y) ⇒ <code>number</code>
    * [.canvas(value)](#Point+canvas)
    * [.canvas()](#Point+canvas) ⇒ <code>string</code>
    * [.options()](#Point+options) ⇒ [<code>Options</code>](#Options)
    * [.center()](#Point+center) ⇒ [<code>Point</code>](#Point)
    * [.drawOptions(offset)](#Point+drawOptions)
    * [.invert()](#Point+invert)
    * [.move(degree, distance)](#Point+move)

<a name="new_Point_new"></a>

### new Point(x, y)
Create a point


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coordinate value |
| y | <code>number</code> | Y coordinate value |

<a name="Point+x"></a>

### point.x(value)
Set x-axis value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Point+x"></a>

### point.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="Point+y"></a>

### point.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Point+y"></a>

### point.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="Point+canvas"></a>

### point.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Point+canvas"></a>

### point.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  
<a name="Point+options"></a>

### point.options() ⇒ [<code>Options</code>](#Options)
Get options

**Kind**: instance method of [<code>Point</code>](#Point)  
**Returns**: [<code>Options</code>](#Options) - Options object  
**Access**: public  
<a name="Point+center"></a>

### point.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Point</code>](#Point)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="Point+drawOptions"></a>

### point.drawOptions(offset)
Draws associated options

**Kind**: instance method of [<code>Point</code>](#Point)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| offset | <code>number</code> | <code>20</code> | Offset of drawable options |

<a name="Point+invert"></a>

### point.invert()
Invert x & y coordinate values

**Kind**: instance method of [<code>Point</code>](#Point)  
**Access**: public  
<a name="Point+move"></a>

### point.move(degree, distance)
Move this object

**Kind**: instance method of [<code>Point</code>](#Point)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | Direction to move; in degrees |
| distance | <code>number</code> | Distance to move |

<a name="Stop"></a>

## Stop
{Object} Stop                               Color stop properties for associated array(s)

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>string</code> | <code>&quot;&lt;Rgb&gt;&quot;</code> | Color model & value |
| offset | <code>number</code> |  | Representation of the color stop position; 0 = start, & 1 = end |


* [Stop](#Stop)
    * [new Stop()](#new_Stop_new)
    * [.color(value)](#Stop+color)
    * [.color()](#Stop+color) ⇒ <code>Object</code>
    * [.offset(value)](#Stop+offset)
    * [.offset()](#Stop+offset) ⇒ <code>number</code>

<a name="new_Stop_new"></a>

### new Stop()
Create a color stop

<a name="Stop+color"></a>

### stop.color(value)
Set color value

**Kind**: instance method of [<code>Stop</code>](#Stop)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb, Hsl, Hwb |

<a name="Stop+color"></a>

### stop.color() ⇒ <code>Object</code>
Get color value

**Kind**: instance method of [<code>Stop</code>](#Stop)  
**Returns**: <code>Object</code> - Color model; Rgb, Hsl, Hwb  
**Access**: public  
<a name="Stop+offset"></a>

### stop.offset(value)
Set offset value

**Kind**: instance method of [<code>Stop</code>](#Stop)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Offset value |

<a name="Stop+offset"></a>

### stop.offset() ⇒ <code>number</code>
Get offset value

**Kind**: instance method of [<code>Stop</code>](#Stop)  
**Returns**: <code>number</code> - Offset value  
**Read only**: true  
<a name="Conic"></a>

## Conic
{Object}       Conic                        Conic gradient object type and properties

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| angle | <code>number</code> | Angle in radians |
| stops | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Array of color stops |


* [Conic](#Conic)
    * [new Conic()](#new_Conic_new)
    * [.angle(value)](#Conic+angle)
    * [.angle()](#Conic+angle) ⇒ [<code>Angle</code>](#Angle)
    * [.point(value)](#Conic+point)
    * [.point()](#Conic+point) ⇒ [<code>Point</code>](#Point)
    * [.stops(values)](#Conic+stops)
    * [.stops()](#Conic+stops) ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)

<a name="new_Conic_new"></a>

### new Conic()
Create a Conic gradient object type

<a name="Conic+angle"></a>

### conic.angle(value)
Set angle property

**Kind**: instance method of [<code>Conic</code>](#Conic)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Angle</code>](#Angle) | Angle object |

<a name="Conic+angle"></a>

### conic.angle() ⇒ [<code>Angle</code>](#Angle)
Set angle property

**Kind**: instance method of [<code>Conic</code>](#Conic)  
**Returns**: [<code>Angle</code>](#Angle) - Angle object  
**Read only**: true  
<a name="Conic+point"></a>

### conic.point(value)
Set point

**Kind**: instance method of [<code>Conic</code>](#Conic)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Point |

<a name="Conic+point"></a>

### conic.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Conic</code>](#Conic)  
**Returns**: [<code>Point</code>](#Point) - Point  
**Read only**: true  
<a name="Conic+stops"></a>

### conic.stops(values)
Set color stops

**Kind**: instance method of [<code>Conic</code>](#Conic)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| values | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Color stops |

<a name="Conic+stops"></a>

### conic.stops() ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)
Get color stops

**Kind**: instance method of [<code>Conic</code>](#Conic)  
**Returns**: [<code>Array.&lt;Stop&gt;</code>](#Stop) - Color stops  
**Read only**: true  
<a name="Linear"></a>

## Linear
{Object}       Linear                       Linear gradient object type and properties

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#Point) | Start X & Y axis coordinates |
| end | [<code>Point</code>](#Point) | End X & Y axis coordinates |
| stops | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Array of color stops |


* [Linear](#Linear)
    * [new Linear()](#new_Linear_new)
    * [.start(value)](#Linear+start)
    * [.start()](#Linear+start) ⇒ [<code>Point</code>](#Point)
    * [.end(value)](#Linear+end)
    * [.end()](#Linear+end) ⇒ [<code>Point</code>](#Point)
    * [.stops(values)](#Linear+stops)
    * [.stops()](#Linear+stops) ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)

<a name="new_Linear_new"></a>

### new Linear()
Create a Linear gradient object type

<a name="Linear+start"></a>

### linear.start(value)
Set starting point

**Kind**: instance method of [<code>Linear</code>](#Linear)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="Linear+start"></a>

### linear.start() ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: instance method of [<code>Linear</code>](#Linear)  
**Returns**: [<code>Point</code>](#Point) - Starting point  
**Read only**: true  
<a name="Linear+end"></a>

### linear.end(value)
Set ending point

**Kind**: instance method of [<code>Linear</code>](#Linear)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="Linear+end"></a>

### linear.end() ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: instance method of [<code>Linear</code>](#Linear)  
**Returns**: [<code>Point</code>](#Point) - Ending point  
**Read only**: true  
<a name="Linear+stops"></a>

### linear.stops(values)
Set color stops

**Kind**: instance method of [<code>Linear</code>](#Linear)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| values | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Color stops |

<a name="Linear+stops"></a>

### linear.stops() ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)
Get color stops

**Kind**: instance method of [<code>Linear</code>](#Linear)  
**Returns**: [<code>Array.&lt;Stop&gt;</code>](#Stop) - Color stops  
**Read only**: true  
<a name="Radial"></a>

## Radial
{Object}       Radial                       Radial gradient object type and properties

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#Point) | Start X & Y axis coordinates |
| startRadius | <code>Number</code> | Starting radius of linear gradient |
| end | [<code>Point</code>](#Point) | End X & Y axis coordinates |
| endRadius | <code>Number</code> | Ending radius of linear gradient gradient |
| stops | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Array of color stops |


* [Radial](#Radial)
    * [new Radial()](#new_Radial_new)
    * [.start(value)](#Radial+start)
    * [.start()](#Radial+start) ⇒ [<code>Point</code>](#Point)
    * [.startRadius(value)](#Radial+startRadius)
    * [.startRadius()](#Radial+startRadius) ⇒ <code>Number</code>
    * [.end(value)](#Radial+end)
    * [.end()](#Radial+end) ⇒ [<code>Point</code>](#Point)
    * [.endRadius(value)](#Radial+endRadius)
    * [.endRadius()](#Radial+endRadius) ⇒ <code>Number</code>
    * [.stops(value)](#Radial+stops)
    * [.stops()](#Radial+stops) ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)

<a name="new_Radial_new"></a>

### new Radial()
Create a Radial gradient object type and properties

<a name="Radial+start"></a>

### radial.start(value)
Set starting point

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="Radial+start"></a>

### radial.start() ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Returns**: [<code>Point</code>](#Point) - Starting point  
**Read only**: true  
<a name="Radial+startRadius"></a>

### radial.startRadius(value)
Set starting radius

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Starting radius |

<a name="Radial+startRadius"></a>

### radial.startRadius() ⇒ <code>Number</code>
Set starting radius

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Returns**: <code>Number</code> - Starting radius  
**Read only**: true  
<a name="Radial+end"></a>

### radial.end(value)
Set ending point

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="Radial+end"></a>

### radial.end() ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Returns**: [<code>Point</code>](#Point) - Ending point  
**Read only**: true  
<a name="Radial+endRadius"></a>

### radial.endRadius(value)
Set ending radius

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Ending radius |

<a name="Radial+endRadius"></a>

### radial.endRadius() ⇒ <code>Number</code>
Set ending radius

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Returns**: <code>Number</code> - Ending radius  
**Read only**: true  
<a name="Radial+stops"></a>

### radial.stops(value)
Set color stops

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Color stops |

<a name="Radial+stops"></a>

### radial.stops() ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)
Get color stops

**Kind**: instance method of [<code>Radial</code>](#Radial)  
**Returns**: [<code>Array.&lt;Stop&gt;</code>](#Stop) - Color stops  
**Read only**: true  
<a name="Fill"></a>

## Fill
{Object}  Fill                              Fill container for various fill types

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Fill type; solid | linear | radial | conic | pattern |
| gradient | <code>Object</code> |  | Gradient object; Linear | Radial | Conic |
| pattern | <code>Pattern</code> |  | Pattern fill object |


* [Fill](#Fill)
    * [new Fill([color], [type], gradient)](#new_Fill_new)
    * [.color(value)](#Fill+color)
    * [.color()](#Fill+color) ⇒ <code>Object</code>
    * [.type(value)](#Fill+type)
    * [.type()](#Fill+type) ⇒ <code>string</code>
    * [.gradient(value)](#Fill+gradient)
    * [.gradient()](#Fill+gradient) ⇒ <code>Object</code>
    * [.pattern(value)](#Fill+pattern)
    * [.pattern()](#Fill+pattern) ⇒ <code>Pattern</code>
    * [.repetition(value)](#Fill+repetition)
    * [.repetition()](#Fill+repetition) ⇒ <code>string</code>

<a name="new_Fill_new"></a>

### new Fill([color], [type], gradient)
Create a fill type


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Fill type |
| gradient | <code>Object</code> |  | Gradient object |

<a name="Fill+color"></a>

### fill.color(value)
Set color type

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb |

<a name="Fill+color"></a>

### fill.color() ⇒ <code>Object</code>
Get color type

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Returns**: <code>Object</code> - Color model; Rgb  
**Read only**: true  
<a name="Fill+type"></a>

### fill.type(value)
Set type value

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Fill type value |

<a name="Fill+type"></a>

### fill.type() ⇒ <code>string</code>
Get type value

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Returns**: <code>string</code> - Fill type value  
**Read only**: true  
<a name="Fill+gradient"></a>

### fill.gradient(value)
Set gradient gradient properties

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Gradient object & properties |

<a name="Fill+gradient"></a>

### fill.gradient() ⇒ <code>Object</code>
Get gradient gradient properties

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Returns**: <code>Object</code> - Gradient object & properties  
**Read only**: true  
<a name="Fill+pattern"></a>

### fill.pattern(value)
Sets pattern property value

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Path of image to pattern |

<a name="Fill+pattern"></a>

### fill.pattern() ⇒ <code>Pattern</code>
Gets pattern property value

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Returns**: <code>Pattern</code> - Pattern fill object  
**Read only**: true  
<a name="Fill+repetition"></a>

### fill.repetition(value)
Sets repetition property value

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Repetition property value |

<a name="Fill+repetition"></a>

### fill.repetition() ⇒ <code>string</code>
Gets repetition property value

**Kind**: instance method of [<code>Fill</code>](#Fill)  
**Returns**: <code>string</code> - Repetition property value  
**Read only**: true  
<a name="Shadow"></a>

## Shadow
{Object} Shadow                             Shadow of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | RGB color value; r, g, b |
| [blur] | <code>number</code> | <code>3</code> | Blur strength |
| offset | [<code>Point</code>](#Point) |  | Point offset coordinates |


* [Shadow](#Shadow)
    * [new Shadow(color, blur, offset)](#new_Shadow_new)
    * [.color(value)](#Shadow+color)
    * [.color()](#Shadow+color) ⇒ <code>Object</code>
    * [.blur(blur)](#Shadow+blur)
    * [.blur()](#Shadow+blur) ⇒ <code>number</code>
    * [.offset(value)](#Shadow+offset)
    * [.offset()](#Shadow+offset) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Shadow+x)
    * [.x()](#Shadow+x) ⇒ <code>number</code>
    * [.y(value)](#Shadow+y)
    * [.y()](#Shadow+y) ⇒ <code>number</code>

<a name="new_Shadow_new"></a>

### new Shadow(color, blur, offset)
Create a shadow


| Param | Type | Description |
| --- | --- | --- |
| color | <code>Object</code> | RGB color value |
| blur | <code>number</code> | Shadow blur value |
| offset | [<code>Point</code>](#Point) | Shadow offset |

<a name="Shadow+color"></a>

### shadow.color(value)
Set color value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb, Hsl, Hwb |

<a name="Shadow+color"></a>

### shadow.color() ⇒ <code>Object</code>
Get color value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>Object</code> - Color model; Rgb, Hsl, Hwb  
**Access**: public  
<a name="Shadow+blur"></a>

### shadow.blur(blur)
Set blur value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blur | <code>number</code> | Blur value |

<a name="Shadow+blur"></a>

### shadow.blur() ⇒ <code>number</code>
Get blur value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - Blur value  
**Read only**: true  
<a name="Shadow+offset"></a>

### shadow.offset(value)
Set offset

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  
**See**: [offset](#PROPERTY_BLOCKS.individual.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="Shadow+offset"></a>

### shadow.offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Access**: public  
**See**: [offset](#PROPERTY_BLOCKS.individual.offset)  
<a name="Shadow+x"></a>

### shadow.x(value)
Set x-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  
**See**: [offsetX](#PROPERTY_BLOCKS.individual.offsetX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Shadow+x"></a>

### shadow.x() ⇒ <code>number</code>
Get x-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [offsetX](#PROPERTY_BLOCKS.individual.offsetX)  
<a name="Shadow+y"></a>

### shadow.y(value)
Set the y-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  
**See**: [offsetY](#PROPERTY_BLOCKS.individual.offsetY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Shadow+y"></a>

### shadow.y() ⇒ <code>number</code>
Get y-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [offsetY](#PROPERTY_BLOCKS.individual.offsetY)  
<a name="Stroke"></a>

## Stroke
{Object}   Stroke                           Stroke properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Stroke type; 'solid' || 'dashed' |
| [segments] | <code>Array.&lt;number&gt;</code> | <code>[5, 5]</code> | Dashed line segment distance(s) |
| [width] | <code>number</code> | <code>2</code> | Thickness of stroke |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |


* [Stroke](#Stroke)
    * [new Stroke(color, type, segments, alpha, width)](#new_Stroke_new)
    * [.type(value)](#Stroke+type)
    * [.type()](#Stroke+type) ⇒ <code>string</code>
    * [.segments(value)](#Stroke+segments)
    * [.segments()](#Stroke+segments) ⇒ <code>Array.&lt;number&gt;</code>
    * [.color(value)](#Stroke+color)
    * [.color()](#Stroke+color) ⇒ [<code>Rgb</code>](#Rgb)
    * [.width(value)](#Stroke+width)
    * [.width()](#Stroke+width) ⇒ <code>number</code>

<a name="new_Stroke_new"></a>

### new Stroke(color, type, segments, alpha, width)
Create a stroke


| Param | Type | Description |
| --- | --- | --- |
| color | <code>Object</code> | RGB color value |
| type | <code>string</code> | Stroke type |
| segments | <code>Array.&lt;number&gt;</code> | Dashed line segment distance(s) |
| alpha | <code>number</code> | Alpha value; number/decimal |
| width | <code>number</code> | Thickness of stroke |

<a name="Stroke+type"></a>

### stroke.type(value)
Set type

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Stroke type: 'solid' || 'dashed' |

<a name="Stroke+type"></a>

### stroke.type() ⇒ <code>string</code>
Get type

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>string</code> - Stroke type: 'solid' || 'dashed'  
**Read only**: true  
<a name="Stroke+segments"></a>

### stroke.segments(value)
Set segment value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array.&lt;number&gt;</code> | Dashed line segment distance(s) |

<a name="Stroke+segments"></a>

### stroke.segments() ⇒ <code>Array.&lt;number&gt;</code>
Get segment value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>Array.&lt;number&gt;</code> - Dashed line segment distance(s)  
**Read only**: true  
<a name="Stroke+color"></a>

### stroke.color(value)
Set color value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Rgb</code>](#Rgb) | Color model |

<a name="Stroke+color"></a>

### stroke.color() ⇒ [<code>Rgb</code>](#Rgb)
Get color value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: [<code>Rgb</code>](#Rgb) - Color model  
**Access**: public  
<a name="Stroke+width"></a>

### stroke.width(value)
Set width value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Thickness of stroke |

<a name="Stroke+width"></a>

### stroke.width() ⇒ <code>number</code>
Get width value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>number</code> - Thickness of stroke  
**Read only**: true  
<a name="OptionsCollection"></a>

## OptionsCollection
{Object}  OptionsCollection                 Options for shapes, lines, and groups

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [shadow] | <code>boolean</code> | <code>false</code> | Display shadow |
| [border] | <code>boolean</code> | <code>false</code> | Display border |
| [axis] | <code>boolean</code> | <code>false</code> | Display axis |
| [points] | <code>boolean</code> | <code>false</code> | Display points |
| [coordinates] | <code>boolean</code> | <code>false</code> | Display coordinates |
| [controlPoints] | <code>boolean</code> | <code>false</code> | Display control points |
| [shadow] | <code>boolean</code> | <code>false</code> | Display shadow |


* [OptionsCollection](#OptionsCollection)
    * [new OptionsCollection(shadow, border, axis, points, coordinates)](#new_OptionsCollection_new)
    * [.shadow(value)](#OptionsCollection+shadow)
    * [.shadow()](#OptionsCollection+shadow) ⇒ <code>boolean</code>
    * [.border(value)](#OptionsCollection+border)
    * [.border()](#OptionsCollection+border) ⇒ <code>boolean</code>
    * [.axis(value)](#OptionsCollection+axis)
    * [.axis()](#OptionsCollection+axis) ⇒ <code>boolean</code>
    * [.points(value)](#OptionsCollection+points)
    * [.points()](#OptionsCollection+points) ⇒ <code>boolean</code>
    * [.coordinates(value)](#OptionsCollection+coordinates)
    * [.coordinates()](#OptionsCollection+coordinates) ⇒ <code>boolean</code>
    * [.controlPoints(value)](#OptionsCollection+controlPoints)
    * [.controlPoints()](#OptionsCollection+controlPoints) ⇒ <code>boolean</code>

<a name="new_OptionsCollection_new"></a>

### new OptionsCollection(shadow, border, axis, points, coordinates)
Create an options collection


| Param | Type | Description |
| --- | --- | --- |
| shadow | <code>boolean</code> | Show shadow |
| border | <code>boolean</code> | Show border |
| axis | <code>boolean</code> | Show axis |
| points | <code>boolean</code> | Show points |
| coordinates | <code>boolean</code> | Show coordinates |

<a name="OptionsCollection+shadow"></a>

### optionsCollection.shadow(value)
Set shadow value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Shadow; true | false |

<a name="OptionsCollection+shadow"></a>

### optionsCollection.shadow() ⇒ <code>boolean</code>
Get shadow value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Shadow; true | false  
**Read only**: true  
<a name="OptionsCollection+border"></a>

### optionsCollection.border(value)
Set border value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Border; true | false |

<a name="OptionsCollection+border"></a>

### optionsCollection.border() ⇒ <code>boolean</code>
Get border value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Border; true | false  
**Read only**: true  
<a name="OptionsCollection+axis"></a>

### optionsCollection.axis(value)
Set axis value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Axis; true | false |

<a name="OptionsCollection+axis"></a>

### optionsCollection.axis() ⇒ <code>boolean</code>
Get axis value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Axis; true | false  
**Read only**: true  
<a name="OptionsCollection+points"></a>

### optionsCollection.points(value)
Set points value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Points; true | false |

<a name="OptionsCollection+points"></a>

### optionsCollection.points() ⇒ <code>boolean</code>
Get points value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Points; true | false  
**Read only**: true  
<a name="OptionsCollection+coordinates"></a>

### optionsCollection.coordinates(value)
Set coordinates value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Coordinates; true | false |

<a name="OptionsCollection+coordinates"></a>

### optionsCollection.coordinates() ⇒ <code>boolean</code>
Get coordinates value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Coordinates; true | false  
**Read only**: true  
<a name="OptionsCollection+controlPoints"></a>

### optionsCollection.controlPoints(value)
Set control points value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Control points; true | false |

<a name="OptionsCollection+controlPoints"></a>

### optionsCollection.controlPoints() ⇒ <code>boolean</code>
Get control points value

**Kind**: instance method of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Control points; true | false  
**Read only**: true  
<a name="PointCollection"></a>

## PointCollection
{Object}            PointCollection         X & Y coordinates for an object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>number</code> | <code>0</code> | X - x-axis coordinate |
| [y] | <code>number</code> | <code>0</code> | Y - y-axis coordinate |
| options | [<code>OptionsCollection</code>](#OptionsCollection) |  | Ancillary properties |


* [PointCollection](#PointCollection)
    * [new PointCollection()](#new_PointCollection_new)
    * [.x(value)](#PointCollection+x)
    * [.x()](#PointCollection+x) ⇒ <code>number</code>
    * [.y(value)](#PointCollection+y)
    * [.y()](#PointCollection+y) ⇒ <code>number</code>
    * [.options()](#PointCollection+options) ⇒ [<code>OptionsCollection</code>](#OptionsCollection)
    * [.invert()](#PointCollection+invert)

<a name="new_PointCollection_new"></a>

### new PointCollection()
Create a point collection

<a name="PointCollection+x"></a>

### pointCollection.x(value)
Set x-axis value

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="PointCollection+x"></a>

### pointCollection.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="PointCollection+y"></a>

### pointCollection.y(value)
Set the y-axis value

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="PointCollection+y"></a>

### pointCollection.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="PointCollection+options"></a>

### pointCollection.options() ⇒ [<code>OptionsCollection</code>](#OptionsCollection)
Get options

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
**Returns**: [<code>OptionsCollection</code>](#OptionsCollection) - Options collection object  
**Access**: public  
<a name="PointCollection+invert"></a>

### pointCollection.invert()
Invert x & y coordinate values

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
**Access**: public  
<a name="ShadowCollection"></a>

## ShadowCollection
{Object} ShadowCollection                   Shadow of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| blur | <code>number</code> |  | Blur strength |
| offset | [<code>Point</code>](#Point) |  | Point offset coordinates |


* [ShadowCollection](#ShadowCollection)
    * [new ShadowCollection()](#new_ShadowCollection_new)
    * [.color(value)](#ShadowCollection+color)
    * [.color()](#ShadowCollection+color) ⇒ <code>string</code>
    * [.blur(blur)](#ShadowCollection+blur)
    * [.blur()](#ShadowCollection+blur) ⇒ <code>number</code>
    * [.offset(value)](#ShadowCollection+offset)
    * [.offset()](#ShadowCollection+offset) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#ShadowCollection+x)
    * [.x()](#ShadowCollection+x) ⇒ <code>number</code>
    * [.y(value)](#ShadowCollection+y)
    * [.y()](#ShadowCollection+y) ⇒ <code>number</code>

<a name="new_ShadowCollection_new"></a>

### new ShadowCollection()
Create a shadow collection

<a name="ShadowCollection+color"></a>

### shadowCollection.color(value)
Set color value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="ShadowCollection+color"></a>

### shadowCollection.color() ⇒ <code>string</code>
Get color value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>string</code> - RGB color value  
**Access**: public  
<a name="ShadowCollection+blur"></a>

### shadowCollection.blur(blur)
Set blur value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blur | <code>number</code> | Blur value |

<a name="ShadowCollection+blur"></a>

### shadowCollection.blur() ⇒ <code>number</code>
Get blur value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - Blur value  
**Read only**: true  
<a name="ShadowCollection+offset"></a>

### shadowCollection.offset(value)
Set offset

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="ShadowCollection+offset"></a>

### shadowCollection.offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Access**: public  
<a name="ShadowCollection+x"></a>

### shadowCollection.x(value)
Set x-axis offset value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="ShadowCollection+x"></a>

### shadowCollection.x() ⇒ <code>number</code>
Get x-axis offset value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="ShadowCollection+y"></a>

### shadowCollection.y(value)
Set the y-axis offset value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="ShadowCollection+y"></a>

### shadowCollection.y() ⇒ <code>number</code>
Get y-axis offset value

**Kind**: instance method of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="StrokeCollection"></a>

## StrokeCollection
{Object}   StrokeCollection                 Stroke properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Stroke type; solid | dashed |
| [segments] | <code>Array.&lt;number&gt;</code> | <code>[5, 5]</code> | Dashed line segment distance(s) |
| [alpha] | <code>number</code> | <code>1</code> | Alpha (transparency); number/decimal |
| [width] | <code>number</code> | <code>2</code> | Thickness of stroke |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |


* [StrokeCollection](#StrokeCollection)
    * [new StrokeCollection()](#new_StrokeCollection_new)
    * [.color(value)](#StrokeCollection+color)
    * [.color()](#StrokeCollection+color) ⇒ <code>string</code>
    * [.type(value)](#StrokeCollection+type)
    * [.type()](#StrokeCollection+type) ⇒ <code>number</code>
    * [.segments(value)](#StrokeCollection+segments)
    * [.segments()](#StrokeCollection+segments) ⇒ <code>Array</code>
    * [.width(value)](#StrokeCollection+width)
    * [.width()](#StrokeCollection+width) ⇒ <code>number</code>
    * [.master(value)](#StrokeCollection+master)
    * [.master()](#StrokeCollection+master) ⇒ [<code>clObject</code>](#clObject)

<a name="new_StrokeCollection_new"></a>

### new StrokeCollection()
Create a stroke collection

<a name="StrokeCollection+color"></a>

### strokeCollection.color(value)
Set color value

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="StrokeCollection+color"></a>

### strokeCollection.color() ⇒ <code>string</code>
Get color value

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>string</code> - RGB color value  
**Access**: public  
<a name="StrokeCollection+type"></a>

### strokeCollection.type(value)
Set type

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Type: (0) Solid or (1) Dashed |

<a name="StrokeCollection+type"></a>

### strokeCollection.type() ⇒ <code>number</code>
Get type

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>number</code> - Type: (0) Solid or (1) Dashed  
**Read only**: true  
<a name="StrokeCollection+segments"></a>

### strokeCollection.segments(value)
Set segment value

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Dashed line segment distance(s) |

<a name="StrokeCollection+segments"></a>

### strokeCollection.segments() ⇒ <code>Array</code>
Get segment value

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>Array</code> - Dashed line segment distance(s)  
**Read only**: true  
<a name="StrokeCollection+width"></a>

### strokeCollection.width(value)
Set width value

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Thickness of stroke |

<a name="StrokeCollection+width"></a>

### strokeCollection.width() ⇒ <code>number</code>
Get width value

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>number</code> - Thickness of stroke  
**Read only**: true  
<a name="StrokeCollection+master"></a>

### strokeCollection.master(value)
Set master object

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab object |

<a name="StrokeCollection+master"></a>

### strokeCollection.master() ⇒ [<code>clObject</code>](#clObject)
Get master object

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: [<code>clObject</code>](#clObject) - Master Canvas Lab object  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  
<a name="Position"></a>

## Position
{Object}            Position 				Position object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| origin | [<code>Point</code>](#Point) | Origin X & Y coordinates for an object's position |
| start | [<code>Point</code>](#Point) | Origin start X & Y coordinates for a Line object's position |
| end | [<code>Point</code>](#Point) | Origin end X & Y coordinates for a Line object's position |
| distance | <code>number</code> | Distance from origin to destination |
| direction | <code>number</code> | Direction to move towards destination; in degrees |
| rotation | <code>number</code> | Amount object (including canvas) has been rotated |
| aspect | [<code>Aspect</code>](#Aspect) | Original aspect value(s) for a rectangular object |
| controlPoints | [<code>ControlPoints</code>](#ControlPoints) | Original control point values for a Line object |
| fontSize | <code>number</code> | Original fontSize value for a Text object |
| master | [<code>clObject</code>](#clObject) | Master object |


* [Position](#Position)
    * [new Position()](#new_Position_new)
    * [.origin(value)](#Position+origin)
    * [.origin()](#Position+origin) ⇒ [<code>Point</code>](#Point)
    * [.start(value)](#Position+start)
    * [.start()](#Position+start) ⇒ <code>number</code>
    * [.end(value)](#Position+end)
    * [.end()](#Position+end) ⇒ <code>number</code>
    * [.distance(value)](#Position+distance)
    * [.distance()](#Position+distance) ⇒ <code>number</code>
    * [.startDistance(value)](#Position+startDistance)
    * [.startDistance()](#Position+startDistance) ⇒ <code>number</code>
    * [.endDistance(value)](#Position+endDistance)
    * [.endDistance()](#Position+endDistance) ⇒ <code>number</code>
    * [.direction(value)](#Position+direction)
    * [.direction()](#Position+direction) ⇒ <code>number</code>
    * [.startDirection(value)](#Position+startDirection)
    * [.startDirection()](#Position+startDirection) ⇒ <code>number</code>
    * [.endDirection(value)](#Position+endDirection)
    * [.endDirection()](#Position+endDirection) ⇒ <code>number</code>
    * [.rotation(value)](#Position+rotation)
    * [.rotation()](#Position+rotation) ⇒ <code>number</code>
    * [.aspect(value)](#Position+aspect)
    * [.aspect()](#Position+aspect) ⇒ <code>number</code>
    * [.width(value)](#Position+width)
    * [.width()](#Position+width) ⇒ <code>number</code>
    * [.height(value)](#Position+height)
    * [.height()](#Position+height) ⇒ <code>number</code>
    * [.controlPoints(value)](#Position+controlPoints)
    * [.controlPoints()](#Position+controlPoints) ⇒ <code>Array.&lt;number&gt;</code>
    * [.fontSize(value)](#Position+fontSize)
    * [.fontSize()](#Position+fontSize) ⇒ <code>number</code>
    * [.master(value)](#Position+master)
    * [.master()](#Position+master) ⇒ [<code>clObject</code>](#clObject)
    * [.stroke(value)](#Position+stroke)
    * [.stroke()](#Position+stroke) ⇒ <code>number</code>
    * [.fill(value)](#Position+fill)
    * [.fill()](#Position+fill) ⇒ <code>number</code>

<a name="new_Position_new"></a>

### new Position()
Create a Position object

<a name="Position+origin"></a>

### position.origin(value)
Set origin

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Position+origin"></a>

### position.origin() ⇒ [<code>Point</code>](#Point)
Get origin

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
<a name="Position+start"></a>

### position.start(value)
Set start

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Start of object |

<a name="Position+start"></a>

### position.start() ⇒ <code>number</code>
Get start

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Start of object  
**Access**: public  
<a name="Position+end"></a>

### position.end(value)
Set end

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | End of object |

<a name="Position+end"></a>

### position.end() ⇒ <code>number</code>
Get end

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - End of object  
**Access**: public  
<a name="Position+distance"></a>

### position.distance(value)
Set distance

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Distance from origin to destination |

<a name="Position+distance"></a>

### position.distance() ⇒ <code>number</code>
Get distance

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Distance from origin to destination  
**Access**: public  
<a name="Position+startDistance"></a>

### position.startDistance(value)
Set startDistance

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | StartDistance of object |

<a name="Position+startDistance"></a>

### position.startDistance() ⇒ <code>number</code>
Get startDistance

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - StartDistance of object  
**Access**: public  
<a name="Position+endDistance"></a>

### position.endDistance(value)
Set endDistance

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | EndDistance of object |

<a name="Position+endDistance"></a>

### position.endDistance() ⇒ <code>number</code>
Get endDistance

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - EndDistance of object  
**Access**: public  
<a name="Position+direction"></a>

### position.direction(value)
Set direction

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Direction in degrees |

<a name="Position+direction"></a>

### position.direction() ⇒ <code>number</code>
Get direction

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Direction in degrees  
**Access**: public  
<a name="Position+startDirection"></a>

### position.startDirection(value)
Set startDirection

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | StartDirection of object |

<a name="Position+startDirection"></a>

### position.startDirection() ⇒ <code>number</code>
Get startDirection

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - StartDirection of object  
**Access**: public  
<a name="Position+endDirection"></a>

### position.endDirection(value)
Set endDirection

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | EndDirection of object |

<a name="Position+endDirection"></a>

### position.endDirection() ⇒ <code>number</code>
Get endDirection

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - EndDirection of object  
**Access**: public  
<a name="Position+rotation"></a>

### position.rotation(value)
Set rotation

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Direction in degrees |

<a name="Position+rotation"></a>

### position.rotation() ⇒ <code>number</code>
Get rotation

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Direction in degrees  
**Access**: public  
<a name="Position+aspect"></a>

### position.aspect(value)
Set aspect

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Aspect of object |

<a name="Position+aspect"></a>

### position.aspect() ⇒ <code>number</code>
Get aspect

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Aspect of object  
**Access**: public  
<a name="Position+width"></a>

### position.width(value)
Set width

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width of object |

<a name="Position+width"></a>

### position.width() ⇒ <code>number</code>
Get width

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Width of object  
**Access**: public  
<a name="Position+height"></a>

### position.height(value)
Set height

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height of object |

<a name="Position+height"></a>

### position.height() ⇒ <code>number</code>
Get height

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Height of object  
**Access**: public  
<a name="Position+controlPoints"></a>

### position.controlPoints(value)
Set controlPoints

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array.&lt;number&gt;</code> | ControlPoints of object |

<a name="Position+controlPoints"></a>

### position.controlPoints() ⇒ <code>Array.&lt;number&gt;</code>
Get controlPoints

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>Array.&lt;number&gt;</code> - ControlPoints of object  
**Access**: public  
<a name="Position+fontSize"></a>

### position.fontSize(value)
Set fontSize

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | FontSize of object |

<a name="Position+fontSize"></a>

### position.fontSize() ⇒ <code>number</code>
Get fontSize

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - FontSize of object  
**Access**: public  
<a name="Position+master"></a>

### position.master(value)
Set master object

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab object |

<a name="Position+master"></a>

### position.master() ⇒ [<code>clObject</code>](#clObject)
Get master object

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: [<code>clObject</code>](#clObject) - Master Canvas Lab object  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  
<a name="Position+stroke"></a>

### position.stroke(value)
Set stroke

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Stroke of object |

<a name="Position+stroke"></a>

### position.stroke() ⇒ <code>number</code>
Get stroke

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Stroke of object  
**Access**: public  
<a name="Position+fill"></a>

### position.fill(value)
Set fill

**Kind**: instance method of [<code>Position</code>](#Position)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Fill of object |

<a name="Position+fill"></a>

### position.fill() ⇒ <code>number</code>
Get fill

**Kind**: instance method of [<code>Position</code>](#Position)  
**Returns**: <code>number</code> - Fill of object  
**Access**: public  
<a name="Circle"></a>

## Circle
{Object}            Circle                  Circle object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| point | [<code>Point</code>](#Point) |  | X & Y axis coordinates |
| [radius] | <code>number</code> \| [<code>Point</code>](#Point) | <code>25</code> | Radius of circle |
| angle | [<code>Angle</code>](#Angle) |  | Angle properties |
| stroke | [<code>Stroke</code>](#Stroke) |  | Stroke properties |
| fill | [<code>Fill</code>](#Fill) |  | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |
| canvas | <code>HTMLCanvasElement</code> |  | 2D canvas context |
| anchor | [<code>Anchor</code>](#Anchor) |  | Anchor properties |
| options | [<code>Options</code>](#Options) |  | Options for this object |
| position | [<code>Position</code>](#Position) |  | Position properties |
| mass | <code>number</code> |  | Mass of object |
| velocity | [<code>Point</code>](#Point) |  | X & Y velocity coordinates |


* [Circle](#Circle)
    * [new Circle()](#new_Circle_new)
    * [.point(value)](#Circle+point)
    * [.point()](#Circle+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Circle+x)
    * [.x()](#Circle+x) ⇒ <code>number</code>
    * [.y(value)](#Circle+y)
    * [.y()](#Circle+y) ⇒ <code>number</code>
    * [.radius(value)](#Circle+radius)
    * [.radius()](#Circle+radius) ⇒ <code>number</code> \| [<code>Point</code>](#Point)
    * [.angle()](#Circle+angle) ⇒ [<code>Angle</code>](#Angle)
    * [.stroke(value)](#Circle+stroke)
    * [.stroke()](#Circle+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill(value)](#Circle+fill)
    * [.fill()](#Circle+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow()](#Circle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Circle+canvas)
    * [.canvas()](#Circle+canvas) ⇒ <code>string</code>
    * [.anchor()](#Circle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Circle+options) ⇒ [<code>Options</code>](#Options)
    * [.position()](#Circle+position) ⇒ [<code>Position</code>](#Position)
    * [.mass(value)](#Circle+mass)
    * [.mass()](#Circle+mass) ⇒ <code>number</code>
    * [.velocity(value)](#Circle+velocity)
    * [.velocity()](#Circle+velocity) ⇒ <code>number</code>
    * [.isThere(circle)](#Circle+isThere) ⇒ <code>boolean</code>
    * [.area()](#Circle+area) ⇒ <code>number</code>
    * [.bounds()](#Circle+bounds) ⇒ <code>Object</code>
    * [.diameter()](#Circle+diameter) ⇒ <code>number</code>
    * [.center()](#Circle+center) ⇒ [<code>Point</code>](#Point)
    * [.circumference()](#Circle+circumference) ⇒ <code>number</code>
    * [.move(degree, distance)](#Circle+move)
    * [.rotate(degree, [anchor], [clear])](#Circle+rotate)
    * [.showCoordinates([offset], [fontSize])](#Circle+showCoordinates)
    * [.draw(canvas)](#Circle+draw)

<a name="new_Circle_new"></a>

### new Circle()
Create a Circle object

<a name="Circle+point"></a>

### circle.point(value)
Set point

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circle+point"></a>

### circle.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Circle+x"></a>

### circle.x(value)
Set x-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circle+x"></a>

### circle.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Circle+y"></a>

### circle.y(value)
Set y-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circle+y"></a>

### circle.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Circle+radius"></a>

### circle.radius(value)
Set radius value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> \| [<code>Point</code>](#Point) | Radius of circle |

<a name="Circle+radius"></a>

### circle.radius() ⇒ <code>number</code> \| [<code>Point</code>](#Point)
Get radius value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> \| [<code>Point</code>](#Point) - Radius of circle  
**Read only**: true  
<a name="Circle+angle"></a>

### circle.angle() ⇒ [<code>Angle</code>](#Angle)
Get angle properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Angle</code>](#Angle) - Angle properties  
**Access**: public  
<a name="Circle+stroke"></a>

### circle.stroke(value)
Set stroke properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Stroke</code>](#Stroke) | Stroke properties |

<a name="Circle+stroke"></a>

### circle.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Circle+fill"></a>

### circle.fill(value)
Set fill properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Fill</code>](#Fill) | Fill properties |

<a name="Circle+fill"></a>

### circle.fill() ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
**Access**: public  
<a name="Circle+shadow"></a>

### circle.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Circle+canvas"></a>

### circle.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [individual.canvas](individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circle+canvas"></a>

### circle.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [individual.canvas](individual.canvas)  
<a name="Circle+anchor"></a>

### circle.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="Circle+options"></a>

### circle.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Circle+position"></a>

### circle.position() ⇒ [<code>Position</code>](#Position)
Get position properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Position</code>](#Position) - Position properties  
**Access**: public  
<a name="Circle+mass"></a>

### circle.mass(value)
Set mass

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Mass of object |

<a name="Circle+mass"></a>

### circle.mass() ⇒ <code>number</code>
Get mass

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Mass of object  
**Access**: public  
<a name="Circle+velocity"></a>

### circle.velocity(value)
Set velocity

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Velocity of object |

<a name="Circle+velocity"></a>

### circle.velocity() ⇒ <code>number</code>
Get velocity

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Velocity of object  
**Access**: public  
<a name="Circle+isThere"></a>

### circle.isThere(circle) ⇒ <code>boolean</code>
Check whether the passed object is already present

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| circle | [<code>Circle</code>](#Circle) | Object to validate |

<a name="Circle+area"></a>

### circle.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
<a name="Circle+bounds"></a>

### circle.bounds() ⇒ <code>Object</code>
Get bounds of object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>Object</code> - Bounds of object  
**Read only**: true  
<a name="Circle+diameter"></a>

### circle.diameter() ⇒ <code>number</code>
Get diameter of circle

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Diameter of circle  
**Read only**: true  
<a name="Circle+center"></a>

### circle.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Point</code>](#Point) - Point coordinates  
**Read only**: true  
<a name="Circle+circumference"></a>

### circle.circumference() ⇒ <code>number</code>
Get circumference of circle

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Circumference of circle  
**Read only**: true  
<a name="Circle+move"></a>

### circle.move(degree, distance)
Move this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [move](#UTILITIES.individual.misc.move)  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | Direction to move; in degrees |
| distance | <code>number</code> | Distance to move |

<a name="Circle+rotate"></a>

### circle.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Circle+showCoordinates"></a>

### circle.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [showCoordinates](#UTILITIES.individual.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Circle+draw"></a>

### circle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Ellipse"></a>

## Ellipse ⇐ [<code>Circle</code>](#Circle)
{Object}            Ellipse                 Ellipse object

**Kind**: global class  
**Extends**: [<code>Circle</code>](#Circle)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| point | [<code>Point</code>](#Point) |  | X & Y axis coordinates |
| [radius] | [<code>Point</code>](#Point) | <code>&lt;Point&lt;20, 30&gt;</code> | Radius of ellipse |
| angle | [<code>Angle</code>](#Angle) |  | Angle properties |
| stroke | [<code>Stroke</code>](#Stroke) |  | Stroke properties |
| fill | [<code>Fill</code>](#Fill) |  | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |
| canvas | <code>HTMLCanvasElement</code> |  | 2D canvas context |
| anchor | [<code>Anchor</code>](#Anchor) |  | Anchor properties |
| options | [<code>Options</code>](#Options) |  | Options for this object |
| position | [<code>Position</code>](#Position) |  | Position properties |


* [Ellipse](#Ellipse) ⇐ [<code>Circle</code>](#Circle)
    * [.radius(value)](#Ellipse+radius)
    * [.radius()](#Ellipse+radius) ⇒ [<code>Point</code>](#Point)
    * [.point(value)](#Circle+point)
    * [.x(value)](#Circle+x)
    * [.y(value)](#Circle+y)
    * [.angle()](#Circle+angle) ⇒ [<code>Angle</code>](#Angle)
    * [.stroke(value)](#Circle+stroke)
    * [.fill(value)](#Circle+fill)
    * [.shadow()](#Circle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Circle+canvas)
    * [.anchor()](#Circle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Circle+options) ⇒ [<code>Options</code>](#Options)
    * [.position()](#Circle+position) ⇒ [<code>Position</code>](#Position)
    * [.mass(value)](#Circle+mass)
    * [.velocity(value)](#Circle+velocity)
    * [.isThere(circle)](#Circle+isThere) ⇒ <code>boolean</code>
    * [.area()](#Circle+area) ⇒ <code>number</code>
    * [.bounds()](#Circle+bounds) ⇒ <code>Object</code>
    * [.diameter()](#Circle+diameter) ⇒ <code>number</code>
    * [.center()](#Circle+center) ⇒ [<code>Point</code>](#Point)
    * [.circumference()](#Circle+circumference) ⇒ <code>number</code>
    * [.move(degree, distance)](#Circle+move)
    * [.rotate(degree, [anchor], [clear])](#Circle+rotate)
    * [.showCoordinates([offset], [fontSize])](#Circle+showCoordinates)
    * [.draw(canvas)](#Circle+draw)

<a name="Ellipse+radius"></a>

### ellipse.radius(value)
Set radius value

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>radius</code>](#Circle+radius)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Radius of circle |

<a name="Ellipse+radius"></a>

### ellipse.radius() ⇒ [<code>Point</code>](#Point)
Get radius value

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>radius</code>](#Circle+radius)  
**Returns**: [<code>Point</code>](#Point) - Radius of circle  
**Read only**: true  
<a name="Circle+point"></a>

### ellipse.point(value)
Set point

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>point</code>](#Circle+point)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circle+x"></a>

### ellipse.x(value)
Set x-axis value

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>x</code>](#Circle+x)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circle+y"></a>

### ellipse.y(value)
Set y-axis value

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>y</code>](#Circle+y)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circle+angle"></a>

### ellipse.angle() ⇒ [<code>Angle</code>](#Angle)
Get angle properties

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: [<code>Angle</code>](#Angle) - Angle properties  
**Access**: public  
<a name="Circle+stroke"></a>

### ellipse.stroke(value)
Set stroke properties

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>stroke</code>](#Circle+stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Stroke</code>](#Stroke) | Stroke properties |

<a name="Circle+fill"></a>

### ellipse.fill(value)
Set fill properties

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>fill</code>](#Circle+fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Fill</code>](#Fill) | Fill properties |

<a name="Circle+shadow"></a>

### ellipse.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Circle+canvas"></a>

### ellipse.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>canvas</code>](#Circle+canvas)  
**Access**: public  
**See**: [individual.canvas](individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circle+anchor"></a>

### ellipse.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="Circle+options"></a>

### ellipse.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Circle+position"></a>

### ellipse.position() ⇒ [<code>Position</code>](#Position)
Get position properties

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: [<code>Position</code>](#Position) - Position properties  
**Access**: public  
<a name="Circle+mass"></a>

### ellipse.mass(value)
Set mass

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>mass</code>](#Circle+mass)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Mass of object |

<a name="Circle+velocity"></a>

### ellipse.velocity(value)
Set velocity

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Overrides**: [<code>velocity</code>](#Circle+velocity)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Velocity of object |

<a name="Circle+isThere"></a>

### ellipse.isThere(circle) ⇒ <code>boolean</code>
Check whether the passed object is already present

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| circle | [<code>Circle</code>](#Circle) | Object to validate |

<a name="Circle+area"></a>

### ellipse.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
<a name="Circle+bounds"></a>

### ellipse.bounds() ⇒ <code>Object</code>
Get bounds of object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: <code>Object</code> - Bounds of object  
**Read only**: true  
<a name="Circle+diameter"></a>

### ellipse.diameter() ⇒ <code>number</code>
Get diameter of circle

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: <code>number</code> - Diameter of circle  
**Read only**: true  
<a name="Circle+center"></a>

### ellipse.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: [<code>Point</code>](#Point) - Point coordinates  
**Read only**: true  
<a name="Circle+circumference"></a>

### ellipse.circumference() ⇒ <code>number</code>
Get circumference of circle

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Returns**: <code>number</code> - Circumference of circle  
**Read only**: true  
<a name="Circle+move"></a>

### ellipse.move(degree, distance)
Move this object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Access**: public  
**See**: [move](#UTILITIES.individual.misc.move)  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | Direction to move; in degrees |
| distance | <code>number</code> | Distance to move |

<a name="Circle+rotate"></a>

### ellipse.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Circle+showCoordinates"></a>

### ellipse.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Access**: public  
**See**: [showCoordinates](#UTILITIES.individual.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Circle+draw"></a>

### ellipse.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Ellipse</code>](#Ellipse)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Line"></a>

## Line
{Object}            Line                    Line object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#Point) |  | Start X & Y axis coordinates |
| end | [<code>Point</code>](#Point) |  | End X & Y axis coordinates |
| stroke | [<code>Stroke</code>](#Stroke) |  | Stroke properties |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |
| [lineCap] | <code>string</code> | <code>&quot;&#x27;round&#x27;&quot;</code> | Line cap's end points shape |
| canvas | <code>HTMLCanvasElement</code> |  | 2D canvas context |
| controlPoints | [<code>ControlPoints</code>](#ControlPoints) |  | Control point properties |
| options | [<code>Options</code>](#Options) |  | Options for this object |
| position | [<code>Position</code>](#Position) |  | Position properties |


* [Line](#Line)
    * [new Line()](#new_Line_new)
    * [.point(value)](#Line+point)
    * [.point()](#Line+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Line+x)
    * [.x()](#Line+x) ⇒ <code>number</code>
    * [.y(value)](#Line+y)
    * [.y()](#Line+y) ⇒ <code>number</code>
    * [.start(value)](#Line+start)
    * [.start()](#Line+start) ⇒ [<code>Point</code>](#Point)
    * [.end(value)](#Line+end)
    * [.end()](#Line+end) ⇒ [<code>Point</code>](#Point)
    * [.stroke(value)](#Line+stroke)
    * [.stroke()](#Line+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Line+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.lineCap(value)](#Line+lineCap)
    * [.lineCap()](#Line+lineCap) ⇒ <code>string</code>
    * [.canvas(value)](#Line+canvas)
    * [.canvas()](#Line+canvas) ⇒ <code>string</code>
    * [.anchor()](#Line+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Line+options) ⇒ [<code>Options</code>](#Options)
    * [.position()](#Line+position) ⇒ [<code>Position</code>](#Position)
    * [.controlPoints()](#Line+controlPoints) ⇒ [<code>ControlPoints</code>](#ControlPoints)
    * [.point(value)](#Line+point)
    * [.point()](#Line+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Line+x)
    * [.x()](#Line+x) ⇒ <code>number</code>
    * [.y(value)](#Line+y)
    * [.y()](#Line+y) ⇒ <code>number</code>
    * [.isThere(line)](#Line+isThere)
    * [.bounds()](#Line+bounds) ⇒ <code>Object</code>
    * [.center()](#Line+center) ⇒ [<code>Point</code>](#Point)
    * [.curve(p0, p1, p2, p3)](#Line+curve)
    * [.drawPoints()](#Line+drawPoints)
    * [.move(degree, distance)](#Line+move)
    * [.rotate(degree, [anchor], [clear])](#Line+rotate)
    * [.showControlPoints([offset], [fontSize])](#Line+showControlPoints)
    * [.showCoordinates([offset], [fontSize])](#Line+showCoordinates)
    * [.draw(canvas)](#Line+draw)

<a name="new_Line_new"></a>

### new Line()
Create a Line object

<a name="Line+point"></a>

### line.point(value)
Set point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Line+point"></a>

### line.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Line+x"></a>

### line.x(value)
Set x-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Line+x"></a>

### line.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Line+y"></a>

### line.y(value)
Set y-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Line+y"></a>

### line.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Line+start"></a>

### line.start(value)
Set starting point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="Line+start"></a>

### line.start() ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Starting point  
**Access**: public  
<a name="Line+end"></a>

### line.end(value)
Set ending point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="Line+end"></a>

### line.end() ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Ending point  
**Access**: public  
<a name="Line+stroke"></a>

### line.stroke(value)
Set stroke properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Stroke</code>](#Stroke) | Stroke properties |

<a name="Line+stroke"></a>

### line.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Line+shadow"></a>

### line.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Line+lineCap"></a>

### line.lineCap(value)
Set line cap

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Line cap |

<a name="Line+lineCap"></a>

### line.lineCap() ⇒ <code>string</code>
Get line cap

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>string</code> - Line cap  
**Read only**: true  
<a name="Line+canvas"></a>

### line.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Line+canvas"></a>

### line.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  
<a name="Line+anchor"></a>

### line.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="Line+options"></a>

### line.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Line+position"></a>

### line.position() ⇒ [<code>Position</code>](#Position)
Get position properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Position</code>](#Position) - Position properties  
**Access**: public  
<a name="Line+controlPoints"></a>

### line.controlPoints() ⇒ [<code>ControlPoints</code>](#ControlPoints)
Get control point properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>ControlPoints</code>](#ControlPoints) - Control points properties  
**Access**: public  
<a name="Line+point"></a>

### line.point(value)
Set point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Line+point"></a>

### line.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
<a name="Line+x"></a>

### line.x(value)
Set x-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Line+x"></a>

### line.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="Line+y"></a>

### line.y(value)
Set y-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Line+y"></a>

### line.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="Line+isThere"></a>

### line.isThere(line)
Check whether the passed object is already present

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| line | [<code>Line</code>](#Line) | Object to validate |

<a name="Line+bounds"></a>

### line.bounds() ⇒ <code>Object</code>
Get bounds of object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>Object</code> - Bounds of object  
**Read only**: true  
<a name="Line+center"></a>

### line.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="Line+curve"></a>

### line.curve(p0, p1, p2, p3)
Set control points for bezier curve

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>number</code> | Control point 0 |
| p1 | <code>number</code> | Control point 1 |
| p2 | <code>number</code> | Control point 2 |
| p3 | <code>number</code> | Control point 3 |

<a name="Line+drawPoints"></a>

### line.drawPoints()
Draws start & end points

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
<a name="Line+move"></a>

### line.move(degree, distance)
Move this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | Direction to move; in degrees |
| distance | <code>number</code> | Distance to move |

<a name="Line+rotate"></a>

### line.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Line+showControlPoints"></a>

### line.showControlPoints([offset], [fontSize])
Show control points for this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of control points y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Control points font size |

<a name="Line+showCoordinates"></a>

### line.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Line+draw"></a>

### line.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Rectangle"></a>

## Rectangle
{Object}            Rectangle               Rectangle object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| round | <code>Array</code> | Rounding properties |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) | Shadow properties |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| options | [<code>Options</code>](#Options) | Options for this object |
| position | [<code>Position</code>](#Position) | Position properties |
| mass | <code>number</code> | Mass of object |
| velocity | [<code>Point</code>](#Point) | X & Y velocity coordinates |


* [Rectangle](#Rectangle)
    * [new Rectangle()](#new_Rectangle_new)
    * [.point(value)](#Rectangle+point)
    * [.point()](#Rectangle+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Rectangle+x)
    * [.x()](#Rectangle+x) ⇒ <code>number</code>
    * [.y(value)](#Rectangle+y)
    * [.y()](#Rectangle+y) ⇒ <code>number</code>
    * [.aspect(value)](#Rectangle+aspect)
    * [.aspect()](#Rectangle+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width(value)](#Rectangle+width)
    * [.width()](#Rectangle+width) ⇒ <code>number</code>
    * [.height(value)](#Rectangle+height)
    * [.height()](#Rectangle+height) ⇒ <code>number</code>
    * [.round(value)](#Rectangle+round)
    * [.round()](#Rectangle+round) ⇒ <code>Array</code>
    * [.stroke(value)](#Rectangle+stroke)
    * [.stroke()](#Rectangle+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill(value)](#Rectangle+fill)
    * [.fill()](#Rectangle+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow()](#Rectangle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Rectangle+canvas)
    * [.canvas()](#Rectangle+canvas) ⇒ <code>string</code>
    * [.anchor()](#Rectangle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Rectangle+options) ⇒ [<code>Options</code>](#Options)
    * [.mass(value)](#Rectangle+mass)
    * [.mass()](#Rectangle+mass) ⇒ <code>number</code>
    * [.velocity(value)](#Rectangle+velocity)
    * [.velocity()](#Rectangle+velocity) ⇒ <code>number</code>
    * [.isThere(rectangle)](#Rectangle+isThere)
    * [.area()](#Rectangle+area) ⇒ <code>number</code>
    * [.center()](#Rectangle+center) ⇒ [<code>Point</code>](#Point)
    * [.fillColorCycle(progress, start, end, [max])](#Rectangle+fillColorCycle)
    * [.gradientColorCycle(progress, start, end, stop, [max])](#Rectangle+gradientColorCycle)
    * [.move(degree, distance, [draw], [clear])](#Rectangle+move)
    * [.perimeter()](#Rectangle+perimeter) ⇒ <code>number</code>
    * [.rotate(degree, [anchor], [clear])](#Rectangle+rotate)
    * [.showCoordinates([offset], [fontSize])](#Rectangle+showCoordinates)
    * [.draw(canvas)](#Rectangle+draw)

<a name="new_Rectangle_new"></a>

### new Rectangle()
Create a Rectangle object

<a name="Rectangle+point"></a>

### rectangle.point(value)
Set point

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangle+point"></a>

### rectangle.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Rectangle+x"></a>

### rectangle.x(value)
Set x-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangle+x"></a>

### rectangle.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Rectangle+y"></a>

### rectangle.y(value)
Set y-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangle+y"></a>

### rectangle.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Rectangle+aspect"></a>

### rectangle.aspect(value)
Set aspect properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Aspect</code>](#Aspect) | Aspect properties |

<a name="Rectangle+aspect"></a>

### rectangle.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Read only**: true  
<a name="Rectangle+width"></a>

### rectangle.width(value)
Set aspect width

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="Rectangle+width"></a>

### rectangle.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="Rectangle+height"></a>

### rectangle.height(value)
Set aspect height

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="Rectangle+height"></a>

### rectangle.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
<a name="Rectangle+round"></a>

### rectangle.round(value)
Set round properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Radii properties |

<a name="Rectangle+round"></a>

### rectangle.round() ⇒ <code>Array</code>
Get round properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>Array</code> - Radii properties  
**Read only**: true  
<a name="Rectangle+stroke"></a>

### rectangle.stroke(value)
Set stroke properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Stroke</code>](#Stroke) | Stroke properties |

<a name="Rectangle+stroke"></a>

### rectangle.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Rectangle+fill"></a>

### rectangle.fill(value)
Get fill properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Fill</code>](#Fill) | Fill properties |

<a name="Rectangle+fill"></a>

### rectangle.fill() ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
**Access**: public  
<a name="Rectangle+shadow"></a>

### rectangle.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Rectangle+canvas"></a>

### rectangle.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangle+canvas"></a>

### rectangle.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  
<a name="Rectangle+anchor"></a>

### rectangle.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="Rectangle+options"></a>

### rectangle.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Rectangle+mass"></a>

### rectangle.mass(value)
Set mass

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Mass of object |

<a name="Rectangle+mass"></a>

### rectangle.mass() ⇒ <code>number</code>
Get mass

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Mass of object  
**Access**: public  
<a name="Rectangle+velocity"></a>

### rectangle.velocity(value)
Set velocity

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Velocity of object |

<a name="Rectangle+velocity"></a>

### rectangle.velocity() ⇒ <code>number</code>
Get velocity

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Velocity of object  
**Access**: public  
<a name="Rectangle+isThere"></a>

### rectangle.isThere(rectangle)
Check whether the passed object is already present

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| rectangle | [<code>Rectangle</code>](#Rectangle) | Object to validate |

<a name="Rectangle+area"></a>

### rectangle.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.individual.area)  
<a name="Rectangle+center"></a>

### rectangle.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.individual.center)  
<a name="Rectangle+fillColorCycle"></a>

### rectangle.fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [fill](#UTILITIES.individual.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Rectangle+gradientColorCycle"></a>

### rectangle.gradientColorCycle(progress, start, end, stop, [max])
Cycle colors for gradient

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [gradient](#UTILITIES.individual.color.cycle.gradient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Rectangle+move"></a>

### rectangle.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [move](#UTILITIES.individual.misc.move)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="Rectangle+perimeter"></a>

### rectangle.perimeter() ⇒ <code>number</code>
Get perimeter

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.individual.center)  
<a name="Rectangle+rotate"></a>

### rectangle.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Rectangle+showCoordinates"></a>

### rectangle.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [showCoordinates](#UTILITIES.individual.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Rectangle+draw"></a>

### rectangle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="RoundedRectangle"></a>

## RoundedRectangle ⇐ [<code>Rectangle</code>](#Rectangle)
{Object}            RoundingRectangle 		RoundingRectangle object

**Kind**: global class  
**Extends**: [<code>Rectangle</code>](#Rectangle)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| point | [<code>Point</code>](#Point) |  | X & Y axis coordinates |
| aspect | [<code>Aspect</code>](#Aspect) |  | Aspect properties |
| [round] | <code>Array</code> | <code>[5, 5, 5, 5]</code> | Rounding properties |
| stroke | [<code>Stroke</code>](#Stroke) |  | Stroke properties |
| fill | [<code>Fill</code>](#Fill) |  | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |
| anchor | [<code>Anchor</code>](#Anchor) |  | Anchor properties |
| canvas | <code>HTMLCanvasElement</code> |  | 2D canvas context |
| options | [<code>Options</code>](#Options) |  | Options for this object |
| position | [<code>Position</code>](#Position) |  | Position properties |


* [RoundedRectangle](#RoundedRectangle) ⇐ [<code>Rectangle</code>](#Rectangle)
    * [.point(value)](#Rectangle+point)
    * [.x(value)](#Rectangle+x)
    * [.y(value)](#Rectangle+y)
    * [.aspect(value)](#Rectangle+aspect)
    * [.width(value)](#Rectangle+width)
    * [.height(value)](#Rectangle+height)
    * [.round(value)](#Rectangle+round)
    * [.stroke(value)](#Rectangle+stroke)
    * [.fill(value)](#Rectangle+fill)
    * [.shadow()](#Rectangle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Rectangle+canvas)
    * [.anchor()](#Rectangle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Rectangle+options) ⇒ [<code>Options</code>](#Options)
    * [.mass(value)](#Rectangle+mass)
    * [.velocity(value)](#Rectangle+velocity)
    * [.isThere(rectangle)](#Rectangle+isThere)
    * [.area()](#Rectangle+area) ⇒ <code>number</code>
    * [.center()](#Rectangle+center) ⇒ [<code>Point</code>](#Point)
    * [.fillColorCycle(progress, start, end, [max])](#Rectangle+fillColorCycle)
    * [.gradientColorCycle(progress, start, end, stop, [max])](#Rectangle+gradientColorCycle)
    * [.move(degree, distance, [draw], [clear])](#Rectangle+move)
    * [.perimeter()](#Rectangle+perimeter) ⇒ <code>number</code>
    * [.rotate(degree, [anchor], [clear])](#Rectangle+rotate)
    * [.showCoordinates([offset], [fontSize])](#Rectangle+showCoordinates)
    * [.draw(canvas)](#Rectangle+draw)

<a name="Rectangle+point"></a>

### roundedRectangle.point(value)
Set point

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>point</code>](#Rectangle+point)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangle+x"></a>

### roundedRectangle.x(value)
Set x-axis value

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>x</code>](#Rectangle+x)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangle+y"></a>

### roundedRectangle.y(value)
Set y-axis value

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>y</code>](#Rectangle+y)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangle+aspect"></a>

### roundedRectangle.aspect(value)
Set aspect properties

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>aspect</code>](#Rectangle+aspect)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Aspect</code>](#Aspect) | Aspect properties |

<a name="Rectangle+width"></a>

### roundedRectangle.width(value)
Set aspect width

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>width</code>](#Rectangle+width)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="Rectangle+height"></a>

### roundedRectangle.height(value)
Set aspect height

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>height</code>](#Rectangle+height)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="Rectangle+round"></a>

### roundedRectangle.round(value)
Set round properties

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>round</code>](#Rectangle+round)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Radii properties |

<a name="Rectangle+stroke"></a>

### roundedRectangle.stroke(value)
Set stroke properties

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>stroke</code>](#Rectangle+stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Stroke</code>](#Stroke) | Stroke properties |

<a name="Rectangle+fill"></a>

### roundedRectangle.fill(value)
Get fill properties

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>fill</code>](#Rectangle+fill)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Fill</code>](#Fill) | Fill properties |

<a name="Rectangle+shadow"></a>

### roundedRectangle.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Rectangle+canvas"></a>

### roundedRectangle.canvas(value)
Set canvas value

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>canvas</code>](#Rectangle+canvas)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangle+anchor"></a>

### roundedRectangle.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="Rectangle+options"></a>

### roundedRectangle.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Rectangle+mass"></a>

### roundedRectangle.mass(value)
Set mass

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>mass</code>](#Rectangle+mass)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Mass of object |

<a name="Rectangle+velocity"></a>

### roundedRectangle.velocity(value)
Set velocity

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Overrides**: [<code>velocity</code>](#Rectangle+velocity)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Velocity of object |

<a name="Rectangle+isThere"></a>

### roundedRectangle.isThere(rectangle)
Check whether the passed object is already present

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| rectangle | [<code>Rectangle</code>](#Rectangle) | Object to validate |

<a name="Rectangle+area"></a>

### roundedRectangle.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.individual.area)  
<a name="Rectangle+center"></a>

### roundedRectangle.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.individual.center)  
<a name="Rectangle+fillColorCycle"></a>

### roundedRectangle.fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  
**See**: [fill](#UTILITIES.individual.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Rectangle+gradientColorCycle"></a>

### roundedRectangle.gradientColorCycle(progress, start, end, stop, [max])
Cycle colors for gradient

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  
**See**: [gradient](#UTILITIES.individual.color.cycle.gradient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Rectangle+move"></a>

### roundedRectangle.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  
**See**: [move](#UTILITIES.individual.misc.move)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="Rectangle+perimeter"></a>

### roundedRectangle.perimeter() ⇒ <code>number</code>
Get perimeter

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.individual.center)  
<a name="Rectangle+rotate"></a>

### roundedRectangle.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Rectangle+showCoordinates"></a>

### roundedRectangle.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  
**See**: [showCoordinates](#UTILITIES.individual.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Rectangle+draw"></a>

### roundedRectangle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>RoundedRectangle</code>](#RoundedRectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Text"></a>

## Text
{Object}            Text                    Text element to render within a canvas element

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| text | <code>string</code> | Text to display |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) | Shadow properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| options | [<code>Options</code>](#Options) | Options for this object |
| position | [<code>Position</code>](#Position) | Position properties |
| mass | <code>number</code> | Mass of object |
| velocity | [<code>Point</code>](#Point) | X & Y velocity coordinates |


* [Text](#Text)
    * [new Text(point, text, type, size, weight, maxWidth, offset, stroke, fill, shadow, canvas)](#new_Text_new)
    * [.point(value)](#Text+point)
    * [.point()](#Text+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Text+x)
    * [.x()](#Text+x) ⇒ <code>number</code>
    * [.y(value)](#Text+y)
    * [.y()](#Text+y) ⇒ <code>number</code>
    * [.text(value)](#Text+text)
    * [.text()](#Text+text) ⇒ <code>string</code>
    * [.stroke()](#Text+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.stroke()](#Text+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill()](#Text+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.fill()](#Text+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow()](#Text+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Text+canvas)
    * [.canvas()](#Text+canvas) ⇒ <code>string</code>
    * [.options()](#Text+options) ⇒ [<code>Options</code>](#Options)
    * [.position()](#Text+position) ⇒ [<code>Position</code>](#Position)
    * [.mass(value)](#Text+mass)
    * [.mass()](#Text+mass) ⇒ <code>number</code>
    * [.velocity(value)](#Text+velocity)
    * [.velocity()](#Text+velocity) ⇒ <code>number</code>
    * [.type(value)](#Text+type)
    * [.type()](#Text+type) ⇒ <code>string</code>
    * [.size(value)](#Text+size)
    * [.size()](#Text+size) ⇒ <code>number</code>
    * [.weight(value)](#Text+weight)
    * [.weight()](#Text+weight) ⇒ <code>string</code>
    * [.maxWidth(value)](#Text+maxWidth)
    * [.maxWidth()](#Text+maxWidth) ⇒ <code>number</code>
    * [.offset(value)](#Text+offset)
    * [.offset()](#Text+offset) ⇒ [<code>Point</code>](#Point)
    * [.font()](#Text+font) ⇒ <code>string</code>
    * [.move(degree, distance, [draw], [clear])](#Text+move)
    * [.rotate(degree, [anchor], [clear])](#Text+rotate)
    * [.showCoordinates([offset], [fontSize])](#Text+showCoordinates)
    * [.draw(canvas)](#Text+draw)

<a name="new_Text_new"></a>

### new Text(point, text, type, size, weight, maxWidth, offset, stroke, fill, shadow, canvas)
Create a Text object


| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| text | <code>string</code> | Text of text object |
| type | <code>string</code> | Font type |
| size | <code>number</code> | Font size |
| weight | <code>string</code> | Font weight |
| maxWidth | <code>number</code> | Font max width |
| offset | [<code>Point</code>](#Point) | Text offset |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill Properties |
| shadow | [<code>Shadow</code>](#Shadow) | Shadow properties |
| canvas | <code>string</code> | Canvas Id |

<a name="Text+point"></a>

### text.point(value)
Set point

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Text+point"></a>

### text.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Text+x"></a>

### text.x(value)
Set x-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Text+x"></a>

### text.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Text+y"></a>

### text.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Text+y"></a>

### text.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Text+text"></a>

### text.text(value)
Set text

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Text of object |

<a name="Text+text"></a>

### text.text() ⇒ <code>string</code>
Get text

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Text of object  
**Read only**: true  
<a name="Text+stroke"></a>

### text.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Set stroke properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Stroke</code>](#Stroke) - value                              Stroke properties  
**Access**: public  
<a name="Text+stroke"></a>

### text.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Text+fill"></a>

### text.fill() ⇒ [<code>Fill</code>](#Fill)
Set fill properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Fill</code>](#Fill) - value                                Fill properties  
**Access**: public  
<a name="Text+fill"></a>

### text.fill() ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
**Access**: public  
<a name="Text+shadow"></a>

### text.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Text+canvas"></a>

### text.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Text+canvas"></a>

### text.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.individual.canvas)  
<a name="Text+options"></a>

### text.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Text+position"></a>

### text.position() ⇒ [<code>Position</code>](#Position)
Get position properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Position</code>](#Position) - Position properties  
**Access**: public  
<a name="Text+mass"></a>

### text.mass(value)
Set mass

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Mass of object |

<a name="Text+mass"></a>

### text.mass() ⇒ <code>number</code>
Get mass

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Mass of object  
**Access**: public  
<a name="Text+velocity"></a>

### text.velocity(value)
Set velocity

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Velocity of object |

<a name="Text+velocity"></a>

### text.velocity() ⇒ <code>number</code>
Get velocity

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Velocity of object  
**Access**: public  
<a name="Text+type"></a>

### text.type(value)
Set font's type

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Font's type |

<a name="Text+type"></a>

### text.type() ⇒ <code>string</code>
Get font's type

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Font's type  
**Read only**: true  
<a name="Text+size"></a>

### text.size(value)
Set font's size

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font's size |

<a name="Text+size"></a>

### text.size() ⇒ <code>number</code>
Get font's size

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Font's size  
**Read only**: true  
<a name="Text+weight"></a>

### text.weight(value)
Set font's weight

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Font's weight |

<a name="Text+weight"></a>

### text.weight() ⇒ <code>string</code>
Get font's weight

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Font's weight  
**Read only**: true  
<a name="Text+maxWidth"></a>

### text.maxWidth(value)
Set font's max width

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font's max width |

<a name="Text+maxWidth"></a>

### text.maxWidth() ⇒ <code>number</code>
Get font's max width

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Font's max width  
**Read only**: true  
<a name="Text+offset"></a>

### text.offset(value)
Set offset

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [offset](#PROPERTY_BLOCKS.individual.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="Text+offset"></a>

### text.offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Read only**: true  
**See**: [offset](#PROPERTY_BLOCKS.individual.offset)  
<a name="Text+font"></a>

### text.font() ⇒ <code>string</code>
Get font

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - CSS style font property syntax  
**Access**: public  
<a name="Text+move"></a>

### text.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [move](#UTILITIES.individual.misc.move)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="Text+rotate"></a>

### text.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Text+showCoordinates"></a>

### text.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [showCoordinates](#UTILITIES.individual.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Text+draw"></a>

### text.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="cImage"></a>

## cImage
{Object}            cImage                  cImage object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source path of image file |
| primary | <code>Object</code> | Primary set of coordinates |
| secondary | <code>Object</code> | Secondary set of coordinates |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| options | [<code>Options</code>](#Options) | Options for this object |
| position | [<code>Position</code>](#Position) | Position properties |
| mass | <code>number</code> | Mass of object |
| velocity | [<code>Point</code>](#Point) | X & Y velocity coordinates |


* [cImage](#cImage)
    * [new cImage()](#new_cImage_new)
    * [.source(value)](#cImage+source)
    * [.source()](#cImage+source) ⇒ <code>Image</code>
    * [.point(value)](#cImage+point)
    * [.point()](#cImage+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#cImage+x)
    * [.x()](#cImage+x) ⇒ <code>number</code>
    * [.y(value)](#cImage+y)
    * [.y()](#cImage+y) ⇒ <code>number</code>
    * [.aspect(value)](#cImage+aspect)
    * [.aspect()](#cImage+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#cImage+width) ⇒ <code>number</code>
    * [.height()](#cImage+height) ⇒ <code>number</code>
    * [.primary(value)](#cImage+primary)
    * [.primary()](#cImage+primary) ⇒ <code>Image</code>
    * [.secondary(value)](#cImage+secondary)
    * [.secondary()](#cImage+secondary) ⇒ <code>Image</code>
    * [.canvas(value)](#cImage+canvas)
    * [.canvas()](#cImage+canvas) ⇒ <code>string</code>
    * [.anchor()](#cImage+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#cImage+options) ⇒ [<code>Options</code>](#Options)
    * [.position()](#cImage+position) ⇒ [<code>Position</code>](#Position)
    * [.mass(value)](#cImage+mass)
    * [.mass()](#cImage+mass) ⇒ <code>number</code>
    * [.velocity(value)](#cImage+velocity)
    * [.velocity()](#cImage+velocity) ⇒ <code>number</code>
    * [.area()](#cImage+area) ⇒ <code>number</code>
    * [.center()](#cImage+center) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#cImage+perimeter) ⇒ <code>number</code>
    * [.move(degree, distance, [draw], [clear])](#cImage+move)
    * [.rotate(degree, [anchor], [clear])](#cImage+rotate)
    * [.showCoordinates([offset], [fontSize])](#cImage+showCoordinates)
    * [.draw(canvas)](#cImage+draw)

<a name="new_cImage_new"></a>

### new cImage()
Create a cImage object

<a name="cImage+source"></a>

### cImage.source(value)
Sets source property value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Path of image source |

<a name="cImage+source"></a>

### cImage.source() ⇒ <code>Image</code>
Gets source property value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>Image</code> - Image source  
**Read only**: true  
<a name="cImage+point"></a>

### cImage.point(value)
Set point

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="cImage+point"></a>

### cImage.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
<a name="cImage+x"></a>

### cImage.x(value)
Set primary x-axis value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="cImage+x"></a>

### cImage.x() ⇒ <code>number</code>
Get primary x-axis value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="cImage+y"></a>

### cImage.y(value)
Set primary y-axis value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="cImage+y"></a>

### cImage.y() ⇒ <code>number</code>
Get primary y-axis value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="cImage+aspect"></a>

### cImage.aspect(value)
Set aspect properties

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Aspect</code>](#Aspect) | Aspect properties |

<a name="cImage+aspect"></a>

### cImage.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Read only**: true  
<a name="cImage+width"></a>

### cImage.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="cImage+height"></a>

### cImage.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
<a name="cImage+primary"></a>

### cImage.primary(value)
Sets primary property value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Path of image |

<a name="cImage+primary"></a>

### cImage.primary() ⇒ <code>Image</code>
Gets primary property value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>Image</code> - Image object  
**Read only**: true  
<a name="cImage+secondary"></a>

### cImage.secondary(value)
Sets secondary property value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Path of image |

<a name="cImage+secondary"></a>

### cImage.secondary() ⇒ <code>Image</code>
Gets secondary property value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>Image</code> - Image object  
**Read only**: true  
<a name="cImage+canvas"></a>

### cImage.canvas(value)
Set canvas value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [individual.canvas](individual.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="cImage+canvas"></a>

### cImage.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [individual.canvas](individual.canvas)  
<a name="cImage+anchor"></a>

### cImage.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="cImage+options"></a>

### cImage.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="cImage+position"></a>

### cImage.position() ⇒ [<code>Position</code>](#Position)
Get position properties

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Position</code>](#Position) - Position properties  
**Access**: public  
<a name="cImage+mass"></a>

### cImage.mass(value)
Set mass

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Mass of object |

<a name="cImage+mass"></a>

### cImage.mass() ⇒ <code>number</code>
Get mass

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Mass of object  
**Access**: public  
<a name="cImage+velocity"></a>

### cImage.velocity(value)
Set velocity

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Velocity of object |

<a name="cImage+velocity"></a>

### cImage.velocity() ⇒ <code>number</code>
Get velocity

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Velocity of object  
**Access**: public  
<a name="cImage+area"></a>

### cImage.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.individual.area)  
<a name="cImage+center"></a>

### cImage.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.individual.center)  
<a name="cImage+perimeter"></a>

### cImage.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.individual.center)  
<a name="cImage+move"></a>

### cImage.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [move](#UTILITIES.individual.misc.move)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="cImage+rotate"></a>

### cImage.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [rotate](#UTILITIES.individual.misc.rotate)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="cImage+showCoordinates"></a>

### cImage.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [showCoordinates](#UTILITIES.individual.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="cImage+draw"></a>

### cImage.draw(canvas)
Draw this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Circles"></a>

## Circles
{Array}             Circles                 Collection of circle elements within an array

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| options | [<code>Options</code>](#Options) | Options for this object |


* [Circles](#Circles)
    * [new Circles()](#new_Circles_new)
    * [.point(value)](#Circles+point)
    * [.point()](#Circles+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Circles+x)
    * [.x()](#Circles+x) ⇒ <code>number</code>
    * [.y(value)](#Circles+y)
    * [.y()](#Circles+y) ⇒ <code>number</code>
    * [.stroke()](#Circles+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Circles+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.aspect()](#Circles+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Circles+width) ⇒ <code>number</code>
    * [.height()](#Circles+height) ⇒ <code>number</code>
    * [.canvas(value)](#Circles+canvas)
    * [.canvas()](#Circles+canvas) ⇒ <code>string</code>
    * [.template(value)](#Circles+template)
    * [.template()](#Circles+template) ⇒ [<code>Template</code>](#Template)
    * [.anchor(value)](#Circles+anchor)
    * [.anchor()](#Circles+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Circles+options) ⇒ <code>Object</code>
    * [.storageType()](#Circles+storageType) ⇒ [<code>clObject</code>](#clObject)
    * [.area()](#Circles+area) ⇒ <code>number</code>
    * [.center()](#Circles+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Circles+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Circles+perimeter) ⇒ <code>number</code>
    * [.getPoints(indexes, color)](#Circles+getPoints)
    * [.push()](#Circles+push)
    * [.draw(canvas)](#Circles+draw)

<a name="new_Circles_new"></a>

### new Circles()
Create Circles object

<a name="Circles+point"></a>

### circles.point(value)
Set point

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circles+point"></a>

### circles.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Circles+x"></a>

### circles.x(value)
Set x-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circles+x"></a>

### circles.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Circles+y"></a>

### circles.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circles+y"></a>

### circles.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Circles+stroke"></a>

### circles.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Circles+shadow"></a>

### circles.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Circles+aspect"></a>

### circles.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.collection.aspect)  
<a name="Circles+width"></a>

### circles.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.collection.aspectWidth)  
<a name="Circles+height"></a>

### circles.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="Circles+canvas"></a>

### circles.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circles+canvas"></a>

### circles.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  
<a name="Circles+template"></a>

### circles.template(value)
Set template

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Circles+template"></a>

### circles.template() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Read only**: true  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  
<a name="Circles+anchor"></a>

### circles.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Circles+anchor"></a>

### circles.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  
<a name="Circles+options"></a>

### circles.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Circles+storageType"></a>

### circles.storageType() ⇒ [<code>clObject</code>](#clObject)
Returns this collection's storage type

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Access**: public  
<a name="Circles+area"></a>

### circles.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.collection.area)  
<a name="Circles+center"></a>

### circles.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.collection.center)  
<a name="Circles+endPoint"></a>

### circles.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [endPoint](#PROPERTY_BLOCKS.collection.endPoint)  
<a name="Circles+perimeter"></a>

### circles.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [perimeter](#PROPERTY_BLOCKS.collection.perimeter)  
<a name="Circles+getPoints"></a>

### circles.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [getPoints](#UTILITIES.collection.getPoints)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="Circles+push"></a>

### circles.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [push](#UTILITIES.collection.push)  
<a name="Circles+draw"></a>

### circles.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Ellipses"></a>

## Ellipses ⇐ [<code>Circles</code>](#Circles)
{Array}             Ellipses                Collection of circle elements within an array

**Kind**: global class  
**Extends**: [<code>Circles</code>](#Circles)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| options | [<code>Options</code>](#Options) | Options for this object |


* [Ellipses](#Ellipses) ⇐ [<code>Circles</code>](#Circles)
    * [.options()](#Ellipses+options) ⇒ <code>Object</code>
    * [.point(value)](#Circles+point)
    * [.x(value)](#Circles+x)
    * [.y(value)](#Circles+y)
    * [.stroke()](#Circles+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Circles+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.aspect()](#Circles+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Circles+width) ⇒ <code>number</code>
    * [.height()](#Circles+height) ⇒ <code>number</code>
    * [.canvas(value)](#Circles+canvas)
    * [.template(value)](#Circles+template)
    * [.anchor(value)](#Circles+anchor)
    * [.storageType()](#Circles+storageType) ⇒ [<code>clObject</code>](#clObject)
    * [.area()](#Circles+area) ⇒ <code>number</code>
    * [.center()](#Circles+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Circles+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Circles+perimeter) ⇒ <code>number</code>
    * [.getPoints(indexes, color)](#Circles+getPoints)
    * [.push()](#Circles+push)
    * [.draw(canvas)](#Circles+draw)

<a name="Ellipses+options"></a>

### ellipses.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>options</code>](#Circles+options)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Circles+point"></a>

### ellipses.point(value)
Set point

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>point</code>](#Circles+point)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circles+x"></a>

### ellipses.x(value)
Set x-axis value

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>x</code>](#Circles+x)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circles+y"></a>

### ellipses.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>y</code>](#Circles+y)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circles+stroke"></a>

### ellipses.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Circles+shadow"></a>

### ellipses.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Circles+aspect"></a>

### ellipses.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.collection.aspect)  
<a name="Circles+width"></a>

### ellipses.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.collection.aspectWidth)  
<a name="Circles+height"></a>

### ellipses.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="Circles+canvas"></a>

### ellipses.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>canvas</code>](#Circles+canvas)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circles+template"></a>

### ellipses.template(value)
Set template

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>template</code>](#Circles+template)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Circles+anchor"></a>

### ellipses.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Overrides**: [<code>anchor</code>](#Circles+anchor)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Circles+storageType"></a>

### ellipses.storageType() ⇒ [<code>clObject</code>](#clObject)
Returns this collection's storage type

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Access**: public  
<a name="Circles+area"></a>

### ellipses.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.collection.area)  
<a name="Circles+center"></a>

### ellipses.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.collection.center)  
<a name="Circles+endPoint"></a>

### ellipses.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [endPoint](#PROPERTY_BLOCKS.collection.endPoint)  
<a name="Circles+perimeter"></a>

### ellipses.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [perimeter](#PROPERTY_BLOCKS.collection.perimeter)  
<a name="Circles+getPoints"></a>

### ellipses.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Access**: public  
**See**: [getPoints](#UTILITIES.collection.getPoints)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="Circles+push"></a>

### ellipses.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Access**: public  
**See**: [push](#UTILITIES.collection.push)  
<a name="Circles+draw"></a>

### ellipses.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Ellipses</code>](#Ellipses)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Group"></a>

## Group
{Array}             Group                   Collection of Line, Circle, Rectangle & Text objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| lines | <code>Array</code> | Collection of Line objects |
| circles | <code>Array</code> | Collection of Circle objects |
| ellipses | <code>Array</code> | Collection of Ellipse objects |
| rectangles | <code>Array</code> | Collection of Rectangle objects |
| roundedRectangles | <code>Array</code> | Collection of Rounded Rectangle objects |
| text | <code>Array</code> | Collection of Text objects |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |


* [Group](#Group)
    * [new Group()](#new_Group_new)
    * [.point(value)](#Group+point)
    * [.point()](#Group+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Group+x)
    * [.x()](#Group+x) ⇒ <code>number</code>
    * [.y(value)](#Group+y)
    * [.y()](#Group+y) ⇒ <code>number</code>
    * [.lines()](#Group+lines) ⇒ [<code>Lines</code>](#Lines)
    * [.circles()](#Group+circles) ⇒ [<code>Circles</code>](#Circles)
    * [.ellipses()](#Group+ellipses) ⇒ [<code>Ellipses</code>](#Ellipses)
    * [.rectangles()](#Group+rectangles) ⇒ [<code>Rectangles</code>](#Rectangles)
    * [.roundedRectangles()](#Group+roundedRectangles) ⇒ [<code>RoundedRectangles</code>](#RoundedRectangles)
    * [.texts()](#Group+texts) ⇒ [<code>Texts</code>](#Texts)
    * [.canvas(value)](#Group+canvas)
    * [.canvas()](#Group+canvas) ⇒ <code>string</code>
    * [.template(value)](#Group+template)
    * [.template()](#Group+template) ⇒ [<code>Template</code>](#Template)
    * [.push(object)](#Group+push)
    * [.pop(object)](#Group+pop)
    * [.draw(canvas)](#Group+draw)

<a name="new_Group_new"></a>

### new Group()
Create Group object

<a name="Group+point"></a>

### group.point(value)
Set point

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Group+point"></a>

### group.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Group+x"></a>

### group.x(value)
Set x-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Group+x"></a>

### group.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Group+y"></a>

### group.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Group+y"></a>

### group.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Group+lines"></a>

### group.lines() ⇒ [<code>Lines</code>](#Lines)
Get's lines

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Lines</code>](#Lines) - Lines collection  
**Read only**: true  
<a name="Group+circles"></a>

### group.circles() ⇒ [<code>Circles</code>](#Circles)
Get's circles

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Circles</code>](#Circles) - Circles collection  
**Read only**: true  
<a name="Group+ellipses"></a>

### group.ellipses() ⇒ [<code>Ellipses</code>](#Ellipses)
Get's ellipses

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Ellipses</code>](#Ellipses) - Ellipses collection  
**Read only**: true  
<a name="Group+rectangles"></a>

### group.rectangles() ⇒ [<code>Rectangles</code>](#Rectangles)
Get's rectangles

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Rectangles</code>](#Rectangles) - Rectangles collection  
**Read only**: true  
<a name="Group+roundedRectangles"></a>

### group.roundedRectangles() ⇒ [<code>RoundedRectangles</code>](#RoundedRectangles)
Get's rounded rectangles

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>RoundedRectangles</code>](#RoundedRectangles) - Rectangles collection  
**Read only**: true  
<a name="Group+texts"></a>

### group.texts() ⇒ [<code>Texts</code>](#Texts)
Get's texts

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Texts</code>](#Texts) - Texts collection  
**Read only**: true  
<a name="Group+canvas"></a>

### group.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Group+canvas"></a>

### group.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
<a name="Group+template"></a>

### group.template(value)
Set template

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Group+template"></a>

### group.template() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Read only**: true  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  
<a name="Group+push"></a>

### group.push(object)
Pushes an object into this group

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Line(s), Circle(s), Rectangle(S) |

<a name="Group+pop"></a>

### group.pop(object)
Pops an object out of this group

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Line(s), Circle(s), Rectangle(S) |

<a name="Group+draw"></a>

### group.draw(canvas)
Draw this group

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Lines"></a>

## Lines
{Array}             Lines                   Collection of Line objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| lineCap | <code>string</code> | Shape of end points |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |


* [Lines](#Lines)
    * [new Lines()](#new_Lines_new)
    * [.point(value)](#Lines+point)
    * [.point()](#Lines+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Lines+x)
    * [.x()](#Lines+x) ⇒ <code>number</code>
    * [.y(value)](#Lines+y)
    * [.y()](#Lines+y) ⇒ <code>number</code>
    * [.stroke()](#Lines+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Lines+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.lineCap(value)](#Lines+lineCap)
    * [.lineCap()](#Lines+lineCap) ⇒ <code>string</code>
    * [.aspect()](#Lines+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Lines+width) ⇒ <code>number</code>
    * [.height()](#Lines+height) ⇒ <code>number</code>
    * [.anchor(value)](#Lines+anchor)
    * [.anchor()](#Lines+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.canvas(value)](#Lines+canvas)
    * [.canvas()](#Lines+canvas) ⇒ <code>string</code>
    * [.template(value)](#Lines+template)
    * [.template()](#Lines+template) ⇒ [<code>Template</code>](#Template)
    * [.options()](#Lines+options) ⇒ <code>Object</code>
    * [.storageType()](#Lines+storageType) ⇒ [<code>clObject</code>](#clObject)
    * [.area()](#Lines+area) ⇒ <code>number</code>
    * [.center()](#Lines+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Lines+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Lines+perimeter) ⇒ <code>number</code>
    * [.getPoints(indexes, color)](#Lines+getPoints)
    * [.push()](#Lines+push)
    * [.draw(canvas)](#Lines+draw)

<a name="new_Lines_new"></a>

### new Lines()
Create a Lines object

<a name="Lines+point"></a>

### lines.point(value)
Set point

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Lines+point"></a>

### lines.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Lines+x"></a>

### lines.x(value)
Set x-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Lines+x"></a>

### lines.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Lines+y"></a>

### lines.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Lines+y"></a>

### lines.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Lines+stroke"></a>

### lines.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Lines+shadow"></a>

### lines.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Lines+lineCap"></a>

### lines.lineCap(value)
Set line cap

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Line cap |

<a name="Lines+lineCap"></a>

### lines.lineCap() ⇒ <code>string</code>
Get line cap

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>string</code> - Line cap  
**Read only**: true  
<a name="Lines+aspect"></a>

### lines.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.collection.aspect)  
<a name="Lines+width"></a>

### lines.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.collection.aspectWidth)  
<a name="Lines+height"></a>

### lines.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="Lines+anchor"></a>

### lines.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Lines+anchor"></a>

### lines.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  
<a name="Lines+canvas"></a>

### lines.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Lines+canvas"></a>

### lines.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  
<a name="Lines+template"></a>

### lines.template(value)
Set template

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Lines+template"></a>

### lines.template() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Read only**: true  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  
<a name="Lines+options"></a>

### lines.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Lines+storageType"></a>

### lines.storageType() ⇒ [<code>clObject</code>](#clObject)
Returns this collection's storage type

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Access**: public  
<a name="Lines+area"></a>

### lines.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.collection.area)  
<a name="Lines+center"></a>

### lines.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="Lines+endPoint"></a>

### lines.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [endPoint](#PROPERTY_BLOCKS.collection.endPoint)  
<a name="Lines+perimeter"></a>

### lines.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [perimeter](#PROPERTY_BLOCKS.collection.perimeter)  
<a name="Lines+getPoints"></a>

### lines.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [getPoints](#UTILITIES.collection.getPoints)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="Lines+push"></a>

### lines.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [push](#UTILITIES.collection.push)  
<a name="Lines+draw"></a>

### lines.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Rectangles"></a>

## Rectangles
{Array}             Rectangles              Collection of Rectangle objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| options | [<code>Options</code>](#Options) | Options for this object |


* [Rectangles](#Rectangles)
    * [new Rectangles()](#new_Rectangles_new)
    * [.point(value)](#Rectangles+point)
    * [.point()](#Rectangles+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Rectangles+x)
    * [.x()](#Rectangles+x) ⇒ <code>number</code>
    * [.y(value)](#Rectangles+y)
    * [.y()](#Rectangles+y) ⇒ <code>number</code>
    * [.stroke()](#Rectangles+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Rectangles+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.aspect()](#Rectangles+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Rectangles+width) ⇒ <code>number</code>
    * [.height()](#Rectangles+height) ⇒ <code>number</code>
    * [.canvas(value)](#Rectangles+canvas)
    * [.canvas()](#Rectangles+canvas) ⇒ <code>string</code>
    * [.template(value)](#Rectangles+template)
    * [.template()](#Rectangles+template) ⇒ [<code>Template</code>](#Template)
    * [.anchor(value)](#Rectangles+anchor)
    * [.anchor()](#Rectangles+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Rectangles+options) ⇒ <code>Object</code>
    * [.storageType()](#Rectangles+storageType) ⇒ [<code>clObject</code>](#clObject)
    * [.area()](#Rectangles+area) ⇒ <code>number</code>
    * [.center()](#Rectangles+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Rectangles+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Rectangles+perimeter) ⇒ <code>number</code>
    * [.getPoints(indexes, color)](#Rectangles+getPoints)
    * [.push()](#Rectangles+push)
    * [.draw(canvas)](#Rectangles+draw)

<a name="new_Rectangles_new"></a>

### new Rectangles()
Create Rectangles object

<a name="Rectangles+point"></a>

### rectangles.point(value)
Set point

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangles+point"></a>

### rectangles.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Rectangles+x"></a>

### rectangles.x(value)
Set x-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangles+x"></a>

### rectangles.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Rectangles+y"></a>

### rectangles.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangles+y"></a>

### rectangles.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Rectangles+stroke"></a>

### rectangles.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Rectangles+shadow"></a>

### rectangles.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Rectangles+aspect"></a>

### rectangles.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.collection.aspect)  
<a name="Rectangles+width"></a>

### rectangles.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.collection.aspectWidth)  
<a name="Rectangles+height"></a>

### rectangles.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="Rectangles+canvas"></a>

### rectangles.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangles+canvas"></a>

### rectangles.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  
<a name="Rectangles+template"></a>

### rectangles.template(value)
Set template

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Rectangles+template"></a>

### rectangles.template() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Read only**: true  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  
<a name="Rectangles+anchor"></a>

### rectangles.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Rectangles+anchor"></a>

### rectangles.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  
<a name="Rectangles+options"></a>

### rectangles.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Rectangles+storageType"></a>

### rectangles.storageType() ⇒ [<code>clObject</code>](#clObject)
Returns this collection's storage type

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Access**: public  
<a name="Rectangles+area"></a>

### rectangles.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.collection.area)  
<a name="Rectangles+center"></a>

### rectangles.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.collection.center)  
<a name="Rectangles+endPoint"></a>

### rectangles.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [endPoint](#PROPERTY_BLOCKS.collection.endPoint)  
<a name="Rectangles+perimeter"></a>

### rectangles.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [perimeter](#PROPERTY_BLOCKS.collection.perimeter)  
<a name="Rectangles+getPoints"></a>

### rectangles.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [getPoints](#UTILITIES.collection.getPoints)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="Rectangles+push"></a>

### rectangles.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [push](#UTILITIES.collection.push)  
<a name="Rectangles+draw"></a>

### rectangles.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="RoundedRectangles"></a>

## RoundedRectangles ⇐ [<code>Rectangles</code>](#Rectangles)
{Array}             RoundedRectangles       Collection of Rounded Rectangle objects

**Kind**: global class  
**Extends**: [<code>Rectangles</code>](#Rectangles)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| options | [<code>Options</code>](#Options) | Options for this object |


* [RoundedRectangles](#RoundedRectangles) ⇐ [<code>Rectangles</code>](#Rectangles)
    * [.options()](#RoundedRectangles+options) ⇒ <code>Object</code>
    * [.point(value)](#Rectangles+point)
    * [.x(value)](#Rectangles+x)
    * [.y(value)](#Rectangles+y)
    * [.stroke()](#Rectangles+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Rectangles+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.aspect()](#Rectangles+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Rectangles+width) ⇒ <code>number</code>
    * [.height()](#Rectangles+height) ⇒ <code>number</code>
    * [.canvas(value)](#Rectangles+canvas)
    * [.template(value)](#Rectangles+template)
    * [.anchor(value)](#Rectangles+anchor)
    * [.storageType()](#Rectangles+storageType) ⇒ [<code>clObject</code>](#clObject)
    * [.area()](#Rectangles+area) ⇒ <code>number</code>
    * [.center()](#Rectangles+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Rectangles+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Rectangles+perimeter) ⇒ <code>number</code>
    * [.getPoints(indexes, color)](#Rectangles+getPoints)
    * [.push()](#Rectangles+push)
    * [.draw(canvas)](#Rectangles+draw)

<a name="RoundedRectangles+options"></a>

### roundedRectangles.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>options</code>](#Rectangles+options)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Rectangles+point"></a>

### roundedRectangles.point(value)
Set point

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>point</code>](#Rectangles+point)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangles+x"></a>

### roundedRectangles.x(value)
Set x-axis value

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>x</code>](#Rectangles+x)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangles+y"></a>

### roundedRectangles.y(value)
Set the y-axis value

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>y</code>](#Rectangles+y)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangles+stroke"></a>

### roundedRectangles.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Rectangles+shadow"></a>

### roundedRectangles.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Rectangles+aspect"></a>

### roundedRectangles.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.collection.aspect)  
<a name="Rectangles+width"></a>

### roundedRectangles.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.collection.aspectWidth)  
<a name="Rectangles+height"></a>

### roundedRectangles.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="Rectangles+canvas"></a>

### roundedRectangles.canvas(value)
Set canvas value

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>canvas</code>](#Rectangles+canvas)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangles+template"></a>

### roundedRectangles.template(value)
Set template

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>template</code>](#Rectangles+template)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Rectangles+anchor"></a>

### roundedRectangles.anchor(value)
Set anchor type

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Overrides**: [<code>anchor</code>](#Rectangles+anchor)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Rectangles+storageType"></a>

### roundedRectangles.storageType() ⇒ [<code>clObject</code>](#clObject)
Returns this collection's storage type

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Access**: public  
<a name="Rectangles+area"></a>

### roundedRectangles.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.collection.area)  
<a name="Rectangles+center"></a>

### roundedRectangles.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.collection.center)  
<a name="Rectangles+endPoint"></a>

### roundedRectangles.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [endPoint](#PROPERTY_BLOCKS.collection.endPoint)  
<a name="Rectangles+perimeter"></a>

### roundedRectangles.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [perimeter](#PROPERTY_BLOCKS.collection.perimeter)  
<a name="Rectangles+getPoints"></a>

### roundedRectangles.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Access**: public  
**See**: [getPoints](#UTILITIES.collection.getPoints)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="Rectangles+push"></a>

### roundedRectangles.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Access**: public  
**See**: [push](#UTILITIES.collection.push)  
<a name="Rectangles+draw"></a>

### roundedRectangles.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>RoundedRectangles</code>](#RoundedRectangles)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Texts"></a>

## Texts
{Array}             Texts                   Collection of Text objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |
| template | [<code>Template</code>](#Template) | Canvas Lab Template object |
| anchor | [<code>Anchor</code>](#Anchor) | Anchor properties |
| options | [<code>Options</code>](#Options) | Options for this object |


* [Texts](#Texts)
    * [new Texts()](#new_Texts_new)
    * [.point(value)](#Texts+point)
    * [.point()](#Texts+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Texts+x)
    * [.x()](#Texts+x) ⇒ <code>number</code>
    * [.y(value)](#Texts+y)
    * [.y()](#Texts+y) ⇒ <code>number</code>
    * [.stroke()](#Texts+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Texts+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.aspect()](#Texts+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Texts+width) ⇒ <code>number</code>
    * [.height()](#Texts+height) ⇒ <code>number</code>
    * [.canvas(value)](#Texts+canvas)
    * [.canvas()](#Texts+canvas) ⇒ <code>string</code>
    * [.template(value)](#Texts+template)
    * [.template()](#Texts+template) ⇒ [<code>Template</code>](#Template)
    * [.anchor(value)](#Texts+anchor)
    * [.anchor()](#Texts+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Texts+options) ⇒ <code>Object</code>
    * [.storageType()](#Texts+storageType) ⇒ [<code>clObject</code>](#clObject)
    * [.area()](#Texts+area) ⇒ <code>number</code>
    * [.center()](#Texts+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Texts+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Texts+perimeter) ⇒ <code>number</code>
    * [.getPoints(indexes, color)](#Texts+getPoints)
    * [.push()](#Texts+push)
    * [.draw(canvas)](#Texts+draw)

<a name="new_Texts_new"></a>

### new Texts()
Create Texts object

<a name="Texts+point"></a>

### texts.point(value)
Set point

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Texts+point"></a>

### texts.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="Texts+x"></a>

### texts.x(value)
Set x-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Texts+x"></a>

### texts.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.individual.pointX)  
<a name="Texts+y"></a>

### texts.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Texts+y"></a>

### texts.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.individual.pointY)  
<a name="Texts+stroke"></a>

### texts.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="Texts+shadow"></a>

### texts.shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="Texts+aspect"></a>

### texts.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.collection.aspect)  
<a name="Texts+width"></a>

### texts.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.collection.aspectWidth)  
<a name="Texts+height"></a>

### texts.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="Texts+canvas"></a>

### texts.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Texts+canvas"></a>

### texts.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.collection.canvas)  
<a name="Texts+template"></a>

### texts.template(value)
Set template

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="Texts+template"></a>

### texts.template() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Read only**: true  
**See**: [template](#PROPERTY_BLOCKS.collection.template)  
<a name="Texts+anchor"></a>

### texts.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Texts+anchor"></a>

### texts.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.collection.anchor)  
<a name="Texts+options"></a>

### texts.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Texts+storageType"></a>

### texts.storageType() ⇒ [<code>clObject</code>](#clObject)
Returns this collection's storage type

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Access**: public  
<a name="Texts+area"></a>

### texts.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.collection.area)  
<a name="Texts+center"></a>

### texts.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.collection.center)  
<a name="Texts+endPoint"></a>

### texts.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [endPoint](#PROPERTY_BLOCKS.collection.endPoint)  
<a name="Texts+perimeter"></a>

### texts.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [perimeter](#PROPERTY_BLOCKS.collection.perimeter)  
<a name="Texts+getPoints"></a>

### texts.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [getPoints](#UTILITIES.collection.getPoints)  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="Texts+push"></a>

### texts.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [push](#UTILITIES.collection.push)  
<a name="Texts+draw"></a>

### texts.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Queue"></a>

## Queue
{Object} Queue                              Queue object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| entries | <code>Array</code> |  | Array of entries |
| [index] | <code>number</code> | <code>0</code> | Current index |
| entry | <code>Object</code> |  | Current entry |


* [Queue](#Queue)
    * [new Queue()](#new_Queue_new)
    * [.entries(value)](#Queue+entries)
    * [.entries()](#Queue+entries) ⇒ <code>Array</code>
    * [.index()](#Queue+index) ⇒ <code>number</code>
    * [.entry()](#Queue+entry)
    * [.entry()](#Queue+entry) ⇒ <code>Object</code>
    * [.isEnd()](#Queue+isEnd) ⇒ <code>boolean</code>
    * [.isLast()](#Queue+isLast) ⇒ <code>boolean</code>
    * [.isSet()](#Queue+isSet) ⇒ <code>boolean</code>
    * [.next()](#Queue+next) ⇒ <code>Object</code>
    * [.reset()](#Queue+reset)

<a name="new_Queue_new"></a>

### new Queue()
Create a Queue object

<a name="Queue+entries"></a>

### queue.entries(value)
Set entries

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Array of entries |

<a name="Queue+entries"></a>

### queue.entries() ⇒ <code>Array</code>
Get entries

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>Array</code> - Array of entries  
**Access**: public  
<a name="Queue+index"></a>

### queue.index() ⇒ <code>number</code>
Get index

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>number</code> - Current index value  
**Read only**: true  
<a name="Queue+entry"></a>

### queue.entry()
Pushes in an entry

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Access**: public  
<a name="Queue+entry"></a>

### queue.entry() ⇒ <code>Object</code>
Get current entry

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>Object</code> - Current entry  
**Access**: public  
<a name="Queue+isEnd"></a>

### queue.isEnd() ⇒ <code>boolean</code>
Returns whether this queue is at its end

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
<a name="Queue+isLast"></a>

### queue.isLast() ⇒ <code>boolean</code>
Returns whether this queue is on its last element

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
<a name="Queue+isSet"></a>

### queue.isSet() ⇒ <code>boolean</code>
Returns whether this queue is set, or populated

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
<a name="Queue+next"></a>

### queue.next() ⇒ <code>Object</code>
Returns next entry; begins with [ 0 ], or first entry

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>Object</code> - Next entry  
**Access**: public  
<a name="Queue+reset"></a>

### queue.reset()
Resets index to 0

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Access**: public  
<a name="Animation"></a>

## Animation
{Object}          Animation                 Animation handler; for drawing a single object in one instance

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| object | [<code>clObject</code>](#clObject) | CanvasLab object |
| timing | <code>string</code> \| <code>function</code> | Timing function |
| period | <code>number</code> | Period of time |
| change | <code>Object</code> | Change to object |
| options | <code>Object</code> | Options for this object |


* [Animation](#Animation)
    * [new Animation(object, timing, period, change)](#new_Animation_new)
    * [.object(value)](#Animation+object)
    * [.object()](#Animation+object) ⇒ [<code>clObject</code>](#clObject)
    * [.timing(value)](#Animation+timing)
    * [.timing()](#Animation+timing) ⇒ <code>function</code>
    * [.period(value)](#Animation+period)
    * [.period()](#Animation+period) ⇒ <code>number</code>
    * [.change(value)](#Animation+change)
    * [.change()](#Animation+change) ⇒ [<code>clChange</code>](#clChange)
    * [.cache(value)](#Animation+cache)
    * [.cache()](#Animation+cache) ⇒ <code>boolean</code>
    * [.queue(value)](#Animation+queue)
    * [.queue()](#Animation+queue) ⇒ [<code>Queue</code>](#Queue)
    * [.cancel()](#Animation+cancel)
    * [.animate()](#Animation+animate)

<a name="new_Animation_new"></a>

### new Animation(object, timing, period, change)
Creates an animation instance


| Param | Type | Description |
| --- | --- | --- |
| object | [<code>clObject</code>](#clObject) | Canvas Lab object |
| timing | <code>string</code> \| <code>function</code> | Timing function |
| period | <code>number</code> | Period of time |
| change | <code>Object</code> | Change to object |

<a name="Animation+object"></a>

### animation.object(value)
Set object to animate

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab object |

<a name="Animation+object"></a>

### animation.object() ⇒ [<code>clObject</code>](#clObject)
Get object

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab object  
**Read only**: true  
<a name="Animation+timing"></a>

### animation.timing(value)
Set timing

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>function</code> | Timing function |

<a name="Animation+timing"></a>

### animation.timing() ⇒ <code>function</code>
Get timing

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: <code>function</code> - Timing function  
**Read only**: true  
<a name="Animation+period"></a>

### animation.period(value)
Set period of animation

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  
**See**: [period](#PROPERTY_BLOCKS.animation.period)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Period of animation-time |

<a name="Animation+period"></a>

### animation.period() ⇒ <code>number</code>
Get period of animation

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: <code>number</code> - Period of animation-time  
**Read only**: true  
**See**: [period](#PROPERTY_BLOCKS.animation.period)  
<a name="Animation+change"></a>

### animation.change(value)
Set change

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clChange</code>](#clChange) | Canvas Lab change object |

<a name="Animation+change"></a>

### animation.change() ⇒ [<code>clChange</code>](#clChange)
Get change

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>clChange</code>](#clChange) - Canvas Lab change object  
**Read only**: true  
<a name="Animation+cache"></a>

### animation.cache(value)
Set cache

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  
**See**: [cache](#PROPERTY_BLOCKS.animation.cache)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | True || False |

<a name="Animation+cache"></a>

### animation.cache() ⇒ <code>boolean</code>
Get cache

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: <code>boolean</code> - True || False  
**Read only**: true  
**See**: [cache](#PROPERTY_BLOCKS.animation.cache)  
<a name="Animation+queue"></a>

### animation.queue(value)
Set queue

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  
**See**: [queue](#PROPERTY_BLOCKS.animation.queue)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Queue</code>](#Queue) | Queue object |

<a name="Animation+queue"></a>

### animation.queue() ⇒ [<code>Queue</code>](#Queue)
Get queue

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Queue</code>](#Queue) - Queue object  
**Read only**: true  
**See**: [queue](#PROPERTY_BLOCKS.animation.queue)  
<a name="Animation+cancel"></a>

### animation.cancel()
Cancels animation

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Read only**: true  
**See**: [cancel](#PROPERTY_BLOCKS.animation.cancel)  
<a name="Animation+animate"></a>

### animation.animate()
Initiates animation

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  
<a name="Animations"></a>

## Animations
{Object}                  Animations        Animations handler; for drawing multiple objects in one instance

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| objects | [<code>Array.&lt;clObject&gt;</code>](#clObject) | CanvasLab objects |
| timings | <code>Array.&lt;(string\|function())&gt;</code> | Timing functions |
| periods | <code>number</code> | Period of time |
| changes | <code>Array.&lt;Object&gt;</code> | Changes an object |
| options | <code>Object</code> | Options for this object |


* [Animations](#Animations)
    * [new Animations()](#new_Animations_new)
    * [.objects(value)](#Animations+objects)
    * [.objects()](#Animations+objects) ⇒ [<code>clObject</code>](#clObject)
    * [.timings(value)](#Animations+timings)
    * [.timings()](#Animations+timings) ⇒ <code>function</code>
    * [.period(value)](#Animations+period)
    * [.period()](#Animations+period) ⇒ <code>number</code>
    * [.changes(value)](#Animations+changes)
    * [.changes()](#Animations+changes) ⇒ [<code>clChange</code>](#clChange)
    * [.cache(value)](#Animations+cache)
    * [.cache()](#Animations+cache) ⇒ <code>boolean</code>
    * [.queue(value)](#Animations+queue)
    * [.queue()](#Animations+queue) ⇒ [<code>Queue</code>](#Queue)
    * [.cancel()](#Animations+cancel)
    * [.animate()](#Animations+animate)

<a name="new_Animations_new"></a>

### new Animations()
Creates an animation instance

<a name="Animations+objects"></a>

### animations.objects(value)
Set objects to animate

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab objects |

<a name="Animations+objects"></a>

### animations.objects() ⇒ [<code>clObject</code>](#clObject)
Get objects

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Returns**: [<code>clObject</code>](#clObject) - Canvas Lab objects  
**Read only**: true  
<a name="Animations+timings"></a>

### animations.timings(value)
Set timings

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>function</code> | Timing function |

<a name="Animations+timings"></a>

### animations.timings() ⇒ <code>function</code>
Get timing

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Returns**: <code>function</code> - Timing function  
**Read only**: true  
<a name="Animations+period"></a>

### animations.period(value)
Set period of animation

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  
**See**: [period](#PROPERTY_BLOCKS.animation.period)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Period of animation-time |

<a name="Animations+period"></a>

### animations.period() ⇒ <code>number</code>
Get period of animation

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Returns**: <code>number</code> - Period of animation-time  
**Read only**: true  
**See**: [period](#PROPERTY_BLOCKS.animation.period)  
<a name="Animations+changes"></a>

### animations.changes(value)
Set changes

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clChange</code>](#clChange) | Canvas Lab changes object |

<a name="Animations+changes"></a>

### animations.changes() ⇒ [<code>clChange</code>](#clChange)
Get changes

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Returns**: [<code>clChange</code>](#clChange) - Canvas Lab changes object  
**Read only**: true  
<a name="Animations+cache"></a>

### animations.cache(value)
Set cache

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  
**See**: [cache](#PROPERTY_BLOCKS.animation.cache)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | True || False |

<a name="Animations+cache"></a>

### animations.cache() ⇒ <code>boolean</code>
Get cache

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Returns**: <code>boolean</code> - True || False  
**Read only**: true  
**See**: [cache](#PROPERTY_BLOCKS.animation.cache)  
<a name="Animations+queue"></a>

### animations.queue(value)
Set queue

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  
**See**: [queue](#PROPERTY_BLOCKS.animation.queue)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Queue</code>](#Queue) | Queue object |

<a name="Animations+queue"></a>

### animations.queue() ⇒ [<code>Queue</code>](#Queue)
Get queue

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Returns**: [<code>Queue</code>](#Queue) - Queue object  
**Read only**: true  
**See**: [queue](#PROPERTY_BLOCKS.animation.queue)  
<a name="Animations+cancel"></a>

### animations.cancel()
Cancels animation

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Read only**: true  
**See**: [cancel](#PROPERTY_BLOCKS.animation.cancel)  
<a name="Animations+animate"></a>

### animations.animate()
Initiates animation

**Kind**: instance method of [<code>Animations</code>](#Animations)  
**Access**: public  
<a name="Application"></a>

## Application
{Object}   Application                      Application handler

**Kind**: global class  

* [Application](#Application)
    * [new Application()](#new_Application_new)
    * [.animation](#Application+animation)
    * [.animation()](#Application+animation) ⇒ [<code>Animation</code>](#Animation)
    * [.canvas(value)](#Application+canvas)
    * [.canvas()](#Application+canvas) ⇒ <code>HTMLCanvasElement</code>
    * [.about()](#Application+about) ⇒ <code>Object</code>
    * [.dom()](#Application+dom) ⇒ <code>Object</code>

<a name="new_Application_new"></a>

### new Application()
Creates an application handler

<a name="Application+animation"></a>

### application.animation
Creates a new animation instance

**Kind**: instance property of [<code>Application</code>](#Application)  

| Param | Type | Description |
| --- | --- | --- |
| transition | [<code>Transition</code>](#Transition) \| [<code>Queue</code>](#Queue) | Contains timing, draw, & duration values & functions |
| transition.object | <code>number</code> | CanvasLab Object |
| transition.timing | <code>function</code> | Timing function |
| transition.period | <code>number</code> | Period of time |
| transition.change | [<code>clChange</code>](#clChange) | Changes to object |

<a name="Application+animation"></a>

### application.animation() ⇒ [<code>Animation</code>](#Animation)
Get animation

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: [<code>Animation</code>](#Animation) - Animation object  
**Read only**: true  
<a name="Application+canvas"></a>

### application.canvas(value)
Set canvas element

**Kind**: instance method of [<code>Application</code>](#Application)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Element Id |

<a name="Application+canvas"></a>

### application.canvas() ⇒ <code>HTMLCanvasElement</code>
Get canvas element

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>HTMLCanvasElement</code> - Canvas context  
**Access**: public  
<a name="Application+about"></a>

### application.about() ⇒ <code>Object</code>
Get application details

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>Object</code> - Application details  
**Read only**: true  
<a name="Application+dom"></a>

### application.dom() ⇒ <code>Object</code>
Get dom details

**Kind**: instance method of [<code>Application</code>](#Application)  
**Returns**: <code>Object</code> - DOM details  
**Read only**: true  
<a name="myTransitions"></a>

## myTransitions
**Kind**: global class  

* [myTransitions](#myTransitions)
    * [new myTransitions()](#new_myTransitions_new)
    * [.transitions()](#myTransitions+transitions) ⇒ <code>number</code>
    * [.template(value)](#myTransitions+template)
    * [.template()](#myTransitions+template) ⇒ [<code>Template</code>](#Template)
    * [._getShapeLineData()](#myTransitions+_getShapeLineData)
    * [.skip(object, collection, timing, period)](#myTransitions+skip)
    * [.hop(object, collection, timing, period)](#myTransitions+hop)
    * [.bloom(collection, timing, period, out)](#myTransitions+bloom)
    * [.shape(shape, collection, timing, period, clClass)](#myTransitions+shape)

<a name="new_myTransitions_new"></a>

### new myTransitions()
Create myTransitions object

<a name="myTransitions+transitions"></a>

### myTransitions.transitions() ⇒ <code>number</code>
Get transitions

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Returns**: <code>number</code> - Transitions of object  
**Access**: public  
<a name="myTransitions+template"></a>

### myTransitions.template(value)
Set template

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.individual.template)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="myTransitions+template"></a>

### myTransitions.template() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Access**: public  
**See**: [template](#PROPERTY_BLOCKS.individual.template)  
<a name="myTransitions+_getShapeLineData"></a>

### myTransitions.\_getShapeLineData()
Returns an array of lines & changes linking the objects & collections together

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
<a name="myTransitions+skip"></a>

### myTransitions.skip(object, collection, timing, period)
Returns transitions for skip animation

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | [<code>clObject</code>](#clObject) | Canvas Lab object |
| collection | <code>ClCollection</code> | Canvas Lab collection |
| timing | <code>string</code> \| <code>function</code> | Timing function |
| period | <code>number</code> | Period of timer |

<a name="myTransitions+hop"></a>

### myTransitions.hop(object, collection, timing, period)
Returns transitions for hop animation

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | [<code>clObject</code>](#clObject) | Canvas Lab object |
| collection | <code>ClCollection</code> | Canvas Lab collection |
| timing | <code>string</code> \| <code>function</code> | Timing function |
| period | <code>number</code> | Period of timer |

<a name="myTransitions+bloom"></a>

### myTransitions.bloom(collection, timing, period, out)
Returns transitions for bloom animation

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| collection | <code>ClCollection</code> |  | Canvas Lab collection |
| timing | <code>string</code> \| <code>function</code> |  | Timing function |
| period | <code>number</code> |  | Period of timer |
| out | <code>boolean</code> | <code>true</code> | Whether to bloom out, or in |

<a name="myTransitions+shape"></a>

### myTransitions.shape(shape, collection, timing, period, clClass)
Creates shape from array of numbers

**Kind**: instance method of [<code>myTransitions</code>](#myTransitions)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Array</code> | Array of collection indexes |
| collection | <code>ClCollection</code> | Canvas Lab collection |
| timing | <code>string</code> \| <code>function</code> | Timing function |
| period | <code>number</code> | Period of timer |
| clClass | <code>object</code> | Canvas Lab object class |

<a name="SacredCircles"></a>

## SacredCircles
{Object}           SacredCircles            SacredCircles template

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| point | [<code>Point</code>](#Point) |  | X & Y axis coordinates |
| [radius] | <code>number</code> | <code>25</code> | Radius of circle |
| iterations | <code>number</code> |  | Amount of iterations |
| strokes | [<code>Rgb</code>](#Rgb) \| [<code>Stroke</code>](#Stroke) \| [<code>Queue</code>](#Queue) |  | Stroke colors |
| fills | [<code>Rgb</code>](#Rgb) \| [<code>Fill</code>](#Fill) \| [<code>Queue</code>](#Queue) |  | Fill colors |
| degrees | [<code>Queue</code>](#Queue) |  | Degrees for generation |
| master | <code>Object</code> |  | Master object |


* [SacredCircles](#SacredCircles)
    * [new SacredCircles()](#new_SacredCircles_new)
    * [.point(value)](#SacredCircles+point)
    * [.point()](#SacredCircles+point) ⇒ [<code>Point</code>](#Point)
    * [.radius(value)](#SacredCircles+radius)
    * [.radius()](#SacredCircles+radius) ⇒ <code>number</code>
    * [.iterations(value)](#SacredCircles+iterations)
    * [.iterations()](#SacredCircles+iterations) ⇒ <code>number</code>
    * [.degrees(value)](#SacredCircles+degrees)
    * [.degrees()](#SacredCircles+degrees) ⇒ [<code>Queue</code>](#Queue)
    * [.strokes(value)](#SacredCircles+strokes)
    * [.strokes()](#SacredCircles+strokes) ⇒ [<code>Queue</code>](#Queue)
    * [.fills(value)](#SacredCircles+fills)
    * [.fills()](#SacredCircles+fills) ⇒ [<code>Queue</code>](#Queue)
    * [.transitions(value)](#SacredCircles+transitions)
    * [.transitions()](#SacredCircles+transitions) ⇒ <code>Transitions</code>
    * [.master(value)](#SacredCircles+master)
    * [.master()](#SacredCircles+master) ⇒ [<code>clObject</code>](#clObject)
    * [.totalObjects()](#SacredCircles+totalObjects) ⇒ <code>number</code>
    * [.init()](#SacredCircles+init)

<a name="new_SacredCircles_new"></a>

### new SacredCircles()
Create a SacredCircles template

<a name="SacredCircles+point"></a>

### sacredCircles.point(value)
Set point

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="SacredCircles+point"></a>

### sacredCircles.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.individual.point)  
<a name="SacredCircles+radius"></a>

### sacredCircles.radius(value)
Set radius

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
**See**: [radius](#PROPERTY_BLOCKS.individual.radius)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius of circle |

<a name="SacredCircles+radius"></a>

### sacredCircles.radius() ⇒ <code>number</code>
Get radius

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>number</code> - Radius of circle  
**Read only**: true  
**See**: [radius](#PROPERTY_BLOCKS.individual.radius)  
<a name="SacredCircles+iterations"></a>

### sacredCircles.iterations(value)
Set iterations value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Number of iterations |

<a name="SacredCircles+iterations"></a>

### sacredCircles.iterations() ⇒ <code>number</code>
Get iterations value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>number</code> - Number of iterations  
**Read only**: true  
<a name="SacredCircles+degrees"></a>

### sacredCircles.degrees(value)
Set degrees value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Array of degrees |

<a name="SacredCircles+degrees"></a>

### sacredCircles.degrees() ⇒ [<code>Queue</code>](#Queue)
Get degrees value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>Queue</code>](#Queue) - Queue of degrees  
**Read only**: true  
<a name="SacredCircles+strokes"></a>

### sacredCircles.strokes(value)
Set strokes value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Array of strokes |

<a name="SacredCircles+strokes"></a>

### sacredCircles.strokes() ⇒ [<code>Queue</code>](#Queue)
Get strokes value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>Queue</code>](#Queue) - Queue of strokes  
**Read only**: true  
<a name="SacredCircles+fills"></a>

### sacredCircles.fills(value)
Set fills value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Array of fills |

<a name="SacredCircles+fills"></a>

### sacredCircles.fills() ⇒ [<code>Queue</code>](#Queue)
Get fills value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>Queue</code>](#Queue) - Queue of fills  
**Read only**: true  
<a name="SacredCircles+transitions"></a>

### sacredCircles.transitions(value)
Set transitions

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
**See**: [transitions](#PROPERTY_BLOCKS.individual.transitions)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Transitions</code> | Transitions object |

<a name="SacredCircles+transitions"></a>

### sacredCircles.transitions() ⇒ <code>Transitions</code>
Get transitions

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>Transitions</code> - Transitions object  
**Access**: public  
**See**: [transitions](#PROPERTY_BLOCKS.individual.transitions)  
<a name="SacredCircles+master"></a>

### sacredCircles.master(value)
Set master object

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab object |

<a name="SacredCircles+master"></a>

### sacredCircles.master() ⇒ [<code>clObject</code>](#clObject)
Get master object

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>clObject</code>](#clObject) - Master Canvas Lab object  
**Access**: public  
**See**: [master](#PROPERTY_BLOCKS.individual.master)  
<a name="SacredCircles+totalObjects"></a>

### sacredCircles.totalObjects() ⇒ <code>number</code>
Get number of total objects

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>number</code> - Number of total objects  
**Access**: public  
<a name="SacredCircles+init"></a>

### sacredCircles.init()
Sets this template

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
<a name="PROPERTY_BLOCKS"></a>

## PROPERTY\_BLOCKS : <code>object</code>
Base module for shared accessors & mutators

**Kind**: global namespace  

* [PROPERTY_BLOCKS](#PROPERTY_BLOCKS) : <code>object</code>
    * [.individual](#PROPERTY_BLOCKS.individual) : <code>Object</code>
        * [.area](#PROPERTY_BLOCKS.individual.area)
            * [.get()](#PROPERTY_BLOCKS.individual.area.get) ⇒ <code>number</code>
        * [.center](#PROPERTY_BLOCKS.individual.center)
            * [.get()](#PROPERTY_BLOCKS.individual.center.get) ⇒ [<code>Point</code>](#Point)
        * [.alpha()](#PROPERTY_BLOCKS.individual.alpha)
            * [.set(value)](#PROPERTY_BLOCKS.individual.alpha.set)
            * [.get()](#PROPERTY_BLOCKS.individual.alpha.get) ⇒ <code>number</code>
        * [.area()](#PROPERTY_BLOCKS.individual.area)
            * [.get()](#PROPERTY_BLOCKS.individual.area.get) ⇒ <code>number</code>
        * [.canvas()](#PROPERTY_BLOCKS.individual.canvas)
            * [.set(value)](#PROPERTY_BLOCKS.individual.canvas.set)
            * [.get()](#PROPERTY_BLOCKS.individual.canvas.get) ⇒ <code>string</code>
        * [.center()](#PROPERTY_BLOCKS.individual.center)
            * [.get()](#PROPERTY_BLOCKS.individual.center.get) ⇒ [<code>Point</code>](#Point)
        * [.master()](#PROPERTY_BLOCKS.individual.master)
            * [.set(value)](#PROPERTY_BLOCKS.individual.master.set)
            * [.get()](#PROPERTY_BLOCKS.individual.master.get) ⇒ [<code>clObject</code>](#clObject)
        * [.offset()](#PROPERTY_BLOCKS.individual.offset)
            * [.set(value)](#PROPERTY_BLOCKS.individual.offset.set)
            * [.get()](#PROPERTY_BLOCKS.individual.offset.get) ⇒ [<code>Point</code>](#Point)
        * [.offsetX()](#PROPERTY_BLOCKS.individual.offsetX)
            * [.set(value)](#PROPERTY_BLOCKS.individual.offsetX.set)
            * [.get()](#PROPERTY_BLOCKS.individual.offsetX.get) ⇒ <code>number</code>
        * [.offsetY()](#PROPERTY_BLOCKS.individual.offsetY)
            * [.set(value)](#PROPERTY_BLOCKS.individual.offsetY.set)
            * [.get()](#PROPERTY_BLOCKS.individual.offsetY.get) ⇒ <code>number</code>
        * [.point()](#PROPERTY_BLOCKS.individual.point)
            * [.set(value)](#PROPERTY_BLOCKS.individual.point.set)
            * [.get()](#PROPERTY_BLOCKS.individual.point.get) ⇒ [<code>Point</code>](#Point)
        * [.pointX()](#PROPERTY_BLOCKS.individual.pointX)
            * [.set(value)](#PROPERTY_BLOCKS.individual.pointX.set)
            * [.get()](#PROPERTY_BLOCKS.individual.pointX.get) ⇒ <code>number</code>
        * [.pointY()](#PROPERTY_BLOCKS.individual.pointY)
            * [.set(value)](#PROPERTY_BLOCKS.individual.pointY.set)
            * [.get()](#PROPERTY_BLOCKS.individual.pointY.get) ⇒ <code>number</code>
        * [.perimeter()](#PROPERTY_BLOCKS.individual.perimeter)
            * [.get()](#PROPERTY_BLOCKS.individual.perimeter.get) ⇒ <code>number</code>
        * [.radius()](#PROPERTY_BLOCKS.individual.radius)
            * [.set(value)](#PROPERTY_BLOCKS.individual.radius.set)
            * [.get()](#PROPERTY_BLOCKS.individual.radius.get) ⇒ <code>number</code>
        * [.template()](#PROPERTY_BLOCKS.individual.template)
            * [.set(value)](#PROPERTY_BLOCKS.individual.template.set)
            * [.get()](#PROPERTY_BLOCKS.individual.template.get) ⇒ [<code>Template</code>](#Template)
        * [.transitions()](#PROPERTY_BLOCKS.individual.transitions)
            * [.set(value)](#PROPERTY_BLOCKS.individual.transitions.set)
            * [.get()](#PROPERTY_BLOCKS.individual.transitions.get) ⇒ [<code>Template</code>](#Template)
    * [.collection](#PROPERTY_BLOCKS.collection) : <code>Object</code>
        * [.anchor()](#PROPERTY_BLOCKS.collection.anchor)
            * [.set(value)](#PROPERTY_BLOCKS.collection.anchor.set)
            * [.get()](#PROPERTY_BLOCKS.collection.anchor.get) ⇒ [<code>Anchor</code>](#Anchor)
        * [.area()](#PROPERTY_BLOCKS.collection.area)
            * [.get()](#PROPERTY_BLOCKS.collection.area.get) ⇒ <code>number</code>
        * [.aspect()](#PROPERTY_BLOCKS.collection.aspect)
            * [.get()](#PROPERTY_BLOCKS.collection.aspect.get) ⇒ [<code>Aspect</code>](#Aspect)
        * [.aspectWidth()](#PROPERTY_BLOCKS.collection.aspectWidth)
            * [.get()](#PROPERTY_BLOCKS.collection.aspectWidth.get) ⇒ <code>number</code>
        * [.aspectHeight()](#PROPERTY_BLOCKS.collection.aspectHeight)
            * [.get()](#PROPERTY_BLOCKS.collection.aspectHeight.get) ⇒ <code>number</code>
        * [.canvas()](#PROPERTY_BLOCKS.collection.canvas)
            * [.set(value)](#PROPERTY_BLOCKS.collection.canvas.set)
            * [.get()](#PROPERTY_BLOCKS.collection.canvas.get) ⇒ <code>string</code>
        * [.center()](#PROPERTY_BLOCKS.collection.center)
            * [.get()](#PROPERTY_BLOCKS.collection.center.get) ⇒ [<code>Point</code>](#Point)
        * [.endPoint()](#PROPERTY_BLOCKS.collection.endPoint)
            * [.get()](#PROPERTY_BLOCKS.collection.endPoint.get) ⇒ [<code>Point</code>](#Point)
        * [.perimeter()](#PROPERTY_BLOCKS.collection.perimeter)
            * [.get()](#PROPERTY_BLOCKS.collection.perimeter.get) ⇒ <code>number</code>
        * [.template()](#PROPERTY_BLOCKS.collection.template)
            * [.set(value)](#PROPERTY_BLOCKS.collection.template.set)
            * [.get()](#PROPERTY_BLOCKS.collection.template.get) ⇒ <code>Object</code>
    * [.animation](#PROPERTY_BLOCKS.animation) : <code>Object</code>
        * [.cache()](#PROPERTY_BLOCKS.animation.cache)
            * [.set(value)](#PROPERTY_BLOCKS.animation.cache.set)
            * [.get()](#PROPERTY_BLOCKS.animation.cache.get) ⇒ <code>boolean</code>
        * [.cancel()](#PROPERTY_BLOCKS.animation.cancel)
            * [.get()](#PROPERTY_BLOCKS.animation.cancel.get)
        * [.period()](#PROPERTY_BLOCKS.animation.period)
            * [.set(value)](#PROPERTY_BLOCKS.animation.period.set)
            * [.get()](#PROPERTY_BLOCKS.animation.period.get) ⇒ <code>number</code>
        * [.queue()](#PROPERTY_BLOCKS.animation.queue)
            * [.set(value)](#PROPERTY_BLOCKS.animation.queue.set)
            * [.get()](#PROPERTY_BLOCKS.animation.queue.get) ⇒ [<code>Queue</code>](#Queue)

<a name="PROPERTY_BLOCKS.individual"></a>

### PROPERTY_BLOCKS.individual : <code>Object</code>
Individual property accessors & mutators

**Kind**: static property of [<code>PROPERTY\_BLOCKS</code>](#PROPERTY_BLOCKS)  

* [.individual](#PROPERTY_BLOCKS.individual) : <code>Object</code>
    * [.area](#PROPERTY_BLOCKS.individual.area)
        * [.get()](#PROPERTY_BLOCKS.individual.area.get) ⇒ <code>number</code>
    * [.center](#PROPERTY_BLOCKS.individual.center)
        * [.get()](#PROPERTY_BLOCKS.individual.center.get) ⇒ [<code>Point</code>](#Point)
    * [.alpha()](#PROPERTY_BLOCKS.individual.alpha)
        * [.set(value)](#PROPERTY_BLOCKS.individual.alpha.set)
        * [.get()](#PROPERTY_BLOCKS.individual.alpha.get) ⇒ <code>number</code>
    * [.area()](#PROPERTY_BLOCKS.individual.area)
        * [.get()](#PROPERTY_BLOCKS.individual.area.get) ⇒ <code>number</code>
    * [.canvas()](#PROPERTY_BLOCKS.individual.canvas)
        * [.set(value)](#PROPERTY_BLOCKS.individual.canvas.set)
        * [.get()](#PROPERTY_BLOCKS.individual.canvas.get) ⇒ <code>string</code>
    * [.center()](#PROPERTY_BLOCKS.individual.center)
        * [.get()](#PROPERTY_BLOCKS.individual.center.get) ⇒ [<code>Point</code>](#Point)
    * [.master()](#PROPERTY_BLOCKS.individual.master)
        * [.set(value)](#PROPERTY_BLOCKS.individual.master.set)
        * [.get()](#PROPERTY_BLOCKS.individual.master.get) ⇒ [<code>clObject</code>](#clObject)
    * [.offset()](#PROPERTY_BLOCKS.individual.offset)
        * [.set(value)](#PROPERTY_BLOCKS.individual.offset.set)
        * [.get()](#PROPERTY_BLOCKS.individual.offset.get) ⇒ [<code>Point</code>](#Point)
    * [.offsetX()](#PROPERTY_BLOCKS.individual.offsetX)
        * [.set(value)](#PROPERTY_BLOCKS.individual.offsetX.set)
        * [.get()](#PROPERTY_BLOCKS.individual.offsetX.get) ⇒ <code>number</code>
    * [.offsetY()](#PROPERTY_BLOCKS.individual.offsetY)
        * [.set(value)](#PROPERTY_BLOCKS.individual.offsetY.set)
        * [.get()](#PROPERTY_BLOCKS.individual.offsetY.get) ⇒ <code>number</code>
    * [.point()](#PROPERTY_BLOCKS.individual.point)
        * [.set(value)](#PROPERTY_BLOCKS.individual.point.set)
        * [.get()](#PROPERTY_BLOCKS.individual.point.get) ⇒ [<code>Point</code>](#Point)
    * [.pointX()](#PROPERTY_BLOCKS.individual.pointX)
        * [.set(value)](#PROPERTY_BLOCKS.individual.pointX.set)
        * [.get()](#PROPERTY_BLOCKS.individual.pointX.get) ⇒ <code>number</code>
    * [.pointY()](#PROPERTY_BLOCKS.individual.pointY)
        * [.set(value)](#PROPERTY_BLOCKS.individual.pointY.set)
        * [.get()](#PROPERTY_BLOCKS.individual.pointY.get) ⇒ <code>number</code>
    * [.perimeter()](#PROPERTY_BLOCKS.individual.perimeter)
        * [.get()](#PROPERTY_BLOCKS.individual.perimeter.get) ⇒ <code>number</code>
    * [.radius()](#PROPERTY_BLOCKS.individual.radius)
        * [.set(value)](#PROPERTY_BLOCKS.individual.radius.set)
        * [.get()](#PROPERTY_BLOCKS.individual.radius.get) ⇒ <code>number</code>
    * [.template()](#PROPERTY_BLOCKS.individual.template)
        * [.set(value)](#PROPERTY_BLOCKS.individual.template.set)
        * [.get()](#PROPERTY_BLOCKS.individual.template.get) ⇒ [<code>Template</code>](#Template)
    * [.transitions()](#PROPERTY_BLOCKS.individual.transitions)
        * [.set(value)](#PROPERTY_BLOCKS.individual.transitions.set)
        * [.get()](#PROPERTY_BLOCKS.individual.transitions.get) ⇒ [<code>Template</code>](#Template)

<a name="PROPERTY_BLOCKS.individual.area"></a>

#### individual.area
**Kind**: static property of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  
**Notes**: for <Rectangle>, <cImage>  
<a name="PROPERTY_BLOCKS.individual.area.get"></a>

##### area.get() ⇒ <code>number</code>
Get area of this object

**Kind**: static method of [<code>area</code>](#PROPERTY_BLOCKS.individual.area)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.center"></a>

#### individual.center
**Kind**: static property of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  
**Notes**: for <Rectangle>, <cImage>  
<a name="PROPERTY_BLOCKS.individual.center.get"></a>

##### center.get() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: static method of [<code>center</code>](#PROPERTY_BLOCKS.individual.center)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.alpha"></a>

#### individual.alpha()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.alpha()](#PROPERTY_BLOCKS.individual.alpha)
    * [.set(value)](#PROPERTY_BLOCKS.individual.alpha.set)
    * [.get()](#PROPERTY_BLOCKS.individual.alpha.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.individual.alpha.set"></a>

##### alpha.set(value)
Set alpha value

**Kind**: static method of [<code>alpha</code>](#PROPERTY_BLOCKS.individual.alpha)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; 0 - 1 |

<a name="PROPERTY_BLOCKS.individual.alpha.get"></a>

##### alpha.get() ⇒ <code>number</code>
Set alpha value

**Kind**: static method of [<code>alpha</code>](#PROPERTY_BLOCKS.individual.alpha)  
**Returns**: <code>number</code> - Alpha value; 0 - 1  
**Access**: public  
<a name="PROPERTY_BLOCKS.individual.area"></a>

#### individual.area()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  
<a name="PROPERTY_BLOCKS.individual.area.get"></a>

##### area.get() ⇒ <code>number</code>
Get area of this object

**Kind**: static method of [<code>area</code>](#PROPERTY_BLOCKS.individual.area)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.canvas"></a>

#### individual.canvas()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.canvas()](#PROPERTY_BLOCKS.individual.canvas)
    * [.set(value)](#PROPERTY_BLOCKS.individual.canvas.set)
    * [.get()](#PROPERTY_BLOCKS.individual.canvas.get) ⇒ <code>string</code>

<a name="PROPERTY_BLOCKS.individual.canvas.set"></a>

##### canvas.set(value)
Set canvas value

**Kind**: static method of [<code>canvas</code>](#PROPERTY_BLOCKS.individual.canvas)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="PROPERTY_BLOCKS.individual.canvas.get"></a>

##### canvas.get() ⇒ <code>string</code>
Get canvas value

**Kind**: static method of [<code>canvas</code>](#PROPERTY_BLOCKS.individual.canvas)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.center"></a>

#### individual.center()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  
<a name="PROPERTY_BLOCKS.individual.center.get"></a>

##### center.get() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: static method of [<code>center</code>](#PROPERTY_BLOCKS.individual.center)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.master"></a>

#### individual.master()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.master()](#PROPERTY_BLOCKS.individual.master)
    * [.set(value)](#PROPERTY_BLOCKS.individual.master.set)
    * [.get()](#PROPERTY_BLOCKS.individual.master.get) ⇒ [<code>clObject</code>](#clObject)

<a name="PROPERTY_BLOCKS.individual.master.set"></a>

##### master.set(value)
Set master object

**Kind**: static method of [<code>master</code>](#PROPERTY_BLOCKS.individual.master)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>clObject</code>](#clObject) | Canvas Lab object |

<a name="PROPERTY_BLOCKS.individual.master.get"></a>

##### master.get() ⇒ [<code>clObject</code>](#clObject)
Get master object

**Kind**: static method of [<code>master</code>](#PROPERTY_BLOCKS.individual.master)  
**Returns**: [<code>clObject</code>](#clObject) - Master Canvas Lab object  
**Access**: public  
<a name="PROPERTY_BLOCKS.individual.offset"></a>

#### individual.offset()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.offset()](#PROPERTY_BLOCKS.individual.offset)
    * [.set(value)](#PROPERTY_BLOCKS.individual.offset.set)
    * [.get()](#PROPERTY_BLOCKS.individual.offset.get) ⇒ [<code>Point</code>](#Point)

<a name="PROPERTY_BLOCKS.individual.offset.set"></a>

##### offset.set(value)
Set offset

**Kind**: static method of [<code>offset</code>](#PROPERTY_BLOCKS.individual.offset)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="PROPERTY_BLOCKS.individual.offset.get"></a>

##### offset.get() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: static method of [<code>offset</code>](#PROPERTY_BLOCKS.individual.offset)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Access**: public  
<a name="PROPERTY_BLOCKS.individual.offsetX"></a>

#### individual.offsetX()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.offsetX()](#PROPERTY_BLOCKS.individual.offsetX)
    * [.set(value)](#PROPERTY_BLOCKS.individual.offsetX.set)
    * [.get()](#PROPERTY_BLOCKS.individual.offsetX.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.individual.offsetX.set"></a>

##### offsetX.set(value)
Set x-axis offset value

**Kind**: static method of [<code>offsetX</code>](#PROPERTY_BLOCKS.individual.offsetX)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="PROPERTY_BLOCKS.individual.offsetX.get"></a>

##### offsetX.get() ⇒ <code>number</code>
Get x-axis offset value

**Kind**: static method of [<code>offsetX</code>](#PROPERTY_BLOCKS.individual.offsetX)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.offsetY"></a>

#### individual.offsetY()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.offsetY()](#PROPERTY_BLOCKS.individual.offsetY)
    * [.set(value)](#PROPERTY_BLOCKS.individual.offsetY.set)
    * [.get()](#PROPERTY_BLOCKS.individual.offsetY.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.individual.offsetY.set"></a>

##### offsetY.set(value)
Set the y-axis offset value

**Kind**: static method of [<code>offsetY</code>](#PROPERTY_BLOCKS.individual.offsetY)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="PROPERTY_BLOCKS.individual.offsetY.get"></a>

##### offsetY.get() ⇒ <code>number</code>
Get y-axis offset value

**Kind**: static method of [<code>offsetY</code>](#PROPERTY_BLOCKS.individual.offsetY)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.point"></a>

#### individual.point()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.point()](#PROPERTY_BLOCKS.individual.point)
    * [.set(value)](#PROPERTY_BLOCKS.individual.point.set)
    * [.get()](#PROPERTY_BLOCKS.individual.point.get) ⇒ [<code>Point</code>](#Point)

<a name="PROPERTY_BLOCKS.individual.point.set"></a>

##### point.set(value)
Set point

**Kind**: static method of [<code>point</code>](#PROPERTY_BLOCKS.individual.point)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="PROPERTY_BLOCKS.individual.point.get"></a>

##### point.get() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: static method of [<code>point</code>](#PROPERTY_BLOCKS.individual.point)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
<a name="PROPERTY_BLOCKS.individual.pointX"></a>

#### individual.pointX()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.pointX()](#PROPERTY_BLOCKS.individual.pointX)
    * [.set(value)](#PROPERTY_BLOCKS.individual.pointX.set)
    * [.get()](#PROPERTY_BLOCKS.individual.pointX.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.individual.pointX.set"></a>

##### pointX.set(value)
Set x-axis value

**Kind**: static method of [<code>pointX</code>](#PROPERTY_BLOCKS.individual.pointX)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="PROPERTY_BLOCKS.individual.pointX.get"></a>

##### pointX.get() ⇒ <code>number</code>
Get x-axis value

**Kind**: static method of [<code>pointX</code>](#PROPERTY_BLOCKS.individual.pointX)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.pointY"></a>

#### individual.pointY()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.pointY()](#PROPERTY_BLOCKS.individual.pointY)
    * [.set(value)](#PROPERTY_BLOCKS.individual.pointY.set)
    * [.get()](#PROPERTY_BLOCKS.individual.pointY.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.individual.pointY.set"></a>

##### pointY.set(value)
Set the y-axis value

**Kind**: static method of [<code>pointY</code>](#PROPERTY_BLOCKS.individual.pointY)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="PROPERTY_BLOCKS.individual.pointY.get"></a>

##### pointY.get() ⇒ <code>number</code>
Get y-axis value

**Kind**: static method of [<code>pointY</code>](#PROPERTY_BLOCKS.individual.pointY)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.perimeter"></a>

#### individual.perimeter()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  
<a name="PROPERTY_BLOCKS.individual.perimeter.get"></a>

##### perimeter.get() ⇒ <code>number</code>
Get perimeter

**Kind**: static method of [<code>perimeter</code>](#PROPERTY_BLOCKS.individual.perimeter)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.radius"></a>

#### individual.radius()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.radius()](#PROPERTY_BLOCKS.individual.radius)
    * [.set(value)](#PROPERTY_BLOCKS.individual.radius.set)
    * [.get()](#PROPERTY_BLOCKS.individual.radius.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.individual.radius.set"></a>

##### radius.set(value)
Set radius

**Kind**: static method of [<code>radius</code>](#PROPERTY_BLOCKS.individual.radius)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius of circle |

<a name="PROPERTY_BLOCKS.individual.radius.get"></a>

##### radius.get() ⇒ <code>number</code>
Get radius

**Kind**: static method of [<code>radius</code>](#PROPERTY_BLOCKS.individual.radius)  
**Returns**: <code>number</code> - Radius of circle  
**Read only**: true  
<a name="PROPERTY_BLOCKS.individual.template"></a>

#### individual.template()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.template()](#PROPERTY_BLOCKS.individual.template)
    * [.set(value)](#PROPERTY_BLOCKS.individual.template.set)
    * [.get()](#PROPERTY_BLOCKS.individual.template.get) ⇒ [<code>Template</code>](#Template)

<a name="PROPERTY_BLOCKS.individual.template.set"></a>

##### template.set(value)
Set template

**Kind**: static method of [<code>template</code>](#PROPERTY_BLOCKS.individual.template)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="PROPERTY_BLOCKS.individual.template.get"></a>

##### template.get() ⇒ [<code>Template</code>](#Template)
Get template

**Kind**: static method of [<code>template</code>](#PROPERTY_BLOCKS.individual.template)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Access**: public  
<a name="PROPERTY_BLOCKS.individual.transitions"></a>

#### individual.transitions()
**Kind**: static method of [<code>individual</code>](#PROPERTY_BLOCKS.individual)  

* [.transitions()](#PROPERTY_BLOCKS.individual.transitions)
    * [.set(value)](#PROPERTY_BLOCKS.individual.transitions.set)
    * [.get()](#PROPERTY_BLOCKS.individual.transitions.get) ⇒ [<code>Template</code>](#Template)

<a name="PROPERTY_BLOCKS.individual.transitions.set"></a>

##### transitions.set(value)
Set transitions

**Kind**: static method of [<code>transitions</code>](#PROPERTY_BLOCKS.individual.transitions)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="PROPERTY_BLOCKS.individual.transitions.get"></a>

##### transitions.get() ⇒ [<code>Template</code>](#Template)
Get transitions

**Kind**: static method of [<code>transitions</code>](#PROPERTY_BLOCKS.individual.transitions)  
**Returns**: [<code>Template</code>](#Template) - Template object  
**Access**: public  
<a name="PROPERTY_BLOCKS.collection"></a>

### PROPERTY_BLOCKS.collection : <code>Object</code>
Collection property accessors & mutators

**Kind**: static property of [<code>PROPERTY\_BLOCKS</code>](#PROPERTY_BLOCKS)  

* [.collection](#PROPERTY_BLOCKS.collection) : <code>Object</code>
    * [.anchor()](#PROPERTY_BLOCKS.collection.anchor)
        * [.set(value)](#PROPERTY_BLOCKS.collection.anchor.set)
        * [.get()](#PROPERTY_BLOCKS.collection.anchor.get) ⇒ [<code>Anchor</code>](#Anchor)
    * [.area()](#PROPERTY_BLOCKS.collection.area)
        * [.get()](#PROPERTY_BLOCKS.collection.area.get) ⇒ <code>number</code>
    * [.aspect()](#PROPERTY_BLOCKS.collection.aspect)
        * [.get()](#PROPERTY_BLOCKS.collection.aspect.get) ⇒ [<code>Aspect</code>](#Aspect)
    * [.aspectWidth()](#PROPERTY_BLOCKS.collection.aspectWidth)
        * [.get()](#PROPERTY_BLOCKS.collection.aspectWidth.get) ⇒ <code>number</code>
    * [.aspectHeight()](#PROPERTY_BLOCKS.collection.aspectHeight)
        * [.get()](#PROPERTY_BLOCKS.collection.aspectHeight.get) ⇒ <code>number</code>
    * [.canvas()](#PROPERTY_BLOCKS.collection.canvas)
        * [.set(value)](#PROPERTY_BLOCKS.collection.canvas.set)
        * [.get()](#PROPERTY_BLOCKS.collection.canvas.get) ⇒ <code>string</code>
    * [.center()](#PROPERTY_BLOCKS.collection.center)
        * [.get()](#PROPERTY_BLOCKS.collection.center.get) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#PROPERTY_BLOCKS.collection.endPoint)
        * [.get()](#PROPERTY_BLOCKS.collection.endPoint.get) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#PROPERTY_BLOCKS.collection.perimeter)
        * [.get()](#PROPERTY_BLOCKS.collection.perimeter.get) ⇒ <code>number</code>
    * [.template()](#PROPERTY_BLOCKS.collection.template)
        * [.set(value)](#PROPERTY_BLOCKS.collection.template.set)
        * [.get()](#PROPERTY_BLOCKS.collection.template.get) ⇒ <code>Object</code>

<a name="PROPERTY_BLOCKS.collection.anchor"></a>

#### collection.anchor()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  

* [.anchor()](#PROPERTY_BLOCKS.collection.anchor)
    * [.set(value)](#PROPERTY_BLOCKS.collection.anchor.set)
    * [.get()](#PROPERTY_BLOCKS.collection.anchor.get) ⇒ [<code>Anchor</code>](#Anchor)

<a name="PROPERTY_BLOCKS.collection.anchor.set"></a>

##### anchor.set(value)
Set anchor type

**Kind**: static method of [<code>anchor</code>](#PROPERTY_BLOCKS.collection.anchor)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="PROPERTY_BLOCKS.collection.anchor.get"></a>

##### anchor.get() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: static method of [<code>anchor</code>](#PROPERTY_BLOCKS.collection.anchor)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="PROPERTY_BLOCKS.collection.area"></a>

#### collection.area()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.area.get"></a>

##### area.get() ⇒ <code>number</code>
Get area of this object

**Kind**: static method of [<code>area</code>](#PROPERTY_BLOCKS.collection.area)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
<a name="PROPERTY_BLOCKS.collection.aspect"></a>

#### collection.aspect()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.aspect.get"></a>

##### aspect.get() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: static method of [<code>aspect</code>](#PROPERTY_BLOCKS.collection.aspect)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
<a name="PROPERTY_BLOCKS.collection.aspectWidth"></a>

#### collection.aspectWidth()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.aspectWidth.get"></a>

##### aspectWidth.get() ⇒ <code>number</code>
Get aspect with

**Kind**: static method of [<code>aspectWidth</code>](#PROPERTY_BLOCKS.collection.aspectWidth)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="PROPERTY_BLOCKS.collection.aspectHeight"></a>

#### collection.aspectHeight()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.aspectHeight.get"></a>

##### aspectHeight.get() ⇒ <code>number</code>
Get aspect height

**Kind**: static method of [<code>aspectHeight</code>](#PROPERTY_BLOCKS.collection.aspectHeight)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.collection.aspectHeight)  
<a name="PROPERTY_BLOCKS.collection.canvas"></a>

#### collection.canvas()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  

* [.canvas()](#PROPERTY_BLOCKS.collection.canvas)
    * [.set(value)](#PROPERTY_BLOCKS.collection.canvas.set)
    * [.get()](#PROPERTY_BLOCKS.collection.canvas.get) ⇒ <code>string</code>

<a name="PROPERTY_BLOCKS.collection.canvas.set"></a>

##### canvas.set(value)
Set canvas value

**Kind**: static method of [<code>canvas</code>](#PROPERTY_BLOCKS.collection.canvas)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="PROPERTY_BLOCKS.collection.canvas.get"></a>

##### canvas.get() ⇒ <code>string</code>
Get canvas value

**Kind**: static method of [<code>canvas</code>](#PROPERTY_BLOCKS.collection.canvas)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
<a name="PROPERTY_BLOCKS.collection.center"></a>

#### collection.center()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.center.get"></a>

##### center.get() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: static method of [<code>center</code>](#PROPERTY_BLOCKS.collection.center)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="PROPERTY_BLOCKS.collection.endPoint"></a>

#### collection.endPoint()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.endPoint.get"></a>

##### endPoint.get() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: static method of [<code>endPoint</code>](#PROPERTY_BLOCKS.collection.endPoint)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
<a name="PROPERTY_BLOCKS.collection.perimeter"></a>

#### collection.perimeter()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  
<a name="PROPERTY_BLOCKS.collection.perimeter.get"></a>

##### perimeter.get() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: static method of [<code>perimeter</code>](#PROPERTY_BLOCKS.collection.perimeter)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
<a name="PROPERTY_BLOCKS.collection.template"></a>

#### collection.template()
**Kind**: static method of [<code>collection</code>](#PROPERTY_BLOCKS.collection)  

* [.template()](#PROPERTY_BLOCKS.collection.template)
    * [.set(value)](#PROPERTY_BLOCKS.collection.template.set)
    * [.get()](#PROPERTY_BLOCKS.collection.template.get) ⇒ <code>Object</code>

<a name="PROPERTY_BLOCKS.collection.template.set"></a>

##### template.set(value)
Set template

**Kind**: static method of [<code>template</code>](#PROPERTY_BLOCKS.collection.template)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Template object |

<a name="PROPERTY_BLOCKS.collection.template.get"></a>

##### template.get() ⇒ <code>Object</code>
Get template

**Kind**: static method of [<code>template</code>](#PROPERTY_BLOCKS.collection.template)  
**Returns**: <code>Object</code> - Template object  
**Read only**: true  
<a name="PROPERTY_BLOCKS.animation"></a>

### PROPERTY_BLOCKS.animation : <code>Object</code>
Animation property accessors & mutators

**Kind**: static property of [<code>PROPERTY\_BLOCKS</code>](#PROPERTY_BLOCKS)  

* [.animation](#PROPERTY_BLOCKS.animation) : <code>Object</code>
    * [.cache()](#PROPERTY_BLOCKS.animation.cache)
        * [.set(value)](#PROPERTY_BLOCKS.animation.cache.set)
        * [.get()](#PROPERTY_BLOCKS.animation.cache.get) ⇒ <code>boolean</code>
    * [.cancel()](#PROPERTY_BLOCKS.animation.cancel)
        * [.get()](#PROPERTY_BLOCKS.animation.cancel.get)
    * [.period()](#PROPERTY_BLOCKS.animation.period)
        * [.set(value)](#PROPERTY_BLOCKS.animation.period.set)
        * [.get()](#PROPERTY_BLOCKS.animation.period.get) ⇒ <code>number</code>
    * [.queue()](#PROPERTY_BLOCKS.animation.queue)
        * [.set(value)](#PROPERTY_BLOCKS.animation.queue.set)
        * [.get()](#PROPERTY_BLOCKS.animation.queue.get) ⇒ [<code>Queue</code>](#Queue)

<a name="PROPERTY_BLOCKS.animation.cache"></a>

#### animation.cache()
**Kind**: static method of [<code>animation</code>](#PROPERTY_BLOCKS.animation)  

* [.cache()](#PROPERTY_BLOCKS.animation.cache)
    * [.set(value)](#PROPERTY_BLOCKS.animation.cache.set)
    * [.get()](#PROPERTY_BLOCKS.animation.cache.get) ⇒ <code>boolean</code>

<a name="PROPERTY_BLOCKS.animation.cache.set"></a>

##### cache.set(value)
Set cache

**Kind**: static method of [<code>cache</code>](#PROPERTY_BLOCKS.animation.cache)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | True || False |

<a name="PROPERTY_BLOCKS.animation.cache.get"></a>

##### cache.get() ⇒ <code>boolean</code>
Get cache

**Kind**: static method of [<code>cache</code>](#PROPERTY_BLOCKS.animation.cache)  
**Returns**: <code>boolean</code> - True || False  
**Read only**: true  
<a name="PROPERTY_BLOCKS.animation.cancel"></a>

#### animation.cancel()
**Kind**: static method of [<code>animation</code>](#PROPERTY_BLOCKS.animation)  
<a name="PROPERTY_BLOCKS.animation.cancel.get"></a>

##### cancel.get()
Cancels animation

**Kind**: static method of [<code>cancel</code>](#PROPERTY_BLOCKS.animation.cancel)  
**Read only**: true  
<a name="PROPERTY_BLOCKS.animation.period"></a>

#### animation.period()
**Kind**: static method of [<code>animation</code>](#PROPERTY_BLOCKS.animation)  

* [.period()](#PROPERTY_BLOCKS.animation.period)
    * [.set(value)](#PROPERTY_BLOCKS.animation.period.set)
    * [.get()](#PROPERTY_BLOCKS.animation.period.get) ⇒ <code>number</code>

<a name="PROPERTY_BLOCKS.animation.period.set"></a>

##### period.set(value)
Set period of animation

**Kind**: static method of [<code>period</code>](#PROPERTY_BLOCKS.animation.period)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Period of animation-time |

<a name="PROPERTY_BLOCKS.animation.period.get"></a>

##### period.get() ⇒ <code>number</code>
Get period of animation

**Kind**: static method of [<code>period</code>](#PROPERTY_BLOCKS.animation.period)  
**Returns**: <code>number</code> - Period of animation-time  
**Read only**: true  
<a name="PROPERTY_BLOCKS.animation.queue"></a>

#### animation.queue()
**Kind**: static method of [<code>animation</code>](#PROPERTY_BLOCKS.animation)  

* [.queue()](#PROPERTY_BLOCKS.animation.queue)
    * [.set(value)](#PROPERTY_BLOCKS.animation.queue.set)
    * [.get()](#PROPERTY_BLOCKS.animation.queue.get) ⇒ [<code>Queue</code>](#Queue)

<a name="PROPERTY_BLOCKS.animation.queue.set"></a>

##### queue.set(value)
Set queue

**Kind**: static method of [<code>queue</code>](#PROPERTY_BLOCKS.animation.queue)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Queue</code>](#Queue) | Queue object |

<a name="PROPERTY_BLOCKS.animation.queue.get"></a>

##### queue.get() ⇒ [<code>Queue</code>](#Queue)
Get queue

**Kind**: static method of [<code>queue</code>](#PROPERTY_BLOCKS.animation.queue)  
**Returns**: [<code>Queue</code>](#Queue) - Queue object  
**Read only**: true  
<a name="UTILITIES"></a>

## UTILITIES : <code>object</code>
Shared utility functions

**Kind**: global namespace  

* [UTILITIES](#UTILITIES) : <code>object</code>
    * [.collection()](#UTILITIES.collection)
        * [.draw(canvas)](#UTILITIES.collection.draw)
        * [.drawAnchor()](#UTILITIES.collection.drawAnchor)
        * [.drawOptionsPost()](#UTILITIES.collection.drawOptionsPost)
        * [.getPoints(indexes, color)](#UTILITIES.collection.getPoints)
        * [.push()](#UTILITIES.collection.push)
        * [.setAnchorPoint()](#UTILITIES.collection.setAnchorPoint)
        * [.setPointOffset(Object)](#UTILITIES.collection.setPointOffset)
    * [.individual()](#UTILITIES.individual)
        * [.color()](#UTILITIES.individual.color)
            * [.cycle](#UTILITIES.individual.color.cycle)
                * [.stroke(start, end, progress, [max])](#UTILITIES.individual.color.cycle.stroke)
                * [.fill(start, end, progress, [max])](#UTILITIES.individual.color.cycle.fill)
                * [.gradient(start, end, progress, stop, [max])](#UTILITIES.individual.color.cycle.gradient)
                * [.stop(start, end, progress, stop, max)](#UTILITIES.individual.color.cycle.stop)
        * [.draw()](#UTILITIES.individual.draw)
            * [.anchor()](#UTILITIES.individual.draw.anchor)
            * [.axis(offset, color, stop)](#UTILITIES.individual.draw.axis)
            * [.border(aspect, color)](#UTILITIES.individual.draw.border)
        * [.misc()](#UTILITIES.individual.misc)
            * [.pushPop(object)](#UTILITIES.individual.misc.pushPop)
            * [.move(degree, distance)](#UTILITIES.individual.misc.move)
            * [.rotate(degree)](#UTILITIES.individual.misc.rotate)
            * [.rotatePoint(origin, degree, distance)](#UTILITIES.individual.misc.rotatePoint)
            * [.showCoordinates([offset], [fontSize])](#UTILITIES.individual.misc.showCoordinates)
        * [.set()](#UTILITIES.individual.set)
            * [.all(property, value)](#UTILITIES.individual.set.all)
            * [.anchorPoint()](#UTILITIES.individual.set.anchorPoint)
            * [.shadow()](#UTILITIES.individual.set.shadow)
            * [.fillType()](#UTILITIES.individual.set.fillType)
                * [~_setStops(gradient, stops)](#UTILITIES.individual.set.fillType.._setStops)
    * [.animation()](#UTILITIES.animation)

<a name="UTILITIES.collection"></a>

### UTILITIES.collection()
Utilities for collection functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.collection()](#UTILITIES.collection)
    * [.draw(canvas)](#UTILITIES.collection.draw)
    * [.drawAnchor()](#UTILITIES.collection.drawAnchor)
    * [.drawOptionsPost()](#UTILITIES.collection.drawOptionsPost)
    * [.getPoints(indexes, color)](#UTILITIES.collection.getPoints)
    * [.push()](#UTILITIES.collection.push)
    * [.setAnchorPoint()](#UTILITIES.collection.setAnchorPoint)
    * [.setPointOffset(Object)](#UTILITIES.collection.setPointOffset)

<a name="UTILITIES.collection.draw"></a>

#### collection.draw(canvas)
Draw function

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="UTILITIES.collection.drawAnchor"></a>

#### collection.drawAnchor()
Draws anchor point

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  
<a name="UTILITIES.collection.drawOptionsPost"></a>

#### collection.drawOptionsPost()
Draws associated options

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  
<a name="UTILITIES.collection.getPoints"></a>

#### collection.getPoints(indexes, color)
Get all or specific points throughout this collection

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| indexes | <code>Array.&lt;number&gt;</code> | Indexes of points |
| color | [<code>Rgb</code>](#Rgb) | Color to colorize objects selected points |

<a name="UTILITIES.collection.push"></a>

#### collection.push()
Pushes child object(s) into this collection

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  
<a name="UTILITIES.collection.setAnchorPoint"></a>

#### collection.setAnchorPoint()
Sets anchor's point against this object's point location

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  
<a name="UTILITIES.collection.setPointOffset"></a>

#### collection.setPointOffset(Object)
Sets offset of child object against this constructor's point

**Kind**: static method of [<code>collection</code>](#UTILITIES.collection)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| Object | <code>Object</code> | CanvasLab Object |

<a name="UTILITIES.individual"></a>

### UTILITIES.individual()
Utilities for individual functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.individual()](#UTILITIES.individual)
    * [.color()](#UTILITIES.individual.color)
        * [.cycle](#UTILITIES.individual.color.cycle)
            * [.stroke(start, end, progress, [max])](#UTILITIES.individual.color.cycle.stroke)
            * [.fill(start, end, progress, [max])](#UTILITIES.individual.color.cycle.fill)
            * [.gradient(start, end, progress, stop, [max])](#UTILITIES.individual.color.cycle.gradient)
            * [.stop(start, end, progress, stop, max)](#UTILITIES.individual.color.cycle.stop)
    * [.draw()](#UTILITIES.individual.draw)
        * [.anchor()](#UTILITIES.individual.draw.anchor)
        * [.axis(offset, color, stop)](#UTILITIES.individual.draw.axis)
        * [.border(aspect, color)](#UTILITIES.individual.draw.border)
    * [.misc()](#UTILITIES.individual.misc)
        * [.pushPop(object)](#UTILITIES.individual.misc.pushPop)
        * [.move(degree, distance)](#UTILITIES.individual.misc.move)
        * [.rotate(degree)](#UTILITIES.individual.misc.rotate)
        * [.rotatePoint(origin, degree, distance)](#UTILITIES.individual.misc.rotatePoint)
        * [.showCoordinates([offset], [fontSize])](#UTILITIES.individual.misc.showCoordinates)
    * [.set()](#UTILITIES.individual.set)
        * [.all(property, value)](#UTILITIES.individual.set.all)
        * [.anchorPoint()](#UTILITIES.individual.set.anchorPoint)
        * [.shadow()](#UTILITIES.individual.set.shadow)
        * [.fillType()](#UTILITIES.individual.set.fillType)
            * [~_setStops(gradient, stops)](#UTILITIES.individual.set.fillType.._setStops)

<a name="UTILITIES.individual.color"></a>

#### individual.color()
Utility color functions

**Kind**: static method of [<code>individual</code>](#UTILITIES.individual)  

* [.color()](#UTILITIES.individual.color)
    * [.cycle](#UTILITIES.individual.color.cycle)
        * [.stroke(start, end, progress, [max])](#UTILITIES.individual.color.cycle.stroke)
        * [.fill(start, end, progress, [max])](#UTILITIES.individual.color.cycle.fill)
        * [.gradient(start, end, progress, stop, [max])](#UTILITIES.individual.color.cycle.gradient)
        * [.stop(start, end, progress, stop, max)](#UTILITIES.individual.color.cycle.stop)

<a name="UTILITIES.individual.color.cycle"></a>

##### color.cycle
Utility color cycling functions

**Kind**: static property of [<code>color</code>](#UTILITIES.individual.color)  

* [.cycle](#UTILITIES.individual.color.cycle)
    * [.stroke(start, end, progress, [max])](#UTILITIES.individual.color.cycle.stroke)
    * [.fill(start, end, progress, [max])](#UTILITIES.individual.color.cycle.fill)
    * [.gradient(start, end, progress, stop, [max])](#UTILITIES.individual.color.cycle.gradient)
    * [.stop(start, end, progress, stop, max)](#UTILITIES.individual.color.cycle.stop)

<a name="UTILITIES.individual.color.cycle.stroke"></a>

###### cycle.stroke(start, end, progress, [max])
Cycle colors for stroke

**Kind**: static method of [<code>cycle</code>](#UTILITIES.individual.color.cycle)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="UTILITIES.individual.color.cycle.fill"></a>

###### cycle.fill(start, end, progress, [max])
Cycle colors for fill

**Kind**: static method of [<code>cycle</code>](#UTILITIES.individual.color.cycle)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="UTILITIES.individual.color.cycle.gradient"></a>

###### cycle.gradient(start, end, progress, stop, [max])
Cycle colors for gradient

**Kind**: static method of [<code>cycle</code>](#UTILITIES.individual.color.cycle)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="UTILITIES.individual.color.cycle.stop"></a>

###### cycle.stop(start, end, progress, stop, max)
Cycle colors for gradient stop(s)

**Kind**: static method of [<code>cycle</code>](#UTILITIES.individual.color.cycle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) | Color model & values |
| end | [<code>Rgb</code>](#Rgb) | Color model & values |
| progress | <code>number</code> | Progress time unit; 0.00 - 1.00 |
| stop | <code>number</code> | Color stop to cycle |
| max | <code>number</code> | Maximum number of steps between interpolation |

<a name="UTILITIES.individual.draw"></a>

#### individual.draw()
Utility draw functions

**Kind**: static method of [<code>individual</code>](#UTILITIES.individual)  

* [.draw()](#UTILITIES.individual.draw)
    * [.anchor()](#UTILITIES.individual.draw.anchor)
    * [.axis(offset, color, stop)](#UTILITIES.individual.draw.axis)
    * [.border(aspect, color)](#UTILITIES.individual.draw.border)

<a name="UTILITIES.individual.draw.anchor"></a>

##### draw.anchor()
Draws anchor point

**Kind**: static method of [<code>draw</code>](#UTILITIES.individual.draw)  
**Access**: public  
<a name="UTILITIES.individual.draw.axis"></a>

##### draw.axis(offset, color, stop)
Draws an axis for the associated object

**Kind**: static method of [<code>draw</code>](#UTILITIES.individual.draw)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | Offset of axis |
| color | <code>Object</code> | Color model |
| stop | <code>number</code> | Gradient color stop |

<a name="UTILITIES.individual.draw.border"></a>

##### draw.border(aspect, color)
Draws an axis for the associated object

**Kind**: static method of [<code>draw</code>](#UTILITIES.individual.draw)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| color | <code>Object</code> | Color model |

<a name="UTILITIES.individual.misc"></a>

#### individual.misc()
Utility misc functions

**Kind**: static method of [<code>individual</code>](#UTILITIES.individual)  

* [.misc()](#UTILITIES.individual.misc)
    * [.pushPop(object)](#UTILITIES.individual.misc.pushPop)
    * [.move(degree, distance)](#UTILITIES.individual.misc.move)
    * [.rotate(degree)](#UTILITIES.individual.misc.rotate)
    * [.rotatePoint(origin, degree, distance)](#UTILITIES.individual.misc.rotatePoint)
    * [.showCoordinates([offset], [fontSize])](#UTILITIES.individual.misc.showCoordinates)

<a name="UTILITIES.individual.misc.pushPop"></a>

##### misc.pushPop(object)
Push or pops the passed object

**Kind**: static method of [<code>misc</code>](#UTILITIES.individual.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Circle, Rectangle, Text |

<a name="UTILITIES.individual.misc.move"></a>

##### misc.move(degree, distance)
Move this object

**Kind**: static method of [<code>misc</code>](#UTILITIES.individual.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | Direction to move; in degrees |
| distance | <code>number</code> | Distance to move |

<a name="UTILITIES.individual.misc.rotate"></a>

##### misc.rotate(degree)
Rotate this object

**Kind**: static method of [<code>misc</code>](#UTILITIES.individual.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | Distance to rotate; in degrees |

<a name="UTILITIES.individual.misc.rotatePoint"></a>

##### misc.rotatePoint(origin, degree, distance)
Rotates the origin point by the degree & distance passed

**Kind**: static method of [<code>misc</code>](#UTILITIES.individual.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| origin | [<code>Point</code>](#Point) | Origin point |
| degree | <code>number</code> | Degree to rotate |
| distance | <code>number</code> | Distance from origin |

<a name="UTILITIES.individual.misc.showCoordinates"></a>

##### misc.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: static method of [<code>misc</code>](#UTILITIES.individual.misc)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="UTILITIES.individual.set"></a>

#### individual.set()
Utility draw collection functions

**Kind**: static method of [<code>individual</code>](#UTILITIES.individual)  

* [.set()](#UTILITIES.individual.set)
    * [.all(property, value)](#UTILITIES.individual.set.all)
    * [.anchorPoint()](#UTILITIES.individual.set.anchorPoint)
    * [.shadow()](#UTILITIES.individual.set.shadow)
    * [.fillType()](#UTILITIES.individual.set.fillType)
        * [~_setStops(gradient, stops)](#UTILITIES.individual.set.fillType.._setStops)

<a name="UTILITIES.individual.set.all"></a>

##### set.all(property, value)
Sets all option values throughout a collection

**Kind**: static method of [<code>set</code>](#UTILITIES.individual.set)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> | Option property |
| value | <code>boolean</code> | True || False |

<a name="UTILITIES.individual.set.anchorPoint"></a>

##### set.anchorPoint()
Sets anchor's point against this object's point location

**Kind**: static method of [<code>set</code>](#UTILITIES.individual.set)  
**Access**: public  
**Notes**: for Rectangle & cImage only  
<a name="UTILITIES.individual.set.shadow"></a>

##### set.shadow()
Sets shadow properties

**Kind**: static method of [<code>set</code>](#UTILITIES.individual.set)  
**Access**: public  
<a name="UTILITIES.individual.set.fillType"></a>

##### set.fillType()
Sets fill type of the associated object

**Kind**: static method of [<code>set</code>](#UTILITIES.individual.set)  
**Access**: public  
<a name="UTILITIES.individual.set.fillType.._setStops"></a>

###### fillType~\_setStops(gradient, stops)
Sets stops for gradient fill types

**Kind**: inner method of [<code>fillType</code>](#UTILITIES.individual.set.fillType)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| gradient | <code>Object</code> | [description] |
| stops | <code>Array.&lt;Stops&gt;</code> | [description] |

<a name="UTILITIES.animation"></a>

### UTILITIES.animation()
Utilities for animation functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  
<a name="VALIDATION"></a>

## VALIDATION : <code>object</code>
Shared validation functions

**Kind**: global namespace  

* [VALIDATION](#VALIDATION) : <code>object</code>
    * [.is256(value)](#VALIDATION.is256) ⇒ <code>boolean</code>
    * [.isAnchor(value)](#VALIDATION.isAnchor) ⇒ <code>boolean</code>
    * [.isAngle(value)](#VALIDATION.isAngle) ⇒ <code>boolean</code>
    * [.isAlign(value)](#VALIDATION.isAlign) ⇒ <code>boolean</code>
    * [.isAlpha(value)](#VALIDATION.isAlpha) ⇒ <code>boolean</code>
    * [.isAspect(value)](#VALIDATION.isAspect) ⇒ <code>boolean</code>
    * [.isBlur(value)](#VALIDATION.isBlur) ⇒ <code>boolean</code>
    * [.isCanvasLabObject(value)](#VALIDATION.isCanvasLabObject) ⇒ <code>boolean</code>
    * [.isColorName(value)](#VALIDATION.isColorName) ⇒ <code>boolean</code>
    * [.isColorModel(value)](#VALIDATION.isColorModel) ⇒ <code>boolean</code>
    * [.isControlPoint(value)](#VALIDATION.isControlPoint) ⇒ <code>boolean</code>
    * [.isDecimal(value)](#VALIDATION.isDecimal) ⇒ <code>boolean</code>
    * [.isDegree(value)](#VALIDATION.isDegree) ⇒ <code>boolean</code>
    * [.isFill(value)](#VALIDATION.isFill) ⇒ <code>boolean</code>
    * [.isFillType(value)](#VALIDATION.isFillType) ⇒ <code>boolean</code>
    * [.isGradient(value)](#VALIDATION.isGradient) ⇒ <code>boolean</code>
    * [.isInDom(value)](#VALIDATION.isInDom) ⇒ <code>boolean</code>
    * [.isNumber(value)](#VALIDATION.isNumber) ⇒ <code>boolean</code>
    * [.isPoint(value)](#VALIDATION.isPoint) ⇒ <code>boolean</code>
    * [.isPointNAspect(value)](#VALIDATION.isPointNAspect) ⇒ <code>boolean</code>
    * [.isRadian(value)](#VALIDATION.isRadian) ⇒ <code>boolean</code>
    * [.isRadius(value)](#VALIDATION.isRadius) ⇒ <code>boolean</code>
    * [.isRepetition(value)](#VALIDATION.isRepetition) ⇒ <code>boolean</code>
    * [.isSegments(value)](#VALIDATION.isSegments) ⇒ <code>boolean</code>
    * [.isStop(value)](#VALIDATION.isStop) ⇒ <code>boolean</code>
    * [.isStroke(value)](#VALIDATION.isStroke) ⇒ <code>boolean</code>
    * [.isStrokeType(value)](#VALIDATION.isStrokeType) ⇒ <code>boolean</code>
    * [.isTemplate(value)](#VALIDATION.isTemplate) ⇒ <code>boolean</code>
    * [.isTransition(value)](#VALIDATION.isTransition) ⇒ <code>boolean</code>
    * [.isWidth(value)](#VALIDATION.isWidth) ⇒ <code>boolean</code>
    * [.Fill#_isRepetition(value)](#VALIDATION.Fill+_isRepetition) ⇒ <code>boolean</code>
    * [.Position#_isNumber(value)](#VALIDATION.Position+_isNumber) ⇒ <code>boolean</code>
    * [.Group#_isCanvasLabObject(value)](#VALIDATION.Group+_isCanvasLabObject) ⇒ <code>boolean</code>

<a name="VALIDATION.is256"></a>

### VALIDATION.is256(value) ⇒ <code>boolean</code>
Returns whether the passed value is a 256 color value; 0 - 255

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | 256 color value; 0 - 255 |

<a name="VALIDATION.isAnchor"></a>

### VALIDATION.isAnchor(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Anchor alignment

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="VALIDATION.isAngle"></a>

### VALIDATION.isAngle(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Angle or equivalent value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> \| <code>number</code> | Angle object or number value |

<a name="VALIDATION.isAlign"></a>

### VALIDATION.isAlign(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Anchor alignment

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="VALIDATION.isAlpha"></a>

### VALIDATION.isAlpha(value) ⇒ <code>boolean</code>
Returns whether the passed value is an alpha value; 0.00 - 1

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; 0.00 - 1 |

<a name="VALIDATION.isAspect"></a>

### VALIDATION.isAspect(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Aspect

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Aspect or object equivalent |

<a name="VALIDATION.isBlur"></a>

### VALIDATION.isBlur(value) ⇒ <code>boolean</code>
Returns whether the passed value is a blur value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Blur value |

<a name="VALIDATION.isCanvasLabObject"></a>

### VALIDATION.isCanvasLabObject(value) ⇒ <code>boolean</code>
Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | CanvasLab object; Line, Circle, Rectangle, Text |

<a name="VALIDATION.isColorName"></a>

### VALIDATION.isColorName(value) ⇒ <code>boolean</code>
Returns whether the passed value is a CSS color name

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS color name |

<a name="VALIDATION.isColorModel"></a>

### VALIDATION.isColorModel(value) ⇒ <code>boolean</code>
Returns whether the passed value is a color model

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model or object equivalent |

<a name="VALIDATION.isControlPoint"></a>

### VALIDATION.isControlPoint(value) ⇒ <code>boolean</code>
Returns whether the passed value is an array of Control Point values

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array.&lt;number&gt;</code> | Array of Control Points |

<a name="VALIDATION.isDecimal"></a>

### VALIDATION.isDecimal(value) ⇒ <code>boolean</code>
Returns whether the passed value is a decimal value; 0.00 - 1

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Decimal value; 0.00 - 1 |

<a name="VALIDATION.isDegree"></a>

### VALIDATION.isDegree(value) ⇒ <code>boolean</code>
Returns whether the passed value is a degree

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Degree |

<a name="VALIDATION.isFill"></a>

### VALIDATION.isFill(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Fill property object

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Fill |

<a name="VALIDATION.isFillType"></a>

### VALIDATION.isFillType(value) ⇒ <code>boolean</code>
Returns whether the passed value is a fill type

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Fill type |

<a name="VALIDATION.isGradient"></a>

### VALIDATION.isGradient(value) ⇒ <code>boolean</code>
Returns whether the passed value is a gradient object

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Gradient object |

<a name="VALIDATION.isInDom"></a>

### VALIDATION.isInDom(value) ⇒ <code>boolean</code>
Returns whether the passed value is an element id within the DOM

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Element id |

<a name="VALIDATION.isNumber"></a>

### VALIDATION.isNumber(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Number value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Number value |

<a name="VALIDATION.isPoint"></a>

### VALIDATION.isPoint(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Point

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Point or object equivalent |

<a name="VALIDATION.isPointNAspect"></a>

### VALIDATION.isPointNAspect(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Point & Aspect

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Object |
| value.point | [<code>Point</code>](#Point) | Point object |
| value.aspect | [<code>Aspect</code>](#Aspect) | Aspect object |

<a name="VALIDATION.isRadian"></a>

### VALIDATION.isRadian(value) ⇒ <code>boolean</code>
Returns whether the passed value is a radian; 0 - 6.28...

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radian value; 0 - 6.28... |

<a name="VALIDATION.isRadius"></a>

### VALIDATION.isRadius(value) ⇒ <code>boolean</code>
Returns whether the passed value is a radius value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius value |

<a name="VALIDATION.isRepetition"></a>

### VALIDATION.isRepetition(value) ⇒ <code>boolean</code>
Returns whether the passed value is a repetition value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Repetition value |

<a name="VALIDATION.isSegments"></a>

### VALIDATION.isSegments(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Array of segment values

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array.&lt;number&gt;</code> | Array of segment values |

<a name="VALIDATION.isStop"></a>

### VALIDATION.isStop(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Stop or object equivalent

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Stop or object equivalent |

<a name="VALIDATION.isStroke"></a>

### VALIDATION.isStroke(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Stroke property object

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Stroke |

<a name="VALIDATION.isStrokeType"></a>

### VALIDATION.isStrokeType(value) ⇒ <code>boolean</code>
Returns whether the passed value is a stroke type

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Stroke type |

<a name="VALIDATION.isTemplate"></a>

### VALIDATION.isTemplate(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Template

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Template</code>](#Template) | Template object |

<a name="VALIDATION.isTransition"></a>

### VALIDATION.isTransition(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Transition

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Transition</code>](#Transition) | Transition object |

<a name="VALIDATION.isWidth"></a>

### VALIDATION.isWidth(value) ⇒ <code>boolean</code>
Returns whether the passed value is a width value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="VALIDATION.Fill+_isRepetition"></a>

### VALIDATION.Fill#\_isRepetition(value) ⇒ <code>boolean</code>
Returns whether the passed value is a repetition value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
**See**: [isRepetition](#VALIDATION.isRepetition)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Repetition value |

<a name="VALIDATION.Position+_isNumber"></a>

### VALIDATION.Position#\_isNumber(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Number value

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
**See**: [isNumber](#VALIDATION.isNumber)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Number value |

<a name="VALIDATION.Group+_isCanvasLabObject"></a>

### VALIDATION.Group#\_isCanvasLabObject(value) ⇒ <code>boolean</code>
Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
**See**: [isCanvasLabObject](#VALIDATION.isCanvasLabObject)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | CanvasLab object; Line, Circle, Rectangle, Text |

<a name="circle"></a>

## circle(point, stroke, fill) ⇒ [<code>Circle</code>](#Circle)
Returns a Circle object

**Kind**: global function  
**Returns**: [<code>Circle</code>](#Circle) - Circle object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y Coordinates |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |

<a name="ellipse"></a>

## ellipse(point, stroke, fill) ⇒ [<code>Ellipse</code>](#Ellipse)
Returns a Ellipse object

**Kind**: global function  
**Returns**: [<code>Ellipse</code>](#Ellipse) - Ellipse object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y Coordinates |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |

<a name="rectangle"></a>

## rectangle(point, stroke, fill) ⇒ [<code>Rectangle</code>](#Rectangle)
Returns a Rectangle object

**Kind**: global function  
**Returns**: [<code>Rectangle</code>](#Rectangle) - Rectangle object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y Coordinates |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |

<a name="roundedRectangle"></a>

## roundedRectangle(point, stroke, fill) ⇒ [<code>RoundedRectangle</code>](#RoundedRectangle)
Returns a RoundedRectangle object

**Kind**: global function  
**Returns**: [<code>RoundedRectangle</code>](#RoundedRectangle) - Rounded rectangle object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y Coordinates |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |

<a name="text"></a>

## text(point, stroke, fill) ⇒ [<code>Text</code>](#Text)
Returns a Text object

**Kind**: global function  
**Returns**: [<code>Text</code>](#Text) - Text object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y Coordinates |
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |

<a name="line"></a>

## line(startPoint, endPoint) ⇒ [<code>Line</code>](#Line)
Returns a Line object

**Kind**: global function  
**Returns**: [<code>Line</code>](#Line) - Line object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| startPoint | [<code>Point</code>](#Point) | Starting point of line |
| endPoint | [<code>Point</code>](#Point) | Ending point of line |

<a name="initCanvasLab"></a>

## initCanvasLab([canvas])
Initiates canvasLab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [canvas] | <code>string</code> | Canvas identifier |

<a name="clObject"></a>

## clObject : <code>Object</code>
Canvas Lab object

**Kind**: global typedef  
<a name="clCollection"></a>

## clCollection : <code>Object</code>
Canvas Lab collection

**Kind**: global typedef  
<a name="Template"></a>

## Template : <code>Object</code>
Canvas Lab Template, for the creation of objects through a collection

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y coordinates |
| master | [<code>clObject</code>](#clObject) | Master Canvas Lab object |
| init | <code>function</code> | Initialization of Template |

<a name="clChange"></a>

## clChange : <code>Object</code>
Change, for animation changes through a transition

**Kind**: global typedef  
<a name="Transition"></a>

## Transition : <code>Object</code>
Transition, for animation transition instances

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| transition.object | [<code>clObject</code>](#clObject) | CanvasLab Object |
| transition.timing | <code>function</code> | Timing function |
| transition.period | <code>number</code> | Period of time |
| transition.change | [<code>clChange</code>](#clChange) | Changes to object |

