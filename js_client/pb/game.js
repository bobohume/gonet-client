/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.message = (function() {
    
        /**
         * Namespace message.
         * @exports message
         * @namespace
         */
        var message = {};
    
        message.Point3F = (function() {
    
            /**
             * Properties of a Point3F.
             * @memberof message
             * @interface IPoint3F
             * @property {number|null} [X] Point3F X
             * @property {number|null} [Y] Point3F Y
             * @property {number|null} [Z] Point3F Z
             */
    
            /**
             * Constructs a new Point3F.
             * @memberof message
             * @classdesc Represents a Point3F.
             * @implements IPoint3F
             * @constructor
             * @param {message.IPoint3F=} [properties] Properties to set
             */
            function Point3F(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Point3F X.
             * @member {number} X
             * @memberof message.Point3F
             * @instance
             */
            Point3F.prototype.X = 0;
    
            /**
             * Point3F Y.
             * @member {number} Y
             * @memberof message.Point3F
             * @instance
             */
            Point3F.prototype.Y = 0;
    
            /**
             * Point3F Z.
             * @member {number} Z
             * @memberof message.Point3F
             * @instance
             */
            Point3F.prototype.Z = 0;
    
            /**
             * Creates a new Point3F instance using the specified properties.
             * @function create
             * @memberof message.Point3F
             * @static
             * @param {message.IPoint3F=} [properties] Properties to set
             * @returns {message.Point3F} Point3F instance
             */
            Point3F.create = function create(properties) {
                return new Point3F(properties);
            };
    
            /**
             * Encodes the specified Point3F message. Does not implicitly {@link message.Point3F.verify|verify} messages.
             * @function encode
             * @memberof message.Point3F
             * @static
             * @param {message.IPoint3F} message Point3F message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Point3F.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.X != null && message.hasOwnProperty("X"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.X);
                if (message.Y != null && message.hasOwnProperty("Y"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.Y);
                if (message.Z != null && message.hasOwnProperty("Z"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.Z);
                return writer;
            };
    
            /**
             * Encodes the specified Point3F message, length delimited. Does not implicitly {@link message.Point3F.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Point3F
             * @static
             * @param {message.IPoint3F} message Point3F message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Point3F.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Point3F message from the specified reader or buffer.
             * @function decode
             * @memberof message.Point3F
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Point3F} Point3F
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Point3F.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Point3F();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.X = reader.float();
                        break;
                    case 2:
                        message.Y = reader.float();
                        break;
                    case 3:
                        message.Z = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Point3F message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Point3F
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Point3F} Point3F
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Point3F.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Point3F message.
             * @function verify
             * @memberof message.Point3F
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Point3F.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.X != null && message.hasOwnProperty("X"))
                    if (typeof message.X !== "number")
                        return "X: number expected";
                if (message.Y != null && message.hasOwnProperty("Y"))
                    if (typeof message.Y !== "number")
                        return "Y: number expected";
                if (message.Z != null && message.hasOwnProperty("Z"))
                    if (typeof message.Z !== "number")
                        return "Z: number expected";
                return null;
            };
    
            /**
             * Creates a Point3F message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Point3F
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Point3F} Point3F
             */
            Point3F.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Point3F)
                    return object;
                var message = new $root.message.Point3F();
                if (object.X != null)
                    message.X = Number(object.X);
                if (object.Y != null)
                    message.Y = Number(object.Y);
                if (object.Z != null)
                    message.Z = Number(object.Z);
                return message;
            };
    
            /**
             * Creates a plain object from a Point3F message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Point3F
             * @static
             * @param {message.Point3F} message Point3F
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Point3F.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.X = 0;
                    object.Y = 0;
                    object.Z = 0;
                }
                if (message.X != null && message.hasOwnProperty("X"))
                    object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
                if (message.Y != null && message.hasOwnProperty("Y"))
                    object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
                if (message.Z != null && message.hasOwnProperty("Z"))
                    object.Z = options.json && !isFinite(message.Z) ? String(message.Z) : message.Z;
                return object;
            };
    
            /**
             * Converts this Point3F to JSON.
             * @function toJSON
             * @memberof message.Point3F
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Point3F.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Point3F;
        })();
    
        message.C_W_Move = (function() {
    
            /**
             * Properties of a C_W_Move.
             * @memberof message
             * @interface IC_W_Move
             * @property {message.IIpacket|null} [PacketHead] C_W_Move PacketHead
             * @property {message.C_W_Move.IMove|null} [move] C_W_Move move
             */
    
            /**
             * Constructs a new C_W_Move.
             * @memberof message
             * @classdesc Represents a C_W_Move.
             * @implements IC_W_Move
             * @constructor
             * @param {message.IC_W_Move=} [properties] Properties to set
             */
            function C_W_Move(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_W_Move PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_W_Move
             * @instance
             */
            C_W_Move.prototype.PacketHead = null;
    
            /**
             * C_W_Move move.
             * @member {message.C_W_Move.IMove|null|undefined} move
             * @memberof message.C_W_Move
             * @instance
             */
            C_W_Move.prototype.move = null;
    
            /**
             * Creates a new C_W_Move instance using the specified properties.
             * @function create
             * @memberof message.C_W_Move
             * @static
             * @param {message.IC_W_Move=} [properties] Properties to set
             * @returns {message.C_W_Move} C_W_Move instance
             */
            C_W_Move.create = function create(properties) {
                return new C_W_Move(properties);
            };
    
            /**
             * Encodes the specified C_W_Move message. Does not implicitly {@link message.C_W_Move.verify|verify} messages.
             * @function encode
             * @memberof message.C_W_Move
             * @static
             * @param {message.IC_W_Move} message C_W_Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_Move.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.move != null && message.hasOwnProperty("move"))
                    $root.message.C_W_Move.Move.encode(message.move, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified C_W_Move message, length delimited. Does not implicitly {@link message.C_W_Move.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_W_Move
             * @static
             * @param {message.IC_W_Move} message C_W_Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_Move.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_W_Move message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_W_Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_W_Move} C_W_Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_Move.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.move = $root.message.C_W_Move.Move.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_W_Move message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_W_Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_W_Move} C_W_Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_Move.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_W_Move message.
             * @function verify
             * @memberof message.C_W_Move
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_W_Move.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.move != null && message.hasOwnProperty("move")) {
                    var error = $root.message.C_W_Move.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
                return null;
            };
    
            /**
             * Creates a C_W_Move message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_W_Move
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_W_Move} C_W_Move
             */
            C_W_Move.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_W_Move)
                    return object;
                var message = new $root.message.C_W_Move();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_W_Move.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.move != null) {
                    if (typeof object.move !== "object")
                        throw TypeError(".message.C_W_Move.move: object expected");
                    message.move = $root.message.C_W_Move.Move.fromObject(object.move);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a C_W_Move message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_W_Move
             * @static
             * @param {message.C_W_Move} message C_W_Move
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_W_Move.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.move = null;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.move != null && message.hasOwnProperty("move"))
                    object.move = $root.message.C_W_Move.Move.toObject(message.move, options);
                return object;
            };
    
            /**
             * Converts this C_W_Move to JSON.
             * @function toJSON
             * @memberof message.C_W_Move
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_W_Move.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            C_W_Move.Move = (function() {
    
                /**
                 * Properties of a Move.
                 * @memberof message.C_W_Move
                 * @interface IMove
                 * @property {number|null} [Mode] Move Mode
                 * @property {message.C_W_Move.Move.INormal|null} [normal] Move normal
                 * @property {message.C_W_Move.Move.IPath|null} [path] Move path
                 * @property {message.C_W_Move.Move.IBlink|null} [link] Move link
                 * @property {message.C_W_Move.Move.IJump|null} [jump] Move jump
                 * @property {message.C_W_Move.Move.ILine|null} [line] Move line
                 */
    
                /**
                 * Constructs a new Move.
                 * @memberof message.C_W_Move
                 * @classdesc Represents a Move.
                 * @implements IMove
                 * @constructor
                 * @param {message.C_W_Move.IMove=} [properties] Properties to set
                 */
                function Move(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Move Mode.
                 * @member {number} Mode
                 * @memberof message.C_W_Move.Move
                 * @instance
                 */
                Move.prototype.Mode = 0;
    
                /**
                 * Move normal.
                 * @member {message.C_W_Move.Move.INormal|null|undefined} normal
                 * @memberof message.C_W_Move.Move
                 * @instance
                 */
                Move.prototype.normal = null;
    
                /**
                 * Move path.
                 * @member {message.C_W_Move.Move.IPath|null|undefined} path
                 * @memberof message.C_W_Move.Move
                 * @instance
                 */
                Move.prototype.path = null;
    
                /**
                 * Move link.
                 * @member {message.C_W_Move.Move.IBlink|null|undefined} link
                 * @memberof message.C_W_Move.Move
                 * @instance
                 */
                Move.prototype.link = null;
    
                /**
                 * Move jump.
                 * @member {message.C_W_Move.Move.IJump|null|undefined} jump
                 * @memberof message.C_W_Move.Move
                 * @instance
                 */
                Move.prototype.jump = null;
    
                /**
                 * Move line.
                 * @member {message.C_W_Move.Move.ILine|null|undefined} line
                 * @memberof message.C_W_Move.Move
                 * @instance
                 */
                Move.prototype.line = null;
    
                /**
                 * Creates a new Move instance using the specified properties.
                 * @function create
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {message.C_W_Move.IMove=} [properties] Properties to set
                 * @returns {message.C_W_Move.Move} Move instance
                 */
                Move.create = function create(properties) {
                    return new Move(properties);
                };
    
                /**
                 * Encodes the specified Move message. Does not implicitly {@link message.C_W_Move.Move.verify|verify} messages.
                 * @function encode
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {message.C_W_Move.IMove} message Move message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Move.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Mode);
                    if (message.normal != null && message.hasOwnProperty("normal"))
                        $root.message.C_W_Move.Move.Normal.encode(message.normal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.path != null && message.hasOwnProperty("path"))
                        $root.message.C_W_Move.Move.Path.encode(message.path, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.link != null && message.hasOwnProperty("link"))
                        $root.message.C_W_Move.Move.Blink.encode(message.link, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.jump != null && message.hasOwnProperty("jump"))
                        $root.message.C_W_Move.Move.Jump.encode(message.jump, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.line != null && message.hasOwnProperty("line"))
                        $root.message.C_W_Move.Move.Line.encode(message.line, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Move message, length delimited. Does not implicitly {@link message.C_W_Move.Move.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {message.C_W_Move.IMove} message Move message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Move.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Move message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {message.C_W_Move.Move} Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Move.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move.Move();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Mode = reader.int32();
                            break;
                        case 2:
                            message.normal = $root.message.C_W_Move.Move.Normal.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.path = $root.message.C_W_Move.Move.Path.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.link = $root.message.C_W_Move.Move.Blink.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.jump = $root.message.C_W_Move.Move.Jump.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.line = $root.message.C_W_Move.Move.Line.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Move message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {message.C_W_Move.Move} Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Move.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Move message.
                 * @function verify
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Move.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        if (!$util.isInteger(message.Mode))
                            return "Mode: integer expected";
                    if (message.normal != null && message.hasOwnProperty("normal")) {
                        var error = $root.message.C_W_Move.Move.Normal.verify(message.normal);
                        if (error)
                            return "normal." + error;
                    }
                    if (message.path != null && message.hasOwnProperty("path")) {
                        var error = $root.message.C_W_Move.Move.Path.verify(message.path);
                        if (error)
                            return "path." + error;
                    }
                    if (message.link != null && message.hasOwnProperty("link")) {
                        var error = $root.message.C_W_Move.Move.Blink.verify(message.link);
                        if (error)
                            return "link." + error;
                    }
                    if (message.jump != null && message.hasOwnProperty("jump")) {
                        var error = $root.message.C_W_Move.Move.Jump.verify(message.jump);
                        if (error)
                            return "jump." + error;
                    }
                    if (message.line != null && message.hasOwnProperty("line")) {
                        var error = $root.message.C_W_Move.Move.Line.verify(message.line);
                        if (error)
                            return "line." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a Move message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {message.C_W_Move.Move} Move
                 */
                Move.fromObject = function fromObject(object) {
                    if (object instanceof $root.message.C_W_Move.Move)
                        return object;
                    var message = new $root.message.C_W_Move.Move();
                    if (object.Mode != null)
                        message.Mode = object.Mode | 0;
                    if (object.normal != null) {
                        if (typeof object.normal !== "object")
                            throw TypeError(".message.C_W_Move.Move.normal: object expected");
                        message.normal = $root.message.C_W_Move.Move.Normal.fromObject(object.normal);
                    }
                    if (object.path != null) {
                        if (typeof object.path !== "object")
                            throw TypeError(".message.C_W_Move.Move.path: object expected");
                        message.path = $root.message.C_W_Move.Move.Path.fromObject(object.path);
                    }
                    if (object.link != null) {
                        if (typeof object.link !== "object")
                            throw TypeError(".message.C_W_Move.Move.link: object expected");
                        message.link = $root.message.C_W_Move.Move.Blink.fromObject(object.link);
                    }
                    if (object.jump != null) {
                        if (typeof object.jump !== "object")
                            throw TypeError(".message.C_W_Move.Move.jump: object expected");
                        message.jump = $root.message.C_W_Move.Move.Jump.fromObject(object.jump);
                    }
                    if (object.line != null) {
                        if (typeof object.line !== "object")
                            throw TypeError(".message.C_W_Move.Move.line: object expected");
                        message.line = $root.message.C_W_Move.Move.Line.fromObject(object.line);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Move message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.C_W_Move.Move
                 * @static
                 * @param {message.C_W_Move.Move} message Move
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Move.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.Mode = 0;
                        object.normal = null;
                        object.path = null;
                        object.link = null;
                        object.jump = null;
                        object.line = null;
                    }
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        object.Mode = message.Mode;
                    if (message.normal != null && message.hasOwnProperty("normal"))
                        object.normal = $root.message.C_W_Move.Move.Normal.toObject(message.normal, options);
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = $root.message.C_W_Move.Move.Path.toObject(message.path, options);
                    if (message.link != null && message.hasOwnProperty("link"))
                        object.link = $root.message.C_W_Move.Move.Blink.toObject(message.link, options);
                    if (message.jump != null && message.hasOwnProperty("jump"))
                        object.jump = $root.message.C_W_Move.Move.Jump.toObject(message.jump, options);
                    if (message.line != null && message.hasOwnProperty("line"))
                        object.line = $root.message.C_W_Move.Move.Line.toObject(message.line, options);
                    return object;
                };
    
                /**
                 * Converts this Move to JSON.
                 * @function toJSON
                 * @memberof message.C_W_Move.Move
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Move.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Move.Normal = (function() {
    
                    /**
                     * Properties of a Normal.
                     * @memberof message.C_W_Move.Move
                     * @interface INormal
                     * @property {message.IPoint3F|null} [Pos] Normal Pos
                     * @property {number|null} [Yaw] Normal Yaw
                     * @property {number|null} [Duration] Normal Duration
                     */
    
                    /**
                     * Constructs a new Normal.
                     * @memberof message.C_W_Move.Move
                     * @classdesc Represents a Normal.
                     * @implements INormal
                     * @constructor
                     * @param {message.C_W_Move.Move.INormal=} [properties] Properties to set
                     */
                    function Normal(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Normal Pos.
                     * @member {message.IPoint3F|null|undefined} Pos
                     * @memberof message.C_W_Move.Move.Normal
                     * @instance
                     */
                    Normal.prototype.Pos = null;
    
                    /**
                     * Normal Yaw.
                     * @member {number} Yaw
                     * @memberof message.C_W_Move.Move.Normal
                     * @instance
                     */
                    Normal.prototype.Yaw = 0;
    
                    /**
                     * Normal Duration.
                     * @member {number} Duration
                     * @memberof message.C_W_Move.Move.Normal
                     * @instance
                     */
                    Normal.prototype.Duration = 0;
    
                    /**
                     * Creates a new Normal instance using the specified properties.
                     * @function create
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {message.C_W_Move.Move.INormal=} [properties] Properties to set
                     * @returns {message.C_W_Move.Move.Normal} Normal instance
                     */
                    Normal.create = function create(properties) {
                        return new Normal(properties);
                    };
    
                    /**
                     * Encodes the specified Normal message. Does not implicitly {@link message.C_W_Move.Move.Normal.verify|verify} messages.
                     * @function encode
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {message.C_W_Move.Move.INormal} message Normal message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Normal.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.Yaw != null && message.hasOwnProperty("Yaw"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Yaw);
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            writer.uint32(/* id 3, wireType 5 =*/29).float(message.Duration);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Normal message, length delimited. Does not implicitly {@link message.C_W_Move.Move.Normal.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {message.C_W_Move.Move.INormal} message Normal message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Normal.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Normal message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.C_W_Move.Move.Normal} Normal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Normal.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move.Move.Normal();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.Yaw = reader.float();
                                break;
                            case 3:
                                message.Duration = reader.float();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Normal message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.C_W_Move.Move.Normal} Normal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Normal.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Normal message.
                     * @function verify
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Normal.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Pos != null && message.hasOwnProperty("Pos")) {
                            var error = $root.message.Point3F.verify(message.Pos);
                            if (error)
                                return "Pos." + error;
                        }
                        if (message.Yaw != null && message.hasOwnProperty("Yaw"))
                            if (typeof message.Yaw !== "number")
                                return "Yaw: number expected";
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            if (typeof message.Duration !== "number")
                                return "Duration: number expected";
                        return null;
                    };
    
                    /**
                     * Creates a Normal message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.C_W_Move.Move.Normal} Normal
                     */
                    Normal.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.C_W_Move.Move.Normal)
                            return object;
                        var message = new $root.message.C_W_Move.Move.Normal();
                        if (object.Pos != null) {
                            if (typeof object.Pos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Normal.Pos: object expected");
                            message.Pos = $root.message.Point3F.fromObject(object.Pos);
                        }
                        if (object.Yaw != null)
                            message.Yaw = Number(object.Yaw);
                        if (object.Duration != null)
                            message.Duration = Number(object.Duration);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Normal message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.C_W_Move.Move.Normal
                     * @static
                     * @param {message.C_W_Move.Move.Normal} message Normal
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Normal.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.Pos = null;
                            object.Yaw = 0;
                            object.Duration = 0;
                        }
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                        if (message.Yaw != null && message.hasOwnProperty("Yaw"))
                            object.Yaw = options.json && !isFinite(message.Yaw) ? String(message.Yaw) : message.Yaw;
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            object.Duration = options.json && !isFinite(message.Duration) ? String(message.Duration) : message.Duration;
                        return object;
                    };
    
                    /**
                     * Converts this Normal to JSON.
                     * @function toJSON
                     * @memberof message.C_W_Move.Move.Normal
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Normal.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Normal;
                })();
    
                Move.Path = (function() {
    
                    /**
                     * Properties of a Path.
                     * @memberof message.C_W_Move.Move
                     * @interface IPath
                     * @property {number|null} [PathId] Path PathId
                     * @property {number|null} [TimePos] Path TimePos
                     * @property {number|null} [MountId] Path MountId
                     */
    
                    /**
                     * Constructs a new Path.
                     * @memberof message.C_W_Move.Move
                     * @classdesc Represents a Path.
                     * @implements IPath
                     * @constructor
                     * @param {message.C_W_Move.Move.IPath=} [properties] Properties to set
                     */
                    function Path(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Path PathId.
                     * @member {number} PathId
                     * @memberof message.C_W_Move.Move.Path
                     * @instance
                     */
                    Path.prototype.PathId = 0;
    
                    /**
                     * Path TimePos.
                     * @member {number} TimePos
                     * @memberof message.C_W_Move.Move.Path
                     * @instance
                     */
                    Path.prototype.TimePos = 0;
    
                    /**
                     * Path MountId.
                     * @member {number} MountId
                     * @memberof message.C_W_Move.Move.Path
                     * @instance
                     */
                    Path.prototype.MountId = 0;
    
                    /**
                     * Creates a new Path instance using the specified properties.
                     * @function create
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {message.C_W_Move.Move.IPath=} [properties] Properties to set
                     * @returns {message.C_W_Move.Move.Path} Path instance
                     */
                    Path.create = function create(properties) {
                        return new Path(properties);
                    };
    
                    /**
                     * Encodes the specified Path message. Does not implicitly {@link message.C_W_Move.Move.Path.verify|verify} messages.
                     * @function encode
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {message.C_W_Move.Move.IPath} message Path message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Path.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.PathId != null && message.hasOwnProperty("PathId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PathId);
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TimePos);
                        if (message.MountId != null && message.hasOwnProperty("MountId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.MountId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Path message, length delimited. Does not implicitly {@link message.C_W_Move.Move.Path.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {message.C_W_Move.Move.IPath} message Path message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Path.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Path message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.C_W_Move.Move.Path} Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Path.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move.Move.Path();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.PathId = reader.int32();
                                break;
                            case 2:
                                message.TimePos = reader.int32();
                                break;
                            case 3:
                                message.MountId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Path message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.C_W_Move.Move.Path} Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Path.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Path message.
                     * @function verify
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Path.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.PathId != null && message.hasOwnProperty("PathId"))
                            if (!$util.isInteger(message.PathId))
                                return "PathId: integer expected";
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            if (!$util.isInteger(message.TimePos))
                                return "TimePos: integer expected";
                        if (message.MountId != null && message.hasOwnProperty("MountId"))
                            if (!$util.isInteger(message.MountId))
                                return "MountId: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a Path message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.C_W_Move.Move.Path} Path
                     */
                    Path.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.C_W_Move.Move.Path)
                            return object;
                        var message = new $root.message.C_W_Move.Move.Path();
                        if (object.PathId != null)
                            message.PathId = object.PathId | 0;
                        if (object.TimePos != null)
                            message.TimePos = object.TimePos | 0;
                        if (object.MountId != null)
                            message.MountId = object.MountId | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Path message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.C_W_Move.Move.Path
                     * @static
                     * @param {message.C_W_Move.Move.Path} message Path
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Path.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.PathId = 0;
                            object.TimePos = 0;
                            object.MountId = 0;
                        }
                        if (message.PathId != null && message.hasOwnProperty("PathId"))
                            object.PathId = message.PathId;
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            object.TimePos = message.TimePos;
                        if (message.MountId != null && message.hasOwnProperty("MountId"))
                            object.MountId = message.MountId;
                        return object;
                    };
    
                    /**
                     * Converts this Path to JSON.
                     * @function toJSON
                     * @memberof message.C_W_Move.Move.Path
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Path.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Path;
                })();
    
                Move.Blink = (function() {
    
                    /**
                     * Properties of a Blink.
                     * @memberof message.C_W_Move.Move
                     * @interface IBlink
                     * @property {message.IPoint3F|null} [Pos] Blink Pos
                     * @property {message.IPoint3F|null} [RPos] Blink RPos
                     */
    
                    /**
                     * Constructs a new Blink.
                     * @memberof message.C_W_Move.Move
                     * @classdesc Represents a Blink.
                     * @implements IBlink
                     * @constructor
                     * @param {message.C_W_Move.Move.IBlink=} [properties] Properties to set
                     */
                    function Blink(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Blink Pos.
                     * @member {message.IPoint3F|null|undefined} Pos
                     * @memberof message.C_W_Move.Move.Blink
                     * @instance
                     */
                    Blink.prototype.Pos = null;
    
                    /**
                     * Blink RPos.
                     * @member {message.IPoint3F|null|undefined} RPos
                     * @memberof message.C_W_Move.Move.Blink
                     * @instance
                     */
                    Blink.prototype.RPos = null;
    
                    /**
                     * Creates a new Blink instance using the specified properties.
                     * @function create
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {message.C_W_Move.Move.IBlink=} [properties] Properties to set
                     * @returns {message.C_W_Move.Move.Blink} Blink instance
                     */
                    Blink.create = function create(properties) {
                        return new Blink(properties);
                    };
    
                    /**
                     * Encodes the specified Blink message. Does not implicitly {@link message.C_W_Move.Move.Blink.verify|verify} messages.
                     * @function encode
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {message.C_W_Move.Move.IBlink} message Blink message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Blink.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.RPos != null && message.hasOwnProperty("RPos"))
                            $root.message.Point3F.encode(message.RPos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Blink message, length delimited. Does not implicitly {@link message.C_W_Move.Move.Blink.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {message.C_W_Move.Move.IBlink} message Blink message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Blink.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Blink message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.C_W_Move.Move.Blink} Blink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Blink.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move.Move.Blink();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.RPos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Blink message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.C_W_Move.Move.Blink} Blink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Blink.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Blink message.
                     * @function verify
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Blink.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Pos != null && message.hasOwnProperty("Pos")) {
                            var error = $root.message.Point3F.verify(message.Pos);
                            if (error)
                                return "Pos." + error;
                        }
                        if (message.RPos != null && message.hasOwnProperty("RPos")) {
                            var error = $root.message.Point3F.verify(message.RPos);
                            if (error)
                                return "RPos." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Blink message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.C_W_Move.Move.Blink} Blink
                     */
                    Blink.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.C_W_Move.Move.Blink)
                            return object;
                        var message = new $root.message.C_W_Move.Move.Blink();
                        if (object.Pos != null) {
                            if (typeof object.Pos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Blink.Pos: object expected");
                            message.Pos = $root.message.Point3F.fromObject(object.Pos);
                        }
                        if (object.RPos != null) {
                            if (typeof object.RPos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Blink.RPos: object expected");
                            message.RPos = $root.message.Point3F.fromObject(object.RPos);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Blink message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.C_W_Move.Move.Blink
                     * @static
                     * @param {message.C_W_Move.Move.Blink} message Blink
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Blink.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.Pos = null;
                            object.RPos = null;
                        }
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                        if (message.RPos != null && message.hasOwnProperty("RPos"))
                            object.RPos = $root.message.Point3F.toObject(message.RPos, options);
                        return object;
                    };
    
                    /**
                     * Converts this Blink to JSON.
                     * @function toJSON
                     * @memberof message.C_W_Move.Move.Blink
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Blink.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Blink;
                })();
    
                Move.Jump = (function() {
    
                    /**
                     * Properties of a Jump.
                     * @memberof message.C_W_Move.Move
                     * @interface IJump
                     * @property {message.IPoint3F|null} [BPos] Jump BPos
                     * @property {message.IPoint3F|null} [EPos] Jump EPos
                     * @property {number|null} [Duration] Jump Duration
                     * @property {number|null} [TimePos] Jump TimePos
                     * @property {number|null} [UpExDur] Jump UpExDur
                     * @property {number|null} [DownExDur] Jump DownExDur
                     * @property {number|null} [A] Jump A
                     * @property {number|null} [B] Jump B
                     */
    
                    /**
                     * Constructs a new Jump.
                     * @memberof message.C_W_Move.Move
                     * @classdesc Represents a Jump.
                     * @implements IJump
                     * @constructor
                     * @param {message.C_W_Move.Move.IJump=} [properties] Properties to set
                     */
                    function Jump(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Jump BPos.
                     * @member {message.IPoint3F|null|undefined} BPos
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.BPos = null;
    
                    /**
                     * Jump EPos.
                     * @member {message.IPoint3F|null|undefined} EPos
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.EPos = null;
    
                    /**
                     * Jump Duration.
                     * @member {number} Duration
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.Duration = 0;
    
                    /**
                     * Jump TimePos.
                     * @member {number} TimePos
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.TimePos = 0;
    
                    /**
                     * Jump UpExDur.
                     * @member {number} UpExDur
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.UpExDur = 0;
    
                    /**
                     * Jump DownExDur.
                     * @member {number} DownExDur
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.DownExDur = 0;
    
                    /**
                     * Jump A.
                     * @member {number} A
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.A = 0;
    
                    /**
                     * Jump B.
                     * @member {number} B
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     */
                    Jump.prototype.B = 0;
    
                    /**
                     * Creates a new Jump instance using the specified properties.
                     * @function create
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {message.C_W_Move.Move.IJump=} [properties] Properties to set
                     * @returns {message.C_W_Move.Move.Jump} Jump instance
                     */
                    Jump.create = function create(properties) {
                        return new Jump(properties);
                    };
    
                    /**
                     * Encodes the specified Jump message. Does not implicitly {@link message.C_W_Move.Move.Jump.verify|verify} messages.
                     * @function encode
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {message.C_W_Move.Move.IJump} message Jump message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Jump.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.BPos != null && message.hasOwnProperty("BPos"))
                            $root.message.Point3F.encode(message.BPos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.EPos != null && message.hasOwnProperty("EPos"))
                            $root.message.Point3F.encode(message.EPos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Duration);
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TimePos);
                        if (message.UpExDur != null && message.hasOwnProperty("UpExDur"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.UpExDur);
                        if (message.DownExDur != null && message.hasOwnProperty("DownExDur"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.DownExDur);
                        if (message.A != null && message.hasOwnProperty("A"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.A);
                        if (message.B != null && message.hasOwnProperty("B"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.B);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Jump message, length delimited. Does not implicitly {@link message.C_W_Move.Move.Jump.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {message.C_W_Move.Move.IJump} message Jump message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Jump.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Jump message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.C_W_Move.Move.Jump} Jump
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Jump.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move.Move.Jump();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.BPos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.EPos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.Duration = reader.int32();
                                break;
                            case 4:
                                message.TimePos = reader.int32();
                                break;
                            case 5:
                                message.UpExDur = reader.int32();
                                break;
                            case 6:
                                message.DownExDur = reader.int32();
                                break;
                            case 7:
                                message.A = reader.int32();
                                break;
                            case 8:
                                message.B = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Jump message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.C_W_Move.Move.Jump} Jump
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Jump.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Jump message.
                     * @function verify
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Jump.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.BPos != null && message.hasOwnProperty("BPos")) {
                            var error = $root.message.Point3F.verify(message.BPos);
                            if (error)
                                return "BPos." + error;
                        }
                        if (message.EPos != null && message.hasOwnProperty("EPos")) {
                            var error = $root.message.Point3F.verify(message.EPos);
                            if (error)
                                return "EPos." + error;
                        }
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            if (!$util.isInteger(message.Duration))
                                return "Duration: integer expected";
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            if (!$util.isInteger(message.TimePos))
                                return "TimePos: integer expected";
                        if (message.UpExDur != null && message.hasOwnProperty("UpExDur"))
                            if (!$util.isInteger(message.UpExDur))
                                return "UpExDur: integer expected";
                        if (message.DownExDur != null && message.hasOwnProperty("DownExDur"))
                            if (!$util.isInteger(message.DownExDur))
                                return "DownExDur: integer expected";
                        if (message.A != null && message.hasOwnProperty("A"))
                            if (!$util.isInteger(message.A))
                                return "A: integer expected";
                        if (message.B != null && message.hasOwnProperty("B"))
                            if (!$util.isInteger(message.B))
                                return "B: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a Jump message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.C_W_Move.Move.Jump} Jump
                     */
                    Jump.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.C_W_Move.Move.Jump)
                            return object;
                        var message = new $root.message.C_W_Move.Move.Jump();
                        if (object.BPos != null) {
                            if (typeof object.BPos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Jump.BPos: object expected");
                            message.BPos = $root.message.Point3F.fromObject(object.BPos);
                        }
                        if (object.EPos != null) {
                            if (typeof object.EPos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Jump.EPos: object expected");
                            message.EPos = $root.message.Point3F.fromObject(object.EPos);
                        }
                        if (object.Duration != null)
                            message.Duration = object.Duration | 0;
                        if (object.TimePos != null)
                            message.TimePos = object.TimePos | 0;
                        if (object.UpExDur != null)
                            message.UpExDur = object.UpExDur | 0;
                        if (object.DownExDur != null)
                            message.DownExDur = object.DownExDur | 0;
                        if (object.A != null)
                            message.A = object.A | 0;
                        if (object.B != null)
                            message.B = object.B | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Jump message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.C_W_Move.Move.Jump
                     * @static
                     * @param {message.C_W_Move.Move.Jump} message Jump
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Jump.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.BPos = null;
                            object.EPos = null;
                            object.Duration = 0;
                            object.TimePos = 0;
                            object.UpExDur = 0;
                            object.DownExDur = 0;
                            object.A = 0;
                            object.B = 0;
                        }
                        if (message.BPos != null && message.hasOwnProperty("BPos"))
                            object.BPos = $root.message.Point3F.toObject(message.BPos, options);
                        if (message.EPos != null && message.hasOwnProperty("EPos"))
                            object.EPos = $root.message.Point3F.toObject(message.EPos, options);
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            object.Duration = message.Duration;
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            object.TimePos = message.TimePos;
                        if (message.UpExDur != null && message.hasOwnProperty("UpExDur"))
                            object.UpExDur = message.UpExDur;
                        if (message.DownExDur != null && message.hasOwnProperty("DownExDur"))
                            object.DownExDur = message.DownExDur;
                        if (message.A != null && message.hasOwnProperty("A"))
                            object.A = message.A;
                        if (message.B != null && message.hasOwnProperty("B"))
                            object.B = message.B;
                        return object;
                    };
    
                    /**
                     * Converts this Jump to JSON.
                     * @function toJSON
                     * @memberof message.C_W_Move.Move.Jump
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Jump.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Jump;
                })();
    
                Move.Line = (function() {
    
                    /**
                     * Properties of a Line.
                     * @memberof message.C_W_Move.Move
                     * @interface ILine
                     * @property {message.IPoint3F|null} [BPos] Line BPos
                     * @property {message.IPoint3F|null} [EPos] Line EPos
                     * @property {number|null} [Duration] Line Duration
                     * @property {number|null} [TimePos] Line TimePos
                     */
    
                    /**
                     * Constructs a new Line.
                     * @memberof message.C_W_Move.Move
                     * @classdesc Represents a Line.
                     * @implements ILine
                     * @constructor
                     * @param {message.C_W_Move.Move.ILine=} [properties] Properties to set
                     */
                    function Line(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Line BPos.
                     * @member {message.IPoint3F|null|undefined} BPos
                     * @memberof message.C_W_Move.Move.Line
                     * @instance
                     */
                    Line.prototype.BPos = null;
    
                    /**
                     * Line EPos.
                     * @member {message.IPoint3F|null|undefined} EPos
                     * @memberof message.C_W_Move.Move.Line
                     * @instance
                     */
                    Line.prototype.EPos = null;
    
                    /**
                     * Line Duration.
                     * @member {number} Duration
                     * @memberof message.C_W_Move.Move.Line
                     * @instance
                     */
                    Line.prototype.Duration = 0;
    
                    /**
                     * Line TimePos.
                     * @member {number} TimePos
                     * @memberof message.C_W_Move.Move.Line
                     * @instance
                     */
                    Line.prototype.TimePos = 0;
    
                    /**
                     * Creates a new Line instance using the specified properties.
                     * @function create
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {message.C_W_Move.Move.ILine=} [properties] Properties to set
                     * @returns {message.C_W_Move.Move.Line} Line instance
                     */
                    Line.create = function create(properties) {
                        return new Line(properties);
                    };
    
                    /**
                     * Encodes the specified Line message. Does not implicitly {@link message.C_W_Move.Move.Line.verify|verify} messages.
                     * @function encode
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {message.C_W_Move.Move.ILine} message Line message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Line.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.BPos != null && message.hasOwnProperty("BPos"))
                            $root.message.Point3F.encode(message.BPos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.EPos != null && message.hasOwnProperty("EPos"))
                            $root.message.Point3F.encode(message.EPos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Duration);
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TimePos);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Line message, length delimited. Does not implicitly {@link message.C_W_Move.Move.Line.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {message.C_W_Move.Move.ILine} message Line message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Line.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Line message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.C_W_Move.Move.Line} Line
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Line.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Move.Move.Line();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.BPos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.EPos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.Duration = reader.int32();
                                break;
                            case 4:
                                message.TimePos = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Line message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.C_W_Move.Move.Line} Line
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Line.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Line message.
                     * @function verify
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Line.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.BPos != null && message.hasOwnProperty("BPos")) {
                            var error = $root.message.Point3F.verify(message.BPos);
                            if (error)
                                return "BPos." + error;
                        }
                        if (message.EPos != null && message.hasOwnProperty("EPos")) {
                            var error = $root.message.Point3F.verify(message.EPos);
                            if (error)
                                return "EPos." + error;
                        }
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            if (!$util.isInteger(message.Duration))
                                return "Duration: integer expected";
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            if (!$util.isInteger(message.TimePos))
                                return "TimePos: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a Line message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.C_W_Move.Move.Line} Line
                     */
                    Line.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.C_W_Move.Move.Line)
                            return object;
                        var message = new $root.message.C_W_Move.Move.Line();
                        if (object.BPos != null) {
                            if (typeof object.BPos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Line.BPos: object expected");
                            message.BPos = $root.message.Point3F.fromObject(object.BPos);
                        }
                        if (object.EPos != null) {
                            if (typeof object.EPos !== "object")
                                throw TypeError(".message.C_W_Move.Move.Line.EPos: object expected");
                            message.EPos = $root.message.Point3F.fromObject(object.EPos);
                        }
                        if (object.Duration != null)
                            message.Duration = object.Duration | 0;
                        if (object.TimePos != null)
                            message.TimePos = object.TimePos | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Line message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.C_W_Move.Move.Line
                     * @static
                     * @param {message.C_W_Move.Move.Line} message Line
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Line.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.BPos = null;
                            object.EPos = null;
                            object.Duration = 0;
                            object.TimePos = 0;
                        }
                        if (message.BPos != null && message.hasOwnProperty("BPos"))
                            object.BPos = $root.message.Point3F.toObject(message.BPos, options);
                        if (message.EPos != null && message.hasOwnProperty("EPos"))
                            object.EPos = $root.message.Point3F.toObject(message.EPos, options);
                        if (message.Duration != null && message.hasOwnProperty("Duration"))
                            object.Duration = message.Duration;
                        if (message.TimePos != null && message.hasOwnProperty("TimePos"))
                            object.TimePos = message.TimePos;
                        return object;
                    };
    
                    /**
                     * Converts this Line to JSON.
                     * @function toJSON
                     * @memberof message.C_W_Move.Move.Line
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Line.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Line;
                })();
    
                return Move;
            })();
    
            return C_W_Move;
        })();
    
        message.W_C_LoginMap = (function() {
    
            /**
             * Properties of a W_C_LoginMap.
             * @memberof message
             * @interface IW_C_LoginMap
             * @property {message.IIpacket|null} [PacketHead] W_C_LoginMap PacketHead
             * @property {number|Long|null} [Id] W_C_LoginMap Id
             * @property {message.IPoint3F|null} [Pos] W_C_LoginMap Pos
             * @property {number|null} [Rotation] W_C_LoginMap Rotation
             */
    
            /**
             * Constructs a new W_C_LoginMap.
             * @memberof message
             * @classdesc Represents a W_C_LoginMap.
             * @implements IW_C_LoginMap
             * @constructor
             * @param {message.IW_C_LoginMap=} [properties] Properties to set
             */
            function W_C_LoginMap(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_LoginMap PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_LoginMap
             * @instance
             */
            W_C_LoginMap.prototype.PacketHead = null;
    
            /**
             * W_C_LoginMap Id.
             * @member {number|Long} Id
             * @memberof message.W_C_LoginMap
             * @instance
             */
            W_C_LoginMap.prototype.Id = 0;
    
            /**
             * W_C_LoginMap Pos.
             * @member {message.IPoint3F|null|undefined} Pos
             * @memberof message.W_C_LoginMap
             * @instance
             */
            W_C_LoginMap.prototype.Pos = null;
    
            /**
             * W_C_LoginMap Rotation.
             * @member {number} Rotation
             * @memberof message.W_C_LoginMap
             * @instance
             */
            W_C_LoginMap.prototype.Rotation = 0;
    
            /**
             * Creates a new W_C_LoginMap instance using the specified properties.
             * @function create
             * @memberof message.W_C_LoginMap
             * @static
             * @param {message.IW_C_LoginMap=} [properties] Properties to set
             * @returns {message.W_C_LoginMap} W_C_LoginMap instance
             */
            W_C_LoginMap.create = function create(properties) {
                return new W_C_LoginMap(properties);
            };
    
            /**
             * Encodes the specified W_C_LoginMap message. Does not implicitly {@link message.W_C_LoginMap.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_LoginMap
             * @static
             * @param {message.IW_C_LoginMap} message W_C_LoginMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_LoginMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Id != null && message.hasOwnProperty("Id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Id);
                if (message.Pos != null && message.hasOwnProperty("Pos"))
                    $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.Rotation);
                return writer;
            };
    
            /**
             * Encodes the specified W_C_LoginMap message, length delimited. Does not implicitly {@link message.W_C_LoginMap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_LoginMap
             * @static
             * @param {message.IW_C_LoginMap} message W_C_LoginMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_LoginMap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_LoginMap message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_LoginMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_LoginMap} W_C_LoginMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_LoginMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_LoginMap();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Id = reader.int64();
                        break;
                    case 3:
                        message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.Rotation = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_LoginMap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_LoginMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_LoginMap} W_C_LoginMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_LoginMap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_LoginMap message.
             * @function verify
             * @memberof message.W_C_LoginMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_LoginMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                        return "Id: integer|Long expected";
                if (message.Pos != null && message.hasOwnProperty("Pos")) {
                    var error = $root.message.Point3F.verify(message.Pos);
                    if (error)
                        return "Pos." + error;
                }
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    if (typeof message.Rotation !== "number")
                        return "Rotation: number expected";
                return null;
            };
    
            /**
             * Creates a W_C_LoginMap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_LoginMap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_LoginMap} W_C_LoginMap
             */
            W_C_LoginMap.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_LoginMap)
                    return object;
                var message = new $root.message.W_C_LoginMap();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_LoginMap.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Id != null)
                    if ($util.Long)
                        (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                    else if (typeof object.Id === "string")
                        message.Id = parseInt(object.Id, 10);
                    else if (typeof object.Id === "number")
                        message.Id = object.Id;
                    else if (typeof object.Id === "object")
                        message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
                if (object.Pos != null) {
                    if (typeof object.Pos !== "object")
                        throw TypeError(".message.W_C_LoginMap.Pos: object expected");
                    message.Pos = $root.message.Point3F.fromObject(object.Pos);
                }
                if (object.Rotation != null)
                    message.Rotation = Number(object.Rotation);
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_LoginMap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_LoginMap
             * @static
             * @param {message.W_C_LoginMap} message W_C_LoginMap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_LoginMap.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Id = 0;
                    object.Pos = null;
                    object.Rotation = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (typeof message.Id === "number")
                        object.Id = options.longs === String ? String(message.Id) : message.Id;
                    else
                        object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                if (message.Pos != null && message.hasOwnProperty("Pos"))
                    object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    object.Rotation = options.json && !isFinite(message.Rotation) ? String(message.Rotation) : message.Rotation;
                return object;
            };
    
            /**
             * Converts this W_C_LoginMap to JSON.
             * @function toJSON
             * @memberof message.W_C_LoginMap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_LoginMap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_LoginMap;
        })();
    
        message.W_C_Move = (function() {
    
            /**
             * Properties of a W_C_Move.
             * @memberof message
             * @interface IW_C_Move
             * @property {message.IIpacket|null} [PacketHead] W_C_Move PacketHead
             * @property {number|Long|null} [Id] W_C_Move Id
             * @property {message.IPoint3F|null} [Pos] W_C_Move Pos
             * @property {number|null} [Rotation] W_C_Move Rotation
             */
    
            /**
             * Constructs a new W_C_Move.
             * @memberof message
             * @classdesc Represents a W_C_Move.
             * @implements IW_C_Move
             * @constructor
             * @param {message.IW_C_Move=} [properties] Properties to set
             */
            function W_C_Move(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_Move PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_Move
             * @instance
             */
            W_C_Move.prototype.PacketHead = null;
    
            /**
             * W_C_Move Id.
             * @member {number|Long} Id
             * @memberof message.W_C_Move
             * @instance
             */
            W_C_Move.prototype.Id = 0;
    
            /**
             * W_C_Move Pos.
             * @member {message.IPoint3F|null|undefined} Pos
             * @memberof message.W_C_Move
             * @instance
             */
            W_C_Move.prototype.Pos = null;
    
            /**
             * W_C_Move Rotation.
             * @member {number} Rotation
             * @memberof message.W_C_Move
             * @instance
             */
            W_C_Move.prototype.Rotation = 0;
    
            /**
             * Creates a new W_C_Move instance using the specified properties.
             * @function create
             * @memberof message.W_C_Move
             * @static
             * @param {message.IW_C_Move=} [properties] Properties to set
             * @returns {message.W_C_Move} W_C_Move instance
             */
            W_C_Move.create = function create(properties) {
                return new W_C_Move(properties);
            };
    
            /**
             * Encodes the specified W_C_Move message. Does not implicitly {@link message.W_C_Move.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_Move
             * @static
             * @param {message.IW_C_Move} message W_C_Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_Move.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Id != null && message.hasOwnProperty("Id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Id);
                if (message.Pos != null && message.hasOwnProperty("Pos"))
                    $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.Rotation);
                return writer;
            };
    
            /**
             * Encodes the specified W_C_Move message, length delimited. Does not implicitly {@link message.W_C_Move.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_Move
             * @static
             * @param {message.IW_C_Move} message W_C_Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_Move.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_Move message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_Move} W_C_Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_Move.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_Move();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Id = reader.int64();
                        break;
                    case 3:
                        message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.Rotation = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_Move message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_Move} W_C_Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_Move.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_Move message.
             * @function verify
             * @memberof message.W_C_Move
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_Move.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                        return "Id: integer|Long expected";
                if (message.Pos != null && message.hasOwnProperty("Pos")) {
                    var error = $root.message.Point3F.verify(message.Pos);
                    if (error)
                        return "Pos." + error;
                }
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    if (typeof message.Rotation !== "number")
                        return "Rotation: number expected";
                return null;
            };
    
            /**
             * Creates a W_C_Move message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_Move
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_Move} W_C_Move
             */
            W_C_Move.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_Move)
                    return object;
                var message = new $root.message.W_C_Move();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_Move.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Id != null)
                    if ($util.Long)
                        (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                    else if (typeof object.Id === "string")
                        message.Id = parseInt(object.Id, 10);
                    else if (typeof object.Id === "number")
                        message.Id = object.Id;
                    else if (typeof object.Id === "object")
                        message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
                if (object.Pos != null) {
                    if (typeof object.Pos !== "object")
                        throw TypeError(".message.W_C_Move.Pos: object expected");
                    message.Pos = $root.message.Point3F.fromObject(object.Pos);
                }
                if (object.Rotation != null)
                    message.Rotation = Number(object.Rotation);
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_Move message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_Move
             * @static
             * @param {message.W_C_Move} message W_C_Move
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_Move.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Id = 0;
                    object.Pos = null;
                    object.Rotation = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (typeof message.Id === "number")
                        object.Id = options.longs === String ? String(message.Id) : message.Id;
                    else
                        object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                if (message.Pos != null && message.hasOwnProperty("Pos"))
                    object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    object.Rotation = options.json && !isFinite(message.Rotation) ? String(message.Rotation) : message.Rotation;
                return object;
            };
    
            /**
             * Converts this W_C_Move to JSON.
             * @function toJSON
             * @memberof message.W_C_Move
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_Move.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_Move;
        })();
    
        message.W_C_ADD_SIMOBJ = (function() {
    
            /**
             * Properties of a W_C_ADD_SIMOBJ.
             * @memberof message
             * @interface IW_C_ADD_SIMOBJ
             * @property {message.IIpacket|null} [PacketHead] W_C_ADD_SIMOBJ PacketHead
             * @property {number|Long|null} [Id] W_C_ADD_SIMOBJ Id
             * @property {message.IPoint3F|null} [Pos] W_C_ADD_SIMOBJ Pos
             * @property {number|null} [Rotation] W_C_ADD_SIMOBJ Rotation
             */
    
            /**
             * Constructs a new W_C_ADD_SIMOBJ.
             * @memberof message
             * @classdesc Represents a W_C_ADD_SIMOBJ.
             * @implements IW_C_ADD_SIMOBJ
             * @constructor
             * @param {message.IW_C_ADD_SIMOBJ=} [properties] Properties to set
             */
            function W_C_ADD_SIMOBJ(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_ADD_SIMOBJ PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_ADD_SIMOBJ
             * @instance
             */
            W_C_ADD_SIMOBJ.prototype.PacketHead = null;
    
            /**
             * W_C_ADD_SIMOBJ Id.
             * @member {number|Long} Id
             * @memberof message.W_C_ADD_SIMOBJ
             * @instance
             */
            W_C_ADD_SIMOBJ.prototype.Id = 0;
    
            /**
             * W_C_ADD_SIMOBJ Pos.
             * @member {message.IPoint3F|null|undefined} Pos
             * @memberof message.W_C_ADD_SIMOBJ
             * @instance
             */
            W_C_ADD_SIMOBJ.prototype.Pos = null;
    
            /**
             * W_C_ADD_SIMOBJ Rotation.
             * @member {number} Rotation
             * @memberof message.W_C_ADD_SIMOBJ
             * @instance
             */
            W_C_ADD_SIMOBJ.prototype.Rotation = 0;
    
            /**
             * Creates a new W_C_ADD_SIMOBJ instance using the specified properties.
             * @function create
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {message.IW_C_ADD_SIMOBJ=} [properties] Properties to set
             * @returns {message.W_C_ADD_SIMOBJ} W_C_ADD_SIMOBJ instance
             */
            W_C_ADD_SIMOBJ.create = function create(properties) {
                return new W_C_ADD_SIMOBJ(properties);
            };
    
            /**
             * Encodes the specified W_C_ADD_SIMOBJ message. Does not implicitly {@link message.W_C_ADD_SIMOBJ.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {message.IW_C_ADD_SIMOBJ} message W_C_ADD_SIMOBJ message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_ADD_SIMOBJ.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Id != null && message.hasOwnProperty("Id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Id);
                if (message.Pos != null && message.hasOwnProperty("Pos"))
                    $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.Rotation);
                return writer;
            };
    
            /**
             * Encodes the specified W_C_ADD_SIMOBJ message, length delimited. Does not implicitly {@link message.W_C_ADD_SIMOBJ.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {message.IW_C_ADD_SIMOBJ} message W_C_ADD_SIMOBJ message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_ADD_SIMOBJ.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_ADD_SIMOBJ message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_ADD_SIMOBJ} W_C_ADD_SIMOBJ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_ADD_SIMOBJ.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_ADD_SIMOBJ();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Id = reader.int64();
                        break;
                    case 3:
                        message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.Rotation = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_ADD_SIMOBJ message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_ADD_SIMOBJ} W_C_ADD_SIMOBJ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_ADD_SIMOBJ.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_ADD_SIMOBJ message.
             * @function verify
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_ADD_SIMOBJ.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                        return "Id: integer|Long expected";
                if (message.Pos != null && message.hasOwnProperty("Pos")) {
                    var error = $root.message.Point3F.verify(message.Pos);
                    if (error)
                        return "Pos." + error;
                }
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    if (typeof message.Rotation !== "number")
                        return "Rotation: number expected";
                return null;
            };
    
            /**
             * Creates a W_C_ADD_SIMOBJ message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_ADD_SIMOBJ} W_C_ADD_SIMOBJ
             */
            W_C_ADD_SIMOBJ.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_ADD_SIMOBJ)
                    return object;
                var message = new $root.message.W_C_ADD_SIMOBJ();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_ADD_SIMOBJ.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Id != null)
                    if ($util.Long)
                        (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                    else if (typeof object.Id === "string")
                        message.Id = parseInt(object.Id, 10);
                    else if (typeof object.Id === "number")
                        message.Id = object.Id;
                    else if (typeof object.Id === "object")
                        message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
                if (object.Pos != null) {
                    if (typeof object.Pos !== "object")
                        throw TypeError(".message.W_C_ADD_SIMOBJ.Pos: object expected");
                    message.Pos = $root.message.Point3F.fromObject(object.Pos);
                }
                if (object.Rotation != null)
                    message.Rotation = Number(object.Rotation);
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_ADD_SIMOBJ message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_ADD_SIMOBJ
             * @static
             * @param {message.W_C_ADD_SIMOBJ} message W_C_ADD_SIMOBJ
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_ADD_SIMOBJ.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Id = 0;
                    object.Pos = null;
                    object.Rotation = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (typeof message.Id === "number")
                        object.Id = options.longs === String ? String(message.Id) : message.Id;
                    else
                        object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                if (message.Pos != null && message.hasOwnProperty("Pos"))
                    object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                    object.Rotation = options.json && !isFinite(message.Rotation) ? String(message.Rotation) : message.Rotation;
                return object;
            };
    
            /**
             * Converts this W_C_ADD_SIMOBJ to JSON.
             * @function toJSON
             * @memberof message.W_C_ADD_SIMOBJ
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_ADD_SIMOBJ.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_ADD_SIMOBJ;
        })();
    
        message.C_W_LoginCopyMap = (function() {
    
            /**
             * Properties of a C_W_LoginCopyMap.
             * @memberof message
             * @interface IC_W_LoginCopyMap
             * @property {message.IIpacket|null} [PacketHead] C_W_LoginCopyMap PacketHead
             * @property {number|null} [DataId] C_W_LoginCopyMap DataId
             */
    
            /**
             * Constructs a new C_W_LoginCopyMap.
             * @memberof message
             * @classdesc Represents a C_W_LoginCopyMap.
             * @implements IC_W_LoginCopyMap
             * @constructor
             * @param {message.IC_W_LoginCopyMap=} [properties] Properties to set
             */
            function C_W_LoginCopyMap(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_W_LoginCopyMap PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_W_LoginCopyMap
             * @instance
             */
            C_W_LoginCopyMap.prototype.PacketHead = null;
    
            /**
             * C_W_LoginCopyMap DataId.
             * @member {number} DataId
             * @memberof message.C_W_LoginCopyMap
             * @instance
             */
            C_W_LoginCopyMap.prototype.DataId = 0;
    
            /**
             * Creates a new C_W_LoginCopyMap instance using the specified properties.
             * @function create
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {message.IC_W_LoginCopyMap=} [properties] Properties to set
             * @returns {message.C_W_LoginCopyMap} C_W_LoginCopyMap instance
             */
            C_W_LoginCopyMap.create = function create(properties) {
                return new C_W_LoginCopyMap(properties);
            };
    
            /**
             * Encodes the specified C_W_LoginCopyMap message. Does not implicitly {@link message.C_W_LoginCopyMap.verify|verify} messages.
             * @function encode
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {message.IC_W_LoginCopyMap} message C_W_LoginCopyMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_LoginCopyMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.DataId != null && message.hasOwnProperty("DataId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DataId);
                return writer;
            };
    
            /**
             * Encodes the specified C_W_LoginCopyMap message, length delimited. Does not implicitly {@link message.C_W_LoginCopyMap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {message.IC_W_LoginCopyMap} message C_W_LoginCopyMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_LoginCopyMap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_W_LoginCopyMap message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_W_LoginCopyMap} C_W_LoginCopyMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_LoginCopyMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_LoginCopyMap();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.DataId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_W_LoginCopyMap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_W_LoginCopyMap} C_W_LoginCopyMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_LoginCopyMap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_W_LoginCopyMap message.
             * @function verify
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_W_LoginCopyMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.DataId != null && message.hasOwnProperty("DataId"))
                    if (!$util.isInteger(message.DataId))
                        return "DataId: integer expected";
                return null;
            };
    
            /**
             * Creates a C_W_LoginCopyMap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_W_LoginCopyMap} C_W_LoginCopyMap
             */
            C_W_LoginCopyMap.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_W_LoginCopyMap)
                    return object;
                var message = new $root.message.C_W_LoginCopyMap();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_W_LoginCopyMap.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.DataId != null)
                    message.DataId = object.DataId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C_W_LoginCopyMap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_W_LoginCopyMap
             * @static
             * @param {message.C_W_LoginCopyMap} message C_W_LoginCopyMap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_W_LoginCopyMap.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.DataId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.DataId != null && message.hasOwnProperty("DataId"))
                    object.DataId = message.DataId;
                return object;
            };
    
            /**
             * Converts this C_W_LoginCopyMap to JSON.
             * @function toJSON
             * @memberof message.C_W_LoginCopyMap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_W_LoginCopyMap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_W_LoginCopyMap;
        })();
    
        /**
         * SERVICE enum.
         * @name message.SERVICE
         * @enum {string}
         * @property {number} NONE=0 NONE value
         * @property {number} CLIENT=1 CLIENT value
         * @property {number} GATESERVER=2 GATESERVER value
         * @property {number} ACCOUNTSERVER=3 ACCOUNTSERVER value
         * @property {number} WORLDSERVER=4 WORLDSERVER value
         * @property {number} ZONESERVER=5 ZONESERVER value
         * @property {number} WORLDDBSERVER=6 WORLDDBSERVER value
         */
        message.SERVICE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "CLIENT"] = 1;
            values[valuesById[2] = "GATESERVER"] = 2;
            values[valuesById[3] = "ACCOUNTSERVER"] = 3;
            values[valuesById[4] = "WORLDSERVER"] = 4;
            values[valuesById[5] = "ZONESERVER"] = 5;
            values[valuesById[6] = "WORLDDBSERVER"] = 6;
            return values;
        })();
    
        /**
         * CHAT enum.
         * @name message.CHAT
         * @enum {string}
         * @property {number} MSG_TYPE_WORLD=0 MSG_TYPE_WORLD value
         * @property {number} MSG_TYPE_PRIVATE=1 MSG_TYPE_PRIVATE value
         * @property {number} MSG_TYPE_ORG=2 MSG_TYPE_ORG value
         * @property {number} MSG_TYPE_COUNT=3 MSG_TYPE_COUNT value
         */
        message.CHAT = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MSG_TYPE_WORLD"] = 0;
            values[valuesById[1] = "MSG_TYPE_PRIVATE"] = 1;
            values[valuesById[2] = "MSG_TYPE_ORG"] = 2;
            values[valuesById[3] = "MSG_TYPE_COUNT"] = 3;
            return values;
        })();
    
        message.Ipacket = (function() {
    
            /**
             * Properties of an Ipacket.
             * @memberof message
             * @interface IIpacket
             * @property {number|null} [Stx] Ipacket Stx
             * @property {message.SERVICE|null} [DestServerType] Ipacket DestServerType
             * @property {number|null} [Ckx] Ipacket Ckx
             * @property {number|Long|null} [Id] Ipacket Id
             */
    
            /**
             * Constructs a new Ipacket.
             * @memberof message
             * @classdesc Represents an Ipacket.
             * @implements IIpacket
             * @constructor
             * @param {message.IIpacket=} [properties] Properties to set
             */
            function Ipacket(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Ipacket Stx.
             * @member {number} Stx
             * @memberof message.Ipacket
             * @instance
             */
            Ipacket.prototype.Stx = 0;
    
            /**
             * Ipacket DestServerType.
             * @member {message.SERVICE} DestServerType
             * @memberof message.Ipacket
             * @instance
             */
            Ipacket.prototype.DestServerType = 0;
    
            /**
             * Ipacket Ckx.
             * @member {number} Ckx
             * @memberof message.Ipacket
             * @instance
             */
            Ipacket.prototype.Ckx = 0;
    
            /**
             * Ipacket Id.
             * @member {number|Long} Id
             * @memberof message.Ipacket
             * @instance
             */
            Ipacket.prototype.Id = 0;
    
            /**
             * Creates a new Ipacket instance using the specified properties.
             * @function create
             * @memberof message.Ipacket
             * @static
             * @param {message.IIpacket=} [properties] Properties to set
             * @returns {message.Ipacket} Ipacket instance
             */
            Ipacket.create = function create(properties) {
                return new Ipacket(properties);
            };
    
            /**
             * Encodes the specified Ipacket message. Does not implicitly {@link message.Ipacket.verify|verify} messages.
             * @function encode
             * @memberof message.Ipacket
             * @static
             * @param {message.IIpacket} message Ipacket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ipacket.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Stx != null && message.hasOwnProperty("Stx"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Stx);
                if (message.DestServerType != null && message.hasOwnProperty("DestServerType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DestServerType);
                if (message.Ckx != null && message.hasOwnProperty("Ckx"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Ckx);
                if (message.Id != null && message.hasOwnProperty("Id"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Id);
                return writer;
            };
    
            /**
             * Encodes the specified Ipacket message, length delimited. Does not implicitly {@link message.Ipacket.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Ipacket
             * @static
             * @param {message.IIpacket} message Ipacket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ipacket.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Ipacket message from the specified reader or buffer.
             * @function decode
             * @memberof message.Ipacket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Ipacket} Ipacket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ipacket.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Ipacket();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Stx = reader.int32();
                        break;
                    case 2:
                        message.DestServerType = reader.int32();
                        break;
                    case 3:
                        message.Ckx = reader.int32();
                        break;
                    case 4:
                        message.Id = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Ipacket message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Ipacket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Ipacket} Ipacket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ipacket.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Ipacket message.
             * @function verify
             * @memberof message.Ipacket
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ipacket.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Stx != null && message.hasOwnProperty("Stx"))
                    if (!$util.isInteger(message.Stx))
                        return "Stx: integer expected";
                if (message.DestServerType != null && message.hasOwnProperty("DestServerType"))
                    switch (message.DestServerType) {
                    default:
                        return "DestServerType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.Ckx != null && message.hasOwnProperty("Ckx"))
                    if (!$util.isInteger(message.Ckx))
                        return "Ckx: integer expected";
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                        return "Id: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an Ipacket message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Ipacket
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Ipacket} Ipacket
             */
            Ipacket.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Ipacket)
                    return object;
                var message = new $root.message.Ipacket();
                if (object.Stx != null)
                    message.Stx = object.Stx | 0;
                switch (object.DestServerType) {
                case "NONE":
                case 0:
                    message.DestServerType = 0;
                    break;
                case "CLIENT":
                case 1:
                    message.DestServerType = 1;
                    break;
                case "GATESERVER":
                case 2:
                    message.DestServerType = 2;
                    break;
                case "ACCOUNTSERVER":
                case 3:
                    message.DestServerType = 3;
                    break;
                case "WORLDSERVER":
                case 4:
                    message.DestServerType = 4;
                    break;
                case "ZONESERVER":
                case 5:
                    message.DestServerType = 5;
                    break;
                case "WORLDDBSERVER":
                case 6:
                    message.DestServerType = 6;
                    break;
                }
                if (object.Ckx != null)
                    message.Ckx = object.Ckx | 0;
                if (object.Id != null)
                    if ($util.Long)
                        (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                    else if (typeof object.Id === "string")
                        message.Id = parseInt(object.Id, 10);
                    else if (typeof object.Id === "number")
                        message.Id = object.Id;
                    else if (typeof object.Id === "object")
                        message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an Ipacket message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Ipacket
             * @static
             * @param {message.Ipacket} message Ipacket
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ipacket.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Stx = 0;
                    object.DestServerType = options.enums === String ? "NONE" : 0;
                    object.Ckx = 0;
                    object.Id = 0;
                }
                if (message.Stx != null && message.hasOwnProperty("Stx"))
                    object.Stx = message.Stx;
                if (message.DestServerType != null && message.hasOwnProperty("DestServerType"))
                    object.DestServerType = options.enums === String ? $root.message.SERVICE[message.DestServerType] : message.DestServerType;
                if (message.Ckx != null && message.hasOwnProperty("Ckx"))
                    object.Ckx = message.Ckx;
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (typeof message.Id === "number")
                        object.Id = options.longs === String ? String(message.Id) : message.Id;
                    else
                        object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                return object;
            };
    
            /**
             * Converts this Ipacket to JSON.
             * @function toJSON
             * @memberof message.Ipacket
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ipacket.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Ipacket;
        })();
    
        message.PlayerData = (function() {
    
            /**
             * Properties of a PlayerData.
             * @memberof message
             * @interface IPlayerData
             * @property {number|Long|null} [PlayerID] PlayerData PlayerID
             * @property {string|null} [PlayerName] PlayerData PlayerName
             * @property {number|null} [PlayerGold] PlayerData PlayerGold
             */
    
            /**
             * Constructs a new PlayerData.
             * @memberof message
             * @classdesc Represents a PlayerData.
             * @implements IPlayerData
             * @constructor
             * @param {message.IPlayerData=} [properties] Properties to set
             */
            function PlayerData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerData PlayerID.
             * @member {number|Long} PlayerID
             * @memberof message.PlayerData
             * @instance
             */
            PlayerData.prototype.PlayerID = 0;
    
            /**
             * PlayerData PlayerName.
             * @member {string} PlayerName
             * @memberof message.PlayerData
             * @instance
             */
            PlayerData.prototype.PlayerName = "";
    
            /**
             * PlayerData PlayerGold.
             * @member {number} PlayerGold
             * @memberof message.PlayerData
             * @instance
             */
            PlayerData.prototype.PlayerGold = 0;
    
            /**
             * Creates a new PlayerData instance using the specified properties.
             * @function create
             * @memberof message.PlayerData
             * @static
             * @param {message.IPlayerData=} [properties] Properties to set
             * @returns {message.PlayerData} PlayerData instance
             */
            PlayerData.create = function create(properties) {
                return new PlayerData(properties);
            };
    
            /**
             * Encodes the specified PlayerData message. Does not implicitly {@link message.PlayerData.verify|verify} messages.
             * @function encode
             * @memberof message.PlayerData
             * @static
             * @param {message.IPlayerData} message PlayerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.PlayerID);
                if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.PlayerName);
                if (message.PlayerGold != null && message.hasOwnProperty("PlayerGold"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PlayerGold);
                return writer;
            };
    
            /**
             * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link message.PlayerData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.PlayerData
             * @static
             * @param {message.IPlayerData} message PlayerData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerData message from the specified reader or buffer.
             * @function decode
             * @memberof message.PlayerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.PlayerData} PlayerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PlayerData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PlayerID = reader.int64();
                        break;
                    case 2:
                        message.PlayerName = reader.string();
                        break;
                    case 3:
                        message.PlayerGold = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlayerData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.PlayerData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.PlayerData} PlayerData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerData message.
             * @function verify
             * @memberof message.PlayerData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                    if (!$util.isInteger(message.PlayerID) && !(message.PlayerID && $util.isInteger(message.PlayerID.low) && $util.isInteger(message.PlayerID.high)))
                        return "PlayerID: integer|Long expected";
                if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
                    if (!$util.isString(message.PlayerName))
                        return "PlayerName: string expected";
                if (message.PlayerGold != null && message.hasOwnProperty("PlayerGold"))
                    if (!$util.isInteger(message.PlayerGold))
                        return "PlayerGold: integer expected";
                return null;
            };
    
            /**
             * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.PlayerData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.PlayerData} PlayerData
             */
            PlayerData.fromObject = function fromObject(object) {
                if (object instanceof $root.message.PlayerData)
                    return object;
                var message = new $root.message.PlayerData();
                if (object.PlayerID != null)
                    if ($util.Long)
                        (message.PlayerID = $util.Long.fromValue(object.PlayerID)).unsigned = false;
                    else if (typeof object.PlayerID === "string")
                        message.PlayerID = parseInt(object.PlayerID, 10);
                    else if (typeof object.PlayerID === "number")
                        message.PlayerID = object.PlayerID;
                    else if (typeof object.PlayerID === "object")
                        message.PlayerID = new $util.LongBits(object.PlayerID.low >>> 0, object.PlayerID.high >>> 0).toNumber();
                if (object.PlayerName != null)
                    message.PlayerName = String(object.PlayerName);
                if (object.PlayerGold != null)
                    message.PlayerGold = object.PlayerGold | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.PlayerData
             * @static
             * @param {message.PlayerData} message PlayerData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PlayerID = 0;
                    object.PlayerName = "";
                    object.PlayerGold = 0;
                }
                if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                    if (typeof message.PlayerID === "number")
                        object.PlayerID = options.longs === String ? String(message.PlayerID) : message.PlayerID;
                    else
                        object.PlayerID = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerID) : options.longs === Number ? new $util.LongBits(message.PlayerID.low >>> 0, message.PlayerID.high >>> 0).toNumber() : message.PlayerID;
                if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
                    object.PlayerName = message.PlayerName;
                if (message.PlayerGold != null && message.hasOwnProperty("PlayerGold"))
                    object.PlayerGold = message.PlayerGold;
                return object;
            };
    
            /**
             * Converts this PlayerData to JSON.
             * @function toJSON
             * @memberof message.PlayerData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlayerData;
        })();
    
        message.Int = (function() {
    
            /**
             * Properties of an Int.
             * @memberof message
             * @interface IInt
             * @property {number|null} [Val] Int Val
             */
    
            /**
             * Constructs a new Int.
             * @memberof message
             * @classdesc Represents an Int.
             * @implements IInt
             * @constructor
             * @param {message.IInt=} [properties] Properties to set
             */
            function Int(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Int Val.
             * @member {number} Val
             * @memberof message.Int
             * @instance
             */
            Int.prototype.Val = 0;
    
            /**
             * Creates a new Int instance using the specified properties.
             * @function create
             * @memberof message.Int
             * @static
             * @param {message.IInt=} [properties] Properties to set
             * @returns {message.Int} Int instance
             */
            Int.create = function create(properties) {
                return new Int(properties);
            };
    
            /**
             * Encodes the specified Int message. Does not implicitly {@link message.Int.verify|verify} messages.
             * @function encode
             * @memberof message.Int
             * @static
             * @param {message.IInt} message Int message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified Int message, length delimited. Does not implicitly {@link message.Int.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Int
             * @static
             * @param {message.IInt} message Int message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Int message from the specified reader or buffer.
             * @function decode
             * @memberof message.Int
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Int} Int
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Int();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Int message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Int
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Int} Int
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Int message.
             * @function verify
             * @memberof message.Int
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (!$util.isInteger(message.Val))
                        return "Val: integer expected";
                return null;
            };
    
            /**
             * Creates an Int message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Int
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Int} Int
             */
            Int.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Int)
                    return object;
                var message = new $root.message.Int();
                if (object.Val != null)
                    message.Val = object.Val | 0;
                return message;
            };
    
            /**
             * Creates a plain object from an Int message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Int
             * @static
             * @param {message.Int} message Int
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = 0;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    object.Val = message.Val;
                return object;
            };
    
            /**
             * Converts this Int to JSON.
             * @function toJSON
             * @memberof message.Int
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Int;
        })();
    
        message.IntSlice = (function() {
    
            /**
             * Properties of an IntSlice.
             * @memberof message
             * @interface IIntSlice
             * @property {Array.<number>|null} [Val] IntSlice Val
             */
    
            /**
             * Constructs a new IntSlice.
             * @memberof message
             * @classdesc Represents an IntSlice.
             * @implements IIntSlice
             * @constructor
             * @param {message.IIntSlice=} [properties] Properties to set
             */
            function IntSlice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * IntSlice Val.
             * @member {Array.<number>} Val
             * @memberof message.IntSlice
             * @instance
             */
            IntSlice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new IntSlice instance using the specified properties.
             * @function create
             * @memberof message.IntSlice
             * @static
             * @param {message.IIntSlice=} [properties] Properties to set
             * @returns {message.IntSlice} IntSlice instance
             */
            IntSlice.create = function create(properties) {
                return new IntSlice(properties);
            };
    
            /**
             * Encodes the specified IntSlice message. Does not implicitly {@link message.IntSlice.verify|verify} messages.
             * @function encode
             * @memberof message.IntSlice
             * @static
             * @param {message.IIntSlice} message IntSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntSlice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.int32(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified IntSlice message, length delimited. Does not implicitly {@link message.IntSlice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.IntSlice
             * @static
             * @param {message.IIntSlice} message IntSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IntSlice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an IntSlice message from the specified reader or buffer.
             * @function decode
             * @memberof message.IntSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.IntSlice} IntSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntSlice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.IntSlice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.int32());
                        } else
                            message.Val.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an IntSlice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.IntSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.IntSlice} IntSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IntSlice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an IntSlice message.
             * @function verify
             * @memberof message.IntSlice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IntSlice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (!$util.isInteger(message.Val[i]))
                            return "Val: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates an IntSlice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.IntSlice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.IntSlice} IntSlice
             */
            IntSlice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.IntSlice)
                    return object;
                var message = new $root.message.IntSlice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.IntSlice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        message.Val[i] = object.Val[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from an IntSlice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.IntSlice
             * @static
             * @param {message.IntSlice} message IntSlice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IntSlice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        object.Val[j] = message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this IntSlice to JSON.
             * @function toJSON
             * @memberof message.IntSlice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IntSlice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return IntSlice;
        })();
    
        message.UInt = (function() {
    
            /**
             * Properties of a UInt.
             * @memberof message
             * @interface IUInt
             * @property {number|null} [Val] UInt Val
             */
    
            /**
             * Constructs a new UInt.
             * @memberof message
             * @classdesc Represents a UInt.
             * @implements IUInt
             * @constructor
             * @param {message.IUInt=} [properties] Properties to set
             */
            function UInt(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UInt Val.
             * @member {number} Val
             * @memberof message.UInt
             * @instance
             */
            UInt.prototype.Val = 0;
    
            /**
             * Creates a new UInt instance using the specified properties.
             * @function create
             * @memberof message.UInt
             * @static
             * @param {message.IUInt=} [properties] Properties to set
             * @returns {message.UInt} UInt instance
             */
            UInt.create = function create(properties) {
                return new UInt(properties);
            };
    
            /**
             * Encodes the specified UInt message. Does not implicitly {@link message.UInt.verify|verify} messages.
             * @function encode
             * @memberof message.UInt
             * @static
             * @param {message.IUInt} message UInt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified UInt message, length delimited. Does not implicitly {@link message.UInt.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.UInt
             * @static
             * @param {message.IUInt} message UInt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UInt message from the specified reader or buffer.
             * @function decode
             * @memberof message.UInt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.UInt} UInt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.UInt();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UInt message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.UInt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.UInt} UInt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UInt message.
             * @function verify
             * @memberof message.UInt
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (!$util.isInteger(message.Val))
                        return "Val: integer expected";
                return null;
            };
    
            /**
             * Creates a UInt message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.UInt
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.UInt} UInt
             */
            UInt.fromObject = function fromObject(object) {
                if (object instanceof $root.message.UInt)
                    return object;
                var message = new $root.message.UInt();
                if (object.Val != null)
                    message.Val = object.Val >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a UInt message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.UInt
             * @static
             * @param {message.UInt} message UInt
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = 0;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    object.Val = message.Val;
                return object;
            };
    
            /**
             * Converts this UInt to JSON.
             * @function toJSON
             * @memberof message.UInt
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UInt;
        })();
    
        message.UIntSlice = (function() {
    
            /**
             * Properties of a UIntSlice.
             * @memberof message
             * @interface IUIntSlice
             * @property {Array.<number>|null} [Val] UIntSlice Val
             */
    
            /**
             * Constructs a new UIntSlice.
             * @memberof message
             * @classdesc Represents a UIntSlice.
             * @implements IUIntSlice
             * @constructor
             * @param {message.IUIntSlice=} [properties] Properties to set
             */
            function UIntSlice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UIntSlice Val.
             * @member {Array.<number>} Val
             * @memberof message.UIntSlice
             * @instance
             */
            UIntSlice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new UIntSlice instance using the specified properties.
             * @function create
             * @memberof message.UIntSlice
             * @static
             * @param {message.IUIntSlice=} [properties] Properties to set
             * @returns {message.UIntSlice} UIntSlice instance
             */
            UIntSlice.create = function create(properties) {
                return new UIntSlice(properties);
            };
    
            /**
             * Encodes the specified UIntSlice message. Does not implicitly {@link message.UIntSlice.verify|verify} messages.
             * @function encode
             * @memberof message.UIntSlice
             * @static
             * @param {message.IUIntSlice} message UIntSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIntSlice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.uint32(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified UIntSlice message, length delimited. Does not implicitly {@link message.UIntSlice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.UIntSlice
             * @static
             * @param {message.IUIntSlice} message UIntSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UIntSlice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UIntSlice message from the specified reader or buffer.
             * @function decode
             * @memberof message.UIntSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.UIntSlice} UIntSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIntSlice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.UIntSlice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.uint32());
                        } else
                            message.Val.push(reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UIntSlice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.UIntSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.UIntSlice} UIntSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UIntSlice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UIntSlice message.
             * @function verify
             * @memberof message.UIntSlice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UIntSlice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (!$util.isInteger(message.Val[i]))
                            return "Val: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a UIntSlice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.UIntSlice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.UIntSlice} UIntSlice
             */
            UIntSlice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.UIntSlice)
                    return object;
                var message = new $root.message.UIntSlice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.UIntSlice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        message.Val[i] = object.Val[i] >>> 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UIntSlice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.UIntSlice
             * @static
             * @param {message.UIntSlice} message UIntSlice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UIntSlice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        object.Val[j] = message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this UIntSlice to JSON.
             * @function toJSON
             * @memberof message.UIntSlice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UIntSlice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UIntSlice;
        })();
    
        message.Int64 = (function() {
    
            /**
             * Properties of an Int64.
             * @memberof message
             * @interface IInt64
             * @property {number|Long|null} [Val] Int64 Val
             */
    
            /**
             * Constructs a new Int64.
             * @memberof message
             * @classdesc Represents an Int64.
             * @implements IInt64
             * @constructor
             * @param {message.IInt64=} [properties] Properties to set
             */
            function Int64(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Int64 Val.
             * @member {number|Long} Val
             * @memberof message.Int64
             * @instance
             */
            Int64.prototype.Val = 0;
    
            /**
             * Creates a new Int64 instance using the specified properties.
             * @function create
             * @memberof message.Int64
             * @static
             * @param {message.IInt64=} [properties] Properties to set
             * @returns {message.Int64} Int64 instance
             */
            Int64.create = function create(properties) {
                return new Int64(properties);
            };
    
            /**
             * Encodes the specified Int64 message. Does not implicitly {@link message.Int64.verify|verify} messages.
             * @function encode
             * @memberof message.Int64
             * @static
             * @param {message.IInt64} message Int64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified Int64 message, length delimited. Does not implicitly {@link message.Int64.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Int64
             * @static
             * @param {message.IInt64} message Int64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Int64 message from the specified reader or buffer.
             * @function decode
             * @memberof message.Int64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Int64} Int64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Int64();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Int64 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Int64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Int64} Int64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Int64 message.
             * @function verify
             * @memberof message.Int64
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (!$util.isInteger(message.Val) && !(message.Val && $util.isInteger(message.Val.low) && $util.isInteger(message.Val.high)))
                        return "Val: integer|Long expected";
                return null;
            };
    
            /**
             * Creates an Int64 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Int64
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Int64} Int64
             */
            Int64.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Int64)
                    return object;
                var message = new $root.message.Int64();
                if (object.Val != null)
                    if ($util.Long)
                        (message.Val = $util.Long.fromValue(object.Val)).unsigned = false;
                    else if (typeof object.Val === "string")
                        message.Val = parseInt(object.Val, 10);
                    else if (typeof object.Val === "number")
                        message.Val = object.Val;
                    else if (typeof object.Val === "object")
                        message.Val = new $util.LongBits(object.Val.low >>> 0, object.Val.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from an Int64 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Int64
             * @static
             * @param {message.Int64} message Int64
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = 0;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (typeof message.Val === "number")
                        object.Val = options.longs === String ? String(message.Val) : message.Val;
                    else
                        object.Val = options.longs === String ? $util.Long.prototype.toString.call(message.Val) : options.longs === Number ? new $util.LongBits(message.Val.low >>> 0, message.Val.high >>> 0).toNumber() : message.Val;
                return object;
            };
    
            /**
             * Converts this Int64 to JSON.
             * @function toJSON
             * @memberof message.Int64
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Int64;
        })();
    
        message.Int64Slice = (function() {
    
            /**
             * Properties of an Int64Slice.
             * @memberof message
             * @interface IInt64Slice
             * @property {Array.<number|Long>|null} [Val] Int64Slice Val
             */
    
            /**
             * Constructs a new Int64Slice.
             * @memberof message
             * @classdesc Represents an Int64Slice.
             * @implements IInt64Slice
             * @constructor
             * @param {message.IInt64Slice=} [properties] Properties to set
             */
            function Int64Slice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Int64Slice Val.
             * @member {Array.<number|Long>} Val
             * @memberof message.Int64Slice
             * @instance
             */
            Int64Slice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new Int64Slice instance using the specified properties.
             * @function create
             * @memberof message.Int64Slice
             * @static
             * @param {message.IInt64Slice=} [properties] Properties to set
             * @returns {message.Int64Slice} Int64Slice instance
             */
            Int64Slice.create = function create(properties) {
                return new Int64Slice(properties);
            };
    
            /**
             * Encodes the specified Int64Slice message. Does not implicitly {@link message.Int64Slice.verify|verify} messages.
             * @function encode
             * @memberof message.Int64Slice
             * @static
             * @param {message.IInt64Slice} message Int64Slice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Slice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.int64(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified Int64Slice message, length delimited. Does not implicitly {@link message.Int64Slice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Int64Slice
             * @static
             * @param {message.IInt64Slice} message Int64Slice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Slice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Int64Slice message from the specified reader or buffer.
             * @function decode
             * @memberof message.Int64Slice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Int64Slice} Int64Slice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Slice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Int64Slice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.int64());
                        } else
                            message.Val.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Int64Slice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Int64Slice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Int64Slice} Int64Slice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Slice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Int64Slice message.
             * @function verify
             * @memberof message.Int64Slice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Slice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (!$util.isInteger(message.Val[i]) && !(message.Val[i] && $util.isInteger(message.Val[i].low) && $util.isInteger(message.Val[i].high)))
                            return "Val: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates an Int64Slice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Int64Slice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Int64Slice} Int64Slice
             */
            Int64Slice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Int64Slice)
                    return object;
                var message = new $root.message.Int64Slice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.Int64Slice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        if ($util.Long)
                            (message.Val[i] = $util.Long.fromValue(object.Val[i])).unsigned = false;
                        else if (typeof object.Val[i] === "string")
                            message.Val[i] = parseInt(object.Val[i], 10);
                        else if (typeof object.Val[i] === "number")
                            message.Val[i] = object.Val[i];
                        else if (typeof object.Val[i] === "object")
                            message.Val[i] = new $util.LongBits(object.Val[i].low >>> 0, object.Val[i].high >>> 0).toNumber();
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Int64Slice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Int64Slice
             * @static
             * @param {message.Int64Slice} message Int64Slice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Slice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        if (typeof message.Val[j] === "number")
                            object.Val[j] = options.longs === String ? String(message.Val[j]) : message.Val[j];
                        else
                            object.Val[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Val[j]) : options.longs === Number ? new $util.LongBits(message.Val[j].low >>> 0, message.Val[j].high >>> 0).toNumber() : message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this Int64Slice to JSON.
             * @function toJSON
             * @memberof message.Int64Slice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Slice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Int64Slice;
        })();
    
        message.UInt64 = (function() {
    
            /**
             * Properties of a UInt64.
             * @memberof message
             * @interface IUInt64
             * @property {number|Long|null} [Val] UInt64 Val
             */
    
            /**
             * Constructs a new UInt64.
             * @memberof message
             * @classdesc Represents a UInt64.
             * @implements IUInt64
             * @constructor
             * @param {message.IUInt64=} [properties] Properties to set
             */
            function UInt64(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UInt64 Val.
             * @member {number|Long} Val
             * @memberof message.UInt64
             * @instance
             */
            UInt64.prototype.Val = 0;
    
            /**
             * Creates a new UInt64 instance using the specified properties.
             * @function create
             * @memberof message.UInt64
             * @static
             * @param {message.IUInt64=} [properties] Properties to set
             * @returns {message.UInt64} UInt64 instance
             */
            UInt64.create = function create(properties) {
                return new UInt64(properties);
            };
    
            /**
             * Encodes the specified UInt64 message. Does not implicitly {@link message.UInt64.verify|verify} messages.
             * @function encode
             * @memberof message.UInt64
             * @static
             * @param {message.IUInt64} message UInt64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified UInt64 message, length delimited. Does not implicitly {@link message.UInt64.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.UInt64
             * @static
             * @param {message.IUInt64} message UInt64 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UInt64 message from the specified reader or buffer.
             * @function decode
             * @memberof message.UInt64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.UInt64} UInt64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.UInt64();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UInt64 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.UInt64
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.UInt64} UInt64
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UInt64 message.
             * @function verify
             * @memberof message.UInt64
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (!$util.isInteger(message.Val) && !(message.Val && $util.isInteger(message.Val.low) && $util.isInteger(message.Val.high)))
                        return "Val: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a UInt64 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.UInt64
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.UInt64} UInt64
             */
            UInt64.fromObject = function fromObject(object) {
                if (object instanceof $root.message.UInt64)
                    return object;
                var message = new $root.message.UInt64();
                if (object.Val != null)
                    if ($util.Long)
                        (message.Val = $util.Long.fromValue(object.Val)).unsigned = true;
                    else if (typeof object.Val === "string")
                        message.Val = parseInt(object.Val, 10);
                    else if (typeof object.Val === "number")
                        message.Val = object.Val;
                    else if (typeof object.Val === "object")
                        message.Val = new $util.LongBits(object.Val.low >>> 0, object.Val.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a UInt64 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.UInt64
             * @static
             * @param {message.UInt64} message UInt64
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = 0;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (typeof message.Val === "number")
                        object.Val = options.longs === String ? String(message.Val) : message.Val;
                    else
                        object.Val = options.longs === String ? $util.Long.prototype.toString.call(message.Val) : options.longs === Number ? new $util.LongBits(message.Val.low >>> 0, message.Val.high >>> 0).toNumber(true) : message.Val;
                return object;
            };
    
            /**
             * Converts this UInt64 to JSON.
             * @function toJSON
             * @memberof message.UInt64
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UInt64;
        })();
    
        message.UInt64Slice = (function() {
    
            /**
             * Properties of a UInt64Slice.
             * @memberof message
             * @interface IUInt64Slice
             * @property {Array.<number|Long>|null} [Val] UInt64Slice Val
             */
    
            /**
             * Constructs a new UInt64Slice.
             * @memberof message
             * @classdesc Represents a UInt64Slice.
             * @implements IUInt64Slice
             * @constructor
             * @param {message.IUInt64Slice=} [properties] Properties to set
             */
            function UInt64Slice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UInt64Slice Val.
             * @member {Array.<number|Long>} Val
             * @memberof message.UInt64Slice
             * @instance
             */
            UInt64Slice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new UInt64Slice instance using the specified properties.
             * @function create
             * @memberof message.UInt64Slice
             * @static
             * @param {message.IUInt64Slice=} [properties] Properties to set
             * @returns {message.UInt64Slice} UInt64Slice instance
             */
            UInt64Slice.create = function create(properties) {
                return new UInt64Slice(properties);
            };
    
            /**
             * Encodes the specified UInt64Slice message. Does not implicitly {@link message.UInt64Slice.verify|verify} messages.
             * @function encode
             * @memberof message.UInt64Slice
             * @static
             * @param {message.IUInt64Slice} message UInt64Slice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Slice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.uint64(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified UInt64Slice message, length delimited. Does not implicitly {@link message.UInt64Slice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.UInt64Slice
             * @static
             * @param {message.IUInt64Slice} message UInt64Slice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Slice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UInt64Slice message from the specified reader or buffer.
             * @function decode
             * @memberof message.UInt64Slice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.UInt64Slice} UInt64Slice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Slice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.UInt64Slice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.uint64());
                        } else
                            message.Val.push(reader.uint64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UInt64Slice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.UInt64Slice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.UInt64Slice} UInt64Slice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Slice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UInt64Slice message.
             * @function verify
             * @memberof message.UInt64Slice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Slice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (!$util.isInteger(message.Val[i]) && !(message.Val[i] && $util.isInteger(message.Val[i].low) && $util.isInteger(message.Val[i].high)))
                            return "Val: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates a UInt64Slice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.UInt64Slice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.UInt64Slice} UInt64Slice
             */
            UInt64Slice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.UInt64Slice)
                    return object;
                var message = new $root.message.UInt64Slice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.UInt64Slice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        if ($util.Long)
                            (message.Val[i] = $util.Long.fromValue(object.Val[i])).unsigned = true;
                        else if (typeof object.Val[i] === "string")
                            message.Val[i] = parseInt(object.Val[i], 10);
                        else if (typeof object.Val[i] === "number")
                            message.Val[i] = object.Val[i];
                        else if (typeof object.Val[i] === "object")
                            message.Val[i] = new $util.LongBits(object.Val[i].low >>> 0, object.Val[i].high >>> 0).toNumber(true);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a UInt64Slice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.UInt64Slice
             * @static
             * @param {message.UInt64Slice} message UInt64Slice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Slice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        if (typeof message.Val[j] === "number")
                            object.Val[j] = options.longs === String ? String(message.Val[j]) : message.Val[j];
                        else
                            object.Val[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Val[j]) : options.longs === Number ? new $util.LongBits(message.Val[j].low >>> 0, message.Val[j].high >>> 0).toNumber(true) : message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this UInt64Slice to JSON.
             * @function toJSON
             * @memberof message.UInt64Slice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Slice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UInt64Slice;
        })();
    
        message.Float = (function() {
    
            /**
             * Properties of a Float.
             * @memberof message
             * @interface IFloat
             * @property {number|null} [Val] Float Val
             */
    
            /**
             * Constructs a new Float.
             * @memberof message
             * @classdesc Represents a Float.
             * @implements IFloat
             * @constructor
             * @param {message.IFloat=} [properties] Properties to set
             */
            function Float(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Float Val.
             * @member {number} Val
             * @memberof message.Float
             * @instance
             */
            Float.prototype.Val = 0;
    
            /**
             * Creates a new Float instance using the specified properties.
             * @function create
             * @memberof message.Float
             * @static
             * @param {message.IFloat=} [properties] Properties to set
             * @returns {message.Float} Float instance
             */
            Float.create = function create(properties) {
                return new Float(properties);
            };
    
            /**
             * Encodes the specified Float message. Does not implicitly {@link message.Float.verify|verify} messages.
             * @function encode
             * @memberof message.Float
             * @static
             * @param {message.IFloat} message Float message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Float.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified Float message, length delimited. Does not implicitly {@link message.Float.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Float
             * @static
             * @param {message.IFloat} message Float message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Float.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Float message from the specified reader or buffer.
             * @function decode
             * @memberof message.Float
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Float} Float
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Float.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Float();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Float message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Float
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Float} Float
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Float.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Float message.
             * @function verify
             * @memberof message.Float
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Float.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (typeof message.Val !== "number")
                        return "Val: number expected";
                return null;
            };
    
            /**
             * Creates a Float message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Float
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Float} Float
             */
            Float.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Float)
                    return object;
                var message = new $root.message.Float();
                if (object.Val != null)
                    message.Val = Number(object.Val);
                return message;
            };
    
            /**
             * Creates a plain object from a Float message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Float
             * @static
             * @param {message.Float} message Float
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Float.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = 0;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    object.Val = options.json && !isFinite(message.Val) ? String(message.Val) : message.Val;
                return object;
            };
    
            /**
             * Converts this Float to JSON.
             * @function toJSON
             * @memberof message.Float
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Float.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Float;
        })();
    
        message.FloatSlice = (function() {
    
            /**
             * Properties of a FloatSlice.
             * @memberof message
             * @interface IFloatSlice
             * @property {Array.<number>|null} [Val] FloatSlice Val
             */
    
            /**
             * Constructs a new FloatSlice.
             * @memberof message
             * @classdesc Represents a FloatSlice.
             * @implements IFloatSlice
             * @constructor
             * @param {message.IFloatSlice=} [properties] Properties to set
             */
            function FloatSlice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FloatSlice Val.
             * @member {Array.<number>} Val
             * @memberof message.FloatSlice
             * @instance
             */
            FloatSlice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new FloatSlice instance using the specified properties.
             * @function create
             * @memberof message.FloatSlice
             * @static
             * @param {message.IFloatSlice=} [properties] Properties to set
             * @returns {message.FloatSlice} FloatSlice instance
             */
            FloatSlice.create = function create(properties) {
                return new FloatSlice(properties);
            };
    
            /**
             * Encodes the specified FloatSlice message. Does not implicitly {@link message.FloatSlice.verify|verify} messages.
             * @function encode
             * @memberof message.FloatSlice
             * @static
             * @param {message.IFloatSlice} message FloatSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatSlice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.float(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified FloatSlice message, length delimited. Does not implicitly {@link message.FloatSlice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.FloatSlice
             * @static
             * @param {message.IFloatSlice} message FloatSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatSlice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a FloatSlice message from the specified reader or buffer.
             * @function decode
             * @memberof message.FloatSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.FloatSlice} FloatSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatSlice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.FloatSlice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.float());
                        } else
                            message.Val.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a FloatSlice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.FloatSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.FloatSlice} FloatSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatSlice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a FloatSlice message.
             * @function verify
             * @memberof message.FloatSlice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatSlice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (typeof message.Val[i] !== "number")
                            return "Val: number[] expected";
                }
                return null;
            };
    
            /**
             * Creates a FloatSlice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.FloatSlice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.FloatSlice} FloatSlice
             */
            FloatSlice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.FloatSlice)
                    return object;
                var message = new $root.message.FloatSlice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.FloatSlice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        message.Val[i] = Number(object.Val[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a FloatSlice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.FloatSlice
             * @static
             * @param {message.FloatSlice} message FloatSlice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatSlice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        object.Val[j] = options.json && !isFinite(message.Val[j]) ? String(message.Val[j]) : message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this FloatSlice to JSON.
             * @function toJSON
             * @memberof message.FloatSlice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatSlice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return FloatSlice;
        })();
    
        message.Double = (function() {
    
            /**
             * Properties of a Double.
             * @memberof message
             * @interface IDouble
             * @property {number|null} [Val] Double Val
             */
    
            /**
             * Constructs a new Double.
             * @memberof message
             * @classdesc Represents a Double.
             * @implements IDouble
             * @constructor
             * @param {message.IDouble=} [properties] Properties to set
             */
            function Double(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Double Val.
             * @member {number} Val
             * @memberof message.Double
             * @instance
             */
            Double.prototype.Val = 0;
    
            /**
             * Creates a new Double instance using the specified properties.
             * @function create
             * @memberof message.Double
             * @static
             * @param {message.IDouble=} [properties] Properties to set
             * @returns {message.Double} Double instance
             */
            Double.create = function create(properties) {
                return new Double(properties);
            };
    
            /**
             * Encodes the specified Double message. Does not implicitly {@link message.Double.verify|verify} messages.
             * @function encode
             * @memberof message.Double
             * @static
             * @param {message.IDouble} message Double message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Double.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified Double message, length delimited. Does not implicitly {@link message.Double.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Double
             * @static
             * @param {message.IDouble} message Double message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Double.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Double message from the specified reader or buffer.
             * @function decode
             * @memberof message.Double
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Double} Double
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Double.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Double();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Double message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Double
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Double} Double
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Double.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Double message.
             * @function verify
             * @memberof message.Double
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Double.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (typeof message.Val !== "number")
                        return "Val: number expected";
                return null;
            };
    
            /**
             * Creates a Double message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Double
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Double} Double
             */
            Double.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Double)
                    return object;
                var message = new $root.message.Double();
                if (object.Val != null)
                    message.Val = Number(object.Val);
                return message;
            };
    
            /**
             * Creates a plain object from a Double message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Double
             * @static
             * @param {message.Double} message Double
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Double.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = 0;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    object.Val = options.json && !isFinite(message.Val) ? String(message.Val) : message.Val;
                return object;
            };
    
            /**
             * Converts this Double to JSON.
             * @function toJSON
             * @memberof message.Double
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Double.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Double;
        })();
    
        message.DoubleSlice = (function() {
    
            /**
             * Properties of a DoubleSlice.
             * @memberof message
             * @interface IDoubleSlice
             * @property {Array.<number>|null} [Val] DoubleSlice Val
             */
    
            /**
             * Constructs a new DoubleSlice.
             * @memberof message
             * @classdesc Represents a DoubleSlice.
             * @implements IDoubleSlice
             * @constructor
             * @param {message.IDoubleSlice=} [properties] Properties to set
             */
            function DoubleSlice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DoubleSlice Val.
             * @member {Array.<number>} Val
             * @memberof message.DoubleSlice
             * @instance
             */
            DoubleSlice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new DoubleSlice instance using the specified properties.
             * @function create
             * @memberof message.DoubleSlice
             * @static
             * @param {message.IDoubleSlice=} [properties] Properties to set
             * @returns {message.DoubleSlice} DoubleSlice instance
             */
            DoubleSlice.create = function create(properties) {
                return new DoubleSlice(properties);
            };
    
            /**
             * Encodes the specified DoubleSlice message. Does not implicitly {@link message.DoubleSlice.verify|verify} messages.
             * @function encode
             * @memberof message.DoubleSlice
             * @static
             * @param {message.IDoubleSlice} message DoubleSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleSlice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.double(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified DoubleSlice message, length delimited. Does not implicitly {@link message.DoubleSlice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.DoubleSlice
             * @static
             * @param {message.IDoubleSlice} message DoubleSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleSlice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DoubleSlice message from the specified reader or buffer.
             * @function decode
             * @memberof message.DoubleSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.DoubleSlice} DoubleSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleSlice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.DoubleSlice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.double());
                        } else
                            message.Val.push(reader.double());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DoubleSlice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.DoubleSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.DoubleSlice} DoubleSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleSlice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DoubleSlice message.
             * @function verify
             * @memberof message.DoubleSlice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleSlice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (typeof message.Val[i] !== "number")
                            return "Val: number[] expected";
                }
                return null;
            };
    
            /**
             * Creates a DoubleSlice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.DoubleSlice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.DoubleSlice} DoubleSlice
             */
            DoubleSlice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.DoubleSlice)
                    return object;
                var message = new $root.message.DoubleSlice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.DoubleSlice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        message.Val[i] = Number(object.Val[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DoubleSlice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.DoubleSlice
             * @static
             * @param {message.DoubleSlice} message DoubleSlice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleSlice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        object.Val[j] = options.json && !isFinite(message.Val[j]) ? String(message.Val[j]) : message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this DoubleSlice to JSON.
             * @function toJSON
             * @memberof message.DoubleSlice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleSlice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DoubleSlice;
        })();
    
        message.String = (function() {
    
            /**
             * Properties of a String.
             * @memberof message
             * @interface IString
             * @property {string|null} [Val] String Val
             */
    
            /**
             * Constructs a new String.
             * @memberof message
             * @classdesc Represents a String.
             * @implements IString
             * @constructor
             * @param {message.IString=} [properties] Properties to set
             */
            function String(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * String Val.
             * @member {string} Val
             * @memberof message.String
             * @instance
             */
            String.prototype.Val = "";
    
            /**
             * Creates a new String instance using the specified properties.
             * @function create
             * @memberof message.String
             * @static
             * @param {message.IString=} [properties] Properties to set
             * @returns {message.String} String instance
             */
            String.create = function create(properties) {
                return new String(properties);
            };
    
            /**
             * Encodes the specified String message. Does not implicitly {@link message.String.verify|verify} messages.
             * @function encode
             * @memberof message.String
             * @static
             * @param {message.IString} message String message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            String.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified String message, length delimited. Does not implicitly {@link message.String.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.String
             * @static
             * @param {message.IString} message String message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            String.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a String message from the specified reader or buffer.
             * @function decode
             * @memberof message.String
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.String} String
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            String.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.String();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a String message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.String
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.String} String
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            String.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a String message.
             * @function verify
             * @memberof message.String
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            String.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (!$util.isString(message.Val))
                        return "Val: string expected";
                return null;
            };
    
            /**
             * Creates a String message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.String
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.String} String
             */
            String.fromObject = function fromObject(object) {
                if (object instanceof $root.message.String)
                    return object;
                var message = new $root.message.String();
                if (object.Val != null)
                    message.Val = String(object.Val);
                return message;
            };
    
            /**
             * Creates a plain object from a String message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.String
             * @static
             * @param {message.String} message String
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            String.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = "";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    object.Val = message.Val;
                return object;
            };
    
            /**
             * Converts this String to JSON.
             * @function toJSON
             * @memberof message.String
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            String.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return String;
        })();
    
        message.StringSlice = (function() {
    
            /**
             * Properties of a StringSlice.
             * @memberof message
             * @interface IStringSlice
             * @property {Array.<string>|null} [Val] StringSlice Val
             */
    
            /**
             * Constructs a new StringSlice.
             * @memberof message
             * @classdesc Represents a StringSlice.
             * @implements IStringSlice
             * @constructor
             * @param {message.IStringSlice=} [properties] Properties to set
             */
            function StringSlice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * StringSlice Val.
             * @member {Array.<string>} Val
             * @memberof message.StringSlice
             * @instance
             */
            StringSlice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new StringSlice instance using the specified properties.
             * @function create
             * @memberof message.StringSlice
             * @static
             * @param {message.IStringSlice=} [properties] Properties to set
             * @returns {message.StringSlice} StringSlice instance
             */
            StringSlice.create = function create(properties) {
                return new StringSlice(properties);
            };
    
            /**
             * Encodes the specified StringSlice message. Does not implicitly {@link message.StringSlice.verify|verify} messages.
             * @function encode
             * @memberof message.StringSlice
             * @static
             * @param {message.IStringSlice} message StringSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringSlice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length)
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.Val[i]);
                return writer;
            };
    
            /**
             * Encodes the specified StringSlice message, length delimited. Does not implicitly {@link message.StringSlice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.StringSlice
             * @static
             * @param {message.IStringSlice} message StringSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringSlice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a StringSlice message from the specified reader or buffer.
             * @function decode
             * @memberof message.StringSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.StringSlice} StringSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringSlice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StringSlice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        message.Val.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a StringSlice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.StringSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.StringSlice} StringSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringSlice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a StringSlice message.
             * @function verify
             * @memberof message.StringSlice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringSlice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (!$util.isString(message.Val[i]))
                            return "Val: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a StringSlice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.StringSlice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.StringSlice} StringSlice
             */
            StringSlice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.StringSlice)
                    return object;
                var message = new $root.message.StringSlice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.StringSlice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        message.Val[i] = String(object.Val[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a StringSlice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.StringSlice
             * @static
             * @param {message.StringSlice} message StringSlice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringSlice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        object.Val[j] = message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this StringSlice to JSON.
             * @function toJSON
             * @memberof message.StringSlice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringSlice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return StringSlice;
        })();
    
        message.Bool = (function() {
    
            /**
             * Properties of a Bool.
             * @memberof message
             * @interface IBool
             * @property {boolean|null} [Val] Bool Val
             */
    
            /**
             * Constructs a new Bool.
             * @memberof message
             * @classdesc Represents a Bool.
             * @implements IBool
             * @constructor
             * @param {message.IBool=} [properties] Properties to set
             */
            function Bool(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Bool Val.
             * @member {boolean} Val
             * @memberof message.Bool
             * @instance
             */
            Bool.prototype.Val = false;
    
            /**
             * Creates a new Bool instance using the specified properties.
             * @function create
             * @memberof message.Bool
             * @static
             * @param {message.IBool=} [properties] Properties to set
             * @returns {message.Bool} Bool instance
             */
            Bool.create = function create(properties) {
                return new Bool(properties);
            };
    
            /**
             * Encodes the specified Bool message. Does not implicitly {@link message.Bool.verify|verify} messages.
             * @function encode
             * @memberof message.Bool
             * @static
             * @param {message.IBool} message Bool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Bool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.hasOwnProperty("Val"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Val);
                return writer;
            };
    
            /**
             * Encodes the specified Bool message, length delimited. Does not implicitly {@link message.Bool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Bool
             * @static
             * @param {message.IBool} message Bool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Bool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Bool message from the specified reader or buffer.
             * @function decode
             * @memberof message.Bool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Bool} Bool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Bool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Bool();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Val = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Bool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Bool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Bool} Bool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Bool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Bool message.
             * @function verify
             * @memberof message.Bool
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Bool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val"))
                    if (typeof message.Val !== "boolean")
                        return "Val: boolean expected";
                return null;
            };
    
            /**
             * Creates a Bool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Bool
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Bool} Bool
             */
            Bool.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Bool)
                    return object;
                var message = new $root.message.Bool();
                if (object.Val != null)
                    message.Val = Boolean(object.Val);
                return message;
            };
    
            /**
             * Creates a plain object from a Bool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Bool
             * @static
             * @param {message.Bool} message Bool
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Bool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Val = false;
                if (message.Val != null && message.hasOwnProperty("Val"))
                    object.Val = message.Val;
                return object;
            };
    
            /**
             * Converts this Bool to JSON.
             * @function toJSON
             * @memberof message.Bool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Bool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Bool;
        })();
    
        message.BoolSlice = (function() {
    
            /**
             * Properties of a BoolSlice.
             * @memberof message
             * @interface IBoolSlice
             * @property {Array.<boolean>|null} [Val] BoolSlice Val
             */
    
            /**
             * Constructs a new BoolSlice.
             * @memberof message
             * @classdesc Represents a BoolSlice.
             * @implements IBoolSlice
             * @constructor
             * @param {message.IBoolSlice=} [properties] Properties to set
             */
            function BoolSlice(properties) {
                this.Val = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BoolSlice Val.
             * @member {Array.<boolean>} Val
             * @memberof message.BoolSlice
             * @instance
             */
            BoolSlice.prototype.Val = $util.emptyArray;
    
            /**
             * Creates a new BoolSlice instance using the specified properties.
             * @function create
             * @memberof message.BoolSlice
             * @static
             * @param {message.IBoolSlice=} [properties] Properties to set
             * @returns {message.BoolSlice} BoolSlice instance
             */
            BoolSlice.create = function create(properties) {
                return new BoolSlice(properties);
            };
    
            /**
             * Encodes the specified BoolSlice message. Does not implicitly {@link message.BoolSlice.verify|verify} messages.
             * @function encode
             * @memberof message.BoolSlice
             * @static
             * @param {message.IBoolSlice} message BoolSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolSlice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Val != null && message.Val.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Val.length; ++i)
                        writer.bool(message.Val[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified BoolSlice message, length delimited. Does not implicitly {@link message.BoolSlice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.BoolSlice
             * @static
             * @param {message.IBoolSlice} message BoolSlice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolSlice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BoolSlice message from the specified reader or buffer.
             * @function decode
             * @memberof message.BoolSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.BoolSlice} BoolSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolSlice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.BoolSlice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Val && message.Val.length))
                            message.Val = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Val.push(reader.bool());
                        } else
                            message.Val.push(reader.bool());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BoolSlice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.BoolSlice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.BoolSlice} BoolSlice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolSlice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BoolSlice message.
             * @function verify
             * @memberof message.BoolSlice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolSlice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Val != null && message.hasOwnProperty("Val")) {
                    if (!Array.isArray(message.Val))
                        return "Val: array expected";
                    for (var i = 0; i < message.Val.length; ++i)
                        if (typeof message.Val[i] !== "boolean")
                            return "Val: boolean[] expected";
                }
                return null;
            };
    
            /**
             * Creates a BoolSlice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.BoolSlice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.BoolSlice} BoolSlice
             */
            BoolSlice.fromObject = function fromObject(object) {
                if (object instanceof $root.message.BoolSlice)
                    return object;
                var message = new $root.message.BoolSlice();
                if (object.Val) {
                    if (!Array.isArray(object.Val))
                        throw TypeError(".message.BoolSlice.Val: array expected");
                    message.Val = [];
                    for (var i = 0; i < object.Val.length; ++i)
                        message.Val[i] = Boolean(object.Val[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BoolSlice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.BoolSlice
             * @static
             * @param {message.BoolSlice} message BoolSlice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolSlice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Val = [];
                if (message.Val && message.Val.length) {
                    object.Val = [];
                    for (var j = 0; j < message.Val.length; ++j)
                        object.Val[j] = message.Val[j];
                }
                return object;
            };
    
            /**
             * Converts this BoolSlice to JSON.
             * @function toJSON
             * @memberof message.BoolSlice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolSlice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BoolSlice;
        })();
    
        return message;
    })();

    return $root;
});
