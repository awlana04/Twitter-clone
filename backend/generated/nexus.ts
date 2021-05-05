/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../src/context"
import { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AvatarUploadWhereUniqueInput: { // input type
    id?: string | null; // String
    profileId?: string | null; // String
  }
  ProfileWhereUniqueInput: { // input type
    id?: string | null; // String
    userId?: string | null; // String
  }
  TweetWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  Upload: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  AvatarUpload: { // root type
    avatar?: NexusGenScalars['Upload'] | null; // Upload
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Profile: { // root type
    bio?: string | null; // String
    id: string; // String!
    location?: string | null; // String
    name?: string | null; // String
    website?: string | null; // String
  }
  Query: {};
  Tweet: { // root type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  AvatarUpload: { // field return type
    avatar: NexusGenScalars['Upload'] | null; // Upload
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    createProfile: NexusGenRootTypes['Profile'] | null; // Profile
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateProfile: NexusGenRootTypes['Profile'] | null; // Profile
    uploadAvatar: NexusGenRootTypes['AvatarUpload'] | null; // AvatarUpload
  }
  Profile: { // field return type
    avatarUpload: NexusGenRootTypes['AvatarUpload'][]; // [AvatarUpload!]!
    bio: string | null; // String
    id: string; // String!
    location: string | null; // String
    name: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
    website: string | null; // String
  }
  Query: { // field return type
    allUsers: NexusGenRootTypes['User'][]; // [User!]!
    me: NexusGenRootTypes['User'] | null; // User
  }
  Tweet: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    profile: NexusGenRootTypes['Profile'][]; // [Profile!]!
    tweets: NexusGenRootTypes['Tweet'][]; // [Tweet!]!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  AvatarUpload: { // field return type name
    avatar: 'Upload'
    createdAt: 'DateTime'
    id: 'String'
    profile: 'Profile'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    createProfile: 'Profile'
    login: 'AuthPayload'
    signup: 'AuthPayload'
    updateProfile: 'Profile'
    uploadAvatar: 'AvatarUpload'
  }
  Profile: { // field return type name
    avatarUpload: 'AvatarUpload'
    bio: 'String'
    id: 'String'
    location: 'String'
    name: 'String'
    user: 'User'
    website: 'String'
  }
  Query: { // field return type name
    allUsers: 'User'
    me: 'User'
  }
  Tweet: { // field return type name
    author: 'User'
    content: 'String'
    createdAt: 'DateTime'
    id: 'String'
    updatedAt: 'DateTime'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    id: 'String'
    profile: 'Profile'
    tweets: 'Tweet'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createProfile: { // args
      avatar?: string | null; // String
      bio?: string | null; // String
      id?: string | null; // String
      location?: string | null; // String
      name?: string | null; // String
      website?: string | null; // String
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
    }
    updateProfile: { // args
      bio?: string | null; // String
      id?: string | null; // String
      location?: string | null; // String
      name?: string | null; // String
      website?: string | null; // String
    }
    uploadAvatar: { // args
      avatar?: NexusGenScalars['Upload'] | null; // Upload
    }
  }
  Profile: {
    avatarUpload: { // args
      after?: NexusGenInputs['AvatarUploadWhereUniqueInput'] | null; // AvatarUploadWhereUniqueInput
      before?: NexusGenInputs['AvatarUploadWhereUniqueInput'] | null; // AvatarUploadWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    profile: { // args
      after?: NexusGenInputs['ProfileWhereUniqueInput'] | null; // ProfileWhereUniqueInput
      before?: NexusGenInputs['ProfileWhereUniqueInput'] | null; // ProfileWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    tweets: { // args
      after?: NexusGenInputs['TweetWhereUniqueInput'] | null; // TweetWhereUniqueInput
      before?: NexusGenInputs['TweetWhereUniqueInput'] | null; // TweetWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}