
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model CatalogItem
 * 
 */
export type CatalogItem = $Result.DefaultSelection<Prisma.$CatalogItemPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventDay
 * 
 */
export type EventDay = $Result.DefaultSelection<Prisma.$EventDayPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model OrchestrationLog
 * 
 */
export type OrchestrationLog = $Result.DefaultSelection<Prisma.$OrchestrationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  PROVIDER: 'PROVIDER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catalogItem`: Exposes CRUD operations for the **CatalogItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CatalogItems
    * const catalogItems = await prisma.catalogItem.findMany()
    * ```
    */
  get catalogItem(): Prisma.CatalogItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventDay`: Exposes CRUD operations for the **EventDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventDays
    * const eventDays = await prisma.eventDay.findMany()
    * ```
    */
  get eventDay(): Prisma.EventDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orchestrationLog`: Exposes CRUD operations for the **OrchestrationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrchestrationLogs
    * const orchestrationLogs = await prisma.orchestrationLog.findMany()
    * ```
    */
  get orchestrationLog(): Prisma.OrchestrationLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    CatalogItem: 'CatalogItem',
    Event: 'Event',
    EventDay: 'EventDay',
    Activity: 'Activity',
    Invitation: 'Invitation',
    OrchestrationLog: 'OrchestrationLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "catalogItem" | "event" | "eventDay" | "activity" | "invitation" | "orchestrationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      CatalogItem: {
        payload: Prisma.$CatalogItemPayload<ExtArgs>
        fields: Prisma.CatalogItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatalogItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatalogItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          findFirst: {
            args: Prisma.CatalogItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatalogItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          findMany: {
            args: Prisma.CatalogItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>[]
          }
          create: {
            args: Prisma.CatalogItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          createMany: {
            args: Prisma.CatalogItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CatalogItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>[]
          }
          delete: {
            args: Prisma.CatalogItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          update: {
            args: Prisma.CatalogItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          deleteMany: {
            args: Prisma.CatalogItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatalogItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CatalogItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>[]
          }
          upsert: {
            args: Prisma.CatalogItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatalogItemPayload>
          }
          aggregate: {
            args: Prisma.CatalogItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatalogItem>
          }
          groupBy: {
            args: Prisma.CatalogItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatalogItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatalogItemCountArgs<ExtArgs>
            result: $Utils.Optional<CatalogItemCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventDay: {
        payload: Prisma.$EventDayPayload<ExtArgs>
        fields: Prisma.EventDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>
          }
          findFirst: {
            args: Prisma.EventDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>
          }
          findMany: {
            args: Prisma.EventDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>[]
          }
          create: {
            args: Prisma.EventDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>
          }
          createMany: {
            args: Prisma.EventDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>[]
          }
          delete: {
            args: Prisma.EventDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>
          }
          update: {
            args: Prisma.EventDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>
          }
          deleteMany: {
            args: Prisma.EventDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>[]
          }
          upsert: {
            args: Prisma.EventDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventDayPayload>
          }
          aggregate: {
            args: Prisma.EventDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventDay>
          }
          groupBy: {
            args: Prisma.EventDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventDayCountArgs<ExtArgs>
            result: $Utils.Optional<EventDayCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      OrchestrationLog: {
        payload: Prisma.$OrchestrationLogPayload<ExtArgs>
        fields: Prisma.OrchestrationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrchestrationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrchestrationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>
          }
          findFirst: {
            args: Prisma.OrchestrationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrchestrationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>
          }
          findMany: {
            args: Prisma.OrchestrationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>[]
          }
          create: {
            args: Prisma.OrchestrationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>
          }
          createMany: {
            args: Prisma.OrchestrationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrchestrationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>[]
          }
          delete: {
            args: Prisma.OrchestrationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>
          }
          update: {
            args: Prisma.OrchestrationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>
          }
          deleteMany: {
            args: Prisma.OrchestrationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrchestrationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrchestrationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>[]
          }
          upsert: {
            args: Prisma.OrchestrationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrchestrationLogPayload>
          }
          aggregate: {
            args: Prisma.OrchestrationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrchestrationLog>
          }
          groupBy: {
            args: Prisma.OrchestrationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrchestrationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrchestrationLogCountArgs<ExtArgs>
            result: $Utils.Optional<OrchestrationLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    catalogItem?: CatalogItemOmit
    event?: EventOmit
    eventDay?: EventDayOmit
    activity?: ActivityOmit
    invitation?: InvitationOmit
    orchestrationLog?: OrchestrationLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    catalogItems: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    catalogItems?: boolean | UserCountOutputTypeCountCatalogItemsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCatalogItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    days: number
    activities: number
    invitations: number
    logs: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | EventCountOutputTypeCountDaysArgs
    activities?: boolean | EventCountOutputTypeCountActivitiesArgs
    invitations?: boolean | EventCountOutputTypeCountInvitationsArgs
    logs?: boolean | EventCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventDayWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrchestrationLogWhereInput
  }


  /**
   * Count Type EventDayCountOutputType
   */

  export type EventDayCountOutputType = {
    activities: number
  }

  export type EventDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | EventDayCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * EventDayCountOutputType without action
   */
  export type EventDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDayCountOutputType
     */
    select?: EventDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventDayCountOutputType without action
   */
  export type EventDayCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    invitations: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitations?: boolean | ActivityCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    whatsapp: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    whatsapp: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    whatsapp: number
    banned: number
    banReason: number
    banExpires: number
    profile_data: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    whatsapp?: true
    banned?: true
    banReason?: true
    banExpires?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    whatsapp?: true
    banned?: true
    banReason?: true
    banExpires?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    whatsapp?: true
    banned?: true
    banReason?: true
    banExpires?: true
    profile_data?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    role: $Enums.Role
    whatsapp: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    profile_data: JsonValue | null
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    whatsapp?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    profile_data?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    catalogItems?: boolean | User$catalogItemsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    whatsapp?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    profile_data?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    whatsapp?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    profile_data?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    whatsapp?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    profile_data?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "whatsapp" | "banned" | "banReason" | "banExpires" | "profile_data" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    catalogItems?: boolean | User$catalogItemsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      catalogItems: Prisma.$CatalogItemPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      role: $Enums.Role
      whatsapp: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
      profile_data: Prisma.JsonValue | null
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catalogItems<T extends User$catalogItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$catalogItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly whatsapp: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
    readonly profile_data: FieldRef<"User", 'Json'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.catalogItems
   */
  export type User$catalogItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    where?: CatalogItemWhereInput
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    cursor?: CatalogItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model CatalogItem
   */

  export type AggregateCatalogItem = {
    _count: CatalogItemCountAggregateOutputType | null
    _avg: CatalogItemAvgAggregateOutputType | null
    _sum: CatalogItemSumAggregateOutputType | null
    _min: CatalogItemMinAggregateOutputType | null
    _max: CatalogItemMaxAggregateOutputType | null
  }

  export type CatalogItemAvgAggregateOutputType = {
    price: number | null
  }

  export type CatalogItemSumAggregateOutputType = {
    price: number | null
  }

  export type CatalogItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    price: number | null
    priceUnit: string | null
    description: string | null
    category: string | null
    currency: string | null
    createdAt: Date | null
  }

  export type CatalogItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    price: number | null
    priceUnit: string | null
    description: string | null
    category: string | null
    currency: string | null
    createdAt: Date | null
  }

  export type CatalogItemCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    price: number
    priceUnit: number
    description: number
    category: number
    currency: number
    createdAt: number
    _all: number
  }


  export type CatalogItemAvgAggregateInputType = {
    price?: true
  }

  export type CatalogItemSumAggregateInputType = {
    price?: true
  }

  export type CatalogItemMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    price?: true
    priceUnit?: true
    description?: true
    category?: true
    currency?: true
    createdAt?: true
  }

  export type CatalogItemMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    price?: true
    priceUnit?: true
    description?: true
    category?: true
    currency?: true
    createdAt?: true
  }

  export type CatalogItemCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    price?: true
    priceUnit?: true
    description?: true
    category?: true
    currency?: true
    createdAt?: true
    _all?: true
  }

  export type CatalogItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatalogItem to aggregate.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CatalogItems
    **/
    _count?: true | CatalogItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatalogItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatalogItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatalogItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatalogItemMaxAggregateInputType
  }

  export type GetCatalogItemAggregateType<T extends CatalogItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCatalogItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatalogItem[P]>
      : GetScalarType<T[P], AggregateCatalogItem[P]>
  }




  export type CatalogItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatalogItemWhereInput
    orderBy?: CatalogItemOrderByWithAggregationInput | CatalogItemOrderByWithAggregationInput[]
    by: CatalogItemScalarFieldEnum[] | CatalogItemScalarFieldEnum
    having?: CatalogItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatalogItemCountAggregateInputType | true
    _avg?: CatalogItemAvgAggregateInputType
    _sum?: CatalogItemSumAggregateInputType
    _min?: CatalogItemMinAggregateInputType
    _max?: CatalogItemMaxAggregateInputType
  }

  export type CatalogItemGroupByOutputType = {
    id: string
    userId: string
    name: string
    price: number | null
    priceUnit: string | null
    description: string | null
    category: string | null
    currency: string | null
    createdAt: Date
    _count: CatalogItemCountAggregateOutputType | null
    _avg: CatalogItemAvgAggregateOutputType | null
    _sum: CatalogItemSumAggregateOutputType | null
    _min: CatalogItemMinAggregateOutputType | null
    _max: CatalogItemMaxAggregateOutputType | null
  }

  type GetCatalogItemGroupByPayload<T extends CatalogItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatalogItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatalogItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatalogItemGroupByOutputType[P]>
            : GetScalarType<T[P], CatalogItemGroupByOutputType[P]>
        }
      >
    >


  export type CatalogItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    price?: boolean
    priceUnit?: boolean
    description?: boolean
    category?: boolean
    currency?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogItem"]>

  export type CatalogItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    price?: boolean
    priceUnit?: boolean
    description?: boolean
    category?: boolean
    currency?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogItem"]>

  export type CatalogItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    price?: boolean
    priceUnit?: boolean
    description?: boolean
    category?: boolean
    currency?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catalogItem"]>

  export type CatalogItemSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    price?: boolean
    priceUnit?: boolean
    description?: boolean
    category?: boolean
    currency?: boolean
    createdAt?: boolean
  }

  export type CatalogItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "price" | "priceUnit" | "description" | "category" | "currency" | "createdAt", ExtArgs["result"]["catalogItem"]>
  export type CatalogItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CatalogItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CatalogItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CatalogItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CatalogItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      price: number | null
      priceUnit: string | null
      description: string | null
      category: string | null
      currency: string | null
      createdAt: Date
    }, ExtArgs["result"]["catalogItem"]>
    composites: {}
  }

  type CatalogItemGetPayload<S extends boolean | null | undefined | CatalogItemDefaultArgs> = $Result.GetResult<Prisma.$CatalogItemPayload, S>

  type CatalogItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatalogItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatalogItemCountAggregateInputType | true
    }

  export interface CatalogItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CatalogItem'], meta: { name: 'CatalogItem' } }
    /**
     * Find zero or one CatalogItem that matches the filter.
     * @param {CatalogItemFindUniqueArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatalogItemFindUniqueArgs>(args: SelectSubset<T, CatalogItemFindUniqueArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CatalogItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatalogItemFindUniqueOrThrowArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatalogItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CatalogItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatalogItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemFindFirstArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatalogItemFindFirstArgs>(args?: SelectSubset<T, CatalogItemFindFirstArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatalogItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemFindFirstOrThrowArgs} args - Arguments to find a CatalogItem
     * @example
     * // Get one CatalogItem
     * const catalogItem = await prisma.catalogItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatalogItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CatalogItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CatalogItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CatalogItems
     * const catalogItems = await prisma.catalogItem.findMany()
     * 
     * // Get first 10 CatalogItems
     * const catalogItems = await prisma.catalogItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catalogItemWithIdOnly = await prisma.catalogItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatalogItemFindManyArgs>(args?: SelectSubset<T, CatalogItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CatalogItem.
     * @param {CatalogItemCreateArgs} args - Arguments to create a CatalogItem.
     * @example
     * // Create one CatalogItem
     * const CatalogItem = await prisma.catalogItem.create({
     *   data: {
     *     // ... data to create a CatalogItem
     *   }
     * })
     * 
     */
    create<T extends CatalogItemCreateArgs>(args: SelectSubset<T, CatalogItemCreateArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CatalogItems.
     * @param {CatalogItemCreateManyArgs} args - Arguments to create many CatalogItems.
     * @example
     * // Create many CatalogItems
     * const catalogItem = await prisma.catalogItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatalogItemCreateManyArgs>(args?: SelectSubset<T, CatalogItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CatalogItems and returns the data saved in the database.
     * @param {CatalogItemCreateManyAndReturnArgs} args - Arguments to create many CatalogItems.
     * @example
     * // Create many CatalogItems
     * const catalogItem = await prisma.catalogItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CatalogItems and only return the `id`
     * const catalogItemWithIdOnly = await prisma.catalogItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CatalogItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CatalogItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CatalogItem.
     * @param {CatalogItemDeleteArgs} args - Arguments to delete one CatalogItem.
     * @example
     * // Delete one CatalogItem
     * const CatalogItem = await prisma.catalogItem.delete({
     *   where: {
     *     // ... filter to delete one CatalogItem
     *   }
     * })
     * 
     */
    delete<T extends CatalogItemDeleteArgs>(args: SelectSubset<T, CatalogItemDeleteArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CatalogItem.
     * @param {CatalogItemUpdateArgs} args - Arguments to update one CatalogItem.
     * @example
     * // Update one CatalogItem
     * const catalogItem = await prisma.catalogItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatalogItemUpdateArgs>(args: SelectSubset<T, CatalogItemUpdateArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CatalogItems.
     * @param {CatalogItemDeleteManyArgs} args - Arguments to filter CatalogItems to delete.
     * @example
     * // Delete a few CatalogItems
     * const { count } = await prisma.catalogItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatalogItemDeleteManyArgs>(args?: SelectSubset<T, CatalogItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CatalogItems
     * const catalogItem = await prisma.catalogItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatalogItemUpdateManyArgs>(args: SelectSubset<T, CatalogItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatalogItems and returns the data updated in the database.
     * @param {CatalogItemUpdateManyAndReturnArgs} args - Arguments to update many CatalogItems.
     * @example
     * // Update many CatalogItems
     * const catalogItem = await prisma.catalogItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CatalogItems and only return the `id`
     * const catalogItemWithIdOnly = await prisma.catalogItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CatalogItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CatalogItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CatalogItem.
     * @param {CatalogItemUpsertArgs} args - Arguments to update or create a CatalogItem.
     * @example
     * // Update or create a CatalogItem
     * const catalogItem = await prisma.catalogItem.upsert({
     *   create: {
     *     // ... data to create a CatalogItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CatalogItem we want to update
     *   }
     * })
     */
    upsert<T extends CatalogItemUpsertArgs>(args: SelectSubset<T, CatalogItemUpsertArgs<ExtArgs>>): Prisma__CatalogItemClient<$Result.GetResult<Prisma.$CatalogItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CatalogItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemCountArgs} args - Arguments to filter CatalogItems to count.
     * @example
     * // Count the number of CatalogItems
     * const count = await prisma.catalogItem.count({
     *   where: {
     *     // ... the filter for the CatalogItems we want to count
     *   }
     * })
    **/
    count<T extends CatalogItemCountArgs>(
      args?: Subset<T, CatalogItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatalogItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CatalogItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatalogItemAggregateArgs>(args: Subset<T, CatalogItemAggregateArgs>): Prisma.PrismaPromise<GetCatalogItemAggregateType<T>>

    /**
     * Group by CatalogItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatalogItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatalogItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatalogItemGroupByArgs['orderBy'] }
        : { orderBy?: CatalogItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatalogItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatalogItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CatalogItem model
   */
  readonly fields: CatalogItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CatalogItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatalogItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CatalogItem model
   */
  interface CatalogItemFieldRefs {
    readonly id: FieldRef<"CatalogItem", 'String'>
    readonly userId: FieldRef<"CatalogItem", 'String'>
    readonly name: FieldRef<"CatalogItem", 'String'>
    readonly price: FieldRef<"CatalogItem", 'Float'>
    readonly priceUnit: FieldRef<"CatalogItem", 'String'>
    readonly description: FieldRef<"CatalogItem", 'String'>
    readonly category: FieldRef<"CatalogItem", 'String'>
    readonly currency: FieldRef<"CatalogItem", 'String'>
    readonly createdAt: FieldRef<"CatalogItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CatalogItem findUnique
   */
  export type CatalogItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem findUniqueOrThrow
   */
  export type CatalogItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem findFirst
   */
  export type CatalogItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogItems.
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogItems.
     */
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * CatalogItem findFirstOrThrow
   */
  export type CatalogItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItem to fetch.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatalogItems.
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogItems.
     */
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * CatalogItem findMany
   */
  export type CatalogItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter, which CatalogItems to fetch.
     */
    where?: CatalogItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatalogItems to fetch.
     */
    orderBy?: CatalogItemOrderByWithRelationInput | CatalogItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CatalogItems.
     */
    cursor?: CatalogItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatalogItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatalogItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatalogItems.
     */
    distinct?: CatalogItemScalarFieldEnum | CatalogItemScalarFieldEnum[]
  }

  /**
   * CatalogItem create
   */
  export type CatalogItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CatalogItem.
     */
    data: XOR<CatalogItemCreateInput, CatalogItemUncheckedCreateInput>
  }

  /**
   * CatalogItem createMany
   */
  export type CatalogItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CatalogItems.
     */
    data: CatalogItemCreateManyInput | CatalogItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CatalogItem createManyAndReturn
   */
  export type CatalogItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * The data used to create many CatalogItems.
     */
    data: CatalogItemCreateManyInput | CatalogItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CatalogItem update
   */
  export type CatalogItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CatalogItem.
     */
    data: XOR<CatalogItemUpdateInput, CatalogItemUncheckedUpdateInput>
    /**
     * Choose, which CatalogItem to update.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem updateMany
   */
  export type CatalogItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CatalogItems.
     */
    data: XOR<CatalogItemUpdateManyMutationInput, CatalogItemUncheckedUpdateManyInput>
    /**
     * Filter which CatalogItems to update
     */
    where?: CatalogItemWhereInput
    /**
     * Limit how many CatalogItems to update.
     */
    limit?: number
  }

  /**
   * CatalogItem updateManyAndReturn
   */
  export type CatalogItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * The data used to update CatalogItems.
     */
    data: XOR<CatalogItemUpdateManyMutationInput, CatalogItemUncheckedUpdateManyInput>
    /**
     * Filter which CatalogItems to update
     */
    where?: CatalogItemWhereInput
    /**
     * Limit how many CatalogItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CatalogItem upsert
   */
  export type CatalogItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CatalogItem to update in case it exists.
     */
    where: CatalogItemWhereUniqueInput
    /**
     * In case the CatalogItem found by the `where` argument doesn't exist, create a new CatalogItem with this data.
     */
    create: XOR<CatalogItemCreateInput, CatalogItemUncheckedCreateInput>
    /**
     * In case the CatalogItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatalogItemUpdateInput, CatalogItemUncheckedUpdateInput>
  }

  /**
   * CatalogItem delete
   */
  export type CatalogItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
    /**
     * Filter which CatalogItem to delete.
     */
    where: CatalogItemWhereUniqueInput
  }

  /**
   * CatalogItem deleteMany
   */
  export type CatalogItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatalogItems to delete
     */
    where?: CatalogItemWhereInput
    /**
     * Limit how many CatalogItems to delete.
     */
    limit?: number
  }

  /**
   * CatalogItem without action
   */
  export type CatalogItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatalogItem
     */
    select?: CatalogItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatalogItem
     */
    omit?: CatalogItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatalogItemInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    title: string | null
    description: string | null
    event_type: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
    location: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    title: string | null
    description: string | null
    event_type: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
    location: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    owner_id: number
    title: number
    description: number
    event_type: number
    start_date: number
    end_date: number
    status: number
    location: number
    orchestration_state: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    owner_id?: true
    title?: true
    description?: true
    event_type?: true
    start_date?: true
    end_date?: true
    status?: true
    location?: true
    created_at?: true
    updated_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    owner_id?: true
    title?: true
    description?: true
    event_type?: true
    start_date?: true
    end_date?: true
    status?: true
    location?: true
    created_at?: true
    updated_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    owner_id?: true
    title?: true
    description?: true
    event_type?: true
    start_date?: true
    end_date?: true
    status?: true
    location?: true
    orchestration_state?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    owner_id: string
    title: string
    description: string | null
    event_type: string
    start_date: Date | null
    end_date: Date | null
    status: string
    location: string | null
    orchestration_state: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    title?: boolean
    description?: boolean
    event_type?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    location?: boolean
    orchestration_state?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    days?: boolean | Event$daysArgs<ExtArgs>
    activities?: boolean | Event$activitiesArgs<ExtArgs>
    invitations?: boolean | Event$invitationsArgs<ExtArgs>
    logs?: boolean | Event$logsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    title?: boolean
    description?: boolean
    event_type?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    location?: boolean
    orchestration_state?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    title?: boolean
    description?: boolean
    event_type?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    location?: boolean
    orchestration_state?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    owner_id?: boolean
    title?: boolean
    description?: boolean
    event_type?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    location?: boolean
    orchestration_state?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "title" | "description" | "event_type" | "start_date" | "end_date" | "status" | "location" | "orchestration_state" | "created_at" | "updated_at", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    days?: boolean | Event$daysArgs<ExtArgs>
    activities?: boolean | Event$activitiesArgs<ExtArgs>
    invitations?: boolean | Event$invitationsArgs<ExtArgs>
    logs?: boolean | Event$logsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      days: Prisma.$EventDayPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
      logs: Prisma.$OrchestrationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      title: string
      description: string | null
      event_type: string
      start_date: Date | null
      end_date: Date | null
      status: string
      location: string | null
      orchestration_state: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    days<T extends Event$daysArgs<ExtArgs> = {}>(args?: Subset<T, Event$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Event$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Event$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Event$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Event$logsArgs<ExtArgs> = {}>(args?: Subset<T, Event$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly owner_id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly event_type: FieldRef<"Event", 'String'>
    readonly start_date: FieldRef<"Event", 'DateTime'>
    readonly end_date: FieldRef<"Event", 'DateTime'>
    readonly status: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly orchestration_state: FieldRef<"Event", 'Json'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.days
   */
  export type Event$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    where?: EventDayWhereInput
    orderBy?: EventDayOrderByWithRelationInput | EventDayOrderByWithRelationInput[]
    cursor?: EventDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventDayScalarFieldEnum | EventDayScalarFieldEnum[]
  }

  /**
   * Event.activities
   */
  export type Event$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Event.invitations
   */
  export type Event$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Event.logs
   */
  export type Event$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    where?: OrchestrationLogWhereInput
    orderBy?: OrchestrationLogOrderByWithRelationInput | OrchestrationLogOrderByWithRelationInput[]
    cursor?: OrchestrationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrchestrationLogScalarFieldEnum | OrchestrationLogScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventDay
   */

  export type AggregateEventDay = {
    _count: EventDayCountAggregateOutputType | null
    _avg: EventDayAvgAggregateOutputType | null
    _sum: EventDaySumAggregateOutputType | null
    _min: EventDayMinAggregateOutputType | null
    _max: EventDayMaxAggregateOutputType | null
  }

  export type EventDayAvgAggregateOutputType = {
    sequence_number: number | null
  }

  export type EventDaySumAggregateOutputType = {
    sequence_number: number | null
  }

  export type EventDayMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    date: Date | null
    sequence_number: number | null
    created_at: Date | null
  }

  export type EventDayMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    date: Date | null
    sequence_number: number | null
    created_at: Date | null
  }

  export type EventDayCountAggregateOutputType = {
    id: number
    event_id: number
    date: number
    sequence_number: number
    created_at: number
    _all: number
  }


  export type EventDayAvgAggregateInputType = {
    sequence_number?: true
  }

  export type EventDaySumAggregateInputType = {
    sequence_number?: true
  }

  export type EventDayMinAggregateInputType = {
    id?: true
    event_id?: true
    date?: true
    sequence_number?: true
    created_at?: true
  }

  export type EventDayMaxAggregateInputType = {
    id?: true
    event_id?: true
    date?: true
    sequence_number?: true
    created_at?: true
  }

  export type EventDayCountAggregateInputType = {
    id?: true
    event_id?: true
    date?: true
    sequence_number?: true
    created_at?: true
    _all?: true
  }

  export type EventDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventDay to aggregate.
     */
    where?: EventDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDays to fetch.
     */
    orderBy?: EventDayOrderByWithRelationInput | EventDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventDays
    **/
    _count?: true | EventDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventDayMaxAggregateInputType
  }

  export type GetEventDayAggregateType<T extends EventDayAggregateArgs> = {
        [P in keyof T & keyof AggregateEventDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventDay[P]>
      : GetScalarType<T[P], AggregateEventDay[P]>
  }




  export type EventDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventDayWhereInput
    orderBy?: EventDayOrderByWithAggregationInput | EventDayOrderByWithAggregationInput[]
    by: EventDayScalarFieldEnum[] | EventDayScalarFieldEnum
    having?: EventDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventDayCountAggregateInputType | true
    _avg?: EventDayAvgAggregateInputType
    _sum?: EventDaySumAggregateInputType
    _min?: EventDayMinAggregateInputType
    _max?: EventDayMaxAggregateInputType
  }

  export type EventDayGroupByOutputType = {
    id: string
    event_id: string
    date: Date
    sequence_number: number
    created_at: Date
    _count: EventDayCountAggregateOutputType | null
    _avg: EventDayAvgAggregateOutputType | null
    _sum: EventDaySumAggregateOutputType | null
    _min: EventDayMinAggregateOutputType | null
    _max: EventDayMaxAggregateOutputType | null
  }

  type GetEventDayGroupByPayload<T extends EventDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventDayGroupByOutputType[P]>
            : GetScalarType<T[P], EventDayGroupByOutputType[P]>
        }
      >
    >


  export type EventDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    date?: boolean
    sequence_number?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    activities?: boolean | EventDay$activitiesArgs<ExtArgs>
    _count?: boolean | EventDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventDay"]>

  export type EventDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    date?: boolean
    sequence_number?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventDay"]>

  export type EventDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    date?: boolean
    sequence_number?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventDay"]>

  export type EventDaySelectScalar = {
    id?: boolean
    event_id?: boolean
    date?: boolean
    sequence_number?: boolean
    created_at?: boolean
  }

  export type EventDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "date" | "sequence_number" | "created_at", ExtArgs["result"]["eventDay"]>
  export type EventDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    activities?: boolean | EventDay$activitiesArgs<ExtArgs>
    _count?: boolean | EventDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventDay"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      date: Date
      sequence_number: number
      created_at: Date
    }, ExtArgs["result"]["eventDay"]>
    composites: {}
  }

  type EventDayGetPayload<S extends boolean | null | undefined | EventDayDefaultArgs> = $Result.GetResult<Prisma.$EventDayPayload, S>

  type EventDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventDayCountAggregateInputType | true
    }

  export interface EventDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventDay'], meta: { name: 'EventDay' } }
    /**
     * Find zero or one EventDay that matches the filter.
     * @param {EventDayFindUniqueArgs} args - Arguments to find a EventDay
     * @example
     * // Get one EventDay
     * const eventDay = await prisma.eventDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventDayFindUniqueArgs>(args: SelectSubset<T, EventDayFindUniqueArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventDayFindUniqueOrThrowArgs} args - Arguments to find a EventDay
     * @example
     * // Get one EventDay
     * const eventDay = await prisma.eventDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventDayFindUniqueOrThrowArgs>(args: SelectSubset<T, EventDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayFindFirstArgs} args - Arguments to find a EventDay
     * @example
     * // Get one EventDay
     * const eventDay = await prisma.eventDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventDayFindFirstArgs>(args?: SelectSubset<T, EventDayFindFirstArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayFindFirstOrThrowArgs} args - Arguments to find a EventDay
     * @example
     * // Get one EventDay
     * const eventDay = await prisma.eventDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventDayFindFirstOrThrowArgs>(args?: SelectSubset<T, EventDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventDays
     * const eventDays = await prisma.eventDay.findMany()
     * 
     * // Get first 10 EventDays
     * const eventDays = await prisma.eventDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventDayWithIdOnly = await prisma.eventDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventDayFindManyArgs>(args?: SelectSubset<T, EventDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventDay.
     * @param {EventDayCreateArgs} args - Arguments to create a EventDay.
     * @example
     * // Create one EventDay
     * const EventDay = await prisma.eventDay.create({
     *   data: {
     *     // ... data to create a EventDay
     *   }
     * })
     * 
     */
    create<T extends EventDayCreateArgs>(args: SelectSubset<T, EventDayCreateArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventDays.
     * @param {EventDayCreateManyArgs} args - Arguments to create many EventDays.
     * @example
     * // Create many EventDays
     * const eventDay = await prisma.eventDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventDayCreateManyArgs>(args?: SelectSubset<T, EventDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventDays and returns the data saved in the database.
     * @param {EventDayCreateManyAndReturnArgs} args - Arguments to create many EventDays.
     * @example
     * // Create many EventDays
     * const eventDay = await prisma.eventDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventDays and only return the `id`
     * const eventDayWithIdOnly = await prisma.eventDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventDayCreateManyAndReturnArgs>(args?: SelectSubset<T, EventDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventDay.
     * @param {EventDayDeleteArgs} args - Arguments to delete one EventDay.
     * @example
     * // Delete one EventDay
     * const EventDay = await prisma.eventDay.delete({
     *   where: {
     *     // ... filter to delete one EventDay
     *   }
     * })
     * 
     */
    delete<T extends EventDayDeleteArgs>(args: SelectSubset<T, EventDayDeleteArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventDay.
     * @param {EventDayUpdateArgs} args - Arguments to update one EventDay.
     * @example
     * // Update one EventDay
     * const eventDay = await prisma.eventDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventDayUpdateArgs>(args: SelectSubset<T, EventDayUpdateArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventDays.
     * @param {EventDayDeleteManyArgs} args - Arguments to filter EventDays to delete.
     * @example
     * // Delete a few EventDays
     * const { count } = await prisma.eventDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDayDeleteManyArgs>(args?: SelectSubset<T, EventDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventDays
     * const eventDay = await prisma.eventDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventDayUpdateManyArgs>(args: SelectSubset<T, EventDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventDays and returns the data updated in the database.
     * @param {EventDayUpdateManyAndReturnArgs} args - Arguments to update many EventDays.
     * @example
     * // Update many EventDays
     * const eventDay = await prisma.eventDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventDays and only return the `id`
     * const eventDayWithIdOnly = await prisma.eventDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventDayUpdateManyAndReturnArgs>(args: SelectSubset<T, EventDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventDay.
     * @param {EventDayUpsertArgs} args - Arguments to update or create a EventDay.
     * @example
     * // Update or create a EventDay
     * const eventDay = await prisma.eventDay.upsert({
     *   create: {
     *     // ... data to create a EventDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventDay we want to update
     *   }
     * })
     */
    upsert<T extends EventDayUpsertArgs>(args: SelectSubset<T, EventDayUpsertArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayCountArgs} args - Arguments to filter EventDays to count.
     * @example
     * // Count the number of EventDays
     * const count = await prisma.eventDay.count({
     *   where: {
     *     // ... the filter for the EventDays we want to count
     *   }
     * })
    **/
    count<T extends EventDayCountArgs>(
      args?: Subset<T, EventDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventDayAggregateArgs>(args: Subset<T, EventDayAggregateArgs>): Prisma.PrismaPromise<GetEventDayAggregateType<T>>

    /**
     * Group by EventDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventDayGroupByArgs['orderBy'] }
        : { orderBy?: EventDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventDay model
   */
  readonly fields: EventDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activities<T extends EventDay$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, EventDay$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventDay model
   */
  interface EventDayFieldRefs {
    readonly id: FieldRef<"EventDay", 'String'>
    readonly event_id: FieldRef<"EventDay", 'String'>
    readonly date: FieldRef<"EventDay", 'DateTime'>
    readonly sequence_number: FieldRef<"EventDay", 'Int'>
    readonly created_at: FieldRef<"EventDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventDay findUnique
   */
  export type EventDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * Filter, which EventDay to fetch.
     */
    where: EventDayWhereUniqueInput
  }

  /**
   * EventDay findUniqueOrThrow
   */
  export type EventDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * Filter, which EventDay to fetch.
     */
    where: EventDayWhereUniqueInput
  }

  /**
   * EventDay findFirst
   */
  export type EventDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * Filter, which EventDay to fetch.
     */
    where?: EventDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDays to fetch.
     */
    orderBy?: EventDayOrderByWithRelationInput | EventDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventDays.
     */
    cursor?: EventDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventDays.
     */
    distinct?: EventDayScalarFieldEnum | EventDayScalarFieldEnum[]
  }

  /**
   * EventDay findFirstOrThrow
   */
  export type EventDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * Filter, which EventDay to fetch.
     */
    where?: EventDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDays to fetch.
     */
    orderBy?: EventDayOrderByWithRelationInput | EventDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventDays.
     */
    cursor?: EventDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventDays.
     */
    distinct?: EventDayScalarFieldEnum | EventDayScalarFieldEnum[]
  }

  /**
   * EventDay findMany
   */
  export type EventDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * Filter, which EventDays to fetch.
     */
    where?: EventDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventDays to fetch.
     */
    orderBy?: EventDayOrderByWithRelationInput | EventDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventDays.
     */
    cursor?: EventDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventDays.
     */
    distinct?: EventDayScalarFieldEnum | EventDayScalarFieldEnum[]
  }

  /**
   * EventDay create
   */
  export type EventDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * The data needed to create a EventDay.
     */
    data: XOR<EventDayCreateInput, EventDayUncheckedCreateInput>
  }

  /**
   * EventDay createMany
   */
  export type EventDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventDays.
     */
    data: EventDayCreateManyInput | EventDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventDay createManyAndReturn
   */
  export type EventDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * The data used to create many EventDays.
     */
    data: EventDayCreateManyInput | EventDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventDay update
   */
  export type EventDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * The data needed to update a EventDay.
     */
    data: XOR<EventDayUpdateInput, EventDayUncheckedUpdateInput>
    /**
     * Choose, which EventDay to update.
     */
    where: EventDayWhereUniqueInput
  }

  /**
   * EventDay updateMany
   */
  export type EventDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventDays.
     */
    data: XOR<EventDayUpdateManyMutationInput, EventDayUncheckedUpdateManyInput>
    /**
     * Filter which EventDays to update
     */
    where?: EventDayWhereInput
    /**
     * Limit how many EventDays to update.
     */
    limit?: number
  }

  /**
   * EventDay updateManyAndReturn
   */
  export type EventDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * The data used to update EventDays.
     */
    data: XOR<EventDayUpdateManyMutationInput, EventDayUncheckedUpdateManyInput>
    /**
     * Filter which EventDays to update
     */
    where?: EventDayWhereInput
    /**
     * Limit how many EventDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventDay upsert
   */
  export type EventDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * The filter to search for the EventDay to update in case it exists.
     */
    where: EventDayWhereUniqueInput
    /**
     * In case the EventDay found by the `where` argument doesn't exist, create a new EventDay with this data.
     */
    create: XOR<EventDayCreateInput, EventDayUncheckedCreateInput>
    /**
     * In case the EventDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventDayUpdateInput, EventDayUncheckedUpdateInput>
  }

  /**
   * EventDay delete
   */
  export type EventDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
    /**
     * Filter which EventDay to delete.
     */
    where: EventDayWhereUniqueInput
  }

  /**
   * EventDay deleteMany
   */
  export type EventDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventDays to delete
     */
    where?: EventDayWhereInput
    /**
     * Limit how many EventDays to delete.
     */
    limit?: number
  }

  /**
   * EventDay.activities
   */
  export type EventDay$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * EventDay without action
   */
  export type EventDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventDay
     */
    select?: EventDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventDay
     */
    omit?: EventDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventDayInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    day_id: string | null
    event_id: string | null
    title: string | null
    start_time: Date | null
    end_time: Date | null
    location_type: string | null
    location: string | null
    status: string | null
    is_orchestrated: boolean | null
    created_at: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    day_id: string | null
    event_id: string | null
    title: string | null
    start_time: Date | null
    end_time: Date | null
    location_type: string | null
    location: string | null
    status: string | null
    is_orchestrated: boolean | null
    created_at: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    day_id: number
    event_id: number
    title: number
    start_time: number
    end_time: number
    location_type: number
    location: number
    status: number
    is_orchestrated: number
    created_at: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    day_id?: true
    event_id?: true
    title?: true
    start_time?: true
    end_time?: true
    location_type?: true
    location?: true
    status?: true
    is_orchestrated?: true
    created_at?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    day_id?: true
    event_id?: true
    title?: true
    start_time?: true
    end_time?: true
    location_type?: true
    location?: true
    status?: true
    is_orchestrated?: true
    created_at?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    day_id?: true
    event_id?: true
    title?: true
    start_time?: true
    end_time?: true
    location_type?: true
    location?: true
    status?: true
    is_orchestrated?: true
    created_at?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    day_id: string
    event_id: string
    title: string
    start_time: Date
    end_time: Date
    location_type: string
    location: string | null
    status: string
    is_orchestrated: boolean
    created_at: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day_id?: boolean
    event_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    location_type?: boolean
    location?: boolean
    status?: boolean
    is_orchestrated?: boolean
    created_at?: boolean
    day?: boolean | EventDayDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    invitations?: boolean | Activity$invitationsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day_id?: boolean
    event_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    location_type?: boolean
    location?: boolean
    status?: boolean
    is_orchestrated?: boolean
    created_at?: boolean
    day?: boolean | EventDayDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day_id?: boolean
    event_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    location_type?: boolean
    location?: boolean
    status?: boolean
    is_orchestrated?: boolean
    created_at?: boolean
    day?: boolean | EventDayDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    day_id?: boolean
    event_id?: boolean
    title?: boolean
    start_time?: boolean
    end_time?: boolean
    location_type?: boolean
    location?: boolean
    status?: boolean
    is_orchestrated?: boolean
    created_at?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day_id" | "event_id" | "title" | "start_time" | "end_time" | "location_type" | "location" | "status" | "is_orchestrated" | "created_at", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | EventDayDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    invitations?: boolean | Activity$invitationsArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | EventDayDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | EventDayDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      day: Prisma.$EventDayPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day_id: string
      event_id: string
      title: string
      start_time: Date
      end_time: Date
      location_type: string
      location: string | null
      status: string
      is_orchestrated: boolean
      created_at: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    day<T extends EventDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDayDefaultArgs<ExtArgs>>): Prisma__EventDayClient<$Result.GetResult<Prisma.$EventDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitations<T extends Activity$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly day_id: FieldRef<"Activity", 'String'>
    readonly event_id: FieldRef<"Activity", 'String'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly start_time: FieldRef<"Activity", 'DateTime'>
    readonly end_time: FieldRef<"Activity", 'DateTime'>
    readonly location_type: FieldRef<"Activity", 'String'>
    readonly location: FieldRef<"Activity", 'String'>
    readonly status: FieldRef<"Activity", 'String'>
    readonly is_orchestrated: FieldRef<"Activity", 'Boolean'>
    readonly created_at: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.invitations
   */
  export type Activity$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationAvgAggregateOutputType = {
    num_guests: number | null
  }

  export type InvitationSumAggregateOutputType = {
    num_guests: number | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    activity_id: string | null
    invitee_name: string | null
    invitee_email: string | null
    whatsapp_number: string | null
    num_guests: number | null
    rsvp_status: string | null
    invite_sent: boolean | null
    access_token: string | null
    created_at: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    activity_id: string | null
    invitee_name: string | null
    invitee_email: string | null
    whatsapp_number: string | null
    num_guests: number | null
    rsvp_status: string | null
    invite_sent: boolean | null
    access_token: string | null
    created_at: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    event_id: number
    activity_id: number
    invitee_name: number
    invitee_email: number
    whatsapp_number: number
    num_guests: number
    rsvp_status: number
    invite_sent: number
    access_token: number
    created_at: number
    _all: number
  }


  export type InvitationAvgAggregateInputType = {
    num_guests?: true
  }

  export type InvitationSumAggregateInputType = {
    num_guests?: true
  }

  export type InvitationMinAggregateInputType = {
    id?: true
    event_id?: true
    activity_id?: true
    invitee_name?: true
    invitee_email?: true
    whatsapp_number?: true
    num_guests?: true
    rsvp_status?: true
    invite_sent?: true
    access_token?: true
    created_at?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    event_id?: true
    activity_id?: true
    invitee_name?: true
    invitee_email?: true
    whatsapp_number?: true
    num_guests?: true
    rsvp_status?: true
    invite_sent?: true
    access_token?: true
    created_at?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    event_id?: true
    activity_id?: true
    invitee_name?: true
    invitee_email?: true
    whatsapp_number?: true
    num_guests?: true
    rsvp_status?: true
    invite_sent?: true
    access_token?: true
    created_at?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _avg?: InvitationAvgAggregateInputType
    _sum?: InvitationSumAggregateInputType
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    event_id: string
    activity_id: string | null
    invitee_name: string
    invitee_email: string | null
    whatsapp_number: string
    num_guests: number
    rsvp_status: string
    invite_sent: boolean
    access_token: string
    created_at: Date
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    activity_id?: boolean
    invitee_name?: boolean
    invitee_email?: boolean
    whatsapp_number?: boolean
    num_guests?: boolean
    rsvp_status?: boolean
    invite_sent?: boolean
    access_token?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    activity?: boolean | Invitation$activityArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    activity_id?: boolean
    invitee_name?: boolean
    invitee_email?: boolean
    whatsapp_number?: boolean
    num_guests?: boolean
    rsvp_status?: boolean
    invite_sent?: boolean
    access_token?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    activity?: boolean | Invitation$activityArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    activity_id?: boolean
    invitee_name?: boolean
    invitee_email?: boolean
    whatsapp_number?: boolean
    num_guests?: boolean
    rsvp_status?: boolean
    invite_sent?: boolean
    access_token?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    activity?: boolean | Invitation$activityArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    event_id?: boolean
    activity_id?: boolean
    invitee_name?: boolean
    invitee_email?: boolean
    whatsapp_number?: boolean
    num_guests?: boolean
    rsvp_status?: boolean
    invite_sent?: boolean
    access_token?: boolean
    created_at?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "activity_id" | "invitee_name" | "invitee_email" | "whatsapp_number" | "num_guests" | "rsvp_status" | "invite_sent" | "access_token" | "created_at", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    activity?: boolean | Invitation$activityArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    activity?: boolean | Invitation$activityArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    activity?: boolean | Invitation$activityArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      activity: Prisma.$ActivityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      activity_id: string | null
      invitee_name: string
      invitee_email: string | null
      whatsapp_number: string
      num_guests: number
      rsvp_status: string
      invite_sent: boolean
      access_token: string
      created_at: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activity<T extends Invitation$activityArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$activityArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly event_id: FieldRef<"Invitation", 'String'>
    readonly activity_id: FieldRef<"Invitation", 'String'>
    readonly invitee_name: FieldRef<"Invitation", 'String'>
    readonly invitee_email: FieldRef<"Invitation", 'String'>
    readonly whatsapp_number: FieldRef<"Invitation", 'String'>
    readonly num_guests: FieldRef<"Invitation", 'Int'>
    readonly rsvp_status: FieldRef<"Invitation", 'String'>
    readonly invite_sent: FieldRef<"Invitation", 'Boolean'>
    readonly access_token: FieldRef<"Invitation", 'String'>
    readonly created_at: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation.activity
   */
  export type Invitation$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model OrchestrationLog
   */

  export type AggregateOrchestrationLog = {
    _count: OrchestrationLogCountAggregateOutputType | null
    _min: OrchestrationLogMinAggregateOutputType | null
    _max: OrchestrationLogMaxAggregateOutputType | null
  }

  export type OrchestrationLogMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    agent_name: string | null
    log_message: string | null
    timestamp: Date | null
  }

  export type OrchestrationLogMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    agent_name: string | null
    log_message: string | null
    timestamp: Date | null
  }

  export type OrchestrationLogCountAggregateOutputType = {
    id: number
    event_id: number
    agent_name: number
    log_message: number
    timestamp: number
    _all: number
  }


  export type OrchestrationLogMinAggregateInputType = {
    id?: true
    event_id?: true
    agent_name?: true
    log_message?: true
    timestamp?: true
  }

  export type OrchestrationLogMaxAggregateInputType = {
    id?: true
    event_id?: true
    agent_name?: true
    log_message?: true
    timestamp?: true
  }

  export type OrchestrationLogCountAggregateInputType = {
    id?: true
    event_id?: true
    agent_name?: true
    log_message?: true
    timestamp?: true
    _all?: true
  }

  export type OrchestrationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrchestrationLog to aggregate.
     */
    where?: OrchestrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrchestrationLogs to fetch.
     */
    orderBy?: OrchestrationLogOrderByWithRelationInput | OrchestrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrchestrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrchestrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrchestrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrchestrationLogs
    **/
    _count?: true | OrchestrationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrchestrationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrchestrationLogMaxAggregateInputType
  }

  export type GetOrchestrationLogAggregateType<T extends OrchestrationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOrchestrationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrchestrationLog[P]>
      : GetScalarType<T[P], AggregateOrchestrationLog[P]>
  }




  export type OrchestrationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrchestrationLogWhereInput
    orderBy?: OrchestrationLogOrderByWithAggregationInput | OrchestrationLogOrderByWithAggregationInput[]
    by: OrchestrationLogScalarFieldEnum[] | OrchestrationLogScalarFieldEnum
    having?: OrchestrationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrchestrationLogCountAggregateInputType | true
    _min?: OrchestrationLogMinAggregateInputType
    _max?: OrchestrationLogMaxAggregateInputType
  }

  export type OrchestrationLogGroupByOutputType = {
    id: string
    event_id: string
    agent_name: string
    log_message: string
    timestamp: Date
    _count: OrchestrationLogCountAggregateOutputType | null
    _min: OrchestrationLogMinAggregateOutputType | null
    _max: OrchestrationLogMaxAggregateOutputType | null
  }

  type GetOrchestrationLogGroupByPayload<T extends OrchestrationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrchestrationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrchestrationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrchestrationLogGroupByOutputType[P]>
            : GetScalarType<T[P], OrchestrationLogGroupByOutputType[P]>
        }
      >
    >


  export type OrchestrationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    agent_name?: boolean
    log_message?: boolean
    timestamp?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orchestrationLog"]>

  export type OrchestrationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    agent_name?: boolean
    log_message?: boolean
    timestamp?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orchestrationLog"]>

  export type OrchestrationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    agent_name?: boolean
    log_message?: boolean
    timestamp?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orchestrationLog"]>

  export type OrchestrationLogSelectScalar = {
    id?: boolean
    event_id?: boolean
    agent_name?: boolean
    log_message?: boolean
    timestamp?: boolean
  }

  export type OrchestrationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "agent_name" | "log_message" | "timestamp", ExtArgs["result"]["orchestrationLog"]>
  export type OrchestrationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type OrchestrationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type OrchestrationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $OrchestrationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrchestrationLog"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      agent_name: string
      log_message: string
      timestamp: Date
    }, ExtArgs["result"]["orchestrationLog"]>
    composites: {}
  }

  type OrchestrationLogGetPayload<S extends boolean | null | undefined | OrchestrationLogDefaultArgs> = $Result.GetResult<Prisma.$OrchestrationLogPayload, S>

  type OrchestrationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrchestrationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrchestrationLogCountAggregateInputType | true
    }

  export interface OrchestrationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrchestrationLog'], meta: { name: 'OrchestrationLog' } }
    /**
     * Find zero or one OrchestrationLog that matches the filter.
     * @param {OrchestrationLogFindUniqueArgs} args - Arguments to find a OrchestrationLog
     * @example
     * // Get one OrchestrationLog
     * const orchestrationLog = await prisma.orchestrationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrchestrationLogFindUniqueArgs>(args: SelectSubset<T, OrchestrationLogFindUniqueArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrchestrationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrchestrationLogFindUniqueOrThrowArgs} args - Arguments to find a OrchestrationLog
     * @example
     * // Get one OrchestrationLog
     * const orchestrationLog = await prisma.orchestrationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrchestrationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OrchestrationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrchestrationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogFindFirstArgs} args - Arguments to find a OrchestrationLog
     * @example
     * // Get one OrchestrationLog
     * const orchestrationLog = await prisma.orchestrationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrchestrationLogFindFirstArgs>(args?: SelectSubset<T, OrchestrationLogFindFirstArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrchestrationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogFindFirstOrThrowArgs} args - Arguments to find a OrchestrationLog
     * @example
     * // Get one OrchestrationLog
     * const orchestrationLog = await prisma.orchestrationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrchestrationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OrchestrationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrchestrationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrchestrationLogs
     * const orchestrationLogs = await prisma.orchestrationLog.findMany()
     * 
     * // Get first 10 OrchestrationLogs
     * const orchestrationLogs = await prisma.orchestrationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orchestrationLogWithIdOnly = await prisma.orchestrationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrchestrationLogFindManyArgs>(args?: SelectSubset<T, OrchestrationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrchestrationLog.
     * @param {OrchestrationLogCreateArgs} args - Arguments to create a OrchestrationLog.
     * @example
     * // Create one OrchestrationLog
     * const OrchestrationLog = await prisma.orchestrationLog.create({
     *   data: {
     *     // ... data to create a OrchestrationLog
     *   }
     * })
     * 
     */
    create<T extends OrchestrationLogCreateArgs>(args: SelectSubset<T, OrchestrationLogCreateArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrchestrationLogs.
     * @param {OrchestrationLogCreateManyArgs} args - Arguments to create many OrchestrationLogs.
     * @example
     * // Create many OrchestrationLogs
     * const orchestrationLog = await prisma.orchestrationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrchestrationLogCreateManyArgs>(args?: SelectSubset<T, OrchestrationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrchestrationLogs and returns the data saved in the database.
     * @param {OrchestrationLogCreateManyAndReturnArgs} args - Arguments to create many OrchestrationLogs.
     * @example
     * // Create many OrchestrationLogs
     * const orchestrationLog = await prisma.orchestrationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrchestrationLogs and only return the `id`
     * const orchestrationLogWithIdOnly = await prisma.orchestrationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrchestrationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OrchestrationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrchestrationLog.
     * @param {OrchestrationLogDeleteArgs} args - Arguments to delete one OrchestrationLog.
     * @example
     * // Delete one OrchestrationLog
     * const OrchestrationLog = await prisma.orchestrationLog.delete({
     *   where: {
     *     // ... filter to delete one OrchestrationLog
     *   }
     * })
     * 
     */
    delete<T extends OrchestrationLogDeleteArgs>(args: SelectSubset<T, OrchestrationLogDeleteArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrchestrationLog.
     * @param {OrchestrationLogUpdateArgs} args - Arguments to update one OrchestrationLog.
     * @example
     * // Update one OrchestrationLog
     * const orchestrationLog = await prisma.orchestrationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrchestrationLogUpdateArgs>(args: SelectSubset<T, OrchestrationLogUpdateArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrchestrationLogs.
     * @param {OrchestrationLogDeleteManyArgs} args - Arguments to filter OrchestrationLogs to delete.
     * @example
     * // Delete a few OrchestrationLogs
     * const { count } = await prisma.orchestrationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrchestrationLogDeleteManyArgs>(args?: SelectSubset<T, OrchestrationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrchestrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrchestrationLogs
     * const orchestrationLog = await prisma.orchestrationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrchestrationLogUpdateManyArgs>(args: SelectSubset<T, OrchestrationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrchestrationLogs and returns the data updated in the database.
     * @param {OrchestrationLogUpdateManyAndReturnArgs} args - Arguments to update many OrchestrationLogs.
     * @example
     * // Update many OrchestrationLogs
     * const orchestrationLog = await prisma.orchestrationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrchestrationLogs and only return the `id`
     * const orchestrationLogWithIdOnly = await prisma.orchestrationLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrchestrationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OrchestrationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrchestrationLog.
     * @param {OrchestrationLogUpsertArgs} args - Arguments to update or create a OrchestrationLog.
     * @example
     * // Update or create a OrchestrationLog
     * const orchestrationLog = await prisma.orchestrationLog.upsert({
     *   create: {
     *     // ... data to create a OrchestrationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrchestrationLog we want to update
     *   }
     * })
     */
    upsert<T extends OrchestrationLogUpsertArgs>(args: SelectSubset<T, OrchestrationLogUpsertArgs<ExtArgs>>): Prisma__OrchestrationLogClient<$Result.GetResult<Prisma.$OrchestrationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrchestrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogCountArgs} args - Arguments to filter OrchestrationLogs to count.
     * @example
     * // Count the number of OrchestrationLogs
     * const count = await prisma.orchestrationLog.count({
     *   where: {
     *     // ... the filter for the OrchestrationLogs we want to count
     *   }
     * })
    **/
    count<T extends OrchestrationLogCountArgs>(
      args?: Subset<T, OrchestrationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrchestrationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrchestrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrchestrationLogAggregateArgs>(args: Subset<T, OrchestrationLogAggregateArgs>): Prisma.PrismaPromise<GetOrchestrationLogAggregateType<T>>

    /**
     * Group by OrchestrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrchestrationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrchestrationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrchestrationLogGroupByArgs['orderBy'] }
        : { orderBy?: OrchestrationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrchestrationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrchestrationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrchestrationLog model
   */
  readonly fields: OrchestrationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrchestrationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrchestrationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrchestrationLog model
   */
  interface OrchestrationLogFieldRefs {
    readonly id: FieldRef<"OrchestrationLog", 'String'>
    readonly event_id: FieldRef<"OrchestrationLog", 'String'>
    readonly agent_name: FieldRef<"OrchestrationLog", 'String'>
    readonly log_message: FieldRef<"OrchestrationLog", 'String'>
    readonly timestamp: FieldRef<"OrchestrationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrchestrationLog findUnique
   */
  export type OrchestrationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * Filter, which OrchestrationLog to fetch.
     */
    where: OrchestrationLogWhereUniqueInput
  }

  /**
   * OrchestrationLog findUniqueOrThrow
   */
  export type OrchestrationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * Filter, which OrchestrationLog to fetch.
     */
    where: OrchestrationLogWhereUniqueInput
  }

  /**
   * OrchestrationLog findFirst
   */
  export type OrchestrationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * Filter, which OrchestrationLog to fetch.
     */
    where?: OrchestrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrchestrationLogs to fetch.
     */
    orderBy?: OrchestrationLogOrderByWithRelationInput | OrchestrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrchestrationLogs.
     */
    cursor?: OrchestrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrchestrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrchestrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrchestrationLogs.
     */
    distinct?: OrchestrationLogScalarFieldEnum | OrchestrationLogScalarFieldEnum[]
  }

  /**
   * OrchestrationLog findFirstOrThrow
   */
  export type OrchestrationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * Filter, which OrchestrationLog to fetch.
     */
    where?: OrchestrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrchestrationLogs to fetch.
     */
    orderBy?: OrchestrationLogOrderByWithRelationInput | OrchestrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrchestrationLogs.
     */
    cursor?: OrchestrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrchestrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrchestrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrchestrationLogs.
     */
    distinct?: OrchestrationLogScalarFieldEnum | OrchestrationLogScalarFieldEnum[]
  }

  /**
   * OrchestrationLog findMany
   */
  export type OrchestrationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * Filter, which OrchestrationLogs to fetch.
     */
    where?: OrchestrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrchestrationLogs to fetch.
     */
    orderBy?: OrchestrationLogOrderByWithRelationInput | OrchestrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrchestrationLogs.
     */
    cursor?: OrchestrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrchestrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrchestrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrchestrationLogs.
     */
    distinct?: OrchestrationLogScalarFieldEnum | OrchestrationLogScalarFieldEnum[]
  }

  /**
   * OrchestrationLog create
   */
  export type OrchestrationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OrchestrationLog.
     */
    data: XOR<OrchestrationLogCreateInput, OrchestrationLogUncheckedCreateInput>
  }

  /**
   * OrchestrationLog createMany
   */
  export type OrchestrationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrchestrationLogs.
     */
    data: OrchestrationLogCreateManyInput | OrchestrationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrchestrationLog createManyAndReturn
   */
  export type OrchestrationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * The data used to create many OrchestrationLogs.
     */
    data: OrchestrationLogCreateManyInput | OrchestrationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrchestrationLog update
   */
  export type OrchestrationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OrchestrationLog.
     */
    data: XOR<OrchestrationLogUpdateInput, OrchestrationLogUncheckedUpdateInput>
    /**
     * Choose, which OrchestrationLog to update.
     */
    where: OrchestrationLogWhereUniqueInput
  }

  /**
   * OrchestrationLog updateMany
   */
  export type OrchestrationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrchestrationLogs.
     */
    data: XOR<OrchestrationLogUpdateManyMutationInput, OrchestrationLogUncheckedUpdateManyInput>
    /**
     * Filter which OrchestrationLogs to update
     */
    where?: OrchestrationLogWhereInput
    /**
     * Limit how many OrchestrationLogs to update.
     */
    limit?: number
  }

  /**
   * OrchestrationLog updateManyAndReturn
   */
  export type OrchestrationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * The data used to update OrchestrationLogs.
     */
    data: XOR<OrchestrationLogUpdateManyMutationInput, OrchestrationLogUncheckedUpdateManyInput>
    /**
     * Filter which OrchestrationLogs to update
     */
    where?: OrchestrationLogWhereInput
    /**
     * Limit how many OrchestrationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrchestrationLog upsert
   */
  export type OrchestrationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OrchestrationLog to update in case it exists.
     */
    where: OrchestrationLogWhereUniqueInput
    /**
     * In case the OrchestrationLog found by the `where` argument doesn't exist, create a new OrchestrationLog with this data.
     */
    create: XOR<OrchestrationLogCreateInput, OrchestrationLogUncheckedCreateInput>
    /**
     * In case the OrchestrationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrchestrationLogUpdateInput, OrchestrationLogUncheckedUpdateInput>
  }

  /**
   * OrchestrationLog delete
   */
  export type OrchestrationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
    /**
     * Filter which OrchestrationLog to delete.
     */
    where: OrchestrationLogWhereUniqueInput
  }

  /**
   * OrchestrationLog deleteMany
   */
  export type OrchestrationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrchestrationLogs to delete
     */
    where?: OrchestrationLogWhereInput
    /**
     * Limit how many OrchestrationLogs to delete.
     */
    limit?: number
  }

  /**
   * OrchestrationLog without action
   */
  export type OrchestrationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrchestrationLog
     */
    select?: OrchestrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrchestrationLog
     */
    omit?: OrchestrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrchestrationLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    whatsapp: 'whatsapp',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires',
    profile_data: 'profile_data',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const CatalogItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    price: 'price',
    priceUnit: 'priceUnit',
    description: 'description',
    category: 'category',
    currency: 'currency',
    createdAt: 'createdAt'
  };

  export type CatalogItemScalarFieldEnum = (typeof CatalogItemScalarFieldEnum)[keyof typeof CatalogItemScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    title: 'title',
    description: 'description',
    event_type: 'event_type',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    location: 'location',
    orchestration_state: 'orchestration_state',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventDayScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    date: 'date',
    sequence_number: 'sequence_number',
    created_at: 'created_at'
  };

  export type EventDayScalarFieldEnum = (typeof EventDayScalarFieldEnum)[keyof typeof EventDayScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    day_id: 'day_id',
    event_id: 'event_id',
    title: 'title',
    start_time: 'start_time',
    end_time: 'end_time',
    location_type: 'location_type',
    location: 'location',
    status: 'status',
    is_orchestrated: 'is_orchestrated',
    created_at: 'created_at'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    activity_id: 'activity_id',
    invitee_name: 'invitee_name',
    invitee_email: 'invitee_email',
    whatsapp_number: 'whatsapp_number',
    num_guests: 'num_guests',
    rsvp_status: 'rsvp_status',
    invite_sent: 'invite_sent',
    access_token: 'access_token',
    created_at: 'created_at'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const OrchestrationLogScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    agent_name: 'agent_name',
    log_message: 'log_message',
    timestamp: 'timestamp'
  };

  export type OrchestrationLogScalarFieldEnum = (typeof OrchestrationLogScalarFieldEnum)[keyof typeof OrchestrationLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    whatsapp?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    profile_data?: JsonNullableFilter<"User">
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    catalogItems?: CatalogItemListRelationFilter
    events?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    profile_data?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    catalogItems?: CatalogItemOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    whatsapp?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    profile_data?: JsonNullableFilter<"User">
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    catalogItems?: CatalogItemListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "email" | "whatsapp">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    profile_data?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    whatsapp?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    profile_data?: JsonNullableWithAggregatesFilter<"User">
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type CatalogItemWhereInput = {
    AND?: CatalogItemWhereInput | CatalogItemWhereInput[]
    OR?: CatalogItemWhereInput[]
    NOT?: CatalogItemWhereInput | CatalogItemWhereInput[]
    id?: StringFilter<"CatalogItem"> | string
    userId?: StringFilter<"CatalogItem"> | string
    name?: StringFilter<"CatalogItem"> | string
    price?: FloatNullableFilter<"CatalogItem"> | number | null
    priceUnit?: StringNullableFilter<"CatalogItem"> | string | null
    description?: StringNullableFilter<"CatalogItem"> | string | null
    category?: StringNullableFilter<"CatalogItem"> | string | null
    currency?: StringNullableFilter<"CatalogItem"> | string | null
    createdAt?: DateTimeFilter<"CatalogItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CatalogItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    priceUnit?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CatalogItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CatalogItemWhereInput | CatalogItemWhereInput[]
    OR?: CatalogItemWhereInput[]
    NOT?: CatalogItemWhereInput | CatalogItemWhereInput[]
    userId?: StringFilter<"CatalogItem"> | string
    name?: StringFilter<"CatalogItem"> | string
    price?: FloatNullableFilter<"CatalogItem"> | number | null
    priceUnit?: StringNullableFilter<"CatalogItem"> | string | null
    description?: StringNullableFilter<"CatalogItem"> | string | null
    category?: StringNullableFilter<"CatalogItem"> | string | null
    currency?: StringNullableFilter<"CatalogItem"> | string | null
    createdAt?: DateTimeFilter<"CatalogItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CatalogItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrderInput | SortOrder
    priceUnit?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CatalogItemCountOrderByAggregateInput
    _avg?: CatalogItemAvgOrderByAggregateInput
    _max?: CatalogItemMaxOrderByAggregateInput
    _min?: CatalogItemMinOrderByAggregateInput
    _sum?: CatalogItemSumOrderByAggregateInput
  }

  export type CatalogItemScalarWhereWithAggregatesInput = {
    AND?: CatalogItemScalarWhereWithAggregatesInput | CatalogItemScalarWhereWithAggregatesInput[]
    OR?: CatalogItemScalarWhereWithAggregatesInput[]
    NOT?: CatalogItemScalarWhereWithAggregatesInput | CatalogItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CatalogItem"> | string
    userId?: StringWithAggregatesFilter<"CatalogItem"> | string
    name?: StringWithAggregatesFilter<"CatalogItem"> | string
    price?: FloatNullableWithAggregatesFilter<"CatalogItem"> | number | null
    priceUnit?: StringNullableWithAggregatesFilter<"CatalogItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"CatalogItem"> | string | null
    category?: StringNullableWithAggregatesFilter<"CatalogItem"> | string | null
    currency?: StringNullableWithAggregatesFilter<"CatalogItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CatalogItem"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: UuidFilter<"Event"> | string
    owner_id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    event_type?: StringFilter<"Event"> | string
    start_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    status?: StringFilter<"Event"> | string
    location?: StringNullableFilter<"Event"> | string | null
    orchestration_state?: JsonNullableFilter<"Event">
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    days?: EventDayListRelationFilter
    activities?: ActivityListRelationFilter
    invitations?: InvitationListRelationFilter
    logs?: OrchestrationLogListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    event_type?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    orchestration_state?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: UserOrderByWithRelationInput
    days?: EventDayOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    logs?: OrchestrationLogOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    owner_id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    event_type?: StringFilter<"Event"> | string
    start_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    status?: StringFilter<"Event"> | string
    location?: StringNullableFilter<"Event"> | string | null
    orchestration_state?: JsonNullableFilter<"Event">
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    days?: EventDayListRelationFilter
    activities?: ActivityListRelationFilter
    invitations?: InvitationListRelationFilter
    logs?: OrchestrationLogListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    event_type?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    orchestration_state?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Event"> | string
    owner_id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    event_type?: StringWithAggregatesFilter<"Event"> | string
    start_date?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    status?: StringWithAggregatesFilter<"Event"> | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    orchestration_state?: JsonNullableWithAggregatesFilter<"Event">
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventDayWhereInput = {
    AND?: EventDayWhereInput | EventDayWhereInput[]
    OR?: EventDayWhereInput[]
    NOT?: EventDayWhereInput | EventDayWhereInput[]
    id?: UuidFilter<"EventDay"> | string
    event_id?: UuidFilter<"EventDay"> | string
    date?: DateTimeFilter<"EventDay"> | Date | string
    sequence_number?: IntFilter<"EventDay"> | number
    created_at?: DateTimeFilter<"EventDay"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    activities?: ActivityListRelationFilter
  }

  export type EventDayOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    date?: SortOrder
    sequence_number?: SortOrder
    created_at?: SortOrder
    event?: EventOrderByWithRelationInput
    activities?: ActivityOrderByRelationAggregateInput
  }

  export type EventDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventDayWhereInput | EventDayWhereInput[]
    OR?: EventDayWhereInput[]
    NOT?: EventDayWhereInput | EventDayWhereInput[]
    event_id?: UuidFilter<"EventDay"> | string
    date?: DateTimeFilter<"EventDay"> | Date | string
    sequence_number?: IntFilter<"EventDay"> | number
    created_at?: DateTimeFilter<"EventDay"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    activities?: ActivityListRelationFilter
  }, "id">

  export type EventDayOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    date?: SortOrder
    sequence_number?: SortOrder
    created_at?: SortOrder
    _count?: EventDayCountOrderByAggregateInput
    _avg?: EventDayAvgOrderByAggregateInput
    _max?: EventDayMaxOrderByAggregateInput
    _min?: EventDayMinOrderByAggregateInput
    _sum?: EventDaySumOrderByAggregateInput
  }

  export type EventDayScalarWhereWithAggregatesInput = {
    AND?: EventDayScalarWhereWithAggregatesInput | EventDayScalarWhereWithAggregatesInput[]
    OR?: EventDayScalarWhereWithAggregatesInput[]
    NOT?: EventDayScalarWhereWithAggregatesInput | EventDayScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventDay"> | string
    event_id?: UuidWithAggregatesFilter<"EventDay"> | string
    date?: DateTimeWithAggregatesFilter<"EventDay"> | Date | string
    sequence_number?: IntWithAggregatesFilter<"EventDay"> | number
    created_at?: DateTimeWithAggregatesFilter<"EventDay"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: UuidFilter<"Activity"> | string
    day_id?: UuidFilter<"Activity"> | string
    event_id?: UuidFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    start_time?: DateTimeFilter<"Activity"> | Date | string
    end_time?: DateTimeFilter<"Activity"> | Date | string
    location_type?: StringFilter<"Activity"> | string
    location?: StringNullableFilter<"Activity"> | string | null
    status?: StringFilter<"Activity"> | string
    is_orchestrated?: BoolFilter<"Activity"> | boolean
    created_at?: DateTimeFilter<"Activity"> | Date | string
    day?: XOR<EventDayScalarRelationFilter, EventDayWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    invitations?: InvitationListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    day_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_type?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    is_orchestrated?: SortOrder
    created_at?: SortOrder
    day?: EventDayOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    invitations?: InvitationOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    day_id?: UuidFilter<"Activity"> | string
    event_id?: UuidFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    start_time?: DateTimeFilter<"Activity"> | Date | string
    end_time?: DateTimeFilter<"Activity"> | Date | string
    location_type?: StringFilter<"Activity"> | string
    location?: StringNullableFilter<"Activity"> | string | null
    status?: StringFilter<"Activity"> | string
    is_orchestrated?: BoolFilter<"Activity"> | boolean
    created_at?: DateTimeFilter<"Activity"> | Date | string
    day?: XOR<EventDayScalarRelationFilter, EventDayWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    invitations?: InvitationListRelationFilter
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    day_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_type?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    is_orchestrated?: SortOrder
    created_at?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Activity"> | string
    day_id?: UuidWithAggregatesFilter<"Activity"> | string
    event_id?: UuidWithAggregatesFilter<"Activity"> | string
    title?: StringWithAggregatesFilter<"Activity"> | string
    start_time?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    location_type?: StringWithAggregatesFilter<"Activity"> | string
    location?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    status?: StringWithAggregatesFilter<"Activity"> | string
    is_orchestrated?: BoolWithAggregatesFilter<"Activity"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: UuidFilter<"Invitation"> | string
    event_id?: UuidFilter<"Invitation"> | string
    activity_id?: UuidNullableFilter<"Invitation"> | string | null
    invitee_name?: StringFilter<"Invitation"> | string
    invitee_email?: StringNullableFilter<"Invitation"> | string | null
    whatsapp_number?: StringFilter<"Invitation"> | string
    num_guests?: IntFilter<"Invitation"> | number
    rsvp_status?: StringFilter<"Invitation"> | string
    invite_sent?: BoolFilter<"Invitation"> | boolean
    access_token?: StringFilter<"Invitation"> | string
    created_at?: DateTimeFilter<"Invitation"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    activity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    activity_id?: SortOrderInput | SortOrder
    invitee_name?: SortOrder
    invitee_email?: SortOrderInput | SortOrder
    whatsapp_number?: SortOrder
    num_guests?: SortOrder
    rsvp_status?: SortOrder
    invite_sent?: SortOrder
    access_token?: SortOrder
    created_at?: SortOrder
    event?: EventOrderByWithRelationInput
    activity?: ActivityOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    access_token?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    event_id?: UuidFilter<"Invitation"> | string
    activity_id?: UuidNullableFilter<"Invitation"> | string | null
    invitee_name?: StringFilter<"Invitation"> | string
    invitee_email?: StringNullableFilter<"Invitation"> | string | null
    whatsapp_number?: StringFilter<"Invitation"> | string
    num_guests?: IntFilter<"Invitation"> | number
    rsvp_status?: StringFilter<"Invitation"> | string
    invite_sent?: BoolFilter<"Invitation"> | boolean
    created_at?: DateTimeFilter<"Invitation"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    activity?: XOR<ActivityNullableScalarRelationFilter, ActivityWhereInput> | null
  }, "id" | "access_token">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    activity_id?: SortOrderInput | SortOrder
    invitee_name?: SortOrder
    invitee_email?: SortOrderInput | SortOrder
    whatsapp_number?: SortOrder
    num_guests?: SortOrder
    rsvp_status?: SortOrder
    invite_sent?: SortOrder
    access_token?: SortOrder
    created_at?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _avg?: InvitationAvgOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
    _sum?: InvitationSumOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Invitation"> | string
    event_id?: UuidWithAggregatesFilter<"Invitation"> | string
    activity_id?: UuidNullableWithAggregatesFilter<"Invitation"> | string | null
    invitee_name?: StringWithAggregatesFilter<"Invitation"> | string
    invitee_email?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    whatsapp_number?: StringWithAggregatesFilter<"Invitation"> | string
    num_guests?: IntWithAggregatesFilter<"Invitation"> | number
    rsvp_status?: StringWithAggregatesFilter<"Invitation"> | string
    invite_sent?: BoolWithAggregatesFilter<"Invitation"> | boolean
    access_token?: StringWithAggregatesFilter<"Invitation"> | string
    created_at?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type OrchestrationLogWhereInput = {
    AND?: OrchestrationLogWhereInput | OrchestrationLogWhereInput[]
    OR?: OrchestrationLogWhereInput[]
    NOT?: OrchestrationLogWhereInput | OrchestrationLogWhereInput[]
    id?: UuidFilter<"OrchestrationLog"> | string
    event_id?: UuidFilter<"OrchestrationLog"> | string
    agent_name?: StringFilter<"OrchestrationLog"> | string
    log_message?: StringFilter<"OrchestrationLog"> | string
    timestamp?: DateTimeFilter<"OrchestrationLog"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type OrchestrationLogOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    agent_name?: SortOrder
    log_message?: SortOrder
    timestamp?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type OrchestrationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrchestrationLogWhereInput | OrchestrationLogWhereInput[]
    OR?: OrchestrationLogWhereInput[]
    NOT?: OrchestrationLogWhereInput | OrchestrationLogWhereInput[]
    event_id?: UuidFilter<"OrchestrationLog"> | string
    agent_name?: StringFilter<"OrchestrationLog"> | string
    log_message?: StringFilter<"OrchestrationLog"> | string
    timestamp?: DateTimeFilter<"OrchestrationLog"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type OrchestrationLogOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    agent_name?: SortOrder
    log_message?: SortOrder
    timestamp?: SortOrder
    _count?: OrchestrationLogCountOrderByAggregateInput
    _max?: OrchestrationLogMaxOrderByAggregateInput
    _min?: OrchestrationLogMinOrderByAggregateInput
  }

  export type OrchestrationLogScalarWhereWithAggregatesInput = {
    AND?: OrchestrationLogScalarWhereWithAggregatesInput | OrchestrationLogScalarWhereWithAggregatesInput[]
    OR?: OrchestrationLogScalarWhereWithAggregatesInput[]
    NOT?: OrchestrationLogScalarWhereWithAggregatesInput | OrchestrationLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OrchestrationLog"> | string
    event_id?: UuidWithAggregatesFilter<"OrchestrationLog"> | string
    agent_name?: StringWithAggregatesFilter<"OrchestrationLog"> | string
    log_message?: StringWithAggregatesFilter<"OrchestrationLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"OrchestrationLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CatalogItemCreateInput = {
    id?: string
    name: string
    price?: number | null
    priceUnit?: string | null
    description?: string | null
    category?: string | null
    currency?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCatalogItemsInput
  }

  export type CatalogItemUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    price?: number | null
    priceUnit?: string | null
    description?: string | null
    category?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type CatalogItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCatalogItemsNestedInput
  }

  export type CatalogItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogItemCreateManyInput = {
    id?: string
    userId: string
    name: string
    price?: number | null
    priceUnit?: string | null
    description?: string | null
    category?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type CatalogItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    days?: EventDayCreateNestedManyWithoutEventInput
    activities?: ActivityCreateNestedManyWithoutEventInput
    invitations?: InvitationCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    owner_id: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    days?: EventDayUncheckedCreateNestedManyWithoutEventInput
    activities?: ActivityUncheckedCreateNestedManyWithoutEventInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    days?: EventDayUpdateManyWithoutEventNestedInput
    activities?: ActivityUpdateManyWithoutEventNestedInput
    invitations?: InvitationUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: EventDayUncheckedUpdateManyWithoutEventNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutEventNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    owner_id: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventDayCreateInput = {
    id?: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
    event: EventCreateNestedOneWithoutDaysInput
    activities?: ActivityCreateNestedManyWithoutDayInput
  }

  export type EventDayUncheckedCreateInput = {
    id?: string
    event_id: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDayInput
  }

  export type EventDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutDaysNestedInput
    activities?: ActivityUpdateManyWithoutDayNestedInput
  }

  export type EventDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDayNestedInput
  }

  export type EventDayCreateManyInput = {
    id?: string
    event_id: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
  }

  export type EventDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    day: EventDayCreateNestedOneWithoutActivitiesInput
    event: EventCreateNestedOneWithoutActivitiesInput
    invitations?: InvitationCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    day_id: string
    event_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    invitations?: InvitationUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: EventDayUpdateOneRequiredWithoutActivitiesNestedInput
    event?: EventUpdateOneRequiredWithoutActivitiesNestedInput
    invitations?: InvitationUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitations?: InvitationUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    day_id: string
    event_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutInvitationsInput
    activity?: ActivityCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    event_id: string
    activity_id?: string | null
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutInvitationsNestedInput
    activity?: ActivityUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    activity_id?: NullableStringFieldUpdateOperationsInput | string | null
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    event_id: string
    activity_id?: string | null
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    activity_id?: NullableStringFieldUpdateOperationsInput | string | null
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrchestrationLogCreateInput = {
    id?: string
    agent_name: string
    log_message: string
    timestamp?: Date | string
    event: EventCreateNestedOneWithoutLogsInput
  }

  export type OrchestrationLogUncheckedCreateInput = {
    id?: string
    event_id: string
    agent_name: string
    log_message: string
    timestamp?: Date | string
  }

  export type OrchestrationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutLogsNestedInput
  }

  export type OrchestrationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrchestrationLogCreateManyInput = {
    id?: string
    event_id: string
    agent_name: string
    log_message: string
    timestamp?: Date | string
  }

  export type OrchestrationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrchestrationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type CatalogItemListRelationFilter = {
    every?: CatalogItemWhereInput
    some?: CatalogItemWhereInput
    none?: CatalogItemWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatalogItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    whatsapp?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    profile_data?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    whatsapp?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    whatsapp?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CatalogItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    description?: SortOrder
    category?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type CatalogItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CatalogItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    description?: SortOrder
    category?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type CatalogItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceUnit?: SortOrder
    description?: SortOrder
    category?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type CatalogItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EventDayListRelationFilter = {
    every?: EventDayWhereInput
    some?: EventDayWhereInput
    none?: EventDayWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type OrchestrationLogListRelationFilter = {
    every?: OrchestrationLogWhereInput
    some?: OrchestrationLogWhereInput
    none?: OrchestrationLogWhereInput
  }

  export type EventDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrchestrationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    event_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    location?: SortOrder
    orchestration_state?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    event_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    event_type?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventDayCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    date?: SortOrder
    sequence_number?: SortOrder
    created_at?: SortOrder
  }

  export type EventDayAvgOrderByAggregateInput = {
    sequence_number?: SortOrder
  }

  export type EventDayMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    date?: SortOrder
    sequence_number?: SortOrder
    created_at?: SortOrder
  }

  export type EventDayMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    date?: SortOrder
    sequence_number?: SortOrder
    created_at?: SortOrder
  }

  export type EventDaySumOrderByAggregateInput = {
    sequence_number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EventDayScalarRelationFilter = {
    is?: EventDayWhereInput
    isNot?: EventDayWhereInput
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    day_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    is_orchestrated?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    day_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    is_orchestrated?: SortOrder
    created_at?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    day_id?: SortOrder
    event_id?: SortOrder
    title?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location_type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    is_orchestrated?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ActivityNullableScalarRelationFilter = {
    is?: ActivityWhereInput | null
    isNot?: ActivityWhereInput | null
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    activity_id?: SortOrder
    invitee_name?: SortOrder
    invitee_email?: SortOrder
    whatsapp_number?: SortOrder
    num_guests?: SortOrder
    rsvp_status?: SortOrder
    invite_sent?: SortOrder
    access_token?: SortOrder
    created_at?: SortOrder
  }

  export type InvitationAvgOrderByAggregateInput = {
    num_guests?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    activity_id?: SortOrder
    invitee_name?: SortOrder
    invitee_email?: SortOrder
    whatsapp_number?: SortOrder
    num_guests?: SortOrder
    rsvp_status?: SortOrder
    invite_sent?: SortOrder
    access_token?: SortOrder
    created_at?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    activity_id?: SortOrder
    invitee_name?: SortOrder
    invitee_email?: SortOrder
    whatsapp_number?: SortOrder
    num_guests?: SortOrder
    rsvp_status?: SortOrder
    invite_sent?: SortOrder
    access_token?: SortOrder
    created_at?: SortOrder
  }

  export type InvitationSumOrderByAggregateInput = {
    num_guests?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrchestrationLogCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    agent_name?: SortOrder
    log_message?: SortOrder
    timestamp?: SortOrder
  }

  export type OrchestrationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    agent_name?: SortOrder
    log_message?: SortOrder
    timestamp?: SortOrder
  }

  export type OrchestrationLogMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    agent_name?: SortOrder
    log_message?: SortOrder
    timestamp?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CatalogItemCreateNestedManyWithoutUserInput = {
    create?: XOR<CatalogItemCreateWithoutUserInput, CatalogItemUncheckedCreateWithoutUserInput> | CatalogItemCreateWithoutUserInput[] | CatalogItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutUserInput | CatalogItemCreateOrConnectWithoutUserInput[]
    createMany?: CatalogItemCreateManyUserInputEnvelope
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type CatalogItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CatalogItemCreateWithoutUserInput, CatalogItemUncheckedCreateWithoutUserInput> | CatalogItemCreateWithoutUserInput[] | CatalogItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutUserInput | CatalogItemCreateOrConnectWithoutUserInput[]
    createMany?: CatalogItemCreateManyUserInputEnvelope
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CatalogItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<CatalogItemCreateWithoutUserInput, CatalogItemUncheckedCreateWithoutUserInput> | CatalogItemCreateWithoutUserInput[] | CatalogItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutUserInput | CatalogItemCreateOrConnectWithoutUserInput[]
    upsert?: CatalogItemUpsertWithWhereUniqueWithoutUserInput | CatalogItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CatalogItemCreateManyUserInputEnvelope
    set?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    disconnect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    delete?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    update?: CatalogItemUpdateWithWhereUniqueWithoutUserInput | CatalogItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CatalogItemUpdateManyWithWhereWithoutUserInput | CatalogItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
  }

  export type EventUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type CatalogItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CatalogItemCreateWithoutUserInput, CatalogItemUncheckedCreateWithoutUserInput> | CatalogItemCreateWithoutUserInput[] | CatalogItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatalogItemCreateOrConnectWithoutUserInput | CatalogItemCreateOrConnectWithoutUserInput[]
    upsert?: CatalogItemUpsertWithWhereUniqueWithoutUserInput | CatalogItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CatalogItemCreateManyUserInputEnvelope
    set?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    disconnect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    delete?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    connect?: CatalogItemWhereUniqueInput | CatalogItemWhereUniqueInput[]
    update?: CatalogItemUpdateWithWhereUniqueWithoutUserInput | CatalogItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CatalogItemUpdateManyWithWhereWithoutUserInput | CatalogItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput> | EventCreateWithoutOwnerInput[] | EventUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOwnerInput | EventCreateOrConnectWithoutOwnerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput | EventUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EventCreateManyOwnerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOwnerInput | EventUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOwnerInput | EventUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutCatalogItemsInput = {
    create?: XOR<UserCreateWithoutCatalogItemsInput, UserUncheckedCreateWithoutCatalogItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCatalogItemsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCatalogItemsNestedInput = {
    create?: XOR<UserCreateWithoutCatalogItemsInput, UserUncheckedCreateWithoutCatalogItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCatalogItemsInput
    upsert?: UserUpsertWithoutCatalogItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCatalogItemsInput, UserUpdateWithoutCatalogItemsInput>, UserUncheckedUpdateWithoutCatalogItemsInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventDayCreateNestedManyWithoutEventInput = {
    create?: XOR<EventDayCreateWithoutEventInput, EventDayUncheckedCreateWithoutEventInput> | EventDayCreateWithoutEventInput[] | EventDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventDayCreateOrConnectWithoutEventInput | EventDayCreateOrConnectWithoutEventInput[]
    createMany?: EventDayCreateManyEventInputEnvelope
    connect?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutEventInput = {
    create?: XOR<ActivityCreateWithoutEventInput, ActivityUncheckedCreateWithoutEventInput> | ActivityCreateWithoutEventInput[] | ActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutEventInput | ActivityCreateOrConnectWithoutEventInput[]
    createMany?: ActivityCreateManyEventInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutEventInput = {
    create?: XOR<InvitationCreateWithoutEventInput, InvitationUncheckedCreateWithoutEventInput> | InvitationCreateWithoutEventInput[] | InvitationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutEventInput | InvitationCreateOrConnectWithoutEventInput[]
    createMany?: InvitationCreateManyEventInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type OrchestrationLogCreateNestedManyWithoutEventInput = {
    create?: XOR<OrchestrationLogCreateWithoutEventInput, OrchestrationLogUncheckedCreateWithoutEventInput> | OrchestrationLogCreateWithoutEventInput[] | OrchestrationLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrchestrationLogCreateOrConnectWithoutEventInput | OrchestrationLogCreateOrConnectWithoutEventInput[]
    createMany?: OrchestrationLogCreateManyEventInputEnvelope
    connect?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
  }

  export type EventDayUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventDayCreateWithoutEventInput, EventDayUncheckedCreateWithoutEventInput> | EventDayCreateWithoutEventInput[] | EventDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventDayCreateOrConnectWithoutEventInput | EventDayCreateOrConnectWithoutEventInput[]
    createMany?: EventDayCreateManyEventInputEnvelope
    connect?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ActivityCreateWithoutEventInput, ActivityUncheckedCreateWithoutEventInput> | ActivityCreateWithoutEventInput[] | ActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutEventInput | ActivityCreateOrConnectWithoutEventInput[]
    createMany?: ActivityCreateManyEventInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<InvitationCreateWithoutEventInput, InvitationUncheckedCreateWithoutEventInput> | InvitationCreateWithoutEventInput[] | InvitationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutEventInput | InvitationCreateOrConnectWithoutEventInput[]
    createMany?: InvitationCreateManyEventInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type OrchestrationLogUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<OrchestrationLogCreateWithoutEventInput, OrchestrationLogUncheckedCreateWithoutEventInput> | OrchestrationLogCreateWithoutEventInput[] | OrchestrationLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrchestrationLogCreateOrConnectWithoutEventInput | OrchestrationLogCreateOrConnectWithoutEventInput[]
    createMany?: OrchestrationLogCreateManyEventInputEnvelope
    connect?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventDayUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventDayCreateWithoutEventInput, EventDayUncheckedCreateWithoutEventInput> | EventDayCreateWithoutEventInput[] | EventDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventDayCreateOrConnectWithoutEventInput | EventDayCreateOrConnectWithoutEventInput[]
    upsert?: EventDayUpsertWithWhereUniqueWithoutEventInput | EventDayUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventDayCreateManyEventInputEnvelope
    set?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    disconnect?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    delete?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    connect?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    update?: EventDayUpdateWithWhereUniqueWithoutEventInput | EventDayUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventDayUpdateManyWithWhereWithoutEventInput | EventDayUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventDayScalarWhereInput | EventDayScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutEventNestedInput = {
    create?: XOR<ActivityCreateWithoutEventInput, ActivityUncheckedCreateWithoutEventInput> | ActivityCreateWithoutEventInput[] | ActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutEventInput | ActivityCreateOrConnectWithoutEventInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutEventInput | ActivityUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ActivityCreateManyEventInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutEventInput | ActivityUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutEventInput | ActivityUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutEventNestedInput = {
    create?: XOR<InvitationCreateWithoutEventInput, InvitationUncheckedCreateWithoutEventInput> | InvitationCreateWithoutEventInput[] | InvitationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutEventInput | InvitationCreateOrConnectWithoutEventInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutEventInput | InvitationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: InvitationCreateManyEventInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutEventInput | InvitationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutEventInput | InvitationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type OrchestrationLogUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrchestrationLogCreateWithoutEventInput, OrchestrationLogUncheckedCreateWithoutEventInput> | OrchestrationLogCreateWithoutEventInput[] | OrchestrationLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrchestrationLogCreateOrConnectWithoutEventInput | OrchestrationLogCreateOrConnectWithoutEventInput[]
    upsert?: OrchestrationLogUpsertWithWhereUniqueWithoutEventInput | OrchestrationLogUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrchestrationLogCreateManyEventInputEnvelope
    set?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    disconnect?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    delete?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    connect?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    update?: OrchestrationLogUpdateWithWhereUniqueWithoutEventInput | OrchestrationLogUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrchestrationLogUpdateManyWithWhereWithoutEventInput | OrchestrationLogUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrchestrationLogScalarWhereInput | OrchestrationLogScalarWhereInput[]
  }

  export type EventDayUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventDayCreateWithoutEventInput, EventDayUncheckedCreateWithoutEventInput> | EventDayCreateWithoutEventInput[] | EventDayUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventDayCreateOrConnectWithoutEventInput | EventDayCreateOrConnectWithoutEventInput[]
    upsert?: EventDayUpsertWithWhereUniqueWithoutEventInput | EventDayUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventDayCreateManyEventInputEnvelope
    set?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    disconnect?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    delete?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    connect?: EventDayWhereUniqueInput | EventDayWhereUniqueInput[]
    update?: EventDayUpdateWithWhereUniqueWithoutEventInput | EventDayUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventDayUpdateManyWithWhereWithoutEventInput | EventDayUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventDayScalarWhereInput | EventDayScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ActivityCreateWithoutEventInput, ActivityUncheckedCreateWithoutEventInput> | ActivityCreateWithoutEventInput[] | ActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutEventInput | ActivityCreateOrConnectWithoutEventInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutEventInput | ActivityUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ActivityCreateManyEventInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutEventInput | ActivityUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutEventInput | ActivityUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<InvitationCreateWithoutEventInput, InvitationUncheckedCreateWithoutEventInput> | InvitationCreateWithoutEventInput[] | InvitationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutEventInput | InvitationCreateOrConnectWithoutEventInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutEventInput | InvitationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: InvitationCreateManyEventInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutEventInput | InvitationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutEventInput | InvitationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type OrchestrationLogUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrchestrationLogCreateWithoutEventInput, OrchestrationLogUncheckedCreateWithoutEventInput> | OrchestrationLogCreateWithoutEventInput[] | OrchestrationLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrchestrationLogCreateOrConnectWithoutEventInput | OrchestrationLogCreateOrConnectWithoutEventInput[]
    upsert?: OrchestrationLogUpsertWithWhereUniqueWithoutEventInput | OrchestrationLogUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrchestrationLogCreateManyEventInputEnvelope
    set?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    disconnect?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    delete?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    connect?: OrchestrationLogWhereUniqueInput | OrchestrationLogWhereUniqueInput[]
    update?: OrchestrationLogUpdateWithWhereUniqueWithoutEventInput | OrchestrationLogUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrchestrationLogUpdateManyWithWhereWithoutEventInput | OrchestrationLogUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrchestrationLogScalarWhereInput | OrchestrationLogScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutDaysInput = {
    create?: XOR<EventCreateWithoutDaysInput, EventUncheckedCreateWithoutDaysInput>
    connectOrCreate?: EventCreateOrConnectWithoutDaysInput
    connect?: EventWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutDayInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<EventCreateWithoutDaysInput, EventUncheckedCreateWithoutDaysInput>
    connectOrCreate?: EventCreateOrConnectWithoutDaysInput
    upsert?: EventUpsertWithoutDaysInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutDaysInput, EventUpdateWithoutDaysInput>, EventUncheckedUpdateWithoutDaysInput>
  }

  export type ActivityUpdateManyWithoutDayNestedInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDayInput | ActivityUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDayInput | ActivityUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDayInput | ActivityUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDayInput | ActivityUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDayInput | ActivityUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDayInput | ActivityUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type EventDayCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<EventDayCreateWithoutActivitiesInput, EventDayUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EventDayCreateOrConnectWithoutActivitiesInput
    connect?: EventDayWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EventCreateOrConnectWithoutActivitiesInput
    connect?: EventWhereUniqueInput
  }

  export type InvitationCreateNestedManyWithoutActivityInput = {
    create?: XOR<InvitationCreateWithoutActivityInput, InvitationUncheckedCreateWithoutActivityInput> | InvitationCreateWithoutActivityInput[] | InvitationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutActivityInput | InvitationCreateOrConnectWithoutActivityInput[]
    createMany?: InvitationCreateManyActivityInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<InvitationCreateWithoutActivityInput, InvitationUncheckedCreateWithoutActivityInput> | InvitationCreateWithoutActivityInput[] | InvitationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutActivityInput | InvitationCreateOrConnectWithoutActivityInput[]
    createMany?: InvitationCreateManyActivityInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type EventDayUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<EventDayCreateWithoutActivitiesInput, EventDayUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EventDayCreateOrConnectWithoutActivitiesInput
    upsert?: EventDayUpsertWithoutActivitiesInput
    connect?: EventDayWhereUniqueInput
    update?: XOR<XOR<EventDayUpdateToOneWithWhereWithoutActivitiesInput, EventDayUpdateWithoutActivitiesInput>, EventDayUncheckedUpdateWithoutActivitiesInput>
  }

  export type EventUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EventCreateOrConnectWithoutActivitiesInput
    upsert?: EventUpsertWithoutActivitiesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutActivitiesInput, EventUpdateWithoutActivitiesInput>, EventUncheckedUpdateWithoutActivitiesInput>
  }

  export type InvitationUpdateManyWithoutActivityNestedInput = {
    create?: XOR<InvitationCreateWithoutActivityInput, InvitationUncheckedCreateWithoutActivityInput> | InvitationCreateWithoutActivityInput[] | InvitationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutActivityInput | InvitationCreateOrConnectWithoutActivityInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutActivityInput | InvitationUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: InvitationCreateManyActivityInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutActivityInput | InvitationUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutActivityInput | InvitationUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<InvitationCreateWithoutActivityInput, InvitationUncheckedCreateWithoutActivityInput> | InvitationCreateWithoutActivityInput[] | InvitationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutActivityInput | InvitationCreateOrConnectWithoutActivityInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutActivityInput | InvitationUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: InvitationCreateManyActivityInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutActivityInput | InvitationUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutActivityInput | InvitationUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<EventCreateWithoutInvitationsInput, EventUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutInvitationsInput
    connect?: EventWhereUniqueInput
  }

  export type ActivityCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ActivityCreateWithoutInvitationsInput, ActivityUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutInvitationsInput
    connect?: ActivityWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<EventCreateWithoutInvitationsInput, EventUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutInvitationsInput
    upsert?: EventUpsertWithoutInvitationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutInvitationsInput, EventUpdateWithoutInvitationsInput>, EventUncheckedUpdateWithoutInvitationsInput>
  }

  export type ActivityUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<ActivityCreateWithoutInvitationsInput, ActivityUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutInvitationsInput
    upsert?: ActivityUpsertWithoutInvitationsInput
    disconnect?: ActivityWhereInput | boolean
    delete?: ActivityWhereInput | boolean
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutInvitationsInput, ActivityUpdateWithoutInvitationsInput>, ActivityUncheckedUpdateWithoutInvitationsInput>
  }

  export type EventCreateNestedOneWithoutLogsInput = {
    create?: XOR<EventCreateWithoutLogsInput, EventUncheckedCreateWithoutLogsInput>
    connectOrCreate?: EventCreateOrConnectWithoutLogsInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<EventCreateWithoutLogsInput, EventUncheckedCreateWithoutLogsInput>
    connectOrCreate?: EventCreateOrConnectWithoutLogsInput
    upsert?: EventUpsertWithoutLogsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutLogsInput, EventUpdateWithoutLogsInput>, EventUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CatalogItemCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    priceUnit?: string | null
    description?: string | null
    category?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type CatalogItemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    price?: number | null
    priceUnit?: string | null
    description?: string | null
    category?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type CatalogItemCreateOrConnectWithoutUserInput = {
    where: CatalogItemWhereUniqueInput
    create: XOR<CatalogItemCreateWithoutUserInput, CatalogItemUncheckedCreateWithoutUserInput>
  }

  export type CatalogItemCreateManyUserInputEnvelope = {
    data: CatalogItemCreateManyUserInput | CatalogItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    days?: EventDayCreateNestedManyWithoutEventInput
    activities?: ActivityCreateNestedManyWithoutEventInput
    invitations?: InvitationCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    days?: EventDayUncheckedCreateNestedManyWithoutEventInput
    activities?: ActivityUncheckedCreateNestedManyWithoutEventInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOwnerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventCreateManyOwnerInputEnvelope = {
    data: EventCreateManyOwnerInput | EventCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type CatalogItemUpsertWithWhereUniqueWithoutUserInput = {
    where: CatalogItemWhereUniqueInput
    update: XOR<CatalogItemUpdateWithoutUserInput, CatalogItemUncheckedUpdateWithoutUserInput>
    create: XOR<CatalogItemCreateWithoutUserInput, CatalogItemUncheckedCreateWithoutUserInput>
  }

  export type CatalogItemUpdateWithWhereUniqueWithoutUserInput = {
    where: CatalogItemWhereUniqueInput
    data: XOR<CatalogItemUpdateWithoutUserInput, CatalogItemUncheckedUpdateWithoutUserInput>
  }

  export type CatalogItemUpdateManyWithWhereWithoutUserInput = {
    where: CatalogItemScalarWhereInput
    data: XOR<CatalogItemUpdateManyMutationInput, CatalogItemUncheckedUpdateManyWithoutUserInput>
  }

  export type CatalogItemScalarWhereInput = {
    AND?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
    OR?: CatalogItemScalarWhereInput[]
    NOT?: CatalogItemScalarWhereInput | CatalogItemScalarWhereInput[]
    id?: StringFilter<"CatalogItem"> | string
    userId?: StringFilter<"CatalogItem"> | string
    name?: StringFilter<"CatalogItem"> | string
    price?: FloatNullableFilter<"CatalogItem"> | number | null
    priceUnit?: StringNullableFilter<"CatalogItem"> | string | null
    description?: StringNullableFilter<"CatalogItem"> | string | null
    category?: StringNullableFilter<"CatalogItem"> | string | null
    currency?: StringNullableFilter<"CatalogItem"> | string | null
    createdAt?: DateTimeFilter<"CatalogItem"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
    create: XOR<EventCreateWithoutOwnerInput, EventUncheckedCreateWithoutOwnerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOwnerInput, EventUncheckedUpdateWithoutOwnerInput>
  }

  export type EventUpdateManyWithWhereWithoutOwnerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: UuidFilter<"Event"> | string
    owner_id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    event_type?: StringFilter<"Event"> | string
    start_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    status?: StringFilter<"Event"> | string
    location?: StringNullableFilter<"Event"> | string | null
    orchestration_state?: JsonNullableFilter<"Event">
    created_at?: DateTimeFilter<"Event"> | Date | string
    updated_at?: DateTimeFilter<"Event"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutCatalogItemsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCatalogItemsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCatalogItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCatalogItemsInput, UserUncheckedCreateWithoutCatalogItemsInput>
  }

  export type UserUpsertWithoutCatalogItemsInput = {
    update: XOR<UserUpdateWithoutCatalogItemsInput, UserUncheckedUpdateWithoutCatalogItemsInput>
    create: XOR<UserCreateWithoutCatalogItemsInput, UserUncheckedCreateWithoutCatalogItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCatalogItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCatalogItemsInput, UserUncheckedUpdateWithoutCatalogItemsInput>
  }

  export type UserUpdateWithoutCatalogItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCatalogItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    name?: string | null
    role?: $Enums.Role
    whatsapp?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    catalogItems?: CatalogItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventDayCreateWithoutEventInput = {
    id?: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
    activities?: ActivityCreateNestedManyWithoutDayInput
  }

  export type EventDayUncheckedCreateWithoutEventInput = {
    id?: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDayInput
  }

  export type EventDayCreateOrConnectWithoutEventInput = {
    where: EventDayWhereUniqueInput
    create: XOR<EventDayCreateWithoutEventInput, EventDayUncheckedCreateWithoutEventInput>
  }

  export type EventDayCreateManyEventInputEnvelope = {
    data: EventDayCreateManyEventInput | EventDayCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutEventInput = {
    id?: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    day: EventDayCreateNestedOneWithoutActivitiesInput
    invitations?: InvitationCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutEventInput = {
    id?: string
    day_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    invitations?: InvitationUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutEventInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutEventInput, ActivityUncheckedCreateWithoutEventInput>
  }

  export type ActivityCreateManyEventInputEnvelope = {
    data: ActivityCreateManyEventInput | ActivityCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutEventInput = {
    id?: string
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
    activity?: ActivityCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutEventInput = {
    id?: string
    activity_id?: string | null
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
  }

  export type InvitationCreateOrConnectWithoutEventInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutEventInput, InvitationUncheckedCreateWithoutEventInput>
  }

  export type InvitationCreateManyEventInputEnvelope = {
    data: InvitationCreateManyEventInput | InvitationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrchestrationLogCreateWithoutEventInput = {
    id?: string
    agent_name: string
    log_message: string
    timestamp?: Date | string
  }

  export type OrchestrationLogUncheckedCreateWithoutEventInput = {
    id?: string
    agent_name: string
    log_message: string
    timestamp?: Date | string
  }

  export type OrchestrationLogCreateOrConnectWithoutEventInput = {
    where: OrchestrationLogWhereUniqueInput
    create: XOR<OrchestrationLogCreateWithoutEventInput, OrchestrationLogUncheckedCreateWithoutEventInput>
  }

  export type OrchestrationLogCreateManyEventInputEnvelope = {
    data: OrchestrationLogCreateManyEventInput | OrchestrationLogCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_data?: NullableJsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    catalogItems?: CatalogItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventDayUpsertWithWhereUniqueWithoutEventInput = {
    where: EventDayWhereUniqueInput
    update: XOR<EventDayUpdateWithoutEventInput, EventDayUncheckedUpdateWithoutEventInput>
    create: XOR<EventDayCreateWithoutEventInput, EventDayUncheckedCreateWithoutEventInput>
  }

  export type EventDayUpdateWithWhereUniqueWithoutEventInput = {
    where: EventDayWhereUniqueInput
    data: XOR<EventDayUpdateWithoutEventInput, EventDayUncheckedUpdateWithoutEventInput>
  }

  export type EventDayUpdateManyWithWhereWithoutEventInput = {
    where: EventDayScalarWhereInput
    data: XOR<EventDayUpdateManyMutationInput, EventDayUncheckedUpdateManyWithoutEventInput>
  }

  export type EventDayScalarWhereInput = {
    AND?: EventDayScalarWhereInput | EventDayScalarWhereInput[]
    OR?: EventDayScalarWhereInput[]
    NOT?: EventDayScalarWhereInput | EventDayScalarWhereInput[]
    id?: UuidFilter<"EventDay"> | string
    event_id?: UuidFilter<"EventDay"> | string
    date?: DateTimeFilter<"EventDay"> | Date | string
    sequence_number?: IntFilter<"EventDay"> | number
    created_at?: DateTimeFilter<"EventDay"> | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutEventInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutEventInput, ActivityUncheckedUpdateWithoutEventInput>
    create: XOR<ActivityCreateWithoutEventInput, ActivityUncheckedCreateWithoutEventInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutEventInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutEventInput, ActivityUncheckedUpdateWithoutEventInput>
  }

  export type ActivityUpdateManyWithWhereWithoutEventInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutEventInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: UuidFilter<"Activity"> | string
    day_id?: UuidFilter<"Activity"> | string
    event_id?: UuidFilter<"Activity"> | string
    title?: StringFilter<"Activity"> | string
    start_time?: DateTimeFilter<"Activity"> | Date | string
    end_time?: DateTimeFilter<"Activity"> | Date | string
    location_type?: StringFilter<"Activity"> | string
    location?: StringNullableFilter<"Activity"> | string | null
    status?: StringFilter<"Activity"> | string
    is_orchestrated?: BoolFilter<"Activity"> | boolean
    created_at?: DateTimeFilter<"Activity"> | Date | string
  }

  export type InvitationUpsertWithWhereUniqueWithoutEventInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutEventInput, InvitationUncheckedUpdateWithoutEventInput>
    create: XOR<InvitationCreateWithoutEventInput, InvitationUncheckedCreateWithoutEventInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutEventInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutEventInput, InvitationUncheckedUpdateWithoutEventInput>
  }

  export type InvitationUpdateManyWithWhereWithoutEventInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutEventInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: UuidFilter<"Invitation"> | string
    event_id?: UuidFilter<"Invitation"> | string
    activity_id?: UuidNullableFilter<"Invitation"> | string | null
    invitee_name?: StringFilter<"Invitation"> | string
    invitee_email?: StringNullableFilter<"Invitation"> | string | null
    whatsapp_number?: StringFilter<"Invitation"> | string
    num_guests?: IntFilter<"Invitation"> | number
    rsvp_status?: StringFilter<"Invitation"> | string
    invite_sent?: BoolFilter<"Invitation"> | boolean
    access_token?: StringFilter<"Invitation"> | string
    created_at?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type OrchestrationLogUpsertWithWhereUniqueWithoutEventInput = {
    where: OrchestrationLogWhereUniqueInput
    update: XOR<OrchestrationLogUpdateWithoutEventInput, OrchestrationLogUncheckedUpdateWithoutEventInput>
    create: XOR<OrchestrationLogCreateWithoutEventInput, OrchestrationLogUncheckedCreateWithoutEventInput>
  }

  export type OrchestrationLogUpdateWithWhereUniqueWithoutEventInput = {
    where: OrchestrationLogWhereUniqueInput
    data: XOR<OrchestrationLogUpdateWithoutEventInput, OrchestrationLogUncheckedUpdateWithoutEventInput>
  }

  export type OrchestrationLogUpdateManyWithWhereWithoutEventInput = {
    where: OrchestrationLogScalarWhereInput
    data: XOR<OrchestrationLogUpdateManyMutationInput, OrchestrationLogUncheckedUpdateManyWithoutEventInput>
  }

  export type OrchestrationLogScalarWhereInput = {
    AND?: OrchestrationLogScalarWhereInput | OrchestrationLogScalarWhereInput[]
    OR?: OrchestrationLogScalarWhereInput[]
    NOT?: OrchestrationLogScalarWhereInput | OrchestrationLogScalarWhereInput[]
    id?: UuidFilter<"OrchestrationLog"> | string
    event_id?: UuidFilter<"OrchestrationLog"> | string
    agent_name?: StringFilter<"OrchestrationLog"> | string
    log_message?: StringFilter<"OrchestrationLog"> | string
    timestamp?: DateTimeFilter<"OrchestrationLog"> | Date | string
  }

  export type EventCreateWithoutDaysInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    activities?: ActivityCreateNestedManyWithoutEventInput
    invitations?: InvitationCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutDaysInput = {
    id?: string
    owner_id: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutEventInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutDaysInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDaysInput, EventUncheckedCreateWithoutDaysInput>
  }

  export type ActivityCreateWithoutDayInput = {
    id?: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    event: EventCreateNestedOneWithoutActivitiesInput
    invitations?: InvitationCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutDayInput = {
    id?: string
    event_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    invitations?: InvitationUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutDayInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput>
  }

  export type ActivityCreateManyDayInputEnvelope = {
    data: ActivityCreateManyDayInput | ActivityCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutDaysInput = {
    update: XOR<EventUpdateWithoutDaysInput, EventUncheckedUpdateWithoutDaysInput>
    create: XOR<EventCreateWithoutDaysInput, EventUncheckedCreateWithoutDaysInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutDaysInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutDaysInput, EventUncheckedUpdateWithoutDaysInput>
  }

  export type EventUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    activities?: ActivityUpdateManyWithoutEventNestedInput
    invitations?: InvitationUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutEventNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ActivityUpsertWithWhereUniqueWithoutDayInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutDayInput, ActivityUncheckedUpdateWithoutDayInput>
    create: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutDayInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutDayInput, ActivityUncheckedUpdateWithoutDayInput>
  }

  export type ActivityUpdateManyWithWhereWithoutDayInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutDayInput>
  }

  export type EventDayCreateWithoutActivitiesInput = {
    id?: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
    event: EventCreateNestedOneWithoutDaysInput
  }

  export type EventDayUncheckedCreateWithoutActivitiesInput = {
    id?: string
    event_id: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
  }

  export type EventDayCreateOrConnectWithoutActivitiesInput = {
    where: EventDayWhereUniqueInput
    create: XOR<EventDayCreateWithoutActivitiesInput, EventDayUncheckedCreateWithoutActivitiesInput>
  }

  export type EventCreateWithoutActivitiesInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    days?: EventDayCreateNestedManyWithoutEventInput
    invitations?: InvitationCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutActivitiesInput = {
    id?: string
    owner_id: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    days?: EventDayUncheckedCreateNestedManyWithoutEventInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutActivitiesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
  }

  export type InvitationCreateWithoutActivityInput = {
    id?: string
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutActivityInput = {
    id?: string
    event_id: string
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
  }

  export type InvitationCreateOrConnectWithoutActivityInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutActivityInput, InvitationUncheckedCreateWithoutActivityInput>
  }

  export type InvitationCreateManyActivityInputEnvelope = {
    data: InvitationCreateManyActivityInput | InvitationCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type EventDayUpsertWithoutActivitiesInput = {
    update: XOR<EventDayUpdateWithoutActivitiesInput, EventDayUncheckedUpdateWithoutActivitiesInput>
    create: XOR<EventDayCreateWithoutActivitiesInput, EventDayUncheckedCreateWithoutActivitiesInput>
    where?: EventDayWhereInput
  }

  export type EventDayUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: EventDayWhereInput
    data: XOR<EventDayUpdateWithoutActivitiesInput, EventDayUncheckedUpdateWithoutActivitiesInput>
  }

  export type EventDayUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutDaysNestedInput
  }

  export type EventDayUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpsertWithoutActivitiesInput = {
    update: XOR<EventUpdateWithoutActivitiesInput, EventUncheckedUpdateWithoutActivitiesInput>
    create: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutActivitiesInput, EventUncheckedUpdateWithoutActivitiesInput>
  }

  export type EventUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    days?: EventDayUpdateManyWithoutEventNestedInput
    invitations?: InvitationUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: EventDayUncheckedUpdateManyWithoutEventNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type InvitationUpsertWithWhereUniqueWithoutActivityInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutActivityInput, InvitationUncheckedUpdateWithoutActivityInput>
    create: XOR<InvitationCreateWithoutActivityInput, InvitationUncheckedCreateWithoutActivityInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutActivityInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutActivityInput, InvitationUncheckedUpdateWithoutActivityInput>
  }

  export type InvitationUpdateManyWithWhereWithoutActivityInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutActivityInput>
  }

  export type EventCreateWithoutInvitationsInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    days?: EventDayCreateNestedManyWithoutEventInput
    activities?: ActivityCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutInvitationsInput = {
    id?: string
    owner_id: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    days?: EventDayUncheckedCreateNestedManyWithoutEventInput
    activities?: ActivityUncheckedCreateNestedManyWithoutEventInput
    logs?: OrchestrationLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutInvitationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutInvitationsInput, EventUncheckedCreateWithoutInvitationsInput>
  }

  export type ActivityCreateWithoutInvitationsInput = {
    id?: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
    day: EventDayCreateNestedOneWithoutActivitiesInput
    event: EventCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutInvitationsInput = {
    id?: string
    day_id: string
    event_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
  }

  export type ActivityCreateOrConnectWithoutInvitationsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutInvitationsInput, ActivityUncheckedCreateWithoutInvitationsInput>
  }

  export type EventUpsertWithoutInvitationsInput = {
    update: XOR<EventUpdateWithoutInvitationsInput, EventUncheckedUpdateWithoutInvitationsInput>
    create: XOR<EventCreateWithoutInvitationsInput, EventUncheckedCreateWithoutInvitationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutInvitationsInput, EventUncheckedUpdateWithoutInvitationsInput>
  }

  export type EventUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    days?: EventDayUpdateManyWithoutEventNestedInput
    activities?: ActivityUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: EventDayUncheckedUpdateManyWithoutEventNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ActivityUpsertWithoutInvitationsInput = {
    update: XOR<ActivityUpdateWithoutInvitationsInput, ActivityUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ActivityCreateWithoutInvitationsInput, ActivityUncheckedCreateWithoutInvitationsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutInvitationsInput, ActivityUncheckedUpdateWithoutInvitationsInput>
  }

  export type ActivityUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: EventDayUpdateOneRequiredWithoutActivitiesNestedInput
    event?: EventUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateWithoutLogsInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutEventsInput
    days?: EventDayCreateNestedManyWithoutEventInput
    activities?: ActivityCreateNestedManyWithoutEventInput
    invitations?: InvitationCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutLogsInput = {
    id?: string
    owner_id: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    days?: EventDayUncheckedCreateNestedManyWithoutEventInput
    activities?: ActivityUncheckedCreateNestedManyWithoutEventInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutLogsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLogsInput, EventUncheckedCreateWithoutLogsInput>
  }

  export type EventUpsertWithoutLogsInput = {
    update: XOR<EventUpdateWithoutLogsInput, EventUncheckedUpdateWithoutLogsInput>
    create: XOR<EventCreateWithoutLogsInput, EventUncheckedCreateWithoutLogsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutLogsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutLogsInput, EventUncheckedUpdateWithoutLogsInput>
  }

  export type EventUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEventsNestedInput
    days?: EventDayUpdateManyWithoutEventNestedInput
    activities?: ActivityUpdateManyWithoutEventNestedInput
    invitations?: InvitationUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: EventDayUncheckedUpdateManyWithoutEventNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutEventNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type CatalogItemCreateManyUserInput = {
    id?: string
    name: string
    price?: number | null
    priceUnit?: string | null
    description?: string | null
    category?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type EventCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    event_type: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    status?: string
    location?: string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CatalogItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    priceUnit?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: EventDayUpdateManyWithoutEventNestedInput
    activities?: ActivityUpdateManyWithoutEventNestedInput
    invitations?: InvitationUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: EventDayUncheckedUpdateManyWithoutEventNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutEventNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutEventNestedInput
    logs?: OrchestrationLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    orchestration_state?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventDayCreateManyEventInput = {
    id?: string
    date: Date | string
    sequence_number: number
    created_at?: Date | string
  }

  export type ActivityCreateManyEventInput = {
    id?: string
    day_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
  }

  export type InvitationCreateManyEventInput = {
    id?: string
    activity_id?: string | null
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
  }

  export type OrchestrationLogCreateManyEventInput = {
    id?: string
    agent_name: string
    log_message: string
    timestamp?: Date | string
  }

  export type EventDayUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutDayNestedInput
  }

  export type EventDayUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDayNestedInput
  }

  export type EventDayUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: EventDayUpdateOneRequiredWithoutActivitiesNestedInput
    invitations?: InvitationUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitations?: InvitationUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_id?: NullableStringFieldUpdateOperationsInput | string | null
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_id?: NullableStringFieldUpdateOperationsInput | string | null
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrchestrationLogUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrchestrationLogUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrchestrationLogUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    agent_name?: StringFieldUpdateOperationsInput | string
    log_message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyDayInput = {
    id?: string
    event_id: string
    title: string
    start_time: Date | string
    end_time: Date | string
    location_type?: string
    location?: string | null
    status?: string
    is_orchestrated?: boolean
    created_at?: Date | string
  }

  export type ActivityUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutActivitiesNestedInput
    invitations?: InvitationUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitations?: InvitationUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_orchestrated?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyActivityInput = {
    id?: string
    event_id: string
    invitee_name: string
    invitee_email?: string | null
    whatsapp_number: string
    num_guests?: number
    rsvp_status?: string
    invite_sent?: boolean
    access_token?: string
    created_at?: Date | string
  }

  export type InvitationUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    invitee_name?: StringFieldUpdateOperationsInput | string
    invitee_email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_number?: StringFieldUpdateOperationsInput | string
    num_guests?: IntFieldUpdateOperationsInput | number
    rsvp_status?: StringFieldUpdateOperationsInput | string
    invite_sent?: BoolFieldUpdateOperationsInput | boolean
    access_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}