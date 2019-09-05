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
             * @property {number|null} [DestServerType] Ipacket DestServerType
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
             * @member {number} DestServerType
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
                    if (!$util.isInteger(message.DestServerType))
                        return "DestServerType: integer expected";
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
                if (object.DestServerType != null)
                    message.DestServerType = object.DestServerType | 0;
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
                    object.DestServerType = 0;
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
                    object.DestServerType = message.DestServerType;
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
            W_C_CreatePlayerResponse.prototype.PlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.PlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.PlayerId = options.longs === String ? "0" : 0;
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
            W_C_SelectPlayerResponse.prototype.AccountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.AccountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.AccountId = options.longs === String ? "0" : 0;
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
    
        message.A_C_LoginRequest = (function() {
    
            /**
             * Properties of a A_C_LoginRequest.
             * @memberof message
             * @interface IA_C_LoginRequest
             * @property {message.IIpacket|null} [PacketHead] A_C_LoginRequest PacketHead
             * @property {number|null} [Error] A_C_LoginRequest Error
             * @property {number|null} [SocketId] A_C_LoginRequest SocketId
             * @property {string|null} [AccountName] A_C_LoginRequest AccountName
             */
    
            /**
             * Constructs a new A_C_LoginRequest.
             * @memberof message
             * @classdesc Represents a A_C_LoginRequest.
             * @implements IA_C_LoginRequest
             * @constructor
             * @param {message.IA_C_LoginRequest=} [properties] Properties to set
             */
            function A_C_LoginRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * A_C_LoginRequest PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.A_C_LoginRequest
             * @instance
             */
            A_C_LoginRequest.prototype.PacketHead = null;
    
            /**
             * A_C_LoginRequest Error.
             * @member {number} Error
             * @memberof message.A_C_LoginRequest
             * @instance
             */
            A_C_LoginRequest.prototype.Error = 0;
    
            /**
             * A_C_LoginRequest SocketId.
             * @member {number} SocketId
             * @memberof message.A_C_LoginRequest
             * @instance
             */
            A_C_LoginRequest.prototype.SocketId = 0;
    
            /**
             * A_C_LoginRequest AccountName.
             * @member {string} AccountName
             * @memberof message.A_C_LoginRequest
             * @instance
             */
            A_C_LoginRequest.prototype.AccountName = "";
    
            /**
             * Creates a new A_C_LoginRequest instance using the specified properties.
             * @function create
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {message.IA_C_LoginRequest=} [properties] Properties to set
             * @returns {message.A_C_LoginRequest} A_C_LoginRequest instance
             */
            A_C_LoginRequest.create = function create(properties) {
                return new A_C_LoginRequest(properties);
            };
    
            /**
             * Encodes the specified A_C_LoginRequest message. Does not implicitly {@link message.A_C_LoginRequest.verify|verify} messages.
             * @function encode
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {message.IA_C_LoginRequest} message A_C_LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            A_C_LoginRequest.encode = function encode(message, writer) {
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
             * Encodes the specified A_C_LoginRequest message, length delimited. Does not implicitly {@link message.A_C_LoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {message.IA_C_LoginRequest} message A_C_LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            A_C_LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a A_C_LoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.A_C_LoginRequest} A_C_LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            A_C_LoginRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.A_C_LoginRequest();
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
             * Decodes a A_C_LoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.A_C_LoginRequest} A_C_LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            A_C_LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a A_C_LoginRequest message.
             * @function verify
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            A_C_LoginRequest.verify = function verify(message) {
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
             * Creates a A_C_LoginRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.A_C_LoginRequest} A_C_LoginRequest
             */
            A_C_LoginRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.message.A_C_LoginRequest)
                    return object;
                var message = new $root.message.A_C_LoginRequest();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.A_C_LoginRequest.PacketHead: object expected");
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
             * Creates a plain object from a A_C_LoginRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.A_C_LoginRequest
             * @static
             * @param {message.A_C_LoginRequest} message A_C_LoginRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            A_C_LoginRequest.toObject = function toObject(message, options) {
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
             * Converts this A_C_LoginRequest to JSON.
             * @function toJSON
             * @memberof message.A_C_LoginRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            A_C_LoginRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return A_C_LoginRequest;
        })();
    
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
                    }
                    if (message.Mode != null && message.hasOwnProperty("Mode"))
                        object.Mode = message.Mode;
                    if (message.normal != null && message.hasOwnProperty("normal"))
                        object.normal = $root.message.C_W_Move.Move.Normal.toObject(message.normal, options);
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
            W_C_LoginMap.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
    
        message.W_C_ENTITY = (function() {
    
            /**
             * Properties of a W_C_ENTITY.
             * @memberof message
             * @interface IW_C_ENTITY
             * @property {message.IIpacket|null} [PacketHead] W_C_ENTITY PacketHead
             * @property {Array.<message.W_C_ENTITY.IEntity>|null} [EntityInfo] W_C_ENTITY EntityInfo
             */
    
            /**
             * Constructs a new W_C_ENTITY.
             * @memberof message
             * @classdesc Represents a W_C_ENTITY.
             * @implements IW_C_ENTITY
             * @constructor
             * @param {message.IW_C_ENTITY=} [properties] Properties to set
             */
            function W_C_ENTITY(properties) {
                this.EntityInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_ENTITY PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_ENTITY
             * @instance
             */
            W_C_ENTITY.prototype.PacketHead = null;
    
            /**
             * W_C_ENTITY EntityInfo.
             * @member {Array.<message.W_C_ENTITY.IEntity>} EntityInfo
             * @memberof message.W_C_ENTITY
             * @instance
             */
            W_C_ENTITY.prototype.EntityInfo = $util.emptyArray;
    
            /**
             * Creates a new W_C_ENTITY instance using the specified properties.
             * @function create
             * @memberof message.W_C_ENTITY
             * @static
             * @param {message.IW_C_ENTITY=} [properties] Properties to set
             * @returns {message.W_C_ENTITY} W_C_ENTITY instance
             */
            W_C_ENTITY.create = function create(properties) {
                return new W_C_ENTITY(properties);
            };
    
            /**
             * Encodes the specified W_C_ENTITY message. Does not implicitly {@link message.W_C_ENTITY.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_ENTITY
             * @static
             * @param {message.IW_C_ENTITY} message W_C_ENTITY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_ENTITY.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.PacketHead != null && message.hasOwnProperty("PacketHead"))
                    $root.message.Ipacket.encode(message.PacketHead, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.EntityInfo != null && message.EntityInfo.length)
                    for (var i = 0; i < message.EntityInfo.length; ++i)
                        $root.message.W_C_ENTITY.Entity.encode(message.EntityInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified W_C_ENTITY message, length delimited. Does not implicitly {@link message.W_C_ENTITY.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_ENTITY
             * @static
             * @param {message.IW_C_ENTITY} message W_C_ENTITY message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_ENTITY.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_ENTITY message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_ENTITY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_ENTITY} W_C_ENTITY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_ENTITY.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_ENTITY();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.PacketHead = $root.message.Ipacket.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.EntityInfo && message.EntityInfo.length))
                            message.EntityInfo = [];
                        message.EntityInfo.push($root.message.W_C_ENTITY.Entity.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a W_C_ENTITY message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_ENTITY
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_ENTITY} W_C_ENTITY
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_ENTITY.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_ENTITY message.
             * @function verify
             * @memberof message.W_C_ENTITY
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_ENTITY.verify = function verify(message) {
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
                        var error = $root.message.W_C_ENTITY.Entity.verify(message.EntityInfo[i]);
                        if (error)
                            return "EntityInfo." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a W_C_ENTITY message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_ENTITY
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_ENTITY} W_C_ENTITY
             */
            W_C_ENTITY.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_ENTITY)
                    return object;
                var message = new $root.message.W_C_ENTITY();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_ENTITY.PacketHead: object expected");
                    message.PacketHead = $root.message.Ipacket.fromObject(object.PacketHead);
                }
                if (object.EntityInfo) {
                    if (!Array.isArray(object.EntityInfo))
                        throw TypeError(".message.W_C_ENTITY.EntityInfo: array expected");
                    message.EntityInfo = [];
                    for (var i = 0; i < object.EntityInfo.length; ++i) {
                        if (typeof object.EntityInfo[i] !== "object")
                            throw TypeError(".message.W_C_ENTITY.EntityInfo: object expected");
                        message.EntityInfo[i] = $root.message.W_C_ENTITY.Entity.fromObject(object.EntityInfo[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_ENTITY message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_ENTITY
             * @static
             * @param {message.W_C_ENTITY} message W_C_ENTITY
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_ENTITY.toObject = function toObject(message, options) {
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
                        object.EntityInfo[j] = $root.message.W_C_ENTITY.Entity.toObject(message.EntityInfo[j], options);
                }
                return object;
            };
    
            /**
             * Converts this W_C_ENTITY to JSON.
             * @function toJSON
             * @memberof message.W_C_ENTITY
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_ENTITY.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            W_C_ENTITY.Entity = (function() {
    
                /**
                 * Properties of an Entity.
                 * @memberof message.W_C_ENTITY
                 * @interface IEntity
                 * @property {number|Long|null} [Id] Entity Id
                 * @property {message.W_C_ENTITY.Entity.IDataMask|null} [Data] Entity Data
                 * @property {message.W_C_ENTITY.Entity.IMoveMask|null} [Move] Entity Move
                 */
    
                /**
                 * Constructs a new Entity.
                 * @memberof message.W_C_ENTITY
                 * @classdesc Represents an Entity.
                 * @implements IEntity
                 * @constructor
                 * @param {message.W_C_ENTITY.IEntity=} [properties] Properties to set
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
                 * @memberof message.W_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Entity Data.
                 * @member {message.W_C_ENTITY.Entity.IDataMask|null|undefined} Data
                 * @memberof message.W_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Data = null;
    
                /**
                 * Entity Move.
                 * @member {message.W_C_ENTITY.Entity.IMoveMask|null|undefined} Move
                 * @memberof message.W_C_ENTITY.Entity
                 * @instance
                 */
                Entity.prototype.Move = null;
    
                /**
                 * Creates a new Entity instance using the specified properties.
                 * @function create
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {message.W_C_ENTITY.IEntity=} [properties] Properties to set
                 * @returns {message.W_C_ENTITY.Entity} Entity instance
                 */
                Entity.create = function create(properties) {
                    return new Entity(properties);
                };
    
                /**
                 * Encodes the specified Entity message. Does not implicitly {@link message.W_C_ENTITY.Entity.verify|verify} messages.
                 * @function encode
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {message.W_C_ENTITY.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Id != null && message.hasOwnProperty("Id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
                    if (message.Data != null && message.hasOwnProperty("Data"))
                        $root.message.W_C_ENTITY.Entity.DataMask.encode(message.Data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.Move != null && message.hasOwnProperty("Move"))
                        $root.message.W_C_ENTITY.Entity.MoveMask.encode(message.Move, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Entity message, length delimited. Does not implicitly {@link message.W_C_ENTITY.Entity.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {message.W_C_ENTITY.IEntity} message Entity message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Entity.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Entity message from the specified reader or buffer.
                 * @function decode
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {message.W_C_ENTITY.Entity} Entity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Entity.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_ENTITY.Entity();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Id = reader.int64();
                            break;
                        case 2:
                            message.Data = $root.message.W_C_ENTITY.Entity.DataMask.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.Move = $root.message.W_C_ENTITY.Entity.MoveMask.decode(reader, reader.uint32());
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
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {message.W_C_ENTITY.Entity} Entity
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
                 * @memberof message.W_C_ENTITY.Entity
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
                        var error = $root.message.W_C_ENTITY.Entity.DataMask.verify(message.Data);
                        if (error)
                            return "Data." + error;
                    }
                    if (message.Move != null && message.hasOwnProperty("Move")) {
                        var error = $root.message.W_C_ENTITY.Entity.MoveMask.verify(message.Move);
                        if (error)
                            return "Move." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {message.W_C_ENTITY.Entity} Entity
                 */
                Entity.fromObject = function fromObject(object) {
                    if (object instanceof $root.message.W_C_ENTITY.Entity)
                        return object;
                    var message = new $root.message.W_C_ENTITY.Entity();
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
                            throw TypeError(".message.W_C_ENTITY.Entity.Data: object expected");
                        message.Data = $root.message.W_C_ENTITY.Entity.DataMask.fromObject(object.Data);
                    }
                    if (object.Move != null) {
                        if (typeof object.Move !== "object")
                            throw TypeError(".message.W_C_ENTITY.Entity.Move: object expected");
                        message.Move = $root.message.W_C_ENTITY.Entity.MoveMask.fromObject(object.Move);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an Entity message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof message.W_C_ENTITY.Entity
                 * @static
                 * @param {message.W_C_ENTITY.Entity} message Entity
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
                    }
                    if (message.Id != null && message.hasOwnProperty("Id"))
                        if (typeof message.Id === "number")
                            object.Id = options.longs === String ? String(message.Id) : message.Id;
                        else
                            object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
                    if (message.Data != null && message.hasOwnProperty("Data"))
                        object.Data = $root.message.W_C_ENTITY.Entity.DataMask.toObject(message.Data, options);
                    if (message.Move != null && message.hasOwnProperty("Move"))
                        object.Move = $root.message.W_C_ENTITY.Entity.MoveMask.toObject(message.Move, options);
                    return object;
                };
    
                /**
                 * Converts this Entity to JSON.
                 * @function toJSON
                 * @memberof message.W_C_ENTITY.Entity
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Entity.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Entity.DataMask = (function() {
    
                    /**
                     * Properties of a DataMask.
                     * @memberof message.W_C_ENTITY.Entity
                     * @interface IDataMask
                     * @property {number|null} [Type] DataMask Type
                     * @property {boolean|null} [RemoveFlag] DataMask RemoveFlag
                     */
    
                    /**
                     * Constructs a new DataMask.
                     * @memberof message.W_C_ENTITY.Entity
                     * @classdesc Represents a DataMask.
                     * @implements IDataMask
                     * @constructor
                     * @param {message.W_C_ENTITY.Entity.IDataMask=} [properties] Properties to set
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
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @instance
                     */
                    DataMask.prototype.Type = 0;
    
                    /**
                     * DataMask RemoveFlag.
                     * @member {boolean} RemoveFlag
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @instance
                     */
                    DataMask.prototype.RemoveFlag = false;
    
                    /**
                     * Creates a new DataMask instance using the specified properties.
                     * @function create
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.IDataMask=} [properties] Properties to set
                     * @returns {message.W_C_ENTITY.Entity.DataMask} DataMask instance
                     */
                    DataMask.create = function create(properties) {
                        return new DataMask(properties);
                    };
    
                    /**
                     * Encodes the specified DataMask message. Does not implicitly {@link message.W_C_ENTITY.Entity.DataMask.verify|verify} messages.
                     * @function encode
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.IDataMask} message DataMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataMask.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Type != null && message.hasOwnProperty("Type"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                        if (message.RemoveFlag != null && message.hasOwnProperty("RemoveFlag"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.RemoveFlag);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified DataMask message, length delimited. Does not implicitly {@link message.W_C_ENTITY.Entity.DataMask.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.IDataMask} message DataMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DataMask.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a DataMask message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.W_C_ENTITY.Entity.DataMask} DataMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DataMask.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_ENTITY.Entity.DataMask();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Type = reader.int32();
                                break;
                            case 2:
                                message.RemoveFlag = reader.bool();
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
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.W_C_ENTITY.Entity.DataMask} DataMask
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
                     * @memberof message.W_C_ENTITY.Entity.DataMask
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
                        return null;
                    };
    
                    /**
                     * Creates a DataMask message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.W_C_ENTITY.Entity.DataMask} DataMask
                     */
                    DataMask.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.W_C_ENTITY.Entity.DataMask)
                            return object;
                        var message = new $root.message.W_C_ENTITY.Entity.DataMask();
                        if (object.Type != null)
                            message.Type = object.Type | 0;
                        if (object.RemoveFlag != null)
                            message.RemoveFlag = Boolean(object.RemoveFlag);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a DataMask message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.DataMask} message DataMask
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
                        }
                        if (message.Type != null && message.hasOwnProperty("Type"))
                            object.Type = message.Type;
                        if (message.RemoveFlag != null && message.hasOwnProperty("RemoveFlag"))
                            object.RemoveFlag = message.RemoveFlag;
                        return object;
                    };
    
                    /**
                     * Converts this DataMask to JSON.
                     * @function toJSON
                     * @memberof message.W_C_ENTITY.Entity.DataMask
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DataMask.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return DataMask;
                })();
    
                Entity.MoveMask = (function() {
    
                    /**
                     * Properties of a MoveMask.
                     * @memberof message.W_C_ENTITY.Entity
                     * @interface IMoveMask
                     * @property {message.IPoint3F|null} [Pos] MoveMask Pos
                     * @property {number|null} [Rotation] MoveMask Rotation
                     */
    
                    /**
                     * Constructs a new MoveMask.
                     * @memberof message.W_C_ENTITY.Entity
                     * @classdesc Represents a MoveMask.
                     * @implements IMoveMask
                     * @constructor
                     * @param {message.W_C_ENTITY.Entity.IMoveMask=} [properties] Properties to set
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
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @instance
                     */
                    MoveMask.prototype.Pos = null;
    
                    /**
                     * MoveMask Rotation.
                     * @member {number} Rotation
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @instance
                     */
                    MoveMask.prototype.Rotation = 0;
    
                    /**
                     * Creates a new MoveMask instance using the specified properties.
                     * @function create
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.IMoveMask=} [properties] Properties to set
                     * @returns {message.W_C_ENTITY.Entity.MoveMask} MoveMask instance
                     */
                    MoveMask.create = function create(properties) {
                        return new MoveMask(properties);
                    };
    
                    /**
                     * Encodes the specified MoveMask message. Does not implicitly {@link message.W_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                     * @function encode
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.IMoveMask} message MoveMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MoveMask.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            $root.message.Point3F.encode(message.Pos, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.Rotation);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified MoveMask message, length delimited. Does not implicitly {@link message.W_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.IMoveMask} message MoveMask message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MoveMask.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a MoveMask message from the specified reader or buffer.
                     * @function decode
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {message.W_C_ENTITY.Entity.MoveMask} MoveMask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MoveMask.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_ENTITY.Entity.MoveMask();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.Pos = $root.message.Point3F.decode(reader, reader.uint32());
                                break;
                            case 2:
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
                     * Decodes a MoveMask message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {message.W_C_ENTITY.Entity.MoveMask} MoveMask
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
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
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
                        return null;
                    };
    
                    /**
                     * Creates a MoveMask message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {message.W_C_ENTITY.Entity.MoveMask} MoveMask
                     */
                    MoveMask.fromObject = function fromObject(object) {
                        if (object instanceof $root.message.W_C_ENTITY.Entity.MoveMask)
                            return object;
                        var message = new $root.message.W_C_ENTITY.Entity.MoveMask();
                        if (object.Pos != null) {
                            if (typeof object.Pos !== "object")
                                throw TypeError(".message.W_C_ENTITY.Entity.MoveMask.Pos: object expected");
                            message.Pos = $root.message.Point3F.fromObject(object.Pos);
                        }
                        if (object.Rotation != null)
                            message.Rotation = Number(object.Rotation);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a MoveMask message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @static
                     * @param {message.W_C_ENTITY.Entity.MoveMask} message MoveMask
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
                        }
                        if (message.Pos != null && message.hasOwnProperty("Pos"))
                            object.Pos = $root.message.Point3F.toObject(message.Pos, options);
                        if (message.Rotation != null && message.hasOwnProperty("Rotation"))
                            object.Rotation = options.json && !isFinite(message.Rotation) ? String(message.Rotation) : message.Rotation;
                        return object;
                    };
    
                    /**
                     * Converts this MoveMask to JSON.
                     * @function toJSON
                     * @memberof message.W_C_ENTITY.Entity.MoveMask
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MoveMask.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return MoveMask;
                })();
    
                return Entity;
            })();
    
            return W_C_ENTITY;
        })();
    
        message.W_C_DEL_SIMOBJ = (function() {
    
            /**
             * Properties of a W_C_DEL_SIMOBJ.
             * @memberof message
             * @interface IW_C_DEL_SIMOBJ
             * @property {message.IIpacket|null} [PacketHead] W_C_DEL_SIMOBJ PacketHead
             * @property {number|Long|null} [Id] W_C_DEL_SIMOBJ Id
             * @property {message.IPoint3F|null} [Pos] W_C_DEL_SIMOBJ Pos
             * @property {number|null} [Rotation] W_C_DEL_SIMOBJ Rotation
             */
    
            /**
             * Constructs a new W_C_DEL_SIMOBJ.
             * @memberof message
             * @classdesc Represents a W_C_DEL_SIMOBJ.
             * @implements IW_C_DEL_SIMOBJ
             * @constructor
             * @param {message.IW_C_DEL_SIMOBJ=} [properties] Properties to set
             */
            function W_C_DEL_SIMOBJ(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * W_C_DEL_SIMOBJ PacketHead.
             * @member {message.IIpacket|null|undefined} PacketHead
             * @memberof message.W_C_DEL_SIMOBJ
             * @instance
             */
            W_C_DEL_SIMOBJ.prototype.PacketHead = null;
    
            /**
             * W_C_DEL_SIMOBJ Id.
             * @member {number|Long} Id
             * @memberof message.W_C_DEL_SIMOBJ
             * @instance
             */
            W_C_DEL_SIMOBJ.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * W_C_DEL_SIMOBJ Pos.
             * @member {message.IPoint3F|null|undefined} Pos
             * @memberof message.W_C_DEL_SIMOBJ
             * @instance
             */
            W_C_DEL_SIMOBJ.prototype.Pos = null;
    
            /**
             * W_C_DEL_SIMOBJ Rotation.
             * @member {number} Rotation
             * @memberof message.W_C_DEL_SIMOBJ
             * @instance
             */
            W_C_DEL_SIMOBJ.prototype.Rotation = 0;
    
            /**
             * Creates a new W_C_DEL_SIMOBJ instance using the specified properties.
             * @function create
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {message.IW_C_DEL_SIMOBJ=} [properties] Properties to set
             * @returns {message.W_C_DEL_SIMOBJ} W_C_DEL_SIMOBJ instance
             */
            W_C_DEL_SIMOBJ.create = function create(properties) {
                return new W_C_DEL_SIMOBJ(properties);
            };
    
            /**
             * Encodes the specified W_C_DEL_SIMOBJ message. Does not implicitly {@link message.W_C_DEL_SIMOBJ.verify|verify} messages.
             * @function encode
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {message.IW_C_DEL_SIMOBJ} message W_C_DEL_SIMOBJ message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_DEL_SIMOBJ.encode = function encode(message, writer) {
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
             * Encodes the specified W_C_DEL_SIMOBJ message, length delimited. Does not implicitly {@link message.W_C_DEL_SIMOBJ.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {message.IW_C_DEL_SIMOBJ} message W_C_DEL_SIMOBJ message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            W_C_DEL_SIMOBJ.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a W_C_DEL_SIMOBJ message from the specified reader or buffer.
             * @function decode
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.W_C_DEL_SIMOBJ} W_C_DEL_SIMOBJ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_DEL_SIMOBJ.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.W_C_DEL_SIMOBJ();
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
             * Decodes a W_C_DEL_SIMOBJ message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.W_C_DEL_SIMOBJ} W_C_DEL_SIMOBJ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            W_C_DEL_SIMOBJ.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a W_C_DEL_SIMOBJ message.
             * @function verify
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            W_C_DEL_SIMOBJ.verify = function verify(message) {
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
             * Creates a W_C_DEL_SIMOBJ message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.W_C_DEL_SIMOBJ} W_C_DEL_SIMOBJ
             */
            W_C_DEL_SIMOBJ.fromObject = function fromObject(object) {
                if (object instanceof $root.message.W_C_DEL_SIMOBJ)
                    return object;
                var message = new $root.message.W_C_DEL_SIMOBJ();
                if (object.PacketHead != null) {
                    if (typeof object.PacketHead !== "object")
                        throw TypeError(".message.W_C_DEL_SIMOBJ.PacketHead: object expected");
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
                        throw TypeError(".message.W_C_DEL_SIMOBJ.Pos: object expected");
                    message.Pos = $root.message.Point3F.fromObject(object.Pos);
                }
                if (object.Rotation != null)
                    message.Rotation = Number(object.Rotation);
                return message;
            };
    
            /**
             * Creates a plain object from a W_C_DEL_SIMOBJ message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.W_C_DEL_SIMOBJ
             * @static
             * @param {message.W_C_DEL_SIMOBJ} message W_C_DEL_SIMOBJ
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            W_C_DEL_SIMOBJ.toObject = function toObject(message, options) {
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
             * Converts this W_C_DEL_SIMOBJ to JSON.
             * @function toJSON
             * @memberof message.W_C_DEL_SIMOBJ
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            W_C_DEL_SIMOBJ.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return W_C_DEL_SIMOBJ;
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
    
        message.C_A_LoginRequest1 = (function() {
    
            /**
             * Properties of a C_A_LoginRequest1.
             * @memberof message
             * @interface IC_A_LoginRequest1
             * @property {message.IC_A_LoginRequest|null} [Login] C_A_LoginRequest1 Login
             */
    
            /**
             * Constructs a new C_A_LoginRequest1.
             * @memberof message
             * @classdesc Represents a C_A_LoginRequest1.
             * @implements IC_A_LoginRequest1
             * @constructor
             * @param {message.IC_A_LoginRequest1=} [properties] Properties to set
             */
            function C_A_LoginRequest1(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * C_A_LoginRequest1 Login.
             * @member {message.IC_A_LoginRequest|null|undefined} Login
             * @memberof message.C_A_LoginRequest1
             * @instance
             */
            C_A_LoginRequest1.prototype.Login = null;
    
            /**
             * Creates a new C_A_LoginRequest1 instance using the specified properties.
             * @function create
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {message.IC_A_LoginRequest1=} [properties] Properties to set
             * @returns {message.C_A_LoginRequest1} C_A_LoginRequest1 instance
             */
            C_A_LoginRequest1.create = function create(properties) {
                return new C_A_LoginRequest1(properties);
            };
    
            /**
             * Encodes the specified C_A_LoginRequest1 message. Does not implicitly {@link message.C_A_LoginRequest1.verify|verify} messages.
             * @function encode
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {message.IC_A_LoginRequest1} message C_A_LoginRequest1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_A_LoginRequest1.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Login != null && message.hasOwnProperty("Login"))
                    $root.message.C_A_LoginRequest.encode(message.Login, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified C_A_LoginRequest1 message, length delimited. Does not implicitly {@link message.C_A_LoginRequest1.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {message.IC_A_LoginRequest1} message C_A_LoginRequest1 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            C_A_LoginRequest1.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a C_A_LoginRequest1 message from the specified reader or buffer.
             * @function decode
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.C_A_LoginRequest1} C_A_LoginRequest1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_A_LoginRequest1.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.C_A_LoginRequest1();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Login = $root.message.C_A_LoginRequest.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a C_A_LoginRequest1 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.C_A_LoginRequest1} C_A_LoginRequest1
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            C_A_LoginRequest1.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a C_A_LoginRequest1 message.
             * @function verify
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            C_A_LoginRequest1.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Login != null && message.hasOwnProperty("Login")) {
                    var error = $root.message.C_A_LoginRequest.verify(message.Login);
                    if (error)
                        return "Login." + error;
                }
                return null;
            };
    
            /**
             * Creates a C_A_LoginRequest1 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.C_A_LoginRequest1} C_A_LoginRequest1
             */
            C_A_LoginRequest1.fromObject = function fromObject(object) {
                if (object instanceof $root.message.C_A_LoginRequest1)
                    return object;
                var message = new $root.message.C_A_LoginRequest1();
                if (object.Login != null) {
                    if (typeof object.Login !== "object")
                        throw TypeError(".message.C_A_LoginRequest1.Login: object expected");
                    message.Login = $root.message.C_A_LoginRequest.fromObject(object.Login);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a C_A_LoginRequest1 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.C_A_LoginRequest1
             * @static
             * @param {message.C_A_LoginRequest1} message C_A_LoginRequest1
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            C_A_LoginRequest1.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Login = null;
                if (message.Login != null && message.hasOwnProperty("Login"))
                    object.Login = $root.message.C_A_LoginRequest.toObject(message.Login, options);
                return object;
            };
    
            /**
             * Converts this C_A_LoginRequest1 to JSON.
             * @function toJSON
             * @memberof message.C_A_LoginRequest1
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            C_A_LoginRequest1.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return C_A_LoginRequest1;
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
            C_W_Game_LoginRequset.prototype.PlayerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.PlayerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.PlayerId = options.longs === String ? "0" : 0;
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
            C_W_ChatMessage.prototype.Sender = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * C_W_ChatMessage Recver.
             * @member {number|Long} Recver
             * @memberof message.C_W_ChatMessage
             * @instance
             */
            C_W_ChatMessage.prototype.Recver = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Sender = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Sender = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Recver = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Recver = options.longs === String ? "0" : 0;
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
            W_C_ChatMessage.prototype.Sender = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
            W_C_ChatMessage.prototype.Recver = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Sender = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Sender = options.longs === String ? "0" : 0;
                    object.SenderName = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.Recver = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.Recver = options.longs === String ? "0" : 0;
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
    
        return message;
    })();

    return $root;
});
