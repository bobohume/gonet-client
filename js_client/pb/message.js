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
