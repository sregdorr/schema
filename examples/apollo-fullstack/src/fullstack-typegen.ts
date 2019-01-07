/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 * 
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as t from "./typeDefs"

declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
export type MaybePromise<T> = T | PromiseLike<T>;

// Maybe Promise List
export type MaybePromiseList<T> = Array<MaybePromise<T>>;

// Maybe Thunk
export type MaybeThunk<T> = T | (() => T);

// Maybe Thunk, with args
export type MaybeThunkArgs<T, A> = T | ((args?: A) => T);

export type QueryLaunchReturnType = Launch_ReturnType;

export interface QueryLaunchArgs {
  count?: null | number;
  id: string;
}

export type QueryLaunchesReturnType = LaunchConnection_ReturnType;

export interface QueryLaunchesArgs {
  after?: null | string;
  pageSize?: null | number;
}

export type QueryMeReturnType = null | User_ReturnType;

export type QueryRootType = {};

export type Query_ReturnType = {};

export type LaunchIdReturnType = string;

export type LaunchIsBookedReturnType = boolean;

export type LaunchMissionReturnType = Mission_ReturnType;

export type LaunchRocketReturnType = Rocket_ReturnType;

export type LaunchSiteReturnType = null | string;

export type LaunchRootType = t.Launch;

export type Launch_ReturnType = t.Launch

export type MissionMissionPatchReturnType = string;

export interface MissionMissionPatchArgs {
  size?: null | PatchSize;
}

export type MissionNameReturnType = null | string;

export type MissionRootType = t.Mission;

export type Mission_ReturnType = t.Mission

export type PatchSize = "LARGE" | "SMALL";

export type RocketIdReturnType = string;

export type RocketNameReturnType = null | string;

export type RocketTypeReturnType = null | string;

export type RocketRootType = t.Rocket;

export type Rocket_ReturnType = t.Rocket

export type LaunchConnectionCursorReturnType = null | string;

export type LaunchConnectionHasMoreReturnType = boolean;

export type LaunchConnectionLaunchesReturnType = MaybePromiseList<null | Launch_ReturnType>;

export interface LaunchConnectionRootType {
  cursor?: null | string;
  hasMore: boolean;
  launches: Array<null | any>;
}

export type LaunchConnection_ReturnType = {
  cursor?: MaybeThunk<MaybePromise<null | string>>;
  hasMore: MaybeThunk<MaybePromise<boolean>>;
  launches: MaybeThunk<MaybePromise<Array<null | any>>>;
}

export type UserEmailReturnType = string;

export type UserIdReturnType = string;

export type UserTripsReturnType = MaybePromiseList<Launch_ReturnType>;

export interface UserRootType {
  email: string;
  id: string;
}

export type User_ReturnType = {
  email: MaybeThunk<MaybePromise<string>>;
  id: MaybeThunk<MaybePromise<string>>;
}

export type MutationBookTripsReturnType = TripUpdateResponse_ReturnType;

export interface MutationBookTripsArgs {
  launchIds: string[];
}

export type MutationCancelTripReturnType = TripUpdateResponse_ReturnType;

export interface MutationCancelTripArgs {
  launchId: string;
}

export type MutationLoginReturnType = null | string;

export interface MutationLoginArgs {
  email?: null | string;
}

export type MutationRootType = {};

export type Mutation_ReturnType = {};

export type TripUpdateResponseLaunchesReturnType = null | Launch_ReturnType;

export type TripUpdateResponseMessageReturnType = null | string;

export type TripUpdateResponseSuccessReturnType = boolean;

export interface TripUpdateResponseRootType {
  launches?: null | any;
  message?: null | string;
  success: boolean;
}

export type TripUpdateResponse_ReturnType = {
  launches?: MaybeThunk<MaybePromise<null | any>>;
  message?: MaybeThunk<MaybePromise<null | string>>;
  success: MaybeThunk<MaybePromise<boolean>>;
}

export interface GraphQLNexusGenArgTypes {
  Query: {
    launch: QueryLaunchArgs;
    launches: QueryLaunchesArgs;
  };
  Mission: {
    missionPatch: MissionMissionPatchArgs;
  };
  Mutation: {
    bookTrips: MutationBookTripsArgs;
    cancelTrip: MutationCancelTripArgs;
    login: MutationLoginArgs;
  };
}

export interface GraphQLNexusGenRootTypes {
  Query: QueryRootType;
  Launch: LaunchRootType;
  Mission: MissionRootType;
  Rocket: RocketRootType;
  LaunchConnection: LaunchConnectionRootType;
  User: UserRootType;
  Mutation: MutationRootType;
  TripUpdateResponse: TripUpdateResponseRootType;
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    launch: QueryLaunchReturnType;
    launches: QueryLaunchesReturnType;
    me: QueryMeReturnType;
  };
  Launch: {
    id: LaunchIdReturnType;
    isBooked: LaunchIsBookedReturnType;
    mission: LaunchMissionReturnType;
    rocket: LaunchRocketReturnType;
    site: LaunchSiteReturnType;
  };
  Mission: {
    missionPatch: MissionMissionPatchReturnType;
    name: MissionNameReturnType;
  };
  Rocket: {
    id: RocketIdReturnType;
    name: RocketNameReturnType;
    type: RocketTypeReturnType;
  };
  LaunchConnection: {
    cursor: LaunchConnectionCursorReturnType;
    hasMore: LaunchConnectionHasMoreReturnType;
    launches: LaunchConnectionLaunchesReturnType;
  };
  User: {
    email: UserEmailReturnType;
    id: UserIdReturnType;
    trips: UserTripsReturnType;
  };
  Mutation: {
    bookTrips: MutationBookTripsReturnType;
    cancelTrip: MutationCancelTripReturnType;
    login: MutationLoginReturnType;
  };
  TripUpdateResponse: {
    launches: TripUpdateResponseLaunchesReturnType;
    message: TripUpdateResponseMessageReturnType;
    success: TripUpdateResponseSuccessReturnType;
  };
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes;
  backingTypes: GraphQLNexusGenRootTypes;
  returnTypes: GraphQLNexusGenReturnTypes;
  context: t.Context;
  enums: {
    PatchSize: PatchSize;
  };
  objects: {
    Query: QueryRootType;
    Launch: LaunchRootType;
    Mission: MissionRootType;
    Rocket: RocketRootType;
    LaunchConnection: LaunchConnectionRootType;
    User: UserRootType;
    Mutation: MutationRootType;
    TripUpdateResponse: TripUpdateResponseRootType;
  };
  interfaces: {};
  unions: {};
  scalars: {
    Int: any;
    ID: any;
    Boolean: any;
    String: any;
  };
  inputObjects: {};
  allInputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
  allOutputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
}

export type Gen = GraphQLNexusGenTypes;
