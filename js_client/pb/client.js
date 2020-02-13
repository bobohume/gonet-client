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
    
        message.C_A_LoginRequest = (function() {
    
            /**
             * Properties of a C_A_LoginRequest.
             * @memberof message
             * @interface IC_A_LoginRequest
             * @property {message.IIpacket|null} [PacketHead] C_A_LoginRequest PacketHead
             * @property {string|null} [AccountName] C_A_LoginRequest AccountName
             * @property {string|null} [BuildNo] C_A_LoginRequest BuildNo
             * @property {number|null} [SocketId] C_A_LoginRequest SocketId
             */
    
            /**
             * Constructs a new C_A_LoginRequest.
             * @memberof message
             * @classdesc Represents a C_A_LoginRequest.
             * @implements IC_A_LoginRequest
             * @constructor
             * @param {message.IC_A_LoginRequest=} [properties] Properties to set
             */
            function C_A_LoginRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_A_LoginRequest PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_A_LoginRequest
             * @instance
             */
            C_A_LoginRequest.prototype.PacketHead = null;
    
            /**
             * C_A_LoginRequest AccountName.
             * @member {string} AccountName
             * @memberof message.C_A_LoginRequest
             * @instance
             */
            C_A_LoginRequest.prototype.AccountName = "";
    
            /**
             * C_A_LoginRequest BuildNo.
             * @member {string} BuildNo
             * @memberof message.C_A_LoginRequest
             * @instance
             */
            C_A_LoginRequest.prototype.BuildNo = "";
    
            /**
             * C_A_LoginRequest SocketId.
             * @member {number} SocketId
             * @memberof message.C_A_LoginRequest
             * @instance
             */
            C_A_LoginRequest.prototype.SocketId = 0;
    
            /**
             * Creates a new C_A_LoginRequest instance using the specified properties.
             * @function create
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {message.IC_A_LoginRequest=} [properties] Properties to set
             * @returns {message.C_A_LoginRequest} C_A_LoginRequest instance
             */
            C_A_LoginRequest.create = function create(properties) {
                return new C_A_LoginRequest(properties);
            };
    
            /**
             * Encodes the specified C_A_LoginRequest message. Does not implicitly {@link message.C_A_LoginRequest.verify|verify} messages.
             * @function encode
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {message.IC_A_LoginRequest} message C_A_LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_A_LoginRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.AccountName);
                if (message.BuildNo != null && message.hasOwnProperty("BuildNo"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.BuildNo);
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.SocketId);
                return writer;
            };
    
            /**
             * Encodes the specified C_A_LoginRequest message, length delimited. Does not implicitly {@link message.C_A_LoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {message.IC_A_LoginRequest} message C_A_LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_A_LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_A_LoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_A_LoginRequest} C_A_LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_A_LoginRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_A_LoginRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.AccountName = reader.string();
                        break;
                    case 3:
                        message.BuildNo = reader.string();
                        break;
                    case 4:
                        message.SocketId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_A_LoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_A_LoginRequest} C_A_LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_A_LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_A_LoginRequest message.
             * @function verify
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_A_LoginRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    if (!$util.isString(message.AccountName))
                        return "AccountName: string expected";
                if (message.BuildNo != null && message.hasOwnProperty("BuildNo"))
                    if (!$util.isString(message.BuildNo))
                        return "BuildNo: string expected";
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    if (!$util.isInteger(message.SocketId))
                        return "SocketId: integer expected";
                return null;
            };
    
            /**
             * Creates a C_A_LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_A_LoginRequest} C_A_LoginRequest
             */
            C_A_LoginRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_A_LoginRequest)
                    return object;
                var message = new $root.message.C_A_LoginRequest();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_A_LoginRequest.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.AccountName != null)
                    message.AccountName = String(object.AccountName);
                if (object.BuildNo != null)
                    message.BuildNo = String(object.BuildNo);
                if (object.SocketId != null)
                    message.SocketId = object.SocketId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C_A_LoginRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_A_LoginRequest
             * @static
             * @param {message.C_A_LoginRequest} message C_A_LoginRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_A_LoginRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.AccountName = "";
                    object.BuildNo = "";
                    object.SocketId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    object.AccountName = message.AccountName;
                if (message.BuildNo != null && message.hasOwnProperty("BuildNo"))
                    object.BuildNo = message.BuildNo;
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    object.SocketId = message.SocketId;
                return object;
            };
    
            /**
             * Converts this C_A_LoginRequest to JSON.
             * @function toJSON
             * @memberof message.C_A_LoginRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_A_LoginRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_A_LoginRequest;
        })();
    
        message.A_C_LoginResponse = (function() {
    
            /**
             * Properties of a A_C_LoginResponse.
             * @memberof message
             * @interface IA_C_LoginResponse
             * @property {message.IIpacket|null} [PacketHead] A_C_LoginResponse PacketHead
             * @property {number|null} [Error] A_C_LoginResponse Error
             * @property {number|null} [SocketId] A_C_LoginResponse SocketId
             * @property {string|null} [AccountName] A_C_LoginResponse AccountName
             */
    
            /**
             * Constructs a new A_C_LoginResponse.
             * @memberof message
             * @classdesc Represents a A_C_LoginResponse.
             * @implements IA_C_LoginResponse
             * @constructor
             * @param {message.IA_C_LoginResponse=} [properties] Properties to set
             */
            function A_C_LoginResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * A_C_LoginResponse PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.A_C_LoginResponse
             * @instance
             */
            A_C_LoginResponse.prototype.PacketHead = null;
    
            /**
             * A_C_LoginResponse Error.
             * @member {number} Error
             * @memberof message.A_C_LoginResponse
             * @instance
             */
            A_C_LoginResponse.prototype.Error = 0;
    
            /**
             * A_C_LoginResponse SocketId.
             * @member {number} SocketId
             * @memberof message.A_C_LoginResponse
             * @instance
             */
            A_C_LoginResponse.prototype.SocketId = 0;
    
            /**
             * A_C_LoginResponse AccountName.
             * @member {string} AccountName
             * @memberof message.A_C_LoginResponse
             * @instance
             */
            A_C_LoginResponse.prototype.AccountName = "";
    
            /**
             * Creates a new A_C_LoginResponse instance using the specified properties.
             * @function create
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {message.IA_C_LoginResponse=} [properties] Properties to set
             * @returns {message.A_C_LoginResponse} A_C_LoginResponse instance
             */
            A_C_LoginResponse.create = function create(properties) {
                return new A_C_LoginResponse(properties);
            };
    
            /**
             * Encodes the specified A_C_LoginResponse message. Does not implicitly {@link message.A_C_LoginResponse.verify|verify} messages.
             * @function encode
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {message.IA_C_LoginResponse} message A_C_LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            A_C_LoginResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Error != null && message.hasOwnProperty("Error"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Error);
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SocketId);
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.AccountName);
                return writer;
            };
    
            /**
             * Encodes the specified A_C_LoginResponse message, length delimited. Does not implicitly {@link message.A_C_LoginResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {message.IA_C_LoginResponse} message A_C_LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            A_C_LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a A_C_LoginResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.A_C_LoginResponse} A_C_LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            A_C_LoginResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.A_C_LoginResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Error = reader.int32();
                        break;
                    case 3:
                        message.SocketId = reader.int32();
                        break;
                    case 4:
                        message.AccountName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a A_C_LoginResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.A_C_LoginResponse} A_C_LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            A_C_LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a A_C_LoginResponse message.
             * @function verify
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            A_C_LoginResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    if (!$util.isInteger(message.Error))
                        return "Error: integer expected";
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    if (!$util.isInteger(message.SocketId))
                        return "SocketId: integer expected";
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    if (!$util.isString(message.AccountName))
                        return "AccountName: string expected";
                return null;
            };
    
            /**
             * Creates a A_C_LoginResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.A_C_LoginResponse} A_C_LoginResponse
             */
            A_C_LoginResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.message.A_C_LoginResponse)
                    return object;
                var message = new $root.message.A_C_LoginResponse();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.A_C_LoginResponse.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Error != null)
                    message.Error = object.Error | 0;
                if (object.SocketId != null)
                    message.SocketId = object.SocketId | 0;
                if (object.AccountName != null)
                    message.AccountName = String(object.AccountName);
                return message;
            };
    
            /**
             * Creates a plain object from a A_C_LoginResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.A_C_LoginResponse
             * @static
             * @param {message.A_C_LoginResponse} message A_C_LoginResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            A_C_LoginResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Error = 0;
                    object.SocketId = 0;
                    object.AccountName = "";
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = message.Error;
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    object.SocketId = message.SocketId;
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    object.AccountName = message.AccountName;
                return object;
            };
    
            /**
             * Converts this A_C_LoginResponse to JSON.
             * @function toJSON
             * @memberof message.A_C_LoginResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            A_C_LoginResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return A_C_LoginResponse;
        })();
    
        message.C_A_RegisterRequest = (function() {
    
            /**
             * Properties of a C_A_RegisterRequest.
             * @memberof message
             * @interface IC_A_RegisterRequest
             * @property {message.IIpacket|null} [PacketHead] C_A_RegisterRequest PacketHead
             * @property {string|null} [AccountName] C_A_RegisterRequest AccountName
             * @property {number|null} [SocketId] C_A_RegisterRequest SocketId
             */
    
            /**
             * Constructs a new C_A_RegisterRequest.
             * @memberof message
             * @classdesc Represents a C_A_RegisterRequest.
             * @implements IC_A_RegisterRequest
             * @constructor
             * @param {message.IC_A_RegisterRequest=} [properties] Properties to set
             */
            function C_A_RegisterRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_A_RegisterRequest PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_A_RegisterRequest
             * @instance
             */
            C_A_RegisterRequest.prototype.PacketHead = null;
    
            /**
             * C_A_RegisterRequest AccountName.
             * @member {string} AccountName
             * @memberof message.C_A_RegisterRequest
             * @instance
             */
            C_A_RegisterRequest.prototype.AccountName = "";
    
            /**
             * C_A_RegisterRequest SocketId.
             * @member {number} SocketId
             * @memberof message.C_A_RegisterRequest
             * @instance
             */
            C_A_RegisterRequest.prototype.SocketId = 0;
    
            /**
             * Creates a new C_A_RegisterRequest instance using the specified properties.
             * @function create
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {message.IC_A_RegisterRequest=} [properties] Properties to set
             * @returns {message.C_A_RegisterRequest} C_A_RegisterRequest instance
             */
            C_A_RegisterRequest.create = function create(properties) {
                return new C_A_RegisterRequest(properties);
            };
    
            /**
             * Encodes the specified C_A_RegisterRequest message. Does not implicitly {@link message.C_A_RegisterRequest.verify|verify} messages.
             * @function encode
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {message.IC_A_RegisterRequest} message C_A_RegisterRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_A_RegisterRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.AccountName);
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SocketId);
                return writer;
            };
    
            /**
             * Encodes the specified C_A_RegisterRequest message, length delimited. Does not implicitly {@link message.C_A_RegisterRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {message.IC_A_RegisterRequest} message C_A_RegisterRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_A_RegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_A_RegisterRequest message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_A_RegisterRequest} C_A_RegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_A_RegisterRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_A_RegisterRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.AccountName = reader.string();
                        break;
                    case 3:
                        message.SocketId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_A_RegisterRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_A_RegisterRequest} C_A_RegisterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_A_RegisterRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_A_RegisterRequest message.
             * @function verify
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_A_RegisterRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    if (!$util.isString(message.AccountName))
                        return "AccountName: string expected";
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    if (!$util.isInteger(message.SocketId))
                        return "SocketId: integer expected";
                return null;
            };
    
            /**
             * Creates a C_A_RegisterRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_A_RegisterRequest} C_A_RegisterRequest
             */
            C_A_RegisterRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_A_RegisterRequest)
                    return object;
                var message = new $root.message.C_A_RegisterRequest();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_A_RegisterRequest.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.AccountName != null)
                    message.AccountName = String(object.AccountName);
                if (object.SocketId != null)
                    message.SocketId = object.SocketId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C_A_RegisterRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_A_RegisterRequest
             * @static
             * @param {message.C_A_RegisterRequest} message C_A_RegisterRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_A_RegisterRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.AccountName = "";
                    object.SocketId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.AccountName != null && message.hasOwnProperty("AccountName"))
                    object.AccountName = message.AccountName;
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    object.SocketId = message.SocketId;
                return object;
            };
    
            /**
             * Converts this C_A_RegisterRequest to JSON.
             * @function toJSON
             * @memberof message.C_A_RegisterRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_A_RegisterRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_A_RegisterRequest;
        })();
    
        message.A_C_RegisterResponse = (function() {
    
            /**
             * Properties of a A_C_RegisterResponse.
             * @memberof message
             * @interface IA_C_RegisterResponse
             * @property {message.IIpacket|null} [PacketHead] A_C_RegisterResponse PacketHead
             * @property {number|null} [Error] A_C_RegisterResponse Error
             * @property {number|null} [SocketId] A_C_RegisterResponse SocketId
             */
    
            /**
             * Constructs a new A_C_RegisterResponse.
             * @memberof message
             * @classdesc Represents a A_C_RegisterResponse.
             * @implements IA_C_RegisterResponse
             * @constructor
             * @param {message.IA_C_RegisterResponse=} [properties] Properties to set
             */
            function A_C_RegisterResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * A_C_RegisterResponse PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.A_C_RegisterResponse
             * @instance
             */
            A_C_RegisterResponse.prototype.PacketHead = null;
    
            /**
             * A_C_RegisterResponse Error.
             * @member {number} Error
             * @memberof message.A_C_RegisterResponse
             * @instance
             */
            A_C_RegisterResponse.prototype.Error = 0;
    
            /**
             * A_C_RegisterResponse SocketId.
             * @member {number} SocketId
             * @memberof message.A_C_RegisterResponse
             * @instance
             */
            A_C_RegisterResponse.prototype.SocketId = 0;
    
            /**
             * Creates a new A_C_RegisterResponse instance using the specified properties.
             * @function create
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {message.IA_C_RegisterResponse=} [properties] Properties to set
             * @returns {message.A_C_RegisterResponse} A_C_RegisterResponse instance
             */
            A_C_RegisterResponse.create = function create(properties) {
                return new A_C_RegisterResponse(properties);
            };
    
            /**
             * Encodes the specified A_C_RegisterResponse message. Does not implicitly {@link message.A_C_RegisterResponse.verify|verify} messages.
             * @function encode
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {message.IA_C_RegisterResponse} message A_C_RegisterResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            A_C_RegisterResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Error != null && message.hasOwnProperty("Error"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Error);
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SocketId);
                return writer;
            };
    
            /**
             * Encodes the specified A_C_RegisterResponse message, length delimited. Does not implicitly {@link message.A_C_RegisterResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {message.IA_C_RegisterResponse} message A_C_RegisterResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            A_C_RegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a A_C_RegisterResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.A_C_RegisterResponse} A_C_RegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            A_C_RegisterResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.A_C_RegisterResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Error = reader.int32();
                        break;
                    case 3:
                        message.SocketId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a A_C_RegisterResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.A_C_RegisterResponse} A_C_RegisterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            A_C_RegisterResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a A_C_RegisterResponse message.
             * @function verify
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            A_C_RegisterResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    if (!$util.isInteger(message.Error))
                        return "Error: integer expected";
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    if (!$util.isInteger(message.SocketId))
                        return "SocketId: integer expected";
                return null;
            };
    
            /**
             * Creates a A_C_RegisterResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.A_C_RegisterResponse} A_C_RegisterResponse
             */
            A_C_RegisterResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.message.A_C_RegisterResponse)
                    return object;
                var message = new $root.message.A_C_RegisterResponse();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.A_C_RegisterResponse.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Error != null)
                    message.Error = object.Error | 0;
                if (object.SocketId != null)
                    message.SocketId = object.SocketId | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a A_C_RegisterResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.A_C_RegisterResponse
             * @static
             * @param {message.A_C_RegisterResponse} message A_C_RegisterResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            A_C_RegisterResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Error = 0;
                    object.SocketId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = message.Error;
                if (message.SocketId != null && message.hasOwnProperty("SocketId"))
                    object.SocketId = message.SocketId;
                return object;
            };
    
            /**
             * Converts this A_C_RegisterResponse to JSON.
             * @function toJSON
             * @memberof message.A_C_RegisterResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            A_C_RegisterResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return A_C_RegisterResponse;
        })();
    
        message.C_W_CreatePlayerRequest = (function() {
    
            /**
             * Properties of a C_W_CreatePlayerRequest.
             * @memberof message
             * @interface IC_W_CreatePlayerRequest
             * @property {message.IIpacket|null} [PacketHead] C_W_CreatePlayerRequest PacketHead
             * @property {string|null} [PlayerName] C_W_CreatePlayerRequest PlayerName
             * @property {number|null} [Sex] C_W_CreatePlayerRequest Sex
             */
    
            /**
             * Constructs a new C_W_CreatePlayerRequest.
             * @memberof message
             * @classdesc Represents a C_W_CreatePlayerRequest.
             * @implements IC_W_CreatePlayerRequest
             * @constructor
             * @param {message.IC_W_CreatePlayerRequest=} [properties] Properties to set
             */
            function C_W_CreatePlayerRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_W_CreatePlayerRequest PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_W_CreatePlayerRequest
             * @instance
             */
            C_W_CreatePlayerRequest.prototype.PacketHead = null;
    
            /**
             * C_W_CreatePlayerRequest PlayerName.
             * @member {string} PlayerName
             * @memberof message.C_W_CreatePlayerRequest
             * @instance
             */
            C_W_CreatePlayerRequest.prototype.PlayerName = "";
    
            /**
             * C_W_CreatePlayerRequest Sex.
             * @member {number} Sex
             * @memberof message.C_W_CreatePlayerRequest
             * @instance
             */
            C_W_CreatePlayerRequest.prototype.Sex = 0;
    
            /**
             * Creates a new C_W_CreatePlayerRequest instance using the specified properties.
             * @function create
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {message.IC_W_CreatePlayerRequest=} [properties] Properties to set
             * @returns {message.C_W_CreatePlayerRequest} C_W_CreatePlayerRequest instance
             */
            C_W_CreatePlayerRequest.create = function create(properties) {
                return new C_W_CreatePlayerRequest(properties);
            };
    
            /**
             * Encodes the specified C_W_CreatePlayerRequest message. Does not implicitly {@link message.C_W_CreatePlayerRequest.verify|verify} messages.
             * @function encode
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {message.IC_W_CreatePlayerRequest} message C_W_CreatePlayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_CreatePlayerRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.PlayerName);
                if (message.Sex != null && message.hasOwnProperty("Sex"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Sex);
                return writer;
            };
    
            /**
             * Encodes the specified C_W_CreatePlayerRequest message, length delimited. Does not implicitly {@link message.C_W_CreatePlayerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {message.IC_W_CreatePlayerRequest} message C_W_CreatePlayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_CreatePlayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_W_CreatePlayerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_W_CreatePlayerRequest} C_W_CreatePlayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_CreatePlayerRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_CreatePlayerRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.PlayerName = reader.string();
                        break;
                    case 3:
                        message.Sex = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_W_CreatePlayerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_W_CreatePlayerRequest} C_W_CreatePlayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_CreatePlayerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_W_CreatePlayerRequest message.
             * @function verify
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_W_CreatePlayerRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
                    if (!$util.isString(message.PlayerName))
                        return "PlayerName: string expected";
                if (message.Sex != null && message.hasOwnProperty("Sex"))
                    if (!$util.isInteger(message.Sex))
                        return "Sex: integer expected";
                return null;
            };
    
            /**
             * Creates a C_W_CreatePlayerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_W_CreatePlayerRequest} C_W_CreatePlayerRequest
             */
            C_W_CreatePlayerRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_W_CreatePlayerRequest)
                    return object;
                var message = new $root.message.C_W_CreatePlayerRequest();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_W_CreatePlayerRequest.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.PlayerName != null)
                    message.PlayerName = String(object.PlayerName);
                if (object.Sex != null)
                    message.Sex = object.Sex | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a C_W_CreatePlayerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_W_CreatePlayerRequest
             * @static
             * @param {message.C_W_CreatePlayerRequest} message C_W_CreatePlayerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_W_CreatePlayerRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.PlayerName = "";
                    object.Sex = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.PlayerName != null && message.hasOwnProperty("PlayerName"))
                    object.PlayerName = message.PlayerName;
                if (message.Sex != null && message.hasOwnProperty("Sex"))
                    object.Sex = message.Sex;
                return object;
            };
    
            /**
             * Converts this C_W_CreatePlayerRequest to JSON.
             * @function toJSON
             * @memberof message.C_W_CreatePlayerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_W_CreatePlayerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_W_CreatePlayerRequest;
        })();
    
        message.W_C_CreatePlayerResponse = (function() {
    
            /**
             * Properties of a W_C_CreatePlayerResponse.
             * @memberof message
             * @interface IW_C_CreatePlayerResponse
             * @property {message.IIpacket|null} [PacketHead] W_C_CreatePlayerResponse PacketHead
             * @property {number|null} [Error] W_C_CreatePlayerResponse Error
             * @property {number|Long|null} [PlayerId] W_C_CreatePlayerResponse PlayerId
             */
    
            /**
             * Constructs a new W_C_CreatePlayerResponse.
             * @memberof message
             * @classdesc Represents a W_C_CreatePlayerResponse.
             * @implements IW_C_CreatePlayerResponse
             * @constructor
             * @param {message.IW_C_CreatePlayerResponse=} [properties] Properties to set
             */
            function W_C_CreatePlayerResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_CreatePlayerResponse PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_CreatePlayerResponse
             * @instance
             */
            W_C_CreatePlayerResponse.prototype.PacketHead = null;
    
            /**
             * W_C_CreatePlayerResponse Error.
             * @member {number} Error
             * @memberof message.W_C_CreatePlayerResponse
             * @instance
             */
            W_C_CreatePlayerResponse.prototype.Error = 0;
    
            /**
             * W_C_CreatePlayerResponse PlayerId.
             * @member {number|Long} PlayerId
             * @memberof message.W_C_CreatePlayerResponse
             * @instance
             */
            W_C_CreatePlayerResponse.prototype.PlayerId = 0;
    
            /**
             * Creates a new W_C_CreatePlayerResponse instance using the specified properties.
             * @function create
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {message.IW_C_CreatePlayerResponse=} [properties] Properties to set
             * @returns {message.W_C_CreatePlayerResponse} W_C_CreatePlayerResponse instance
             */
            W_C_CreatePlayerResponse.create = function create(properties) {
                return new W_C_CreatePlayerResponse(properties);
            };
    
            /**
             * Encodes the specified W_C_CreatePlayerResponse message. Does not implicitly {@link message.W_C_CreatePlayerResponse.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {message.IW_C_CreatePlayerResponse} message W_C_CreatePlayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_CreatePlayerResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Error != null && message.hasOwnProperty("Error"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Error);
                if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PlayerId);
                return writer;
            };
    
            /**
             * Encodes the specified W_C_CreatePlayerResponse message, length delimited. Does not implicitly {@link message.W_C_CreatePlayerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {message.IW_C_CreatePlayerResponse} message W_C_CreatePlayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_CreatePlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_CreatePlayerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_CreatePlayerResponse} W_C_CreatePlayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_CreatePlayerResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_CreatePlayerResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Error = reader.int32();
                        break;
                    case 3:
                        message.PlayerId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_CreatePlayerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_CreatePlayerResponse} W_C_CreatePlayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_CreatePlayerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_CreatePlayerResponse message.
             * @function verify
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_CreatePlayerResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    if (!$util.isInteger(message.Error))
                        return "Error: integer expected";
                if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                    if (!$util.isInteger(message.PlayerId) && !(message.PlayerId && $util.isInteger(message.PlayerId.low) && $util.isInteger(message.PlayerId.high)))
                        return "PlayerId: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a W_C_CreatePlayerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_CreatePlayerResponse} W_C_CreatePlayerResponse
             */
            W_C_CreatePlayerResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_CreatePlayerResponse)
                    return object;
                var message = new $root.message.W_C_CreatePlayerResponse();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_CreatePlayerResponse.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Error != null)
                    message.Error = object.Error | 0;
                if (object.PlayerId != null)
                    if ($util.Long)
                        (message.PlayerId = $util.Long.fromValue(object.PlayerId)).unsigned = false;
                    else if (typeof object.PlayerId === "string")
                        message.PlayerId = parseInt(object.PlayerId, 10);
                    else if (typeof object.PlayerId === "number")
                        message.PlayerId = object.PlayerId;
                    else if (typeof object.PlayerId === "object")
                        message.PlayerId = new $util.LongBits(object.PlayerId.low >>> 0, object.PlayerId.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_CreatePlayerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_CreatePlayerResponse
             * @static
             * @param {message.W_C_CreatePlayerResponse} message W_C_CreatePlayerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_CreatePlayerResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Error = 0;
                    object.PlayerId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = message.Error;
                if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                    if (typeof message.PlayerId === "number")
                        object.PlayerId = options.longs === String ? String(message.PlayerId) : message.PlayerId;
                    else
                        object.PlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerId) : options.longs === Number ? new $util.LongBits(message.PlayerId.low >>> 0, message.PlayerId.high >>> 0).toNumber() : message.PlayerId;
                return object;
            };
    
            /**
             * Converts this W_C_CreatePlayerResponse to JSON.
             * @function toJSON
             * @memberof message.W_C_CreatePlayerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_CreatePlayerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_CreatePlayerResponse;
        })();
    
        message.C_W_Game_LoginRequset = (function() {
    
            /**
             * Properties of a C_W_Game_LoginRequset.
             * @memberof message
             * @interface IC_W_Game_LoginRequset
             * @property {message.IIpacket|null} [PacketHead] C_W_Game_LoginRequset PacketHead
             * @property {number|Long|null} [PlayerId] C_W_Game_LoginRequset PlayerId
             */
    
            /**
             * Constructs a new C_W_Game_LoginRequset.
             * @memberof message
             * @classdesc Represents a C_W_Game_LoginRequset.
             * @implements IC_W_Game_LoginRequset
             * @constructor
             * @param {message.IC_W_Game_LoginRequset=} [properties] Properties to set
             */
            function C_W_Game_LoginRequset(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_W_Game_LoginRequset PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_W_Game_LoginRequset
             * @instance
             */
            C_W_Game_LoginRequset.prototype.PacketHead = null;
    
            /**
             * C_W_Game_LoginRequset PlayerId.
             * @member {number|Long} PlayerId
             * @memberof message.C_W_Game_LoginRequset
             * @instance
             */
            C_W_Game_LoginRequset.prototype.PlayerId = 0;
    
            /**
             * Creates a new C_W_Game_LoginRequset instance using the specified properties.
             * @function create
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {message.IC_W_Game_LoginRequset=} [properties] Properties to set
             * @returns {message.C_W_Game_LoginRequset} C_W_Game_LoginRequset instance
             */
            C_W_Game_LoginRequset.create = function create(properties) {
                return new C_W_Game_LoginRequset(properties);
            };
    
            /**
             * Encodes the specified C_W_Game_LoginRequset message. Does not implicitly {@link message.C_W_Game_LoginRequset.verify|verify} messages.
             * @function encode
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {message.IC_W_Game_LoginRequset} message C_W_Game_LoginRequset message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_Game_LoginRequset.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.PlayerId);
                return writer;
            };
    
            /**
             * Encodes the specified C_W_Game_LoginRequset message, length delimited. Does not implicitly {@link message.C_W_Game_LoginRequset.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {message.IC_W_Game_LoginRequset} message C_W_Game_LoginRequset message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_Game_LoginRequset.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_W_Game_LoginRequset message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_W_Game_LoginRequset} C_W_Game_LoginRequset
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_Game_LoginRequset.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_Game_LoginRequset();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.PlayerId = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_W_Game_LoginRequset message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_W_Game_LoginRequset} C_W_Game_LoginRequset
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_Game_LoginRequset.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_W_Game_LoginRequset message.
             * @function verify
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_W_Game_LoginRequset.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                    if (!$util.isInteger(message.PlayerId) && !(message.PlayerId && $util.isInteger(message.PlayerId.low) && $util.isInteger(message.PlayerId.high)))
                        return "PlayerId: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a C_W_Game_LoginRequset message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_W_Game_LoginRequset} C_W_Game_LoginRequset
             */
            C_W_Game_LoginRequset.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_W_Game_LoginRequset)
                    return object;
                var message = new $root.message.C_W_Game_LoginRequset();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_W_Game_LoginRequset.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.PlayerId != null)
                    if ($util.Long)
                        (message.PlayerId = $util.Long.fromValue(object.PlayerId)).unsigned = false;
                    else if (typeof object.PlayerId === "string")
                        message.PlayerId = parseInt(object.PlayerId, 10);
                    else if (typeof object.PlayerId === "number")
                        message.PlayerId = object.PlayerId;
                    else if (typeof object.PlayerId === "object")
                        message.PlayerId = new $util.LongBits(object.PlayerId.low >>> 0, object.PlayerId.high >>> 0).toNumber();
                return message;
            };
    
            /**
             * Creates a plain object from a C_W_Game_LoginRequset message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_W_Game_LoginRequset
             * @static
             * @param {message.C_W_Game_LoginRequset} message C_W_Game_LoginRequset
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_W_Game_LoginRequset.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.PlayerId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.PlayerId != null && message.hasOwnProperty("PlayerId"))
                    if (typeof message.PlayerId === "number")
                        object.PlayerId = options.longs === String ? String(message.PlayerId) : message.PlayerId;
                    else
                        object.PlayerId = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerId) : options.longs === Number ? new $util.LongBits(message.PlayerId.low >>> 0, message.PlayerId.high >>> 0).toNumber() : message.PlayerId;
                return object;
            };
    
            /**
             * Converts this C_W_Game_LoginRequset to JSON.
             * @function toJSON
             * @memberof message.C_W_Game_LoginRequset
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_W_Game_LoginRequset.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_W_Game_LoginRequset;
        })();
    
        message.W_C_SelectPlayerResponse = (function() {
    
            /**
             * Properties of a W_C_SelectPlayerResponse.
             * @memberof message
             * @interface IW_C_SelectPlayerResponse
             * @property {message.IIpacket|null} [PacketHead] W_C_SelectPlayerResponse PacketHead
             * @property {number|Long|null} [AccountId] W_C_SelectPlayerResponse AccountId
             * @property {Array.<message.IPlayerData>|null} [PlayerData] W_C_SelectPlayerResponse PlayerData
             */
    
            /**
             * Constructs a new W_C_SelectPlayerResponse.
             * @memberof message
             * @classdesc Represents a W_C_SelectPlayerResponse.
             * @implements IW_C_SelectPlayerResponse
             * @constructor
             * @param {message.IW_C_SelectPlayerResponse=} [properties] Properties to set
             */
            function W_C_SelectPlayerResponse(properties) {
                this.PlayerData = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_SelectPlayerResponse PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_SelectPlayerResponse
             * @instance
             */
            W_C_SelectPlayerResponse.prototype.PacketHead = null;
    
            /**
             * W_C_SelectPlayerResponse AccountId.
             * @member {number|Long} AccountId
             * @memberof message.W_C_SelectPlayerResponse
             * @instance
             */
            W_C_SelectPlayerResponse.prototype.AccountId = 0;
    
            /**
             * W_C_SelectPlayerResponse PlayerData.
             * @member {Array.<message.IPlayerData>} PlayerData
             * @memberof message.W_C_SelectPlayerResponse
             * @instance
             */
            W_C_SelectPlayerResponse.prototype.PlayerData = $util.emptyArray;
    
            /**
             * Creates a new W_C_SelectPlayerResponse instance using the specified properties.
             * @function create
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {message.IW_C_SelectPlayerResponse=} [properties] Properties to set
             * @returns {message.W_C_SelectPlayerResponse} W_C_SelectPlayerResponse instance
             */
            W_C_SelectPlayerResponse.create = function create(properties) {
                return new W_C_SelectPlayerResponse(properties);
            };
    
            /**
             * Encodes the specified W_C_SelectPlayerResponse message. Does not implicitly {@link message.W_C_SelectPlayerResponse.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {message.IW_C_SelectPlayerResponse} message W_C_SelectPlayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_SelectPlayerResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.AccountId != null && message.hasOwnProperty("AccountId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AccountId);
                if (message.PlayerData != null && message.PlayerData.length)
                    for (var i = 0; i < message.PlayerData.length; ++i)
                        $root.message.PlayerData.encode(message.PlayerData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified W_C_SelectPlayerResponse message, length delimited. Does not implicitly {@link message.W_C_SelectPlayerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {message.IW_C_SelectPlayerResponse} message W_C_SelectPlayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_SelectPlayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_SelectPlayerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_SelectPlayerResponse} W_C_SelectPlayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_SelectPlayerResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_SelectPlayerResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.AccountId = reader.int64();
                        break;
                    case 3:
                        if (!(message.PlayerData && message.PlayerData.length))
                            message.PlayerData = [];
                        message.PlayerData.push($root.message.PlayerData.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_SelectPlayerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_SelectPlayerResponse} W_C_SelectPlayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_SelectPlayerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_SelectPlayerResponse message.
             * @function verify
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_SelectPlayerResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.AccountId != null && message.hasOwnProperty("AccountId"))
                    if (!$util.isInteger(message.AccountId) && !(message.AccountId && $util.isInteger(message.AccountId.low) && $util.isInteger(message.AccountId.high)))
                        return "AccountId: integer|Long expected";
                if (message.PlayerData != null && message.hasOwnProperty("PlayerData")) {
                    if (!Array.isArray(message.PlayerData))
                        return "PlayerData: array expected";
                    for (var i = 0; i < message.PlayerData.length; ++i) {
                        var error = $root.message.PlayerData.verify(message.PlayerData[i]);
                        if (error)
                            return "PlayerData." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a W_C_SelectPlayerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_SelectPlayerResponse} W_C_SelectPlayerResponse
             */
            W_C_SelectPlayerResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_SelectPlayerResponse)
                    return object;
                var message = new $root.message.W_C_SelectPlayerResponse();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_SelectPlayerResponse.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.AccountId != null)
                    if ($util.Long)
                        (message.AccountId = $util.Long.fromValue(object.AccountId)).unsigned = false;
                    else if (typeof object.AccountId === "string")
                        message.AccountId = parseInt(object.AccountId, 10);
                    else if (typeof object.AccountId === "number")
                        message.AccountId = object.AccountId;
                    else if (typeof object.AccountId === "object")
                        message.AccountId = new $util.LongBits(object.AccountId.low >>> 0, object.AccountId.high >>> 0).toNumber();
                if (object.PlayerData) {
                    if (!Array.isArray(object.PlayerData))
                        throw TypeError(".message.W_C_SelectPlayerResponse.PlayerData: array expected");
                    message.PlayerData = [];
                    for (var i = 0; i < object.PlayerData.length; ++i) {
                        if (typeof object.PlayerData[i] !== "object")
                            throw TypeError(".message.W_C_SelectPlayerResponse.PlayerData: object expected");
                        message.PlayerData[i] = $root.message.PlayerData.fromObject(object.PlayerData[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_SelectPlayerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_SelectPlayerResponse
             * @static
             * @param {message.W_C_SelectPlayerResponse} message W_C_SelectPlayerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_SelectPlayerResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.PlayerData = [];
                if (options.defaults) {
                    object.PacketHead = null;
                    object.AccountId = 0;
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.AccountId != null && message.hasOwnProperty("AccountId"))
                    if (typeof message.AccountId === "number")
                        object.AccountId = options.longs === String ? String(message.AccountId) : message.AccountId;
                    else
                        object.AccountId = options.longs === String ? $util.Long.prototype.toString.call(message.AccountId) : options.longs === Number ? new $util.LongBits(message.AccountId.low >>> 0, message.AccountId.high >>> 0).toNumber() : message.AccountId;
                if (message.PlayerData && message.PlayerData.length) {
                    object.PlayerData = [];
                    for (var j = 0; j < message.PlayerData.length; ++j)
                        object.PlayerData[j] = $root.message.PlayerData.toObject(message.PlayerData[j], options);
                }
                return object;
            };
    
            /**
             * Converts this W_C_SelectPlayerResponse to JSON.
             * @function toJSON
             * @memberof message.W_C_SelectPlayerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_SelectPlayerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_SelectPlayerResponse;
        })();
    
        message.C_G_LogoutResponse = (function() {
    
            /**
             * Properties of a C_G_LogoutResponse.
             * @memberof message
             * @interface IC_G_LogoutResponse
             * @property {message.IIpacket|null} [PacketHead] C_G_LogoutResponse PacketHead
             */
    
            /**
             * Constructs a new C_G_LogoutResponse.
             * @memberof message
             * @classdesc Represents a C_G_LogoutResponse.
             * @implements IC_G_LogoutResponse
             * @constructor
             * @param {message.IC_G_LogoutResponse=} [properties] Properties to set
             */
            function C_G_LogoutResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_G_LogoutResponse PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_G_LogoutResponse
             * @instance
             */
            C_G_LogoutResponse.prototype.PacketHead = null;
    
            /**
             * Creates a new C_G_LogoutResponse instance using the specified properties.
             * @function create
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {message.IC_G_LogoutResponse=} [properties] Properties to set
             * @returns {message.C_G_LogoutResponse} C_G_LogoutResponse instance
             */
            C_G_LogoutResponse.create = function create(properties) {
                return new C_G_LogoutResponse(properties);
            };
    
            /**
             * Encodes the specified C_G_LogoutResponse message. Does not implicitly {@link message.C_G_LogoutResponse.verify|verify} messages.
             * @function encode
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {message.IC_G_LogoutResponse} message C_G_LogoutResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_G_LogoutResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified C_G_LogoutResponse message, length delimited. Does not implicitly {@link message.C_G_LogoutResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {message.IC_G_LogoutResponse} message C_G_LogoutResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_G_LogoutResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_G_LogoutResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_G_LogoutResponse} C_G_LogoutResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_G_LogoutResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_G_LogoutResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_G_LogoutResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_G_LogoutResponse} C_G_LogoutResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_G_LogoutResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_G_LogoutResponse message.
             * @function verify
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_G_LogoutResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                return null;
            };
    
            /**
             * Creates a C_G_LogoutResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_G_LogoutResponse} C_G_LogoutResponse
             */
            C_G_LogoutResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_G_LogoutResponse)
                    return object;
                var message = new $root.message.C_G_LogoutResponse();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_G_LogoutResponse.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a C_G_LogoutResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_G_LogoutResponse
             * @static
             * @param {message.C_G_LogoutResponse} message C_G_LogoutResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_G_LogoutResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.PacketHead = null;
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                return object;
            };
    
            /**
             * Converts this C_G_LogoutResponse to JSON.
             * @function toJSON
             * @memberof message.C_G_LogoutResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_G_LogoutResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_G_LogoutResponse;
        })();
    
        message.C_W_ChatMessage = (function() {
    
            /**
             * Properties of a C_W_ChatMessage.
             * @memberof message
             * @interface IC_W_ChatMessage
             * @property {message.IIpacket|null} [PacketHead] C_W_ChatMessage PacketHead
             * @property {number|Long|null} [Sender] C_W_ChatMessage Sender
             * @property {number|Long|null} [Recver] C_W_ChatMessage Recver
             * @property {number|null} [MessageType] C_W_ChatMessage MessageType
             * @property {string|null} [Message] C_W_ChatMessage Message
             */
    
            /**
             * Constructs a new C_W_ChatMessage.
             * @memberof message
             * @classdesc Represents a C_W_ChatMessage.
             * @implements IC_W_ChatMessage
             * @constructor
             * @param {message.IC_W_ChatMessage=} [properties] Properties to set
             */
            function C_W_ChatMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_W_ChatMessage PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.C_W_ChatMessage
             * @instance
             */
            C_W_ChatMessage.prototype.PacketHead = null;
    
            /**
             * C_W_ChatMessage Sender.
             * @member {number|Long} Sender
             * @memberof message.C_W_ChatMessage
             * @instance
             */
            C_W_ChatMessage.prototype.Sender = 0;
    
            /**
             * C_W_ChatMessage Recver.
             * @member {number|Long} Recver
             * @memberof message.C_W_ChatMessage
             * @instance
             */
            C_W_ChatMessage.prototype.Recver = 0;
    
            /**
             * C_W_ChatMessage MessageType.
             * @member {number} MessageType
             * @memberof message.C_W_ChatMessage
             * @instance
             */
            C_W_ChatMessage.prototype.MessageType = 0;
    
            /**
             * C_W_ChatMessage Message.
             * @member {string} Message
             * @memberof message.C_W_ChatMessage
             * @instance
             */
            C_W_ChatMessage.prototype.Message = "";
    
            /**
             * Creates a new C_W_ChatMessage instance using the specified properties.
             * @function create
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {message.IC_W_ChatMessage=} [properties] Properties to set
             * @returns {message.C_W_ChatMessage} C_W_ChatMessage instance
             */
            C_W_ChatMessage.create = function create(properties) {
                return new C_W_ChatMessage(properties);
            };
    
            /**
             * Encodes the specified C_W_ChatMessage message. Does not implicitly {@link message.C_W_ChatMessage.verify|verify} messages.
             * @function encode
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {message.IC_W_ChatMessage} message C_W_ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_ChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Sender != null && message.hasOwnProperty("Sender"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Sender);
                if (message.Recver != null && message.hasOwnProperty("Recver"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Recver);
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MessageType);
                if (message.Message != null && message.hasOwnProperty("Message"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.Message);
                return writer;
            };
    
            /**
             * Encodes the specified C_W_ChatMessage message, length delimited. Does not implicitly {@link message.C_W_ChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {message.IC_W_ChatMessage} message C_W_ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_W_ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_W_ChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_W_ChatMessage} C_W_ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_ChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_W_ChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Sender = reader.int64();
                        break;
                    case 3:
                        message.Recver = reader.int64();
                        break;
                    case 4:
                        message.MessageType = reader.int32();
                        break;
                    case 5:
                        message.Message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_W_ChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_W_ChatMessage} C_W_ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_W_ChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_W_ChatMessage message.
             * @function verify
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_W_ChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Sender != null && message.hasOwnProperty("Sender"))
                    if (!$util.isInteger(message.Sender) && !(message.Sender && $util.isInteger(message.Sender.low) && $util.isInteger(message.Sender.high)))
                        return "Sender: integer|Long expected";
                if (message.Recver != null && message.hasOwnProperty("Recver"))
                    if (!$util.isInteger(message.Recver) && !(message.Recver && $util.isInteger(message.Recver.low) && $util.isInteger(message.Recver.high)))
                        return "Recver: integer|Long expected";
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    if (!$util.isInteger(message.MessageType))
                        return "MessageType: integer expected";
                if (message.Message != null && message.hasOwnProperty("Message"))
                    if (!$util.isString(message.Message))
                        return "Message: string expected";
                return null;
            };
    
            /**
             * Creates a C_W_ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_W_ChatMessage} C_W_ChatMessage
             */
            C_W_ChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_W_ChatMessage)
                    return object;
                var message = new $root.message.C_W_ChatMessage();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.C_W_ChatMessage.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Sender != null)
                    if ($util.Long)
                        (message.Sender = $util.Long.fromValue(object.Sender)).unsigned = false;
                    else if (typeof object.Sender === "string")
                        message.Sender = parseInt(object.Sender, 10);
                    else if (typeof object.Sender === "number")
                        message.Sender = object.Sender;
                    else if (typeof object.Sender === "object")
                        message.Sender = new $util.LongBits(object.Sender.low >>> 0, object.Sender.high >>> 0).toNumber();
                if (object.Recver != null)
                    if ($util.Long)
                        (message.Recver = $util.Long.fromValue(object.Recver)).unsigned = false;
                    else if (typeof object.Recver === "string")
                        message.Recver = parseInt(object.Recver, 10);
                    else if (typeof object.Recver === "number")
                        message.Recver = object.Recver;
                    else if (typeof object.Recver === "object")
                        message.Recver = new $util.LongBits(object.Recver.low >>> 0, object.Recver.high >>> 0).toNumber();
                if (object.MessageType != null)
                    message.MessageType = object.MessageType | 0;
                if (object.Message != null)
                    message.Message = String(object.Message);
                return message;
            };
    
            /**
             * Creates a plain object from a C_W_ChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_W_ChatMessage
             * @static
             * @param {message.C_W_ChatMessage} message C_W_ChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_W_ChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Sender = 0;
                    object.Recver = 0;
                    object.MessageType = 0;
                    object.Message = "";
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Sender != null && message.hasOwnProperty("Sender"))
                    if (typeof message.Sender === "number")
                        object.Sender = options.longs === String ? String(message.Sender) : message.Sender;
                    else
                        object.Sender = options.longs === String ? $util.Long.prototype.toString.call(message.Sender) : options.longs === Number ? new $util.LongBits(message.Sender.low >>> 0, message.Sender.high >>> 0).toNumber() : message.Sender;
                if (message.Recver != null && message.hasOwnProperty("Recver"))
                    if (typeof message.Recver === "number")
                        object.Recver = options.longs === String ? String(message.Recver) : message.Recver;
                    else
                        object.Recver = options.longs === String ? $util.Long.prototype.toString.call(message.Recver) : options.longs === Number ? new $util.LongBits(message.Recver.low >>> 0, message.Recver.high >>> 0).toNumber() : message.Recver;
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    object.MessageType = message.MessageType;
                if (message.Message != null && message.hasOwnProperty("Message"))
                    object.Message = message.Message;
                return object;
            };
    
            /**
             * Converts this C_W_ChatMessage to JSON.
             * @function toJSON
             * @memberof message.C_W_ChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_W_ChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_W_ChatMessage;
        })();
    
        message.W_C_ChatMessage = (function() {
    
            /**
             * Properties of a W_C_ChatMessage.
             * @memberof message
             * @interface IW_C_ChatMessage
             * @property {message.IIpacket|null} [PacketHead] W_C_ChatMessage PacketHead
             * @property {number|Long|null} [Sender] W_C_ChatMessage Sender
             * @property {string|null} [SenderName] W_C_ChatMessage SenderName
             * @property {number|Long|null} [Recver] W_C_ChatMessage Recver
             * @property {string|null} [RecverName] W_C_ChatMessage RecverName
             * @property {number|null} [MessageType] W_C_ChatMessage MessageType
             * @property {string|null} [Message] W_C_ChatMessage Message
             */
    
            /**
             * Constructs a new W_C_ChatMessage.
             * @memberof message
             * @classdesc Represents a W_C_ChatMessage.
             * @implements IW_C_ChatMessage
             * @constructor
             * @param {message.IW_C_ChatMessage=} [properties] Properties to set
             */
            function W_C_ChatMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_ChatMessage PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.PacketHead = null;
    
            /**
             * W_C_ChatMessage Sender.
             * @member {number|Long} Sender
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.Sender = 0;
    
            /**
             * W_C_ChatMessage SenderName.
             * @member {string} SenderName
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.SenderName = "";
    
            /**
             * W_C_ChatMessage Recver.
             * @member {number|Long} Recver
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.Recver = 0;
    
            /**
             * W_C_ChatMessage RecverName.
             * @member {string} RecverName
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.RecverName = "";
    
            /**
             * W_C_ChatMessage MessageType.
             * @member {number} MessageType
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.MessageType = 0;
    
            /**
             * W_C_ChatMessage Message.
             * @member {string} Message
             * @memberof message.W_C_ChatMessage
             * @instance
             */
            W_C_ChatMessage.prototype.Message = "";
    
            /**
             * Creates a new W_C_ChatMessage instance using the specified properties.
             * @function create
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {message.IW_C_ChatMessage=} [properties] Properties to set
             * @returns {message.W_C_ChatMessage} W_C_ChatMessage instance
             */
            W_C_ChatMessage.create = function create(properties) {
                return new W_C_ChatMessage(properties);
            };
    
            /**
             * Encodes the specified W_C_ChatMessage message. Does not implicitly {@link message.W_C_ChatMessage.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {message.IW_C_ChatMessage} message W_C_ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_ChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Sender != null && message.hasOwnProperty("Sender"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Sender);
                if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.SenderName);
                if (message.Recver != null && message.hasOwnProperty("Recver"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Recver);
                if (message.RecverName != null && message.hasOwnProperty("RecverName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.RecverName);
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.MessageType);
                if (message.Message != null && message.hasOwnProperty("Message"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.Message);
                return writer;
            };
    
            /**
             * Encodes the specified W_C_ChatMessage message, length delimited. Does not implicitly {@link message.W_C_ChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {message.IW_C_ChatMessage} message W_C_ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_ChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_ChatMessage} W_C_ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_ChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_ChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Sender = reader.int64();
                        break;
                    case 3:
                        message.SenderName = reader.string();
                        break;
                    case 4:
                        message.Recver = reader.int64();
                        break;
                    case 5:
                        message.RecverName = reader.string();
                        break;
                    case 6:
                        message.MessageType = reader.int32();
                        break;
                    case 7:
                        message.Message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_ChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_ChatMessage} W_C_ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_ChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_ChatMessage message.
             * @function verify
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_ChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead")) {
                    var error = $root.message.Ipacket.verify(message.PacketHead);
                    if (error)
                        return "PacketHead." + error;
                }
                if (message.Sender != null && message.hasOwnProperty("Sender"))
                    if (!$util.isInteger(message.Sender) && !(message.Sender && $util.isInteger(message.Sender.low) && $util.isInteger(message.Sender.high)))
                        return "Sender: integer|Long expected";
                if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                    if (!$util.isString(message.SenderName))
                        return "SenderName: string expected";
                if (message.Recver != null && message.hasOwnProperty("Recver"))
                    if (!$util.isInteger(message.Recver) && !(message.Recver && $util.isInteger(message.Recver.low) && $util.isInteger(message.Recver.high)))
                        return "Recver: integer|Long expected";
                if (message.RecverName != null && message.hasOwnProperty("RecverName"))
                    if (!$util.isString(message.RecverName))
                        return "RecverName: string expected";
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    if (!$util.isInteger(message.MessageType))
                        return "MessageType: integer expected";
                if (message.Message != null && message.hasOwnProperty("Message"))
                    if (!$util.isString(message.Message))
                        return "Message: string expected";
                return null;
            };
    
            /**
             * Creates a W_C_ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_ChatMessage} W_C_ChatMessage
             */
            W_C_ChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_ChatMessage)
                    return object;
                var message = new $root.message.W_C_ChatMessage();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_ChatMessage.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.Sender != null)
                    if ($util.Long)
                        (message.Sender = $util.Long.fromValue(object.Sender)).unsigned = false;
                    else if (typeof object.Sender === "string")
                        message.Sender = parseInt(object.Sender, 10);
                    else if (typeof object.Sender === "number")
                        message.Sender = object.Sender;
                    else if (typeof object.Sender === "object")
                        message.Sender = new $util.LongBits(object.Sender.low >>> 0, object.Sender.high >>> 0).toNumber();
                if (object.SenderName != null)
                    message.SenderName = String(object.SenderName);
                if (object.Recver != null)
                    if ($util.Long)
                        (message.Recver = $util.Long.fromValue(object.Recver)).unsigned = false;
                    else if (typeof object.Recver === "string")
                        message.Recver = parseInt(object.Recver, 10);
                    else if (typeof object.Recver === "number")
                        message.Recver = object.Recver;
                    else if (typeof object.Recver === "object")
                        message.Recver = new $util.LongBits(object.Recver.low >>> 0, object.Recver.high >>> 0).toNumber();
                if (object.RecverName != null)
                    message.RecverName = String(object.RecverName);
                if (object.MessageType != null)
                    message.MessageType = object.MessageType | 0;
                if (object.Message != null)
                    message.Message = String(object.Message);
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_ChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_ChatMessage
             * @static
             * @param {message.W_C_ChatMessage} message W_C_ChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_ChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.PacketHead = null;
                    object.Sender = 0;
                    object.SenderName = "";
                    object.Recver = 0;
                    object.RecverName = "";
                    object.MessageType = 0;
                    object.Message = "";
                }
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    object.PacketHead = $root.message.Ipacket.toObject(message.PacketHead, options);
                if (message.Sender != null && message.hasOwnProperty("Sender"))
                    if (typeof message.Sender === "number")
                        object.Sender = options.longs === String ? String(message.Sender) : message.Sender;
                    else
                        object.Sender = options.longs === String ? $util.Long.prototype.toString.call(message.Sender) : options.longs === Number ? new $util.LongBits(message.Sender.low >>> 0, message.Sender.high >>> 0).toNumber() : message.Sender;
                if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                    object.SenderName = message.SenderName;
                if (message.Recver != null && message.hasOwnProperty("Recver"))
                    if (typeof message.Recver === "number")
                        object.Recver = options.longs === String ? String(message.Recver) : message.Recver;
                    else
                        object.Recver = options.longs === String ? $util.Long.prototype.toString.call(message.Recver) : options.longs === Number ? new $util.LongBits(message.Recver.low >>> 0, message.Recver.high >>> 0).toNumber() : message.Recver;
                if (message.RecverName != null && message.hasOwnProperty("RecverName"))
                    object.RecverName = message.RecverName;
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    object.MessageType = message.MessageType;
                if (message.Message != null && message.hasOwnProperty("Message"))
                    object.Message = message.Message;
                return object;
            };
    
            /**
             * Converts this W_C_ChatMessage to JSON.
             * @function toJSON
             * @memberof message.W_C_ChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_ChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_ChatMessage;
        })();
    
        message.W_C_Test = (function() {
    
            /**
             * Properties of a W_C_Test.
             * @memberof message
             * @interface IW_C_Test
             * @property {Array.<number>|null} [Recv] W_C_Test Recv
             */
    
            /**
             * Constructs a new W_C_Test.
             * @memberof message
             * @classdesc Represents a W_C_Test.
             * @implements IW_C_Test
             * @constructor
             * @param {message.IW_C_Test=} [properties] Properties to set
             */
            function W_C_Test(properties) {
                this.Recv = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_Test Recv.
             * @member {Array.<number>} Recv
             * @memberof message.W_C_Test
             * @instance
             */
            W_C_Test.prototype.Recv = $util.emptyArray;
    
            /**
             * Creates a new W_C_Test instance using the specified properties.
             * @function create
             * @memberof message.W_C_Test
             * @static
             * @param {message.IW_C_Test=} [properties] Properties to set
             * @returns {message.W_C_Test} W_C_Test instance
             */
            W_C_Test.create = function create(properties) {
                return new W_C_Test(properties);
            };
    
            /**
             * Encodes the specified W_C_Test message. Does not implicitly {@link message.W_C_Test.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_Test
             * @static
             * @param {message.IW_C_Test} message W_C_Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Recv != null && message.Recv.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Recv.length; ++i)
                        writer.int32(message.Recv[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified W_C_Test message, length delimited. Does not implicitly {@link message.W_C_Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_Test
             * @static
             * @param {message.IW_C_Test} message W_C_Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_Test message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_Test} W_C_Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_Test();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Recv && message.Recv.length))
                            message.Recv = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Recv.push(reader.int32());
                        } else
                            message.Recv.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_Test message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_Test} W_C_Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_Test.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_Test message.
             * @function verify
             * @memberof message.W_C_Test
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_Test.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Recv != null && message.hasOwnProperty("Recv")) {
                    if (!Array.isArray(message.Recv))
                        return "Recv: array expected";
                    for (var i = 0; i < message.Recv.length; ++i)
                        if (!$util.isInteger(message.Recv[i]))
                            return "Recv: integer[] expected";
                }
                return null;
            };
    
            /**
             * Creates a W_C_Test message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_Test} W_C_Test
             */
            W_C_Test.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_Test)
                    return object;
                var message = new $root.message.W_C_Test();
                if (object.Recv) {
                    if (!Array.isArray(object.Recv))
                        throw TypeError(".message.W_C_Test.Recv: array expected");
                    message.Recv = [];
                    for (var i = 0; i < object.Recv.length; ++i)
                        message.Recv[i] = object.Recv[i] | 0;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_Test
             * @static
             * @param {message.W_C_Test} message W_C_Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_Test.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Recv = [];
                if (message.Recv && message.Recv.length) {
                    object.Recv = [];
                    for (var j = 0; j < message.Recv.length; ++j)
                        object.Recv[j] = message.Recv[j];
                }
                return object;
            };
    
            /**
             * Converts this W_C_Test to JSON.
             * @function toJSON
             * @memberof message.W_C_Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_Test;
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
