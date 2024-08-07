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
<dd><p>{Object} Conic                              Conic gradient object type and properties</p>
</dd>
<dt><a href="#Linear">Linear</a></dt>
<dd><p>{Object} Linear                             Linear gradient object type and properties</p>
</dd>
<dt><a href="#Radial">Radial</a></dt>
<dd><p>{Object} Radial                             Radial gradient object type and properties</p>
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
<dd><p>{Object}  PointCollection                   X &amp; Y coordinates for an object</p>
</dd>
<dt><a href="#ShadowCollection">ShadowCollection</a></dt>
<dd><p>{Object} ShadowCollection                   Shadow of associated object</p>
</dd>
<dt><a href="#StrokeCollection">StrokeCollection</a></dt>
<dd><p>{Object}   StrokeCollection                 Stroke properties of associated object</p>
</dd>
<dt><a href="#Circle">Circle</a></dt>
<dd><p>{Object} Circle                             Circle object</p>
</dd>
<dt><a href="#Line">Line</a></dt>
<dd><p>{Object} Line                               Line object</p>
</dd>
<dt><a href="#Rectangle">Rectangle</a></dt>
<dd><p>{Object} Rectangle                          Rectangle object</p>
</dd>
<dt><a href="#Text">Text</a></dt>
<dd><p>{Object} Text                               Text element to render within a canvas element</p>
</dd>
<dt><a href="#cImage">cImage</a></dt>
<dd><p>{Object} cImage                             cImage object</p>
</dd>
<dt><a href="#Circles">Circles</a></dt>
<dd><p>{Array} Circles                             Collection of circle elements within an array</p>
</dd>
<dt><a href="#Group">Group</a></dt>
<dd><p>{Array} Group                               Collection of Line, Circle, Rectangle &amp; Text objects</p>
</dd>
<dt><a href="#Lines">Lines</a></dt>
<dd><p>{Array} Lines                               Collection of Line objects</p>
</dd>
<dt><a href="#Rectangles">Rectangles</a></dt>
<dd><p>{Array} Rectangles                          Collection of Rectangle objects</p>
</dd>
<dt><a href="#Texts">Texts</a></dt>
<dd><p>{Array} Texts                               Collection of Text objects</p>
</dd>
<dt><a href="#Queue">Queue</a></dt>
<dd><p>{Object} Queue                              Queue object</p>
</dd>
<dt><a href="#Animation">Animation</a></dt>
<dd><p>{Object}   Animation                        Animation handler</p>
</dd>
<dt><a href="#Application">Application</a></dt>
<dd><p>{Object}   Application                      Application handler</p>
</dd>
<dt><a href="#SacredCircles">SacredCircles</a></dt>
<dd><p>{Object} SacredCircles                      SacredCircles plan</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#PROPERTY_BLOCKS">PROPERTY_BLOCKS</a> : <code>object</code></dt>
<dd><p>Base object for shared accessors &amp; mutators</p>
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
<dt><a href="#initCanvasLab">initCanvasLab([canvas])</a></dt>
<dd><p>Initiates canvasLab</p>
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
    * [.dom()](#canvasLab+dom) ⇒ <code>Object</code>
    * [.center()](#canvasLab+center) ⇒ [<code>Point</code>](#Point)
    * [.animate(sequence)](#canvasLab+animate)

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

### canvasLab.animate(sequence)
Animates onscreen objects in accordance with passed param values

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  

| Param | Type | Description |
| --- | --- | --- |
| sequence | <code>Object</code> | Contains timing, draw, & duration values & functions |
| sequence.duration | <code>number</code> | Duration of animation |
| sequence.timing | <code>function</code> | Timing function |
| sequence.draw | <code>function</code> | Draw function |

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
| master | <code>Object</code> |  | Master object to reference |


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
    * [.master()](#Options+master) ⇒ <code>Object</code>

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

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | CanvasLab Object |

<a name="Options+master"></a>

### options.master() ⇒ <code>Object</code>
Get master object

**Kind**: instance method of [<code>Options</code>](#Options)  
**Returns**: <code>Object</code> - CanvasLab Object  
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
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |

<a name="Anchor+point"></a>

### anchor.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: [<code>Point</code>](#Point) - X & Y axis coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  
<a name="Anchor+x"></a>

### anchor.x(value)
Set x-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Anchor+x"></a>

### anchor.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  
<a name="Anchor+y"></a>

### anchor.y(value)
Set y-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Anchor+y"></a>

### anchor.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  
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

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Point+canvas"></a>

### point.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Point</code>](#Point)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
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

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | Offset of drawable options |

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
| offset | <code>number</code> |  | Representation of the color stop position; 0 = start, & 1 = end |
| [color] | <code>string</code> | <code>&quot;&lt;Rgb&gt;&quot;</code> | Color model & value |


* [Stop](#Stop)
    * [new Stop()](#new_Stop_new)
    * [.offset(value)](#Stop+offset)
    * [.offset()](#Stop+offset) ⇒ <code>number</code>
    * [.color(value)](#Stop+color)
    * [.color()](#Stop+color) ⇒ <code>Object</code>

<a name="new_Stop_new"></a>

### new Stop()
Create a color stop

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
<a name="Conic"></a>

## Conic
{Object} Conic                              Conic gradient object type and properties

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
{Object} Linear                             Linear gradient object type and properties

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#Point) | X & Y axis coordinates (start) |
| end | [<code>Point</code>](#Point) | X & Y axis coordinates (end) |
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
{Object} Radial                             Radial gradient object type and properties

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#Point) | X & Y axis coordinates (start) |
| startRadius | <code>Number</code> | Starting radius of linear gradient |
| end | [<code>Point</code>](#Point) | X & Y axis coordinates (end) |
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
**See**: [offset](#PROPERTY_BLOCKS.discrete.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="Shadow+offset"></a>

### shadow.offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Access**: public  
**See**: [offset](#PROPERTY_BLOCKS.discrete.offset)  
<a name="Shadow+x"></a>

### shadow.x(value)
Set x-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  
**See**: [offsetX](#PROPERTY_BLOCKS.discrete.offsetX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Shadow+x"></a>

### shadow.x() ⇒ <code>number</code>
Get x-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [offsetX](#PROPERTY_BLOCKS.discrete.offsetX)  
<a name="Shadow+y"></a>

### shadow.y(value)
Set the y-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Access**: public  
**See**: [offsetY](#PROPERTY_BLOCKS.discrete.offsetY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Shadow+y"></a>

### shadow.y() ⇒ <code>number</code>
Get y-axis offset value

**Kind**: instance method of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [offsetY](#PROPERTY_BLOCKS.discrete.offsetY)  
<a name="Stroke"></a>

## Stroke
{Object}   Stroke                           Stroke properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Stroke type; solid | dashed |
| [segments] | <code>Array.&lt;number&gt;</code> | <code>[5, 5]</code> | Dashed line segment distance(s) |
| [width] | <code>number</code> | <code>2</code> | Thickness of stroke |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |


* [Stroke](#Stroke)
    * [new Stroke(color, type, segments, alpha, width)](#new_Stroke_new)
    * [.type(value)](#Stroke+type)
    * [.type()](#Stroke+type) ⇒ <code>number</code>
    * [.segments(value)](#Stroke+segments)
    * [.segments()](#Stroke+segments) ⇒ <code>Array</code>
    * [.color(value)](#Stroke+color)
    * [.color()](#Stroke+color) ⇒ <code>Object</code>
    * [.width(value)](#Stroke+width)
    * [.width()](#Stroke+width) ⇒ <code>number</code>

<a name="new_Stroke_new"></a>

### new Stroke(color, type, segments, alpha, width)
Create a stroke


| Param | Type | Description |
| --- | --- | --- |
| color | <code>Object</code> | RGB color value |
| type | <code>number</code> | Stroke type |
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
| value | <code>number</code> | Type: (0) Solid or (1) Dashed |

<a name="Stroke+type"></a>

### stroke.type() ⇒ <code>number</code>
Get type

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>number</code> - Type: (0) Solid or (1) Dashed  
**Read only**: true  
<a name="Stroke+segments"></a>

### stroke.segments(value)
Set segment value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Dashed line segment distance(s) |

<a name="Stroke+segments"></a>

### stroke.segments() ⇒ <code>Array</code>
Get segment value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>Array</code> - Dashed line segment distance(s)  
**Read only**: true  
<a name="Stroke+color"></a>

### stroke.color(value)
Set color value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb |

<a name="Stroke+color"></a>

### stroke.color() ⇒ <code>Object</code>
Get color value

**Kind**: instance method of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>Object</code> - Color model; Rgb  
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
{Object}  PointCollection                   X & Y coordinates for an object

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
    * [.master()](#StrokeCollection+master)

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

### strokeCollection.master()
Set master object

**Kind**: instance method of [<code>StrokeCollection</code>](#StrokeCollection)  
**Access**: public  
<a name="Circle"></a>

## Circle
{Object} Circle                             Circle object

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
    * [.stroke()](#Circle+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill()](#Circle+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow()](#Circle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Circle+canvas)
    * [.canvas()](#Circle+canvas) ⇒ <code>string</code>
    * [.anchor()](#Circle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Circle+options) ⇒ [<code>Options</code>](#Options)
    * [.isThere(circle)](#Circle+isThere) ⇒ <code>boolean</code>
    * [.area()](#Circle+area) ⇒ <code>number</code>
    * [.diameter()](#Circle+diameter) ⇒ <code>number</code>
    * [.center()](#Circle+center) ⇒ [<code>Point</code>](#Point)
    * [.circumference()](#Circle+circumference) ⇒ <code>number</code>
    * [.fillColorCycle(progress, start, end, [max])](#Circle+fillColorCycle)
    * [.gradientColorCycle(progress, start, end, stop, [max])](#Circle+gradientColorCycle)
    * [.rotate(degree, [anchor], [clear])](#Circle+rotate)
    * [.showCoordinates([offset], [fontSize])](#Circle+showCoordinates)
    * [.strokeColorCycle(start, end, progress, [max])](#Circle+strokeColorCycle)
    * [.draw(canvas)](#Circle+draw)
    * [.redraw(canvas, point, [clear])](#Circle+redraw)

<a name="new_Circle_new"></a>

### new Circle()
Create a Circle object

<a name="Circle+point"></a>

### circle.point(value)
Set point

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circle+point"></a>

### circle.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  
<a name="Circle+x"></a>

### circle.x(value)
Set x-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circle+x"></a>

### circle.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  
<a name="Circle+y"></a>

### circle.y(value)
Set y-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circle+y"></a>

### circle.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  
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

### circle.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
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
**See**: [discrete.canvas](discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circle+canvas"></a>

### circle.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [discrete.canvas](discrete.canvas)  
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
<a name="Circle+fillColorCycle"></a>

### circle.fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [fill](#UTILITIES.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Circle+gradientColorCycle"></a>

### circle.gradientColorCycle(progress, start, end, stop, [max])
Cycle colors for gradient

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [gradient](#UTILITIES.color.cycle.gradient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Circle+rotate"></a>

### circle.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [rotate](#UTILITIES.transition.rotate)  

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
**See**: [showCoordinates](#UTILITIES.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Circle+strokeColorCycle"></a>

### circle.strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [stroke](#UTILITIES.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Circle+draw"></a>

### circle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Circle+redraw"></a>

### circle.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  
**Access**: public  
**See**: [UTILITIES.draw.redraw](UTILITIES.draw.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Line"></a>

## Line
{Object} Line                               Line object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#Point) |  | X & Y axis coordinates (start) |
| end | [<code>Point</code>](#Point) |  | X & Y axis coordinates (end) |
| stroke | [<code>Stroke</code>](#Stroke) |  | Stroke properties |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |
| [lineCap] | <code>string</code> | <code>&quot;&#x27;round&#x27;&quot;</code> | Shape of end points |
| canvas | <code>HTMLCanvasElement</code> |  | 2D canvas context |


* [Line](#Line)
    * [new Line()](#new_Line_new)
    * [.start(value)](#Line+start)
    * [.start()](#Line+start) ⇒ [<code>Point</code>](#Point)
    * [.end(value)](#Line+end)
    * [.end()](#Line+end) ⇒ [<code>Point</code>](#Point)
    * [.stroke()](#Line+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Line+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.lineCap(value)](#Line+lineCap)
    * [.lineCap()](#Line+lineCap) ⇒ <code>string</code>
    * [.canvas(value)](#Line+canvas)
    * [.canvas()](#Line+canvas) ⇒ <code>string</code>
    * [.options()](#Line+options) ⇒ [<code>Options</code>](#Options)
    * [.controlPoints()](#Line+controlPoints) ⇒ [<code>ControlPoints</code>](#ControlPoints)
    * [.center()](#Line+center) ⇒ [<code>Point</code>](#Point)
    * [.isThere(line)](#Line+isThere)
    * [.curve(p0, p1, p2, p3)](#Line+curve)
    * [.drawPoints()](#Line+drawPoints)
    * [.move(degree, distance, [draw], [clear])](#Line+move)
    * [.rotate(degree, [anchor], [clear])](#Line+rotate)
    * [.showControlPoints([offset], [fontSize])](#Line+showControlPoints)
    * [.showCoordinates([offset], [fontSize])](#Line+showCoordinates)
    * [.strokeColorCycle(start, end, progress, [max])](#Line+strokeColorCycle)
    * [.draw(canvas)](#Line+draw)
    * [.redraw(canvas, start, end, clear)](#Line+redraw)

<a name="new_Line_new"></a>

### new Line()
Create a Line object

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
**See**: [discrete.canvas](discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Line+canvas"></a>

### line.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [discrete.canvas](discrete.canvas)  
<a name="Line+options"></a>

### line.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="Line+controlPoints"></a>

### line.controlPoints() ⇒ [<code>ControlPoints</code>](#ControlPoints)
Get control point properties

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>ControlPoints</code>](#ControlPoints) - Control points properties  
**Access**: public  
<a name="Line+center"></a>

### line.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="Line+isThere"></a>

### line.isThere(line)
Check whether the passed object is already present

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| line | [<code>Line</code>](#Line) | Object to validate |

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

### line.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="Line+rotate"></a>

### line.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

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

<a name="Line+strokeColorCycle"></a>

### line.strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  
**See**: [stroke](#UTILITIES.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Line+draw"></a>

### line.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Line+redraw"></a>

### line.redraw(canvas, start, end, clear)
Redraw this object

**Kind**: instance method of [<code>Line</code>](#Line)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| start | [<code>Point</code>](#Point) |  | Point of new start location |
| end | [<code>Point</code>](#Point) |  | Point of new end location |
| clear | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Rectangle"></a>

## Rectangle
{Object} Rectangle                          Rectangle object

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
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


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
    * [.stroke()](#Rectangle+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill()](#Rectangle+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow()](#Rectangle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Rectangle+canvas)
    * [.canvas()](#Rectangle+canvas) ⇒ <code>string</code>
    * [.anchor()](#Rectangle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options()](#Rectangle+options) ⇒ [<code>Options</code>](#Options)
    * [.isThere(rectangle)](#Rectangle+isThere)
    * [.area()](#Rectangle+area) ⇒ <code>number</code>
    * [.center()](#Rectangle+center) ⇒ [<code>Point</code>](#Point)
    * [.fillColorCycle(progress, start, end, [max])](#Rectangle+fillColorCycle)
    * [.gradientColorCycle(progress, start, end, stop, [max])](#Rectangle+gradientColorCycle)
    * [.move(degree, distance, [draw], [clear])](#Rectangle+move)
    * [.perimeter()](#Rectangle+perimeter) ⇒ <code>number</code>
    * [.rotate(degree, [anchor], [clear])](#Rectangle+rotate)
    * [.showCoordinates([offset], [fontSize])](#Rectangle+showCoordinates)
    * [.strokeColorCycle(start, end, progress, [max])](#Rectangle+strokeColorCycle)
    * [.draw(canvas)](#Rectangle+draw)
    * [.redraw(canvas, point, [clear])](#Rectangle+redraw)

<a name="new_Rectangle_new"></a>

### new Rectangle()
Create a Rectangle object

<a name="Rectangle+point"></a>

### rectangle.point(value)
Set point

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [discrete.point](discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangle+point"></a>

### rectangle.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [discrete.point](discrete.point)  
<a name="Rectangle+x"></a>

### rectangle.x(value)
Set x-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [discrete.pointX](discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangle+x"></a>

### rectangle.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [discrete.pointX](discrete.pointX)  
<a name="Rectangle+y"></a>

### rectangle.y(value)
Set y-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [discrete.pointY](discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangle+y"></a>

### rectangle.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [discrete.pointY](discrete.pointY)  
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

### rectangle.stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
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
**See**: [discrete.canvas](discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangle+canvas"></a>

### rectangle.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [discrete.canvas](discrete.canvas)  
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
**See**: [area](#PROPERTY_BLOCKS.discrete.area)  
<a name="Rectangle+center"></a>

### rectangle.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.discrete.center)  
<a name="Rectangle+fillColorCycle"></a>

### rectangle.fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [fill](#UTILITIES.color.cycle.fill)  

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
**See**: [gradient](#UTILITIES.color.cycle.gradient)  

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
**See**: [move](#UTILITIES.transition.move)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="Rectangle+perimeter"></a>

### rectangle.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.discrete.center)  
<a name="Rectangle+rotate"></a>

### rectangle.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [rotate](#UTILITIES.transition.rotate)  

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
**See**: [showCoordinates](#UTILITIES.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Rectangle+strokeColorCycle"></a>

### rectangle.strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [stroke](#UTILITIES.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Rectangle+draw"></a>

### rectangle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Rectangle+redraw"></a>

### rectangle.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
**Access**: public  
**See**: [UTILITIES.draw.redraw](UTILITIES.draw.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Text"></a>

## Text
{Object} Text                               Text element to render within a canvas element

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
    * [.fill()](#Text+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow()](#Text+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas(value)](#Text+canvas)
    * [.canvas()](#Text+canvas) ⇒ <code>string</code>
    * [.options()](#Text+options) ⇒ [<code>Options</code>](#Options)
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
    * [.fillColorCycle(progress, start, end, [max])](#Text+fillColorCycle)
    * [.move(degree, distance, [draw], [clear])](#Text+move)
    * [.rotate(degree, [anchor], [clear])](#Text+rotate)
    * [.showCoordinates([offset], [fontSize])](#Text+showCoordinates)
    * [.strokeColorCycle(start, end, progress, [max])](#Text+strokeColorCycle)
    * [.draw(canvas)](#Text+draw)
    * [.redraw(canvas, point, [clear])](#Text+redraw)

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
**See**: [Property_Blocks.discrete.point](Property_Blocks.discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Text+point"></a>

### text.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [Property_Blocks.discrete.point](Property_Blocks.discrete.point)  
<a name="Text+x"></a>

### text.x(value)
Set x-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [Property_Blocks.discrete.pointX](Property_Blocks.discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Text+x"></a>

### text.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [Property_Blocks.discrete.pointX](Property_Blocks.discrete.pointX)  
<a name="Text+y"></a>

### text.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [Property_Blocks.discrete.pointY](Property_Blocks.discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Text+y"></a>

### text.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [Property_Blocks.discrete.pointY](Property_Blocks.discrete.pointY)  
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
Get stroke properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
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
**See**: [Property_Blocks.discrete.canvas](Property_Blocks.discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Text+canvas"></a>

### text.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [Property_Blocks.discrete.canvas](Property_Blocks.discrete.canvas)  
<a name="Text+options"></a>

### text.options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
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
**See**: [Property_Blocks.discrete.offset](Property_Blocks.discrete.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="Text+offset"></a>

### text.offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Read only**: true  
**See**: [Property_Blocks.discrete.offset](Property_Blocks.discrete.offset)  
<a name="Text+font"></a>

### text.font() ⇒ <code>string</code>
Get font

**Kind**: instance method of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - CSS style font property syntax  
**Access**: public  
<a name="Text+fillColorCycle"></a>

### text.fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [fill](#UTILITIES.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Text+move"></a>

### text.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [move](#UTILITIES.transition.move)  

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
**See**: [rotate](#UTILITIES.transition.rotate)  

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
**See**: [showCoordinates](#UTILITIES.misc.showCoordinates)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Text+strokeColorCycle"></a>

### text.strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [stroke](#UTILITIES.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="Text+draw"></a>

### text.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Text+redraw"></a>

### text.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Text</code>](#Text)  
**Access**: public  
**See**: [UTILITIES.draw.redraw](UTILITIES.draw.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="cImage"></a>

## cImage
{Object} cImage                             cImage object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source path of image file |
| primary | <code>Object</code> | Primary set of coordinates |
| secondary | <code>Object</code> | [description] |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


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
    * [.area()](#cImage+area) ⇒ <code>number</code>
    * [.center()](#cImage+center) ⇒ [<code>Point</code>](#Point)
    * [.move(degree, distance, [draw], [clear])](#cImage+move)
    * [.perimeter()](#cImage+perimeter) ⇒ <code>number</code>
    * [.rotate(degree, [anchor], [clear])](#cImage+rotate)
    * [.showCoordinates([offset], [fontSize])](#cImage+showCoordinates)
    * [.draw(canvas)](#cImage+draw)
    * [.redraw(canvas, point, [clear])](#cImage+redraw)

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
**See**: [discrete.canvas](discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="cImage+canvas"></a>

### cImage.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [discrete.canvas](discrete.canvas)  
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
<a name="cImage+area"></a>

### cImage.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Area of this object  
**Read only**: true  
**See**: [area](#PROPERTY_BLOCKS.discrete.area)  
<a name="cImage+center"></a>

### cImage.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.discrete.center)  
<a name="cImage+move"></a>

### cImage.move(degree, distance, [draw], [clear])
Move this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [move](#UTILITIES.transition.move)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="cImage+perimeter"></a>

### cImage.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [center](#PROPERTY_BLOCKS.discrete.center)  
<a name="cImage+rotate"></a>

### cImage.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [rotate](#UTILITIES.transition.rotate)  

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
**See**: [showCoordinates](#UTILITIES.misc.showCoordinates)  

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

<a name="cImage+redraw"></a>

### cImage.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>cImage</code>](#cImage)  
**Access**: public  
**See**: [UTILITIES.draw.redraw](UTILITIES.draw.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Circles"></a>

## Circles
{Array} Circles                             Collection of circle elements within an array

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


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
    * [.options()](#Circles+options) ⇒ <code>Object</code>
    * [.canvas(value)](#Circles+canvas)
    * [.canvas()](#Circles+canvas) ⇒ <code>string</code>
    * [.aspect()](#Circles+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Circles+width) ⇒ <code>number</code>
    * [.height()](#Circles+height) ⇒ <code>number</code>
    * [.anchor(value)](#Circles+anchor)
    * [.anchor()](#Circles+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.area()](#Circles+area) ⇒ <code>number</code>
    * [.center()](#Circles+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Circles+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Circles+perimeter) ⇒ <code>number</code>
    * [.push()](#Circles+push)
    * [.draw(canvas)](#Circles+draw)
    * [.redraw(canvas, point, [clear])](#Circles+redraw)

<a name="new_Circles_new"></a>

### new Circles()
Create Circles object

<a name="Circles+point"></a>

### circles.point(value)
Set point

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [discrete.point](discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circles+point"></a>

### circles.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [discrete.point](discrete.point)  
<a name="Circles+x"></a>

### circles.x(value)
Set x-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [discrete.pointX](discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circles+x"></a>

### circles.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [discrete.pointX](discrete.pointX)  
<a name="Circles+y"></a>

### circles.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [discrete.pointY](discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circles+y"></a>

### circles.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [discrete.pointY](discrete.pointY)  
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
<a name="Circles+options"></a>

### circles.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Circles+canvas"></a>

### circles.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [combined.canvas](combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circles+canvas"></a>

### circles.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [combined.canvas](combined.canvas)  
<a name="Circles+aspect"></a>

### circles.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.combined.aspect)  
<a name="Circles+width"></a>

### circles.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.combined.aspectWidth)  
<a name="Circles+height"></a>

### circles.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.combined.aspectHeight)  
<a name="Circles+anchor"></a>

### circles.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Circles+anchor"></a>

### circles.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  
<a name="Circles+area"></a>

### circles.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.area;](PROPERTY_BLOCKS.combined.area;)  
<a name="Circles+center"></a>

### circles.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.center;](PROPERTY_BLOCKS.combined.center;)  
<a name="Circles+endPoint"></a>

### circles.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [PROPERTY_BLOCKS.combined.endPoint;](PROPERTY_BLOCKS.combined.endPoint;)  
<a name="Circles+perimeter"></a>

### circles.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.perimeter;](PROPERTY_BLOCKS.combined.perimeter;)  
<a name="Circles+push"></a>

### circles.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [UTILITIES.collection.push;](UTILITIES.collection.push;)  
<a name="Circles+draw"></a>

### circles.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Circles+redraw"></a>

### circles.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Circles</code>](#Circles)  
**Access**: public  
**See**: [redraw](#UTILITIES.collection.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Group"></a>

## Group
{Array} Group                               Collection of Line, Circle, Rectangle & Text objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| lines | <code>Array</code> | Collection of Line objects |
| circles | <code>Array</code> | Collection of Circle objects |
| rectangles | <code>Array</code> | Collection of Rectangle objects |
| text | <code>Array</code> | Collection of Text objects |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


* [Group](#Group)
    * [new Group()](#new_Group_new)
    * [.point(value)](#Group+point)
    * [.point()](#Group+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Group+x)
    * [.x()](#Group+x) ⇒ <code>number</code>
    * [.y(value)](#Group+y)
    * [.y()](#Group+y) ⇒ <code>number</code>
    * [.canvas(value)](#Group+canvas)
    * [.canvas()](#Group+canvas) ⇒ <code>string</code>
    * [.plan(value)](#Group+plan)
    * [.plan()](#Group+plan) ⇒ <code>Object</code>
    * [.lines()](#Group+lines) ⇒ [<code>Lines</code>](#Lines)
    * [.circles()](#Group+circles) ⇒ [<code>Circles</code>](#Circles)
    * [.rectangles()](#Group+rectangles) ⇒ [<code>Rectangles</code>](#Rectangles)
    * [.texts()](#Group+texts) ⇒ [<code>Texts</code>](#Texts)
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

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Group+point"></a>

### group.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
<a name="Group+x"></a>

### group.x(value)
Set x-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Group+x"></a>

### group.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="Group+y"></a>

### group.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Group+y"></a>

### group.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="Group+canvas"></a>

### group.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Group+canvas"></a>

### group.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.combined.canvas)  
<a name="Group+plan"></a>

### group.plan(value)
Set's plan

**Kind**: instance method of [<code>Group</code>](#Group)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Plan object |

<a name="Group+plan"></a>

### group.plan() ⇒ <code>Object</code>
Get's plan

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: <code>Object</code> - Plan object  
**Read only**: true  
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
<a name="Group+rectangles"></a>

### group.rectangles() ⇒ [<code>Rectangles</code>](#Rectangles)
Get's rectangles

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Rectangles</code>](#Rectangles) - Rectangles collection  
**Read only**: true  
<a name="Group+texts"></a>

### group.texts() ⇒ [<code>Texts</code>](#Texts)
Get's texts

**Kind**: instance method of [<code>Group</code>](#Group)  
**Returns**: [<code>Texts</code>](#Texts) - Texts collection  
**Read only**: true  
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
{Array} Lines                               Collection of Line objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| stroke | [<code>StrokeCollection</code>](#StrokeCollection) | Stroke collection properties |
| shadow | [<code>ShadowCollection</code>](#ShadowCollection) | Shadow collection properties |
| lineCap | <code>string</code> | Shape of end points |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


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
    * [.options()](#Lines+options) ⇒ <code>Object</code>
    * [.lineCap(value)](#Lines+lineCap)
    * [.lineCap()](#Lines+lineCap) ⇒ <code>string</code>
    * [.canvas(value)](#Lines+canvas)
    * [.canvas()](#Lines+canvas) ⇒ <code>string</code>
    * [.aspect()](#Lines+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Lines+width) ⇒ <code>number</code>
    * [.height()](#Lines+height) ⇒ <code>number</code>
    * [.anchor(value)](#Lines+anchor)
    * [.anchor()](#Lines+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.area()](#Lines+area) ⇒ <code>number</code>
    * [.center()](#Lines+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Lines+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Lines+perimeter) ⇒ <code>number</code>
    * [.push()](#Lines+push)
    * [.draw(canvas)](#Lines+draw)
    * [.redraw(canvas, point, [clear])](#Lines+redraw)

<a name="new_Lines_new"></a>

### new Lines()
Create a Lines object

<a name="Lines+point"></a>

### lines.point(value)
Set point

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Lines+point"></a>

### lines.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  
<a name="Lines+x"></a>

### lines.x(value)
Set x-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Lines+x"></a>

### lines.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  
<a name="Lines+y"></a>

### lines.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Lines+y"></a>

### lines.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  
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
<a name="Lines+options"></a>

### lines.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>Object</code> - Options object  
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
<a name="Lines+canvas"></a>

### lines.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [combined.canvas](combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Lines+canvas"></a>

### lines.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [combined.canvas](combined.canvas)  
<a name="Lines+aspect"></a>

### lines.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.combined.aspect)  
<a name="Lines+width"></a>

### lines.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.combined.aspectWidth)  
<a name="Lines+height"></a>

### lines.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.combined.aspectHeight)  
<a name="Lines+anchor"></a>

### lines.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Lines+anchor"></a>

### lines.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  
<a name="Lines+area"></a>

### lines.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.area;](PROPERTY_BLOCKS.combined.area;)  
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
**See**: [PROPERTY_BLOCKS.combined.endPoint;](PROPERTY_BLOCKS.combined.endPoint;)  
<a name="Lines+perimeter"></a>

### lines.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.perimeter;](PROPERTY_BLOCKS.combined.perimeter;)  
<a name="Lines+push"></a>

### lines.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [UTILITIES.collection.push;](UTILITIES.collection.push;)  
<a name="Lines+draw"></a>

### lines.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Lines+redraw"></a>

### lines.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Lines</code>](#Lines)  
**Access**: public  
**See**: [redraw](#UTILITIES.collection.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Rectangles"></a>

## Rectangles
{Array} Rectangles                          Collection of Rectangle objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


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
    * [.options()](#Rectangles+options) ⇒ <code>Object</code>
    * [.canvas(value)](#Rectangles+canvas)
    * [.canvas()](#Rectangles+canvas) ⇒ <code>string</code>
    * [.aspect()](#Rectangles+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Rectangles+width) ⇒ <code>number</code>
    * [.height()](#Rectangles+height) ⇒ <code>number</code>
    * [.anchor(value)](#Rectangles+anchor)
    * [.anchor()](#Rectangles+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.area()](#Rectangles+area) ⇒ <code>number</code>
    * [.center()](#Rectangles+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Rectangles+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Rectangles+perimeter) ⇒ <code>number</code>
    * [.push()](#Rectangles+push)
    * [.draw(canvas)](#Rectangles+draw)
    * [.redraw(canvas, point, [clear])](#Rectangles+redraw)

<a name="new_Rectangles_new"></a>

### new Rectangles()
Create Rectangles object

<a name="Rectangles+point"></a>

### rectangles.point(value)
Set point

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangles+point"></a>

### rectangles.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#PROPERTY_BLOCKS.discrete.point)  
<a name="Rectangles+x"></a>

### rectangles.x(value)
Set x-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangles+x"></a>

### rectangles.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#PROPERTY_BLOCKS.discrete.pointX)  
<a name="Rectangles+y"></a>

### rectangles.y(value)
Set the y-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangles+y"></a>

### rectangles.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#PROPERTY_BLOCKS.discrete.pointY)  
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
<a name="Rectangles+options"></a>

### rectangles.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Rectangles+canvas"></a>

### rectangles.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangles+canvas"></a>

### rectangles.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.combined.canvas)  
<a name="Rectangles+aspect"></a>

### rectangles.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.combined.aspect)  
<a name="Rectangles+width"></a>

### rectangles.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.combined.aspectWidth)  
<a name="Rectangles+height"></a>

### rectangles.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.combined.aspectHeight)  
<a name="Rectangles+anchor"></a>

### rectangles.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Rectangles+anchor"></a>

### rectangles.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  
<a name="Rectangles+area"></a>

### rectangles.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.area;](PROPERTY_BLOCKS.combined.area;)  
<a name="Rectangles+center"></a>

### rectangles.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.center;](PROPERTY_BLOCKS.combined.center;)  
<a name="Rectangles+endPoint"></a>

### rectangles.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [PROPERTY_BLOCKS.combined.endPoint;](PROPERTY_BLOCKS.combined.endPoint;)  
<a name="Rectangles+perimeter"></a>

### rectangles.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.perimeter;](PROPERTY_BLOCKS.combined.perimeter;)  
<a name="Rectangles+push"></a>

### rectangles.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [UTILITIES.collection.push;](UTILITIES.collection.push;)  
<a name="Rectangles+draw"></a>

### rectangles.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Rectangles+redraw"></a>

### rectangles.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Rectangles</code>](#Rectangles)  
**Access**: public  
**See**: [redraw](#UTILITIES.collection.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="Texts"></a>

## Texts
{Array} Texts                               Collection of Text objects

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


* [Texts](#Texts)
    * [new Texts()](#new_Texts_new)
    * [.point(point)](#Texts+point)
    * [.point()](#Texts+point) ⇒ [<code>Point</code>](#Point)
    * [.x(value)](#Texts+x)
    * [.x()](#Texts+x) ⇒ <code>number</code>
    * [.y(value)](#Texts+y)
    * [.y()](#Texts+y) ⇒ <code>number</code>
    * [.stroke()](#Texts+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow()](#Texts+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.options()](#Texts+options) ⇒ <code>Object</code>
    * [.canvas(value)](#Texts+canvas)
    * [.canvas()](#Texts+canvas) ⇒ <code>string</code>
    * [.aspect()](#Texts+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width()](#Texts+width) ⇒ <code>number</code>
    * [.height()](#Texts+height) ⇒ <code>number</code>
    * [.anchor(value)](#Texts+anchor)
    * [.anchor()](#Texts+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.area()](#Texts+area) ⇒ <code>number</code>
    * [.center()](#Texts+center) ⇒ [<code>Point</code>](#Point)
    * [.endPoint()](#Texts+endPoint) ⇒ [<code>Point</code>](#Point)
    * [.perimeter()](#Texts+perimeter) ⇒ <code>number</code>
    * [.push()](#Texts+push)
    * [.draw(canvas)](#Texts+draw)
    * [.redraw(canvas, point, [clear])](#Texts+redraw)

<a name="new_Texts_new"></a>

### new Texts()
Create Texts object

<a name="Texts+point"></a>

### texts.point(point)
Set point

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |

<a name="Texts+point"></a>

### texts.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Point</code>](#Point) - X & Y axis coordinates  
**Access**: public  
<a name="Texts+x"></a>

### texts.x(value)
Set x-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Texts+x"></a>

### texts.x() ⇒ <code>number</code>
Get x-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="Texts+y"></a>

### texts.y(value)
Set y-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Texts+y"></a>

### texts.y() ⇒ <code>number</code>
Get y-axis value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
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
<a name="Texts+options"></a>

### texts.options() ⇒ <code>Object</code>
Get options

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="Texts+canvas"></a>

### texts.canvas(value)
Set canvas value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [canvas](#PROPERTY_BLOCKS.combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Texts+canvas"></a>

### texts.canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#PROPERTY_BLOCKS.combined.canvas)  
<a name="Texts+aspect"></a>

### texts.aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
**See**: [aspect](#PROPERTY_BLOCKS.combined.aspect)  
<a name="Texts+width"></a>

### texts.width() ⇒ <code>number</code>
Get aspect with

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
**See**: [aspectWidth](#PROPERTY_BLOCKS.combined.aspectWidth)  
<a name="Texts+height"></a>

### texts.height() ⇒ <code>number</code>
Get aspect height

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
**See**: [aspectHeight](#PROPERTY_BLOCKS.combined.aspectHeight)  
<a name="Texts+anchor"></a>

### texts.anchor(value)
Set anchor type

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Texts+anchor"></a>

### texts.anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
**See**: [anchor](#PROPERTY_BLOCKS.combined.anchor)  
<a name="Texts+area"></a>

### texts.area() ⇒ <code>number</code>
Get area of this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.area;](PROPERTY_BLOCKS.combined.area;)  
<a name="Texts+center"></a>

### texts.center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.center;](PROPERTY_BLOCKS.combined.center;)  
<a name="Texts+endPoint"></a>

### texts.endPoint() ⇒ [<code>Point</code>](#Point)
Returns the last Point within this Array

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: [<code>Point</code>](#Point) - Last Array element's X & Y Coordinates  
**Access**: public  
**See**: [PROPERTY_BLOCKS.combined.endPoint;](PROPERTY_BLOCKS.combined.endPoint;)  
<a name="Texts+perimeter"></a>

### texts.perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
**See**: [PROPERTY_BLOCKS.combined.perimeter;](PROPERTY_BLOCKS.combined.perimeter;)  
<a name="Texts+push"></a>

### texts.push()
Pushes child object(s) into this collection

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [UTILITIES.collection.push;](UTILITIES.collection.push;)  
<a name="Texts+draw"></a>

### texts.draw(canvas)
Draw function for collections

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [draw](#UTILITIES.collection.draw)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Texts+redraw"></a>

### texts.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Texts</code>](#Texts)  
**Access**: public  
**See**: [redraw](#UTILITIES.collection.redraw)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

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
{Object}   Animation                        Animation handler

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| timing | <code>function</code> | Timing function |
| draw | <code>function</code> | Draw function |
| duration | <code>number</code> | Duration of animation |


* [Animation](#Animation)
    * [new Animation(duration, timing, draw)](#new_Animation_new)
    * [.timing(value)](#Animation+timing)
    * [.timing()](#Animation+timing) ⇒ <code>function</code>
    * [.draw(Draw)](#Animation+draw)
    * [.draw()](#Animation+draw) ⇒ <code>function</code>
    * [.duration(value)](#Animation+duration)
    * [.duration()](#Animation+duration) ⇒ <code>number</code>
    * [.queue(value)](#Animation+queue)
    * [.queue()](#Animation+queue) ⇒ [<code>Queue</code>](#Queue)
    * [.animate()](#Animation+animate)

<a name="new_Animation_new"></a>

### new Animation(duration, timing, draw)
Creates an animation instance


| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | Duration of animation |
| timing | <code>function</code> | Timing function |
| draw | <code>function</code> | Draw function |

<a name="Animation+timing"></a>

### animation.timing(value)
Set timing

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Timing function |

<a name="Animation+timing"></a>

### animation.timing() ⇒ <code>function</code>
Get timing

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: <code>function</code> - Timing function  
**Read only**: true  
<a name="Animation+draw"></a>

### animation.draw(Draw)
Set draw function

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| Draw | <code>function</code> | function |

<a name="Animation+draw"></a>

### animation.draw() ⇒ <code>function</code>
Get draw function

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: <code>function</code> - Draw function  
**Read only**: true  
<a name="Animation+duration"></a>

### animation.duration(value)
Set duration

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Duration |

<a name="Animation+duration"></a>

### animation.duration() ⇒ <code>number</code>
Get duration

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: <code>number</code> - Duration  
**Read only**: true  
<a name="Animation+queue"></a>

### animation.queue(value)
Set queue

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Queue</code>](#Queue) | Queue object |

<a name="Animation+queue"></a>

### animation.queue() ⇒ [<code>Queue</code>](#Queue)
Get queue

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Queue</code>](#Queue) - Queue object  
**Read only**: true  
<a name="Animation+animate"></a>

### animation.animate()
Initiates animation

**Kind**: instance method of [<code>Animation</code>](#Animation)  
**Access**: public  
<a name="Application"></a>

## Application
{Object}   Application                      Application handler

**Kind**: global class  

* [Application](#Application)
    * [new Application()](#new_Application_new)
    * [.animation](#Application+animation)
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
| sequence | [<code>Queue</code>](#Queue) \| <code>Object</code> | Contains timing, draw, & duration values & functions |
| sequence.duration | <code>number</code> | Duration of animation |
| sequence.timing | <code>function</code> | Timing function |
| sequence.draw | <code>function</code> | Draw function |

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
<a name="SacredCircles"></a>

## SacredCircles
{Object} SacredCircles                      SacredCircles plan

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| point | [<code>Point</code>](#Point) |  | X & Y axis coordinates |
| [radius] | <code>number</code> | <code>25</code> | Radius of circle |
| iterations | <code>number</code> |  | Amount of iterations |
| degrees | [<code>Queue</code>](#Queue) |  | Degrees for generation |
| colors | [<code>Queue</code>](#Queue) |  | Colors for generation |
| master | <code>Object</code> |  | Master collection |


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
    * [.colors(value)](#SacredCircles+colors)
    * [.colors()](#SacredCircles+colors) ⇒ [<code>Queue</code>](#Queue)
    * [.master()](#SacredCircles+master) ⇒ <code>Object</code>
    * [.totalObjects()](#SacredCircles+totalObjects) ⇒ <code>number</code>
    * [.init()](#SacredCircles+init)

<a name="new_SacredCircles_new"></a>

### new SacredCircles()
Create a SacredCircles plan

<a name="SacredCircles+point"></a>

### sacredCircles.point(value)
Set point

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
**See**: [discrete.point](discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="SacredCircles+point"></a>

### sacredCircles.point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [discrete.point](discrete.point)  
<a name="SacredCircles+radius"></a>

### sacredCircles.radius(value)
Set radius value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius of circle |

<a name="SacredCircles+radius"></a>

### sacredCircles.radius() ⇒ <code>number</code>
Get radius value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>number</code> - Radius of circle  
**Read only**: true  
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
<a name="SacredCircles+colors"></a>

### sacredCircles.colors(value)
Set colors value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Array of colors |

<a name="SacredCircles+colors"></a>

### sacredCircles.colors() ⇒ [<code>Queue</code>](#Queue)
Get colors value

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: [<code>Queue</code>](#Queue) - Queue of colors  
**Read only**: true  
<a name="SacredCircles+master"></a>

### sacredCircles.master() ⇒ <code>Object</code>
Get master collection

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>Object</code> - Master collection  
**Access**: public  
<a name="SacredCircles+totalObjects"></a>

### sacredCircles.totalObjects() ⇒ <code>number</code>
Get total objects

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Returns**: <code>number</code> - Total objects  
**Access**: public  
<a name="SacredCircles+init"></a>

### sacredCircles.init()
Sets this plan

**Kind**: instance method of [<code>SacredCircles</code>](#SacredCircles)  
**Access**: public  
<a name="PROPERTY_BLOCKS"></a>

## PROPERTY\_BLOCKS : <code>object</code>
Base object for shared accessors & mutators

**Kind**: global namespace  

* [PROPERTY_BLOCKS](#PROPERTY_BLOCKS) : <code>object</code>
    * [.discrete](#PROPERTY_BLOCKS.discrete) : <code>Object</code>
        * [.area](#PROPERTY_BLOCKS.discrete.area)
        * [.center](#PROPERTY_BLOCKS.discrete.center)
        * [.alpha()](#PROPERTY_BLOCKS.discrete.alpha)
        * [.area()](#PROPERTY_BLOCKS.discrete.area)
        * [.canvas()](#PROPERTY_BLOCKS.discrete.canvas)
        * [.center()](#PROPERTY_BLOCKS.discrete.center)
        * [.offset()](#PROPERTY_BLOCKS.discrete.offset)
        * [.offsetX()](#PROPERTY_BLOCKS.discrete.offsetX)
        * [.offsetY()](#PROPERTY_BLOCKS.discrete.offsetY)
        * [.point()](#PROPERTY_BLOCKS.discrete.point)
        * [.pointX()](#PROPERTY_BLOCKS.discrete.pointX)
        * [.pointY()](#PROPERTY_BLOCKS.discrete.pointY)
        * [.perimeter()](#PROPERTY_BLOCKS.discrete.perimeter)
        * [.radius()](#PROPERTY_BLOCKS.discrete.radius)
    * [.combined](#PROPERTY_BLOCKS.combined) : <code>Object</code>
        * [.anchor()](#PROPERTY_BLOCKS.combined.anchor)
        * [.area()](#PROPERTY_BLOCKS.combined.area)
        * [.aspect()](#PROPERTY_BLOCKS.combined.aspect)
        * [.aspectWidth()](#PROPERTY_BLOCKS.combined.aspectWidth)
        * [.aspectHeight()](#PROPERTY_BLOCKS.combined.aspectHeight)
        * [.canvas()](#PROPERTY_BLOCKS.combined.canvas)
        * [.center()](#PROPERTY_BLOCKS.combined.center)
        * [.endPoint()](#PROPERTY_BLOCKS.combined.endPoint)
        * [.perimeter()](#PROPERTY_BLOCKS.combined.perimeter)
        * [.start()](#PROPERTY_BLOCKS.combined.start)
        * [.end()](#PROPERTY_BLOCKS.combined.end)

<a name="PROPERTY_BLOCKS.discrete"></a>

### PROPERTY_BLOCKS.discrete : <code>Object</code>
Discrete property accessors & mutators

**Kind**: static property of [<code>PROPERTY\_BLOCKS</code>](#PROPERTY_BLOCKS)  

* [.discrete](#PROPERTY_BLOCKS.discrete) : <code>Object</code>
    * [.area](#PROPERTY_BLOCKS.discrete.area)
    * [.center](#PROPERTY_BLOCKS.discrete.center)
    * [.alpha()](#PROPERTY_BLOCKS.discrete.alpha)
    * [.area()](#PROPERTY_BLOCKS.discrete.area)
    * [.canvas()](#PROPERTY_BLOCKS.discrete.canvas)
    * [.center()](#PROPERTY_BLOCKS.discrete.center)
    * [.offset()](#PROPERTY_BLOCKS.discrete.offset)
    * [.offsetX()](#PROPERTY_BLOCKS.discrete.offsetX)
    * [.offsetY()](#PROPERTY_BLOCKS.discrete.offsetY)
    * [.point()](#PROPERTY_BLOCKS.discrete.point)
    * [.pointX()](#PROPERTY_BLOCKS.discrete.pointX)
    * [.pointY()](#PROPERTY_BLOCKS.discrete.pointY)
    * [.perimeter()](#PROPERTY_BLOCKS.discrete.perimeter)
    * [.radius()](#PROPERTY_BLOCKS.discrete.radius)

<a name="PROPERTY_BLOCKS.discrete.area"></a>

#### discrete.area
**Kind**: static property of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
**Notes**: for <Rectangle>, <cImage>  
<a name="PROPERTY_BLOCKS.discrete.center"></a>

#### discrete.center
**Kind**: static property of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
**Notes**: for <Rectangle>, <cImage>  
<a name="PROPERTY_BLOCKS.discrete.alpha"></a>

#### discrete.alpha()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.area"></a>

#### discrete.area()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.canvas"></a>

#### discrete.canvas()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.center"></a>

#### discrete.center()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.offset"></a>

#### discrete.offset()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.offsetX"></a>

#### discrete.offsetX()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.offsetY"></a>

#### discrete.offsetY()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.point"></a>

#### discrete.point()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.pointX"></a>

#### discrete.pointX()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.pointY"></a>

#### discrete.pointY()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.perimeter"></a>

#### discrete.perimeter()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.discrete.radius"></a>

#### discrete.radius()
**Kind**: static method of [<code>discrete</code>](#PROPERTY_BLOCKS.discrete)  
<a name="PROPERTY_BLOCKS.combined"></a>

### PROPERTY_BLOCKS.combined : <code>Object</code>
Combined property accessors & mutators

**Kind**: static property of [<code>PROPERTY\_BLOCKS</code>](#PROPERTY_BLOCKS)  

* [.combined](#PROPERTY_BLOCKS.combined) : <code>Object</code>
    * [.anchor()](#PROPERTY_BLOCKS.combined.anchor)
    * [.area()](#PROPERTY_BLOCKS.combined.area)
    * [.aspect()](#PROPERTY_BLOCKS.combined.aspect)
    * [.aspectWidth()](#PROPERTY_BLOCKS.combined.aspectWidth)
    * [.aspectHeight()](#PROPERTY_BLOCKS.combined.aspectHeight)
    * [.canvas()](#PROPERTY_BLOCKS.combined.canvas)
    * [.center()](#PROPERTY_BLOCKS.combined.center)
    * [.endPoint()](#PROPERTY_BLOCKS.combined.endPoint)
    * [.perimeter()](#PROPERTY_BLOCKS.combined.perimeter)
    * [.start()](#PROPERTY_BLOCKS.combined.start)
    * [.end()](#PROPERTY_BLOCKS.combined.end)

<a name="PROPERTY_BLOCKS.combined.anchor"></a>

#### combined.anchor()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.area"></a>

#### combined.area()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.aspect"></a>

#### combined.aspect()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.aspectWidth"></a>

#### combined.aspectWidth()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.aspectHeight"></a>

#### combined.aspectHeight()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.canvas"></a>

#### combined.canvas()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.center"></a>

#### combined.center()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.endPoint"></a>

#### combined.endPoint()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.perimeter"></a>

#### combined.perimeter()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.start"></a>

#### combined.start()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="PROPERTY_BLOCKS.combined.end"></a>

#### combined.end()
**Kind**: static method of [<code>combined</code>](#PROPERTY_BLOCKS.combined)  
<a name="UTILITIES"></a>

## UTILITIES : <code>object</code>
Shared utility functions

**Kind**: global namespace  

* [UTILITIES](#UTILITIES) : <code>object</code>
    * [.color()](#UTILITIES.color)
        * [.cycle](#UTILITIES.color.cycle)
            * [.stroke(start, end, progress, [max])](#UTILITIES.color.cycle.stroke)
            * [.fill(start, end, progress, [max])](#UTILITIES.color.cycle.fill)
            * [.gradient(start, end, progress, stop, [max])](#UTILITIES.color.cycle.gradient)
            * [.stop(start, end, progress, stop, max, clear, draw)](#UTILITIES.color.cycle.stop)
    * [.draw()](#UTILITIES.draw)
        * [.anchor()](#UTILITIES.draw.anchor)
        * [.axis(offset, color, stop)](#UTILITIES.draw.axis)
        * [.border(aspect, color)](#UTILITIES.draw.border)
    * [.misc()](#UTILITIES.misc)
        * [.clearCanvas(value)](#UTILITIES.misc.clearCanvas)
        * [.pushPop(object)](#UTILITIES.misc.pushPop)
        * [.rotatePoint(origin, degree, distance)](#UTILITIES.misc.rotatePoint)
        * [.showCoordinates([offset], [fontSize])](#UTILITIES.misc.showCoordinates)
    * [.set()](#UTILITIES.set)
        * [.all(property, value)](#UTILITIES.set.all)
        * [.anchorPoint()](#UTILITIES.set.anchorPoint)
        * [.shadow()](#UTILITIES.set.shadow)
        * [.fillType()](#UTILITIES.set.fillType)
            * [~_setStops(gradient, stops)](#UTILITIES.set.fillType.._setStops)
    * [.transition()](#UTILITIES.transition)
        * [.move(degree, distance, [draw], [clear])](#UTILITIES.transition.move)
        * [.rotate(degree, [clear])](#UTILITIES.transition.rotate)

<a name="UTILITIES.color"></a>

### UTILITIES.color()
Utility color functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.color()](#UTILITIES.color)
    * [.cycle](#UTILITIES.color.cycle)
        * [.stroke(start, end, progress, [max])](#UTILITIES.color.cycle.stroke)
        * [.fill(start, end, progress, [max])](#UTILITIES.color.cycle.fill)
        * [.gradient(start, end, progress, stop, [max])](#UTILITIES.color.cycle.gradient)
        * [.stop(start, end, progress, stop, max, clear, draw)](#UTILITIES.color.cycle.stop)

<a name="UTILITIES.color.cycle"></a>

#### color.cycle
Utility color cycling functions

**Kind**: static property of [<code>color</code>](#UTILITIES.color)  

* [.cycle](#UTILITIES.color.cycle)
    * [.stroke(start, end, progress, [max])](#UTILITIES.color.cycle.stroke)
    * [.fill(start, end, progress, [max])](#UTILITIES.color.cycle.fill)
    * [.gradient(start, end, progress, stop, [max])](#UTILITIES.color.cycle.gradient)
    * [.stop(start, end, progress, stop, max, clear, draw)](#UTILITIES.color.cycle.stop)

<a name="UTILITIES.color.cycle.stroke"></a>

##### cycle.stroke(start, end, progress, [max])
Cycle colors for stroke

**Kind**: static method of [<code>cycle</code>](#UTILITIES.color.cycle)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="UTILITIES.color.cycle.fill"></a>

##### cycle.fill(start, end, progress, [max])
Cycle colors for fill

**Kind**: static method of [<code>cycle</code>](#UTILITIES.color.cycle)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="UTILITIES.color.cycle.gradient"></a>

##### cycle.gradient(start, end, progress, stop, [max])
Cycle colors for gradient

**Kind**: static method of [<code>cycle</code>](#UTILITIES.color.cycle)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="UTILITIES.color.cycle.stop"></a>

##### cycle.stop(start, end, progress, stop, max, clear, draw)
Cycle colors for gradient stop(s)

**Kind**: static method of [<code>cycle</code>](#UTILITIES.color.cycle)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>Object</code> | Color model & values |
| end | <code>Object</code> | Color model & values |
| progress | <code>number</code> | Progress time unit; 0.00 - 1.00 |
| stop | <code>number</code> | Color stop to cycle |
| max | <code>number</code> | Maximum number of steps between interpolation |
| clear | <code>function</code> | Clear callback from root object |
| draw | <code>function</code> | Draw callback from root object |

<a name="UTILITIES.draw"></a>

### UTILITIES.draw()
Utility draw functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.draw()](#UTILITIES.draw)
    * [.anchor()](#UTILITIES.draw.anchor)
    * [.axis(offset, color, stop)](#UTILITIES.draw.axis)
    * [.border(aspect, color)](#UTILITIES.draw.border)

<a name="UTILITIES.draw.anchor"></a>

#### draw.anchor()
Draws anchor point

**Kind**: static method of [<code>draw</code>](#UTILITIES.draw)  
**Access**: public  
<a name="UTILITIES.draw.axis"></a>

#### draw.axis(offset, color, stop)
Draws an axis for the associated object

**Kind**: static method of [<code>draw</code>](#UTILITIES.draw)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | Offset of axis |
| color | <code>Object</code> | Color model |
| stop | <code>number</code> | Gradient color stop |

<a name="UTILITIES.draw.border"></a>

#### draw.border(aspect, color)
Draws an axis for the associated object

**Kind**: static method of [<code>draw</code>](#UTILITIES.draw)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| color | <code>Object</code> | Color model |

<a name="UTILITIES.misc"></a>

### UTILITIES.misc()
Utility misc functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.misc()](#UTILITIES.misc)
    * [.clearCanvas(value)](#UTILITIES.misc.clearCanvas)
    * [.pushPop(object)](#UTILITIES.misc.pushPop)
    * [.rotatePoint(origin, degree, distance)](#UTILITIES.misc.rotatePoint)
    * [.showCoordinates([offset], [fontSize])](#UTILITIES.misc.showCoordinates)

<a name="UTILITIES.misc.clearCanvas"></a>

#### misc.clearCanvas(value)
Clears canvas

**Kind**: static method of [<code>misc</code>](#UTILITIES.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Whether to redraw background |

<a name="UTILITIES.misc.pushPop"></a>

#### misc.pushPop(object)
Push or pops the passed object

**Kind**: static method of [<code>misc</code>](#UTILITIES.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Circle, Rectangle, Text |

<a name="UTILITIES.misc.rotatePoint"></a>

#### misc.rotatePoint(origin, degree, distance)
Rotates the origin point by the degree & distance passed

**Kind**: static method of [<code>misc</code>](#UTILITIES.misc)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| origin | [<code>Point</code>](#Point) | Origin point |
| degree | <code>number</code> | Degree to rotate |
| distance | <code>number</code> | Distance from origin |

<a name="UTILITIES.misc.showCoordinates"></a>

#### misc.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: static method of [<code>misc</code>](#UTILITIES.misc)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="UTILITIES.set"></a>

### UTILITIES.set()
Utility draw collection functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.set()](#UTILITIES.set)
    * [.all(property, value)](#UTILITIES.set.all)
    * [.anchorPoint()](#UTILITIES.set.anchorPoint)
    * [.shadow()](#UTILITIES.set.shadow)
    * [.fillType()](#UTILITIES.set.fillType)
        * [~_setStops(gradient, stops)](#UTILITIES.set.fillType.._setStops)

<a name="UTILITIES.set.all"></a>

#### set.all(property, value)
Sets all option values throughout a collection

**Kind**: static method of [<code>set</code>](#UTILITIES.set)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> | Option property |
| value | <code>boolean</code> | True || False |

<a name="UTILITIES.set.anchorPoint"></a>

#### set.anchorPoint()
Sets anchor's point against this object's point location

**Kind**: static method of [<code>set</code>](#UTILITIES.set)  
**Access**: public  
**Notes**: for Rectangle & cImage only  
<a name="UTILITIES.set.shadow"></a>

#### set.shadow()
Sets shadow properties

**Kind**: static method of [<code>set</code>](#UTILITIES.set)  
**Access**: public  
<a name="UTILITIES.set.fillType"></a>

#### set.fillType()
Sets fill type of the associated object

**Kind**: static method of [<code>set</code>](#UTILITIES.set)  
**Access**: public  
<a name="UTILITIES.set.fillType.._setStops"></a>

##### fillType~\_setStops(gradient, stops)
Sets stops for gradient fill types

**Kind**: inner method of [<code>fillType</code>](#UTILITIES.set.fillType)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| gradient | <code>Object</code> | [description] |
| stops | <code>Array.&lt;Stops&gt;</code> | [description] |

<a name="UTILITIES.transition"></a>

### UTILITIES.transition()
Utility draw collection functions

**Kind**: static method of [<code>UTILITIES</code>](#UTILITIES)  

* [.transition()](#UTILITIES.transition)
    * [.move(degree, distance, [draw], [clear])](#UTILITIES.transition.move)
    * [.rotate(degree, [clear])](#UTILITIES.transition.rotate)

<a name="UTILITIES.transition.move"></a>

#### transition.move(degree, distance, [draw], [clear])
Move this object

**Kind**: static method of [<code>transition</code>](#UTILITIES.transition)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [draw] | <code>boolean</code> | <code>false</code> | Draw post movement |
| [clear] | <code>boolean</code> | <code>false</code> | Clear canvas during each movement |

<a name="UTILITIES.transition.rotate"></a>

#### transition.rotate(degree, [clear])
Rotate this object

**Kind**: static method of [<code>transition</code>](#UTILITIES.transition)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

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
    * [.isDecimal(value)](#VALIDATION.isDecimal) ⇒ <code>boolean</code>
    * [.isDegree(value)](#VALIDATION.isDegree) ⇒ <code>boolean</code>
    * [.isFillType(value)](#VALIDATION.isFillType) ⇒ <code>boolean</code>
    * [.isGradient(value)](#VALIDATION.isGradient) ⇒ <code>boolean</code>
    * [.isInDom(value)](#VALIDATION.isInDom) ⇒ <code>boolean</code>
    * [.isNumber(value)](#VALIDATION.isNumber) ⇒ <code>boolean</code>
    * [.isPlan(value)](#VALIDATION.isPlan) ⇒ <code>boolean</code>
    * [.isPoint(value)](#VALIDATION.isPoint) ⇒ <code>boolean</code>
    * [.isPointNAspect(value)](#VALIDATION.isPointNAspect) ⇒ <code>boolean</code>
    * [.isRadian(value)](#VALIDATION.isRadian) ⇒ <code>boolean</code>
    * [.isRadius(value)](#VALIDATION.isRadius) ⇒ <code>boolean</code>
    * [.isRepetition(value)](#VALIDATION.isRepetition) ⇒ <code>boolean</code>
    * [.isSegments(value)](#VALIDATION.isSegments) ⇒ <code>boolean</code>
    * [.isStop(value)](#VALIDATION.isStop) ⇒ <code>boolean</code>
    * [.isStrokeType(value)](#VALIDATION.isStrokeType) ⇒ <code>boolean</code>
    * [.isWidth(value)](#VALIDATION.isWidth) ⇒ <code>boolean</code>
    * [.Fill#_isRepetition(value)](#VALIDATION.Fill+_isRepetition) ⇒ <code>boolean</code>
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

<a name="VALIDATION.isPlan"></a>

### VALIDATION.isPlan(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Plan

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Plan object |

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

<a name="VALIDATION.isStrokeType"></a>

### VALIDATION.isStrokeType(value) ⇒ <code>boolean</code>
Returns whether the passed value is a stroke type

**Kind**: static method of [<code>VALIDATION</code>](#VALIDATION)  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Stroke type |

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

<a name="initCanvasLab"></a>

## initCanvasLab([canvas])
Initiates canvasLab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [canvas] | <code>string</code> | Canvas identifier |

