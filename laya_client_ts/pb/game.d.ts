import * as $protobuf from "./protobuf";
/** Namespace message. */
export namespace message {

    /** SERVICE enum. */
    enum SERVICE {
        NONE = 0,
        CLIENT = 1,
        GATESERVER = 2,
        ACCOUNTSERVER = 3,
        WORLDSERVER = 4,
        ZONESERVER = 5,
        WORLDDBSERVER = 6
    }

    /** CHAT enum. */
    enum CHAT {
        MSG_TYPE_WORLD = 0,
        MSG_TYPE_PRIVATE = 1,
        MSG_TYPE_ORG = 2,
        MSG_TYPE_COUNT = 3
    }

    /** Properties of an Ipacket. */
    interface IIpacket {

        /** Ipacket Stx */
        Stx?: (number|null);

        /** Ipacket DestServerType */
        DestServerType?: (number|null);

        /** Ipacket Ckx */
        Ckx?: (number|null);

        /** Ipacket Id */
        Id?: (number|null);
    }

    /** Represents an Ipacket. */
    class Ipacket implements IIpacket {

        /**
         * Constructs a new Ipacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IIpacket);

        /** Ipacket Stx. */
        public Stx: number;

        /** Ipacket DestServerType. */
        public DestServerType: number;

        /** Ipacket Ckx. */
        public Ckx: number;

        /** Ipacket Id. */
        public Id: (number);

        /**
         * Creates a new Ipacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ipacket instance
         */
        public static create(properties?: message.IIpacket): message.Ipacket;

        /**
         * Encodes the specified Ipacket message. Does not implicitly {@link message.Ipacket.verify|verify} messages.
         * @param message Ipacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IIpacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ipacket message, length delimited. Does not implicitly {@link message.Ipacket.verify|verify} messages.
         * @param message Ipacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IIpacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ipacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ipacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Ipacket;

        /**
         * Decodes an Ipacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ipacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Ipacket;

        /**
         * Verifies an Ipacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ipacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ipacket
         */
        public static fromObject(object: { [k: string]: any }): message.Ipacket;

        /**
         * Creates a plain object from an Ipacket message. Also converts values to other types if specified.
         * @param message Ipacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Ipacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ipacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerData. */
    interface IPlayerData {

        /** PlayerData PlayerID */
        PlayerID?: (number|null);

        /** PlayerData PlayerName */
        PlayerName?: (string|null);

        /** PlayerData PlayerGold */
        PlayerGold?: (number|null);
    }

    /** Represents a PlayerData. */
    class PlayerData implements IPlayerData {

        /**
         * Constructs a new PlayerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPlayerData);

        /** PlayerData PlayerID. */
        public PlayerID: (number);

        /** PlayerData PlayerName. */
        public PlayerName: string;

        /** PlayerData PlayerGold. */
        public PlayerGold: number;

        /**
         * Creates a new PlayerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerData instance
         */
        public static create(properties?: message.IPlayerData): message.PlayerData;

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link message.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerData message, length delimited. Does not implicitly {@link message.PlayerData.verify|verify} messages.
         * @param message PlayerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.PlayerData;

        /**
         * Decodes a PlayerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.PlayerData;

        /**
         * Verifies a PlayerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerData
         */
        public static fromObject(object: { [k: string]: any }): message.PlayerData;

        /**
         * Creates a plain object from a PlayerData message. Also converts values to other types if specified.
         * @param message PlayerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.PlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_CreatePlayerResponse. */
    interface IW_C_CreatePlayerResponse {

        /** W_C_CreatePlayerResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_CreatePlayerResponse Error */
        Error?: (number|null);

        /** W_C_CreatePlayerResponse PlayerId */
        PlayerId?: (number|null);
    }

    /** Represents a W_C_CreatePlayerResponse. */
    class W_C_CreatePlayerResponse implements IW_C_CreatePlayerResponse {

        /**
         * Constructs a new W_C_CreatePlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_CreatePlayerResponse);

        /** W_C_CreatePlayerResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_CreatePlayerResponse Error. */
        public Error: number;

        /** W_C_CreatePlayerResponse PlayerId. */
        public PlayerId: (number);

        /**
         * Creates a new W_C_CreatePlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_CreatePlayerResponse instance
         */
        public static create(properties?: message.IW_C_CreatePlayerResponse): message.W_C_CreatePlayerResponse;

        /**
         * Encodes the specified W_C_CreatePlayerResponse message. Does not implicitly {@link message.W_C_CreatePlayerResponse.verify|verify} messages.
         * @param message W_C_CreatePlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_CreatePlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_CreatePlayerResponse message, length delimited. Does not implicitly {@link message.W_C_CreatePlayerResponse.verify|verify} messages.
         * @param message W_C_CreatePlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_CreatePlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_CreatePlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_CreatePlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_CreatePlayerResponse;

        /**
         * Decodes a W_C_CreatePlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_CreatePlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_CreatePlayerResponse;

        /**
         * Verifies a W_C_CreatePlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_CreatePlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_CreatePlayerResponse
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_CreatePlayerResponse;

        /**
         * Creates a plain object from a W_C_CreatePlayerResponse message. Also converts values to other types if specified.
         * @param message W_C_CreatePlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_CreatePlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_CreatePlayerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_SelectPlayerResponse. */
    interface IW_C_SelectPlayerResponse {

        /** W_C_SelectPlayerResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_SelectPlayerResponse AccountId */
        AccountId?: (number|null);

        /** W_C_SelectPlayerResponse PlayerData */
        PlayerData?: (message.IPlayerData[]|null);
    }

    /** Represents a W_C_SelectPlayerResponse. */
    class W_C_SelectPlayerResponse implements IW_C_SelectPlayerResponse {

        /**
         * Constructs a new W_C_SelectPlayerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_SelectPlayerResponse);

        /** W_C_SelectPlayerResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_SelectPlayerResponse AccountId. */
        public AccountId: (number);

        /** W_C_SelectPlayerResponse PlayerData. */
        public PlayerData: message.IPlayerData[];

        /**
         * Creates a new W_C_SelectPlayerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_SelectPlayerResponse instance
         */
        public static create(properties?: message.IW_C_SelectPlayerResponse): message.W_C_SelectPlayerResponse;

        /**
         * Encodes the specified W_C_SelectPlayerResponse message. Does not implicitly {@link message.W_C_SelectPlayerResponse.verify|verify} messages.
         * @param message W_C_SelectPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_SelectPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_SelectPlayerResponse message, length delimited. Does not implicitly {@link message.W_C_SelectPlayerResponse.verify|verify} messages.
         * @param message W_C_SelectPlayerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_SelectPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_SelectPlayerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_SelectPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_SelectPlayerResponse;

        /**
         * Decodes a W_C_SelectPlayerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_SelectPlayerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_SelectPlayerResponse;

        /**
         * Verifies a W_C_SelectPlayerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_SelectPlayerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_SelectPlayerResponse
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_SelectPlayerResponse;

        /**
         * Creates a plain object from a W_C_SelectPlayerResponse message. Also converts values to other types if specified.
         * @param message W_C_SelectPlayerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_SelectPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_SelectPlayerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a A_C_RegisterResponse. */
    interface IA_C_RegisterResponse {

        /** A_C_RegisterResponse PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** A_C_RegisterResponse Error */
        Error?: (number|null);

        /** A_C_RegisterResponse SocketId */
        SocketId?: (number|null);
    }

    /** Represents a A_C_RegisterResponse. */
    class A_C_RegisterResponse implements IA_C_RegisterResponse {

        /**
         * Constructs a new A_C_RegisterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IA_C_RegisterResponse);

        /** A_C_RegisterResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** A_C_RegisterResponse Error. */
        public Error: number;

        /** A_C_RegisterResponse SocketId. */
        public SocketId: number;

        /**
         * Creates a new A_C_RegisterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns A_C_RegisterResponse instance
         */
        public static create(properties?: message.IA_C_RegisterResponse): message.A_C_RegisterResponse;

        /**
         * Encodes the specified A_C_RegisterResponse message. Does not implicitly {@link message.A_C_RegisterResponse.verify|verify} messages.
         * @param message A_C_RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IA_C_RegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified A_C_RegisterResponse message, length delimited. Does not implicitly {@link message.A_C_RegisterResponse.verify|verify} messages.
         * @param message A_C_RegisterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IA_C_RegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a A_C_RegisterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns A_C_RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.A_C_RegisterResponse;

        /**
         * Decodes a A_C_RegisterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns A_C_RegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.A_C_RegisterResponse;

        /**
         * Verifies a A_C_RegisterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a A_C_RegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns A_C_RegisterResponse
         */
        public static fromObject(object: { [k: string]: any }): message.A_C_RegisterResponse;

        /**
         * Creates a plain object from a A_C_RegisterResponse message. Also converts values to other types if specified.
         * @param message A_C_RegisterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.A_C_RegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this A_C_RegisterResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a A_C_LoginRequest. */
    interface IA_C_LoginRequest {

        /** A_C_LoginRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** A_C_LoginRequest Error */
        Error?: (number|null);

        /** A_C_LoginRequest SocketId */
        SocketId?: (number|null);

        /** A_C_LoginRequest AccountName */
        AccountName?: (string|null);
    }

    /** Represents a A_C_LoginRequest. */
    class A_C_LoginRequest implements IA_C_LoginRequest {

        /**
         * Constructs a new A_C_LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IA_C_LoginRequest);

        /** A_C_LoginRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** A_C_LoginRequest Error. */
        public Error: number;

        /** A_C_LoginRequest SocketId. */
        public SocketId: number;

        /** A_C_LoginRequest AccountName. */
        public AccountName: string;

        /**
         * Creates a new A_C_LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns A_C_LoginRequest instance
         */
        public static create(properties?: message.IA_C_LoginRequest): message.A_C_LoginRequest;

        /**
         * Encodes the specified A_C_LoginRequest message. Does not implicitly {@link message.A_C_LoginRequest.verify|verify} messages.
         * @param message A_C_LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IA_C_LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified A_C_LoginRequest message, length delimited. Does not implicitly {@link message.A_C_LoginRequest.verify|verify} messages.
         * @param message A_C_LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IA_C_LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a A_C_LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns A_C_LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.A_C_LoginRequest;

        /**
         * Decodes a A_C_LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns A_C_LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.A_C_LoginRequest;

        /**
         * Verifies a A_C_LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a A_C_LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns A_C_LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): message.A_C_LoginRequest;

        /**
         * Creates a plain object from a A_C_LoginRequest message. Also converts values to other types if specified.
         * @param message A_C_LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.A_C_LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this A_C_LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point3F. */
    interface IPoint3F {

        /** Point3F X */
        X?: (number|null);

        /** Point3F Y */
        Y?: (number|null);

        /** Point3F Z */
        Z?: (number|null);
    }

    /** Represents a Point3F. */
    class Point3F implements IPoint3F {

        /**
         * Constructs a new Point3F.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IPoint3F);

        /** Point3F X. */
        public X: number;

        /** Point3F Y. */
        public Y: number;

        /** Point3F Z. */
        public Z: number;

        /**
         * Creates a new Point3F instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point3F instance
         */
        public static create(properties?: message.IPoint3F): message.Point3F;

        /**
         * Encodes the specified Point3F message. Does not implicitly {@link message.Point3F.verify|verify} messages.
         * @param message Point3F message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IPoint3F, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point3F message, length delimited. Does not implicitly {@link message.Point3F.verify|verify} messages.
         * @param message Point3F message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IPoint3F, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point3F message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point3F
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.Point3F;

        /**
         * Decodes a Point3F message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point3F
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.Point3F;

        /**
         * Verifies a Point3F message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point3F message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point3F
         */
        public static fromObject(object: { [k: string]: any }): message.Point3F;

        /**
         * Creates a plain object from a Point3F message. Also converts values to other types if specified.
         * @param message Point3F
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.Point3F, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point3F to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_Move. */
    interface IC_W_Move {

        /** C_W_Move PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_Move move */
        move?: (message.C_W_Move.IMove|null);
    }

    /** Represents a C_W_Move. */
    class C_W_Move implements IC_W_Move {

        /**
         * Constructs a new C_W_Move.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_Move);

        /** C_W_Move PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_Move move. */
        public move?: (message.C_W_Move.IMove|null);

        /**
         * Creates a new C_W_Move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_Move instance
         */
        public static create(properties?: message.IC_W_Move): message.C_W_Move;

        /**
         * Encodes the specified C_W_Move message. Does not implicitly {@link message.C_W_Move.verify|verify} messages.
         * @param message C_W_Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_Move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_Move message, length delimited. Does not implicitly {@link message.C_W_Move.verify|verify} messages.
         * @param message C_W_Move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_Move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_Move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_Move;

        /**
         * Decodes a C_W_Move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_Move;

        /**
         * Verifies a C_W_Move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_Move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_Move
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_Move;

        /**
         * Creates a plain object from a C_W_Move message. Also converts values to other types if specified.
         * @param message C_W_Move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_Move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace C_W_Move {

        /** Properties of a Move. */
        interface IMove {

            /** Move Mode */
            Mode?: (number|null);

            /** Move normal */
            normal?: (message.C_W_Move.Move.INormal|null);
        }

        /** Represents a Move. */
        class Move implements IMove {

            /**
             * Constructs a new Move.
             * @param [properties] Properties to set
             */
            constructor(properties?: message.C_W_Move.IMove);

            /** Move Mode. */
            public Mode: number;

            /** Move normal. */
            public normal?: (message.C_W_Move.Move.INormal|null);

            /**
             * Creates a new Move instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Move instance
             */
            public static create(properties?: message.C_W_Move.IMove): message.C_W_Move.Move;

            /**
             * Encodes the specified Move message. Does not implicitly {@link message.C_W_Move.Move.verify|verify} messages.
             * @param message Move message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: message.C_W_Move.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Move message, length delimited. Does not implicitly {@link message.C_W_Move.Move.verify|verify} messages.
             * @param message Move message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: message.C_W_Move.IMove, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Move message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_Move.Move;

            /**
             * Decodes a Move message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Move
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_Move.Move;

            /**
             * Verifies a Move message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Move message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Move
             */
            public static fromObject(object: { [k: string]: any }): message.C_W_Move.Move;

            /**
             * Creates a plain object from a Move message. Also converts values to other types if specified.
             * @param message Move
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: message.C_W_Move.Move, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Move to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Move {

            /** Properties of a Normal. */
            interface INormal {

                /** Normal Pos */
                Pos?: (message.IPoint3F|null);

                /** Normal Yaw */
                Yaw?: (number|null);

                /** Normal Duration */
                Duration?: (number|null);
            }

            /** Represents a Normal. */
            class Normal implements INormal {

                /**
                 * Constructs a new Normal.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.C_W_Move.Move.INormal);

                /** Normal Pos. */
                public Pos?: (message.IPoint3F|null);

                /** Normal Yaw. */
                public Yaw: number;

                /** Normal Duration. */
                public Duration: number;

                /**
                 * Creates a new Normal instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Normal instance
                 */
                public static create(properties?: message.C_W_Move.Move.INormal): message.C_W_Move.Move.Normal;

                /**
                 * Encodes the specified Normal message. Does not implicitly {@link message.C_W_Move.Move.Normal.verify|verify} messages.
                 * @param message Normal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.C_W_Move.Move.INormal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Normal message, length delimited. Does not implicitly {@link message.C_W_Move.Move.Normal.verify|verify} messages.
                 * @param message Normal message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.C_W_Move.Move.INormal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Normal message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Normal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_Move.Move.Normal;

                /**
                 * Decodes a Normal message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Normal
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_Move.Move.Normal;

                /**
                 * Verifies a Normal message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Normal message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Normal
                 */
                public static fromObject(object: { [k: string]: any }): message.C_W_Move.Move.Normal;

                /**
                 * Creates a plain object from a Normal message. Also converts values to other types if specified.
                 * @param message Normal
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.C_W_Move.Move.Normal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Normal to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a W_C_LoginMap. */
    interface IW_C_LoginMap {

        /** W_C_LoginMap PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_LoginMap Id */
        Id?: (number|null);

        /** W_C_LoginMap Pos */
        Pos?: (message.IPoint3F|null);

        /** W_C_LoginMap Rotation */
        Rotation?: (number|null);
    }

    /** Represents a W_C_LoginMap. */
    class W_C_LoginMap implements IW_C_LoginMap {

        /**
         * Constructs a new W_C_LoginMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_LoginMap);

        /** W_C_LoginMap PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_LoginMap Id. */
        public Id: (number);

        /** W_C_LoginMap Pos. */
        public Pos?: (message.IPoint3F|null);

        /** W_C_LoginMap Rotation. */
        public Rotation: number;

        /**
         * Creates a new W_C_LoginMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_LoginMap instance
         */
        public static create(properties?: message.IW_C_LoginMap): message.W_C_LoginMap;

        /**
         * Encodes the specified W_C_LoginMap message. Does not implicitly {@link message.W_C_LoginMap.verify|verify} messages.
         * @param message W_C_LoginMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_LoginMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_LoginMap message, length delimited. Does not implicitly {@link message.W_C_LoginMap.verify|verify} messages.
         * @param message W_C_LoginMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_LoginMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_LoginMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_LoginMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_LoginMap;

        /**
         * Decodes a W_C_LoginMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_LoginMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_LoginMap;

        /**
         * Verifies a W_C_LoginMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_LoginMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_LoginMap
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_LoginMap;

        /**
         * Creates a plain object from a W_C_LoginMap message. Also converts values to other types if specified.
         * @param message W_C_LoginMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_LoginMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_LoginMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_ENTITY. */
    interface IW_C_ENTITY {

        /** W_C_ENTITY PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_ENTITY EntityInfo */
        EntityInfo?: (message.W_C_ENTITY.IEntity[]|null);
    }

    /** Represents a W_C_ENTITY. */
    class W_C_ENTITY implements IW_C_ENTITY {

        /**
         * Constructs a new W_C_ENTITY.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_ENTITY);

        /** W_C_ENTITY PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_ENTITY EntityInfo. */
        public EntityInfo: message.W_C_ENTITY.IEntity[];

        /**
         * Creates a new W_C_ENTITY instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_ENTITY instance
         */
        public static create(properties?: message.IW_C_ENTITY): message.W_C_ENTITY;

        /**
         * Encodes the specified W_C_ENTITY message. Does not implicitly {@link message.W_C_ENTITY.verify|verify} messages.
         * @param message W_C_ENTITY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_ENTITY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_ENTITY message, length delimited. Does not implicitly {@link message.W_C_ENTITY.verify|verify} messages.
         * @param message W_C_ENTITY message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_ENTITY, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_ENTITY message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_ENTITY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_ENTITY;

        /**
         * Decodes a W_C_ENTITY message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_ENTITY
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_ENTITY;

        /**
         * Verifies a W_C_ENTITY message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_ENTITY message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_ENTITY
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_ENTITY;

        /**
         * Creates a plain object from a W_C_ENTITY message. Also converts values to other types if specified.
         * @param message W_C_ENTITY
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_ENTITY, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_ENTITY to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace W_C_ENTITY {

        /** Properties of an Entity. */
        interface IEntity {

            /** Entity Id */
            Id?: (number|null);

            /** Entity Data */
            Data?: (message.W_C_ENTITY.Entity.IDataMask|null);

            /** Entity Move */
            Move?: (message.W_C_ENTITY.Entity.IMoveMask|null);
        }

        /** Represents an Entity. */
        class Entity implements IEntity {

            /**
             * Constructs a new Entity.
             * @param [properties] Properties to set
             */
            constructor(properties?: message.W_C_ENTITY.IEntity);

            /** Entity Id. */
            public Id: (number);

            /** Entity Data. */
            public Data?: (message.W_C_ENTITY.Entity.IDataMask|null);

            /** Entity Move. */
            public Move?: (message.W_C_ENTITY.Entity.IMoveMask|null);

            /**
             * Creates a new Entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entity instance
             */
            public static create(properties?: message.W_C_ENTITY.IEntity): message.W_C_ENTITY.Entity;

            /**
             * Encodes the specified Entity message. Does not implicitly {@link message.W_C_ENTITY.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: message.W_C_ENTITY.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Entity message, length delimited. Does not implicitly {@link message.W_C_ENTITY.Entity.verify|verify} messages.
             * @param message Entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: message.W_C_ENTITY.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_ENTITY.Entity;

            /**
             * Decodes an Entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_ENTITY.Entity;

            /**
             * Verifies an Entity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entity
             */
            public static fromObject(object: { [k: string]: any }): message.W_C_ENTITY.Entity;

            /**
             * Creates a plain object from an Entity message. Also converts values to other types if specified.
             * @param message Entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: message.W_C_ENTITY.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Entity {

            /** Properties of a DataMask. */
            interface IDataMask {

                /** DataMask Type */
                Type?: (number|null);

                /** DataMask RemoveFlag */
                RemoveFlag?: (boolean|null);
            }

            /** Represents a DataMask. */
            class DataMask implements IDataMask {

                /**
                 * Constructs a new DataMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.W_C_ENTITY.Entity.IDataMask);

                /** DataMask Type. */
                public Type: number;

                /** DataMask RemoveFlag. */
                public RemoveFlag: boolean;

                /**
                 * Creates a new DataMask instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DataMask instance
                 */
                public static create(properties?: message.W_C_ENTITY.Entity.IDataMask): message.W_C_ENTITY.Entity.DataMask;

                /**
                 * Encodes the specified DataMask message. Does not implicitly {@link message.W_C_ENTITY.Entity.DataMask.verify|verify} messages.
                 * @param message DataMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.W_C_ENTITY.Entity.IDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DataMask message, length delimited. Does not implicitly {@link message.W_C_ENTITY.Entity.DataMask.verify|verify} messages.
                 * @param message DataMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.W_C_ENTITY.Entity.IDataMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DataMask message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DataMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_ENTITY.Entity.DataMask;

                /**
                 * Decodes a DataMask message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DataMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_ENTITY.Entity.DataMask;

                /**
                 * Verifies a DataMask message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DataMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DataMask
                 */
                public static fromObject(object: { [k: string]: any }): message.W_C_ENTITY.Entity.DataMask;

                /**
                 * Creates a plain object from a DataMask message. Also converts values to other types if specified.
                 * @param message DataMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.W_C_ENTITY.Entity.DataMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DataMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MoveMask. */
            interface IMoveMask {

                /** MoveMask Pos */
                Pos?: (message.IPoint3F|null);

                /** MoveMask Rotation */
                Rotation?: (number|null);
            }

            /** Represents a MoveMask. */
            class MoveMask implements IMoveMask {

                /**
                 * Constructs a new MoveMask.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: message.W_C_ENTITY.Entity.IMoveMask);

                /** MoveMask Pos. */
                public Pos?: (message.IPoint3F|null);

                /** MoveMask Rotation. */
                public Rotation: number;

                /**
                 * Creates a new MoveMask instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MoveMask instance
                 */
                public static create(properties?: message.W_C_ENTITY.Entity.IMoveMask): message.W_C_ENTITY.Entity.MoveMask;

                /**
                 * Encodes the specified MoveMask message. Does not implicitly {@link message.W_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                 * @param message MoveMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: message.W_C_ENTITY.Entity.IMoveMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MoveMask message, length delimited. Does not implicitly {@link message.W_C_ENTITY.Entity.MoveMask.verify|verify} messages.
                 * @param message MoveMask message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: message.W_C_ENTITY.Entity.IMoveMask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MoveMask message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MoveMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_ENTITY.Entity.MoveMask;

                /**
                 * Decodes a MoveMask message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MoveMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_ENTITY.Entity.MoveMask;

                /**
                 * Verifies a MoveMask message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MoveMask message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MoveMask
                 */
                public static fromObject(object: { [k: string]: any }): message.W_C_ENTITY.Entity.MoveMask;

                /**
                 * Creates a plain object from a MoveMask message. Also converts values to other types if specified.
                 * @param message MoveMask
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: message.W_C_ENTITY.Entity.MoveMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MoveMask to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a W_C_DEL_SIMOBJ. */
    interface IW_C_DEL_SIMOBJ {

        /** W_C_DEL_SIMOBJ PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_DEL_SIMOBJ Id */
        Id?: (number|null);

        /** W_C_DEL_SIMOBJ Pos */
        Pos?: (message.IPoint3F|null);

        /** W_C_DEL_SIMOBJ Rotation */
        Rotation?: (number|null);
    }

    /** Represents a W_C_DEL_SIMOBJ. */
    class W_C_DEL_SIMOBJ implements IW_C_DEL_SIMOBJ {

        /**
         * Constructs a new W_C_DEL_SIMOBJ.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_DEL_SIMOBJ);

        /** W_C_DEL_SIMOBJ PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_DEL_SIMOBJ Id. */
        public Id: (number);

        /** W_C_DEL_SIMOBJ Pos. */
        public Pos?: (message.IPoint3F|null);

        /** W_C_DEL_SIMOBJ Rotation. */
        public Rotation: number;

        /**
         * Creates a new W_C_DEL_SIMOBJ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_DEL_SIMOBJ instance
         */
        public static create(properties?: message.IW_C_DEL_SIMOBJ): message.W_C_DEL_SIMOBJ;

        /**
         * Encodes the specified W_C_DEL_SIMOBJ message. Does not implicitly {@link message.W_C_DEL_SIMOBJ.verify|verify} messages.
         * @param message W_C_DEL_SIMOBJ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_DEL_SIMOBJ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_DEL_SIMOBJ message, length delimited. Does not implicitly {@link message.W_C_DEL_SIMOBJ.verify|verify} messages.
         * @param message W_C_DEL_SIMOBJ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_DEL_SIMOBJ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_DEL_SIMOBJ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_DEL_SIMOBJ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_DEL_SIMOBJ;

        /**
         * Decodes a W_C_DEL_SIMOBJ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_DEL_SIMOBJ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_DEL_SIMOBJ;

        /**
         * Verifies a W_C_DEL_SIMOBJ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_DEL_SIMOBJ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_DEL_SIMOBJ
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_DEL_SIMOBJ;

        /**
         * Creates a plain object from a W_C_DEL_SIMOBJ message. Also converts values to other types if specified.
         * @param message W_C_DEL_SIMOBJ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_DEL_SIMOBJ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_DEL_SIMOBJ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_LoginCopyMap. */
    interface IC_W_LoginCopyMap {

        /** C_W_LoginCopyMap PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_LoginCopyMap DataId */
        DataId?: (number|null);
    }

    /** Represents a C_W_LoginCopyMap. */
    class C_W_LoginCopyMap implements IC_W_LoginCopyMap {

        /**
         * Constructs a new C_W_LoginCopyMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_LoginCopyMap);

        /** C_W_LoginCopyMap PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_LoginCopyMap DataId. */
        public DataId: number;

        /**
         * Creates a new C_W_LoginCopyMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_LoginCopyMap instance
         */
        public static create(properties?: message.IC_W_LoginCopyMap): message.C_W_LoginCopyMap;

        /**
         * Encodes the specified C_W_LoginCopyMap message. Does not implicitly {@link message.C_W_LoginCopyMap.verify|verify} messages.
         * @param message C_W_LoginCopyMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_LoginCopyMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_LoginCopyMap message, length delimited. Does not implicitly {@link message.C_W_LoginCopyMap.verify|verify} messages.
         * @param message C_W_LoginCopyMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_LoginCopyMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_LoginCopyMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_LoginCopyMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_LoginCopyMap;

        /**
         * Decodes a C_W_LoginCopyMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_LoginCopyMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_LoginCopyMap;

        /**
         * Verifies a C_W_LoginCopyMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_LoginCopyMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_LoginCopyMap
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_LoginCopyMap;

        /**
         * Creates a plain object from a C_W_LoginCopyMap message. Also converts values to other types if specified.
         * @param message C_W_LoginCopyMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_LoginCopyMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_LoginCopyMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_A_LoginRequest. */
    interface IC_A_LoginRequest {

        /** C_A_LoginRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_A_LoginRequest AccountName */
        AccountName?: (string|null);

        /** C_A_LoginRequest BuildNo */
        BuildNo?: (string|null);

        /** C_A_LoginRequest SocketId */
        SocketId?: (number|null);
    }

    /** Represents a C_A_LoginRequest. */
    class C_A_LoginRequest implements IC_A_LoginRequest {

        /**
         * Constructs a new C_A_LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_A_LoginRequest);

        /** C_A_LoginRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_A_LoginRequest AccountName. */
        public AccountName: string;

        /** C_A_LoginRequest BuildNo. */
        public BuildNo: string;

        /** C_A_LoginRequest SocketId. */
        public SocketId: number;

        /**
         * Creates a new C_A_LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_A_LoginRequest instance
         */
        public static create(properties?: message.IC_A_LoginRequest): message.C_A_LoginRequest;

        /**
         * Encodes the specified C_A_LoginRequest message. Does not implicitly {@link message.C_A_LoginRequest.verify|verify} messages.
         * @param message C_A_LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_A_LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_A_LoginRequest message, length delimited. Does not implicitly {@link message.C_A_LoginRequest.verify|verify} messages.
         * @param message C_A_LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_A_LoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_A_LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_A_LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_A_LoginRequest;

        /**
         * Decodes a C_A_LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_A_LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_A_LoginRequest;

        /**
         * Verifies a C_A_LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_A_LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_A_LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): message.C_A_LoginRequest;

        /**
         * Creates a plain object from a C_A_LoginRequest message. Also converts values to other types if specified.
         * @param message C_A_LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_A_LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_A_LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_A_LoginRequest1. */
    interface IC_A_LoginRequest1 {

        /** C_A_LoginRequest1 Login */
        Login?: (message.IC_A_LoginRequest|null);
    }

    /** Represents a C_A_LoginRequest1. */
    class C_A_LoginRequest1 implements IC_A_LoginRequest1 {

        /**
         * Constructs a new C_A_LoginRequest1.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_A_LoginRequest1);

        /** C_A_LoginRequest1 Login. */
        public Login?: (message.IC_A_LoginRequest|null);

        /**
         * Creates a new C_A_LoginRequest1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_A_LoginRequest1 instance
         */
        public static create(properties?: message.IC_A_LoginRequest1): message.C_A_LoginRequest1;

        /**
         * Encodes the specified C_A_LoginRequest1 message. Does not implicitly {@link message.C_A_LoginRequest1.verify|verify} messages.
         * @param message C_A_LoginRequest1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_A_LoginRequest1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_A_LoginRequest1 message, length delimited. Does not implicitly {@link message.C_A_LoginRequest1.verify|verify} messages.
         * @param message C_A_LoginRequest1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_A_LoginRequest1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_A_LoginRequest1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_A_LoginRequest1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_A_LoginRequest1;

        /**
         * Decodes a C_A_LoginRequest1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_A_LoginRequest1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_A_LoginRequest1;

        /**
         * Verifies a C_A_LoginRequest1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_A_LoginRequest1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_A_LoginRequest1
         */
        public static fromObject(object: { [k: string]: any }): message.C_A_LoginRequest1;

        /**
         * Creates a plain object from a C_A_LoginRequest1 message. Also converts values to other types if specified.
         * @param message C_A_LoginRequest1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_A_LoginRequest1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_A_LoginRequest1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_A_RegisterRequest. */
    interface IC_A_RegisterRequest {

        /** C_A_RegisterRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_A_RegisterRequest AccountName */
        AccountName?: (string|null);

        /** C_A_RegisterRequest SocketId */
        SocketId?: (number|null);
    }

    /** Represents a C_A_RegisterRequest. */
    class C_A_RegisterRequest implements IC_A_RegisterRequest {

        /**
         * Constructs a new C_A_RegisterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_A_RegisterRequest);

        /** C_A_RegisterRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_A_RegisterRequest AccountName. */
        public AccountName: string;

        /** C_A_RegisterRequest SocketId. */
        public SocketId: number;

        /**
         * Creates a new C_A_RegisterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_A_RegisterRequest instance
         */
        public static create(properties?: message.IC_A_RegisterRequest): message.C_A_RegisterRequest;

        /**
         * Encodes the specified C_A_RegisterRequest message. Does not implicitly {@link message.C_A_RegisterRequest.verify|verify} messages.
         * @param message C_A_RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_A_RegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_A_RegisterRequest message, length delimited. Does not implicitly {@link message.C_A_RegisterRequest.verify|verify} messages.
         * @param message C_A_RegisterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_A_RegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_A_RegisterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_A_RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_A_RegisterRequest;

        /**
         * Decodes a C_A_RegisterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_A_RegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_A_RegisterRequest;

        /**
         * Verifies a C_A_RegisterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_A_RegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_A_RegisterRequest
         */
        public static fromObject(object: { [k: string]: any }): message.C_A_RegisterRequest;

        /**
         * Creates a plain object from a C_A_RegisterRequest message. Also converts values to other types if specified.
         * @param message C_A_RegisterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_A_RegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_A_RegisterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_CreatePlayerRequest. */
    interface IC_W_CreatePlayerRequest {

        /** C_W_CreatePlayerRequest PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_CreatePlayerRequest PlayerName */
        PlayerName?: (string|null);

        /** C_W_CreatePlayerRequest Sex */
        Sex?: (number|null);
    }

    /** Represents a C_W_CreatePlayerRequest. */
    class C_W_CreatePlayerRequest implements IC_W_CreatePlayerRequest {

        /**
         * Constructs a new C_W_CreatePlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_CreatePlayerRequest);

        /** C_W_CreatePlayerRequest PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_CreatePlayerRequest PlayerName. */
        public PlayerName: string;

        /** C_W_CreatePlayerRequest Sex. */
        public Sex: number;

        /**
         * Creates a new C_W_CreatePlayerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_CreatePlayerRequest instance
         */
        public static create(properties?: message.IC_W_CreatePlayerRequest): message.C_W_CreatePlayerRequest;

        /**
         * Encodes the specified C_W_CreatePlayerRequest message. Does not implicitly {@link message.C_W_CreatePlayerRequest.verify|verify} messages.
         * @param message C_W_CreatePlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_CreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_CreatePlayerRequest message, length delimited. Does not implicitly {@link message.C_W_CreatePlayerRequest.verify|verify} messages.
         * @param message C_W_CreatePlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_CreatePlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_CreatePlayerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_CreatePlayerRequest;

        /**
         * Decodes a C_W_CreatePlayerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_CreatePlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_CreatePlayerRequest;

        /**
         * Verifies a C_W_CreatePlayerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_CreatePlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_CreatePlayerRequest
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_CreatePlayerRequest;

        /**
         * Creates a plain object from a C_W_CreatePlayerRequest message. Also converts values to other types if specified.
         * @param message C_W_CreatePlayerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_CreatePlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_CreatePlayerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_Game_LoginRequset. */
    interface IC_W_Game_LoginRequset {

        /** C_W_Game_LoginRequset PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_Game_LoginRequset PlayerId */
        PlayerId?: (number|null);
    }

    /** Represents a C_W_Game_LoginRequset. */
    class C_W_Game_LoginRequset implements IC_W_Game_LoginRequset {

        /**
         * Constructs a new C_W_Game_LoginRequset.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_Game_LoginRequset);

        /** C_W_Game_LoginRequset PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_Game_LoginRequset PlayerId. */
        public PlayerId: (number);

        /**
         * Creates a new C_W_Game_LoginRequset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_Game_LoginRequset instance
         */
        public static create(properties?: message.IC_W_Game_LoginRequset): message.C_W_Game_LoginRequset;

        /**
         * Encodes the specified C_W_Game_LoginRequset message. Does not implicitly {@link message.C_W_Game_LoginRequset.verify|verify} messages.
         * @param message C_W_Game_LoginRequset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_Game_LoginRequset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_Game_LoginRequset message, length delimited. Does not implicitly {@link message.C_W_Game_LoginRequset.verify|verify} messages.
         * @param message C_W_Game_LoginRequset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_Game_LoginRequset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_Game_LoginRequset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_Game_LoginRequset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_Game_LoginRequset;

        /**
         * Decodes a C_W_Game_LoginRequset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_Game_LoginRequset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_Game_LoginRequset;

        /**
         * Verifies a C_W_Game_LoginRequset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_Game_LoginRequset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_Game_LoginRequset
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_Game_LoginRequset;

        /**
         * Creates a plain object from a C_W_Game_LoginRequset message. Also converts values to other types if specified.
         * @param message C_W_Game_LoginRequset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_Game_LoginRequset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_Game_LoginRequset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_G_LogoutResponse. */
    interface IC_G_LogoutResponse {

        /** C_G_LogoutResponse PacketHead */
        PacketHead?: (message.IIpacket|null);
    }

    /** Represents a C_G_LogoutResponse. */
    class C_G_LogoutResponse implements IC_G_LogoutResponse {

        /**
         * Constructs a new C_G_LogoutResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_G_LogoutResponse);

        /** C_G_LogoutResponse PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /**
         * Creates a new C_G_LogoutResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_G_LogoutResponse instance
         */
        public static create(properties?: message.IC_G_LogoutResponse): message.C_G_LogoutResponse;

        /**
         * Encodes the specified C_G_LogoutResponse message. Does not implicitly {@link message.C_G_LogoutResponse.verify|verify} messages.
         * @param message C_G_LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_G_LogoutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_G_LogoutResponse message, length delimited. Does not implicitly {@link message.C_G_LogoutResponse.verify|verify} messages.
         * @param message C_G_LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_G_LogoutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_G_LogoutResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_G_LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_G_LogoutResponse;

        /**
         * Decodes a C_G_LogoutResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_G_LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_G_LogoutResponse;

        /**
         * Verifies a C_G_LogoutResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_G_LogoutResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_G_LogoutResponse
         */
        public static fromObject(object: { [k: string]: any }): message.C_G_LogoutResponse;

        /**
         * Creates a plain object from a C_G_LogoutResponse message. Also converts values to other types if specified.
         * @param message C_G_LogoutResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_G_LogoutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_G_LogoutResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C_W_ChatMessage. */
    interface IC_W_ChatMessage {

        /** C_W_ChatMessage PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** C_W_ChatMessage Sender */
        Sender?: (number|null);

        /** C_W_ChatMessage Recver */
        Recver?: (number|null);

        /** C_W_ChatMessage MessageType */
        MessageType?: (number|null);

        /** C_W_ChatMessage Message */
        Message?: (string|null);
    }

    /** Represents a C_W_ChatMessage. */
    class C_W_ChatMessage implements IC_W_ChatMessage {

        /**
         * Constructs a new C_W_ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IC_W_ChatMessage);

        /** C_W_ChatMessage PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** C_W_ChatMessage Sender. */
        public Sender: (number);

        /** C_W_ChatMessage Recver. */
        public Recver: (number);

        /** C_W_ChatMessage MessageType. */
        public MessageType: number;

        /** C_W_ChatMessage Message. */
        public Message: string;

        /**
         * Creates a new C_W_ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C_W_ChatMessage instance
         */
        public static create(properties?: message.IC_W_ChatMessage): message.C_W_ChatMessage;

        /**
         * Encodes the specified C_W_ChatMessage message. Does not implicitly {@link message.C_W_ChatMessage.verify|verify} messages.
         * @param message C_W_ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IC_W_ChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C_W_ChatMessage message, length delimited. Does not implicitly {@link message.C_W_ChatMessage.verify|verify} messages.
         * @param message C_W_ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IC_W_ChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C_W_ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C_W_ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.C_W_ChatMessage;

        /**
         * Decodes a C_W_ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C_W_ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.C_W_ChatMessage;

        /**
         * Verifies a C_W_ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C_W_ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C_W_ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): message.C_W_ChatMessage;

        /**
         * Creates a plain object from a C_W_ChatMessage message. Also converts values to other types if specified.
         * @param message C_W_ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.C_W_ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C_W_ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_ChatMessage. */
    interface IW_C_ChatMessage {

        /** W_C_ChatMessage PacketHead */
        PacketHead?: (message.IIpacket|null);

        /** W_C_ChatMessage Sender */
        Sender?: (number|null);

        /** W_C_ChatMessage SenderName */
        SenderName?: (string|null);

        /** W_C_ChatMessage Recver */
        Recver?: (number|null);

        /** W_C_ChatMessage RecverName */
        RecverName?: (string|null);

        /** W_C_ChatMessage MessageType */
        MessageType?: (number|null);

        /** W_C_ChatMessage Message */
        Message?: (string|null);
    }

    /** Represents a W_C_ChatMessage. */
    class W_C_ChatMessage implements IW_C_ChatMessage {

        /**
         * Constructs a new W_C_ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_ChatMessage);

        /** W_C_ChatMessage PacketHead. */
        public PacketHead?: (message.IIpacket|null);

        /** W_C_ChatMessage Sender. */
        public Sender: (number);

        /** W_C_ChatMessage SenderName. */
        public SenderName: string;

        /** W_C_ChatMessage Recver. */
        public Recver: (number);

        /** W_C_ChatMessage RecverName. */
        public RecverName: string;

        /** W_C_ChatMessage MessageType. */
        public MessageType: number;

        /** W_C_ChatMessage Message. */
        public Message: string;

        /**
         * Creates a new W_C_ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_ChatMessage instance
         */
        public static create(properties?: message.IW_C_ChatMessage): message.W_C_ChatMessage;

        /**
         * Encodes the specified W_C_ChatMessage message. Does not implicitly {@link message.W_C_ChatMessage.verify|verify} messages.
         * @param message W_C_ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_ChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_ChatMessage message, length delimited. Does not implicitly {@link message.W_C_ChatMessage.verify|verify} messages.
         * @param message W_C_ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_ChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_ChatMessage;

        /**
         * Decodes a W_C_ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_ChatMessage;

        /**
         * Verifies a W_C_ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_ChatMessage;

        /**
         * Creates a plain object from a W_C_ChatMessage message. Also converts values to other types if specified.
         * @param message W_C_ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a W_C_Test. */
    interface IW_C_Test {

        /** W_C_Test Recv */
        Recv?: (number[]|null);
    }

    /** Represents a W_C_Test. */
    class W_C_Test implements IW_C_Test {

        /**
         * Constructs a new W_C_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IW_C_Test);

        /** W_C_Test Recv. */
        public Recv: number[];

        /**
         * Creates a new W_C_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns W_C_Test instance
         */
        public static create(properties?: message.IW_C_Test): message.W_C_Test;

        /**
         * Encodes the specified W_C_Test message. Does not implicitly {@link message.W_C_Test.verify|verify} messages.
         * @param message W_C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IW_C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified W_C_Test message, length delimited. Does not implicitly {@link message.W_C_Test.verify|verify} messages.
         * @param message W_C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IW_C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a W_C_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns W_C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): message.W_C_Test;

        /**
         * Decodes a W_C_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns W_C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): message.W_C_Test;

        /**
         * Verifies a W_C_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a W_C_Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns W_C_Test
         */
        public static fromObject(object: { [k: string]: any }): message.W_C_Test;

        /**
         * Creates a plain object from a W_C_Test message. Also converts values to other types if specified.
         * @param message W_C_Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: message.W_C_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this W_C_Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
