## Classes

<dl>
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
<dt><a href="#Fill">Fill</a></dt>
<dd><p>{Object} Fill                               Fill properties of associated object</p>
</dd>
<dt><a href="#Font">Font</a></dt>
<dd><p>{Object} Font                               Font base class for text objects</p>
</dd>
<dt><a href="#Options">Options</a></dt>
<dd><p>{Object}  Options                           Options for shapes, lines, and groups</p>
</dd>
<dt><a href="#Point">Point</a></dt>
<dd><p>{Object}  Point                             X &amp; Y coordinates for an object</p>
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
<dt><a href="#Animation">Animation</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#discrete">discrete</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#combined">combined</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#draw">draw</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#collection">collection</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#get">get</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#set">set</a> : <code>Object</code></dt>
<dd></dd>
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

## Constants

<dl>
<dt><a href="#DEBUG">DEBUG</a></dt>
<dd><p>DEBUG General debug module</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#initCanvasLab">initCanvasLab([canvas])</a></dt>
<dd><p>Initiates canvasLab</p>
</dd>
</dl>

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
    * [.x](#Anchor+x)
    * [.x](#Anchor+x) ⇒ <code>number</code>
    * [.y](#Anchor+y)
    * [.y](#Anchor+y) ⇒ <code>number</code>
    * [.align](#Anchor+align)
    * [.align](#Anchor+align) ⇒ <code>string</code>

<a name="Anchor+x"></a>

### anchor.x
Set x-axis value

**Kind**: instance property of [<code>Anchor</code>](#Anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Anchor+x"></a>

### anchor.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>number</code> - X coordinate value  
<a name="Anchor+y"></a>

### anchor.y
Set the y-axis value

**Kind**: instance property of [<code>Anchor</code>](#Anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Anchor+y"></a>

### anchor.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>number</code> - Y coordinate value  
<a name="Anchor+align"></a>

### anchor.align
Set anchor alignment

**Kind**: instance property of [<code>Anchor</code>](#Anchor)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="Anchor+align"></a>

### anchor.align ⇒ <code>string</code>
Get anchor alignment

**Kind**: instance property of [<code>Anchor</code>](#Anchor)  
**Returns**: <code>string</code> - Anchor alignment  
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
    * [.start](#Angle+start)
    * [.start](#Angle+start) ⇒ <code>number</code>
    * [.end](#Angle+end)
    * [.end](#Angle+end) ⇒ <code>number</code>
    * [.clockwise](#Angle+clockwise)
    * [.clockwise](#Angle+clockwise) ⇒ <code>boolean</code>
    * [.startInRadians](#Angle+startInRadians) ⇒ <code>number</code>
    * [.endInRadians](#Angle+endInRadians) ⇒ <code>number</code>
    * [._convert2Radian(value)](#Angle+_convert2Radian) ⇒ <code>number</code>
    * [._convert2Degree(value)](#Angle+_convert2Degree) ⇒ <code>number</code>

<a name="new_Angle_new"></a>

### new Angle(start, end, clockwise)
Create an angle


| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | The angle at which the arc starts in degrees, measured from the positive x-axis |
| end | <code>number</code> | The angle at which the arc ends in degrees, measured from the positive x-axis |
| clockwise | <code>boolean</code> | Draws the arc clockwise between the start and end angles |

<a name="Angle+start"></a>

### angle.start
Set start angle

**Kind**: instance property of [<code>Angle</code>](#Angle)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Start angle; in degrees |

<a name="Angle+start"></a>

### angle.start ⇒ <code>number</code>
Get start angle

**Kind**: instance property of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - Start value; in degrees  
<a name="Angle+end"></a>

### angle.end
Set end angle

**Kind**: instance property of [<code>Angle</code>](#Angle)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | End angle; in degrees |

<a name="Angle+end"></a>

### angle.end ⇒ <code>number</code>
Get end angle

**Kind**: instance property of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - End angle; in degrees  
<a name="Angle+clockwise"></a>

### angle.clockwise
Set clockwise

**Kind**: instance property of [<code>Angle</code>](#Angle)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Clockwise; true | false |

<a name="Angle+clockwise"></a>

### angle.clockwise ⇒ <code>boolean</code>
Get clockwise

**Kind**: instance property of [<code>Angle</code>](#Angle)  
**Returns**: <code>boolean</code> - Clockwise; true | false  
<a name="Angle+startInRadians"></a>

### angle.startInRadians ⇒ <code>number</code>
Get start angle in radians

**Kind**: instance property of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - Start value; to radians  
<a name="Angle+endInRadians"></a>

### angle.endInRadians ⇒ <code>number</code>
Get end angle in radians

**Kind**: instance property of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - End value; in radians  
<a name="Angle+_convert2Radian"></a>

### angle.\_convert2Radian(value) ⇒ <code>number</code>
Convert degree to radian

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - Conversion in radians  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Degree |

<a name="Angle+_convert2Degree"></a>

### angle.\_convert2Degree(value) ⇒ <code>number</code>
Convert radian to degree

**Kind**: instance method of [<code>Angle</code>](#Angle)  
**Returns**: <code>number</code> - Conversion in degrees  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radian |

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
    * [.width](#Aspect+width)
    * [.width](#Aspect+width) ⇒ <code>number</code>
    * [.height](#Aspect+height)
    * [.height](#Aspect+height) ⇒ <code>number</code>
    * [.heightCenter](#Aspect+heightCenter) ⇒ <code>number</code>
    * [.widthCenter](#Aspect+widthCenter) ⇒ <code>number</code>
    * [.center](#Aspect+center) ⇒ [<code>Point</code>](#Point)

<a name="new_Aspect_new"></a>

### new Aspect(width, height)
Create an aspect


| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | Width of aspect |
| height | <code>number</code> | Height of aspect |

<a name="Aspect+width"></a>

### aspect.width
Set width

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="Aspect+width"></a>

### aspect.width ⇒ <code>number</code>
Get width

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Width value  
<a name="Aspect+height"></a>

### aspect.height
Set height

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="Aspect+height"></a>

### aspect.height ⇒ <code>number</code>
Get height

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Height value  
<a name="Aspect+heightCenter"></a>

### aspect.heightCenter ⇒ <code>number</code>
Get center of height

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Center of height  
<a name="Aspect+widthCenter"></a>

### aspect.widthCenter ⇒ <code>number</code>
Get center of width

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  
**Returns**: <code>number</code> - Center of with  
<a name="Aspect+center"></a>

### aspect.center ⇒ [<code>Point</code>](#Point)
Get center of aspect

**Kind**: instance property of [<code>Aspect</code>](#Aspect)  
**Returns**: [<code>Point</code>](#Point) - Center point of this aspect  
<a name="ControlPoints"></a>

## ControlPoints
{Object} ControlPoints                      Defines the shape of a bezier curve

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| p0 | [<code>Point</code>](#Point) | Control point one |
| p1 | [<code>Point</code>](#Point) | Control point two |
| p2 | [<code>Point</code>](#Point) | Control point three |
| p3 | [<code>Point</code>](#Point) | Control point four |


* [ControlPoints](#ControlPoints)
    * [new ControlPoints(p0, p1, p2, p3)](#new_ControlPoints_new)
    * [.p0](#ControlPoints+p0)
    * [.p0](#ControlPoints+p0) ⇒ [<code>Point</code>](#Point)
    * [.p1](#ControlPoints+p1)
    * [.p1](#ControlPoints+p1) ⇒ [<code>Point</code>](#Point)
    * [.p2](#ControlPoints+p2)
    * [.p2](#ControlPoints+p2) ⇒ [<code>Point</code>](#Point)
    * [.p3](#ControlPoints+p3)
    * [.p3](#ControlPoints+p3) ⇒ [<code>Point</code>](#Point)

<a name="new_ControlPoints_new"></a>

### new ControlPoints(p0, p1, p2, p3)
Create control points


| Param | Type | Description |
| --- | --- | --- |
| p0 | [<code>Point</code>](#Point) | Control point one |
| p1 | [<code>Point</code>](#Point) | Control point two |
| p2 | [<code>Point</code>](#Point) | Control point three |
| p3 | [<code>Point</code>](#Point) | Control point four |

<a name="ControlPoints+p0"></a>

### controlPoints.p0
Set control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Control Point ( x, y ) values |

<a name="ControlPoints+p0"></a>

### controlPoints.p0 ⇒ [<code>Point</code>](#Point)
Get control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: [<code>Point</code>](#Point) - Control Point ( x, y ) values  
<a name="ControlPoints+p1"></a>

### controlPoints.p1
Set control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Control Point ( x, y ) values |

<a name="ControlPoints+p1"></a>

### controlPoints.p1 ⇒ [<code>Point</code>](#Point)
Get control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: [<code>Point</code>](#Point) - Control Point ( x, y ) values  
<a name="ControlPoints+p2"></a>

### controlPoints.p2
Set control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Control Point ( x, y ) values |

<a name="ControlPoints+p2"></a>

### controlPoints.p2 ⇒ [<code>Point</code>](#Point)
Get control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: [<code>Point</code>](#Point) - Control Point ( x, y ) values  
<a name="ControlPoints+p3"></a>

### controlPoints.p3
Set control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Control Point ( x, y ) values |

<a name="ControlPoints+p3"></a>

### controlPoints.p3 ⇒ [<code>Point</code>](#Point)
Get control point one

**Kind**: instance property of [<code>ControlPoints</code>](#ControlPoints)  
**Returns**: [<code>Point</code>](#Point) - Control Point ( x, y ) values  
<a name="Fill"></a>

## Fill
{Object} Fill                               Fill properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>string</code> | <code>&quot;&#x27;255, 255, 255&#x27;&quot;</code> | RGB color value; r, g, b |
| [alpha] | <code>number</code> | <code>0</code> | Alpha (transparency); number/decimal |


* [Fill](#Fill)
    * [new Fill(color, alpha)](#new_Fill_new)
    * [.color](#Fill+color)
    * [.color](#Fill+color) ⇒ <code>string</code>
    * [.alpha](#Fill+alpha)
    * [.alpha](#Fill+alpha) ⇒ <code>number</code>

<a name="new_Fill_new"></a>

### new Fill(color, alpha)
Create a fill


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | RGB color value |
| alpha | <code>number</code> | Alpha value; number/decimal |

<a name="Fill+color"></a>

### fill.color
Set color value

**Kind**: instance property of [<code>Fill</code>](#Fill)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="Fill+color"></a>

### fill.color ⇒ <code>string</code>
Get color value

**Kind**: instance property of [<code>Fill</code>](#Fill)  
**Returns**: <code>string</code> - RGB color value  
<a name="Fill+alpha"></a>

### fill.alpha
Set alpha value

**Kind**: instance property of [<code>Fill</code>](#Fill)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; number/decimal |

<a name="Fill+alpha"></a>

### fill.alpha ⇒ <code>number</code>
Get alpha value

**Kind**: instance property of [<code>Fill</code>](#Fill)  
**Returns**: <code>number</code> - Alpha value; number/decimal  
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
    * [.type](#Font+type)
    * [.type](#Font+type) ⇒ <code>string</code>
    * [.size](#Font+size)
    * [.size](#Font+size) ⇒ <code>number</code>
    * [.weight](#Font+weight)
    * [.weight](#Font+weight) ⇒ <code>number</code>
    * [.maxWidth](#Font+maxWidth)
    * [.maxWidth](#Font+maxWidth) ⇒ <code>number</code>
    * [.offset](#Font+offset) ⇒ [<code>Point</code>](#Point)
    * [.font](#Font+font)
    * [.font](#Font+font) ⇒ <code>string</code>

<a name="Font+type"></a>

### font.type
Set font type

**Kind**: instance property of [<code>Font</code>](#Font)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Type face; typography name |

<a name="Font+type"></a>

### font.type ⇒ <code>string</code>
Get type

**Kind**: instance property of [<code>Font</code>](#Font)  
**Returns**: <code>string</code> - Type face; typography name  
<a name="Font+size"></a>

### font.size
Set font size

**Kind**: instance property of [<code>Font</code>](#Font)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font size |

<a name="Font+size"></a>

### font.size ⇒ <code>number</code>
Get font size

**Kind**: instance property of [<code>Font</code>](#Font)  
**Returns**: <code>number</code> - Font size  
<a name="Font+weight"></a>

### font.weight
Set font weight

**Kind**: instance property of [<code>Font</code>](#Font)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font weight |

<a name="Font+weight"></a>

### font.weight ⇒ <code>number</code>
Get font weight

**Kind**: instance property of [<code>Font</code>](#Font)  
**Returns**: <code>number</code> - Font weight  
<a name="Font+maxWidth"></a>

### font.maxWidth
Set font's max width

**Kind**: instance property of [<code>Font</code>](#Font)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Max width |

<a name="Font+maxWidth"></a>

### font.maxWidth ⇒ <code>number</code>
Get font's max width

**Kind**: instance property of [<code>Font</code>](#Font)  
**Returns**: <code>number</code> - Max width  
<a name="Font+offset"></a>

### font.offset ⇒ [<code>Point</code>](#Point)
Get font's offset

**Kind**: instance property of [<code>Font</code>](#Font)  
**Returns**: [<code>Point</code>](#Point) - Font's offset; ( x, y )  
<a name="Font+font"></a>

### font.font
Set font

**Kind**: instance property of [<code>Font</code>](#Font)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS style font property syntax |

<a name="Font+font"></a>

### font.font ⇒ <code>string</code>
Get font

**Kind**: instance property of [<code>Font</code>](#Font)  
**Returns**: <code>string</code> - CSS style font property syntax  
<a name="Options"></a>

## Options
{Object}  Options                           Options for shapes, lines, and groups

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [shadow] | <code>boolean</code> | <code>false</code> | Show shadow |
| [border] | <code>boolean</code> | <code>false</code> | Show border |
| [axis] | <code>boolean</code> | <code>false</code> | Show axis |
| [points] | <code>boolean</code> | <code>false</code> | Show points |
| [anchor] | <code>boolean</code> | <code>false</code> | Show anchor |
| [coordinates] | <code>boolean</code> | <code>false</code> | Show coordinates |
| [controlPoints] | <code>boolean</code> | <code>false</code> | Show control points |
| master | <code>Object</code> |  | Master object to reference |


* [Options](#Options)
    * [new Options(shadow, border, axis, points, anchor, coordinates, controlPoints)](#new_Options_new)
    * [.shadow](#Options+shadow)
    * [.shadow](#Options+shadow) ⇒ <code>boolean</code>
    * [.border](#Options+border)
    * [.border](#Options+border) ⇒ <code>boolean</code>
    * [.axis](#Options+axis)
    * [.axis](#Options+axis) ⇒ <code>boolean</code>
    * [.anchor](#Options+anchor)
    * [.anchor](#Options+anchor) ⇒ <code>boolean</code>
    * [.coordinates](#Options+coordinates)
    * [.coordinates](#Options+coordinates) ⇒ <code>boolean</code>
    * [.controlPoints](#Options+controlPoints)
    * [.controlPoints](#Options+controlPoints) ⇒ <code>boolean</code>
    * [.master](#Options+master)
    * [.master](#Options+master) ⇒ <code>Object</code>

<a name="new_Options_new"></a>

### new Options(shadow, border, axis, points, anchor, coordinates, controlPoints)
Create an options object


| Param | Type | Description |
| --- | --- | --- |
| shadow | <code>boolean</code> | Show shadow |
| border | <code>boolean</code> | Show border |
| axis | <code>boolean</code> | Show axis |
| points | <code>boolean</code> | Show points |
| anchor | <code>boolean</code> | Show anchor |
| coordinates | <code>boolean</code> | Show coordinates |
| controlPoints | <code>boolean</code> | Show control points |

<a name="Options+shadow"></a>

### options.shadow
Set shadow value

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Shadow; true | false |

<a name="Options+shadow"></a>

### options.shadow ⇒ <code>boolean</code>
Get shadow value

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Shadow; true | false  
<a name="Options+border"></a>

### options.border
Set border value

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Border; true | false |

<a name="Options+border"></a>

### options.border ⇒ <code>boolean</code>
Get border value

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Border; true | false  
<a name="Options+axis"></a>

### options.axis
Set axis value

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Axis; true | false |

<a name="Options+axis"></a>

### options.axis ⇒ <code>boolean</code>
Get axis value

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Axis; true | false  
<a name="Options+anchor"></a>

### options.anchor
Set anchor value

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Anchor; true | false |

<a name="Options+anchor"></a>

### options.anchor ⇒ <code>boolean</code>
Get anchor value

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Anchor; true | false  
<a name="Options+coordinates"></a>

### options.coordinates
Set coordinates value

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Coordinates; true | false |

<a name="Options+coordinates"></a>

### options.coordinates ⇒ <code>boolean</code>
Get coordinates value

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Coordinates; true | false  
<a name="Options+controlPoints"></a>

### options.controlPoints
Set control points value

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Control points; true | false |

<a name="Options+controlPoints"></a>

### options.controlPoints ⇒ <code>boolean</code>
Get control points value

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>boolean</code> - Control points; true | false  
<a name="Options+master"></a>

### options.master
Set master object

**Kind**: instance property of [<code>Options</code>](#Options)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | CanvasLab Object |

<a name="Options+master"></a>

### options.master ⇒ <code>Object</code>
Get master object

**Kind**: instance property of [<code>Options</code>](#Options)  
**Returns**: <code>Object</code> - CanvasLab Object  
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
    * [.x](#Point+x)
    * [.x](#Point+x) ⇒ <code>number</code>
    * [.y](#Point+y)
    * [.y](#Point+y) ⇒ <code>number</code>
    * [.canvas](#Point+canvas)
    * [.canvas](#Point+canvas) ⇒ <code>string</code>
    * [.options](#Point+options) ⇒ [<code>Options</code>](#Options)
    * [.center](#Point+center) ⇒ [<code>Point</code>](#Point)
    * [.drawOptions(offset)](#Point+drawOptions)
    * [.invert()](#Point+invert)

<a name="new_Point_new"></a>

### new Point(x, y)
Create a point


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coordinate value |
| y | <code>number</code> | Y coordinate value |

<a name="Point+x"></a>

### point.x
Set x-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Point+x"></a>

### point.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: <code>number</code> - X coordinate value  
<a name="Point+y"></a>

### point.y
Set the y-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Point+y"></a>

### point.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: <code>number</code> - Y coordinate value  
<a name="Point+canvas"></a>

### point.canvas
Set canvas value

**Kind**: instance property of [<code>Point</code>](#Point)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Point+canvas"></a>

### point.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: <code>string</code> - Canvas id  
<a name="Point+options"></a>

### point.options ⇒ [<code>Options</code>](#Options)
Get options

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: [<code>Options</code>](#Options) - Options object  
<a name="Point+center"></a>

### point.center ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance property of [<code>Point</code>](#Point)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
<a name="Point+drawOptions"></a>

### point.drawOptions(offset)
Draws associated options

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | Offset of drawable options |

<a name="Point+invert"></a>

### point.invert()
Invert x & y coordinate values

**Kind**: instance method of [<code>Point</code>](#Point)  
<a name="Shadow"></a>

## Shadow
{Object} Shadow                             Shadow of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>string</code> | <code>&quot;&#x27;0, 0, 0&#x27;&quot;</code> | RGB color value; r, g, b |
| [alpha] | <code>number</code> | <code>1</code> | Alpha (transparency) number/decimal |
| [blur] | <code>number</code> | <code>3</code> | Blur strength |
| offset | [<code>Point</code>](#Point) |  | Point offset coordinates |


* [Shadow](#Shadow)
    * [new Shadow(color, alpha, blur, offset)](#new_Shadow_new)
    * [.color](#Shadow+color)
    * [.color](#Shadow+color) ⇒ <code>string</code>
    * [.alpha](#Shadow+alpha)
    * [.alpha](#Shadow+alpha) ⇒ <code>number</code>
    * [.blur](#Shadow+blur)
    * [.blur](#Shadow+blur) ⇒ <code>number</code>
    * [.offset](#Shadow+offset)
    * [.offset](#Shadow+offset) ⇒ [<code>Point</code>](#Point)
    * [.x](#Shadow+x)
    * [.x](#Shadow+x) ⇒ <code>number</code>
    * [.y](#Shadow+y)
    * [.y](#Shadow+y) ⇒ <code>number</code>

<a name="new_Shadow_new"></a>

### new Shadow(color, alpha, blur, offset)
Create a shadow


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | RGB color value |
| alpha | <code>number</code> | Alpha value; number/decimal |
| blur | <code>number</code> | Shadow blur value |
| offset | [<code>Point</code>](#Point) | Shadow offset |

<a name="Shadow+color"></a>

### shadow.color
Set color value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="Shadow+color"></a>

### shadow.color ⇒ <code>string</code>
Get color value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>string</code> - RGB color value  
<a name="Shadow+alpha"></a>

### shadow.alpha
Set alpha value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; number/decimal |

<a name="Shadow+alpha"></a>

### shadow.alpha ⇒ <code>number</code>
Get alpha value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - Alpha value; number/decimal  
<a name="Shadow+blur"></a>

### shadow.blur
Set blur value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  

| Param | Type | Description |
| --- | --- | --- |
| blur | <code>number</code> | Blur value |

<a name="Shadow+blur"></a>

### shadow.blur ⇒ <code>number</code>
Get blur value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - Blur value  
<a name="Shadow+offset"></a>

### shadow.offset
Set offset

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**See**: [offset](#discrete.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="Shadow+offset"></a>

### shadow.offset ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**See**: [offset](#discrete.offset)  
<a name="Shadow+x"></a>

### shadow.x
Set x-axis offset value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**See**: [offsetX](#discrete.offsetX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Shadow+x"></a>

### shadow.x ⇒ <code>number</code>
Get x-axis offset value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - X coordinate value  
**See**: [offsetX](#discrete.offsetX)  
<a name="Shadow+y"></a>

### shadow.y
Set the y-axis offset value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**See**: [offsetY](#discrete.offsetY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Shadow+y"></a>

### shadow.y ⇒ <code>number</code>
Get y-axis offset value

**Kind**: instance property of [<code>Shadow</code>](#Shadow)  
**Returns**: <code>number</code> - Y coordinate value  
**See**: [offsetY](#discrete.offsetY)  
<a name="Stroke"></a>

## Stroke
{Object}   Stroke                           Stroke properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>number</code> | <code>0</code> | Type: (0) Solid or (1) Dashed |
| [segments] | <code>Array.&lt;number&gt;</code> | <code>[5, 5]</code> | Dashed line segment distance(s) |
| [color] | <code>string</code> | <code>&quot;&#x27;0, 0, 0&#x27;&quot;</code> | RGB color value; r, g, b |
| [alpha] | <code>number</code> | <code>1</code> | Alpha (transparency); number/decimal |
| [width] | <code>number</code> | <code>2</code> | Thickness of stroke |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |


* [Stroke](#Stroke)
    * [new Stroke(type, segments, color, alpha, width)](#new_Stroke_new)
    * [.type](#Stroke+type)
    * [.type](#Stroke+type) ⇒ <code>number</code>
    * [.segments](#Stroke+segments)
    * [.segments](#Stroke+segments) ⇒ <code>Array</code>
    * [.color](#Stroke+color)
    * [.color](#Stroke+color) ⇒ <code>string</code>
    * [.alpha](#Stroke+alpha)
    * [.alpha](#Stroke+alpha) ⇒ <code>number</code>
    * [.width](#Stroke+width)
    * [.width](#Stroke+width) ⇒ <code>number</code>

<a name="new_Stroke_new"></a>

### new Stroke(type, segments, color, alpha, width)
Create a stroke


| Param | Type | Description |
| --- | --- | --- |
| type | <code>number</code> | Type: (0) Solid or (1) Dashed |
| segments | <code>Array.&lt;number&gt;</code> | Dashed line segment distance(s) |
| color | <code>string</code> | RGB color value |
| alpha | <code>number</code> | Alpha value; number/decimal |
| width | <code>number</code> | Thickness of stroke |

<a name="Stroke+type"></a>

### stroke.type
Set type

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Type: (0) Solid or (1) Dashed |

<a name="Stroke+type"></a>

### stroke.type ⇒ <code>number</code>
Get type

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>number</code> - Type: (0) Solid or (1) Dashed  
<a name="Stroke+segments"></a>

### stroke.segments
Set segment value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Dashed line segment distance(s) |

<a name="Stroke+segments"></a>

### stroke.segments ⇒ <code>Array</code>
Get segment value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>Array</code> - Dashed line segment distance(s)  
<a name="Stroke+color"></a>

### stroke.color
Set color value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="Stroke+color"></a>

### stroke.color ⇒ <code>string</code>
Get color value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>string</code> - RGB color value  
<a name="Stroke+alpha"></a>

### stroke.alpha
Set alpha value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; number/decimal |

<a name="Stroke+alpha"></a>

### stroke.alpha ⇒ <code>number</code>
Get alpha value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>number</code> - Alpha value; number/decimal  
<a name="Stroke+width"></a>

### stroke.width
Set width value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Thickness of stroke |

<a name="Stroke+width"></a>

### stroke.width ⇒ <code>number</code>
Get width value

**Kind**: instance property of [<code>Stroke</code>](#Stroke)  
**Returns**: <code>number</code> - Thickness of stroke  
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
    * [.shadow](#OptionsCollection+shadow)
    * [.shadow](#OptionsCollection+shadow) ⇒ <code>boolean</code>
    * [.border](#OptionsCollection+border)
    * [.border](#OptionsCollection+border) ⇒ <code>boolean</code>
    * [.axis](#OptionsCollection+axis)
    * [.axis](#OptionsCollection+axis) ⇒ <code>boolean</code>
    * [.coordinates](#OptionsCollection+coordinates)
    * [.coordinates](#OptionsCollection+coordinates) ⇒ <code>boolean</code>
    * [.controlPoints](#OptionsCollection+controlPoints)
    * [.controlPoints](#OptionsCollection+controlPoints) ⇒ <code>boolean</code>

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

### optionsCollection.shadow
Set shadow value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Shadow; true | false |

<a name="OptionsCollection+shadow"></a>

### optionsCollection.shadow ⇒ <code>boolean</code>
Get shadow value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Shadow; true | false  
<a name="OptionsCollection+border"></a>

### optionsCollection.border
Set border value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Border; true | false |

<a name="OptionsCollection+border"></a>

### optionsCollection.border ⇒ <code>boolean</code>
Get border value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Border; true | false  
<a name="OptionsCollection+axis"></a>

### optionsCollection.axis
Set axis value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Axis; true | false |

<a name="OptionsCollection+axis"></a>

### optionsCollection.axis ⇒ <code>boolean</code>
Get axis value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Axis; true | false  
<a name="OptionsCollection+coordinates"></a>

### optionsCollection.coordinates
Set coordinates value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Coordinates; true | false |

<a name="OptionsCollection+coordinates"></a>

### optionsCollection.coordinates ⇒ <code>boolean</code>
Get coordinates value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Coordinates; true | false  
<a name="OptionsCollection+controlPoints"></a>

### optionsCollection.controlPoints
Set control points value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Control points; true | false |

<a name="OptionsCollection+controlPoints"></a>

### optionsCollection.controlPoints ⇒ <code>boolean</code>
Get control points value

**Kind**: instance property of [<code>OptionsCollection</code>](#OptionsCollection)  
**Returns**: <code>boolean</code> - Control points; true | false  
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
    * [.x](#PointCollection+x)
    * [.x](#PointCollection+x) ⇒ <code>number</code>
    * [.y](#PointCollection+y)
    * [.y](#PointCollection+y) ⇒ <code>number</code>
    * [.options](#PointCollection+options) ⇒ [<code>OptionsCollection</code>](#OptionsCollection)
    * [.invert()](#PointCollection+invert)

<a name="new_PointCollection_new"></a>

### new PointCollection()
Create a point collection

<a name="PointCollection+x"></a>

### pointCollection.x
Set x-axis value

**Kind**: instance property of [<code>PointCollection</code>](#PointCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="PointCollection+x"></a>

### pointCollection.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>PointCollection</code>](#PointCollection)  
**Returns**: <code>number</code> - X coordinate value  
<a name="PointCollection+y"></a>

### pointCollection.y
Set the y-axis value

**Kind**: instance property of [<code>PointCollection</code>](#PointCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="PointCollection+y"></a>

### pointCollection.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>PointCollection</code>](#PointCollection)  
**Returns**: <code>number</code> - Y coordinate value  
<a name="PointCollection+options"></a>

### pointCollection.options ⇒ [<code>OptionsCollection</code>](#OptionsCollection)
Get options

**Kind**: instance property of [<code>PointCollection</code>](#PointCollection)  
**Returns**: [<code>OptionsCollection</code>](#OptionsCollection) - Options collection object  
<a name="PointCollection+invert"></a>

### pointCollection.invert()
Invert x & y coordinate values

**Kind**: instance method of [<code>PointCollection</code>](#PointCollection)  
<a name="ShadowCollection"></a>

## ShadowCollection
{Object} ShadowCollection                   Shadow of associated object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | RGB color value; r, g, b |
| alpha | <code>number</code> | Alpha (transparency); number/decimal |
| blur | <code>number</code> | Blur strength |
| offset | [<code>Point</code>](#Point) | Point offset coordinates |


* [ShadowCollection](#ShadowCollection)
    * [new ShadowCollection()](#new_ShadowCollection_new)
    * [.color](#ShadowCollection+color)
    * [.color](#ShadowCollection+color) ⇒ <code>string</code>
    * [.alpha](#ShadowCollection+alpha)
    * [.alpha](#ShadowCollection+alpha) ⇒ <code>number</code>
    * [.blur](#ShadowCollection+blur)
    * [.blur](#ShadowCollection+blur) ⇒ <code>number</code>
    * [.offset](#ShadowCollection+offset)
    * [.offset](#ShadowCollection+offset) ⇒ [<code>Point</code>](#Point)
    * [.x](#ShadowCollection+x)
    * [.x](#ShadowCollection+x) ⇒ <code>number</code>
    * [.y](#ShadowCollection+y)
    * [.y](#ShadowCollection+y) ⇒ <code>number</code>

<a name="new_ShadowCollection_new"></a>

### new ShadowCollection()
Create a shadow collection

<a name="ShadowCollection+color"></a>

### shadowCollection.color
Set color value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="ShadowCollection+color"></a>

### shadowCollection.color ⇒ <code>string</code>
Get color value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>string</code> - RGB color value  
<a name="ShadowCollection+alpha"></a>

### shadowCollection.alpha
Set alpha value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; number/decimal |

<a name="ShadowCollection+alpha"></a>

### shadowCollection.alpha ⇒ <code>number</code>
Get alpha value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - Alpha value; number/decimal  
<a name="ShadowCollection+blur"></a>

### shadowCollection.blur
Set blur value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  

| Param | Type | Description |
| --- | --- | --- |
| blur | <code>number</code> | Blur value |

<a name="ShadowCollection+blur"></a>

### shadowCollection.blur ⇒ <code>number</code>
Get blur value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - Blur value  
<a name="ShadowCollection+offset"></a>

### shadowCollection.offset
Set offset

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="ShadowCollection+offset"></a>

### shadowCollection.offset ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
<a name="ShadowCollection+x"></a>

### shadowCollection.x
Set x-axis offset value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="ShadowCollection+x"></a>

### shadowCollection.x ⇒ <code>number</code>
Get x-axis offset value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - X coordinate value  
<a name="ShadowCollection+y"></a>

### shadowCollection.y
Set the y-axis offset value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="ShadowCollection+y"></a>

### shadowCollection.y ⇒ <code>number</code>
Get y-axis offset value

**Kind**: instance property of [<code>ShadowCollection</code>](#ShadowCollection)  
**Returns**: <code>number</code> - Y coordinate value  
<a name="StrokeCollection"></a>

## StrokeCollection
{Object}   StrokeCollection                 Stroke properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>number</code> | <code>0</code> | Type: (0) Solid or (1) Dashed |
| [segments] | <code>Array.&lt;number&gt;</code> | <code>[5, 5]</code> | Dashed line segment distance(s) |
| [color] | <code>string</code> | <code>&quot;&#x27;0, 0, 0&#x27;&quot;</code> | RGB color value; r, g, b |
| [alpha] | <code>number</code> | <code>1</code> | Alpha (transparency); number/decimal |
| [width] | <code>number</code> | <code>2</code> | Thickness of stroke |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |


* [StrokeCollection](#StrokeCollection)
    * [new StrokeCollection()](#new_StrokeCollection_new)
    * [.type](#StrokeCollection+type)
    * [.type](#StrokeCollection+type) ⇒ <code>number</code>
    * [.segments](#StrokeCollection+segments)
    * [.segments](#StrokeCollection+segments) ⇒ <code>Array</code>
    * [.color](#StrokeCollection+color)
    * [.color](#StrokeCollection+color) ⇒ <code>string</code>
    * [.alpha](#StrokeCollection+alpha)
    * [.alpha](#StrokeCollection+alpha) ⇒ <code>number</code>
    * [.width](#StrokeCollection+width)
    * [.width](#StrokeCollection+width) ⇒ <code>number</code>

<a name="new_StrokeCollection_new"></a>

### new StrokeCollection()
Create a stroke collection

<a name="StrokeCollection+type"></a>

### strokeCollection.type
Set type

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Type: (0) Solid or (1) Dashed |

<a name="StrokeCollection+type"></a>

### strokeCollection.type ⇒ <code>number</code>
Get type

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>number</code> - Type: (0) Solid or (1) Dashed  
<a name="StrokeCollection+segments"></a>

### strokeCollection.segments
Set segment value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Dashed line segment distance(s) |

<a name="StrokeCollection+segments"></a>

### strokeCollection.segments ⇒ <code>Array</code>
Get segment value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>Array</code> - Dashed line segment distance(s)  
<a name="StrokeCollection+color"></a>

### strokeCollection.color
Set color value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="StrokeCollection+color"></a>

### strokeCollection.color ⇒ <code>string</code>
Get color value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>string</code> - RGB color value  
<a name="StrokeCollection+alpha"></a>

### strokeCollection.alpha
Set alpha value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; number/decimal |

<a name="StrokeCollection+alpha"></a>

### strokeCollection.alpha ⇒ <code>number</code>
Get alpha value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>number</code> - Alpha value; number/decimal  
<a name="StrokeCollection+width"></a>

### strokeCollection.width
Set width value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Thickness of stroke |

<a name="StrokeCollection+width"></a>

### strokeCollection.width ⇒ <code>number</code>
Get width value

**Kind**: instance property of [<code>StrokeCollection</code>](#StrokeCollection)  
**Returns**: <code>number</code> - Thickness of stroke  
<a name="Circle"></a>

## Circle
{Object} Circle                             Circle object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| point | [<code>Point</code>](#Point) |  | X & Y axis coordinates |
| [radius] | <code>number</code> | <code>25</code> | Radius of circle |
| angle | [<code>Angle</code>](#Angle) |  | Angle properties |
| stroke | [<code>Stroke</code>](#Stroke) |  | Stroke properties |
| fill | [<code>Fill</code>](#Fill) |  | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |
| canvas | <code>HTMLCanvasElement</code> |  | 2D canvas context |


* [Circle](#Circle)
    * [new Circle()](#new_Circle_new)
    * [.point](#Circle+point)
    * [.point](#Circle+point) ⇒ [<code>Point</code>](#Point)
    * [.x](#Circle+x)
    * [.x](#Circle+x) ⇒ <code>number</code>
    * [.y](#Circle+y)
    * [.y](#Circle+y) ⇒ <code>number</code>
    * [.radius](#Circle+radius)
    * [.radius](#Circle+radius) ⇒ <code>number</code>
    * [.angle](#Circle+angle) ⇒ [<code>Angle</code>](#Angle)
    * [.stroke](#Circle+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill](#Circle+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow](#Circle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas](#Circle+canvas)
    * [.canvas](#Circle+canvas) ⇒ <code>string</code>
    * [.anchor](#Circle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options](#Circle+options) ⇒ [<code>Options</code>](#Options)
    * [.area](#Circle+area) ⇒ <code>number</code>
    * [.diameter](#Circle+diameter) ⇒ <code>number</code>
    * [.circumference](#Circle+circumference) ⇒ <code>number</code>
    * [.center](#Circle+center) ⇒ [<code>Point</code>](#Point)
    * [._drawOptions()](#Circle+_drawOptions)
    * [._drawAnchor()](#Circle+_drawAnchor)
    * [._setAnchorPoint()](#Circle+_setAnchorPoint)
    * [.showCoordinates([offset], [fontSize])](#Circle+showCoordinates)
    * [.move(degree, distance, [clear])](#Circle+move)
    * [.rotate(degree, [clear])](#Circle+rotate)
    * [.isThere(circle)](#Circle+isThere)
    * [.draw(canvas)](#Circle+draw)
    * [.redraw(canvas, point, [clear])](#Circle+redraw)

<a name="new_Circle_new"></a>

### new Circle()
Create a circle

<a name="Circle+point"></a>

### circle.point
Set point

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Circle+point"></a>

### circle.point ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**See**: [point](#discrete.point)  
<a name="Circle+x"></a>

### circle.x
Set x-axis value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Circle+x"></a>

### circle.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - X coordinate value  
**See**: [pointX](#discrete.pointX)  
<a name="Circle+y"></a>

### circle.y
Set the y-axis value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Circle+y"></a>

### circle.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Y coordinate value  
**See**: [pointY](#discrete.pointY)  
<a name="Circle+radius"></a>

### circle.radius
Set radius value

**Kind**: instance property of [<code>Circle</code>](#Circle)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius of circle |

<a name="Circle+radius"></a>

### circle.radius ⇒ <code>number</code>
Get radius value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Radius of circle  
<a name="Circle+angle"></a>

### circle.angle ⇒ [<code>Angle</code>](#Angle)
Get angle properties

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Angle</code>](#Angle) - Angle properties  
<a name="Circle+stroke"></a>

### circle.stroke ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
<a name="Circle+fill"></a>

### circle.fill ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
<a name="Circle+shadow"></a>

### circle.shadow ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
<a name="Circle+canvas"></a>

### circle.canvas
Set canvas value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circle+canvas"></a>

### circle.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#discrete.canvas)  
<a name="Circle+anchor"></a>

### circle.anchor ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
<a name="Circle+options"></a>

### circle.options ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
<a name="Circle+area"></a>

### circle.area ⇒ <code>number</code>
Get area of this object

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Area of circle  
<a name="Circle+diameter"></a>

### circle.diameter ⇒ <code>number</code>
Get diameter of circle

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Diameter of circle  
<a name="Circle+circumference"></a>

### circle.circumference ⇒ <code>number</code>
Get circumference of circle

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - Circumference of circle  
<a name="Circle+center"></a>

### circle.center ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance property of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
<a name="Circle+_drawOptions"></a>

### circle.\_drawOptions()
Draws associated options

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="Circle+_drawAnchor"></a>

### circle.\_drawAnchor()
Draws anchor point

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="Circle+_setAnchorPoint"></a>

### circle.\_setAnchorPoint()
Sets anchor's point against this object's point location

**Kind**: instance method of [<code>Circle</code>](#Circle)  
<a name="Circle+showCoordinates"></a>

### circle.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Circle+move"></a>

### circle.move(degree, distance, [clear])
Move this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="Circle+rotate"></a>

### circle.rotate(degree, [clear])
Rotate this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Circle+isThere"></a>

### circle.isThere(circle)
Check whether the passed object is already present

**Kind**: instance method of [<code>Circle</code>](#Circle)  

| Param | Type | Description |
| --- | --- | --- |
| circle | [<code>Circle</code>](#Circle) | Object to validate |

<a name="Circle+draw"></a>

### circle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Circle+redraw"></a>

### circle.redraw(canvas, point, [clear])
Redraw this object

**Kind**: instance method of [<code>Circle</code>](#Circle)  

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
    * [.start](#Line+start)
    * [.start](#Line+start) ⇒ [<code>Point</code>](#Point)
    * [.end](#Line+end)
    * [.end](#Line+end) ⇒ [<code>Point</code>](#Point)
    * [.stroke](#Line+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow](#Line+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.lineCap](#Line+lineCap)
    * [.lineCap](#Line+lineCap) ⇒ <code>string</code>
    * [.canvas](#Line+canvas)
    * [.canvas](#Line+canvas) ⇒ <code>string</code>
    * [.options](#Line+options) ⇒ [<code>Options</code>](#Options)
    * [.controlPoints](#Line+controlPoints) ⇒ [<code>ControlPoints</code>](#ControlPoints)
    * [.center](#Line+center) ⇒ [<code>Point</code>](#Point)
    * [._drawOptions()](#Line+_drawOptions)
    * [.drawPoints([offset])](#Line+drawPoints)
    * [.showCoordinates([offset], [fontSize])](#Line+showCoordinates)
    * [.showControlPoints([offset], [fontSize])](#Line+showControlPoints)
    * [.move(degree, distance, [clear])](#Line+move)
    * [.rotate(degree, [anchor], [clear])](#Line+rotate)
    * [.curve()](#Line+curve) : <code>Object</code>
    * [.isThere(line)](#Line+isThere)
    * [.draw(canvas)](#Line+draw)
    * [.redraw(canvas, start, end, clear)](#Line+redraw)

<a name="new_Line_new"></a>

### new Line()
Create a line

<a name="Line+start"></a>

### line.start
Set starting point

**Kind**: instance property of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="Line+start"></a>

### line.start ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Starting point  
<a name="Line+end"></a>

### line.end
Set ending point

**Kind**: instance property of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="Line+end"></a>

### line.end ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Ending point  
<a name="Line+stroke"></a>

### line.stroke ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
<a name="Line+shadow"></a>

### line.shadow ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
<a name="Line+lineCap"></a>

### line.lineCap
Set line cap

**Kind**: instance property of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Line cap |

<a name="Line+lineCap"></a>

### line.lineCap ⇒ <code>string</code>
Get line cap

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: <code>string</code> - Line cap  
<a name="Line+canvas"></a>

### line.canvas
Set canvas value

**Kind**: instance property of [<code>Line</code>](#Line)  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Line+canvas"></a>

### line.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#discrete.canvas)  
<a name="Line+options"></a>

### line.options ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
<a name="Line+controlPoints"></a>

### line.controlPoints ⇒ [<code>ControlPoints</code>](#ControlPoints)
Get control point properties

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>ControlPoints</code>](#ControlPoints) - Control points properties  
<a name="Line+center"></a>

### line.center ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance property of [<code>Line</code>](#Line)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
<a name="Line+_drawOptions"></a>

### line.\_drawOptions()
Draws associated options

**Kind**: instance method of [<code>Line</code>](#Line)  
<a name="Line+drawPoints"></a>

### line.drawPoints([offset])
Draws associated options for start & end points

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of drawable options |

<a name="Line+showCoordinates"></a>

### line.showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="Line+showControlPoints"></a>

### line.showControlPoints([offset], [fontSize])
Show control points for this object

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of control points y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Control points font size |

<a name="Line+move"></a>

### line.move(degree, distance, [clear])
Move this object

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="Line+rotate"></a>

### line.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Line+curve"></a>

### line.curve() : <code>Object</code>
[one description]

**Kind**: instance method of [<code>Line</code>](#Line)  
<a name="Line+isThere"></a>

### line.isThere(line)
Check whether the passed object is already present

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| line | [<code>Line</code>](#Line) | Object to validate |

<a name="Line+draw"></a>

### line.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="Line+redraw"></a>

### line.redraw(canvas, start, end, clear)
Redraw this object

**Kind**: instance method of [<code>Line</code>](#Line)  

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
| stroke | [<code>Stroke</code>](#Stroke) | Stroke properties |
| fill | [<code>Fill</code>](#Fill) | Fill properties |
| shadow | [<code>Shadow</code>](#Shadow) | Shadow properties |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |


* [Rectangle](#Rectangle)
    * [new Rectangle()](#new_Rectangle_new)
    * [.point](#Rectangle+point)
    * [.point](#Rectangle+point) ⇒ [<code>Point</code>](#Point)
    * [.x](#Rectangle+x)
    * [.x](#Rectangle+x) ⇒ <code>number</code>
    * [.y](#Rectangle+y)
    * [.y](#Rectangle+y) ⇒ <code>number</code>
    * [.aspect](#Rectangle+aspect)
    * [.aspect](#Rectangle+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width](#Rectangle+width)
    * [.width](#Rectangle+width) ⇒ <code>number</code>
    * [.height](#Rectangle+height)
    * [.height](#Rectangle+height) ⇒ <code>number</code>
    * [.stroke](#Rectangle+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill](#Rectangle+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow](#Rectangle+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas](#Rectangle+canvas)
    * [.canvas](#Rectangle+canvas) ⇒ <code>string</code>
    * [.anchor](#Rectangle+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.options](#Rectangle+options) ⇒ [<code>Options</code>](#Options)
    * [.area](#Rectangle+area) ⇒ <code>number</code>
    * [.perimeter](#Rectangle+perimeter) ⇒ <code>number</code>
    * [.center](#Rectangle+center) ⇒ [<code>Point</code>](#Point)
    * [._drawOptions()](#Rectangle+_drawOptions)
    * [._drawAnchor()](#Rectangle+_drawAnchor)
    * [._setAnchorPoint()](#Rectangle+_setAnchorPoint)
    * [.move(degree, distance, [clear])](#Rectangle+move)
    * [.rotate(degree, [clear])](#Rectangle+rotate)
    * [.isThere(rectangle)](#Rectangle+isThere)
    * [.draw(canvas)](#Rectangle+draw)

<a name="new_Rectangle_new"></a>

### new Rectangle()
Create a rectangle

<a name="Rectangle+point"></a>

### rectangle.point
Set point

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Rectangle+point"></a>

### rectangle.point ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**See**: [point](#discrete.point)  
<a name="Rectangle+x"></a>

### rectangle.x
Set x-axis value

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Rectangle+x"></a>

### rectangle.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - X coordinate value  
**See**: [pointX](#discrete.pointX)  
<a name="Rectangle+y"></a>

### rectangle.y
Set the y-axis value

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Rectangle+y"></a>

### rectangle.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Y coordinate value  
**See**: [pointY](#discrete.pointY)  
<a name="Rectangle+aspect"></a>

### rectangle.aspect
Set aspect properties

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Aspect</code>](#Aspect) | Aspect properties |

<a name="Rectangle+aspect"></a>

### rectangle.aspect ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
<a name="Rectangle+width"></a>

### rectangle.width
Set aspect width

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="Rectangle+width"></a>

### rectangle.width ⇒ <code>number</code>
Get aspect with

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Width value  
<a name="Rectangle+height"></a>

### rectangle.height
Set aspect height

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="Rectangle+height"></a>

### rectangle.height ⇒ <code>number</code>
Get aspect height

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Height value  
<a name="Rectangle+stroke"></a>

### rectangle.stroke ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
<a name="Rectangle+fill"></a>

### rectangle.fill ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
<a name="Rectangle+shadow"></a>

### rectangle.shadow ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
<a name="Rectangle+canvas"></a>

### rectangle.canvas
Set canvas value

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangle+canvas"></a>

### rectangle.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#discrete.canvas)  
<a name="Rectangle+anchor"></a>

### rectangle.anchor ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
<a name="Rectangle+options"></a>

### rectangle.options ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
<a name="Rectangle+area"></a>

### rectangle.area ⇒ <code>number</code>
Get area of this object

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Area of rectangle  
<a name="Rectangle+perimeter"></a>

### rectangle.perimeter ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - Perimeter of rectangle  
<a name="Rectangle+center"></a>

### rectangle.center ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
<a name="Rectangle+_drawOptions"></a>

### rectangle.\_drawOptions()
Draws associated options

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
<a name="Rectangle+_drawAnchor"></a>

### rectangle.\_drawAnchor()
Draws anchor point

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
<a name="Rectangle+_setAnchorPoint"></a>

### rectangle.\_setAnchorPoint()
Sets anchor's point against this object's point location

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  
<a name="Rectangle+move"></a>

### rectangle.move(degree, distance, [clear])
Move this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="Rectangle+rotate"></a>

### rectangle.rotate(degree, [clear])
Rotate this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Rectangle+isThere"></a>

### rectangle.isThere(rectangle)
Check whether the passed object is already present

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| rectangle | [<code>Rectangle</code>](#Rectangle) | Object to validate |

<a name="Rectangle+draw"></a>

### rectangle.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

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
    * [.point](#Text+point)
    * [.point](#Text+point) ⇒ [<code>Point</code>](#Point)
    * [.x](#Text+x)
    * [.x](#Text+x) ⇒ <code>number</code>
    * [.y](#Text+y)
    * [.y](#Text+y) ⇒ <code>number</code>
    * [.text](#Text+text)
    * [.text](#Text+text) ⇒ <code>string</code>
    * [.stroke](#Text+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.fill](#Text+fill) ⇒ [<code>Fill</code>](#Fill)
    * [.shadow](#Text+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.canvas](#Text+canvas)
    * [.canvas](#Text+canvas) ⇒ <code>string</code>
    * [.options](#Text+options) ⇒ [<code>Options</code>](#Options)
    * [.type](#Text+type)
    * [.type](#Text+type) ⇒ <code>string</code>
    * [.size](#Text+size)
    * [.size](#Text+size) ⇒ <code>number</code>
    * [.weight](#Text+weight)
    * [.weight](#Text+weight) ⇒ <code>string</code>
    * [.maxWidth](#Text+maxWidth)
    * [.maxWidth](#Text+maxWidth) ⇒ <code>number</code>
    * [.offset](#Text+offset)
    * [.offset](#Text+offset) ⇒ [<code>Point</code>](#Point)
    * [.font](#Text+font) ⇒ <code>string</code>
    * [.drawBorder([offset])](#Text+drawBorder)
    * [.drawAxis([offset])](#Text+drawAxis)
    * [.move(degree, distance, [clear])](#Text+move)
    * [.rotate(degree, [anchor], [clear])](#Text+rotate)
    * [.draw(canvas)](#Text+draw)

<a name="new_Text_new"></a>

### new Text(point, text, type, size, weight, maxWidth, offset, stroke, fill, shadow, canvas)
Create a text object


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

### text.point
Set point

**Kind**: instance property of [<code>Text</code>](#Text)  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Text+point"></a>

### text.point ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**See**: [point](#discrete.point)  
<a name="Text+x"></a>

### text.x
Set x-axis value

**Kind**: instance property of [<code>Text</code>](#Text)  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Text+x"></a>

### text.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - X coordinate value  
**See**: [pointX](#discrete.pointX)  
<a name="Text+y"></a>

### text.y
Set the y-axis value

**Kind**: instance property of [<code>Text</code>](#Text)  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Text+y"></a>

### text.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Y coordinate value  
**See**: [pointY](#discrete.pointY)  
<a name="Text+text"></a>

### text.text
Set text

**Kind**: instance property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Text of object |

<a name="Text+text"></a>

### text.text ⇒ <code>string</code>
Get text

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Text of object  
<a name="Text+stroke"></a>

### text.stroke ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
<a name="Text+fill"></a>

### text.fill ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
<a name="Text+shadow"></a>

### text.shadow ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
<a name="Text+canvas"></a>

### text.canvas
Set canvas value

**Kind**: instance property of [<code>Text</code>](#Text)  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Text+canvas"></a>

### text.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#discrete.canvas)  
<a name="Text+options"></a>

### text.options ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: [<code>Options</code>](#Options) - Options properties  
<a name="Text+type"></a>

### text.type
Set font's type

**Kind**: instance property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Font's type |

<a name="Text+type"></a>

### text.type ⇒ <code>string</code>
Get font's type

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Font's type  
<a name="Text+size"></a>

### text.size
Set font's size

**Kind**: instance property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font's size |

<a name="Text+size"></a>

### text.size ⇒ <code>number</code>
Get font's size

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Font's size  
<a name="Text+weight"></a>

### text.weight
Set font's weight

**Kind**: instance property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Font's weight |

<a name="Text+weight"></a>

### text.weight ⇒ <code>string</code>
Get font's weight

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - Font's weight  
<a name="Text+maxWidth"></a>

### text.maxWidth
Set font's max width

**Kind**: instance property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font's max width |

<a name="Text+maxWidth"></a>

### text.maxWidth ⇒ <code>number</code>
Get font's max width

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - Font's max width  
<a name="Text+offset"></a>

### text.offset
Set offset

**Kind**: instance property of [<code>Text</code>](#Text)  
**See**: [offset](#discrete.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="Text+offset"></a>

### text.offset ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**See**: [offset](#discrete.offset)  
<a name="Text+font"></a>

### text.font ⇒ <code>string</code>
Get font

**Kind**: instance property of [<code>Text</code>](#Text)  
**Returns**: <code>string</code> - CSS style font property syntax  
<a name="Text+drawBorder"></a>

### text.drawBorder([offset])
Draws border around this object

**Kind**: instance method of [<code>Text</code>](#Text)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of border's perimeter |

<a name="Text+drawAxis"></a>

### text.drawAxis([offset])
Draws axis through center of this object

**Kind**: instance method of [<code>Text</code>](#Text)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of axis's edges |

<a name="Text+move"></a>

### text.move(degree, distance, [clear])
Move this object

**Kind**: instance method of [<code>Text</code>](#Text)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="Text+rotate"></a>

### text.rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: instance method of [<code>Text</code>](#Text)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="Text+draw"></a>

### text.draw(canvas)
Draw this object

**Kind**: instance method of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

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
    * [.canvas](#Circles+canvas)
    * [.canvas](#Circles+canvas) ⇒ <code>string</code>

<a name="Circles+canvas"></a>

### circles.canvas
Set canvas value

**Kind**: instance property of [<code>Circles</code>](#Circles)  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Circles+canvas"></a>

### circles.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Circles</code>](#Circles)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#combined.canvas)  
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
    * [.point](#Group+point)
    * [.point](#Group+point) ⇒ [<code>Point</code>](#Point)
    * [.x](#Group+x)
    * [.x](#Group+x) ⇒ <code>number</code>
    * [.y](#Group+y)
    * [.y](#Group+y) ⇒ <code>number</code>
    * [.canvas](#Group+canvas)
    * [.canvas](#Group+canvas) ⇒ <code>string</code>

<a name="Group+point"></a>

### group.point
Set point

**Kind**: instance property of [<code>Group</code>](#Group)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Group+point"></a>

### group.point ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance property of [<code>Group</code>](#Group)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
<a name="Group+x"></a>

### group.x
Set x-axis value

**Kind**: instance property of [<code>Group</code>](#Group)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Group+x"></a>

### group.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Group</code>](#Group)  
**Returns**: <code>number</code> - X coordinate value  
<a name="Group+y"></a>

### group.y
Set the y-axis value

**Kind**: instance property of [<code>Group</code>](#Group)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Group+y"></a>

### group.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Group</code>](#Group)  
**Returns**: <code>number</code> - Y coordinate value  
<a name="Group+canvas"></a>

### group.canvas
Set canvas value

**Kind**: instance property of [<code>Group</code>](#Group)  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Group+canvas"></a>

### group.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Group</code>](#Group)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#combined.canvas)  
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
    * [.point](#Lines+point)
    * [.point](#Lines+point) ⇒ [<code>Point</code>](#Point)
    * [.x](#Lines+x)
    * [.x](#Lines+x) ⇒ <code>number</code>
    * [.y](#Lines+y)
    * [.y](#Lines+y) ⇒ <code>number</code>
    * [.stroke](#Lines+stroke) ⇒ [<code>Stroke</code>](#Stroke)
    * [.shadow](#Lines+shadow) ⇒ [<code>Shadow</code>](#Shadow)
    * [.lineCap](#Lines+lineCap)
    * [.lineCap](#Lines+lineCap) ⇒ <code>string</code>
    * [.canvas](#Lines+canvas)
    * [.canvas](#Lines+canvas) ⇒ <code>string</code>
    * [.aspect](#Lines+aspect) ⇒ [<code>Aspect</code>](#Aspect)
    * [.width](#Lines+width) ⇒ <code>number</code>
    * [.height](#Lines+height) ⇒ <code>number</code>
    * [.anchor](#Lines+anchor)
    * [.anchor](#Lines+anchor) ⇒ [<code>Anchor</code>](#Anchor)
    * [.area](#Lines+area) ⇒ <code>number</code>
    * [.perimeter](#Lines+perimeter) ⇒ <code>number</code>
    * [.center](#Lines+center) ⇒ [<code>Point</code>](#Point)
    * [._drawOptions()](#Lines+_drawOptions)
    * [._drawAnchor()](#Lines+_drawAnchor)
    * [._setAnchorPoint()](#Lines+_setAnchorPoint)

<a name="new_Lines_new"></a>

### new Lines()
Create a lines array

<a name="Lines+point"></a>

### lines.point
Set point

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="Lines+point"></a>

### lines.point ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**See**: [point](#discrete.point)  
<a name="Lines+x"></a>

### lines.x
Set x-axis value

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="Lines+x"></a>

### lines.x ⇒ <code>number</code>
Get x-axis value

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - X coordinate value  
**See**: [pointX](#discrete.pointX)  
<a name="Lines+y"></a>

### lines.y
Set the y-axis value

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="Lines+y"></a>

### lines.y ⇒ <code>number</code>
Get y-axis value

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Y coordinate value  
**See**: [pointY](#discrete.pointY)  
<a name="Lines+stroke"></a>

### lines.stroke ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
<a name="Lines+shadow"></a>

### lines.shadow ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
<a name="Lines+lineCap"></a>

### lines.lineCap
Set line cap

**Kind**: instance property of [<code>Lines</code>](#Lines)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Line cap |

<a name="Lines+lineCap"></a>

### lines.lineCap ⇒ <code>string</code>
Get line cap

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>string</code> - Line cap  
<a name="Lines+canvas"></a>

### lines.canvas
Set canvas value

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Lines+canvas"></a>

### lines.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#combined.canvas)  
<a name="Lines+aspect"></a>

### lines.aspect ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
<a name="Lines+width"></a>

### lines.width ⇒ <code>number</code>
Get aspect with

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Width value  
<a name="Lines+height"></a>

### lines.height ⇒ <code>number</code>
Get aspect height

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Height value  
<a name="Lines+anchor"></a>

### lines.anchor
Set anchor type

**Kind**: instance property of [<code>Lines</code>](#Lines)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="Lines+anchor"></a>

### lines.anchor ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
<a name="Lines+area"></a>

### lines.area ⇒ <code>number</code>
Get area of this object

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Area of rectangle  
<a name="Lines+perimeter"></a>

### lines.perimeter ⇒ <code>number</code>
Get perimeter of this object

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: <code>number</code> - Perimeter of rectangle  
<a name="Lines+center"></a>

### lines.center ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: instance property of [<code>Lines</code>](#Lines)  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
<a name="Lines+_drawOptions"></a>

### lines.\_drawOptions()
Draws associated options

**Kind**: instance method of [<code>Lines</code>](#Lines)  
<a name="Lines+_drawAnchor"></a>

### lines.\_drawAnchor()
Draws anchor point

**Kind**: instance method of [<code>Lines</code>](#Lines)  
<a name="Lines+_setAnchorPoint"></a>

### lines.\_setAnchorPoint()
Sets anchor's point against this object's point location

**Kind**: instance method of [<code>Lines</code>](#Lines)  
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
    * [.canvas](#Rectangles+canvas)
    * [.canvas](#Rectangles+canvas) ⇒ <code>string</code>

<a name="Rectangles+canvas"></a>

### rectangles.canvas
Set canvas value

**Kind**: instance property of [<code>Rectangles</code>](#Rectangles)  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Rectangles+canvas"></a>

### rectangles.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Rectangles</code>](#Rectangles)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#combined.canvas)  
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
    * [.canvas](#Texts+canvas)
    * [.canvas](#Texts+canvas) ⇒ <code>string</code>

<a name="Texts+canvas"></a>

### texts.canvas
Set canvas value

**Kind**: instance property of [<code>Texts</code>](#Texts)  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="Texts+canvas"></a>

### texts.canvas ⇒ <code>string</code>
Get canvas value

**Kind**: instance property of [<code>Texts</code>](#Texts)  
**Returns**: <code>string</code> - Canvas id  
**See**: [canvas](#combined.canvas)  
<a name="Animation"></a>

## Animation
**Kind**: global class  
<a name="new_Animation_new"></a>

### new Animation(duration, timing, draw)
Creates an animation instance


| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | Duration of animation |
| timing | <code>function</code> | Timing function |
| draw | <code>function</code> | Draw function |

<a name="discrete"></a>

## discrete : <code>Object</code>
**Kind**: global variable  

* [discrete](#discrete) : <code>Object</code>
    * [.canvas](#discrete.canvas) : <code>Object</code>
    * [.offset](#discrete.offset) : <code>Object</code>
    * [.offsetX](#discrete.offsetX) : <code>Object</code>
    * [.offsetY](#discrete.offsetY) : <code>Object</code>
    * [.point](#discrete.point) : <code>Object</code>
    * [.pointX](#discrete.pointX) : <code>Object</code>
    * [.pointY](#discrete.pointY) : <code>Object</code>

<a name="discrete.canvas"></a>

### discrete.canvas : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="discrete.offset"></a>

### discrete.offset : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="discrete.offsetX"></a>

### discrete.offsetX : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="discrete.offsetY"></a>

### discrete.offsetY : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="discrete.point"></a>

### discrete.point : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="discrete.pointX"></a>

### discrete.pointX : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="discrete.pointY"></a>

### discrete.pointY : <code>Object</code>
**Kind**: static property of [<code>discrete</code>](#discrete)  
<a name="combined"></a>

## combined : <code>Object</code>
**Kind**: global variable  

* [combined](#combined) : <code>Object</code>
    * [.canvas](#combined.canvas) : <code>Object</code>
    * [.start](#combined.start) : <code>Object</code>
    * [.end](#combined.end) : <code>Object</code>

<a name="combined.canvas"></a>

### combined.canvas : <code>Object</code>
**Kind**: static property of [<code>combined</code>](#combined)  
<a name="combined.start"></a>

### combined.start : <code>Object</code>
**Kind**: static property of [<code>combined</code>](#combined)  
<a name="combined.end"></a>

### combined.end : <code>Object</code>
**Kind**: static property of [<code>combined</code>](#combined)  
<a name="draw"></a>

## draw : <code>Object</code>
**Kind**: global variable  
<a name="collection"></a>

## collection : <code>Object</code>
**Kind**: global variable  
<a name="get"></a>

## get : <code>Object</code>
**Kind**: global variable  
<a name="set"></a>

## set : <code>Object</code>
**Kind**: global variable  
<a name="PROPERTY_BLOCKS"></a>

## PROPERTY\_BLOCKS : <code>object</code>
Base object for shared accessors & mutators

**Kind**: global namespace  
<a name="UTILITIES"></a>

## UTILITIES : <code>object</code>
Shared utility functions

**Kind**: global namespace  
<a name="VALIDATION"></a>

## VALIDATION : <code>object</code>
Shared validation functions

**Kind**: global namespace  
<a name="DEBUG"></a>

## DEBUG
DEBUG General debug module

**Kind**: global constant  
<a name="initCanvasLab"></a>

## initCanvasLab([canvas])
Initiates canvasLab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [canvas] | <code>string</code> | Canvas identifier |

