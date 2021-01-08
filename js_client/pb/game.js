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
                if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.X);
                if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.Y);
                if (message.Z != null && Object.hasOwnProperty.call(message, "Z"))
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
    
        message.C_Z_Move = (function() {
    
            /**
             * Properties of a C_Z_Move.
             * @memberof message
             * @interface IC_Z_Move
             * @property {message.IIpacket|null} [PacketHead] C_Z_Move PacketHead
             * @property {message.C_Z_Move.IMove|null} [move] C_Z_Move move
             */
    
            /**
             * Constructs a new C_Z_Move.
             * @memberof message
             * @classdesc Represents a C_Z_Move.
             * @implements IC_Z_Move
             * @constructor
             * @param {message.IC_Z_Move=} [properties] Properties to set
             */
            function C_Z_Move(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_Z_Move PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_Z_Move
             * @instance
             */
            C_Z_Move.prototype.PacketHead = null;
    
            /**
             * C_Z_Move move.
             * @member {message.C_Z_Move.IMove|null|undefined} move
             * @memberof message.C_Z_Move
             * @instance
             */
            C_Z_Move.prototype.move = null;
    
            /**
             * Creates a new C_Z_Move instance using the specified properties.
             * @function create
             * @memberof message.C_Z_Move
             * @static
             * @param {message.IC_Z_Move=} [properties] Properties to set
             * @returns {message.C_Z_Move} C_Z_Move instance
             */
            C_Z_Move.create = function create(properties) {
                return new C_Z_Move(properties);
            };
    
            /**
             * Encodes the specified C_Z_Move message. Does not implicitly {@link message.C_Z_Move.verify|verify} messages.
             * @function encode
             * @memberof message.C_Z_Move
             * @static
             * @param {message.IC_Z_Move} message C_Z_Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Z_Move.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && Object.hasOwnProperty.call(message, "PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.move != null && Object.hasOwnProperty.call(message, "move"))
                    $root.message.C_Z_Move.Move.encode(message.move, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified C_Z_Move message, length delimited. Does not implicitly {@link message.C_Z_Move.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_Z_Move
             * @static
             * @param {message.IC_Z_Move} message C_Z_Move message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Z_Move.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_Z_Move message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_Z_Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_Z_Move} C_Z_Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Z_Move.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_Z_Move();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.move = $root.message.C_Z_Move.Move.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_Z_Move message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_Z_Move
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_Z_Move} C_Z_Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Z_Move.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_Z_Move message.
             * @function verify
             * @memberof message.C_Z_Move
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_Z_Move.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.move != null && message.hasOwnProperty("move")) {
                    var error = $root.message.C_Z_Move.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
                return null;
            };
    
            /**
             * Creates a C_Z_Move message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_Z_Move
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_Z_Move} C_Z_Move
             */
            C_Z_Move.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_Z_Move)
                    return object;
                var message = new $root.message.C_Z_Move();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_Z_Move.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.move != null) {
                    if (typeof object.move !== "object")
                        throw TypeError(".message.C_Z_Move.move: object expected");
                    message.move = $root.message.C_Z_Move.Move.fromObject(object.move);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a C_Z_Move message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_Z_Move
             * @static
             * @param {message.C_Z_Move} message C_Z_Move
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_Z_Move.toObject = function toObject(message, options) {
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
                    object.move = $root.message.C_Z_Move.Move.toObject(message.move, options);
                return object;
            };
    
            /**
             * Converts this C_Z_Move to JSON.
             * @function toJSON
             * @memberof message.C_Z_Move
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_Z_Move.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            C_Z_Move.Move = (function() {
    
                /**
                 * Properties of a Move.
                 * @memberof message.C_Z_Move
                 * @interface IMove
                 * @property {number|null} [Mode] Move Mode
                 * @property {message.C_Z_Move.Move.INormal|null} [normal] Move normal
                 */
    
                /**
                 * Constructs a new Move.
                 * @memberof message.C_Z_Move
                 * @classdesc Represents a Move.
                 * @implements IMove
                 * @constructor
                 * @param {message.C_Z_Move.IMove=} [properties] Properties to set
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
                 * @memberof message.C_Z_Move.Move
                 * @instance
                 */
                Move.prototype.Mode = 0;
    
                /**
                 * Move normal.
                 * @member {message.C_Z_Move.Move.INormal|null|undefined} normal
                 * @memberof message.C_Z_Move.Move
                 * @instance
                 */
                Move.prototype.normal = null;
    
                /**
                 * Creates a new Move instance using the specified properties.
                 * @function create
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {message.C_Z_Move.IMove=} [properties] Properties to set
                 * @returns {message.C_Z_Move.Move} Move instance
                 */
                Move.create = function create(properties) {
                    return new Move(properties);
                };
    
                /**
                 * Encodes the specified Move message. Does not implicitly {@link message.C_Z_Move.Move.verify|verify} messages.
                 * @function encode
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {message.C_Z_Move.IMove} message Move message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Move.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Mode != null && Object.hasOwnProperty.call(message, "Mode"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Mode);
                    if (message.normal != null && Object.hasOwnProperty.call(message, "normal"))
                        $root.message.C_Z_Move.Move.Normal.encode(message.normal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Move message, length delimited. Does not implicitly {@link message.C_Z_Move.Move.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {message.C_Z_Move.IMove} message Move message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Move.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Move message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {message.C_Z_Move.Move} Move
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Move.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_Z_Move.Move();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Mode = reader.int32();
                            break;
                        case 2:
                            message.normal = $root.message.C_Z_Move.Move.Normal.decode(reader, reader.uint32());
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
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {message.C_Z_Move.Move} Move
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
                 * @memberof message.C_Z_Move.Move
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
                        var error = $root.message.C_Z_Move.Move.Normal.verify(message.normal);
                        if (error)
                            return "normal." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a Move message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {message.C_Z_Move.Move} Move
                 */
                Move.fromObject = function fromObject(object) {
                    if (object instanceof $root.message.C_Z_Move.Move)
                        return object;
                    var message = new $root.message.C_Z_Move.Move();
                    if (object.Mode != null)
                        message.Mode = object.Mode | 0;
                    if (object.normal != null) {
                        if (typeof object.normal !== "object")
                            throw TypeError(".message.C_Z_Move.Move.normal: object expected");
                        message.normal = $root.message.C_Z_Move.Move.Normal.fromObject(object.normal);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Move message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.C_Z_Move.Move
                 * @static
                 * @param {message.C_Z_Move.Move} message Move
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
                    }
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        object.Mode = message.Mode;
                    if (message.normal != null && message.hasOwnProperty("normal"))
                        object.normal = $root.message.C_Z_Move.Move.Normal.toObject(message.normal, options);
                    return object;
                };
    
                /**
                 * Converts this Move to JSON.
                 * @function toJSON
                 * @memberof message.C_Z_Move.Move
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Move.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Move.Normal = (function() {
    
                    /**
                     * Properties of a Normal.
                     * @memberof message.C_Z_Move.Move
                     * @interface INormal
                     * @property {message.IPoint3F|null} [Pos] Normal Pos
                     * @property {number|null} [Yaw] Normal Yaw
                     * @property {number|null} [Duration] Normal Duration
                     */
    
                    /**
                     * Constructs a new Normal.
                     * @memberof message.C_Z_Move.Move
                     * @classdesc Represents a Normal.
                     * @implements INormal
                     * @constructor
                     * @param {message.C_Z_Move.Move.INormal=} [properties] Properties to set
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
                     * @memberof message.C_Z_Move.Move.Normal
                     * @instance
                     */
                    Normal.prototype.Pos = null;
    
                    /**
                     * Normal Yaw.
                     * @member {number} Yaw
                     * @memberof message.C_Z_Move.Move.Normal
                     * @instance
                     */
                    Normal.prototype.Yaw = 0;
    
                    /**
                     * Normal Duration.
                     * @member {number} Duration
                     * @memberof message.C_Z_Move.Move.Normal
                     * @instance
                     */
                    Normal.prototype.Duration = 0;
    
                    /**
                     * Creates a new Normal instance using the specified properties.
                     * @function create
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {message.C_Z_Move.Move.INormal=} [properties] Properties to set
                     * @returns {message.C_Z_Move.Move.Normal} Normal instance
                     */
                    Normal.create = function create(properties) {
                        return new Normal(properties);
                    };
    
                    /**
                     * Encodes the specified Normal message. Does not implicitly {@link message.C_Z_Move.Move.Normal.verify|verify} messages.
                     * @function encode
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {message.C_Z_Move.Move.INormal} message Normal message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Normal.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
                            $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.Yaw != null && Object.hasOwnProperty.call(message, "Yaw"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Yaw);
                        if (message.Duration != null && Object.hasOwnProperty.call(message, "Duration"))
                            writer.uint32(/* id 3, wireType 5 =*/29).float(message.Duration);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Normal message, length delimited. Does not implicitly {@link message.C_Z_Move.Move.Normal.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {message.C_Z_Move.Move.INormal} message Normal message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Normal.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Normal message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.C_Z_Move.Move.Normal} Normal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Normal.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_Z_Move.Move.Normal();
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
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.C_Z_Move.Move.Normal} Normal
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
                     * @memberof message.C_Z_Move.Move.Normal
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
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.C_Z_Move.Move.Normal} Normal
                     */
                    Normal.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.C_Z_Move.Move.Normal)
                            return object;
                        var message = new $root.message.C_Z_Move.Move.Normal();
                        if (object.Pos != null) {
                            if (typeof object.Pos !== "object")
                                throw TypeError(".message.C_Z_Move.Move.Normal.Pos: object expected");
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
                     * @memberof message.C_Z_Move.Move.Normal
                     * @static
                     * @param {message.C_Z_Move.Move.Normal} message Normal
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
                     * @memberof message.C_Z_Move.Move.Normal
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Normal.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Normal;
                })();
    
                return Move;
            })();
    
            return C_Z_Move;
        })();
    
        message.C_Z_Skill = (function() {
    
            /**
             * Properties of a C_Z_Skill.
             * @memberof message
             * @interface IC_Z_Skill
             * @property {message.IIpacket|null} [PacketHead] C_Z_Skill PacketHead
             * @property {number|null} [SkillId] C_Z_Skill SkillId
             * @property {number|Long|null} [TargetId] C_Z_Skill TargetId
             */
    
            /**
             * Constructs a new C_Z_Skill.
             * @memberof message
             * @classdesc Represents a C_Z_Skill.
             * @implements IC_Z_Skill
             * @constructor
             * @param {message.IC_Z_Skill=} [properties] Properties to set
             */
            function C_Z_Skill(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_Z_Skill PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_Z_Skill
             * @instance
             */
            C_Z_Skill.prototype.PacketHead = null;
    
            /**
             * C_Z_Skill SkillId.
             * @member {number} SkillId
             * @memberof message.C_Z_Skill
             * @instance
             */
            C_Z_Skill.prototype.SkillId = 0;
    
            /**
             * C_Z_Skill TargetId.
             * @member {number|Long} TargetId
             * @memberof message.C_Z_Skill
             * @instance
             */
            C_Z_Skill.prototype.TargetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Creates a new C_Z_Skill instance using the specified properties.
             * @function create
             * @memberof message.C_Z_Skill
             * @static
             * @param {message.IC_Z_Skill=} [properties] Properties to set
             * @returns {message.C_Z_Skill} C_Z_Skill instance
             */
            C_Z_Skill.create = function create(properties) {
                return new C_Z_Skill(properties);
            };
    
            /**
             * Encodes the specified C_Z_Skill message. Does not implicitly {@link message.C_Z_Skill.verify|verify} messages.
             * @function encode
             * @memberof message.C_Z_Skill
             * @static
             * @param {message.IC_Z_Skill} message C_Z_Skill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Z_Skill.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && Object.hasOwnProperty.call(message, "PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.SkillId != null && Object.hasOwnProperty.call(message, "SkillId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SkillId);
                if (message.TargetId != null && Object.hasOwnProperty.call(message, "TargetId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.TargetId);
                return writer;
            };
    
            /**
             * Encodes the specified C_Z_Skill message, length delimited. Does not implicitly {@link message.C_Z_Skill.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_Z_Skill
             * @static
             * @param {message.IC_Z_Skill} message C_Z_Skill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Z_Skill.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_Z_Skill message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_Z_Skill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_Z_Skill} C_Z_Skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Z_Skill.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_Z_Skill();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.SkillId = reader.int32();
                        break;
                    case 3:
                        message.TargetId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_Z_Skill message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_Z_Skill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_Z_Skill} C_Z_Skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Z_Skill.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_Z_Skill message.
             * @function verify
             * @memberof message.C_Z_Skill
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_Z_Skill.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.SkillId != null && message.hasOwnProperty("SkillId"))
                    if (!$util.isInteger(message.SkillId))
                        return "SkillId: integer expected";
                if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                    if (!$util.isInteger(message.TargetId) && !(message.TargetId && $util.isInteger(message.TargetId.low) && $util.isInteger(message.TargetId.high)))
                        return "TargetId: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a C_Z_Skill message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_Z_Skill
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_Z_Skill} C_Z_Skill
             */
            C_Z_Skill.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_Z_Skill)
                    return object;
                var message = new $root.message.C_Z_Skill();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_Z_Skill.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.SkillId != null)
                    message.SkillId = object.SkillId | 0;
                if (object.TargetId != null)
                    if ($util.Long)
                        (message.TargetId = $util.Long.fromValue(object.TargetId)).unsigned = false;
                    else if (typeof object.TargetId === "string")
                        message.TargetId = parseInt(object.TargetId, 10);
                    else if (typeof object.TargetId === "number")
                        message.TargetId = object.TargetId;
                    else if (typeof object.TargetId === "object")
                        message.TargetId = new $util.LongBits(object.TargetId.low >>> 0, object.TargetId.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a C_Z_Skill message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_Z_Skill
             * @static
             * @param {message.C_Z_Skill} message C_Z_Skill
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_Z_Skill.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.SkillId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.TargetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.TargetId = options.longs === String ? "0" : 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.SkillId != null && message.hasOwnProperty("SkillId"))
                    object.SkillId = message.SkillId;
                if (message.TargetId != null && message.hasOwnProperty("TargetId"))
                    if (typeof message.TargetId === "number")
                        object.TargetId = options.longs === String ? String(message.TargetId) : message.TargetId;
                    else
                        object.TargetId = options.longs === String ? $util.Long.prototype.toString.call(message.TargetId) : options.longs === Number ? new $util.LongBits(message.TargetId.low >>> 0, message.TargetId.high >>> 0).toNumber() : message.TargetId;
                return object;
            };
    
            /**
             * Converts this C_Z_Skill to JSON.
             * @function toJSON
             * @memberof message.C_Z_Skill
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_Z_Skill.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_Z_Skill;
        })();
    
        message.Z_C_LoginMap = (function() {
    
            /**
             * Properties of a Z_C_LoginMap.
             * @memberof message
             * @interface IZ_C_LoginMap
             * @property {message.IIpacket|null} [PacketHead] Z_C_LoginMap PacketHead
             * @property {number|Long|null} [Id] Z_C_LoginMap Id
             * @property {message.IPoint3F|null} [Pos] Z_C_LoginMap Pos
             * @property {number|null} [Rotation] Z_C_LoginMap Rotation
             */
    
            /**
             * Constructs a new Z_C_LoginMap.
             * @memberof message
             * @classdesc Represents a Z_C_LoginMap.
             * @implements IZ_C_LoginMap
             * @constructor
             * @param {message.IZ_C_LoginMap=} [properties] Properties to set
             */
            function Z_C_LoginMap(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Z_C_LoginMap PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.Z_C_LoginMap
             * @instance
             */
            Z_C_LoginMap.prototype.PacketHead = null;
    
            /**
             * Z_C_LoginMap Id.
             * @member {number|Long} Id
             * @memberof message.Z_C_LoginMap
             * @instance
             */
            Z_C_LoginMap.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Z_C_LoginMap Pos.
             * @member {message.IPoint3F|null|undefined} Pos
             * @memberof message.Z_C_LoginMap
             * @instance
             */
            Z_C_LoginMap.prototype.Pos = null;
    
            /**
             * Z_C_LoginMap Rotation.
             * @member {number} Rotation
             * @memberof message.Z_C_LoginMap
             * @instance
             */
            Z_C_LoginMap.prototype.Rotation = 0;
    
            /**
             * Creates a new Z_C_LoginMap instance using the specified properties.
             * @function create
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {message.IZ_C_LoginMap=} [properties] Properties to set
             * @returns {message.Z_C_LoginMap} Z_C_LoginMap instance
             */
            Z_C_LoginMap.create = function create(properties) {
                return new Z_C_LoginMap(properties);
            };
    
            /**
             * Encodes the specified Z_C_LoginMap message. Does not implicitly {@link message.Z_C_LoginMap.verify|verify} messages.
             * @function encode
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {message.IZ_C_LoginMap} message Z_C_LoginMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Z_C_LoginMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && Object.hasOwnProperty.call(message, "PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Id);
                if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
                    $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.Rotation != null && Object.hasOwnProperty.call(message, "Rotation"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.Rotation);
                return writer;
            };
    
            /**
             * Encodes the specified Z_C_LoginMap message, length delimited. Does not implicitly {@link message.Z_C_LoginMap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {message.IZ_C_LoginMap} message Z_C_LoginMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Z_C_LoginMap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Z_C_LoginMap message from the specified reader or buffer.
             * @function decode
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Z_C_LoginMap} Z_C_LoginMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Z_C_LoginMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_LoginMap();
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
             * Decodes a Z_C_LoginMap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Z_C_LoginMap} Z_C_LoginMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Z_C_LoginMap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Z_C_LoginMap message.
             * @function verify
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Z_C_LoginMap.verify = function verify(message) {
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
             * Creates a Z_C_LoginMap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Z_C_LoginMap} Z_C_LoginMap
             */
            Z_C_LoginMap.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Z_C_LoginMap)
                    return object;
                var message = new $root.message.Z_C_LoginMap();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.Z_C_LoginMap.PacketHead: object expected");
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
                        throw TypeError(".message.Z_C_LoginMap.Pos: object expected");
                    message.Pos = $root.message.Point3F.fromObject(object.Pos);
                }
                if (object.Rotation != null)
                    message.Rotation = Number(object.Rotation);
                return message;
            };
    
            /**
             * Creates a plain object from a Z_C_LoginMap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Z_C_LoginMap
             * @static
             * @param {message.Z_C_LoginMap} message Z_C_LoginMap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Z_C_LoginMap.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Id = options.longs === String ? "0" : 0;
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
             * Converts this Z_C_LoginMap to JSON.
             * @function toJSON
             * @memberof message.Z_C_LoginMap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Z_C_LoginMap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Z_C_LoginMap;
        })();
    
        message.Z_C_ENTITY = (function() {
    
            /**
             * Properties of a Z_C_ENTITY.
             * @memberof message
             * @interface IZ_C_ENTITY
             * @property {message.IIpacket|null} [PacketHead] Z_C_ENTITY PacketHead
             * @property {Array.<message.Z_C_ENTITY.IEntity>|null} [EntityInfo] Z_C_ENTITY EntityInfo
             */
    
            /**
             * Constructs a new Z_C_ENTITY.
             * @memberof message
             * @classdesc Represents a Z_C_ENTITY.
             * @implements IZ_C_ENTITY
             * @constructor
             * @param {message.IZ_C_ENTITY=} [properties] Properties to set
             */
            function Z_C_ENTITY(properties) {
                this.EntityInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Z_C_ENTITY PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.Z_C_ENTITY
             * @instance
             */
            Z_C_ENTITY.prototype.PacketHead = null;
    
            /**
             * Z_C_ENTITY EntityInfo.
             * @member {Array.<message.Z_C_ENTITY.IEntity>} EntityInfo
             * @memberof message.Z_C_ENTITY
             * @instance
             */
            Z_C_ENTITY.prototype.EntityInfo = $util.emptyArray;
    
            /**
             * Creates a new Z_C_ENTITY instance using the specified properties.
             * @function create
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {message.IZ_C_ENTITY=} [properties] Properties to set
             * @returns {message.Z_C_ENTITY} Z_C_ENTITY instance
             */
            Z_C_ENTITY.create = function create(properties) {
                return new Z_C_ENTITY(properties);
            };
    
            /**
             * Encodes the specified Z_C_ENTITY message. Does not implicitly {@link message.Z_C_ENTITY.verify|verify} messages.
             * @function encode
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {message.IZ_C_ENTITY} message Z_C_ENTITY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Z_C_ENTITY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && Object.hasOwnProperty.call(message, "PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.EntityInfo != null && message.EntityInfo.length)
                    for (var i = 0; i < message.EntityInfo.length; ++i)
                        $root.message.Z_C_ENTITY.Entity.encode(message.EntityInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Z_C_ENTITY message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {message.IZ_C_ENTITY} message Z_C_ENTITY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Z_C_ENTITY.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Z_C_ENTITY message from the specified reader or buffer.
             * @function decode
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.Z_C_ENTITY} Z_C_ENTITY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Z_C_ENTITY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.EntityInfo && message.EntityInfo.length))
                            message.EntityInfo = [];
                        message.EntityInfo.push($root.message.Z_C_ENTITY.Entity.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Z_C_ENTITY message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.Z_C_ENTITY} Z_C_ENTITY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Z_C_ENTITY.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Z_C_ENTITY message.
             * @function verify
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Z_C_ENTITY.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.EntityInfo != null && message.hasOwnProperty("EntityInfo")) {
                    if (!Array.isArray(message.EntityInfo))
                        return "EntityInfo: array expected";
                    for (var i = 0; i < message.EntityInfo.length; ++i) {
                        var error = $root.message.Z_C_ENTITY.Entity.verify(message.EntityInfo[i]);
                        if (error)
                            return "EntityInfo." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Z_C_ENTITY message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.Z_C_ENTITY} Z_C_ENTITY
             */
            Z_C_ENTITY.fromObject = function fromObject(object) {
                if (object instanceof $root.message.Z_C_ENTITY)
                    return object;
                var message = new $root.message.Z_C_ENTITY();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.Z_C_ENTITY.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.EntityInfo) {
                    if (!Array.isArray(object.EntityInfo))
                        throw TypeError(".message.Z_C_ENTITY.EntityInfo: array expected");
                    message.EntityInfo = [];
                    for (var i = 0; i < object.EntityInfo.length; ++i) {
                        if (typeof object.EntityInfo[i] !== "object")
                            throw TypeError(".message.Z_C_ENTITY.EntityInfo: object expected");
                        message.EntityInfo[i] = $root.message.Z_C_ENTITY.Entity.fromObject(object.EntityInfo[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Z_C_ENTITY message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.Z_C_ENTITY
             * @static
             * @param {message.Z_C_ENTITY} message Z_C_ENTITY
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Z_C_ENTITY.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.EntityInfo = [];
                if (options.defaults)
                    object.PacketHead = null;
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.EntityInfo && message.EntityInfo.length) {
                    object.EntityInfo = [];
                    for (var j = 0; j < message.EntityInfo.length; ++j)
                        object.EntityInfo[j] = $root.message.Z_C_ENTITY.Entity.toObject(message.EntityInfo[j], options);
                }
                return object;
            };
    
            /**
             * Converts this Z_C_ENTITY to JSON.
             * @function toJSON
             * @memberof message.Z_C_ENTITY
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Z_C_ENTITY.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            Z_C_ENTITY.Entity = (function() {
    
                /**
                 * Properties of an Entity.
                 * @memberof message.Z_C_ENTITY
                 * @interface IEntity
                 * @property {number|Long|null} [Id] Entity Id
                 * @property {message.Z_C_ENTITY.Entity.IDataMask|null} [Data] Entity Data
                 * @property {message.Z_C_ENTITY.Entity.IMoveMask|null} [Move] Entity Move
                 * @property {message.Z_C_ENTITY.Entity.IStatsMask|null} [Stats] Entity Stats
                 */
    
                /**
                 * Constructs a new Entity.
                 * @memberof message.Z_C_ENTITY
                 * @classdesc Represents an Entity.
                 * @implements IEntity
                 * @constructor
                 * @param {message.Z_C_ENTITY.IEntity=} [properties] Properties to set
                 */
                function Entity(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Entity Id.
                 * @member {number|Long} Id
                 * @memberof message.Z_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Entity Data.
                 * @member {message.Z_C_ENTITY.Entity.IDataMask|null|undefined} Data
                 * @memberof message.Z_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Data = null;
    
                /**
                 * Entity Move.
                 * @member {message.Z_C_ENTITY.Entity.IMoveMask|null|undefined} Move
                 * @memberof message.Z_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Move = null;
    
                /**
                 * Entity Stats.
                 * @member {message.Z_C_ENTITY.Entity.IStatsMask|null|undefined} Stats
                 * @memberof message.Z_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Stats = null;
    
                /**
                 * Creates a new Entity instance using the specified properties.
                 * @function create
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {message.Z_C_ENTITY.IEntity=} [properties] Properties to set
                 * @returns {message.Z_C_ENTITY.Entity} Entity instance
                 */
                Entity.create = function create(properties) {
                    return new Entity(properties);
                };
    
                /**
                 * Encodes the specified Entity message. Does not implicitly {@link message.Z_C_ENTITY.Entity.verify|verify} messages.
                 * @function encode
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {message.Z_C_ENTITY.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        $root.message.Z_C_ENTITY.Entity.DataMask.encode(message.Data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.Move != null && Object.hasOwnProperty.call(message, "Move"))
                        $root.message.Z_C_ENTITY.Entity.MoveMask.encode(message.Move, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.Stats != null && Object.hasOwnProperty.call(message, "Stats"))
                        $root.message.Z_C_ENTITY.Entity.StatsMask.encode(message.Stats, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {message.Z_C_ENTITY.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {message.Z_C_ENTITY.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY.Entity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Id = reader.int64();
                            break;
                        case 2:
                            message.Data = $root.message.Z_C_ENTITY.Entity.DataMask.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.Move = $root.message.Z_C_ENTITY.Entity.MoveMask.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.Stats = $root.message.Z_C_ENTITY.Entity.StatsMask.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Entity message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {message.Z_C_ENTITY.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Entity message.
                 * @function verify
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Entity.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Id != null && message.hasOwnProperty("Id"))
                        if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                            return "Id: integer|Long expected";
                    if (message.Data != null && message.hasOwnProperty("Data")) {
                        var error = $root.message.Z_C_ENTITY.Entity.DataMask.verify(message.Data);
                        if (error)
                            return "Data." + error;
                    }
                    if (message.Move != null && message.hasOwnProperty("Move")) {
                        var error = $root.message.Z_C_ENTITY.Entity.MoveMask.verify(message.Move);
                        if (error)
                            return "Move." + error;
                    }
                    if (message.Stats != null && message.hasOwnProperty("Stats")) {
                        var error = $root.message.Z_C_ENTITY.Entity.StatsMask.verify(message.Stats);
                        if (error)
                            return "Stats." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {message.Z_C_ENTITY.Entity} Entity
                 */
                Entity.fromObject = function fromObject(object) {
                    if (object instanceof $root.message.Z_C_ENTITY.Entity)
                        return object;
                    var message = new $root.message.Z_C_ENTITY.Entity();
                    if (object.Id != null)
                        if ($util.Long)
                            (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                        else if (typeof object.Id === "string")
                            message.Id = parseInt(object.Id, 10);
                        else if (typeof object.Id === "number")
                            message.Id = object.Id;
                        else if (typeof object.Id === "object")
                            message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
                    if (object.Data != null) {
                        if (typeof object.Data !== "object")
                            throw TypeError(".message.Z_C_ENTITY.Entity.Data: object expected");
                        message.Data = $root.message.Z_C_ENTITY.Entity.DataMask.fromObject(object.Data);
                    }
                    if (object.Move != null) {
                        if (typeof object.Move !== "object")
                            throw TypeError(".message.Z_C_ENTITY.Entity.Move: object expected");
                        message.Move = $root.message.Z_C_ENTITY.Entity.MoveMask.fromObject(object.Move);
                    }
                    if (object.Stats != null) {
                        if (typeof object.Stats !== "object")
                            throw TypeError(".message.Z_C_ENTITY.Entity.Stats: object expected");
                        message.Stats = $root.message.Z_C_ENTITY.Entity.StatsMask.fromObject(object.Stats);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.Z_C_ENTITY.Entity
                 * @static
                 * @param {message.Z_C_ENTITY.Entity} message Entity
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Entity.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.Id = options.longs === String ? "0" : 0;
                        object.Data = null;
                        object.Move = null;
                        object.Stats = null;
                    }
                    if (message.Id != null && message.hasOwnProperty("Id"))
                        if (typeof message.Id === "number")
                            object.Id = options.longs === String ? String(message.Id) : message.Id;
                        else
                            object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                    if (message.Data != null && message.hasOwnProperty("Data"))
                        object.Data = $root.message.Z_C_ENTITY.Entity.DataMask.toObject(message.Data, options);
                    if (message.Move != null && message.hasOwnProperty("Move"))
                        object.Move = $root.message.Z_C_ENTITY.Entity.MoveMask.toObject(message.Move, options);
                    if (message.Stats != null && message.hasOwnProperty("Stats"))
                        object.Stats = $root.message.Z_C_ENTITY.Entity.StatsMask.toObject(message.Stats, options);
                    return object;
                };
    
                /**
                 * Converts this Entity to JSON.
                 * @function toJSON
                 * @memberof message.Z_C_ENTITY.Entity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Entity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Entity.DataMask = (function() {
    
                    /**
                     * Properties of a DataMask.
                     * @memberof message.Z_C_ENTITY.Entity
                     * @interface IDataMask
                     * @property {number|null} [Type] DataMask Type
                     * @property {boolean|null} [RemoveFlag] DataMask RemoveFlag
                     * @property {message.Z_C_ENTITY.Entity.DataMask.INpcDataMask|null} [NpcData] DataMask NpcData
                     * @property {message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask|null} [SpellData] DataMask SpellData
                     */
    
                    /**
                     * Constructs a new DataMask.
                     * @memberof message.Z_C_ENTITY.Entity
                     * @classdesc Represents a DataMask.
                     * @implements IDataMask
                     * @constructor
                     * @param {message.Z_C_ENTITY.Entity.IDataMask=} [properties] Properties to set
                     */
                    function DataMask(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * DataMask Type.
                     * @member {number} Type
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @instance
                     */
                    DataMask.prototype.Type = 0;
    
                    /**
                     * DataMask RemoveFlag.
                     * @member {boolean} RemoveFlag
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @instance
                     */
                    DataMask.prototype.RemoveFlag = false;
    
                    /**
                     * DataMask NpcData.
                     * @member {message.Z_C_ENTITY.Entity.DataMask.INpcDataMask|null|undefined} NpcData
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @instance
                     */
                    DataMask.prototype.NpcData = null;
    
                    /**
                     * DataMask SpellData.
                     * @member {message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask|null|undefined} SpellData
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @instance
                     */
                    DataMask.prototype.SpellData = null;
    
                    /**
                     * Creates a new DataMask instance using the specified properties.
                     * @function create
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IDataMask=} [properties] Properties to set
                     * @returns {message.Z_C_ENTITY.Entity.DataMask} DataMask instance
                     */
                    DataMask.create = function create(properties) {
                        return new DataMask(properties);
                    };
    
                    /**
                     * Encodes the specified DataMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.verify|verify} messages.
                     * @function encode
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IDataMask} message DataMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataMask.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                        if (message.RemoveFlag != null && Object.hasOwnProperty.call(message, "RemoveFlag"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.RemoveFlag);
                        if (message.NpcData != null && Object.hasOwnProperty.call(message, "NpcData"))
                            $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.encode(message.NpcData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.SpellData != null && Object.hasOwnProperty.call(message, "SpellData"))
                            $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.encode(message.SpellData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DataMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IDataMask} message DataMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataMask.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DataMask message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.Z_C_ENTITY.Entity.DataMask} DataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataMask.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY.Entity.DataMask();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Type = reader.int32();
                                break;
                            case 2:
                                message.RemoveFlag = reader.bool();
                                break;
                            case 3:
                                message.NpcData = $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.SpellData = $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a DataMask message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.Z_C_ENTITY.Entity.DataMask} DataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataMask.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a DataMask message.
                     * @function verify
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DataMask.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Type != null && message.hasOwnProperty("Type"))
                            if (!$util.isInteger(message.Type))
                                return "Type: integer expected";
                        if (message.RemoveFlag != null && message.hasOwnProperty("RemoveFlag"))
                            if (typeof message.RemoveFlag !== "boolean")
                                return "RemoveFlag: boolean expected";
                        if (message.NpcData != null && message.hasOwnProperty("NpcData")) {
                            var error = $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.verify(message.NpcData);
                            if (error)
                                return "NpcData." + error;
                        }
                        if (message.SpellData != null && message.hasOwnProperty("SpellData")) {
                            var error = $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.verify(message.SpellData);
                            if (error)
                                return "SpellData." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a DataMask message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.Z_C_ENTITY.Entity.DataMask} DataMask
                     */
                    DataMask.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.Z_C_ENTITY.Entity.DataMask)
                            return object;
                        var message = new $root.message.Z_C_ENTITY.Entity.DataMask();
                        if (object.Type != null)
                            message.Type = object.Type | 0;
                        if (object.RemoveFlag != null)
                            message.RemoveFlag = Boolean(object.RemoveFlag);
                        if (object.NpcData != null) {
                            if (typeof object.NpcData !== "object")
                                throw TypeError(".message.Z_C_ENTITY.Entity.DataMask.NpcData: object expected");
                            message.NpcData = $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.fromObject(object.NpcData);
                        }
                        if (object.SpellData != null) {
                            if (typeof object.SpellData !== "object")
                                throw TypeError(".message.Z_C_ENTITY.Entity.DataMask.SpellData: object expected");
                            message.SpellData = $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.fromObject(object.SpellData);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DataMask message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.DataMask} message DataMask
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DataMask.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.Type = 0;
                            object.RemoveFlag = false;
                            object.NpcData = null;
                            object.SpellData = null;
                        }
                        if (message.Type != null && message.hasOwnProperty("Type"))
                            object.Type = message.Type;
                        if (message.RemoveFlag != null && message.hasOwnProperty("RemoveFlag"))
                            object.RemoveFlag = message.RemoveFlag;
                        if (message.NpcData != null && message.hasOwnProperty("NpcData"))
                            object.NpcData = $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.toObject(message.NpcData, options);
                        if (message.SpellData != null && message.hasOwnProperty("SpellData"))
                            object.SpellData = $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.toObject(message.SpellData, options);
                        return object;
                    };
    
                    /**
                     * Converts this DataMask to JSON.
                     * @function toJSON
                     * @memberof message.Z_C_ENTITY.Entity.DataMask
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DataMask.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    DataMask.NpcDataMask = (function() {
    
                        /**
                         * Properties of a NpcDataMask.
                         * @memberof message.Z_C_ENTITY.Entity.DataMask
                         * @interface INpcDataMask
                         * @property {number|null} [DataId] NpcDataMask DataId
                         */
    
                        /**
                         * Constructs a new NpcDataMask.
                         * @memberof message.Z_C_ENTITY.Entity.DataMask
                         * @classdesc Represents a NpcDataMask.
                         * @implements INpcDataMask
                         * @constructor
                         * @param {message.Z_C_ENTITY.Entity.DataMask.INpcDataMask=} [properties] Properties to set
                         */
                        function NpcDataMask(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * NpcDataMask DataId.
                         * @member {number} DataId
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @instance
                         */
                        NpcDataMask.prototype.DataId = 0;
    
                        /**
                         * Creates a new NpcDataMask instance using the specified properties.
                         * @function create
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.INpcDataMask=} [properties] Properties to set
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.NpcDataMask} NpcDataMask instance
                         */
                        NpcDataMask.create = function create(properties) {
                            return new NpcDataMask(properties);
                        };
    
                        /**
                         * Encodes the specified NpcDataMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.verify|verify} messages.
                         * @function encode
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.INpcDataMask} message NpcDataMask message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        NpcDataMask.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.DataId != null && Object.hasOwnProperty.call(message, "DataId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DataId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified NpcDataMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.NpcDataMask.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.INpcDataMask} message NpcDataMask message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        NpcDataMask.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a NpcDataMask message from the specified reader or buffer.
                         * @function decode
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.NpcDataMask} NpcDataMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        NpcDataMask.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
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
                         * Decodes a NpcDataMask message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.NpcDataMask} NpcDataMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        NpcDataMask.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a NpcDataMask message.
                         * @function verify
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        NpcDataMask.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.DataId != null && message.hasOwnProperty("DataId"))
                                if (!$util.isInteger(message.DataId))
                                    return "DataId: integer expected";
                            return null;
                        };
    
                        /**
                         * Creates a NpcDataMask message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.NpcDataMask} NpcDataMask
                         */
                        NpcDataMask.fromObject = function fromObject(object) {
                            if (object instanceof $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask)
                                return object;
                            var message = new $root.message.Z_C_ENTITY.Entity.DataMask.NpcDataMask();
                            if (object.DataId != null)
                                message.DataId = object.DataId | 0;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a NpcDataMask message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.NpcDataMask} message NpcDataMask
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        NpcDataMask.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.DataId = 0;
                            if (message.DataId != null && message.hasOwnProperty("DataId"))
                                object.DataId = message.DataId;
                            return object;
                        };
    
                        /**
                         * Converts this NpcDataMask to JSON.
                         * @function toJSON
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.NpcDataMask
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        NpcDataMask.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return NpcDataMask;
                    })();
    
                    DataMask.SpellDataMask = (function() {
    
                        /**
                         * Properties of a SpellDataMask.
                         * @memberof message.Z_C_ENTITY.Entity.DataMask
                         * @interface ISpellDataMask
                         * @property {number|null} [DataId] SpellDataMask DataId
                         * @property {number|null} [LifeTime] SpellDataMask LifeTime
                         * @property {number|null} [FlySpeed] SpellDataMask FlySpeed
                         */
    
                        /**
                         * Constructs a new SpellDataMask.
                         * @memberof message.Z_C_ENTITY.Entity.DataMask
                         * @classdesc Represents a SpellDataMask.
                         * @implements ISpellDataMask
                         * @constructor
                         * @param {message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask=} [properties] Properties to set
                         */
                        function SpellDataMask(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SpellDataMask DataId.
                         * @member {number} DataId
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @instance
                         */
                        SpellDataMask.prototype.DataId = 0;
    
                        /**
                         * SpellDataMask LifeTime.
                         * @member {number} LifeTime
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @instance
                         */
                        SpellDataMask.prototype.LifeTime = 0;
    
                        /**
                         * SpellDataMask FlySpeed.
                         * @member {number} FlySpeed
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @instance
                         */
                        SpellDataMask.prototype.FlySpeed = 0;
    
                        /**
                         * Creates a new SpellDataMask instance using the specified properties.
                         * @function create
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask=} [properties] Properties to set
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.SpellDataMask} SpellDataMask instance
                         */
                        SpellDataMask.create = function create(properties) {
                            return new SpellDataMask(properties);
                        };
    
                        /**
                         * Encodes the specified SpellDataMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.verify|verify} messages.
                         * @function encode
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask} message SpellDataMask message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SpellDataMask.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.DataId != null && Object.hasOwnProperty.call(message, "DataId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DataId);
                            if (message.LifeTime != null && Object.hasOwnProperty.call(message, "LifeTime"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LifeTime);
                            if (message.FlySpeed != null && Object.hasOwnProperty.call(message, "FlySpeed"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.FlySpeed);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SpellDataMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.DataMask.SpellDataMask.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.ISpellDataMask} message SpellDataMask message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SpellDataMask.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SpellDataMask message from the specified reader or buffer.
                         * @function decode
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.SpellDataMask} SpellDataMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SpellDataMask.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.DataId = reader.int32();
                                    break;
                                case 2:
                                    message.LifeTime = reader.int32();
                                    break;
                                case 3:
                                    message.FlySpeed = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a SpellDataMask message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.SpellDataMask} SpellDataMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SpellDataMask.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SpellDataMask message.
                         * @function verify
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SpellDataMask.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.DataId != null && message.hasOwnProperty("DataId"))
                                if (!$util.isInteger(message.DataId))
                                    return "DataId: integer expected";
                            if (message.LifeTime != null && message.hasOwnProperty("LifeTime"))
                                if (!$util.isInteger(message.LifeTime))
                                    return "LifeTime: integer expected";
                            if (message.FlySpeed != null && message.hasOwnProperty("FlySpeed"))
                                if (!$util.isInteger(message.FlySpeed))
                                    return "FlySpeed: integer expected";
                            return null;
                        };
    
                        /**
                         * Creates a SpellDataMask message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {message.Z_C_ENTITY.Entity.DataMask.SpellDataMask} SpellDataMask
                         */
                        SpellDataMask.fromObject = function fromObject(object) {
                            if (object instanceof $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask)
                                return object;
                            var message = new $root.message.Z_C_ENTITY.Entity.DataMask.SpellDataMask();
                            if (object.DataId != null)
                                message.DataId = object.DataId | 0;
                            if (object.LifeTime != null)
                                message.LifeTime = object.LifeTime | 0;
                            if (object.FlySpeed != null)
                                message.FlySpeed = object.FlySpeed | 0;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SpellDataMask message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @static
                         * @param {message.Z_C_ENTITY.Entity.DataMask.SpellDataMask} message SpellDataMask
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SpellDataMask.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.DataId = 0;
                                object.LifeTime = 0;
                                object.FlySpeed = 0;
                            }
                            if (message.DataId != null && message.hasOwnProperty("DataId"))
                                object.DataId = message.DataId;
                            if (message.LifeTime != null && message.hasOwnProperty("LifeTime"))
                                object.LifeTime = message.LifeTime;
                            if (message.FlySpeed != null && message.hasOwnProperty("FlySpeed"))
                                object.FlySpeed = message.FlySpeed;
                            return object;
                        };
    
                        /**
                         * Converts this SpellDataMask to JSON.
                         * @function toJSON
                         * @memberof message.Z_C_ENTITY.Entity.DataMask.SpellDataMask
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SpellDataMask.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return SpellDataMask;
                    })();
    
                    return DataMask;
                })();
    
                Entity.MoveMask = (function() {
    
                    /**
                     * Properties of a MoveMask.
                     * @memberof message.Z_C_ENTITY.Entity
                     * @interface IMoveMask
                     * @property {message.IPoint3F|null} [Pos] MoveMask Pos
                     * @property {number|null} [Rotation] MoveMask Rotation
                     * @property {boolean|null} [ForceUpdateFlag] MoveMask ForceUpdateFlag
                     */
    
                    /**
                     * Constructs a new MoveMask.
                     * @memberof message.Z_C_ENTITY.Entity
                     * @classdesc Represents a MoveMask.
                     * @implements IMoveMask
                     * @constructor
                     * @param {message.Z_C_ENTITY.Entity.IMoveMask=} [properties] Properties to set
                     */
                    function MoveMask(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * MoveMask Pos.
                     * @member {message.IPoint3F|null|undefined} Pos
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @instance
                     */
                    MoveMask.prototype.Pos = null;
    
                    /**
                     * MoveMask Rotation.
                     * @member {number} Rotation
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @instance
                     */
                    MoveMask.prototype.Rotation = 0;
    
                    /**
                     * MoveMask ForceUpdateFlag.
                     * @member {boolean} ForceUpdateFlag
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @instance
                     */
                    MoveMask.prototype.ForceUpdateFlag = false;
    
                    /**
                     * Creates a new MoveMask instance using the specified properties.
                     * @function create
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IMoveMask=} [properties] Properties to set
                     * @returns {message.Z_C_ENTITY.Entity.MoveMask} MoveMask instance
                     */
                    MoveMask.create = function create(properties) {
                        return new MoveMask(properties);
                    };
    
                    /**
                     * Encodes the specified MoveMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                     * @function encode
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IMoveMask} message MoveMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MoveMask.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Pos != null && Object.hasOwnProperty.call(message, "Pos"))
                            $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.Rotation != null && Object.hasOwnProperty.call(message, "Rotation"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Rotation);
                        if (message.ForceUpdateFlag != null && Object.hasOwnProperty.call(message, "ForceUpdateFlag"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ForceUpdateFlag);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified MoveMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IMoveMask} message MoveMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MoveMask.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a MoveMask message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.Z_C_ENTITY.Entity.MoveMask} MoveMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MoveMask.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY.Entity.MoveMask();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.Rotation = reader.float();
                                break;
                            case 3:
                                message.ForceUpdateFlag = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a MoveMask message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.Z_C_ENTITY.Entity.MoveMask} MoveMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MoveMask.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a MoveMask message.
                     * @function verify
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MoveMask.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.Pos != null && message.hasOwnProperty("Pos")) {
                            var error = $root.message.Point3F.verify(message.Pos);
                            if (error)
                                return "Pos." + error;
                        }
                        if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                            if (typeof message.Rotation !== "number")
                                return "Rotation: number expected";
                        if (message.ForceUpdateFlag != null && message.hasOwnProperty("ForceUpdateFlag"))
                            if (typeof message.ForceUpdateFlag !== "boolean")
                                return "ForceUpdateFlag: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a MoveMask message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.Z_C_ENTITY.Entity.MoveMask} MoveMask
                     */
                    MoveMask.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.Z_C_ENTITY.Entity.MoveMask)
                            return object;
                        var message = new $root.message.Z_C_ENTITY.Entity.MoveMask();
                        if (object.Pos != null) {
                            if (typeof object.Pos !== "object")
                                throw TypeError(".message.Z_C_ENTITY.Entity.MoveMask.Pos: object expected");
                            message.Pos = $root.message.Point3F.fromObject(object.Pos);
                        }
                        if (object.Rotation != null)
                            message.Rotation = Number(object.Rotation);
                        if (object.ForceUpdateFlag != null)
                            message.ForceUpdateFlag = Boolean(object.ForceUpdateFlag);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a MoveMask message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.MoveMask} message MoveMask
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MoveMask.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.Pos = null;
                            object.Rotation = 0;
                            object.ForceUpdateFlag = false;
                        }
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                        if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                            object.Rotation = options.json && !isFinite(message.Rotation) ? String(message.Rotation) : message.Rotation;
                        if (message.ForceUpdateFlag != null && message.hasOwnProperty("ForceUpdateFlag"))
                            object.ForceUpdateFlag = message.ForceUpdateFlag;
                        return object;
                    };
    
                    /**
                     * Converts this MoveMask to JSON.
                     * @function toJSON
                     * @memberof message.Z_C_ENTITY.Entity.MoveMask
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MoveMask.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return MoveMask;
                })();
    
                Entity.StatsMask = (function() {
    
                    /**
                     * Properties of a StatsMask.
                     * @memberof message.Z_C_ENTITY.Entity
                     * @interface IStatsMask
                     * @property {number|null} [HP] StatsMask HP
                     * @property {number|null} [MP] StatsMask MP
                     * @property {number|null} [MaxHP] StatsMask MaxHP
                     * @property {number|null} [MaxMP] StatsMask MaxMP
                     * @property {number|null} [PhyDamage] StatsMask PhyDamage
                     * @property {number|null} [PhyDefence] StatsMask PhyDefence
                     * @property {number|null} [SplDamage] StatsMask SplDamage
                     * @property {number|null} [SplDefence] StatsMask SplDefence
                     * @property {number|null} [Heal] StatsMask Heal
                     * @property {number|null} [CriticalTimes] StatsMask CriticalTimes
                     * @property {number|null} [Critical] StatsMask Critical
                     * @property {number|null} [AntiCriticalTimes] StatsMask AntiCriticalTimes
                     * @property {number|null} [AntiCritical] StatsMask AntiCritical
                     * @property {number|null} [Dodge] StatsMask Dodge
                     * @property {number|null} [Hit] StatsMask Hit
                     */
    
                    /**
                     * Constructs a new StatsMask.
                     * @memberof message.Z_C_ENTITY.Entity
                     * @classdesc Represents a StatsMask.
                     * @implements IStatsMask
                     * @constructor
                     * @param {message.Z_C_ENTITY.Entity.IStatsMask=} [properties] Properties to set
                     */
                    function StatsMask(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * StatsMask HP.
                     * @member {number} HP
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.HP = 0;
    
                    /**
                     * StatsMask MP.
                     * @member {number} MP
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.MP = 0;
    
                    /**
                     * StatsMask MaxHP.
                     * @member {number} MaxHP
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.MaxHP = 0;
    
                    /**
                     * StatsMask MaxMP.
                     * @member {number} MaxMP
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.MaxMP = 0;
    
                    /**
                     * StatsMask PhyDamage.
                     * @member {number} PhyDamage
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.PhyDamage = 0;
    
                    /**
                     * StatsMask PhyDefence.
                     * @member {number} PhyDefence
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.PhyDefence = 0;
    
                    /**
                     * StatsMask SplDamage.
                     * @member {number} SplDamage
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.SplDamage = 0;
    
                    /**
                     * StatsMask SplDefence.
                     * @member {number} SplDefence
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.SplDefence = 0;
    
                    /**
                     * StatsMask Heal.
                     * @member {number} Heal
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.Heal = 0;
    
                    /**
                     * StatsMask CriticalTimes.
                     * @member {number} CriticalTimes
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.CriticalTimes = 0;
    
                    /**
                     * StatsMask Critical.
                     * @member {number} Critical
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.Critical = 0;
    
                    /**
                     * StatsMask AntiCriticalTimes.
                     * @member {number} AntiCriticalTimes
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.AntiCriticalTimes = 0;
    
                    /**
                     * StatsMask AntiCritical.
                     * @member {number} AntiCritical
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.AntiCritical = 0;
    
                    /**
                     * StatsMask Dodge.
                     * @member {number} Dodge
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.Dodge = 0;
    
                    /**
                     * StatsMask Hit.
                     * @member {number} Hit
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     */
                    StatsMask.prototype.Hit = 0;
    
                    /**
                     * Creates a new StatsMask instance using the specified properties.
                     * @function create
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IStatsMask=} [properties] Properties to set
                     * @returns {message.Z_C_ENTITY.Entity.StatsMask} StatsMask instance
                     */
                    StatsMask.create = function create(properties) {
                        return new StatsMask(properties);
                    };
    
                    /**
                     * Encodes the specified StatsMask message. Does not implicitly {@link message.Z_C_ENTITY.Entity.StatsMask.verify|verify} messages.
                     * @function encode
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IStatsMask} message StatsMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StatsMask.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.HP != null && Object.hasOwnProperty.call(message, "HP"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.HP);
                        if (message.MP != null && Object.hasOwnProperty.call(message, "MP"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MP);
                        if (message.MaxHP != null && Object.hasOwnProperty.call(message, "MaxHP"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.MaxHP);
                        if (message.MaxMP != null && Object.hasOwnProperty.call(message, "MaxMP"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MaxMP);
                        if (message.PhyDamage != null && Object.hasOwnProperty.call(message, "PhyDamage"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PhyDamage);
                        if (message.PhyDefence != null && Object.hasOwnProperty.call(message, "PhyDefence"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PhyDefence);
                        if (message.SplDamage != null && Object.hasOwnProperty.call(message, "SplDamage"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.SplDamage);
                        if (message.SplDefence != null && Object.hasOwnProperty.call(message, "SplDefence"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.SplDefence);
                        if (message.Heal != null && Object.hasOwnProperty.call(message, "Heal"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Heal);
                        if (message.CriticalTimes != null && Object.hasOwnProperty.call(message, "CriticalTimes"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.CriticalTimes);
                        if (message.Critical != null && Object.hasOwnProperty.call(message, "Critical"))
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.Critical);
                        if (message.AntiCriticalTimes != null && Object.hasOwnProperty.call(message, "AntiCriticalTimes"))
                            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.AntiCriticalTimes);
                        if (message.AntiCritical != null && Object.hasOwnProperty.call(message, "AntiCritical"))
                            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.AntiCritical);
                        if (message.Dodge != null && Object.hasOwnProperty.call(message, "Dodge"))
                            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.Dodge);
                        if (message.Hit != null && Object.hasOwnProperty.call(message, "Hit"))
                            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.Hit);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified StatsMask message, length delimited. Does not implicitly {@link message.Z_C_ENTITY.Entity.StatsMask.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.IStatsMask} message StatsMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StatsMask.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a StatsMask message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.Z_C_ENTITY.Entity.StatsMask} StatsMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StatsMask.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Z_C_ENTITY.Entity.StatsMask();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.HP = reader.int32();
                                break;
                            case 2:
                                message.MP = reader.int32();
                                break;
                            case 3:
                                message.MaxHP = reader.int32();
                                break;
                            case 4:
                                message.MaxMP = reader.int32();
                                break;
                            case 5:
                                message.PhyDamage = reader.int32();
                                break;
                            case 6:
                                message.PhyDefence = reader.int32();
                                break;
                            case 7:
                                message.SplDamage = reader.int32();
                                break;
                            case 8:
                                message.SplDefence = reader.int32();
                                break;
                            case 9:
                                message.Heal = reader.int32();
                                break;
                            case 10:
                                message.CriticalTimes = reader.int32();
                                break;
                            case 11:
                                message.Critical = reader.int32();
                                break;
                            case 12:
                                message.AntiCriticalTimes = reader.int32();
                                break;
                            case 13:
                                message.AntiCritical = reader.int32();
                                break;
                            case 14:
                                message.Dodge = reader.int32();
                                break;
                            case 15:
                                message.Hit = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a StatsMask message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.Z_C_ENTITY.Entity.StatsMask} StatsMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StatsMask.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a StatsMask message.
                     * @function verify
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StatsMask.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.HP != null && message.hasOwnProperty("HP"))
                            if (!$util.isInteger(message.HP))
                                return "HP: integer expected";
                        if (message.MP != null && message.hasOwnProperty("MP"))
                            if (!$util.isInteger(message.MP))
                                return "MP: integer expected";
                        if (message.MaxHP != null && message.hasOwnProperty("MaxHP"))
                            if (!$util.isInteger(message.MaxHP))
                                return "MaxHP: integer expected";
                        if (message.MaxMP != null && message.hasOwnProperty("MaxMP"))
                            if (!$util.isInteger(message.MaxMP))
                                return "MaxMP: integer expected";
                        if (message.PhyDamage != null && message.hasOwnProperty("PhyDamage"))
                            if (!$util.isInteger(message.PhyDamage))
                                return "PhyDamage: integer expected";
                        if (message.PhyDefence != null && message.hasOwnProperty("PhyDefence"))
                            if (!$util.isInteger(message.PhyDefence))
                                return "PhyDefence: integer expected";
                        if (message.SplDamage != null && message.hasOwnProperty("SplDamage"))
                            if (!$util.isInteger(message.SplDamage))
                                return "SplDamage: integer expected";
                        if (message.SplDefence != null && message.hasOwnProperty("SplDefence"))
                            if (!$util.isInteger(message.SplDefence))
                                return "SplDefence: integer expected";
                        if (message.Heal != null && message.hasOwnProperty("Heal"))
                            if (!$util.isInteger(message.Heal))
                                return "Heal: integer expected";
                        if (message.CriticalTimes != null && message.hasOwnProperty("CriticalTimes"))
                            if (!$util.isInteger(message.CriticalTimes))
                                return "CriticalTimes: integer expected";
                        if (message.Critical != null && message.hasOwnProperty("Critical"))
                            if (!$util.isInteger(message.Critical))
                                return "Critical: integer expected";
                        if (message.AntiCriticalTimes != null && message.hasOwnProperty("AntiCriticalTimes"))
                            if (!$util.isInteger(message.AntiCriticalTimes))
                                return "AntiCriticalTimes: integer expected";
                        if (message.AntiCritical != null && message.hasOwnProperty("AntiCritical"))
                            if (!$util.isInteger(message.AntiCritical))
                                return "AntiCritical: integer expected";
                        if (message.Dodge != null && message.hasOwnProperty("Dodge"))
                            if (!$util.isInteger(message.Dodge))
                                return "Dodge: integer expected";
                        if (message.Hit != null && message.hasOwnProperty("Hit"))
                            if (!$util.isInteger(message.Hit))
                                return "Hit: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a StatsMask message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.Z_C_ENTITY.Entity.StatsMask} StatsMask
                     */
                    StatsMask.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.Z_C_ENTITY.Entity.StatsMask)
                            return object;
                        var message = new $root.message.Z_C_ENTITY.Entity.StatsMask();
                        if (object.HP != null)
                            message.HP = object.HP | 0;
                        if (object.MP != null)
                            message.MP = object.MP | 0;
                        if (object.MaxHP != null)
                            message.MaxHP = object.MaxHP | 0;
                        if (object.MaxMP != null)
                            message.MaxMP = object.MaxMP | 0;
                        if (object.PhyDamage != null)
                            message.PhyDamage = object.PhyDamage | 0;
                        if (object.PhyDefence != null)
                            message.PhyDefence = object.PhyDefence | 0;
                        if (object.SplDamage != null)
                            message.SplDamage = object.SplDamage | 0;
                        if (object.SplDefence != null)
                            message.SplDefence = object.SplDefence | 0;
                        if (object.Heal != null)
                            message.Heal = object.Heal | 0;
                        if (object.CriticalTimes != null)
                            message.CriticalTimes = object.CriticalTimes | 0;
                        if (object.Critical != null)
                            message.Critical = object.Critical | 0;
                        if (object.AntiCriticalTimes != null)
                            message.AntiCriticalTimes = object.AntiCriticalTimes | 0;
                        if (object.AntiCritical != null)
                            message.AntiCritical = object.AntiCritical | 0;
                        if (object.Dodge != null)
                            message.Dodge = object.Dodge | 0;
                        if (object.Hit != null)
                            message.Hit = object.Hit | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a StatsMask message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @static
                     * @param {message.Z_C_ENTITY.Entity.StatsMask} message StatsMask
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StatsMask.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.HP = 0;
                            object.MP = 0;
                            object.MaxHP = 0;
                            object.MaxMP = 0;
                            object.PhyDamage = 0;
                            object.PhyDefence = 0;
                            object.SplDamage = 0;
                            object.SplDefence = 0;
                            object.Heal = 0;
                            object.CriticalTimes = 0;
                            object.Critical = 0;
                            object.AntiCriticalTimes = 0;
                            object.AntiCritical = 0;
                            object.Dodge = 0;
                            object.Hit = 0;
                        }
                        if (message.HP != null && message.hasOwnProperty("HP"))
                            object.HP = message.HP;
                        if (message.MP != null && message.hasOwnProperty("MP"))
                            object.MP = message.MP;
                        if (message.MaxHP != null && message.hasOwnProperty("MaxHP"))
                            object.MaxHP = message.MaxHP;
                        if (message.MaxMP != null && message.hasOwnProperty("MaxMP"))
                            object.MaxMP = message.MaxMP;
                        if (message.PhyDamage != null && message.hasOwnProperty("PhyDamage"))
                            object.PhyDamage = message.PhyDamage;
                        if (message.PhyDefence != null && message.hasOwnProperty("PhyDefence"))
                            object.PhyDefence = message.PhyDefence;
                        if (message.SplDamage != null && message.hasOwnProperty("SplDamage"))
                            object.SplDamage = message.SplDamage;
                        if (message.SplDefence != null && message.hasOwnProperty("SplDefence"))
                            object.SplDefence = message.SplDefence;
                        if (message.Heal != null && message.hasOwnProperty("Heal"))
                            object.Heal = message.Heal;
                        if (message.CriticalTimes != null && message.hasOwnProperty("CriticalTimes"))
                            object.CriticalTimes = message.CriticalTimes;
                        if (message.Critical != null && message.hasOwnProperty("Critical"))
                            object.Critical = message.Critical;
                        if (message.AntiCriticalTimes != null && message.hasOwnProperty("AntiCriticalTimes"))
                            object.AntiCriticalTimes = message.AntiCriticalTimes;
                        if (message.AntiCritical != null && message.hasOwnProperty("AntiCritical"))
                            object.AntiCritical = message.AntiCritical;
                        if (message.Dodge != null && message.hasOwnProperty("Dodge"))
                            object.Dodge = message.Dodge;
                        if (message.Hit != null && message.hasOwnProperty("Hit"))
                            object.Hit = message.Hit;
                        return object;
                    };
    
                    /**
                     * Converts this StatsMask to JSON.
                     * @function toJSON
                     * @memberof message.Z_C_ENTITY.Entity.StatsMask
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StatsMask.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return StatsMask;
                })();
    
                return Entity;
            })();
    
            return Z_C_ENTITY;
        })();
    
        message.C_Z_LoginCopyMap = (function() {
    
            /**
             * Properties of a C_Z_LoginCopyMap.
             * @memberof message
             * @interface IC_Z_LoginCopyMap
             * @property {message.IIpacket|null} [PacketHead] C_Z_LoginCopyMap PacketHead
             * @property {number|null} [DataId] C_Z_LoginCopyMap DataId
             */
    
            /**
             * Constructs a new C_Z_LoginCopyMap.
             * @memberof message
             * @classdesc Represents a C_Z_LoginCopyMap.
             * @implements IC_Z_LoginCopyMap
             * @constructor
             * @param {message.IC_Z_LoginCopyMap=} [properties] Properties to set
             */
            function C_Z_LoginCopyMap(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_Z_LoginCopyMap PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_Z_LoginCopyMap
             * @instance
             */
            C_Z_LoginCopyMap.prototype.PacketHead = null;
    
            /**
             * C_Z_LoginCopyMap DataId.
             * @member {number} DataId
             * @memberof message.C_Z_LoginCopyMap
             * @instance
             */
            C_Z_LoginCopyMap.prototype.DataId = 0;
    
            /**
             * Creates a new C_Z_LoginCopyMap instance using the specified properties.
             * @function create
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {message.IC_Z_LoginCopyMap=} [properties] Properties to set
             * @returns {message.C_Z_LoginCopyMap} C_Z_LoginCopyMap instance
             */
            C_Z_LoginCopyMap.create = function create(properties) {
                return new C_Z_LoginCopyMap(properties);
            };
    
            /**
             * Encodes the specified C_Z_LoginCopyMap message. Does not implicitly {@link message.C_Z_LoginCopyMap.verify|verify} messages.
             * @function encode
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {message.IC_Z_LoginCopyMap} message C_Z_LoginCopyMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Z_LoginCopyMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && Object.hasOwnProperty.call(message, "PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.DataId != null && Object.hasOwnProperty.call(message, "DataId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DataId);
                return writer;
            };
    
            /**
             * Encodes the specified C_Z_LoginCopyMap message, length delimited. Does not implicitly {@link message.C_Z_LoginCopyMap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {message.IC_Z_LoginCopyMap} message C_Z_LoginCopyMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_Z_LoginCopyMap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_Z_LoginCopyMap message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_Z_LoginCopyMap} C_Z_LoginCopyMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Z_LoginCopyMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_Z_LoginCopyMap();
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
             * Decodes a C_Z_LoginCopyMap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_Z_LoginCopyMap} C_Z_LoginCopyMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_Z_LoginCopyMap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_Z_LoginCopyMap message.
             * @function verify
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_Z_LoginCopyMap.verify = function verify(message) {
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
             * Creates a C_Z_LoginCopyMap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_Z_LoginCopyMap} C_Z_LoginCopyMap
             */
            C_Z_LoginCopyMap.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_Z_LoginCopyMap)
                    return object;
                var message = new $root.message.C_Z_LoginCopyMap();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_Z_LoginCopyMap.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.DataId != null)
                    message.DataId = object.DataId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C_Z_LoginCopyMap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_Z_LoginCopyMap
             * @static
             * @param {message.C_Z_LoginCopyMap} message C_Z_LoginCopyMap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_Z_LoginCopyMap.toObject = function toObject(message, options) {
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
             * Converts this C_Z_LoginCopyMap to JSON.
             * @function toJSON
             * @memberof message.C_Z_LoginCopyMap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_Z_LoginCopyMap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_Z_LoginCopyMap;
        })();
    
        /**
         * SERVICE enum.
         * @name message.SERVICE
         * @enum {number}
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
         * @enum {number}
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
    
        /**
         * SEND enum.
         * @name message.SEND
         * @enum {number}
         * @property {number} POINT=0 POINT value
         * @property {number} BALANCE=1 BALANCE value
         * @property {number} BOARD_CAST=2 BOARD_CAST value
         */
        message.SEND = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POINT"] = 0;
            values[valuesById[1] = "BALANCE"] = 1;
            values[valuesById[2] = "BOARD_CAST"] = 2;
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
            Ipacket.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                if (message.Stx != null && Object.hasOwnProperty.call(message, "Stx"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Stx);
                if (message.DestServerType != null && Object.hasOwnProperty.call(message, "DestServerType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DestServerType);
                if (message.Ckx != null && Object.hasOwnProperty.call(message, "Ckx"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Ckx);
                if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Id = options.longs === String ? "0" : 0;
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
            PlayerData.prototype.PlayerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                if (message.PlayerID != null && Object.hasOwnProperty.call(message, "PlayerID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.PlayerID);
                if (message.PlayerName != null && Object.hasOwnProperty.call(message, "PlayerName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.PlayerName);
                if (message.PlayerGold != null && Object.hasOwnProperty.call(message, "PlayerGold"))
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.PlayerID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.PlayerID = options.longs === String ? "0" : 0;
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
    
        message.RpcHead = (function() {
    
            /**
             * Properties of a RpcHead.
             * @memberof message
             * @interface IRpcHead
             * @property {number|Long|null} [Id] RpcHead Id
             * @property {number|null} [SocketId] RpcHead SocketId
             * @property {number|null} [SrcClusterId] RpcHead SrcClusterId
             * @property {number|null} [ClusterId] RpcHead ClusterId
             * @property {message.SERVICE|null} [DestServerType] RpcHead DestServerType
             * @property {message.SEND|null} [SendType] RpcHead SendType
             * @property {string|null} [ActorName] RpcHead ActorName
             */
    
            /**
             * Constructs a new RpcHead.
             * @memberof message
             * @classdesc Represents a RpcHead.
             * @implements IRpcHead
             * @constructor
             * @param {message.IRpcHead=} [properties] Properties to set
             */
            function RpcHead(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RpcHead Id.
             * @member {number|Long} Id
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * RpcHead SocketId.
             * @member {number} SocketId
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.SocketId = 0;
    
            /**
             * RpcHead SrcClusterId.
             * @member {number} SrcClusterId
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.SrcClusterId = 0;
    
            /**
             * RpcHead ClusterId.
             * @member {number} ClusterId
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.ClusterId = 0;
    
            /**
             * RpcHead DestServerType.
             * @member {message.SERVICE} DestServerType
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.DestServerType = 0;
    
            /**
             * RpcHead SendType.
             * @member {message.SEND} SendType
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.SendType = 0;
    
            /**
             * RpcHead ActorName.
             * @member {string} ActorName
             * @memberof message.RpcHead
             * @instance
             */
            RpcHead.prototype.ActorName = "";
    
            /**
             * Creates a new RpcHead instance using the specified properties.
             * @function create
             * @memberof message.RpcHead
             * @static
             * @param {message.IRpcHead=} [properties] Properties to set
             * @returns {message.RpcHead} RpcHead instance
             */
            RpcHead.create = function create(properties) {
                return new RpcHead(properties);
            };
    
            /**
             * Encodes the specified RpcHead message. Does not implicitly {@link message.RpcHead.verify|verify} messages.
             * @function encode
             * @memberof message.RpcHead
             * @static
             * @param {message.IRpcHead} message RpcHead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RpcHead.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
                if (message.SocketId != null && Object.hasOwnProperty.call(message, "SocketId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.SocketId);
                if (message.SrcClusterId != null && Object.hasOwnProperty.call(message, "SrcClusterId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.SrcClusterId);
                if (message.ClusterId != null && Object.hasOwnProperty.call(message, "ClusterId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ClusterId);
                if (message.DestServerType != null && Object.hasOwnProperty.call(message, "DestServerType"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.DestServerType);
                if (message.SendType != null && Object.hasOwnProperty.call(message, "SendType"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.SendType);
                if (message.ActorName != null && Object.hasOwnProperty.call(message, "ActorName"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.ActorName);
                return writer;
            };
    
            /**
             * Encodes the specified RpcHead message, length delimited. Does not implicitly {@link message.RpcHead.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.RpcHead
             * @static
             * @param {message.IRpcHead} message RpcHead message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RpcHead.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RpcHead message from the specified reader or buffer.
             * @function decode
             * @memberof message.RpcHead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.RpcHead} RpcHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RpcHead.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RpcHead();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Id = reader.int64();
                        break;
                    case 2:
                        message.SocketId = reader.uint32();
                        break;
                    case 3:
                        message.SrcClusterId = reader.uint32();
                        break;
                    case 4:
                        message.ClusterId = reader.uint32();
                        break;
                    case 5:
                        message.DestServerType = reader.int32();
                        break;
                    case 6:
                        message.SendType = reader.int32();
                        break;
                    case 7:
                        message.ActorName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RpcHead message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.RpcHead
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.RpcHead} RpcHead
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RpcHead.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RpcHead message.
             * @function verify
             * @memberof message.RpcHead
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RpcHead.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                        return "Id: integer|Long expected";
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    if (!$util.isInteger(message.SocketId))
                        return "SocketId: integer expected";
                if (message.SrcClusterId != null && message.hasOwnProperty("SrcClusterId"))
                    if (!$util.isInteger(message.SrcClusterId))
                        return "SrcClusterId: integer expected";
                if (message.ClusterId != null && message.hasOwnProperty("ClusterId"))
                    if (!$util.isInteger(message.ClusterId))
                        return "ClusterId: integer expected";
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
                if (message.SendType != null && message.hasOwnProperty("SendType"))
                    switch (message.SendType) {
                    default:
                        return "SendType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.ActorName != null && message.hasOwnProperty("ActorName"))
                    if (!$util.isString(message.ActorName))
                        return "ActorName: string expected";
                return null;
            };
    
            /**
             * Creates a RpcHead message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.RpcHead
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.RpcHead} RpcHead
             */
            RpcHead.fromObject = function fromObject(object) {
                if (object instanceof $root.message.RpcHead)
                    return object;
                var message = new $root.message.RpcHead();
                if (object.Id != null)
                    if ($util.Long)
                        (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                    else if (typeof object.Id === "string")
                        message.Id = parseInt(object.Id, 10);
                    else if (typeof object.Id === "number")
                        message.Id = object.Id;
                    else if (typeof object.Id === "object")
                        message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
                if (object.SocketId != null)
                    message.SocketId = object.SocketId >>> 0;
                if (object.SrcClusterId != null)
                    message.SrcClusterId = object.SrcClusterId >>> 0;
                if (object.ClusterId != null)
                    message.ClusterId = object.ClusterId >>> 0;
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
                switch (object.SendType) {
                case "POINT":
                case 0:
                    message.SendType = 0;
                    break;
                case "BALANCE":
                case 1:
                    message.SendType = 1;
                    break;
                case "BOARD_CAST":
                case 2:
                    message.SendType = 2;
                    break;
                }
                if (object.ActorName != null)
                    message.ActorName = String(object.ActorName);
                return message;
            };
    
            /**
             * Creates a plain object from a RpcHead message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.RpcHead
             * @static
             * @param {message.RpcHead} message RpcHead
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RpcHead.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Id = options.longs === String ? "0" : 0;
                    object.SocketId = 0;
                    object.SrcClusterId = 0;
                    object.ClusterId = 0;
                    object.DestServerType = options.enums === String ? "NONE" : 0;
                    object.SendType = options.enums === String ? "POINT" : 0;
                    object.ActorName = "";
                }
                if (message.Id != null && message.hasOwnProperty("Id"))
                    if (typeof message.Id === "number")
                        object.Id = options.longs === String ? String(message.Id) : message.Id;
                    else
                        object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    object.SocketId = message.SocketId;
                if (message.SrcClusterId != null && message.hasOwnProperty("SrcClusterId"))
                    object.SrcClusterId = message.SrcClusterId;
                if (message.ClusterId != null && message.hasOwnProperty("ClusterId"))
                    object.ClusterId = message.ClusterId;
                if (message.DestServerType != null && message.hasOwnProperty("DestServerType"))
                    object.DestServerType = options.enums === String ? $root.message.SERVICE[message.DestServerType] : message.DestServerType;
                if (message.SendType != null && message.hasOwnProperty("SendType"))
                    object.SendType = options.enums === String ? $root.message.SEND[message.SendType] : message.SendType;
                if (message.ActorName != null && message.hasOwnProperty("ActorName"))
                    object.ActorName = message.ActorName;
                return object;
            };
    
            /**
             * Converts this RpcHead to JSON.
             * @function toJSON
             * @memberof message.RpcHead
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RpcHead.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RpcHead;
        })();
    
        message.RpcPacket = (function() {
    
            /**
             * Properties of a RpcPacket.
             * @memberof message
             * @interface IRpcPacket
             * @property {string|null} [FuncName] RpcPacket FuncName
             * @property {number|null} [ArgLen] RpcPacket ArgLen
             * @property {message.IRpcHead|null} [RpcHead] RpcPacket RpcHead
             * @property {Uint8Array|null} [RpcBody] RpcPacket RpcBody
             */
    
            /**
             * Constructs a new RpcPacket.
             * @memberof message
             * @classdesc Represents a RpcPacket.
             * @implements IRpcPacket
             * @constructor
             * @param {message.IRpcPacket=} [properties] Properties to set
             */
            function RpcPacket(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RpcPacket FuncName.
             * @member {string} FuncName
             * @memberof message.RpcPacket
             * @instance
             */
            RpcPacket.prototype.FuncName = "";
    
            /**
             * RpcPacket ArgLen.
             * @member {number} ArgLen
             * @memberof message.RpcPacket
             * @instance
             */
            RpcPacket.prototype.ArgLen = 0;
    
            /**
             * RpcPacket RpcHead.
             * @member {message.IRpcHead|null|undefined} RpcHead
             * @memberof message.RpcPacket
             * @instance
             */
            RpcPacket.prototype.RpcHead = null;
    
            /**
             * RpcPacket RpcBody.
             * @member {Uint8Array} RpcBody
             * @memberof message.RpcPacket
             * @instance
             */
            RpcPacket.prototype.RpcBody = $util.newBuffer([]);
    
            /**
             * Creates a new RpcPacket instance using the specified properties.
             * @function create
             * @memberof message.RpcPacket
             * @static
             * @param {message.IRpcPacket=} [properties] Properties to set
             * @returns {message.RpcPacket} RpcPacket instance
             */
            RpcPacket.create = function create(properties) {
                return new RpcPacket(properties);
            };
    
            /**
             * Encodes the specified RpcPacket message. Does not implicitly {@link message.RpcPacket.verify|verify} messages.
             * @function encode
             * @memberof message.RpcPacket
             * @static
             * @param {message.IRpcPacket} message RpcPacket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RpcPacket.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.FuncName != null && Object.hasOwnProperty.call(message, "FuncName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.FuncName);
                if (message.ArgLen != null && Object.hasOwnProperty.call(message, "ArgLen"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ArgLen);
                if (message.RpcHead != null && Object.hasOwnProperty.call(message, "RpcHead"))
                    $root.message.RpcHead.encode(message.RpcHead, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.RpcBody != null && Object.hasOwnProperty.call(message, "RpcBody"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.RpcBody);
                return writer;
            };
    
            /**
             * Encodes the specified RpcPacket message, length delimited. Does not implicitly {@link message.RpcPacket.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.RpcPacket
             * @static
             * @param {message.IRpcPacket} message RpcPacket message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RpcPacket.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RpcPacket message from the specified reader or buffer.
             * @function decode
             * @memberof message.RpcPacket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.RpcPacket} RpcPacket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RpcPacket.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RpcPacket();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.FuncName = reader.string();
                        break;
                    case 2:
                        message.ArgLen = reader.int32();
                        break;
                    case 3:
                        message.RpcHead = $root.message.RpcHead.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.RpcBody = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RpcPacket message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.RpcPacket
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.RpcPacket} RpcPacket
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RpcPacket.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RpcPacket message.
             * @function verify
             * @memberof message.RpcPacket
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RpcPacket.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.FuncName != null && message.hasOwnProperty("FuncName"))
                    if (!$util.isString(message.FuncName))
                        return "FuncName: string expected";
                if (message.ArgLen != null && message.hasOwnProperty("ArgLen"))
                    if (!$util.isInteger(message.ArgLen))
                        return "ArgLen: integer expected";
                if (message.RpcHead != null && message.hasOwnProperty("RpcHead")) {
                    var error = $root.message.RpcHead.verify(message.RpcHead);
                    if (error)
                        return "RpcHead." + error;
                }
                if (message.RpcBody != null && message.hasOwnProperty("RpcBody"))
                    if (!(message.RpcBody && typeof message.RpcBody.length === "number" || $util.isString(message.RpcBody)))
                        return "RpcBody: buffer expected";
                return null;
            };
    
            /**
             * Creates a RpcPacket message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.RpcPacket
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.RpcPacket} RpcPacket
             */
            RpcPacket.fromObject = function fromObject(object) {
                if (object instanceof $root.message.RpcPacket)
                    return object;
                var message = new $root.message.RpcPacket();
                if (object.FuncName != null)
                    message.FuncName = String(object.FuncName);
                if (object.ArgLen != null)
                    message.ArgLen = object.ArgLen | 0;
                if (object.RpcHead != null) {
                    if (typeof object.RpcHead !== "object")
                        throw TypeError(".message.RpcPacket.RpcHead: object expected");
                    message.RpcHead = $root.message.RpcHead.fromObject(object.RpcHead);
                }
                if (object.RpcBody != null)
                    if (typeof object.RpcBody === "string")
                        $util.base64.decode(object.RpcBody, message.RpcBody = $util.newBuffer($util.base64.length(object.RpcBody)), 0);
                    else if (object.RpcBody.length)
                        message.RpcBody = object.RpcBody;
                return message;
            };
    
            /**
             * Creates a plain object from a RpcPacket message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.RpcPacket
             * @static
             * @param {message.RpcPacket} message RpcPacket
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RpcPacket.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.FuncName = "";
                    object.ArgLen = 0;
                    object.RpcHead = null;
                    if (options.bytes === String)
                        object.RpcBody = "";
                    else {
                        object.RpcBody = [];
                        if (options.bytes !== Array)
                            object.RpcBody = $util.newBuffer(object.RpcBody);
                    }
                }
                if (message.FuncName != null && message.hasOwnProperty("FuncName"))
                    object.FuncName = message.FuncName;
                if (message.ArgLen != null && message.hasOwnProperty("ArgLen"))
                    object.ArgLen = message.ArgLen;
                if (message.RpcHead != null && message.hasOwnProperty("RpcHead"))
                    object.RpcHead = $root.message.RpcHead.toObject(message.RpcHead, options);
                if (message.RpcBody != null && message.hasOwnProperty("RpcBody"))
                    object.RpcBody = options.bytes === String ? $util.base64.encode(message.RpcBody, 0, message.RpcBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.RpcBody) : message.RpcBody;
                return object;
            };
    
            /**
             * Converts this RpcPacket to JSON.
             * @function toJSON
             * @memberof message.RpcPacket
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RpcPacket.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RpcPacket;
        })();
    
        message.ClusterInfo = (function() {
    
            /**
             * Properties of a ClusterInfo.
             * @memberof message
             * @interface IClusterInfo
             * @property {message.SERVICE|null} [Type] ClusterInfo Type
             * @property {string|null} [Ip] ClusterInfo Ip
             * @property {number|null} [Port] ClusterInfo Port
             * @property {number|null} [Weight] ClusterInfo Weight
             * @property {number|null} [SocketId] ClusterInfo SocketId
             */
    
            /**
             * Constructs a new ClusterInfo.
             * @memberof message
             * @classdesc Represents a ClusterInfo.
             * @implements IClusterInfo
             * @constructor
             * @param {message.IClusterInfo=} [properties] Properties to set
             */
            function ClusterInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ClusterInfo Type.
             * @member {message.SERVICE} Type
             * @memberof message.ClusterInfo
             * @instance
             */
            ClusterInfo.prototype.Type = 0;
    
            /**
             * ClusterInfo Ip.
             * @member {string} Ip
             * @memberof message.ClusterInfo
             * @instance
             */
            ClusterInfo.prototype.Ip = "";
    
            /**
             * ClusterInfo Port.
             * @member {number} Port
             * @memberof message.ClusterInfo
             * @instance
             */
            ClusterInfo.prototype.Port = 0;
    
            /**
             * ClusterInfo Weight.
             * @member {number} Weight
             * @memberof message.ClusterInfo
             * @instance
             */
            ClusterInfo.prototype.Weight = 0;
    
            /**
             * ClusterInfo SocketId.
             * @member {number} SocketId
             * @memberof message.ClusterInfo
             * @instance
             */
            ClusterInfo.prototype.SocketId = 0;
    
            /**
             * Creates a new ClusterInfo instance using the specified properties.
             * @function create
             * @memberof message.ClusterInfo
             * @static
             * @param {message.IClusterInfo=} [properties] Properties to set
             * @returns {message.ClusterInfo} ClusterInfo instance
             */
            ClusterInfo.create = function create(properties) {
                return new ClusterInfo(properties);
            };
    
            /**
             * Encodes the specified ClusterInfo message. Does not implicitly {@link message.ClusterInfo.verify|verify} messages.
             * @function encode
             * @memberof message.ClusterInfo
             * @static
             * @param {message.IClusterInfo} message ClusterInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClusterInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                if (message.Ip != null && Object.hasOwnProperty.call(message, "Ip"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Ip);
                if (message.Port != null && Object.hasOwnProperty.call(message, "Port"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Port);
                if (message.Weight != null && Object.hasOwnProperty.call(message, "Weight"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Weight);
                if (message.SocketId != null && Object.hasOwnProperty.call(message, "SocketId"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.SocketId);
                return writer;
            };
    
            /**
             * Encodes the specified ClusterInfo message, length delimited. Does not implicitly {@link message.ClusterInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.ClusterInfo
             * @static
             * @param {message.IClusterInfo} message ClusterInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClusterInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ClusterInfo message from the specified reader or buffer.
             * @function decode
             * @memberof message.ClusterInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.ClusterInfo} ClusterInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClusterInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ClusterInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Type = reader.int32();
                        break;
                    case 2:
                        message.Ip = reader.string();
                        break;
                    case 3:
                        message.Port = reader.int32();
                        break;
                    case 4:
                        message.Weight = reader.int32();
                        break;
                    case 5:
                        message.SocketId = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ClusterInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.ClusterInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.ClusterInfo} ClusterInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClusterInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ClusterInfo message.
             * @function verify
             * @memberof message.ClusterInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClusterInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Type != null && message.hasOwnProperty("Type"))
                    switch (message.Type) {
                    default:
                        return "Type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
                if (message.Ip != null && message.hasOwnProperty("Ip"))
                    if (!$util.isString(message.Ip))
                        return "Ip: string expected";
                if (message.Port != null && message.hasOwnProperty("Port"))
                    if (!$util.isInteger(message.Port))
                        return "Port: integer expected";
                if (message.Weight != null && message.hasOwnProperty("Weight"))
                    if (!$util.isInteger(message.Weight))
                        return "Weight: integer expected";
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    if (!$util.isInteger(message.SocketId))
                        return "SocketId: integer expected";
                return null;
            };
    
            /**
             * Creates a ClusterInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.ClusterInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.ClusterInfo} ClusterInfo
             */
            ClusterInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.message.ClusterInfo)
                    return object;
                var message = new $root.message.ClusterInfo();
                switch (object.Type) {
                case "NONE":
                case 0:
                    message.Type = 0;
                    break;
                case "CLIENT":
                case 1:
                    message.Type = 1;
                    break;
                case "GATESERVER":
                case 2:
                    message.Type = 2;
                    break;
                case "ACCOUNTSERVER":
                case 3:
                    message.Type = 3;
                    break;
                case "WORLDSERVER":
                case 4:
                    message.Type = 4;
                    break;
                case "ZONESERVER":
                case 5:
                    message.Type = 5;
                    break;
                case "WORLDDBSERVER":
                case 6:
                    message.Type = 6;
                    break;
                }
                if (object.Ip != null)
                    message.Ip = String(object.Ip);
                if (object.Port != null)
                    message.Port = object.Port | 0;
                if (object.Weight != null)
                    message.Weight = object.Weight | 0;
                if (object.SocketId != null)
                    message.SocketId = object.SocketId >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ClusterInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.ClusterInfo
             * @static
             * @param {message.ClusterInfo} message ClusterInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClusterInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Type = options.enums === String ? "NONE" : 0;
                    object.Ip = "";
                    object.Port = 0;
                    object.Weight = 0;
                    object.SocketId = 0;
                }
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = options.enums === String ? $root.message.SERVICE[message.Type] : message.Type;
                if (message.Ip != null && message.hasOwnProperty("Ip"))
                    object.Ip = message.Ip;
                if (message.Port != null && message.hasOwnProperty("Port"))
                    object.Port = message.Port;
                if (message.Weight != null && message.hasOwnProperty("Weight"))
                    object.Weight = message.Weight;
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    object.SocketId = message.SocketId;
                return object;
            };
    
            /**
             * Converts this ClusterInfo to JSON.
             * @function toJSON
             * @memberof message.ClusterInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClusterInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ClusterInfo;
        })();
    
        return message;
    })();

    return $root;
});
