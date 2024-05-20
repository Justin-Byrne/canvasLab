## Classes

<dl>
<dt><a href="#canvasLab">canvasLab</a></dt>
<dd><p>{Object} canvasLab                          CanvasLab core application</p>
</dd>
<dt><a href="#Hsl">Hsl</a></dt>
<dd><p>{Object} Hsl 								HSL color model</p>
</dd>
<dt><a href="#Hwb">Hwb</a></dt>
<dd><p>{Object} Hwb 								HWB color model</p>
</dd>
<dt><a href="#Rgb">Rgb</a></dt>
<dd><p>{Object} Rgb 								RGB color model</p>
</dd>
<dt><a href="#Options">Options</a></dt>
<dd><p>{Object}  Options                           Options for shapes, lines, and groups</p>
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
<dd><p>{Object}   Animation                        Animation handler</p>
</dd>
<dt><a href="#Application">Application</a></dt>
<dd><p>{Object}   Application                      Application handler</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#discrete">discrete</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#combined">combined</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#color">color</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#cycle">cycle</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#draw">draw</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#collection">collection</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#misc">misc</a> : <code>Object</code></dt>
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
<dt><a href="#stroke">stroke(start, end, progress, [max])</a></dt>
<dd><p>Cycle colors for stroke</p>
</dd>
<dt><a href="#fill">fill(start, end, progress, [max])</a></dt>
<dd><p>Cycle colors for fill</p>
</dd>
<dt><a href="#gradient">gradient(start, end, progress, stop, [max])</a></dt>
<dd><p>Cycle colors for gradient</p>
</dd>
<dt><a href="#stop">stop(start, end, progress, stop, max, clear, draw)</a></dt>
<dd><p>Cycle colors for gradient stop(s)</p>
</dd>
<dt><a href="#axis">axis(offset, color, stop)</a></dt>
<dd><p>Draws an axis for the associated object</p>
</dd>
<dt><a href="#border">border(aspect, color)</a></dt>
<dd><p>Draws an axis for the associated object</p>
</dd>
<dt><a href="#typical">typical(canvas)</a></dt>
<dd><p>Typical draw function for collections; Circles, Rectangles, Texts</p>
</dd>
<dt><a href="#aTypical">aTypical(canvas)</a></dt>
<dd><p>A-typical draw function for collections; Lines</p>
</dd>
<dt><a href="#clearCanvas">clearCanvas(value)</a></dt>
<dd><p>Clears canvas</p>
</dd>
<dt><a href="#pushPop">pushPop(object)</a></dt>
<dd><p>Push or pops the passed object</p>
</dd>
<dt><a href="#rotatePoint">rotatePoint(origin, degree, distance)</a></dt>
<dd><p>Rotates the origin point by the degree &amp; distance passed</p>
</dd>
<dt><a href="#all">all(property, value)</a></dt>
<dd><p>Sets all option values throughout a collection</p>
</dd>
<dt><a href="#shadow">shadow()</a></dt>
<dd><p>Sets shadow properties</p>
</dd>
<dt><a href="#fillType">fillType()</a></dt>
<dd><p>Sets fill type of the associated object</p>
</dd>
<dt><a href="#_setStops">_setStops(gradient, stops)</a></dt>
<dd><p>Sets stops for gradient fill types</p>
</dd>
<dt><a href="#is256">is256(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a 256 color value; 0 - 255</p>
</dd>
<dt><a href="#isAnchor">isAnchor(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an Anchor alignment</p>
</dd>
<dt><a href="#isAngle">isAngle(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an Angle or equivalent value</p>
</dd>
<dt><a href="#isAnchor">isAnchor(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an Anchor alignment</p>
</dd>
<dt><a href="#isAlpha">isAlpha(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an alpha value; 0.00 - 1</p>
</dd>
<dt><a href="#isAspect">isAspect(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an Aspect</p>
</dd>
<dt><a href="#isBlur">isBlur(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a blur value</p>
</dd>
<dt><a href="#isCanvasLabObject">isCanvasLabObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text</p>
</dd>
<dt><a href="#isColorName">isColorName(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a CSS color name</p>
</dd>
<dt><a href="#isColorModel">isColorModel(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a color model</p>
</dd>
<dt><a href="#isDecimal">isDecimal(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a decimal value; 0.00 - 1</p>
</dd>
<dt><a href="#isDegree">isDegree(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a degree</p>
</dd>
<dt><a href="#isFillType">isFillType(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a fill type</p>
</dd>
<dt><a href="#isGradient">isGradient(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a gradient object</p>
</dd>
<dt><a href="#isInDom">isInDom(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an element id within the DOM</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a Number value</p>
</dd>
<dt><a href="#isPoint">isPoint(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a Point</p>
</dd>
<dt><a href="#isRadian">isRadian(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a radian; 0 - 6.28...</p>
</dd>
<dt><a href="#isRadius">isRadius(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a radius value</p>
</dd>
<dt><a href="#isRadius">isRadius(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an Array of segment values</p>
</dd>
<dt><a href="#isStop">isStop(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a Stop or object equivalent</p>
</dd>
<dt><a href="#isStrokeType">isStrokeType(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a stroke type</p>
</dd>
<dt><a href="#isWidth">isWidth(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a width value</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#canvases">canvases(canvasId)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvases">canvases()</a> ⇒ <code>Array</code></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#font">font(font)</a></dt>
<dd><p>Set main font type</p>
</dd>
<dt><a href="#font">font()</a> ⇒ <code>string</code></dt>
<dd><p>Get main font type</p>
</dd>
<dt><a href="#hue">hue(hue)</a></dt>
<dd><p>Sets the hue value</p>
</dd>
<dt><a href="#hue">hue()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the hue value</p>
</dd>
<dt><a href="#saturation">saturation(saturation)</a></dt>
<dd><p>Sets the saturation value</p>
</dd>
<dt><a href="#saturation">saturation()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the saturation value</p>
</dd>
<dt><a href="#lightness">lightness(lightness)</a></dt>
<dd><p>Sets the lightness value</p>
</dd>
<dt><a href="#lightness">lightness()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the lightness value</p>
</dd>
<dt><a href="#_isDegree">_isDegree(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a degree</p>
</dd>
<dt><a href="#toCss">toCss()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a CSS compatible <color> string value</p>
</dd>
<dt><a href="#hue">hue(hue)</a></dt>
<dd><p>Sets the hue value</p>
</dd>
<dt><a href="#hue">hue()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the hue value</p>
</dd>
<dt><a href="#whiteness">whiteness(whiteness)</a></dt>
<dd><p>Sets the whiteness value</p>
</dd>
<dt><a href="#whiteness">whiteness()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the whiteness value</p>
</dd>
<dt><a href="#blackness">blackness(blackness)</a></dt>
<dd><p>Sets the blackness value</p>
</dd>
<dt><a href="#blackness">blackness()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the blackness value</p>
</dd>
<dt><a href="#_isDegree">_isDegree(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is a degree</p>
</dd>
<dt><a href="#toCss">toCss()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a CSS compatible <color> string value</p>
</dd>
<dt><a href="#red">red(red)</a></dt>
<dd><p>Sets the red value</p>
</dd>
<dt><a href="#red">red()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the red value</p>
</dd>
<dt><a href="#green">green(green)</a></dt>
<dd><p>Sets the green value</p>
</dd>
<dt><a href="#green">green()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the green value</p>
</dd>
<dt><a href="#blue">blue(blue)</a></dt>
<dd><p>Sets the blue value</p>
</dd>
<dt><a href="#blue">blue()</a> ⇒ <code>number</code></dt>
<dd><p>Gets the blue value</p>
</dd>
<dt><a href="#toCss">toCss()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a CSS compatible <color> string value</p>
</dd>
<dt><a href="#shadow">shadow(value)</a></dt>
<dd><p>Set shadow value</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get shadow value</p>
</dd>
<dt><a href="#border">border(value)</a></dt>
<dd><p>Set border value</p>
</dd>
<dt><a href="#border">border()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get border value</p>
</dd>
<dt><a href="#axis">axis(value)</a></dt>
<dd><p>Set axis value</p>
</dd>
<dt><a href="#axis">axis()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get axis value</p>
</dd>
<dt><a href="#anchor">anchor(value)</a></dt>
<dd><p>Set anchor value</p>
</dd>
<dt><a href="#anchor">anchor()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get anchor value</p>
</dd>
<dt><a href="#coordinates">coordinates(value)</a></dt>
<dd><p>Set coordinates value</p>
</dd>
<dt><a href="#coordinates">coordinates()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get coordinates value</p>
</dd>
<dt><a href="#controlPoints">controlPoints(value)</a></dt>
<dd><p>Set control points value</p>
</dd>
<dt><a href="#controlPoints">controlPoints()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get control points value</p>
</dd>
<dt><a href="#master">master(value)</a></dt>
<dd><p>Set master object</p>
</dd>
<dt><a href="#master">master()</a> ⇒ <code>Object</code></dt>
<dd><p>Get master object</p>
</dd>
<dt><a href="#point">point(point)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#align">align(value)</a></dt>
<dd><p>Set anchor alignment</p>
</dd>
<dt><a href="#align">align()</a> ⇒ <code>string</code></dt>
<dd><p>Get anchor alignment</p>
</dd>
<dt><a href="#start">start(value)</a></dt>
<dd><p>Set start angle</p>
</dd>
<dt><a href="#start">start()</a> ⇒ <code>number</code></dt>
<dd><p>Get start angle</p>
</dd>
<dt><a href="#end">end(value)</a></dt>
<dd><p>Set end angle</p>
</dd>
<dt><a href="#end">end()</a> ⇒ <code>number</code></dt>
<dd><p>Get end angle</p>
</dd>
<dt><a href="#clockwise">clockwise(value)</a></dt>
<dd><p>Set clockwise</p>
</dd>
<dt><a href="#clockwise">clockwise()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get clockwise</p>
</dd>
<dt><a href="#startInRadians">startInRadians()</a> ⇒ <code>number</code></dt>
<dd><p>Get start angle in radians</p>
</dd>
<dt><a href="#endInRadians">endInRadians()</a> ⇒ <code>number</code></dt>
<dd><p>Get end angle in radians</p>
</dd>
<dt><a href="#width">width(value)</a></dt>
<dd><p>Set width</p>
</dd>
<dt><a href="#width">width()</a> ⇒ <code>number</code></dt>
<dd><p>Get width</p>
</dd>
<dt><a href="#height">height(value)</a></dt>
<dd><p>Set height</p>
</dd>
<dt><a href="#height">height()</a> ⇒ <code>number</code></dt>
<dd><p>Get height</p>
</dd>
<dt><a href="#center">center()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get center of aspect</p>
</dd>
<dt><a href="#heightCenter">heightCenter()</a> ⇒ <code>number</code></dt>
<dd><p>Get center of height</p>
</dd>
<dt><a href="#widthCenter">widthCenter()</a> ⇒ <code>number</code></dt>
<dd><p>Get center of width</p>
</dd>
<dt><a href="#p0">p0(value)</a></dt>
<dd><p>Set control point one</p>
</dd>
<dt><a href="#p0">p0()</a> ⇒ <code>number</code></dt>
<dd><p>Get control point one</p>
</dd>
<dt><a href="#p1">p1(value)</a></dt>
<dd><p>Set control point one</p>
</dd>
<dt><a href="#p1">p1()</a> ⇒ <code>number</code></dt>
<dd><p>Get control point one</p>
</dd>
<dt><a href="#p2">p2(value)</a></dt>
<dd><p>Set control point one</p>
</dd>
<dt><a href="#p2">p2()</a> ⇒ <code>number</code></dt>
<dd><p>Get control point one</p>
</dd>
<dt><a href="#p3">p3(value)</a></dt>
<dd><p>Set control point one</p>
</dd>
<dt><a href="#p3">p3()</a> ⇒ <code>number</code></dt>
<dd><p>Get control point one</p>
</dd>
<dt><a href="#type">type(value)</a></dt>
<dd><p>Set font type</p>
</dd>
<dt><a href="#type">type()</a> ⇒ <code>string</code></dt>
<dd><p>Get type</p>
</dd>
<dt><a href="#size">size(value)</a></dt>
<dd><p>Set font size</p>
</dd>
<dt><a href="#size">size()</a> ⇒ <code>number</code></dt>
<dd><p>Get font size</p>
</dd>
<dt><a href="#weight">weight(value)</a></dt>
<dd><p>Set font weight</p>
</dd>
<dt><a href="#weight">weight()</a> ⇒ <code>number</code></dt>
<dd><p>Get font weight</p>
</dd>
<dt><a href="#maxWidth">maxWidth(value)</a></dt>
<dd><p>Set font&#39;s max width</p>
</dd>
<dt><a href="#maxWidth">maxWidth()</a> ⇒ <code>number</code></dt>
<dd><p>Get font&#39;s max width</p>
</dd>
<dt><a href="#offset">offset()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get font&#39;s offset</p>
</dd>
<dt><a href="#font">font(value)</a></dt>
<dd><p>Set font</p>
</dd>
<dt><a href="#font">font()</a> ⇒ <code>string</code></dt>
<dd><p>Get font</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code><a href="#Options">Options</a></code></dt>
<dd><p>Get options</p>
</dd>
<dt><a href="#center">center()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get center of this object</p>
</dd>
<dt><a href="#drawOptions">drawOptions(offset)</a></dt>
<dd><p>Draws associated options</p>
</dd>
<dt><a href="#invert">invert()</a></dt>
<dd><p>Invert x &amp; y coordinate values</p>
</dd>
<dt><a href="#offset">offset(value)</a></dt>
<dd><p>Set offset value</p>
</dd>
<dt><a href="#offset">offset()</a> ⇒ <code>number</code></dt>
<dd><p>Get offset value</p>
</dd>
<dt><a href="#color">color(value)</a></dt>
<dd><p>Set color value</p>
</dd>
<dt><a href="#color">color()</a> ⇒ <code>Object</code></dt>
<dd><p>Get color value</p>
</dd>
<dt><a href="#angle">angle(value)</a></dt>
<dd><p>Set angle property</p>
</dd>
<dt><a href="#angle">angle()</a> ⇒ <code><a href="#Angle">Angle</a></code></dt>
<dd><p>Set angle property</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#stops">stops(values)</a></dt>
<dd><p>Set color stops</p>
</dd>
<dt><a href="#stops">stops()</a> ⇒ <code><a href="#Stop">Array.&lt;Stop&gt;</a></code></dt>
<dd><p>Get color stops</p>
</dd>
<dt><a href="#start">start(value)</a></dt>
<dd><p>Set starting point</p>
</dd>
<dt><a href="#start">start()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Set starting point</p>
</dd>
<dt><a href="#end">end(value)</a></dt>
<dd><p>Set ending point</p>
</dd>
<dt><a href="#end">end()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Set ending point</p>
</dd>
<dt><a href="#stops">stops(values)</a></dt>
<dd><p>Set color stops</p>
</dd>
<dt><a href="#stops">stops()</a> ⇒ <code><a href="#Stop">Array.&lt;Stop&gt;</a></code></dt>
<dd><p>Get color stops</p>
</dd>
<dt><a href="#start">start(value)</a></dt>
<dd><p>Set starting point</p>
</dd>
<dt><a href="#start">start()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Set starting point</p>
</dd>
<dt><a href="#startRadius">startRadius(value)</a></dt>
<dd><p>Set starting radius</p>
</dd>
<dt><a href="#startRadius">startRadius()</a> ⇒ <code>Number</code></dt>
<dd><p>Set starting radius</p>
</dd>
<dt><a href="#end">end(value)</a></dt>
<dd><p>Set ending point</p>
</dd>
<dt><a href="#end">end()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Set ending point</p>
</dd>
<dt><a href="#endRadius">endRadius(value)</a></dt>
<dd><p>Set ending radius</p>
</dd>
<dt><a href="#endRadius">endRadius()</a> ⇒ <code>Number</code></dt>
<dd><p>Set ending radius</p>
</dd>
<dt><a href="#stops">stops(value)</a></dt>
<dd><p>Set color stops</p>
</dd>
<dt><a href="#stops">stops()</a> ⇒ <code><a href="#Stop">Array.&lt;Stop&gt;</a></code></dt>
<dd><p>Get color stops</p>
</dd>
<dt><a href="#color">color(value)</a></dt>
<dd><p>Set color type</p>
</dd>
<dt><a href="#color">color()</a> ⇒ <code>Object</code></dt>
<dd><p>Get color type</p>
</dd>
<dt><a href="#type">type(value)</a></dt>
<dd><p>Set type value</p>
</dd>
<dt><a href="#type">type()</a> ⇒ <code>string</code></dt>
<dd><p>Get type value</p>
</dd>
<dt><a href="#gradient">gradient(value)</a></dt>
<dd><p>Set gradient gradient properties</p>
</dd>
<dt><a href="#gradient">gradient()</a> ⇒ <code>Object</code></dt>
<dd><p>Get gradient gradient properties</p>
</dd>
<dt><a href="#pattern">pattern()</a> ⇒ <code>Pattern</code></dt>
<dd><p>Get pattern fill object</p>
</dd>
<dt><a href="#color">color(value)</a></dt>
<dd><p>Set color value</p>
</dd>
<dt><a href="#color">color()</a> ⇒ <code>Object</code></dt>
<dd><p>Get color value</p>
</dd>
<dt><a href="#blur">blur(blur)</a></dt>
<dd><p>Set blur value</p>
</dd>
<dt><a href="#blur">blur()</a> ⇒ <code>number</code></dt>
<dd><p>Get blur value</p>
</dd>
<dt><a href="#offset">offset(value)</a></dt>
<dd><p>Set offset</p>
</dd>
<dt><a href="#offset">offset()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get offset</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis offset value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis offset value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis offset value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis offset value</p>
</dd>
<dt><a href="#type">type(value)</a></dt>
<dd><p>Set type</p>
</dd>
<dt><a href="#type">type()</a> ⇒ <code>number</code></dt>
<dd><p>Get type</p>
</dd>
<dt><a href="#segments">segments(value)</a></dt>
<dd><p>Set segment value</p>
</dd>
<dt><a href="#segments">segments()</a> ⇒ <code>Array</code></dt>
<dd><p>Get segment value</p>
</dd>
<dt><a href="#color">color(value)</a></dt>
<dd><p>Set color value</p>
</dd>
<dt><a href="#color">color()</a> ⇒ <code>Object</code></dt>
<dd><p>Get color value</p>
</dd>
<dt><a href="#width">width(value)</a></dt>
<dd><p>Set width value</p>
</dd>
<dt><a href="#width">width()</a> ⇒ <code>number</code></dt>
<dd><p>Get width value</p>
</dd>
<dt><a href="#shadow">shadow(value)</a></dt>
<dd><p>Set shadow value</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get shadow value</p>
</dd>
<dt><a href="#border">border(value)</a></dt>
<dd><p>Set border value</p>
</dd>
<dt><a href="#border">border()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get border value</p>
</dd>
<dt><a href="#axis">axis(value)</a></dt>
<dd><p>Set axis value</p>
</dd>
<dt><a href="#axis">axis()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get axis value</p>
</dd>
<dt><a href="#coordinates">coordinates(value)</a></dt>
<dd><p>Set coordinates value</p>
</dd>
<dt><a href="#coordinates">coordinates()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get coordinates value</p>
</dd>
<dt><a href="#controlPoints">controlPoints(value)</a></dt>
<dd><p>Set control points value</p>
</dd>
<dt><a href="#controlPoints">controlPoints()</a> ⇒ <code>boolean</code></dt>
<dd><p>Get control points value</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code><a href="#OptionsCollection">OptionsCollection</a></code></dt>
<dd><p>Get options</p>
</dd>
<dt><a href="#invert">invert()</a></dt>
<dd><p>Invert x &amp; y coordinate values</p>
</dd>
<dt><a href="#color">color(value)</a></dt>
<dd><p>Set color value</p>
</dd>
<dt><a href="#color">color()</a> ⇒ <code>string</code></dt>
<dd><p>Get color value</p>
</dd>
<dt><a href="#blur">blur(blur)</a></dt>
<dd><p>Set blur value</p>
</dd>
<dt><a href="#blur">blur()</a> ⇒ <code>number</code></dt>
<dd><p>Get blur value</p>
</dd>
<dt><a href="#offset">offset(value)</a></dt>
<dd><p>Set offset</p>
</dd>
<dt><a href="#offset">offset()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get offset</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis offset value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis offset value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis offset value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis offset value</p>
</dd>
<dt><a href="#color">color(value)</a></dt>
<dd><p>Set color value</p>
</dd>
<dt><a href="#color">color()</a> ⇒ <code>string</code></dt>
<dd><p>Get color value</p>
</dd>
<dt><a href="#type">type(value)</a></dt>
<dd><p>Set type</p>
</dd>
<dt><a href="#type">type()</a> ⇒ <code>number</code></dt>
<dd><p>Get type</p>
</dd>
<dt><a href="#segments">segments(value)</a></dt>
<dd><p>Set segment value</p>
</dd>
<dt><a href="#segments">segments()</a> ⇒ <code>Array</code></dt>
<dd><p>Get segment value</p>
</dd>
<dt><a href="#width">width(value)</a></dt>
<dd><p>Set width value</p>
</dd>
<dt><a href="#width">width()</a> ⇒ <code>number</code></dt>
<dd><p>Get width value</p>
</dd>
<dt><a href="#master">master()</a></dt>
<dd><p>Set master object</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#radius">radius(value)</a></dt>
<dd><p>Set radius value</p>
</dd>
<dt><a href="#radius">radius()</a> ⇒ <code>number</code></dt>
<dd><p>Get radius value</p>
</dd>
<dt><a href="#angle">angle()</a> ⇒ <code><a href="#Angle">Angle</a></code></dt>
<dd><p>Get angle properties</p>
</dd>
<dt><a href="#stroke">stroke()</a> ⇒ <code><a href="#Stroke">Stroke</a></code></dt>
<dd><p>Get stroke properties</p>
</dd>
<dt><a href="#fill">fill()</a> ⇒ <code><a href="#Fill">Fill</a></code></dt>
<dd><p>Get fill properties</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code><a href="#Shadow">Shadow</a></code></dt>
<dd><p>Get shadow properties</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#anchor">anchor()</a> ⇒ <code><a href="#Anchor">Anchor</a></code></dt>
<dd><p>Get anchor</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code><a href="#Options">Options</a></code></dt>
<dd><p>Get options properties</p>
</dd>
<dt><a href="#area">area()</a> ⇒ <code>number</code></dt>
<dd><p>Get area of this object</p>
</dd>
<dt><a href="#diameter">diameter()</a> ⇒ <code>number</code></dt>
<dd><p>Get diameter of circle</p>
</dd>
<dt><a href="#center">center()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get center of this object</p>
</dd>
<dt><a href="#circumference">circumference()</a> ⇒ <code>number</code></dt>
<dd><p>Get circumference of circle</p>
</dd>
<dt><a href="#isThere">isThere(circle)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether the passed object is already present</p>
</dd>
<dt><a href="#fillColorCycle">fillColorCycle(progress, start, end, [max])</a></dt>
<dd><p>Cycle colors for fill</p>
</dd>
<dt><a href="#gradientColorCycle">gradientColorCycle(progress, start, end, stop, [max])</a></dt>
<dd><p>Cycle colors for gradient</p>
</dd>
<dt><a href="#move">move(degree, distance, [clear])</a></dt>
<dd><p>Move this object</p>
</dd>
<dt><a href="#rotate">rotate(degree, [clear])</a></dt>
<dd><p>Rotate this object</p>
</dd>
<dt><a href="#showCordinates">showCordinates([offset], [fontSize])</a></dt>
<dd><p>Shows coordinates of this object</p>
</dd>
<dt><a href="#strokeColorCycle">strokeColorCycle(start, end, progress, [max])</a></dt>
<dd><p>Cycle colors for stroke</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Draw this object</p>
</dd>
<dt><a href="#redraw">redraw(canvas, point, [clear])</a></dt>
<dd><p>Redraw this object</p>
</dd>
<dt><a href="#start">start(value)</a></dt>
<dd><p>Set starting point</p>
</dd>
<dt><a href="#start">start()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Set starting point</p>
</dd>
<dt><a href="#end">end(value)</a></dt>
<dd><p>Set ending point</p>
</dd>
<dt><a href="#end">end()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Set ending point</p>
</dd>
<dt><a href="#stroke">stroke()</a> ⇒ <code><a href="#Stroke">Stroke</a></code></dt>
<dd><p>Get stroke properties</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code><a href="#Shadow">Shadow</a></code></dt>
<dd><p>Get shadow properties</p>
</dd>
<dt><a href="#lineCap">lineCap(value)</a></dt>
<dd><p>Set line cap</p>
</dd>
<dt><a href="#lineCap">lineCap()</a> ⇒ <code>string</code></dt>
<dd><p>Get line cap</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code><a href="#Options">Options</a></code></dt>
<dd><p>Get options properties</p>
</dd>
<dt><a href="#controlPoints">controlPoints()</a> ⇒ <code><a href="#ControlPoints">ControlPoints</a></code></dt>
<dd><p>Get control point properties</p>
</dd>
<dt><a href="#center">center()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get center of this object</p>
</dd>
<dt><a href="#+_setPath">#_setPath()</a></dt>
<dd><p>Set line&#39;s path</p>
</dd>
<dt><a href="#isThere">isThere(line)</a></dt>
<dd><p>Check whether the passed object is already present</p>
</dd>
<dt><a href="#curve">curve(p0, p1, p2, p3)</a></dt>
<dd><p>Set control points for bezier curve</p>
</dd>
<dt><a href="#drawPoints">drawPoints()</a></dt>
<dd><p>Draws start &amp; end points</p>
</dd>
<dt><a href="#fillColorCycle">fillColorCycle(progress, start, end, [max])</a></dt>
<dd><p>Cycle colors for fill</p>
</dd>
<dt><a href="#move">move(degree, distance, [clear])</a></dt>
<dd><p>Move this object</p>
</dd>
<dt><a href="#rotate">rotate(degree, [anchor], [clear])</a></dt>
<dd><p>Rotate this object</p>
</dd>
<dt><a href="#showControlPoints">showControlPoints([offset], [fontSize])</a></dt>
<dd><p>Show control points for this object</p>
</dd>
<dt><a href="#showCoordinates">showCoordinates([offset], [fontSize])</a></dt>
<dd><p>Shows coordinates of this object</p>
</dd>
<dt><a href="#strokeColorCycle">strokeColorCycle(start, end, progress, [max])</a></dt>
<dd><p>Cycle colors for stroke</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Draw this object</p>
</dd>
<dt><a href="#redraw">redraw(canvas, start, end, clear)</a></dt>
<dd><p>Redraw this object</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#aspect">aspect(value)</a></dt>
<dd><p>Set aspect properties</p>
</dd>
<dt><a href="#aspect">aspect()</a> ⇒ <code><a href="#Aspect">Aspect</a></code></dt>
<dd><p>Get aspect properties</p>
</dd>
<dt><a href="#width">width(value)</a></dt>
<dd><p>Set aspect width</p>
</dd>
<dt><a href="#width">width()</a> ⇒ <code>number</code></dt>
<dd><p>Get aspect with</p>
</dd>
<dt><a href="#height">height(value)</a></dt>
<dd><p>Set aspect height</p>
</dd>
<dt><a href="#height">height()</a> ⇒ <code>number</code></dt>
<dd><p>Get aspect height</p>
</dd>
<dt><a href="#stroke">stroke()</a> ⇒ <code><a href="#Stroke">Stroke</a></code></dt>
<dd><p>Get stroke properties</p>
</dd>
<dt><a href="#fill">fill()</a> ⇒ <code><a href="#Fill">Fill</a></code></dt>
<dd><p>Get fill properties</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code><a href="#Shadow">Shadow</a></code></dt>
<dd><p>Get shadow properties</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#anchor">anchor()</a> ⇒ <code><a href="#Anchor">Anchor</a></code></dt>
<dd><p>Get anchor</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code><a href="#Options">Options</a></code></dt>
<dd><p>Get options properties</p>
</dd>
<dt><a href="#isThere">isThere(rectangle)</a></dt>
<dd><p>Check whether the passed object is already present</p>
</dd>
<dt><a href="#fillColorCycle">fillColorCycle(progress, start, end, [max])</a></dt>
<dd><p>Cycle colors for fill</p>
</dd>
<dt><a href="#gradientColorCycle">gradientColorCycle(progress, start, end, stop, [max])</a></dt>
<dd><p>Cycle colors for gradient</p>
</dd>
<dt><a href="#move">move(degree, distance, [clear])</a></dt>
<dd><p>Move this object</p>
</dd>
<dt><a href="#rotate">rotate(degree, [clear])</a></dt>
<dd><p>Rotate this object</p>
</dd>
<dt><a href="#strokeColorCycle">strokeColorCycle(start, end, progress, [max])</a></dt>
<dd><p>Cycle colors for stroke</p>
</dd>
<dt><a href="#area">area()</a> ⇒ <code>number</code></dt>
<dd><p>Get area of this object</p>
</dd>
<dt><a href="#center">center()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get center of this object</p>
</dd>
<dt><a href="#perimeter">perimeter()</a> ⇒ <code>number</code></dt>
<dd><p>Get perimeter of this object</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Draw this object</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#text">text(value)</a></dt>
<dd><p>Set text</p>
</dd>
<dt><a href="#text">text()</a> ⇒ <code>string</code></dt>
<dd><p>Get text</p>
</dd>
<dt><a href="#stroke">stroke()</a> ⇒ <code><a href="#Stroke">Stroke</a></code></dt>
<dd><p>Get stroke properties</p>
</dd>
<dt><a href="#fill">fill()</a> ⇒ <code><a href="#Fill">Fill</a></code></dt>
<dd><p>Get fill properties</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code><a href="#Shadow">Shadow</a></code></dt>
<dd><p>Get shadow properties</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code><a href="#Options">Options</a></code></dt>
<dd><p>Get options properties</p>
</dd>
<dt><a href="#+_drawOptions">#_drawOptions()</a></dt>
<dd><p>Draws associated options</p>
</dd>
<dt><a href="#type">type(value)</a></dt>
<dd><p>Set font&#39;s type</p>
</dd>
<dt><a href="#type">type()</a> ⇒ <code>string</code></dt>
<dd><p>Get font&#39;s type</p>
</dd>
<dt><a href="#size">size(value)</a></dt>
<dd><p>Set font&#39;s size</p>
</dd>
<dt><a href="#size">size()</a> ⇒ <code>number</code></dt>
<dd><p>Get font&#39;s size</p>
</dd>
<dt><a href="#weight">weight(value)</a></dt>
<dd><p>Set font&#39;s weight</p>
</dd>
<dt><a href="#weight">weight()</a> ⇒ <code>string</code></dt>
<dd><p>Get font&#39;s weight</p>
</dd>
<dt><a href="#maxWidth">maxWidth(value)</a></dt>
<dd><p>Set font&#39;s max width</p>
</dd>
<dt><a href="#maxWidth">maxWidth()</a> ⇒ <code>number</code></dt>
<dd><p>Get font&#39;s max width</p>
</dd>
<dt><a href="#offset">offset(value)</a></dt>
<dd><p>Set offset</p>
</dd>
<dt><a href="#offset">offset()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get offset</p>
</dd>
<dt><a href="#font">font()</a> ⇒ <code>string</code></dt>
<dd><p>Get font</p>
</dd>
<dt><a href="#drawBorder">drawBorder([offset])</a></dt>
<dd><p>Draws border around this object</p>
</dd>
<dt><a href="#drawAxis">drawAxis([offset])</a></dt>
<dd><p>Draws axis through center of this object</p>
</dd>
<dt><a href="#fillColorCycle">fillColorCycle(progress, start, end, [max])</a></dt>
<dd><p>Cycle colors for fill</p>
</dd>
<dt><a href="#move">move(degree, distance, [clear])</a></dt>
<dd><p>Move this object</p>
</dd>
<dt><a href="#rotate">rotate(degree, [anchor], [clear])</a></dt>
<dd><p>Rotate this object</p>
</dd>
<dt><a href="#strokeColorCycle">strokeColorCycle(start, end, progress, [max])</a></dt>
<dd><p>Cycle colors for stroke</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Draw this object</p>
</dd>
<dt><a href="#point">point(point)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#pushPop">pushPop(object)</a></dt>
<dd><p>Push or pops the passed object</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Typical draw function for collections; Circles, Texts</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#push">push(object)</a></dt>
<dd><p>Pushes an object into this group</p>
</dd>
<dt><a href="#pop">pop(object)</a></dt>
<dd><p>Pops an object out of this group</p>
</dd>
<dt><a href="#aTypical">aTypical(canvas)</a></dt>
<dd><p>A-typical draw function for collections; Lines</p>
</dd>
<dt><a href="#typical">typical(canvas)</a></dt>
<dd><p>Typical draw function for collections; Circles, Rectangles, Texts</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Draw this group</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#stroke">stroke()</a> ⇒ <code><a href="#Stroke">Stroke</a></code></dt>
<dd><p>Get stroke properties</p>
</dd>
<dt><a href="#shadow">shadow()</a> ⇒ <code><a href="#Shadow">Shadow</a></code></dt>
<dd><p>Get shadow properties</p>
</dd>
<dt><a href="#options">options()</a> ⇒ <code>Object</code></dt>
<dd><p>Get options</p>
</dd>
<dt><a href="#lineCap">lineCap(value)</a></dt>
<dd><p>Set line cap</p>
</dd>
<dt><a href="#lineCap">lineCap()</a> ⇒ <code>string</code></dt>
<dd><p>Get line cap</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#aspect">aspect()</a> ⇒ <code><a href="#Aspect">Aspect</a></code></dt>
<dd><p>Get aspect properties</p>
</dd>
<dt><a href="#width">width()</a> ⇒ <code>number</code></dt>
<dd><p>Get aspect with</p>
</dd>
<dt><a href="#height">height()</a> ⇒ <code>number</code></dt>
<dd><p>Get aspect height</p>
</dd>
<dt><a href="#anchor">anchor(value)</a></dt>
<dd><p>Set anchor type</p>
</dd>
<dt><a href="#anchor">anchor()</a> ⇒ <code><a href="#Anchor">Anchor</a></code></dt>
<dd><p>Get anchor</p>
</dd>
<dt><a href="#area">area()</a> ⇒ <code>number</code></dt>
<dd><p>Get area of this object</p>
</dd>
<dt><a href="#perimeter">perimeter()</a> ⇒ <code>number</code></dt>
<dd><p>Get perimeter of this object</p>
</dd>
<dt><a href="#center">center()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get center of this object</p>
</dd>
<dt><a href="#+_appendProperties">#_appendProperties(line)</a></dt>
<dd><p>Appends property values</p>
</dd>
<dt><a href="#_isAspect">_isAspect(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns whether the passed value is an Aspect</p>
</dd>
<dt><a href="#push">push()</a></dt>
<dd><p>Pushes Line(s) into this collection</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>A-typical draw function for collections; Lines</p>
</dd>
<dt><a href="#point">point(value)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set the y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#pushPop">pushPop(object)</a></dt>
<dd><p>Push or pops the passed object</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Draw this object</p>
</dd>
<dt><a href="#point">point(point)</a></dt>
<dd><p>Set point</p>
</dd>
<dt><a href="#point">point()</a> ⇒ <code><a href="#Point">Point</a></code></dt>
<dd><p>Get point</p>
</dd>
<dt><a href="#x">x(value)</a></dt>
<dd><p>Set x-axis value</p>
</dd>
<dt><a href="#x">x()</a> ⇒ <code>number</code></dt>
<dd><p>Get x-axis value</p>
</dd>
<dt><a href="#y">y(value)</a></dt>
<dd><p>Set y-axis value</p>
</dd>
<dt><a href="#y">y()</a> ⇒ <code>number</code></dt>
<dd><p>Get y-axis value</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas value</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>string</code></dt>
<dd><p>Get canvas value</p>
</dd>
<dt><a href="#pushPop">pushPop(object)</a></dt>
<dd><p>Push or pops the passed object</p>
</dd>
<dt><a href="#draw">draw(canvas)</a></dt>
<dd><p>Typical draw function for collections; Circles, Texts</p>
</dd>
<dt><a href="#timing">timing(value)</a></dt>
<dd><p>Set timing</p>
</dd>
<dt><a href="#timing">timing()</a> ⇒ <code>function</code></dt>
<dd><p>Get timing</p>
</dd>
<dt><a href="#draw">draw(Draw)</a></dt>
<dd><p>Set draw function</p>
</dd>
<dt><a href="#draw">draw()</a> ⇒ <code>function</code></dt>
<dd><p>Get draw function</p>
</dd>
<dt><a href="#duration">duration(value)</a></dt>
<dd><p>Set duration</p>
</dd>
<dt><a href="#duration">duration()</a> ⇒ <code>number</code></dt>
<dd><p>Get duration</p>
</dd>
<dt><a href="#animate">animate()</a></dt>
<dd><p>Initiates animation</p>
</dd>
<dt><a href="#canvas">canvas(value)</a></dt>
<dd><p>Set canvas element</p>
</dd>
<dt><a href="#canvas">canvas()</a> ⇒ <code>HTMLCanvasElement</code></dt>
<dd><p>Get canvas element</p>
</dd>
<dt><a href="#about">about()</a> ⇒ <code>Object</code></dt>
<dd><p>Get application details</p>
</dd>
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
    * [.animate(flow)](#canvasLab+animate)

<a name="new_canvasLab_new"></a>

### new canvasLab()
Create a canvasLab object

<a name="canvasLab+animate"></a>

### canvasLab.animate(flow)
Animates onscreen objects in accordance with passed param values

**Kind**: instance method of [<code>canvasLab</code>](#canvasLab)  

| Param | Type | Description |
| --- | --- | --- |
| flow | <code>Object</code> | Contains timing, draw, & duration values & functions |
| flow.duration | <code>number</code> | Duration of animation |
| flow.timing | <code>function</code> | Timing function |
| flow.draw | <code>function</code> | Draw function |

<a name="Hsl"></a>

## Hsl
{Object} Hsl 								HSL color model

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [hue] | <code>number</code> | <code>0</code> | Hue value; 0 - 360 (degree) |
| [saturation] | <code>number</code> | <code>0</code> | Saturation value; 0 - 1 (decimal) |
| [lightness] | <code>number</code> | <code>0</code> | Lightness value; 0 - 1 (decimal) |
| [alpha] | <code>number</code> | <code>1</code> | Alpha value; 0 - 1 (decimal) |

<a name="new_Hsl_new"></a>

### new Hsl(hue, saturation, lightness, alpha)
Create an HSL color model


| Param | Type | Description |
| --- | --- | --- |
| hue | <code>number</code> | Hue value |
| saturation | <code>number</code> | Saturation value |
| lightness | <code>number</code> | Lightness value |
| alpha | <code>number</code> | Alpha value |

<a name="Hwb"></a>

## Hwb
{Object} Hwb 								HWB color model

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [hue] | <code>number</code> | <code>0</code> | Hue value; 0 - 360 (degree) |
| [whiteness] | <code>number</code> | <code>0</code> | Whiteness value; 0 - 1 (decimal) |
| [blackness] | <code>number</code> | <code>0</code> | Blackness value; 0 - 1 (decimal) |
| [alpha] | <code>number</code> | <code>1</code> | Alpha value; 0 - 1 (decimal) |

<a name="new_Hwb_new"></a>

### new Hwb(hue, whiteness, blackness, alpha)
Create an HWB color Model


| Param | Type | Description |
| --- | --- | --- |
| hue | <code>number</code> | Hue value |
| whiteness | <code>number</code> | Whiteness value |
| blackness | <code>number</code> | Blackness value |
| alpha | <code>number</code> | Alpha value |

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

<a name="new_Rgb_new"></a>

### new Rgb(red, green, blue, alpha)
Create an RGB color model


| Param | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red value |
| green | <code>number</code> | Green value |
| blue | <code>number</code> | Blue value |
| alpha | <code>number</code> | Alpha value |

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

<a name="Anchor"></a>

## Anchor
{Object} Anchor                             Anchor object

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| align | <code>string</code> | Anchor alignment |

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

<a name="new_Angle_new"></a>

### new Angle(start, end, clockwise)
Create an angle


| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | The angle at which the arc starts in degrees, measured from the positive x-axis |
| end | <code>number</code> | The angle at which the arc ends in degrees, measured from the positive x-axis |
| clockwise | <code>boolean</code> | Draws the arc clockwise between the start and end angles |

<a name="Aspect"></a>

## Aspect
{Object} Aspect                             Aspect dimensions of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>number</code> | <code>0</code> | Width |
| [height] | <code>number</code> | <code>0</code> | Height |

<a name="new_Aspect_new"></a>

### new Aspect(width, height)
Create an aspect


| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | Width of aspect |
| height | <code>number</code> | Height of aspect |

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

<a name="new_ControlPoints_new"></a>

### new ControlPoints(p0, p1, p2, p3)
Create control points


| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>number</code> | Control point one |
| p1 | <code>number</code> | Control point two |
| p2 | <code>number</code> | Control point three |
| p3 | <code>number</code> | Control point four |

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

<a name="new_Point_new"></a>

### new Point(x, y)
Create a point


| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | X coordinate value |
| y | <code>number</code> | Y coordinate value |

<a name="Stop"></a>

## Stop
{Object} Stop                               Color stop properties for associated array(s)

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| offset | <code>number</code> |  | Representation of the color stop position; 0 = start, & 1 = end |
| [color] | <code>string</code> | <code>&quot;&lt;Rgb&gt;&quot;</code> | Color model & value |

<a name="new_Stop_new"></a>

### new Stop()
Create a color stop

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

<a name="new_Conic_new"></a>

### new Conic()
Create a Conic gradient object type

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

<a name="new_Linear_new"></a>

### new Linear()
Create a Linear gradient object type

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

<a name="new_Radial_new"></a>

### new Radial()
Create a Radial gradient object type and properties

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

<a name="new_Fill_new"></a>

### new Fill([color], [type], gradient)
Create a fill type


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Fill type |
| gradient | <code>Object</code> |  | Gradient object |

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

<a name="new_Shadow_new"></a>

### new Shadow(color, blur, offset)
Create a shadow


| Param | Type | Description |
| --- | --- | --- |
| color | <code>Object</code> | RGB color value |
| blur | <code>number</code> | Shadow blur value |
| offset | [<code>Point</code>](#Point) | Shadow offset |

<a name="Stroke"></a>

## Stroke
{Object}   Stroke                           Stroke properties of associated object

**Kind**: global class  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [color] | <code>Object</code> | <code>&lt;Rgb&gt;</code> | Color model & value |
| [type] | <code>string</code> | <code>&quot;&#x27;solid&#x27;&quot;</code> | Stroke type; solid | dashed |
| [segments] | <code>Array.&lt;number&gt;</code> | <code>[5, 5]</code> | Dashed line segment distance(s); <array<numbers>> |
| [width] | <code>number</code> | <code>2</code> | Thickness of stroke |
| shadow | [<code>Shadow</code>](#Shadow) |  | Shadow properties |

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

<a name="new_PointCollection_new"></a>

### new PointCollection()
Create a point collection

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

<a name="new_ShadowCollection_new"></a>

### new ShadowCollection()
Create a shadow collection

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

<a name="new_StrokeCollection_new"></a>

### new StrokeCollection()
Create a stroke collection

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

<a name="new_Circle_new"></a>

### new Circle()
Create a Circle object

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

<a name="new_Line_new"></a>

### new Line()
Create a Line object

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

<a name="new_Rectangle_new"></a>

### new Rectangle()
Create a Rectangle object

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

<a name="Circles"></a>

## Circles
{Array} Circles                             Collection of circle elements within an array

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |
| canvas | <code>HTMLCanvasElement</code> | 2D canvas context |

<a name="new_Circles_new"></a>

### new Circles()
Create Circles object

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

<a name="new_Group_new"></a>

### new Group()
Create Group object

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

<a name="new_Lines_new"></a>

### new Lines()
Create a lines array

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
    * [.canvas](#Rectangles+canvas)
    * [.canvas](#Rectangles+canvas) ⇒ <code>string</code>

<a name="new_Rectangles_new"></a>

### new Rectangles()
Create Rectangles object

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

<a name="new_Animation_new"></a>

### new Animation(duration, timing, draw)
Creates an animation instance


| Param | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | Duration of animation |
| timing | <code>function</code> | Timing function |
| draw | <code>function</code> | Draw function |

<a name="Application"></a>

## Application
{Object}   Application                      Application handler

**Kind**: global class  

* [Application](#Application)
    * [new Application()](#new_Application_new)
    * [.animation](#Application+animation)

<a name="new_Application_new"></a>

### new Application()
Creates an application handler

<a name="Application+animation"></a>

### application.animation
Creates a new animation instance

**Kind**: instance property of [<code>Application</code>](#Application)  

| Param | Type | Description |
| --- | --- | --- |
| flow | <code>Object</code> | Contains timing, draw, & duration values & functions |
| flow.duration | <code>number</code> | Duration of animation |
| flow.timing | <code>function</code> | Timing function |
| flow.draw | <code>function</code> | Draw function |

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
<a name="color"></a>

## color : <code>Object</code>
**Kind**: global variable  
<a name="cycle"></a>

## cycle : <code>Object</code>
**Kind**: global variable  
<a name="draw"></a>

## draw : <code>Object</code>
**Kind**: global variable  
<a name="collection"></a>

## collection : <code>Object</code>
**Kind**: global variable  
<a name="misc"></a>

## misc : <code>Object</code>
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
<a name="stroke"></a>

## stroke(start, end, progress, [max])
Cycle colors for stroke

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="fill"></a>

## fill(start, end, progress, [max])
Cycle colors for fill

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="gradient"></a>

## gradient(start, end, progress, stop, [max])
Cycle colors for gradient

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="stop"></a>

## stop(start, end, progress, stop, max, clear, draw)
Cycle colors for gradient stop(s)

**Kind**: global function  
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

<a name="axis"></a>

## axis(offset, color, stop)
Draws an axis for the associated object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | Offset of axis |
| color | <code>Object</code> | Color model |
| stop | <code>number</code> | Gradient color stop |

<a name="border"></a>

## border(aspect, color)
Draws an axis for the associated object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| aspect | [<code>Aspect</code>](#Aspect) | Aspect properties |
| color | <code>Object</code> | Color model |

<a name="typical"></a>

## typical(canvas)
Typical draw function for collections; Circles, Rectangles, Texts

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="aTypical"></a>

## aTypical(canvas)
A-typical draw function for collections; Lines

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="clearCanvas"></a>

## clearCanvas(value)
Clears canvas

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Whether to redraw background |

<a name="pushPop"></a>

## pushPop(object)
Push or pops the passed object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Circle, Rectangle, Text |

<a name="rotatePoint"></a>

## rotatePoint(origin, degree, distance)
Rotates the origin point by the degree & distance passed

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| origin | [<code>Point</code>](#Point) | Origin point |
| degree | <code>number</code> | Degree to rotate |
| distance | <code>number</code> | Distance from origin |

<a name="all"></a>

## all(property, value)
Sets all option values throughout a collection

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| property | <code>string</code> | Option property |
| value | <code>boolean</code> | True || False |

<a name="shadow"></a>

## shadow()
Sets shadow properties

**Kind**: global function  
**Access**: public  
<a name="fillType"></a>

## fillType()
Sets fill type of the associated object

**Kind**: global function  
**Access**: public  
<a name="_setStops"></a>

## \_setStops(gradient, stops)
Sets stops for gradient fill types

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| gradient | <code>Object</code> | [description] |
| stops | <code>Array.&lt;Stops&gt;</code> | [description] |

<a name="is256"></a>

## is256(value) ⇒ <code>boolean</code>
Returns whether the passed value is a 256 color value; 0 - 255

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | 256 color value; 0 - 255 |

<a name="isAnchor"></a>

## isAnchor(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Anchor alignment

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="isAngle"></a>

## isAngle(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Angle or equivalent value

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> \| <code>number</code> | Angle object or number value |

<a name="isAnchor"></a>

## isAnchor(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Anchor alignment

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="isAlpha"></a>

## isAlpha(value) ⇒ <code>boolean</code>
Returns whether the passed value is an alpha value; 0.00 - 1

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Alpha value; 0.00 - 1 |

<a name="isAspect"></a>

## isAspect(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Aspect

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Aspect or object equivalent |

<a name="isBlur"></a>

## isBlur(value) ⇒ <code>boolean</code>
Returns whether the passed value is a blur value

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Blur value |

<a name="isCanvasLabObject"></a>

## isCanvasLabObject(value) ⇒ <code>boolean</code>
Returns whether the passed value is a CanvasLab object; Line, Circle, Rectangle, Text

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | CanvasLab object; Line, Circle, Rectangle, Text |

<a name="isColorName"></a>

## isColorName(value) ⇒ <code>boolean</code>
Returns whether the passed value is a CSS color name

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS color name |

<a name="isColorModel"></a>

## isColorModel(value) ⇒ <code>boolean</code>
Returns whether the passed value is a color model

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model or object equivalent |

<a name="isDecimal"></a>

## isDecimal(value) ⇒ <code>boolean</code>
Returns whether the passed value is a decimal value; 0.00 - 1

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Decimal value; 0.00 - 1 |

<a name="isDegree"></a>

## isDegree(value) ⇒ <code>boolean</code>
Returns whether the passed value is a degree

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Degree |

<a name="isFillType"></a>

## isFillType(value) ⇒ <code>boolean</code>
Returns whether the passed value is a fill type

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Fill type |

<a name="isGradient"></a>

## isGradient(value) ⇒ <code>boolean</code>
Returns whether the passed value is a gradient object

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Gradient object |

<a name="isInDom"></a>

## isInDom(value) ⇒ <code>boolean</code>
Returns whether the passed value is an element id within the DOM

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Element id |

<a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Number value

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Number value |

<a name="isPoint"></a>

## isPoint(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Point

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Point or object equivalent |

<a name="isRadian"></a>

## isRadian(value) ⇒ <code>boolean</code>
Returns whether the passed value is a radian; 0 - 6.28...

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radian value; 0 - 6.28... |

<a name="isRadius"></a>

## isRadius(value) ⇒ <code>boolean</code>
Returns whether the passed value is a radius value

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius value |

<a name="isRadius"></a>

## isRadius(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Array of segment values

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array.&lt;number&gt;</code> | Array of segment values |

<a name="isStop"></a>

## isStop(value) ⇒ <code>boolean</code>
Returns whether the passed value is a Stop or object equivalent

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Stop or object equivalent |

<a name="isStrokeType"></a>

## isStrokeType(value) ⇒ <code>boolean</code>
Returns whether the passed value is a stroke type

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Stroke type |

<a name="isWidth"></a>

## isWidth(value) ⇒ <code>boolean</code>
Returns whether the passed value is a width value

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas identifier |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas identifier  
**Read only**: true  
**See**: [canvas](#discrete.canvas)  
<a name="canvases"></a>

## canvases(canvasId)
Set canvas value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvasId | <code>string</code> | Canvas identifier |

<a name="canvases"></a>

## canvases() ⇒ <code>Array</code>
Set canvas value

**Kind**: global function  
**Returns**: <code>Array</code> - Array of canvas contexts  
**Read only**: true  
<a name="font"></a>

## font(font)
Set main font type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| font | <code>string</code> | Main font type |

<a name="font"></a>

## font() ⇒ <code>string</code>
Get main font type

**Kind**: global function  
**Returns**: <code>string</code> - font                               Main font type  
**Read only**: true  
<a name="hue"></a>

## hue(hue)
Sets the hue value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>number</code> | Hue value; 0 - 360 |

<a name="hue"></a>

## hue() ⇒ <code>number</code>
Gets the hue value

**Kind**: global function  
**Returns**: <code>number</code> - Hue value; 0 - 360  
**Access**: public  
<a name="saturation"></a>

## saturation(saturation)
Sets the saturation value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| saturation | <code>number</code> | Saturation value; 0 - 1 |

<a name="saturation"></a>

## saturation() ⇒ <code>number</code>
Gets the saturation value

**Kind**: global function  
**Returns**: <code>number</code> - Saturation value; 0 - 1  
**Access**: public  
<a name="lightness"></a>

## lightness(lightness)
Sets the lightness value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| lightness | <code>number</code> | Lightness value; 0 - 1 |

<a name="lightness"></a>

## lightness() ⇒ <code>number</code>
Gets the lightness value

**Kind**: global function  
**Returns**: <code>number</code> - Lightness value; 0 - 1  
**Access**: public  
<a name="_isDegree"></a>

## \_isDegree(value) ⇒ <code>boolean</code>
Returns whether the passed value is a degree

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Prviate**:   
**See**: [Validation.isDegree](Validation.isDegree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Degree |

<a name="toCss"></a>

## toCss() ⇒ <code>string</code>
Returns a CSS compatible <color> string value

**Kind**: global function  
**Returns**: <code>string</code> - CSS <color> string  
**Access**: public  
<a name="hue"></a>

## hue(hue)
Sets the hue value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| hue | <code>number</code> | Hue value; 0 - 360 |

<a name="hue"></a>

## hue() ⇒ <code>number</code>
Gets the hue value

**Kind**: global function  
**Returns**: <code>number</code> - Hue value; 0 - 360  
**Access**: public  
<a name="whiteness"></a>

## whiteness(whiteness)
Sets the whiteness value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| whiteness | <code>number</code> | Whiteness value; 0 - 1 |

<a name="whiteness"></a>

## whiteness() ⇒ <code>number</code>
Gets the whiteness value

**Kind**: global function  
**Returns**: <code>number</code> - Whiteness value; 0 - 1  
**Access**: public  
<a name="blackness"></a>

## blackness(blackness)
Sets the blackness value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blackness | <code>number</code> | Blackness value; 0 - 1 |

<a name="blackness"></a>

## blackness() ⇒ <code>number</code>
Gets the blackness value

**Kind**: global function  
**Returns**: <code>number</code> - Blackness value; 0 - 1  
**Access**: public  
<a name="_isDegree"></a>

## \_isDegree(value) ⇒ <code>boolean</code>
Returns whether the passed value is a degree

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Prviate**:   
**See**: [Validation.isDegree](Validation.isDegree)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Degree |

<a name="toCss"></a>

## toCss() ⇒ <code>string</code>
Returns a CSS compatible <color> string value

**Kind**: global function  
**Returns**: <code>string</code> - CSS <color> string  
**Access**: public  
<a name="red"></a>

## red(red)
Sets the red value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| red | <code>number</code> | Red value; 0 - 255 |

<a name="red"></a>

## red() ⇒ <code>number</code>
Gets the red value

**Kind**: global function  
**Returns**: <code>number</code> - Red value; 0 - 255  
**Read only**: true  
<a name="green"></a>

## green(green)
Sets the green value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| green | <code>number</code> | Green value; 0 - 255 |

<a name="green"></a>

## green() ⇒ <code>number</code>
Gets the green value

**Kind**: global function  
**Returns**: <code>number</code> - Green value; 0 - 255  
**Read only**: true  
<a name="blue"></a>

## blue(blue)
Sets the blue value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blue | <code>number</code> | Blue value; 0 - 255 |

<a name="blue"></a>

## blue() ⇒ <code>number</code>
Gets the blue value

**Kind**: global function  
**Returns**: <code>number</code> - Blue value; 0 - 255  
**Read only**: true  
<a name="toCss"></a>

## toCss() ⇒ <code>string</code>
Returns a CSS compatible <color> string value

**Kind**: global function  
**Returns**: <code>string</code> - CSS <color> string  
**Access**: public  
<a name="shadow"></a>

## shadow(value)
Set shadow value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Shadow; true | false |

<a name="shadow"></a>

## shadow() ⇒ <code>boolean</code>
Get shadow value

**Kind**: global function  
**Returns**: <code>boolean</code> - Shadow; true | false  
**Access**: public  
<a name="border"></a>

## border(value)
Set border value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Border; true | false |

<a name="border"></a>

## border() ⇒ <code>boolean</code>
Get border value

**Kind**: global function  
**Returns**: <code>boolean</code> - Border; true | false  
**Read only**: true  
<a name="axis"></a>

## axis(value)
Set axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Axis; true | false |

<a name="axis"></a>

## axis() ⇒ <code>boolean</code>
Get axis value

**Kind**: global function  
**Returns**: <code>boolean</code> - Axis; true | false  
**Read only**: true  
<a name="anchor"></a>

## anchor(value)
Set anchor value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Anchor; true | false |

<a name="anchor"></a>

## anchor() ⇒ <code>boolean</code>
Get anchor value

**Kind**: global function  
**Returns**: <code>boolean</code> - Anchor; true | false  
**Read only**: true  
<a name="coordinates"></a>

## coordinates(value)
Set coordinates value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Coordinates; true | false |

<a name="coordinates"></a>

## coordinates() ⇒ <code>boolean</code>
Get coordinates value

**Kind**: global function  
**Returns**: <code>boolean</code> - Coordinates; true | false  
**Read only**: true  
<a name="controlPoints"></a>

## controlPoints(value)
Set control points value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Control points; true | false |

<a name="controlPoints"></a>

## controlPoints() ⇒ <code>boolean</code>
Get control points value

**Kind**: global function  
**Returns**: <code>boolean</code> - Control points; true | false  
**Read only**: true  
<a name="master"></a>

## master(value)
Set master object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | CanvasLab Object |

<a name="master"></a>

## master() ⇒ <code>Object</code>
Get master object

**Kind**: global function  
**Returns**: <code>Object</code> - CanvasLab Object  
**Access**: public  
<a name="point"></a>

## point(point)
Set point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y axis coordinates  
**Access**: public  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set y-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="align"></a>

## align(value)
Set anchor alignment

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor alignment |

<a name="align"></a>

## align() ⇒ <code>string</code>
Get anchor alignment

**Kind**: global function  
**Returns**: <code>string</code> - Anchor alignment  
**Read only**: true  
<a name="start"></a>

## start(value)
Set start angle

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Start angle; in degrees |

<a name="start"></a>

## start() ⇒ <code>number</code>
Get start angle

**Kind**: global function  
**Returns**: <code>number</code> - Start value; in degrees  
**Read only**: true  
<a name="end"></a>

## end(value)
Set end angle

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | End angle; in degrees |

<a name="end"></a>

## end() ⇒ <code>number</code>
Get end angle

**Kind**: global function  
**Returns**: <code>number</code> - End angle; in degrees  
**Read only**: true  
<a name="clockwise"></a>

## clockwise(value)
Set clockwise

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Clockwise; true | false |

<a name="clockwise"></a>

## clockwise() ⇒ <code>boolean</code>
Get clockwise

**Kind**: global function  
**Returns**: <code>boolean</code> - Clockwise; true | false  
**Read only**: true  
<a name="startInRadians"></a>

## startInRadians() ⇒ <code>number</code>
Get start angle in radians

**Kind**: global function  
**Returns**: <code>number</code> - Start value; to radians  
**Read only**: true  
<a name="endInRadians"></a>

## endInRadians() ⇒ <code>number</code>
Get end angle in radians

**Kind**: global function  
**Returns**: <code>number</code> - End value; in radians  
**Read only**: true  
<a name="width"></a>

## width(value)
Set width

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="width"></a>

## width() ⇒ <code>number</code>
Get width

**Kind**: global function  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="height"></a>

## height(value)
Set height

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="height"></a>

## height() ⇒ <code>number</code>
Get height

**Kind**: global function  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
<a name="center"></a>

## center() ⇒ [<code>Point</code>](#Point)
Get center of aspect

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Center point of this aspect  
**Read only**: true  
<a name="heightCenter"></a>

## heightCenter() ⇒ <code>number</code>
Get center of height

**Kind**: global function  
**Returns**: <code>number</code> - Center of height  
**Read only**: true  
<a name="widthCenter"></a>

## widthCenter() ⇒ <code>number</code>
Get center of width

**Kind**: global function  
**Returns**: <code>number</code> - Center of with  
**Read only**: true  
<a name="p0"></a>

## p0(value)
Set control point one

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point one |

<a name="p0"></a>

## p0() ⇒ <code>number</code>
Get control point one

**Kind**: global function  
**Returns**: <code>number</code> - Control point one  
**Read only**: true  
<a name="p1"></a>

## p1(value)
Set control point one

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point two |

<a name="p1"></a>

## p1() ⇒ <code>number</code>
Get control point one

**Kind**: global function  
**Returns**: <code>number</code> - Control point two  
**Read only**: true  
<a name="p2"></a>

## p2(value)
Set control point one

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point three |

<a name="p2"></a>

## p2() ⇒ <code>number</code>
Get control point one

**Kind**: global function  
**Returns**: <code>number</code> - Control point three  
**Read only**: true  
<a name="p3"></a>

## p3(value)
Set control point one

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Control point four |

<a name="p3"></a>

## p3() ⇒ <code>number</code>
Get control point one

**Kind**: global function  
**Returns**: <code>number</code> - Control point four  
**Read only**: true  
<a name="type"></a>

## type(value)
Set font type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Type face; typography name |

<a name="type"></a>

## type() ⇒ <code>string</code>
Get type

**Kind**: global function  
**Returns**: <code>string</code> - Type face; typography name  
**Read only**: true  
<a name="size"></a>

## size(value)
Set font size

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font size |

<a name="size"></a>

## size() ⇒ <code>number</code>
Get font size

**Kind**: global function  
**Returns**: <code>number</code> - Font size  
**Read only**: true  
<a name="weight"></a>

## weight(value)
Set font weight

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font weight |

<a name="weight"></a>

## weight() ⇒ <code>number</code>
Get font weight

**Kind**: global function  
**Returns**: <code>number</code> - Font weight  
**Read only**: true  
<a name="maxWidth"></a>

## maxWidth(value)
Set font's max width

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Max width |

<a name="maxWidth"></a>

## maxWidth() ⇒ <code>number</code>
Get font's max width

**Kind**: global function  
**Returns**: <code>number</code> - Max width  
**Read only**: true  
<a name="offset"></a>

## offset() ⇒ [<code>Point</code>](#Point)
Get font's offset

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Font's offset; ( x, y )  
**Access**: public  
<a name="font"></a>

## font(value)
Set font

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | CSS style font property syntax |

<a name="font"></a>

## font() ⇒ <code>string</code>
Get font

**Kind**: global function  
**Returns**: <code>string</code> - CSS style font property syntax  
**Read only**: true  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
<a name="options"></a>

## options() ⇒ [<code>Options</code>](#Options)
Get options

**Kind**: global function  
**Returns**: [<code>Options</code>](#Options) - Options object  
**Access**: public  
<a name="center"></a>

## center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="drawOptions"></a>

## drawOptions(offset)
Draws associated options

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>number</code> | Offset of drawable options |

<a name="invert"></a>

## invert()
Invert x & y coordinate values

**Kind**: global function  
**Access**: public  
<a name="offset"></a>

## offset(value)
Set offset value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Offset value |

<a name="offset"></a>

## offset() ⇒ <code>number</code>
Get offset value

**Kind**: global function  
**Returns**: <code>number</code> - Offset value  
**Read only**: true  
<a name="color"></a>

## color(value)
Set color value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb, Hsl, Hwb |

<a name="color"></a>

## color() ⇒ <code>Object</code>
Get color value

**Kind**: global function  
**Returns**: <code>Object</code> - Color model; Rgb, Hsl, Hwb  
**Access**: public  
<a name="angle"></a>

## angle(value)
Set angle property

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Angle</code>](#Angle) | Angle object |

<a name="angle"></a>

## angle() ⇒ [<code>Angle</code>](#Angle)
Set angle property

**Kind**: global function  
**Returns**: [<code>Angle</code>](#Angle) - Angle object  
**Read only**: true  
<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Point |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Point  
**Read only**: true  
<a name="stops"></a>

## stops(values)
Set color stops

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| values | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Color stops |

<a name="stops"></a>

## stops() ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)
Get color stops

**Kind**: global function  
**Returns**: [<code>Array.&lt;Stop&gt;</code>](#Stop) - Color stops  
**Read only**: true  
<a name="start"></a>

## start(value)
Set starting point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="start"></a>

## start() ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Starting point  
**Read only**: true  
<a name="end"></a>

## end(value)
Set ending point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="end"></a>

## end() ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Ending point  
**Read only**: true  
<a name="stops"></a>

## stops(values)
Set color stops

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| values | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Color stops |

<a name="stops"></a>

## stops() ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)
Get color stops

**Kind**: global function  
**Returns**: [<code>Array.&lt;Stop&gt;</code>](#Stop) - Color stops  
**Read only**: true  
<a name="start"></a>

## start(value)
Set starting point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="start"></a>

## start() ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Starting point  
**Read only**: true  
<a name="startRadius"></a>

## startRadius(value)
Set starting radius

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Starting radius |

<a name="startRadius"></a>

## startRadius() ⇒ <code>Number</code>
Set starting radius

**Kind**: global function  
**Returns**: <code>Number</code> - Starting radius  
**Read only**: true  
<a name="end"></a>

## end(value)
Set ending point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="end"></a>

## end() ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Ending point  
**Read only**: true  
<a name="endRadius"></a>

## endRadius(value)
Set ending radius

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Ending radius |

<a name="endRadius"></a>

## endRadius() ⇒ <code>Number</code>
Set ending radius

**Kind**: global function  
**Returns**: <code>Number</code> - Ending radius  
**Read only**: true  
<a name="stops"></a>

## stops(value)
Set color stops

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Array.&lt;Stop&gt;</code>](#Stop) | Color stops |

<a name="stops"></a>

## stops() ⇒ [<code>Array.&lt;Stop&gt;</code>](#Stop)
Get color stops

**Kind**: global function  
**Returns**: [<code>Array.&lt;Stop&gt;</code>](#Stop) - Color stops  
**Read only**: true  
<a name="color"></a>

## color(value)
Set color type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model |

<a name="color"></a>

## color() ⇒ <code>Object</code>
Get color type

**Kind**: global function  
**Returns**: <code>Object</code> - Color model  
**Read only**: true  
<a name="type"></a>

## type(value)
Set type value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Fill type value |

<a name="type"></a>

## type() ⇒ <code>string</code>
Get type value

**Kind**: global function  
**Returns**: <code>string</code> - Fill type value  
**Read only**: true  
<a name="gradient"></a>

## gradient(value)
Set gradient gradient properties

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Gradient object & properties |

<a name="gradient"></a>

## gradient() ⇒ <code>Object</code>
Get gradient gradient properties

**Kind**: global function  
**Returns**: <code>Object</code> - Gradient object & properties  
**Read only**: true  
<a name="pattern"></a>

## pattern() ⇒ <code>Pattern</code>
Get pattern fill object

**Kind**: global function  
**Returns**: <code>Pattern</code> - Pattern fill object  
**Access**: public  
<a name="color"></a>

## color(value)
Set color value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb, Hsl, Hwb |

<a name="color"></a>

## color() ⇒ <code>Object</code>
Get color value

**Kind**: global function  
**Returns**: <code>Object</code> - Color model; Rgb, Hsl, Hwb  
**Access**: public  
<a name="blur"></a>

## blur(blur)
Set blur value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blur | <code>number</code> | Blur value |

<a name="blur"></a>

## blur() ⇒ <code>number</code>
Get blur value

**Kind**: global function  
**Returns**: <code>number</code> - Blur value  
**Read only**: true  
<a name="offset"></a>

## offset(value)
Set offset

**Kind**: global function  
**Access**: public  
**See**: [offset](#discrete.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="offset"></a>

## offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Access**: public  
**See**: [offset](#discrete.offset)  
<a name="x"></a>

## x(value)
Set x-axis offset value

**Kind**: global function  
**Access**: public  
**See**: [offsetX](#discrete.offsetX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis offset value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [offsetX](#discrete.offsetX)  
<a name="y"></a>

## y(value)
Set the y-axis offset value

**Kind**: global function  
**Access**: public  
**See**: [offsetY](#discrete.offsetY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis offset value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [offsetY](#discrete.offsetY)  
<a name="type"></a>

## type(value)
Set type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Type: (0) Solid or (1) Dashed |

<a name="type"></a>

## type() ⇒ <code>number</code>
Get type

**Kind**: global function  
**Returns**: <code>number</code> - Type: (0) Solid or (1) Dashed  
**Read only**: true  
<a name="segments"></a>

## segments(value)
Set segment value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Dashed line segment distance(s) |

<a name="segments"></a>

## segments() ⇒ <code>Array</code>
Get segment value

**Kind**: global function  
**Returns**: <code>Array</code> - Dashed line segment distance(s)  
**Read only**: true  
<a name="color"></a>

## color(value)
Set color value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Color model; Rgb, Hsl, Hwb |

<a name="color"></a>

## color() ⇒ <code>Object</code>
Get color value

**Kind**: global function  
**Returns**: <code>Object</code> - Color model; Rgb, Hsl, Hwb  
**Access**: public  
<a name="width"></a>

## width(value)
Set width value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Thickness of stroke |

<a name="width"></a>

## width() ⇒ <code>number</code>
Get width value

**Kind**: global function  
**Returns**: <code>number</code> - Thickness of stroke  
**Read only**: true  
<a name="shadow"></a>

## shadow(value)
Set shadow value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Shadow; true | false |

<a name="shadow"></a>

## shadow() ⇒ <code>boolean</code>
Get shadow value

**Kind**: global function  
**Returns**: <code>boolean</code> - Shadow; true | false  
**Read only**: true  
<a name="border"></a>

## border(value)
Set border value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Border; true | false |

<a name="border"></a>

## border() ⇒ <code>boolean</code>
Get border value

**Kind**: global function  
**Returns**: <code>boolean</code> - Border; true | false  
**Read only**: true  
<a name="axis"></a>

## axis(value)
Set axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Axis; true | false |

<a name="axis"></a>

## axis() ⇒ <code>boolean</code>
Get axis value

**Kind**: global function  
**Returns**: <code>boolean</code> - Axis; true | false  
**Read only**: true  
<a name="coordinates"></a>

## coordinates(value)
Set coordinates value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Coordinates; true | false |

<a name="coordinates"></a>

## coordinates() ⇒ <code>boolean</code>
Get coordinates value

**Kind**: global function  
**Returns**: <code>boolean</code> - Coordinates; true | false  
**Read only**: true  
<a name="controlPoints"></a>

## controlPoints(value)
Set control points value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>boolean</code> | Control points; true | false |

<a name="controlPoints"></a>

## controlPoints() ⇒ <code>boolean</code>
Get control points value

**Kind**: global function  
**Returns**: <code>boolean</code> - Control points; true | false  
**Read only**: true  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="options"></a>

## options() ⇒ [<code>OptionsCollection</code>](#OptionsCollection)
Get options

**Kind**: global function  
**Returns**: [<code>OptionsCollection</code>](#OptionsCollection) - Options collection object  
**Access**: public  
<a name="invert"></a>

## invert()
Invert x & y coordinate values

**Kind**: global function  
**Access**: public  
<a name="color"></a>

## color(value)
Set color value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="color"></a>

## color() ⇒ <code>string</code>
Get color value

**Kind**: global function  
**Returns**: <code>string</code> - RGB color value  
**Access**: public  
<a name="blur"></a>

## blur(blur)
Set blur value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| blur | <code>number</code> | Blur value |

<a name="blur"></a>

## blur() ⇒ <code>number</code>
Get blur value

**Kind**: global function  
**Returns**: <code>number</code> - Blur value  
**Read only**: true  
<a name="offset"></a>

## offset(value)
Set offset

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="offset"></a>

## offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Access**: public  
<a name="x"></a>

## x(value)
Set x-axis offset value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis offset value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set the y-axis offset value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis offset value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="color"></a>

## color(value)
Set color value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | RGB color value |

<a name="color"></a>

## color() ⇒ <code>string</code>
Get color value

**Kind**: global function  
**Returns**: <code>string</code> - RGB color value  
**Access**: public  
<a name="type"></a>

## type(value)
Set type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Type: (0) Solid or (1) Dashed |

<a name="type"></a>

## type() ⇒ <code>number</code>
Get type

**Kind**: global function  
**Returns**: <code>number</code> - Type: (0) Solid or (1) Dashed  
**Read only**: true  
<a name="segments"></a>

## segments(value)
Set segment value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> | Dashed line segment distance(s) |

<a name="segments"></a>

## segments() ⇒ <code>Array</code>
Get segment value

**Kind**: global function  
**Returns**: <code>Array</code> - Dashed line segment distance(s)  
**Read only**: true  
<a name="width"></a>

## width(value)
Set width value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Thickness of stroke |

<a name="width"></a>

## width() ⇒ <code>number</code>
Get width value

**Kind**: global function  
**Returns**: <code>number</code> - Thickness of stroke  
**Read only**: true  
<a name="master"></a>

## master()
Set master object

**Kind**: global function  
**Access**: public  
<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#discrete.point)  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#discrete.pointX)  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#discrete.pointY)  
<a name="radius"></a>

## radius(value)
Set radius value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Radius of circle |

<a name="radius"></a>

## radius() ⇒ <code>number</code>
Get radius value

**Kind**: global function  
**Returns**: <code>number</code> - Radius of circle  
**Read only**: true  
<a name="angle"></a>

## angle() ⇒ [<code>Angle</code>](#Angle)
Get angle properties

**Kind**: global function  
**Returns**: [<code>Angle</code>](#Angle) - Angle properties  
**Access**: public  
<a name="stroke"></a>

## stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: global function  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="fill"></a>

## fill() ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: global function  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
**Access**: public  
<a name="shadow"></a>

## shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: global function  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#discrete.canvas)  
<a name="anchor"></a>

## anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: global function  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="options"></a>

## options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: global function  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="area"></a>

## area() ⇒ <code>number</code>
Get area of this object

**Kind**: global function  
**Returns**: <code>number</code> - Area of circle  
**Read only**: true  
<a name="diameter"></a>

## diameter() ⇒ <code>number</code>
Get diameter of circle

**Kind**: global function  
**Returns**: <code>number</code> - Diameter of circle  
**Read only**: true  
<a name="center"></a>

## center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Point coordinates  
**Read only**: true  
<a name="circumference"></a>

## circumference() ⇒ <code>number</code>
Get circumference of circle

**Kind**: global function  
**Returns**: <code>number</code> - Circumference of circle  
**Read only**: true  
<a name="isThere"></a>

## isThere(circle) ⇒ <code>boolean</code>
Check whether the passed object is already present

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| circle | [<code>Circle</code>](#Circle) | Object to validate |

<a name="fillColorCycle"></a>

## fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.fill](Utilities.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="gradientColorCycle"></a>

## gradientColorCycle(progress, start, end, stop, [max])
Cycle colors for gradient

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.gradient](Utilities.color.cycle.gradient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="move"></a>

## move(degree, distance, [clear])
Move this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="rotate"></a>

## rotate(degree, [clear])
Rotate this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="showCordinates"></a>

## showCordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="strokeColorCycle"></a>

## strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.stroke](Utilities.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="draw"></a>

## draw(canvas)
Draw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="redraw"></a>

## redraw(canvas, point, [clear])
Redraw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canvas | <code>string</code> |  | Canvas Id |
| point | [<code>Point</code>](#Point) |  | Point of new location |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each redraw |

<a name="start"></a>

## start(value)
Set starting point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Starting point |

<a name="start"></a>

## start() ⇒ [<code>Point</code>](#Point)
Set starting point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Starting point  
**Access**: public  
<a name="end"></a>

## end(value)
Set ending point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Ending point |

<a name="end"></a>

## end() ⇒ [<code>Point</code>](#Point)
Set ending point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Ending point  
**Access**: public  
<a name="stroke"></a>

## stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: global function  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="shadow"></a>

## shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: global function  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="lineCap"></a>

## lineCap(value)
Set line cap

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Line cap |

<a name="lineCap"></a>

## lineCap() ⇒ <code>string</code>
Get line cap

**Kind**: global function  
**Returns**: <code>string</code> - Line cap  
**Read only**: true  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#discrete.canvas)  
<a name="options"></a>

## options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: global function  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="controlPoints"></a>

## controlPoints() ⇒ [<code>ControlPoints</code>](#ControlPoints)
Get control point properties

**Kind**: global function  
**Returns**: [<code>ControlPoints</code>](#ControlPoints) - Control points properties  
**Access**: public  
<a name="center"></a>

## center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="+_setPath"></a>

## #\_setPath()
Set line's path

**Kind**: global function  
**Access**: protected  
<a name="isThere"></a>

## isThere(line)
Check whether the passed object is already present

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| line | [<code>Line</code>](#Line) | Object to validate |

<a name="curve"></a>

## curve(p0, p1, p2, p3)
Set control points for bezier curve

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>number</code> | Control point 0 |
| p1 | <code>number</code> | Control point 1 |
| p2 | <code>number</code> | Control point 2 |
| p3 | <code>number</code> | Control point 3 |

<a name="drawPoints"></a>

## drawPoints()
Draws start & end points

**Kind**: global function  
**Access**: public  
<a name="fillColorCycle"></a>

## fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.fill](Utilities.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="move"></a>

## move(degree, distance, [clear])
Move this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="rotate"></a>

## rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="showControlPoints"></a>

## showControlPoints([offset], [fontSize])
Show control points for this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of control points y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Control points font size |

<a name="showCoordinates"></a>

## showCoordinates([offset], [fontSize])
Shows coordinates of this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of coordinates y origin |
| [fontSize] | <code>number</code> | <code>16</code> | Coordinates font size |

<a name="strokeColorCycle"></a>

## strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.stroke](Utilities.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="draw"></a>

## draw(canvas)
Draw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="redraw"></a>

## redraw(canvas, start, end, clear)
Redraw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |
| start | [<code>Point</code>](#Point) | Point of new start location |
| end | [<code>Point</code>](#Point) | Point of new end location |
| clear | <code>boolean</code> | Clear canvas during each redraw |

<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#discrete.point)  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#discrete.pointX)  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#discrete.pointY)  
<a name="aspect"></a>

## aspect(value)
Set aspect properties

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Aspect</code>](#Aspect) | Aspect properties |

<a name="aspect"></a>

## aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: global function  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Read only**: true  
<a name="width"></a>

## width(value)
Set aspect width

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Width value |

<a name="width"></a>

## width() ⇒ <code>number</code>
Get aspect with

**Kind**: global function  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="height"></a>

## height(value)
Set aspect height

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Height value |

<a name="height"></a>

## height() ⇒ <code>number</code>
Get aspect height

**Kind**: global function  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
<a name="stroke"></a>

## stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: global function  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="fill"></a>

## fill() ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: global function  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
**Access**: public  
<a name="shadow"></a>

## shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: global function  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#discrete.canvas)  
<a name="anchor"></a>

## anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: global function  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="options"></a>

## options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: global function  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="isThere"></a>

## isThere(rectangle)
Check whether the passed object is already present

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| rectangle | [<code>Rectangle</code>](#Rectangle) | Object to validate |

<a name="fillColorCycle"></a>

## fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.fill](Utilities.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="gradientColorCycle"></a>

## gradientColorCycle(progress, start, end, stop, [max])
Cycle colors for gradient

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.gradient](Utilities.color.cycle.gradient)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| stop | <code>number</code> |  | Gradient color stop |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="move"></a>

## move(degree, distance, [clear])
Move this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="rotate"></a>

## rotate(degree, [clear])
Rotate this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="strokeColorCycle"></a>

## strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.stroke](Utilities.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="area"></a>

## area() ⇒ <code>number</code>
Get area of this object

**Kind**: global function  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
<a name="center"></a>

## center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="perimeter"></a>

## perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: global function  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
<a name="draw"></a>

## draw(canvas)
Draw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#discrete.point)  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#discrete.pointX)  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#discrete.pointY)  
<a name="text"></a>

## text(value)
Set text

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Text of object |

<a name="text"></a>

## text() ⇒ <code>string</code>
Get text

**Kind**: global function  
**Returns**: <code>string</code> - Text of object  
**Read only**: true  
<a name="stroke"></a>

## stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: global function  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="fill"></a>

## fill() ⇒ [<code>Fill</code>](#Fill)
Get fill properties

**Kind**: global function  
**Returns**: [<code>Fill</code>](#Fill) - Fill properties  
**Access**: public  
<a name="shadow"></a>

## shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: global function  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#discrete.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#discrete.canvas)  
<a name="options"></a>

## options() ⇒ [<code>Options</code>](#Options)
Get options properties

**Kind**: global function  
**Returns**: [<code>Options</code>](#Options) - Options properties  
**Access**: public  
<a name="+_drawOptions"></a>

## #\_drawOptions()
Draws associated options

**Kind**: global function  
**Access**: protected  
<a name="type"></a>

## type(value)
Set font's type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Font's type |

<a name="type"></a>

## type() ⇒ <code>string</code>
Get font's type

**Kind**: global function  
**Returns**: <code>string</code> - Font's type  
**Read only**: true  
<a name="size"></a>

## size(value)
Set font's size

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font's size |

<a name="size"></a>

## size() ⇒ <code>number</code>
Get font's size

**Kind**: global function  
**Returns**: <code>number</code> - Font's size  
**Read only**: true  
<a name="weight"></a>

## weight(value)
Set font's weight

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Font's weight |

<a name="weight"></a>

## weight() ⇒ <code>string</code>
Get font's weight

**Kind**: global function  
**Returns**: <code>string</code> - Font's weight  
**Read only**: true  
<a name="maxWidth"></a>

## maxWidth(value)
Set font's max width

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Font's max width |

<a name="maxWidth"></a>

## maxWidth() ⇒ <code>number</code>
Get font's max width

**Kind**: global function  
**Returns**: <code>number</code> - Font's max width  
**Read only**: true  
<a name="offset"></a>

## offset(value)
Set offset

**Kind**: global function  
**Access**: public  
**See**: [offset](#discrete.offset)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | Shadow offset |

<a name="offset"></a>

## offset() ⇒ [<code>Point</code>](#Point)
Get offset

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Shadow offset  
**Read only**: true  
**See**: [offset](#discrete.offset)  
<a name="font"></a>

## font() ⇒ <code>string</code>
Get font

**Kind**: global function  
**Returns**: <code>string</code> - CSS style font property syntax  
**Access**: public  
<a name="drawBorder"></a>

## drawBorder([offset])
Draws border around this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of border's perimeter |

<a name="drawAxis"></a>

## drawAxis([offset])
Draws axis through center of this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>number</code> | <code>10</code> | Offset of axis's edges |

<a name="fillColorCycle"></a>

## fillColorCycle(progress, start, end, [max])
Cycle colors for fill

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.fill](Utilities.color.cycle.fill)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| progress | <code>number</code> |  | Progress time unit between; 0.00 - 1.00 |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="move"></a>

## move(degree, distance, [clear])
Move this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Direction to move; in degrees |
| distance | <code>number</code> |  | Distance to move |
| [clear] | <code>boolean</code> | <code>true</code> | Clear canvas during each movement |

<a name="rotate"></a>

## rotate(degree, [anchor], [clear])
Rotate this object

**Kind**: global function  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| degree | <code>number</code> |  | Distance to rotate; in degrees |
| [anchor] | <code>string</code> | <code>&quot;&#x27;center&#x27;&quot;</code> | Anchoring point during rotation |
| [clear] | <code>number</code> | <code>true</code> | Clear canvas during each rotation |

<a name="strokeColorCycle"></a>

## strokeColorCycle(start, end, progress, [max])
Cycle colors for stroke

**Kind**: global function  
**Access**: public  
**See**: [Utilities.color.cycle.stroke](Utilities.color.cycle.stroke)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Rgb</code>](#Rgb) |  | Starting RGB value |
| end | [<code>Rgb</code>](#Rgb) |  | Ending RGB value |
| progress | <code>number</code> |  | Progress time unit; 0.00 - 1.00 |
| [max] | <code>number</code> | <code>1</code> | Maximum increments |

<a name="draw"></a>

## draw(canvas)
Draw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="point"></a>

## point(point)
Set point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y axis coordinates  
**Access**: public  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set y-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#combined.canvas)  
<a name="pushPop"></a>

## pushPop(object)
Push or pops the passed object

**Kind**: global function  
**Access**: public  
**See**: [Utilities.misc.pushPop](Utilities.misc.pushPop)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Circle, Rectangle, Text |

<a name="draw"></a>

## draw(canvas)
Typical draw function for collections; Circles, Texts

**Kind**: global function  
**Access**: public  
**See**: [UTILITIES.draw.collection.typical](UTILITIES.draw.collection.typical)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#combined.canvas)  
<a name="push"></a>

## push(object)
Pushes an object into this group

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Line(s), Circle(s), Rectangle(S) |

<a name="pop"></a>

## pop(object)
Pops an object out of this group

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Line(s), Circle(s), Rectangle(S) |

<a name="aTypical"></a>

## aTypical(canvas)
A-typical draw function for collections; Lines

**Kind**: global function  
**Access**: public  
**See**: [Utilities.draw.aTypical](Utilities.draw.aTypical)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="typical"></a>

## typical(canvas)
Typical draw function for collections; Circles, Rectangles, Texts

**Kind**: global function  
**Access**: public  
**See**: [Utilities.draw.typical](Utilities.draw.typical)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="draw"></a>

## draw(canvas)
Draw this group

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#discrete.point)  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#discrete.pointX)  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#discrete.pointY)  
<a name="stroke"></a>

## stroke() ⇒ [<code>Stroke</code>](#Stroke)
Get stroke properties

**Kind**: global function  
**Returns**: [<code>Stroke</code>](#Stroke) - Stroke properties  
**Access**: public  
<a name="shadow"></a>

## shadow() ⇒ [<code>Shadow</code>](#Shadow)
Get shadow properties

**Kind**: global function  
**Returns**: [<code>Shadow</code>](#Shadow) - Shadow properties  
**Access**: public  
<a name="options"></a>

## options() ⇒ <code>Object</code>
Get options

**Kind**: global function  
**Returns**: <code>Object</code> - Options object  
**Access**: public  
<a name="lineCap"></a>

## lineCap(value)
Set line cap

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Line cap |

<a name="lineCap"></a>

## lineCap() ⇒ <code>string</code>
Get line cap

**Kind**: global function  
**Returns**: <code>string</code> - Line cap  
**Read only**: true  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#combined.canvas)  
<a name="aspect"></a>

## aspect() ⇒ [<code>Aspect</code>](#Aspect)
Get aspect properties

**Kind**: global function  
**Returns**: [<code>Aspect</code>](#Aspect) - Aspect properties  
**Access**: public  
<a name="width"></a>

## width() ⇒ <code>number</code>
Get aspect with

**Kind**: global function  
**Returns**: <code>number</code> - Width value  
**Read only**: true  
<a name="height"></a>

## height() ⇒ <code>number</code>
Get aspect height

**Kind**: global function  
**Returns**: <code>number</code> - Height value  
**Read only**: true  
<a name="anchor"></a>

## anchor(value)
Set anchor type

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Anchor type |

<a name="anchor"></a>

## anchor() ⇒ [<code>Anchor</code>](#Anchor)
Get anchor

**Kind**: global function  
**Returns**: [<code>Anchor</code>](#Anchor) - Anchor properties  
**Access**: public  
<a name="area"></a>

## area() ⇒ <code>number</code>
Get area of this object

**Kind**: global function  
**Returns**: <code>number</code> - Area of rectangle  
**Read only**: true  
<a name="perimeter"></a>

## perimeter() ⇒ <code>number</code>
Get perimeter of this object

**Kind**: global function  
**Returns**: <code>number</code> - Perimeter of rectangle  
**Read only**: true  
<a name="center"></a>

## center() ⇒ [<code>Point</code>](#Point)
Get center of this object

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - Center point coordinates  
**Read only**: true  
<a name="+_appendProperties"></a>

## #\_appendProperties(line)
Appends property values

**Kind**: global function  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| line | [<code>Line</code>](#Line) | Line object |

<a name="_isAspect"></a>

## \_isAspect(value) ⇒ <code>boolean</code>
Returns whether the passed value is an Aspect

**Kind**: global function  
**Returns**: <code>boolean</code> - True || False  
**Access**: public  
**See**: [Validation.isAspect](Validation.isAspect)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | Aspect or object equivalent |

<a name="push"></a>

## push()
Pushes Line(s) into this collection

**Kind**: global function  
**Access**: public  
<a name="draw"></a>

## draw(canvas)
A-typical draw function for collections; Lines

**Kind**: global function  
**Access**: public  
**See**: [Utilities.draw.collection.aTypical](Utilities.draw.collection.aTypical)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="point"></a>

## point(value)
Set point

**Kind**: global function  
**Access**: public  
**See**: [point](#discrete.point)  

| Param | Type | Description |
| --- | --- | --- |
| value | [<code>Point</code>](#Point) | X & Y coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y coordinates  
**Access**: public  
**See**: [point](#discrete.point)  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointX](#discrete.pointX)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
**See**: [pointX](#discrete.pointX)  
<a name="y"></a>

## y(value)
Set the y-axis value

**Kind**: global function  
**Access**: public  
**See**: [pointY](#discrete.pointY)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
**See**: [pointY](#discrete.pointY)  
<a name="pushPop"></a>

## pushPop(object)
Push or pops the passed object

**Kind**: global function  
**Access**: public  
**See**: [Utilities.misc.pushPop](Utilities.misc.pushPop)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Circle, Rectangle, Text |

<a name="draw"></a>

## draw(canvas)
Draw this object

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="point"></a>

## point(point)
Set point

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#Point) | X & Y axis coordinates |

<a name="point"></a>

## point() ⇒ [<code>Point</code>](#Point)
Get point

**Kind**: global function  
**Returns**: [<code>Point</code>](#Point) - X & Y axis coordinates  
**Access**: public  
<a name="x"></a>

## x(value)
Set x-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | X coordinate value |

<a name="x"></a>

## x() ⇒ <code>number</code>
Get x-axis value

**Kind**: global function  
**Returns**: <code>number</code> - X coordinate value  
**Read only**: true  
<a name="y"></a>

## y(value)
Set y-axis value

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Y coordinate value |

<a name="y"></a>

## y() ⇒ <code>number</code>
Get y-axis value

**Kind**: global function  
**Returns**: <code>number</code> - Y coordinate value  
**Read only**: true  
<a name="canvas"></a>

## canvas(value)
Set canvas value

**Kind**: global function  
**Access**: public  
**See**: [canvas](#combined.canvas)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Canvas id |

<a name="canvas"></a>

## canvas() ⇒ <code>string</code>
Get canvas value

**Kind**: global function  
**Returns**: <code>string</code> - Canvas id  
**Read only**: true  
**See**: [canvas](#combined.canvas)  
<a name="pushPop"></a>

## pushPop(object)
Push or pops the passed object

**Kind**: global function  
**Access**: public  
**See**: [Utilities.misc.pushPop](Utilities.misc.pushPop)  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object; Circle, Rectangle, Text |

<a name="draw"></a>

## draw(canvas)
Typical draw function for collections; Circles, Texts

**Kind**: global function  
**Access**: public  
**See**: [UTILITIES.draw.collection.typical](UTILITIES.draw.collection.typical)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> | Canvas Id |

<a name="timing"></a>

## timing(value)
Set timing

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>function</code> | Timing function |

<a name="timing"></a>

## timing() ⇒ <code>function</code>
Get timing

**Kind**: global function  
**Returns**: <code>function</code> - Timing function  
**Read only**: true  
<a name="draw"></a>

## draw(Draw)
Set draw function

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| Draw | <code>function</code> | function |

<a name="draw"></a>

## draw() ⇒ <code>function</code>
Get draw function

**Kind**: global function  
**Returns**: <code>function</code> - Draw function  
**Read only**: true  
<a name="duration"></a>

## duration(value)
Set duration

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | Duration |

<a name="duration"></a>

## duration() ⇒ <code>number</code>
Get duration

**Kind**: global function  
**Returns**: <code>number</code> - Duration  
**Read only**: true  
<a name="animate"></a>

## animate()
Initiates animation

**Kind**: global function  
**Access**: public  
<a name="canvas"></a>

## canvas(value)
Set canvas element

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Element Id |

<a name="canvas"></a>

## canvas() ⇒ <code>HTMLCanvasElement</code>
Get canvas element

**Kind**: global function  
**Returns**: <code>HTMLCanvasElement</code> - Canvas context  
**Access**: public  
<a name="about"></a>

## about() ⇒ <code>Object</code>
Get application details

**Kind**: global function  
**Returns**: <code>Object</code> - Application details  
**Read only**: true  
<a name="initCanvasLab"></a>

## initCanvasLab([canvas])
Initiates canvasLab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [canvas] | <code>string</code> | Canvas identifier |

