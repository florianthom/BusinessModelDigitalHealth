import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Query = {
  __typename?: 'Query';
  /** User login */
  login: AuthPayload;
  /** Check if email address is free */
  checkEmailAddress: Scalars['Boolean'];
  getUser: User;
  getAllUsers: Array<User>;
  getProject: Project;
  getAllProjects: Array<Project>;
  getCanvas: Canvas;
  getAllCanvases: Array<Canvas>;
  getPattern: Pattern;
  getAllPattern: Array<Pattern>;
  getTable: Table;
  getAllTables: Array<Table>;
  getCompany: Company;
  getAllCompanies: Array<Company>;
  getStrategy: Strategy;
  getAllStrategies: Array<Strategy>;
  getStrategyPattern: Strategy;
  getAllStrategyPatterns: Array<StrategyPattern>;
  getWeightBetweenStrategyAndPattern: Array<StrategyPattern>;
  getActor: Actor;
  getAllActors: Array<Actor>;
  getValueProposition: ValueProposition;
  getAllValuePropositions: Array<ValueProposition>;
  getValueCreation: ValueCreation;
  getAllValueCreations: Array<ValueCreation>;
  getValueDelivery: ValueDelivery;
  getAllValueDeliveries: Array<ValueDelivery>;
  getRevenue: Revenue;
  getAllRevenues: Array<Revenue>;
  getExpense: Expense;
  getAllExpenses: Array<Expense>;
  getNetworkEffect: NetworkEffect;
  getAllNetworkEffects: Array<NetworkEffect>;
  getRegulatory: Regulatory;
  getAllRegulatories: Array<Regulatory>;
  getTechnicalInfrastructure: TechnicalInfrastructure;
  getAllTechnicalInfrastructures: Array<TechnicalInfrastructure>;
  actor?: Maybe<Actor>;
  actors: Array<Maybe<Actor>>;
  actorsConnection: ActorConnection;
  canvas?: Maybe<Canvas>;
  canvases: Array<Maybe<Canvas>>;
  canvasesConnection: CanvasConnection;
  company?: Maybe<Company>;
  companies: Array<Maybe<Company>>;
  companiesConnection: CompanyConnection;
  expense?: Maybe<Expense>;
  expenses: Array<Maybe<Expense>>;
  expensesConnection: ExpenseConnection;
  networkEffect?: Maybe<NetworkEffect>;
  networkEffects: Array<Maybe<NetworkEffect>>;
  networkEffectsConnection: NetworkEffectConnection;
  pattern?: Maybe<Pattern>;
  patterns: Array<Maybe<Pattern>>;
  patternsConnection: PatternConnection;
  project?: Maybe<Project>;
  projects: Array<Maybe<Project>>;
  projectsConnection: ProjectConnection;
  regulatory?: Maybe<Regulatory>;
  regulatories: Array<Maybe<Regulatory>>;
  regulatoriesConnection: RegulatoryConnection;
  revenue?: Maybe<Revenue>;
  revenues: Array<Maybe<Revenue>>;
  revenuesConnection: RevenueConnection;
  strategy?: Maybe<Strategy>;
  strategies: Array<Maybe<Strategy>>;
  strategiesConnection: StrategyConnection;
  strategyPattern?: Maybe<StrategyPattern>;
  strategyPatterns: Array<Maybe<StrategyPattern>>;
  strategyPatternsConnection: StrategyPatternConnection;
  table?: Maybe<Table>;
  tables: Array<Maybe<Table>>;
  tablesConnection: TableConnection;
  technicalInfrastructure?: Maybe<TechnicalInfrastructure>;
  technicalInfrastructures: Array<Maybe<TechnicalInfrastructure>>;
  technicalInfrastructuresConnection: TechnicalInfrastructureConnection;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  usersConnection: UserConnection;
  valueCreation?: Maybe<ValueCreation>;
  valueCreations: Array<Maybe<ValueCreation>>;
  valueCreationsConnection: ValueCreationConnection;
  valueDelivery?: Maybe<ValueDelivery>;
  valueDeliveries: Array<Maybe<ValueDelivery>>;
  valueDeliveriesConnection: ValueDeliveryConnection;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositions: Array<Maybe<ValueProposition>>;
  valuePropositionsConnection: ValuePropositionConnection;
  node?: Maybe<Node>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryCheckEmailAddressArgs = {
  email: Scalars['String'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetProjectArgs = {
  id: Scalars['ID'];
};


export type QueryGetCanvasArgs = {
  id: Scalars['ID'];
};


export type QueryGetPatternArgs = {
  id: Scalars['ID'];
};


export type QueryGetTableArgs = {
  id: Scalars['ID'];
};


export type QueryGetCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryGetStrategyArgs = {
  id: Scalars['ID'];
};


export type QueryGetStrategyPatternArgs = {
  id: Scalars['ID'];
};


export type QueryGetWeightBetweenStrategyAndPatternArgs = {
  strategy_id: Scalars['ID'];
  pattern_id: Scalars['ID'];
};


export type QueryGetActorArgs = {
  id: Scalars['ID'];
};


export type QueryGetValuePropositionArgs = {
  id: Scalars['ID'];
};


export type QueryGetValueCreationArgs = {
  id: Scalars['ID'];
};


export type QueryGetValueDeliveryArgs = {
  id: Scalars['ID'];
};


export type QueryGetRevenueArgs = {
  id: Scalars['ID'];
};


export type QueryGetExpenseArgs = {
  id: Scalars['ID'];
};


export type QueryGetNetworkEffectArgs = {
  id: Scalars['ID'];
};


export type QueryGetRegulatoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetTechnicalInfrastructureArgs = {
  id: Scalars['ID'];
};


export type QueryActorArgs = {
  where: ActorWhereUniqueInput;
};


export type QueryActorsArgs = {
  where?: Maybe<ActorWhereInput>;
  orderBy?: Maybe<ActorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryActorsConnectionArgs = {
  where?: Maybe<ActorWhereInput>;
  orderBy?: Maybe<ActorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCanvasArgs = {
  where: CanvasWhereUniqueInput;
};


export type QueryCanvasesArgs = {
  where?: Maybe<CanvasWhereInput>;
  orderBy?: Maybe<CanvasOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCanvasesConnectionArgs = {
  where?: Maybe<CanvasWhereInput>;
  orderBy?: Maybe<CanvasOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCompaniesConnectionArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExpenseArgs = {
  where: ExpenseWhereUniqueInput;
};


export type QueryExpensesArgs = {
  where?: Maybe<ExpenseWhereInput>;
  orderBy?: Maybe<ExpenseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryExpensesConnectionArgs = {
  where?: Maybe<ExpenseWhereInput>;
  orderBy?: Maybe<ExpenseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNetworkEffectArgs = {
  where: NetworkEffectWhereUniqueInput;
};


export type QueryNetworkEffectsArgs = {
  where?: Maybe<NetworkEffectWhereInput>;
  orderBy?: Maybe<NetworkEffectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNetworkEffectsConnectionArgs = {
  where?: Maybe<NetworkEffectWhereInput>;
  orderBy?: Maybe<NetworkEffectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPatternArgs = {
  where: PatternWhereUniqueInput;
};


export type QueryPatternsArgs = {
  where?: Maybe<PatternWhereInput>;
  orderBy?: Maybe<PatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPatternsConnectionArgs = {
  where?: Maybe<PatternWhereInput>;
  orderBy?: Maybe<PatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRegulatoryArgs = {
  where: RegulatoryWhereUniqueInput;
};


export type QueryRegulatoriesArgs = {
  where?: Maybe<RegulatoryWhereInput>;
  orderBy?: Maybe<RegulatoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRegulatoriesConnectionArgs = {
  where?: Maybe<RegulatoryWhereInput>;
  orderBy?: Maybe<RegulatoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRevenueArgs = {
  where: RevenueWhereUniqueInput;
};


export type QueryRevenuesArgs = {
  where?: Maybe<RevenueWhereInput>;
  orderBy?: Maybe<RevenueOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRevenuesConnectionArgs = {
  where?: Maybe<RevenueWhereInput>;
  orderBy?: Maybe<RevenueOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStrategyArgs = {
  where: StrategyWhereUniqueInput;
};


export type QueryStrategiesArgs = {
  where?: Maybe<StrategyWhereInput>;
  orderBy?: Maybe<StrategyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStrategiesConnectionArgs = {
  where?: Maybe<StrategyWhereInput>;
  orderBy?: Maybe<StrategyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStrategyPatternArgs = {
  where: StrategyPatternWhereUniqueInput;
};


export type QueryStrategyPatternsArgs = {
  where?: Maybe<StrategyPatternWhereInput>;
  orderBy?: Maybe<StrategyPatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryStrategyPatternsConnectionArgs = {
  where?: Maybe<StrategyPatternWhereInput>;
  orderBy?: Maybe<StrategyPatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTableArgs = {
  where: TableWhereUniqueInput;
};


export type QueryTablesArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTablesConnectionArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTechnicalInfrastructureArgs = {
  where: TechnicalInfrastructureWhereUniqueInput;
};


export type QueryTechnicalInfrastructuresArgs = {
  where?: Maybe<TechnicalInfrastructureWhereInput>;
  orderBy?: Maybe<TechnicalInfrastructureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTechnicalInfrastructuresConnectionArgs = {
  where?: Maybe<TechnicalInfrastructureWhereInput>;
  orderBy?: Maybe<TechnicalInfrastructureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValueCreationArgs = {
  where: ValueCreationWhereUniqueInput;
};


export type QueryValueCreationsArgs = {
  where?: Maybe<ValueCreationWhereInput>;
  orderBy?: Maybe<ValueCreationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValueCreationsConnectionArgs = {
  where?: Maybe<ValueCreationWhereInput>;
  orderBy?: Maybe<ValueCreationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValueDeliveryArgs = {
  where: ValueDeliveryWhereUniqueInput;
};


export type QueryValueDeliveriesArgs = {
  where?: Maybe<ValueDeliveryWhereInput>;
  orderBy?: Maybe<ValueDeliveryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValueDeliveriesConnectionArgs = {
  where?: Maybe<ValueDeliveryWhereInput>;
  orderBy?: Maybe<ValueDeliveryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValuePropositionArgs = {
  where: ValuePropositionWhereUniqueInput;
};


export type QueryValuePropositionsArgs = {
  where?: Maybe<ValuePropositionWhereInput>;
  orderBy?: Maybe<ValuePropositionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryValuePropositionsConnectionArgs = {
  where?: Maybe<ValuePropositionWhereInput>;
  orderBy?: Maybe<ValuePropositionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registrate: User;
  deleteUser?: Maybe<User>;
  createProject: Project;
  updateProject: Project;
  deleteProject: Project;
  createCanvas: Canvas;
  updateCanvas: Canvas;
  deleteCanvas: Canvas;
  createPattern: Pattern;
  updatePattern: Pattern;
  deletePattern: Pattern;
  createStrategy: Strategy;
  updateStrategy: Strategy;
  deleteStrategy: Strategy;
  createStrategyPattern: StrategyPattern;
  updateStrategyPattern: StrategyPattern;
  deleteStrategyPattern: StrategyPattern;
  createActor: Actor;
  updateActor: Actor;
  deleteActor: Actor;
  createValueProposition: ValueProposition;
  updateValueProposition: ValueProposition;
  deleteValueProposition: ValueProposition;
  createValueCreation: ValueCreation;
  updateValueCreation: ValueCreation;
  deleteValueCreation: ValueCreation;
  createValueDelivery: ValueDelivery;
  updateValueDelivery: ValueDelivery;
  deleteValueDelivery: ValueDelivery;
  createRevenue: Revenue;
  updateRevenue: Revenue;
  deletRevenuee: Revenue;
  createExpense: Expense;
  updateExpense: Expense;
  deleteExpense: Expense;
  createNetworkEffect: NetworkEffect;
  updateNetworkEffect: NetworkEffect;
  deleteNetworkEffect: NetworkEffect;
  createRegulatory: Regulatory;
  updateRegulatory: Regulatory;
  deleteRegulatory: Regulatory;
  createTechnicalInfrastructure: TechnicalInfrastructure;
  updateTechnicalInfrastructure: TechnicalInfrastructure;
  deleteTechnicalInfrastructure: TechnicalInfrastructure;
  updateManyActors: BatchPayload;
  upsertActor: Actor;
  deleteManyActors: BatchPayload;
  updateManyCanvases: BatchPayload;
  upsertCanvas: Canvas;
  deleteManyCanvases: BatchPayload;
  createCompany: Company;
  updateCompany?: Maybe<Company>;
  updateManyCompanies: BatchPayload;
  upsertCompany: Company;
  deleteCompany?: Maybe<Company>;
  deleteManyCompanies: BatchPayload;
  updateManyExpenses: BatchPayload;
  upsertExpense: Expense;
  deleteManyExpenses: BatchPayload;
  updateManyNetworkEffects: BatchPayload;
  upsertNetworkEffect: NetworkEffect;
  deleteManyNetworkEffects: BatchPayload;
  updateManyPatterns: BatchPayload;
  upsertPattern: Pattern;
  deleteManyPatterns: BatchPayload;
  updateManyProjects: BatchPayload;
  upsertProject: Project;
  deleteManyProjects: BatchPayload;
  updateManyRegulatories: BatchPayload;
  upsertRegulatory: Regulatory;
  deleteManyRegulatories: BatchPayload;
  updateManyRevenues: BatchPayload;
  upsertRevenue: Revenue;
  deleteRevenue?: Maybe<Revenue>;
  deleteManyRevenues: BatchPayload;
  updateManyStrategies: BatchPayload;
  upsertStrategy: Strategy;
  deleteManyStrategies: BatchPayload;
  updateManyStrategyPatterns: BatchPayload;
  upsertStrategyPattern: StrategyPattern;
  deleteManyStrategyPatterns: BatchPayload;
  createTable: Table;
  updateTable?: Maybe<Table>;
  upsertTable: Table;
  deleteTable?: Maybe<Table>;
  deleteManyTables: BatchPayload;
  updateManyTechnicalInfrastructures: BatchPayload;
  upsertTechnicalInfrastructure: TechnicalInfrastructure;
  deleteManyTechnicalInfrastructures: BatchPayload;
  createUser: User;
  updateUser?: Maybe<User>;
  updateManyUsers: BatchPayload;
  upsertUser: User;
  deleteManyUsers: BatchPayload;
  updateManyValueCreations: BatchPayload;
  upsertValueCreation: ValueCreation;
  deleteManyValueCreations: BatchPayload;
  updateManyValueDeliveries: BatchPayload;
  upsertValueDelivery: ValueDelivery;
  deleteManyValueDeliveries: BatchPayload;
  updateManyValuePropositions: BatchPayload;
  upsertValueProposition: ValueProposition;
  deleteManyValuePropositions: BatchPayload;
};


export type MutationRegistrateArgs = {
  data: NewUser;
};


export type MutationCreateProjectArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateProjectArgs = {
  projectId: Scalars['ID'];
  data: ProjectUpdateInput;
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['ID'];
};


export type MutationCreateCanvasArgs = {
  data: CanvasCreateInput;
};


export type MutationUpdateCanvasArgs = {
  canvasId: Scalars['ID'];
  data: CanvasUpdateInput;
};


export type MutationDeleteCanvasArgs = {
  canvasId: Scalars['ID'];
};


export type MutationCreatePatternArgs = {
  data: PatternCreateInput;
};


export type MutationUpdatePatternArgs = {
  patternId: Scalars['ID'];
  data: PatternUpdateInput;
};


export type MutationDeletePatternArgs = {
  patternId: Scalars['ID'];
};


export type MutationCreateStrategyArgs = {
  data: StrategyCreateInput;
};


export type MutationUpdateStrategyArgs = {
  strategyId: Scalars['ID'];
  data: StrategyUpdateInput;
};


export type MutationDeleteStrategyArgs = {
  strategyId: Scalars['ID'];
};


export type MutationCreateStrategyPatternArgs = {
  data: StrategyPatternCreateInput;
};


export type MutationUpdateStrategyPatternArgs = {
  strategyPatternId: Scalars['ID'];
  data: StrategyPatternUpdateInput;
};


export type MutationDeleteStrategyPatternArgs = {
  strategyPatternId: Scalars['ID'];
};


export type MutationCreateActorArgs = {
  data: ActorCreateInput;
};


export type MutationUpdateActorArgs = {
  actorId: Scalars['ID'];
  data: ActorUpdateInput;
};


export type MutationDeleteActorArgs = {
  actorId: Scalars['ID'];
};


export type MutationCreateValuePropositionArgs = {
  data: ValuePropositionCreateInput;
};


export type MutationUpdateValuePropositionArgs = {
  valuePropositionId: Scalars['ID'];
  data: ValuePropositionUpdateInput;
};


export type MutationDeleteValuePropositionArgs = {
  valuePropositionId: Scalars['ID'];
};


export type MutationCreateValueCreationArgs = {
  data: ValueCreationCreateInput;
};


export type MutationUpdateValueCreationArgs = {
  Id: Scalars['ID'];
  data: ValueCreationUpdateInput;
};


export type MutationDeleteValueCreationArgs = {
  valueCreationId: Scalars['ID'];
};


export type MutationCreateValueDeliveryArgs = {
  data: ValueDeliveryCreateInput;
};


export type MutationUpdateValueDeliveryArgs = {
  Id: Scalars['ID'];
  data: ValueDeliveryUpdateInput;
};


export type MutationDeleteValueDeliveryArgs = {
  Id: Scalars['ID'];
};


export type MutationCreateRevenueArgs = {
  data: RevenueCreateInput;
};


export type MutationUpdateRevenueArgs = {
  Id: Scalars['ID'];
  data: RevenueUpdateInput;
};


export type MutationDeletRevenueeArgs = {
  Id: Scalars['ID'];
};


export type MutationCreateExpenseArgs = {
  data: ExpenseCreateInput;
};


export type MutationUpdateExpenseArgs = {
  Id: Scalars['ID'];
  data: ExpenseUpdateInput;
};


export type MutationDeleteExpenseArgs = {
  Id: Scalars['ID'];
};


export type MutationCreateNetworkEffectArgs = {
  data: NetworkEffectCreateInput;
};


export type MutationUpdateNetworkEffectArgs = {
  Id: Scalars['ID'];
  data: NetworkEffectUpdateInput;
};


export type MutationDeleteNetworkEffectArgs = {
  Id: Scalars['ID'];
};


export type MutationCreateRegulatoryArgs = {
  data: RegulatoryCreateInput;
};


export type MutationUpdateRegulatoryArgs = {
  Id: Scalars['ID'];
  data: RegulatoryUpdateInput;
};


export type MutationDeleteRegulatoryArgs = {
  Id: Scalars['ID'];
};


export type MutationCreateTechnicalInfrastructureArgs = {
  data: TechnicalInfrastructureCreateInput;
};


export type MutationUpdateTechnicalInfrastructureArgs = {
  Id: Scalars['ID'];
  data: TechnicalInfrastructureUpdateInput;
};


export type MutationDeleteTechnicalInfrastructureArgs = {
  Id: Scalars['ID'];
};


export type MutationUpdateManyActorsArgs = {
  data: ActorUpdateManyMutationInput;
  where?: Maybe<ActorWhereInput>;
};


export type MutationUpsertActorArgs = {
  where: ActorWhereUniqueInput;
  create: ActorCreateInput;
  update: ActorUpdateInput;
};


export type MutationDeleteManyActorsArgs = {
  where?: Maybe<ActorWhereInput>;
};


export type MutationUpdateManyCanvasesArgs = {
  data: CanvasUpdateManyMutationInput;
  where?: Maybe<CanvasWhereInput>;
};


export type MutationUpsertCanvasArgs = {
  where: CanvasWhereUniqueInput;
  create: CanvasCreateInput;
  update: CanvasUpdateInput;
};


export type MutationDeleteManyCanvasesArgs = {
  where?: Maybe<CanvasWhereInput>;
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationUpdateCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateManyCompaniesArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: Maybe<CompanyWhereInput>;
};


export type MutationUpsertCompanyArgs = {
  where: CompanyWhereUniqueInput;
  create: CompanyCreateInput;
  update: CompanyUpdateInput;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteManyCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
};


export type MutationUpdateManyExpensesArgs = {
  data: ExpenseUpdateManyMutationInput;
  where?: Maybe<ExpenseWhereInput>;
};


export type MutationUpsertExpenseArgs = {
  where: ExpenseWhereUniqueInput;
  create: ExpenseCreateInput;
  update: ExpenseUpdateInput;
};


export type MutationDeleteManyExpensesArgs = {
  where?: Maybe<ExpenseWhereInput>;
};


export type MutationUpdateManyNetworkEffectsArgs = {
  data: NetworkEffectUpdateManyMutationInput;
  where?: Maybe<NetworkEffectWhereInput>;
};


export type MutationUpsertNetworkEffectArgs = {
  where: NetworkEffectWhereUniqueInput;
  create: NetworkEffectCreateInput;
  update: NetworkEffectUpdateInput;
};


export type MutationDeleteManyNetworkEffectsArgs = {
  where?: Maybe<NetworkEffectWhereInput>;
};


export type MutationUpdateManyPatternsArgs = {
  data: PatternUpdateManyMutationInput;
  where?: Maybe<PatternWhereInput>;
};


export type MutationUpsertPatternArgs = {
  where: PatternWhereUniqueInput;
  create: PatternCreateInput;
  update: PatternUpdateInput;
};


export type MutationDeleteManyPatternsArgs = {
  where?: Maybe<PatternWhereInput>;
};


export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyMutationInput;
  where?: Maybe<ProjectWhereInput>;
};


export type MutationUpsertProjectArgs = {
  where: ProjectWhereUniqueInput;
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
};


export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
};


export type MutationUpdateManyRegulatoriesArgs = {
  data: RegulatoryUpdateManyMutationInput;
  where?: Maybe<RegulatoryWhereInput>;
};


export type MutationUpsertRegulatoryArgs = {
  where: RegulatoryWhereUniqueInput;
  create: RegulatoryCreateInput;
  update: RegulatoryUpdateInput;
};


export type MutationDeleteManyRegulatoriesArgs = {
  where?: Maybe<RegulatoryWhereInput>;
};


export type MutationUpdateManyRevenuesArgs = {
  data: RevenueUpdateManyMutationInput;
  where?: Maybe<RevenueWhereInput>;
};


export type MutationUpsertRevenueArgs = {
  where: RevenueWhereUniqueInput;
  create: RevenueCreateInput;
  update: RevenueUpdateInput;
};


export type MutationDeleteRevenueArgs = {
  where: RevenueWhereUniqueInput;
};


export type MutationDeleteManyRevenuesArgs = {
  where?: Maybe<RevenueWhereInput>;
};


export type MutationUpdateManyStrategiesArgs = {
  data: StrategyUpdateManyMutationInput;
  where?: Maybe<StrategyWhereInput>;
};


export type MutationUpsertStrategyArgs = {
  where: StrategyWhereUniqueInput;
  create: StrategyCreateInput;
  update: StrategyUpdateInput;
};


export type MutationDeleteManyStrategiesArgs = {
  where?: Maybe<StrategyWhereInput>;
};


export type MutationUpdateManyStrategyPatternsArgs = {
  data: StrategyPatternUpdateManyMutationInput;
  where?: Maybe<StrategyPatternWhereInput>;
};


export type MutationUpsertStrategyPatternArgs = {
  where: StrategyPatternWhereUniqueInput;
  create: StrategyPatternCreateInput;
  update: StrategyPatternUpdateInput;
};


export type MutationDeleteManyStrategyPatternsArgs = {
  where?: Maybe<StrategyPatternWhereInput>;
};


export type MutationCreateTableArgs = {
  data: TableCreateInput;
};


export type MutationUpdateTableArgs = {
  data: TableUpdateInput;
  where: TableWhereUniqueInput;
};


export type MutationUpsertTableArgs = {
  where: TableWhereUniqueInput;
  create: TableCreateInput;
  update: TableUpdateInput;
};


export type MutationDeleteTableArgs = {
  where: TableWhereUniqueInput;
};


export type MutationDeleteManyTablesArgs = {
  where?: Maybe<TableWhereInput>;
};


export type MutationUpdateManyTechnicalInfrastructuresArgs = {
  data: TechnicalInfrastructureUpdateManyMutationInput;
  where?: Maybe<TechnicalInfrastructureWhereInput>;
};


export type MutationUpsertTechnicalInfrastructureArgs = {
  where: TechnicalInfrastructureWhereUniqueInput;
  create: TechnicalInfrastructureCreateInput;
  update: TechnicalInfrastructureUpdateInput;
};


export type MutationDeleteManyTechnicalInfrastructuresArgs = {
  where?: Maybe<TechnicalInfrastructureWhereInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyValueCreationsArgs = {
  data: ValueCreationUpdateManyMutationInput;
  where?: Maybe<ValueCreationWhereInput>;
};


export type MutationUpsertValueCreationArgs = {
  where: ValueCreationWhereUniqueInput;
  create: ValueCreationCreateInput;
  update: ValueCreationUpdateInput;
};


export type MutationDeleteManyValueCreationsArgs = {
  where?: Maybe<ValueCreationWhereInput>;
};


export type MutationUpdateManyValueDeliveriesArgs = {
  data: ValueDeliveryUpdateManyMutationInput;
  where?: Maybe<ValueDeliveryWhereInput>;
};


export type MutationUpsertValueDeliveryArgs = {
  where: ValueDeliveryWhereUniqueInput;
  create: ValueDeliveryCreateInput;
  update: ValueDeliveryUpdateInput;
};


export type MutationDeleteManyValueDeliveriesArgs = {
  where?: Maybe<ValueDeliveryWhereInput>;
};


export type MutationUpdateManyValuePropositionsArgs = {
  data: ValuePropositionUpdateManyMutationInput;
  where?: Maybe<ValuePropositionWhereInput>;
};


export type MutationUpsertValuePropositionArgs = {
  where: ValuePropositionWhereUniqueInput;
  create: ValuePropositionCreateInput;
  update: ValuePropositionUpdateInput;
};


export type MutationDeleteManyValuePropositionsArgs = {
  where?: Maybe<ValuePropositionWhereInput>;
};

/**
 * type Subscription {
 * }
 */
export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type NewUser = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  project_ids?: Maybe<Array<Project>>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  role: Role;
  password: Scalars['String'];
  verificationCode?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  phoneNumber?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type UserProject_IdsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  user_id: User;
  canvas_ids?: Maybe<Array<Canvas>>;
  name: Scalars['String'];
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ProjectCanvas_IdsArgs = {
  where?: Maybe<CanvasWhereInput>;
  orderBy?: Maybe<CanvasOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Canvas = {
  __typename?: 'Canvas';
  id: Scalars['ID'];
  project_id: Project;
  strategy_id?: Maybe<Strategy>;
  pattern_ids?: Maybe<Array<Pattern>>;
  table_id: Table;
  name: Scalars['String'];
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CanvasPattern_IdsArgs = {
  where?: Maybe<PatternWhereInput>;
  orderBy?: Maybe<PatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Pattern = {
  __typename?: 'Pattern';
  id: Scalars['ID'];
  canvas_ids?: Maybe<Array<Canvas>>;
  table_id: Table;
  company_ids?: Maybe<Array<Company>>;
  strategy_pattern_ids?: Maybe<Array<StrategyPattern>>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type PatternCanvas_IdsArgs = {
  where?: Maybe<CanvasWhereInput>;
  orderBy?: Maybe<CanvasOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PatternCompany_IdsArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PatternStrategy_Pattern_IdsArgs = {
  where?: Maybe<StrategyPatternWhereInput>;
  orderBy?: Maybe<StrategyPatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Table = {
  __typename?: 'Table';
  id: Scalars['ID'];
  actor_entry_ids?: Maybe<Array<Actor>>;
  value_proposition_entry_ids?: Maybe<Array<ValueProposition>>;
  value_creation_entry_ids?: Maybe<Array<ValueCreation>>;
  value_delivery_entry_ids?: Maybe<Array<ValueDelivery>>;
  revenue_entry_ids?: Maybe<Array<Revenue>>;
  expense_entry_ids?: Maybe<Array<Expense>>;
  network_effect_entry_ids?: Maybe<Array<NetworkEffect>>;
  technical_infrastructure_entry_ids?: Maybe<Array<TechnicalInfrastructure>>;
  regulatory_entry_ids?: Maybe<Array<Regulatory>>;
};


export type TableActor_Entry_IdsArgs = {
  where?: Maybe<ActorWhereInput>;
  orderBy?: Maybe<ActorOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableValue_Proposition_Entry_IdsArgs = {
  where?: Maybe<ValuePropositionWhereInput>;
  orderBy?: Maybe<ValuePropositionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableValue_Creation_Entry_IdsArgs = {
  where?: Maybe<ValueCreationWhereInput>;
  orderBy?: Maybe<ValueCreationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableValue_Delivery_Entry_IdsArgs = {
  where?: Maybe<ValueDeliveryWhereInput>;
  orderBy?: Maybe<ValueDeliveryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableRevenue_Entry_IdsArgs = {
  where?: Maybe<RevenueWhereInput>;
  orderBy?: Maybe<RevenueOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableExpense_Entry_IdsArgs = {
  where?: Maybe<ExpenseWhereInput>;
  orderBy?: Maybe<ExpenseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableNetwork_Effect_Entry_IdsArgs = {
  where?: Maybe<NetworkEffectWhereInput>;
  orderBy?: Maybe<NetworkEffectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableTechnical_Infrastructure_Entry_IdsArgs = {
  where?: Maybe<TechnicalInfrastructureWhereInput>;
  orderBy?: Maybe<TechnicalInfrastructureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableRegulatory_Entry_IdsArgs = {
  where?: Maybe<RegulatoryWhereInput>;
  orderBy?: Maybe<RegulatoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  pattern_ids?: Maybe<Array<Pattern>>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CompanyPattern_IdsArgs = {
  where?: Maybe<PatternWhereInput>;
  orderBy?: Maybe<PatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Strategy = {
  __typename?: 'Strategy';
  id: Scalars['ID'];
  canvas_ids?: Maybe<Array<Canvas>>;
  strategy_pattern_ids?: Maybe<Array<StrategyPattern>>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type StrategyCanvas_IdsArgs = {
  where?: Maybe<CanvasWhereInput>;
  orderBy?: Maybe<CanvasOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type StrategyStrategy_Pattern_IdsArgs = {
  where?: Maybe<StrategyPatternWhereInput>;
  orderBy?: Maybe<StrategyPatternOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type StrategyPattern = {
  __typename?: 'StrategyPattern';
  id: Scalars['ID'];
  strategy_id: Strategy;
  pattern_id: Pattern;
  weight: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Actor = {
  __typename?: 'Actor';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ActorTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ValueProposition = {
  __typename?: 'ValueProposition';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ValuePropositionTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ValueCreation = {
  __typename?: 'ValueCreation';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ValueCreationTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ValueDelivery = {
  __typename?: 'ValueDelivery';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ValueDeliveryTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Revenue = {
  __typename?: 'Revenue';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type RevenueTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Expense = {
  __typename?: 'Expense';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ExpenseTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type NetworkEffect = {
  __typename?: 'NetworkEffect';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type NetworkEffectTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Regulatory = {
  __typename?: 'Regulatory';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type RegulatoryTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TechnicalInfrastructure = {
  __typename?: 'TechnicalInfrastructure';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type TechnicalInfrastructureTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ActorWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ActorWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ActorWhereInput>>;
  OR?: Maybe<Array<ActorWhereInput>>;
  NOT?: Maybe<Array<ActorWhereInput>>;
};

export enum ActorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ActorConnection = {
  __typename?: 'ActorConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ActorEdge>>;
  aggregate: AggregateActor;
};

export type CanvasWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CanvasWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  project_id?: Maybe<ProjectWhereInput>;
  strategy_id?: Maybe<StrategyWhereInput>;
  pattern_ids_every?: Maybe<PatternWhereInput>;
  pattern_ids_some?: Maybe<PatternWhereInput>;
  pattern_ids_none?: Maybe<PatternWhereInput>;
  table_id?: Maybe<TableWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<CanvasWhereInput>>;
  OR?: Maybe<Array<CanvasWhereInput>>;
  NOT?: Maybe<Array<CanvasWhereInput>>;
};

export enum CanvasOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CanvasConnection = {
  __typename?: 'CanvasConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CanvasEdge>>;
  aggregate: AggregateCanvas;
};

export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CompanyWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  pattern_ids_every?: Maybe<PatternWhereInput>;
  pattern_ids_some?: Maybe<PatternWhereInput>;
  pattern_ids_none?: Maybe<PatternWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<CompanyWhereInput>>;
  OR?: Maybe<Array<CompanyWhereInput>>;
  NOT?: Maybe<Array<CompanyWhereInput>>;
};

export enum CompanyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CompanyEdge>>;
  aggregate: AggregateCompany;
};

export type ExpenseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ExpenseWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ExpenseWhereInput>>;
  OR?: Maybe<Array<ExpenseWhereInput>>;
  NOT?: Maybe<Array<ExpenseWhereInput>>;
};

export enum ExpenseOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ExpenseConnection = {
  __typename?: 'ExpenseConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ExpenseEdge>>;
  aggregate: AggregateExpense;
};

export type NetworkEffectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type NetworkEffectWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<NetworkEffectWhereInput>>;
  OR?: Maybe<Array<NetworkEffectWhereInput>>;
  NOT?: Maybe<Array<NetworkEffectWhereInput>>;
};

export enum NetworkEffectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NetworkEffectConnection = {
  __typename?: 'NetworkEffectConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<NetworkEffectEdge>>;
  aggregate: AggregateNetworkEffect;
};

export type PatternWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PatternWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  canvas_ids_every?: Maybe<CanvasWhereInput>;
  canvas_ids_some?: Maybe<CanvasWhereInput>;
  canvas_ids_none?: Maybe<CanvasWhereInput>;
  table_id?: Maybe<TableWhereInput>;
  company_ids_every?: Maybe<CompanyWhereInput>;
  company_ids_some?: Maybe<CompanyWhereInput>;
  company_ids_none?: Maybe<CompanyWhereInput>;
  strategy_pattern_ids_every?: Maybe<StrategyPatternWhereInput>;
  strategy_pattern_ids_some?: Maybe<StrategyPatternWhereInput>;
  strategy_pattern_ids_none?: Maybe<StrategyPatternWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  actorWeight_not?: Maybe<Scalars['Int']>;
  actorWeight_in?: Maybe<Array<Scalars['Int']>>;
  actorWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  actorWeight_lt?: Maybe<Scalars['Int']>;
  actorWeight_lte?: Maybe<Scalars['Int']>;
  actorWeight_gt?: Maybe<Scalars['Int']>;
  actorWeight_gte?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight_not?: Maybe<Scalars['Int']>;
  valuePropositionWeight_in?: Maybe<Array<Scalars['Int']>>;
  valuePropositionWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  valuePropositionWeight_lt?: Maybe<Scalars['Int']>;
  valuePropositionWeight_lte?: Maybe<Scalars['Int']>;
  valuePropositionWeight_gt?: Maybe<Scalars['Int']>;
  valuePropositionWeight_gte?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight_not?: Maybe<Scalars['Int']>;
  valueCreationWeight_in?: Maybe<Array<Scalars['Int']>>;
  valueCreationWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  valueCreationWeight_lt?: Maybe<Scalars['Int']>;
  valueCreationWeight_lte?: Maybe<Scalars['Int']>;
  valueCreationWeight_gt?: Maybe<Scalars['Int']>;
  valueCreationWeight_gte?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_not?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_in?: Maybe<Array<Scalars['Int']>>;
  valueDeliveryWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  valueDeliveryWeight_lt?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_lte?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_gt?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_gte?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  revenueWeight_not?: Maybe<Scalars['Int']>;
  revenueWeight_in?: Maybe<Array<Scalars['Int']>>;
  revenueWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  revenueWeight_lt?: Maybe<Scalars['Int']>;
  revenueWeight_lte?: Maybe<Scalars['Int']>;
  revenueWeight_gt?: Maybe<Scalars['Int']>;
  revenueWeight_gte?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  expenseWeight_not?: Maybe<Scalars['Int']>;
  expenseWeight_in?: Maybe<Array<Scalars['Int']>>;
  expenseWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  expenseWeight_lt?: Maybe<Scalars['Int']>;
  expenseWeight_lte?: Maybe<Scalars['Int']>;
  expenseWeight_gt?: Maybe<Scalars['Int']>;
  expenseWeight_gte?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight_not?: Maybe<Scalars['Int']>;
  networkEffectWeight_in?: Maybe<Array<Scalars['Int']>>;
  networkEffectWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  networkEffectWeight_lt?: Maybe<Scalars['Int']>;
  networkEffectWeight_lte?: Maybe<Scalars['Int']>;
  networkEffectWeight_gt?: Maybe<Scalars['Int']>;
  networkEffectWeight_gte?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight_not?: Maybe<Scalars['Int']>;
  regulatoryWeight_in?: Maybe<Array<Scalars['Int']>>;
  regulatoryWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  regulatoryWeight_lt?: Maybe<Scalars['Int']>;
  regulatoryWeight_lte?: Maybe<Scalars['Int']>;
  regulatoryWeight_gt?: Maybe<Scalars['Int']>;
  regulatoryWeight_gte?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_not?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_in?: Maybe<Array<Scalars['Int']>>;
  technicalInfrastructureWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  technicalInfrastructureWeight_lt?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_lte?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_gt?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<PatternWhereInput>>;
  OR?: Maybe<Array<PatternWhereInput>>;
  NOT?: Maybe<Array<PatternWhereInput>>;
};

export enum PatternOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ActorWeightAsc = 'actorWeight_ASC',
  ActorWeightDesc = 'actorWeight_DESC',
  ValuePropositionWeightAsc = 'valuePropositionWeight_ASC',
  ValuePropositionWeightDesc = 'valuePropositionWeight_DESC',
  ValueCreationWeightAsc = 'valueCreationWeight_ASC',
  ValueCreationWeightDesc = 'valueCreationWeight_DESC',
  ValueDeliveryWeightAsc = 'valueDeliveryWeight_ASC',
  ValueDeliveryWeightDesc = 'valueDeliveryWeight_DESC',
  RevenueWeightAsc = 'revenueWeight_ASC',
  RevenueWeightDesc = 'revenueWeight_DESC',
  ExpenseWeightAsc = 'expenseWeight_ASC',
  ExpenseWeightDesc = 'expenseWeight_DESC',
  NetworkEffectWeightAsc = 'networkEffectWeight_ASC',
  NetworkEffectWeightDesc = 'networkEffectWeight_DESC',
  RegulatoryWeightAsc = 'regulatoryWeight_ASC',
  RegulatoryWeightDesc = 'regulatoryWeight_DESC',
  TechnicalInfrastructureWeightAsc = 'technicalInfrastructureWeight_ASC',
  TechnicalInfrastructureWeightDesc = 'technicalInfrastructureWeight_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PatternConnection = {
  __typename?: 'PatternConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PatternEdge>>;
  aggregate: AggregatePattern;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ProjectWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  user_id?: Maybe<UserWhereInput>;
  canvas_ids_every?: Maybe<CanvasWhereInput>;
  canvas_ids_some?: Maybe<CanvasWhereInput>;
  canvas_ids_none?: Maybe<CanvasWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
};

export enum ProjectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ProjectEdge>>;
  aggregate: AggregateProject;
};

export type RegulatoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RegulatoryWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<RegulatoryWhereInput>>;
  OR?: Maybe<Array<RegulatoryWhereInput>>;
  NOT?: Maybe<Array<RegulatoryWhereInput>>;
};

export enum RegulatoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RegulatoryConnection = {
  __typename?: 'RegulatoryConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RegulatoryEdge>>;
  aggregate: AggregateRegulatory;
};

export type RevenueWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RevenueWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<RevenueWhereInput>>;
  OR?: Maybe<Array<RevenueWhereInput>>;
  NOT?: Maybe<Array<RevenueWhereInput>>;
};

export enum RevenueOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RevenueConnection = {
  __typename?: 'RevenueConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RevenueEdge>>;
  aggregate: AggregateRevenue;
};

export type StrategyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type StrategyWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  canvas_ids_every?: Maybe<CanvasWhereInput>;
  canvas_ids_some?: Maybe<CanvasWhereInput>;
  canvas_ids_none?: Maybe<CanvasWhereInput>;
  strategy_pattern_ids_every?: Maybe<StrategyPatternWhereInput>;
  strategy_pattern_ids_some?: Maybe<StrategyPatternWhereInput>;
  strategy_pattern_ids_none?: Maybe<StrategyPatternWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<StrategyWhereInput>>;
  OR?: Maybe<Array<StrategyWhereInput>>;
  NOT?: Maybe<Array<StrategyWhereInput>>;
};

export enum StrategyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StrategyConnection = {
  __typename?: 'StrategyConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<StrategyEdge>>;
  aggregate: AggregateStrategy;
};

export type StrategyPatternWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type StrategyPatternWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  strategy_id?: Maybe<StrategyWhereInput>;
  pattern_id?: Maybe<PatternWhereInput>;
  weight?: Maybe<Scalars['Int']>;
  weight_not?: Maybe<Scalars['Int']>;
  weight_in?: Maybe<Array<Scalars['Int']>>;
  weight_not_in?: Maybe<Array<Scalars['Int']>>;
  weight_lt?: Maybe<Scalars['Int']>;
  weight_lte?: Maybe<Scalars['Int']>;
  weight_gt?: Maybe<Scalars['Int']>;
  weight_gte?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<StrategyPatternWhereInput>>;
  OR?: Maybe<Array<StrategyPatternWhereInput>>;
  NOT?: Maybe<Array<StrategyPatternWhereInput>>;
};

export enum StrategyPatternOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WeightAsc = 'weight_ASC',
  WeightDesc = 'weight_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StrategyPatternConnection = {
  __typename?: 'StrategyPatternConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<StrategyPatternEdge>>;
  aggregate: AggregateStrategyPattern;
};

export type TableWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TableWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  actor_entry_ids_every?: Maybe<ActorWhereInput>;
  actor_entry_ids_some?: Maybe<ActorWhereInput>;
  actor_entry_ids_none?: Maybe<ActorWhereInput>;
  value_proposition_entry_ids_every?: Maybe<ValuePropositionWhereInput>;
  value_proposition_entry_ids_some?: Maybe<ValuePropositionWhereInput>;
  value_proposition_entry_ids_none?: Maybe<ValuePropositionWhereInput>;
  value_creation_entry_ids_every?: Maybe<ValueCreationWhereInput>;
  value_creation_entry_ids_some?: Maybe<ValueCreationWhereInput>;
  value_creation_entry_ids_none?: Maybe<ValueCreationWhereInput>;
  value_delivery_entry_ids_every?: Maybe<ValueDeliveryWhereInput>;
  value_delivery_entry_ids_some?: Maybe<ValueDeliveryWhereInput>;
  value_delivery_entry_ids_none?: Maybe<ValueDeliveryWhereInput>;
  revenue_entry_ids_every?: Maybe<RevenueWhereInput>;
  revenue_entry_ids_some?: Maybe<RevenueWhereInput>;
  revenue_entry_ids_none?: Maybe<RevenueWhereInput>;
  expense_entry_ids_every?: Maybe<ExpenseWhereInput>;
  expense_entry_ids_some?: Maybe<ExpenseWhereInput>;
  expense_entry_ids_none?: Maybe<ExpenseWhereInput>;
  network_effect_entry_ids_every?: Maybe<NetworkEffectWhereInput>;
  network_effect_entry_ids_some?: Maybe<NetworkEffectWhereInput>;
  network_effect_entry_ids_none?: Maybe<NetworkEffectWhereInput>;
  technical_infrastructure_entry_ids_every?: Maybe<TechnicalInfrastructureWhereInput>;
  technical_infrastructure_entry_ids_some?: Maybe<TechnicalInfrastructureWhereInput>;
  technical_infrastructure_entry_ids_none?: Maybe<TechnicalInfrastructureWhereInput>;
  regulatory_entry_ids_every?: Maybe<RegulatoryWhereInput>;
  regulatory_entry_ids_some?: Maybe<RegulatoryWhereInput>;
  regulatory_entry_ids_none?: Maybe<RegulatoryWhereInput>;
  AND?: Maybe<Array<TableWhereInput>>;
  OR?: Maybe<Array<TableWhereInput>>;
  NOT?: Maybe<Array<TableWhereInput>>;
};

export enum TableOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type TableConnection = {
  __typename?: 'TableConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TableEdge>>;
  aggregate: AggregateTable;
};

export type TechnicalInfrastructureWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TechnicalInfrastructureWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<TechnicalInfrastructureWhereInput>>;
  OR?: Maybe<Array<TechnicalInfrastructureWhereInput>>;
  NOT?: Maybe<Array<TechnicalInfrastructureWhereInput>>;
};

export enum TechnicalInfrastructureOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TechnicalInfrastructureConnection = {
  __typename?: 'TechnicalInfrastructureConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TechnicalInfrastructureEdge>>;
  aggregate: AggregateTechnicalInfrastructure;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  project_ids_every?: Maybe<ProjectWhereInput>;
  project_ids_some?: Maybe<ProjectWhereInput>;
  project_ids_none?: Maybe<ProjectWhereInput>;
  firstName?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Scalars['String']>>;
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Array<Role>>;
  role_not_in?: Maybe<Array<Role>>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  verificationCode_not?: Maybe<Scalars['String']>;
  verificationCode_in?: Maybe<Array<Scalars['String']>>;
  verificationCode_not_in?: Maybe<Array<Scalars['String']>>;
  verificationCode_lt?: Maybe<Scalars['String']>;
  verificationCode_lte?: Maybe<Scalars['String']>;
  verificationCode_gt?: Maybe<Scalars['String']>;
  verificationCode_gte?: Maybe<Scalars['String']>;
  verificationCode_contains?: Maybe<Scalars['String']>;
  verificationCode_not_contains?: Maybe<Scalars['String']>;
  verificationCode_starts_with?: Maybe<Scalars['String']>;
  verificationCode_not_starts_with?: Maybe<Scalars['String']>;
  verificationCode_ends_with?: Maybe<Scalars['String']>;
  verificationCode_not_ends_with?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  verified_not?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumber_not?: Maybe<Scalars['String']>;
  phoneNumber_in?: Maybe<Array<Scalars['String']>>;
  phoneNumber_not_in?: Maybe<Array<Scalars['String']>>;
  phoneNumber_lt?: Maybe<Scalars['String']>;
  phoneNumber_lte?: Maybe<Scalars['String']>;
  phoneNumber_gt?: Maybe<Scalars['String']>;
  phoneNumber_gte?: Maybe<Scalars['String']>;
  phoneNumber_contains?: Maybe<Scalars['String']>;
  phoneNumber_not_contains?: Maybe<Scalars['String']>;
  phoneNumber_starts_with?: Maybe<Scalars['String']>;
  phoneNumber_not_starts_with?: Maybe<Scalars['String']>;
  phoneNumber_ends_with?: Maybe<Scalars['String']>;
  phoneNumber_not_ends_with?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  VerificationCodeAsc = 'verificationCode_ASC',
  VerificationCodeDesc = 'verificationCode_DESC',
  VerifiedAsc = 'verified_ASC',
  VerifiedDesc = 'verified_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserConnection = {
  __typename?: 'UserConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type ValueCreationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ValueCreationWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ValueCreationWhereInput>>;
  OR?: Maybe<Array<ValueCreationWhereInput>>;
  NOT?: Maybe<Array<ValueCreationWhereInput>>;
};

export enum ValueCreationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ValueCreationConnection = {
  __typename?: 'ValueCreationConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ValueCreationEdge>>;
  aggregate: AggregateValueCreation;
};

export type ValueDeliveryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ValueDeliveryWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ValueDeliveryWhereInput>>;
  OR?: Maybe<Array<ValueDeliveryWhereInput>>;
  NOT?: Maybe<Array<ValueDeliveryWhereInput>>;
};

export enum ValueDeliveryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ValueDeliveryConnection = {
  __typename?: 'ValueDeliveryConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ValueDeliveryEdge>>;
  aggregate: AggregateValueDelivery;
};

export type ValuePropositionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ValuePropositionWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  table_ids_every?: Maybe<TableWhereInput>;
  table_ids_some?: Maybe<TableWhereInput>;
  table_ids_none?: Maybe<TableWhereInput>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ValuePropositionWhereInput>>;
  OR?: Maybe<Array<ValuePropositionWhereInput>>;
  NOT?: Maybe<Array<ValuePropositionWhereInput>>;
};

export enum ValuePropositionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  NoteAsc = 'note_ASC',
  NoteDesc = 'note_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ValuePropositionConnection = {
  __typename?: 'ValuePropositionConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ValuePropositionEdge>>;
  aggregate: AggregateValueProposition;
};

export type ProjectUpdateInput = {
  user_id?: Maybe<UserUpdateOneRequiredWithoutProject_IdsInput>;
  canvas_ids?: Maybe<CanvasUpdateManyWithoutProject_IdInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CanvasCreateInput = {
  id?: Maybe<Scalars['ID']>;
  project_id: ProjectCreateOneWithoutCanvas_IdsInput;
  strategy_id?: Maybe<StrategyCreateOneWithoutCanvas_IdsInput>;
  pattern_ids?: Maybe<PatternCreateManyWithoutCanvas_IdsInput>;
  table_id: TableCreateOneInput;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CanvasUpdateInput = {
  project_id?: Maybe<ProjectUpdateOneRequiredWithoutCanvas_IdsInput>;
  strategy_id?: Maybe<StrategyUpdateOneWithoutCanvas_IdsInput>;
  pattern_ids?: Maybe<PatternUpdateManyWithoutCanvas_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type PatternCreateInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutPattern_IdsInput>;
  table_id: TableCreateOneInput;
  company_ids?: Maybe<CompanyCreateManyWithoutPattern_IdsInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternCreateManyWithoutPattern_IdInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type PatternUpdateInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutPattern_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  company_ids?: Maybe<CompanyUpdateManyWithoutPattern_IdsInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternUpdateManyWithoutPattern_IdInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type StrategyCreateInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutStrategy_IdInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternCreateManyWithoutStrategy_IdInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type StrategyUpdateInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutStrategy_IdInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternUpdateManyWithoutStrategy_IdInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type StrategyPatternCreateInput = {
  id?: Maybe<Scalars['ID']>;
  strategy_id: StrategyCreateOneWithoutStrategy_Pattern_IdsInput;
  pattern_id: PatternCreateOneWithoutStrategy_Pattern_IdsInput;
  weight: Scalars['Int'];
};

export type StrategyPatternUpdateInput = {
  strategy_id?: Maybe<StrategyUpdateOneRequiredWithoutStrategy_Pattern_IdsInput>;
  pattern_id?: Maybe<PatternUpdateOneRequiredWithoutStrategy_Pattern_IdsInput>;
  weight?: Maybe<Scalars['Int']>;
};

export type ActorCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutActor_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ActorUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutActor_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ValuePropositionCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutValue_Proposition_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ValuePropositionUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutValue_Proposition_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ValueCreationCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutValue_Creation_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ValueCreationUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutValue_Creation_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ValueDeliveryCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutValue_Delivery_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ValueDeliveryUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutValue_Delivery_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type RevenueCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutRevenue_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RevenueUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutRevenue_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ExpenseCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutExpense_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ExpenseUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutExpense_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type NetworkEffectCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutNetwork_Effect_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type NetworkEffectUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutNetwork_Effect_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type RegulatoryCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutRegulatory_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RegulatoryUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutRegulatory_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type TechnicalInfrastructureCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutTechnical_Infrastructure_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type TechnicalInfrastructureUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutTechnical_Infrastructure_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Long'];
};

export type ActorUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type CanvasUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
};

export type CompanyCreateInput = {
  id?: Maybe<Scalars['ID']>;
  pattern_ids?: Maybe<PatternCreateManyWithoutCompany_IdsInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CompanyUpdateInput = {
  pattern_ids?: Maybe<PatternUpdateManyWithoutCompany_IdsInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CompanyUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ExpenseUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type NetworkEffectUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type PatternUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
};

export type ProjectUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
};

export type ProjectCreateInput = {
  id?: Maybe<Scalars['ID']>;
  user_id: UserCreateOneWithoutProject_IdsInput;
  canvas_ids?: Maybe<CanvasCreateManyWithoutProject_IdInput>;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RegulatoryUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type RevenueUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type StrategyUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type StrategyPatternUpdateManyMutationInput = {
  weight?: Maybe<Scalars['Int']>;
};

export type TableCreateInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TechnicalInfrastructureUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>;
  project_ids?: Maybe<ProjectCreateManyWithoutUser_IdInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<Role>;
  password: Scalars['String'];
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedByInput>;
};

export type UserUpdateInput = {
  project_ids?: Maybe<ProjectUpdateManyWithoutUser_IdInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedByInput>;
};

export type UserUpdateManyMutationInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ValueCreationUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ValueDeliveryUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ValuePropositionUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}


export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type ActorEdge = {
  __typename?: 'ActorEdge';
  node: Actor;
  cursor: Scalars['String'];
};

export type AggregateActor = {
  __typename?: 'AggregateActor';
  count: Scalars['Int'];
};

export type CanvasEdge = {
  __typename?: 'CanvasEdge';
  node: Canvas;
  cursor: Scalars['String'];
};

export type AggregateCanvas = {
  __typename?: 'AggregateCanvas';
  count: Scalars['Int'];
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  node: Company;
  cursor: Scalars['String'];
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  count: Scalars['Int'];
};

export type ExpenseEdge = {
  __typename?: 'ExpenseEdge';
  node: Expense;
  cursor: Scalars['String'];
};

export type AggregateExpense = {
  __typename?: 'AggregateExpense';
  count: Scalars['Int'];
};

export type NetworkEffectEdge = {
  __typename?: 'NetworkEffectEdge';
  node: NetworkEffect;
  cursor: Scalars['String'];
};

export type AggregateNetworkEffect = {
  __typename?: 'AggregateNetworkEffect';
  count: Scalars['Int'];
};

export type PatternEdge = {
  __typename?: 'PatternEdge';
  node: Pattern;
  cursor: Scalars['String'];
};

export type AggregatePattern = {
  __typename?: 'AggregatePattern';
  count: Scalars['Int'];
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  node: Project;
  cursor: Scalars['String'];
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  count: Scalars['Int'];
};

export type RegulatoryEdge = {
  __typename?: 'RegulatoryEdge';
  node: Regulatory;
  cursor: Scalars['String'];
};

export type AggregateRegulatory = {
  __typename?: 'AggregateRegulatory';
  count: Scalars['Int'];
};

export type RevenueEdge = {
  __typename?: 'RevenueEdge';
  node: Revenue;
  cursor: Scalars['String'];
};

export type AggregateRevenue = {
  __typename?: 'AggregateRevenue';
  count: Scalars['Int'];
};

export type StrategyEdge = {
  __typename?: 'StrategyEdge';
  node: Strategy;
  cursor: Scalars['String'];
};

export type AggregateStrategy = {
  __typename?: 'AggregateStrategy';
  count: Scalars['Int'];
};

export type StrategyPatternEdge = {
  __typename?: 'StrategyPatternEdge';
  node: StrategyPattern;
  cursor: Scalars['String'];
};

export type AggregateStrategyPattern = {
  __typename?: 'AggregateStrategyPattern';
  count: Scalars['Int'];
};

export type TableEdge = {
  __typename?: 'TableEdge';
  node: Table;
  cursor: Scalars['String'];
};

export type AggregateTable = {
  __typename?: 'AggregateTable';
  count: Scalars['Int'];
};

export type TechnicalInfrastructureEdge = {
  __typename?: 'TechnicalInfrastructureEdge';
  node: TechnicalInfrastructure;
  cursor: Scalars['String'];
};

export type AggregateTechnicalInfrastructure = {
  __typename?: 'AggregateTechnicalInfrastructure';
  count: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  node: User;
  cursor: Scalars['String'];
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
};

export type ValueCreationEdge = {
  __typename?: 'ValueCreationEdge';
  node: ValueCreation;
  cursor: Scalars['String'];
};

export type AggregateValueCreation = {
  __typename?: 'AggregateValueCreation';
  count: Scalars['Int'];
};

export type ValueDeliveryEdge = {
  __typename?: 'ValueDeliveryEdge';
  node: ValueDelivery;
  cursor: Scalars['String'];
};

export type AggregateValueDelivery = {
  __typename?: 'AggregateValueDelivery';
  count: Scalars['Int'];
};

export type ValuePropositionEdge = {
  __typename?: 'ValuePropositionEdge';
  node: ValueProposition;
  cursor: Scalars['String'];
};

export type AggregateValueProposition = {
  __typename?: 'AggregateValueProposition';
  count: Scalars['Int'];
};

export type UserUpdateOneRequiredWithoutProject_IdsInput = {
  create?: Maybe<UserCreateWithoutProject_IdsInput>;
  update?: Maybe<UserUpdateWithoutProject_IdsDataInput>;
  upsert?: Maybe<UserUpsertWithoutProject_IdsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type CanvasUpdateManyWithoutProject_IdInput = {
  create?: Maybe<Array<CanvasCreateWithoutProject_IdInput>>;
  delete?: Maybe<Array<CanvasWhereUniqueInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
  set?: Maybe<Array<CanvasWhereUniqueInput>>;
  disconnect?: Maybe<Array<CanvasWhereUniqueInput>>;
  update?: Maybe<Array<CanvasUpdateWithWhereUniqueWithoutProject_IdInput>>;
  upsert?: Maybe<Array<CanvasUpsertWithWhereUniqueWithoutProject_IdInput>>;
  deleteMany?: Maybe<Array<CanvasScalarWhereInput>>;
  updateMany?: Maybe<Array<CanvasUpdateManyWithWhereNestedInput>>;
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type ProjectCreateOneWithoutCanvas_IdsInput = {
  create?: Maybe<ProjectCreateWithoutCanvas_IdsInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
};

export type StrategyCreateOneWithoutCanvas_IdsInput = {
  create?: Maybe<StrategyCreateWithoutCanvas_IdsInput>;
  connect?: Maybe<StrategyWhereUniqueInput>;
};

export type PatternCreateManyWithoutCanvas_IdsInput = {
  create?: Maybe<Array<PatternCreateWithoutCanvas_IdsInput>>;
  connect?: Maybe<Array<PatternWhereUniqueInput>>;
};

export type TableCreateOneInput = {
  create?: Maybe<TableCreateInput>;
  connect?: Maybe<TableWhereUniqueInput>;
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type ProjectUpdateOneRequiredWithoutCanvas_IdsInput = {
  create?: Maybe<ProjectCreateWithoutCanvas_IdsInput>;
  update?: Maybe<ProjectUpdateWithoutCanvas_IdsDataInput>;
  upsert?: Maybe<ProjectUpsertWithoutCanvas_IdsInput>;
  connect?: Maybe<ProjectWhereUniqueInput>;
};

export type StrategyUpdateOneWithoutCanvas_IdsInput = {
  create?: Maybe<StrategyCreateWithoutCanvas_IdsInput>;
  update?: Maybe<StrategyUpdateWithoutCanvas_IdsDataInput>;
  upsert?: Maybe<StrategyUpsertWithoutCanvas_IdsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<StrategyWhereUniqueInput>;
};

export type PatternUpdateManyWithoutCanvas_IdsInput = {
  create?: Maybe<Array<PatternCreateWithoutCanvas_IdsInput>>;
  delete?: Maybe<Array<PatternWhereUniqueInput>>;
  connect?: Maybe<Array<PatternWhereUniqueInput>>;
  set?: Maybe<Array<PatternWhereUniqueInput>>;
  disconnect?: Maybe<Array<PatternWhereUniqueInput>>;
  update?: Maybe<Array<PatternUpdateWithWhereUniqueWithoutCanvas_IdsInput>>;
  upsert?: Maybe<Array<PatternUpsertWithWhereUniqueWithoutCanvas_IdsInput>>;
  deleteMany?: Maybe<Array<PatternScalarWhereInput>>;
  updateMany?: Maybe<Array<PatternUpdateManyWithWhereNestedInput>>;
};

export type TableUpdateOneRequiredInput = {
  create?: Maybe<TableCreateInput>;
  update?: Maybe<TableUpdateDataInput>;
  upsert?: Maybe<TableUpsertNestedInput>;
  connect?: Maybe<TableWhereUniqueInput>;
};

export type CanvasCreateManyWithoutPattern_IdsInput = {
  create?: Maybe<Array<CanvasCreateWithoutPattern_IdsInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
};

export type CompanyCreateManyWithoutPattern_IdsInput = {
  create?: Maybe<Array<CompanyCreateWithoutPattern_IdsInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type StrategyPatternCreateManyWithoutPattern_IdInput = {
  create?: Maybe<Array<StrategyPatternCreateWithoutPattern_IdInput>>;
  connect?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
};

export type CanvasUpdateManyWithoutPattern_IdsInput = {
  create?: Maybe<Array<CanvasCreateWithoutPattern_IdsInput>>;
  delete?: Maybe<Array<CanvasWhereUniqueInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
  set?: Maybe<Array<CanvasWhereUniqueInput>>;
  disconnect?: Maybe<Array<CanvasWhereUniqueInput>>;
  update?: Maybe<Array<CanvasUpdateWithWhereUniqueWithoutPattern_IdsInput>>;
  upsert?: Maybe<Array<CanvasUpsertWithWhereUniqueWithoutPattern_IdsInput>>;
  deleteMany?: Maybe<Array<CanvasScalarWhereInput>>;
  updateMany?: Maybe<Array<CanvasUpdateManyWithWhereNestedInput>>;
};

export type CompanyUpdateManyWithoutPattern_IdsInput = {
  create?: Maybe<Array<CompanyCreateWithoutPattern_IdsInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutPattern_IdsInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutPattern_IdsInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereNestedInput>>;
};

export type StrategyPatternUpdateManyWithoutPattern_IdInput = {
  create?: Maybe<Array<StrategyPatternCreateWithoutPattern_IdInput>>;
  delete?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  connect?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  set?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  disconnect?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  update?: Maybe<Array<StrategyPatternUpdateWithWhereUniqueWithoutPattern_IdInput>>;
  upsert?: Maybe<Array<StrategyPatternUpsertWithWhereUniqueWithoutPattern_IdInput>>;
  deleteMany?: Maybe<Array<StrategyPatternScalarWhereInput>>;
  updateMany?: Maybe<Array<StrategyPatternUpdateManyWithWhereNestedInput>>;
};

export type CanvasCreateManyWithoutStrategy_IdInput = {
  create?: Maybe<Array<CanvasCreateWithoutStrategy_IdInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
};

export type StrategyPatternCreateManyWithoutStrategy_IdInput = {
  create?: Maybe<Array<StrategyPatternCreateWithoutStrategy_IdInput>>;
  connect?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
};

export type CanvasUpdateManyWithoutStrategy_IdInput = {
  create?: Maybe<Array<CanvasCreateWithoutStrategy_IdInput>>;
  delete?: Maybe<Array<CanvasWhereUniqueInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
  set?: Maybe<Array<CanvasWhereUniqueInput>>;
  disconnect?: Maybe<Array<CanvasWhereUniqueInput>>;
  update?: Maybe<Array<CanvasUpdateWithWhereUniqueWithoutStrategy_IdInput>>;
  upsert?: Maybe<Array<CanvasUpsertWithWhereUniqueWithoutStrategy_IdInput>>;
  deleteMany?: Maybe<Array<CanvasScalarWhereInput>>;
  updateMany?: Maybe<Array<CanvasUpdateManyWithWhereNestedInput>>;
};

export type StrategyPatternUpdateManyWithoutStrategy_IdInput = {
  create?: Maybe<Array<StrategyPatternCreateWithoutStrategy_IdInput>>;
  delete?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  connect?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  set?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  disconnect?: Maybe<Array<StrategyPatternWhereUniqueInput>>;
  update?: Maybe<Array<StrategyPatternUpdateWithWhereUniqueWithoutStrategy_IdInput>>;
  upsert?: Maybe<Array<StrategyPatternUpsertWithWhereUniqueWithoutStrategy_IdInput>>;
  deleteMany?: Maybe<Array<StrategyPatternScalarWhereInput>>;
  updateMany?: Maybe<Array<StrategyPatternUpdateManyWithWhereNestedInput>>;
};

export type StrategyCreateOneWithoutStrategy_Pattern_IdsInput = {
  create?: Maybe<StrategyCreateWithoutStrategy_Pattern_IdsInput>;
  connect?: Maybe<StrategyWhereUniqueInput>;
};

export type PatternCreateOneWithoutStrategy_Pattern_IdsInput = {
  create?: Maybe<PatternCreateWithoutStrategy_Pattern_IdsInput>;
  connect?: Maybe<PatternWhereUniqueInput>;
};

export type StrategyUpdateOneRequiredWithoutStrategy_Pattern_IdsInput = {
  create?: Maybe<StrategyCreateWithoutStrategy_Pattern_IdsInput>;
  update?: Maybe<StrategyUpdateWithoutStrategy_Pattern_IdsDataInput>;
  upsert?: Maybe<StrategyUpsertWithoutStrategy_Pattern_IdsInput>;
  connect?: Maybe<StrategyWhereUniqueInput>;
};

export type PatternUpdateOneRequiredWithoutStrategy_Pattern_IdsInput = {
  create?: Maybe<PatternCreateWithoutStrategy_Pattern_IdsInput>;
  update?: Maybe<PatternUpdateWithoutStrategy_Pattern_IdsDataInput>;
  upsert?: Maybe<PatternUpsertWithoutStrategy_Pattern_IdsInput>;
  connect?: Maybe<PatternWhereUniqueInput>;
};

export type TableCreateManyWithoutActor_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutActor_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutActor_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutActor_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutActor_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutActor_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutValue_Proposition_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutValue_Proposition_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutValue_Proposition_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutValue_Proposition_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutValue_Proposition_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutValue_Proposition_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutValue_Creation_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutValue_Creation_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutValue_Creation_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutValue_Creation_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutValue_Creation_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutValue_Creation_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutValue_Delivery_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutValue_Delivery_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutValue_Delivery_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutValue_Delivery_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutValue_Delivery_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutValue_Delivery_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutRevenue_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutRevenue_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutRevenue_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutRevenue_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutRevenue_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutRevenue_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutExpense_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutExpense_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutExpense_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutExpense_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutExpense_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutExpense_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutNetwork_Effect_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutNetwork_Effect_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutNetwork_Effect_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutNetwork_Effect_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutNetwork_Effect_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutNetwork_Effect_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutRegulatory_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutRegulatory_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutRegulatory_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutRegulatory_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutRegulatory_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutRegulatory_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutTechnical_Infrastructure_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutTechnical_Infrastructure_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutTechnical_Infrastructure_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutTechnical_Infrastructure_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutTechnical_Infrastructure_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutTechnical_Infrastructure_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};


export type PatternCreateManyWithoutCompany_IdsInput = {
  create?: Maybe<Array<PatternCreateWithoutCompany_IdsInput>>;
  connect?: Maybe<Array<PatternWhereUniqueInput>>;
};

export type PatternUpdateManyWithoutCompany_IdsInput = {
  create?: Maybe<Array<PatternCreateWithoutCompany_IdsInput>>;
  delete?: Maybe<Array<PatternWhereUniqueInput>>;
  connect?: Maybe<Array<PatternWhereUniqueInput>>;
  set?: Maybe<Array<PatternWhereUniqueInput>>;
  disconnect?: Maybe<Array<PatternWhereUniqueInput>>;
  update?: Maybe<Array<PatternUpdateWithWhereUniqueWithoutCompany_IdsInput>>;
  upsert?: Maybe<Array<PatternUpsertWithWhereUniqueWithoutCompany_IdsInput>>;
  deleteMany?: Maybe<Array<PatternScalarWhereInput>>;
  updateMany?: Maybe<Array<PatternUpdateManyWithWhereNestedInput>>;
};

export type UserCreateOneWithoutProject_IdsInput = {
  create?: Maybe<UserCreateWithoutProject_IdsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type CanvasCreateManyWithoutProject_IdInput = {
  create?: Maybe<Array<CanvasCreateWithoutProject_IdInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
};

export type ActorCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ActorCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ActorWhereUniqueInput>>;
};

export type ValuePropositionCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValuePropositionCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ValuePropositionWhereUniqueInput>>;
};

export type ValueCreationCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValueCreationCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ValueCreationWhereUniqueInput>>;
};

export type ValueDeliveryCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValueDeliveryCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ValueDeliveryWhereUniqueInput>>;
};

export type RevenueCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<RevenueCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<RevenueWhereUniqueInput>>;
};

export type ExpenseCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ExpenseCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ExpenseWhereUniqueInput>>;
};

export type NetworkEffectCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<NetworkEffectCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<NetworkEffectWhereUniqueInput>>;
};

export type TechnicalInfrastructureCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<TechnicalInfrastructureCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<TechnicalInfrastructureWhereUniqueInput>>;
};

export type RegulatoryCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<RegulatoryCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<RegulatoryWhereUniqueInput>>;
};

export type ActorUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ActorCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<ActorWhereUniqueInput>>;
  connect?: Maybe<Array<ActorWhereUniqueInput>>;
  set?: Maybe<Array<ActorWhereUniqueInput>>;
  disconnect?: Maybe<Array<ActorWhereUniqueInput>>;
  update?: Maybe<Array<ActorUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<ActorUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<ActorScalarWhereInput>>;
  updateMany?: Maybe<Array<ActorUpdateManyWithWhereNestedInput>>;
};

export type ValuePropositionUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValuePropositionCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<ValuePropositionWhereUniqueInput>>;
  connect?: Maybe<Array<ValuePropositionWhereUniqueInput>>;
  set?: Maybe<Array<ValuePropositionWhereUniqueInput>>;
  disconnect?: Maybe<Array<ValuePropositionWhereUniqueInput>>;
  update?: Maybe<Array<ValuePropositionUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<ValuePropositionUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<ValuePropositionScalarWhereInput>>;
  updateMany?: Maybe<Array<ValuePropositionUpdateManyWithWhereNestedInput>>;
};

export type ValueCreationUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValueCreationCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<ValueCreationWhereUniqueInput>>;
  connect?: Maybe<Array<ValueCreationWhereUniqueInput>>;
  set?: Maybe<Array<ValueCreationWhereUniqueInput>>;
  disconnect?: Maybe<Array<ValueCreationWhereUniqueInput>>;
  update?: Maybe<Array<ValueCreationUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<ValueCreationUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<ValueCreationScalarWhereInput>>;
  updateMany?: Maybe<Array<ValueCreationUpdateManyWithWhereNestedInput>>;
};

export type ValueDeliveryUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValueDeliveryCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<ValueDeliveryWhereUniqueInput>>;
  connect?: Maybe<Array<ValueDeliveryWhereUniqueInput>>;
  set?: Maybe<Array<ValueDeliveryWhereUniqueInput>>;
  disconnect?: Maybe<Array<ValueDeliveryWhereUniqueInput>>;
  update?: Maybe<Array<ValueDeliveryUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<ValueDeliveryUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<ValueDeliveryScalarWhereInput>>;
  updateMany?: Maybe<Array<ValueDeliveryUpdateManyWithWhereNestedInput>>;
};

export type RevenueUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<RevenueCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<RevenueWhereUniqueInput>>;
  connect?: Maybe<Array<RevenueWhereUniqueInput>>;
  set?: Maybe<Array<RevenueWhereUniqueInput>>;
  disconnect?: Maybe<Array<RevenueWhereUniqueInput>>;
  update?: Maybe<Array<RevenueUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<RevenueUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<RevenueScalarWhereInput>>;
  updateMany?: Maybe<Array<RevenueUpdateManyWithWhereNestedInput>>;
};

export type ExpenseUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ExpenseCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<ExpenseWhereUniqueInput>>;
  connect?: Maybe<Array<ExpenseWhereUniqueInput>>;
  set?: Maybe<Array<ExpenseWhereUniqueInput>>;
  disconnect?: Maybe<Array<ExpenseWhereUniqueInput>>;
  update?: Maybe<Array<ExpenseUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<ExpenseUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<ExpenseScalarWhereInput>>;
  updateMany?: Maybe<Array<ExpenseUpdateManyWithWhereNestedInput>>;
};

export type NetworkEffectUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<NetworkEffectCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<NetworkEffectWhereUniqueInput>>;
  connect?: Maybe<Array<NetworkEffectWhereUniqueInput>>;
  set?: Maybe<Array<NetworkEffectWhereUniqueInput>>;
  disconnect?: Maybe<Array<NetworkEffectWhereUniqueInput>>;
  update?: Maybe<Array<NetworkEffectUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<NetworkEffectUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<NetworkEffectScalarWhereInput>>;
  updateMany?: Maybe<Array<NetworkEffectUpdateManyWithWhereNestedInput>>;
};

export type TechnicalInfrastructureUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<TechnicalInfrastructureCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<TechnicalInfrastructureWhereUniqueInput>>;
  connect?: Maybe<Array<TechnicalInfrastructureWhereUniqueInput>>;
  set?: Maybe<Array<TechnicalInfrastructureWhereUniqueInput>>;
  disconnect?: Maybe<Array<TechnicalInfrastructureWhereUniqueInput>>;
  update?: Maybe<Array<TechnicalInfrastructureUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<TechnicalInfrastructureUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<TechnicalInfrastructureScalarWhereInput>>;
  updateMany?: Maybe<Array<TechnicalInfrastructureUpdateManyWithWhereNestedInput>>;
};

export type RegulatoryUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<RegulatoryCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<RegulatoryWhereUniqueInput>>;
  connect?: Maybe<Array<RegulatoryWhereUniqueInput>>;
  set?: Maybe<Array<RegulatoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<RegulatoryWhereUniqueInput>>;
  update?: Maybe<Array<RegulatoryUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<RegulatoryUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<RegulatoryScalarWhereInput>>;
  updateMany?: Maybe<Array<RegulatoryUpdateManyWithWhereNestedInput>>;
};

export type ProjectCreateManyWithoutUser_IdInput = {
  create?: Maybe<Array<ProjectCreateWithoutUser_IdInput>>;
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type UserCreateOneWithoutUpdatedByInput = {
  create?: Maybe<UserCreateWithoutUpdatedByInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type ProjectUpdateManyWithoutUser_IdInput = {
  create?: Maybe<Array<ProjectCreateWithoutUser_IdInput>>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutUser_IdInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutUser_IdInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereNestedInput>>;
};

export type UserUpdateOneWithoutUpdatedByInput = {
  create?: Maybe<UserCreateWithoutUpdatedByInput>;
  update?: Maybe<UserUpdateWithoutUpdatedByDataInput>;
  upsert?: Maybe<UserUpsertWithoutUpdatedByInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutProject_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<Role>;
  password: Scalars['String'];
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserCreateOneWithoutUpdatedByInput>;
};

export type UserUpdateWithoutProject_IdsDataInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedByInput>;
};

export type UserUpsertWithoutProject_IdsInput = {
  update: UserUpdateWithoutProject_IdsDataInput;
  create: UserCreateWithoutProject_IdsInput;
};

export type CanvasCreateWithoutProject_IdInput = {
  id?: Maybe<Scalars['ID']>;
  strategy_id?: Maybe<StrategyCreateOneWithoutCanvas_IdsInput>;
  pattern_ids?: Maybe<PatternCreateManyWithoutCanvas_IdsInput>;
  table_id: TableCreateOneInput;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CanvasUpdateWithWhereUniqueWithoutProject_IdInput = {
  where: CanvasWhereUniqueInput;
  data: CanvasUpdateWithoutProject_IdDataInput;
};

export type CanvasUpsertWithWhereUniqueWithoutProject_IdInput = {
  where: CanvasWhereUniqueInput;
  update: CanvasUpdateWithoutProject_IdDataInput;
  create: CanvasCreateWithoutProject_IdInput;
};

export type CanvasScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<CanvasScalarWhereInput>>;
  OR?: Maybe<Array<CanvasScalarWhereInput>>;
  NOT?: Maybe<Array<CanvasScalarWhereInput>>;
};

export type CanvasUpdateManyWithWhereNestedInput = {
  where: CanvasScalarWhereInput;
  data: CanvasUpdateManyDataInput;
};

export type UserUpdateDataInput = {
  project_ids?: Maybe<ProjectUpdateManyWithoutUser_IdInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<UserUpdateOneWithoutUpdatedByInput>;
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type ProjectCreateWithoutCanvas_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  user_id: UserCreateOneWithoutProject_IdsInput;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type StrategyCreateWithoutCanvas_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  strategy_pattern_ids?: Maybe<StrategyPatternCreateManyWithoutStrategy_IdInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type PatternCreateWithoutCanvas_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  table_id: TableCreateOneInput;
  company_ids?: Maybe<CompanyCreateManyWithoutPattern_IdsInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternCreateManyWithoutPattern_IdInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ProjectUpdateWithoutCanvas_IdsDataInput = {
  user_id?: Maybe<UserUpdateOneRequiredWithoutProject_IdsInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ProjectUpsertWithoutCanvas_IdsInput = {
  update: ProjectUpdateWithoutCanvas_IdsDataInput;
  create: ProjectCreateWithoutCanvas_IdsInput;
};

export type StrategyUpdateWithoutCanvas_IdsDataInput = {
  strategy_pattern_ids?: Maybe<StrategyPatternUpdateManyWithoutStrategy_IdInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type StrategyUpsertWithoutCanvas_IdsInput = {
  update: StrategyUpdateWithoutCanvas_IdsDataInput;
  create: StrategyCreateWithoutCanvas_IdsInput;
};

export type PatternUpdateWithWhereUniqueWithoutCanvas_IdsInput = {
  where: PatternWhereUniqueInput;
  data: PatternUpdateWithoutCanvas_IdsDataInput;
};

export type PatternUpsertWithWhereUniqueWithoutCanvas_IdsInput = {
  where: PatternWhereUniqueInput;
  update: PatternUpdateWithoutCanvas_IdsDataInput;
  create: PatternCreateWithoutCanvas_IdsInput;
};

export type PatternScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  actorWeight_not?: Maybe<Scalars['Int']>;
  actorWeight_in?: Maybe<Array<Scalars['Int']>>;
  actorWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  actorWeight_lt?: Maybe<Scalars['Int']>;
  actorWeight_lte?: Maybe<Scalars['Int']>;
  actorWeight_gt?: Maybe<Scalars['Int']>;
  actorWeight_gte?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight_not?: Maybe<Scalars['Int']>;
  valuePropositionWeight_in?: Maybe<Array<Scalars['Int']>>;
  valuePropositionWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  valuePropositionWeight_lt?: Maybe<Scalars['Int']>;
  valuePropositionWeight_lte?: Maybe<Scalars['Int']>;
  valuePropositionWeight_gt?: Maybe<Scalars['Int']>;
  valuePropositionWeight_gte?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight_not?: Maybe<Scalars['Int']>;
  valueCreationWeight_in?: Maybe<Array<Scalars['Int']>>;
  valueCreationWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  valueCreationWeight_lt?: Maybe<Scalars['Int']>;
  valueCreationWeight_lte?: Maybe<Scalars['Int']>;
  valueCreationWeight_gt?: Maybe<Scalars['Int']>;
  valueCreationWeight_gte?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_not?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_in?: Maybe<Array<Scalars['Int']>>;
  valueDeliveryWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  valueDeliveryWeight_lt?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_lte?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_gt?: Maybe<Scalars['Int']>;
  valueDeliveryWeight_gte?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  revenueWeight_not?: Maybe<Scalars['Int']>;
  revenueWeight_in?: Maybe<Array<Scalars['Int']>>;
  revenueWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  revenueWeight_lt?: Maybe<Scalars['Int']>;
  revenueWeight_lte?: Maybe<Scalars['Int']>;
  revenueWeight_gt?: Maybe<Scalars['Int']>;
  revenueWeight_gte?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  expenseWeight_not?: Maybe<Scalars['Int']>;
  expenseWeight_in?: Maybe<Array<Scalars['Int']>>;
  expenseWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  expenseWeight_lt?: Maybe<Scalars['Int']>;
  expenseWeight_lte?: Maybe<Scalars['Int']>;
  expenseWeight_gt?: Maybe<Scalars['Int']>;
  expenseWeight_gte?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight_not?: Maybe<Scalars['Int']>;
  networkEffectWeight_in?: Maybe<Array<Scalars['Int']>>;
  networkEffectWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  networkEffectWeight_lt?: Maybe<Scalars['Int']>;
  networkEffectWeight_lte?: Maybe<Scalars['Int']>;
  networkEffectWeight_gt?: Maybe<Scalars['Int']>;
  networkEffectWeight_gte?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight_not?: Maybe<Scalars['Int']>;
  regulatoryWeight_in?: Maybe<Array<Scalars['Int']>>;
  regulatoryWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  regulatoryWeight_lt?: Maybe<Scalars['Int']>;
  regulatoryWeight_lte?: Maybe<Scalars['Int']>;
  regulatoryWeight_gt?: Maybe<Scalars['Int']>;
  regulatoryWeight_gte?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_not?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_in?: Maybe<Array<Scalars['Int']>>;
  technicalInfrastructureWeight_not_in?: Maybe<Array<Scalars['Int']>>;
  technicalInfrastructureWeight_lt?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_lte?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_gt?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight_gte?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<PatternScalarWhereInput>>;
  OR?: Maybe<Array<PatternScalarWhereInput>>;
  NOT?: Maybe<Array<PatternScalarWhereInput>>;
};

export type PatternUpdateManyWithWhereNestedInput = {
  where: PatternScalarWhereInput;
  data: PatternUpdateManyDataInput;
};

export type TableUpdateDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpsertNestedInput = {
  update: TableUpdateDataInput;
  create: TableCreateInput;
};

export type CanvasCreateWithoutPattern_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  project_id: ProjectCreateOneWithoutCanvas_IdsInput;
  strategy_id?: Maybe<StrategyCreateOneWithoutCanvas_IdsInput>;
  table_id: TableCreateOneInput;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CompanyCreateWithoutPattern_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type StrategyPatternCreateWithoutPattern_IdInput = {
  id?: Maybe<Scalars['ID']>;
  strategy_id: StrategyCreateOneWithoutStrategy_Pattern_IdsInput;
  weight: Scalars['Int'];
};

export type CanvasUpdateWithWhereUniqueWithoutPattern_IdsInput = {
  where: CanvasWhereUniqueInput;
  data: CanvasUpdateWithoutPattern_IdsDataInput;
};

export type CanvasUpsertWithWhereUniqueWithoutPattern_IdsInput = {
  where: CanvasWhereUniqueInput;
  update: CanvasUpdateWithoutPattern_IdsDataInput;
  create: CanvasCreateWithoutPattern_IdsInput;
};

export type CompanyUpdateWithWhereUniqueWithoutPattern_IdsInput = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateWithoutPattern_IdsDataInput;
};

export type CompanyUpsertWithWhereUniqueWithoutPattern_IdsInput = {
  where: CompanyWhereUniqueInput;
  update: CompanyUpdateWithoutPattern_IdsDataInput;
  create: CompanyCreateWithoutPattern_IdsInput;
};

export type CompanyScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<CompanyScalarWhereInput>>;
  OR?: Maybe<Array<CompanyScalarWhereInput>>;
  NOT?: Maybe<Array<CompanyScalarWhereInput>>;
};

export type CompanyUpdateManyWithWhereNestedInput = {
  where: CompanyScalarWhereInput;
  data: CompanyUpdateManyDataInput;
};

export type StrategyPatternUpdateWithWhereUniqueWithoutPattern_IdInput = {
  where: StrategyPatternWhereUniqueInput;
  data: StrategyPatternUpdateWithoutPattern_IdDataInput;
};

export type StrategyPatternUpsertWithWhereUniqueWithoutPattern_IdInput = {
  where: StrategyPatternWhereUniqueInput;
  update: StrategyPatternUpdateWithoutPattern_IdDataInput;
  create: StrategyPatternCreateWithoutPattern_IdInput;
};

export type StrategyPatternScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  weight?: Maybe<Scalars['Int']>;
  weight_not?: Maybe<Scalars['Int']>;
  weight_in?: Maybe<Array<Scalars['Int']>>;
  weight_not_in?: Maybe<Array<Scalars['Int']>>;
  weight_lt?: Maybe<Scalars['Int']>;
  weight_lte?: Maybe<Scalars['Int']>;
  weight_gt?: Maybe<Scalars['Int']>;
  weight_gte?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<StrategyPatternScalarWhereInput>>;
  OR?: Maybe<Array<StrategyPatternScalarWhereInput>>;
  NOT?: Maybe<Array<StrategyPatternScalarWhereInput>>;
};

export type StrategyPatternUpdateManyWithWhereNestedInput = {
  where: StrategyPatternScalarWhereInput;
  data: StrategyPatternUpdateManyDataInput;
};

export type CanvasCreateWithoutStrategy_IdInput = {
  id?: Maybe<Scalars['ID']>;
  project_id: ProjectCreateOneWithoutCanvas_IdsInput;
  pattern_ids?: Maybe<PatternCreateManyWithoutCanvas_IdsInput>;
  table_id: TableCreateOneInput;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type StrategyPatternCreateWithoutStrategy_IdInput = {
  id?: Maybe<Scalars['ID']>;
  pattern_id: PatternCreateOneWithoutStrategy_Pattern_IdsInput;
  weight: Scalars['Int'];
};

export type CanvasUpdateWithWhereUniqueWithoutStrategy_IdInput = {
  where: CanvasWhereUniqueInput;
  data: CanvasUpdateWithoutStrategy_IdDataInput;
};

export type CanvasUpsertWithWhereUniqueWithoutStrategy_IdInput = {
  where: CanvasWhereUniqueInput;
  update: CanvasUpdateWithoutStrategy_IdDataInput;
  create: CanvasCreateWithoutStrategy_IdInput;
};

export type StrategyPatternUpdateWithWhereUniqueWithoutStrategy_IdInput = {
  where: StrategyPatternWhereUniqueInput;
  data: StrategyPatternUpdateWithoutStrategy_IdDataInput;
};

export type StrategyPatternUpsertWithWhereUniqueWithoutStrategy_IdInput = {
  where: StrategyPatternWhereUniqueInput;
  update: StrategyPatternUpdateWithoutStrategy_IdDataInput;
  create: StrategyPatternCreateWithoutStrategy_IdInput;
};

export type StrategyCreateWithoutStrategy_Pattern_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutStrategy_IdInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type PatternCreateWithoutStrategy_Pattern_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutPattern_IdsInput>;
  table_id: TableCreateOneInput;
  company_ids?: Maybe<CompanyCreateManyWithoutPattern_IdsInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type StrategyUpdateWithoutStrategy_Pattern_IdsDataInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutStrategy_IdInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type StrategyUpsertWithoutStrategy_Pattern_IdsInput = {
  update: StrategyUpdateWithoutStrategy_Pattern_IdsDataInput;
  create: StrategyCreateWithoutStrategy_Pattern_IdsInput;
};

export type PatternUpdateWithoutStrategy_Pattern_IdsDataInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutPattern_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  company_ids?: Maybe<CompanyUpdateManyWithoutPattern_IdsInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type PatternUpsertWithoutStrategy_Pattern_IdsInput = {
  update: PatternUpdateWithoutStrategy_Pattern_IdsDataInput;
  create: PatternCreateWithoutStrategy_Pattern_IdsInput;
};

export type TableCreateWithoutActor_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutActor_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutActor_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutActor_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutActor_Entry_IdsDataInput;
  create: TableCreateWithoutActor_Entry_IdsInput;
};

export type TableScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  AND?: Maybe<Array<TableScalarWhereInput>>;
  OR?: Maybe<Array<TableScalarWhereInput>>;
  NOT?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateWithoutValue_Proposition_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutValue_Proposition_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutValue_Proposition_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutValue_Proposition_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutValue_Proposition_Entry_IdsDataInput;
  create: TableCreateWithoutValue_Proposition_Entry_IdsInput;
};

export type TableCreateWithoutValue_Creation_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutValue_Creation_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutValue_Creation_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutValue_Creation_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutValue_Creation_Entry_IdsDataInput;
  create: TableCreateWithoutValue_Creation_Entry_IdsInput;
};

export type TableCreateWithoutValue_Delivery_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutValue_Delivery_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutValue_Delivery_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutValue_Delivery_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutValue_Delivery_Entry_IdsDataInput;
  create: TableCreateWithoutValue_Delivery_Entry_IdsInput;
};

export type TableCreateWithoutRevenue_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutRevenue_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutRevenue_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutRevenue_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutRevenue_Entry_IdsDataInput;
  create: TableCreateWithoutRevenue_Entry_IdsInput;
};

export type TableCreateWithoutExpense_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutExpense_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutExpense_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutExpense_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutExpense_Entry_IdsDataInput;
  create: TableCreateWithoutExpense_Entry_IdsInput;
};

export type TableCreateWithoutNetwork_Effect_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutNetwork_Effect_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutNetwork_Effect_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutNetwork_Effect_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutNetwork_Effect_Entry_IdsDataInput;
  create: TableCreateWithoutNetwork_Effect_Entry_IdsInput;
};

export type TableCreateWithoutRegulatory_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutRegulatory_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutRegulatory_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutRegulatory_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutRegulatory_Entry_IdsDataInput;
  create: TableCreateWithoutRegulatory_Entry_IdsInput;
};

export type TableCreateWithoutTechnical_Infrastructure_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  actor_entry_ids?: Maybe<ActorCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationCreateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryCreateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueCreateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseCreateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectCreateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutTechnical_Infrastructure_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutTechnical_Infrastructure_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutTechnical_Infrastructure_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutTechnical_Infrastructure_Entry_IdsDataInput;
  create: TableCreateWithoutTechnical_Infrastructure_Entry_IdsInput;
};

export type PatternCreateWithoutCompany_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutPattern_IdsInput>;
  table_id: TableCreateOneInput;
  strategy_pattern_ids?: Maybe<StrategyPatternCreateManyWithoutPattern_IdInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type PatternUpdateWithWhereUniqueWithoutCompany_IdsInput = {
  where: PatternWhereUniqueInput;
  data: PatternUpdateWithoutCompany_IdsDataInput;
};

export type PatternUpsertWithWhereUniqueWithoutCompany_IdsInput = {
  where: PatternWhereUniqueInput;
  update: PatternUpdateWithoutCompany_IdsDataInput;
  create: PatternCreateWithoutCompany_IdsInput;
};

export type ActorCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ValuePropositionCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ValueCreationCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ValueDeliveryCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RevenueCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ExpenseCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type NetworkEffectCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type TechnicalInfrastructureCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RegulatoryCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ActorUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: ActorWhereUniqueInput;
  data: ActorUpdateWithoutTable_IdsDataInput;
};

export type ActorUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: ActorWhereUniqueInput;
  update: ActorUpdateWithoutTable_IdsDataInput;
  create: ActorCreateWithoutTable_IdsInput;
};

export type ActorScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ActorScalarWhereInput>>;
  OR?: Maybe<Array<ActorScalarWhereInput>>;
  NOT?: Maybe<Array<ActorScalarWhereInput>>;
};

export type ActorUpdateManyWithWhereNestedInput = {
  where: ActorScalarWhereInput;
  data: ActorUpdateManyDataInput;
};

export type ValuePropositionUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: ValuePropositionWhereUniqueInput;
  data: ValuePropositionUpdateWithoutTable_IdsDataInput;
};

export type ValuePropositionUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: ValuePropositionWhereUniqueInput;
  update: ValuePropositionUpdateWithoutTable_IdsDataInput;
  create: ValuePropositionCreateWithoutTable_IdsInput;
};

export type ValuePropositionScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ValuePropositionScalarWhereInput>>;
  OR?: Maybe<Array<ValuePropositionScalarWhereInput>>;
  NOT?: Maybe<Array<ValuePropositionScalarWhereInput>>;
};

export type ValuePropositionUpdateManyWithWhereNestedInput = {
  where: ValuePropositionScalarWhereInput;
  data: ValuePropositionUpdateManyDataInput;
};

export type ValueCreationUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: ValueCreationWhereUniqueInput;
  data: ValueCreationUpdateWithoutTable_IdsDataInput;
};

export type ValueCreationUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: ValueCreationWhereUniqueInput;
  update: ValueCreationUpdateWithoutTable_IdsDataInput;
  create: ValueCreationCreateWithoutTable_IdsInput;
};

export type ValueCreationScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ValueCreationScalarWhereInput>>;
  OR?: Maybe<Array<ValueCreationScalarWhereInput>>;
  NOT?: Maybe<Array<ValueCreationScalarWhereInput>>;
};

export type ValueCreationUpdateManyWithWhereNestedInput = {
  where: ValueCreationScalarWhereInput;
  data: ValueCreationUpdateManyDataInput;
};

export type ValueDeliveryUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: ValueDeliveryWhereUniqueInput;
  data: ValueDeliveryUpdateWithoutTable_IdsDataInput;
};

export type ValueDeliveryUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: ValueDeliveryWhereUniqueInput;
  update: ValueDeliveryUpdateWithoutTable_IdsDataInput;
  create: ValueDeliveryCreateWithoutTable_IdsInput;
};

export type ValueDeliveryScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ValueDeliveryScalarWhereInput>>;
  OR?: Maybe<Array<ValueDeliveryScalarWhereInput>>;
  NOT?: Maybe<Array<ValueDeliveryScalarWhereInput>>;
};

export type ValueDeliveryUpdateManyWithWhereNestedInput = {
  where: ValueDeliveryScalarWhereInput;
  data: ValueDeliveryUpdateManyDataInput;
};

export type RevenueUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: RevenueWhereUniqueInput;
  data: RevenueUpdateWithoutTable_IdsDataInput;
};

export type RevenueUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: RevenueWhereUniqueInput;
  update: RevenueUpdateWithoutTable_IdsDataInput;
  create: RevenueCreateWithoutTable_IdsInput;
};

export type RevenueScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<RevenueScalarWhereInput>>;
  OR?: Maybe<Array<RevenueScalarWhereInput>>;
  NOT?: Maybe<Array<RevenueScalarWhereInput>>;
};

export type RevenueUpdateManyWithWhereNestedInput = {
  where: RevenueScalarWhereInput;
  data: RevenueUpdateManyDataInput;
};

export type ExpenseUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: ExpenseWhereUniqueInput;
  data: ExpenseUpdateWithoutTable_IdsDataInput;
};

export type ExpenseUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: ExpenseWhereUniqueInput;
  update: ExpenseUpdateWithoutTable_IdsDataInput;
  create: ExpenseCreateWithoutTable_IdsInput;
};

export type ExpenseScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ExpenseScalarWhereInput>>;
  OR?: Maybe<Array<ExpenseScalarWhereInput>>;
  NOT?: Maybe<Array<ExpenseScalarWhereInput>>;
};

export type ExpenseUpdateManyWithWhereNestedInput = {
  where: ExpenseScalarWhereInput;
  data: ExpenseUpdateManyDataInput;
};

export type NetworkEffectUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: NetworkEffectWhereUniqueInput;
  data: NetworkEffectUpdateWithoutTable_IdsDataInput;
};

export type NetworkEffectUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: NetworkEffectWhereUniqueInput;
  update: NetworkEffectUpdateWithoutTable_IdsDataInput;
  create: NetworkEffectCreateWithoutTable_IdsInput;
};

export type NetworkEffectScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<NetworkEffectScalarWhereInput>>;
  OR?: Maybe<Array<NetworkEffectScalarWhereInput>>;
  NOT?: Maybe<Array<NetworkEffectScalarWhereInput>>;
};

export type NetworkEffectUpdateManyWithWhereNestedInput = {
  where: NetworkEffectScalarWhereInput;
  data: NetworkEffectUpdateManyDataInput;
};

export type TechnicalInfrastructureUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: TechnicalInfrastructureWhereUniqueInput;
  data: TechnicalInfrastructureUpdateWithoutTable_IdsDataInput;
};

export type TechnicalInfrastructureUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: TechnicalInfrastructureWhereUniqueInput;
  update: TechnicalInfrastructureUpdateWithoutTable_IdsDataInput;
  create: TechnicalInfrastructureCreateWithoutTable_IdsInput;
};

export type TechnicalInfrastructureScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<TechnicalInfrastructureScalarWhereInput>>;
  OR?: Maybe<Array<TechnicalInfrastructureScalarWhereInput>>;
  NOT?: Maybe<Array<TechnicalInfrastructureScalarWhereInput>>;
};

export type TechnicalInfrastructureUpdateManyWithWhereNestedInput = {
  where: TechnicalInfrastructureScalarWhereInput;
  data: TechnicalInfrastructureUpdateManyDataInput;
};

export type RegulatoryUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: RegulatoryWhereUniqueInput;
  data: RegulatoryUpdateWithoutTable_IdsDataInput;
};

export type RegulatoryUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: RegulatoryWhereUniqueInput;
  update: RegulatoryUpdateWithoutTable_IdsDataInput;
  create: RegulatoryCreateWithoutTable_IdsInput;
};

export type RegulatoryScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  note_not?: Maybe<Scalars['String']>;
  note_in?: Maybe<Array<Scalars['String']>>;
  note_not_in?: Maybe<Array<Scalars['String']>>;
  note_lt?: Maybe<Scalars['String']>;
  note_lte?: Maybe<Scalars['String']>;
  note_gt?: Maybe<Scalars['String']>;
  note_gte?: Maybe<Scalars['String']>;
  note_contains?: Maybe<Scalars['String']>;
  note_not_contains?: Maybe<Scalars['String']>;
  note_starts_with?: Maybe<Scalars['String']>;
  note_not_starts_with?: Maybe<Scalars['String']>;
  note_ends_with?: Maybe<Scalars['String']>;
  note_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<RegulatoryScalarWhereInput>>;
  OR?: Maybe<Array<RegulatoryScalarWhereInput>>;
  NOT?: Maybe<Array<RegulatoryScalarWhereInput>>;
};

export type RegulatoryUpdateManyWithWhereNestedInput = {
  where: RegulatoryScalarWhereInput;
  data: RegulatoryUpdateManyDataInput;
};

export type ProjectCreateWithoutUser_IdInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutProject_IdInput>;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type UserCreateWithoutUpdatedByInput = {
  id?: Maybe<Scalars['ID']>;
  project_ids?: Maybe<ProjectCreateManyWithoutUser_IdInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<Role>;
  password: Scalars['String'];
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ProjectUpdateWithWhereUniqueWithoutUser_IdInput = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateWithoutUser_IdDataInput;
};

export type ProjectUpsertWithWhereUniqueWithoutUser_IdInput = {
  where: ProjectWhereUniqueInput;
  update: ProjectUpdateWithoutUser_IdDataInput;
  create: ProjectCreateWithoutUser_IdInput;
};

export type ProjectScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
};

export type ProjectUpdateManyWithWhereNestedInput = {
  where: ProjectScalarWhereInput;
  data: ProjectUpdateManyDataInput;
};

export type UserUpdateWithoutUpdatedByDataInput = {
  project_ids?: Maybe<ProjectUpdateManyWithoutUser_IdInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  password?: Maybe<Scalars['String']>;
  verificationCode?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserUpsertWithoutUpdatedByInput = {
  update: UserUpdateWithoutUpdatedByDataInput;
  create: UserCreateWithoutUpdatedByInput;
};

export type CanvasUpdateWithoutProject_IdDataInput = {
  strategy_id?: Maybe<StrategyUpdateOneWithoutCanvas_IdsInput>;
  pattern_ids?: Maybe<PatternUpdateManyWithoutCanvas_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CanvasUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type PatternUpdateWithoutCanvas_IdsDataInput = {
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  company_ids?: Maybe<CompanyUpdateManyWithoutPattern_IdsInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternUpdateManyWithoutPattern_IdInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type PatternUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
};

export type CanvasUpdateWithoutPattern_IdsDataInput = {
  project_id?: Maybe<ProjectUpdateOneRequiredWithoutCanvas_IdsInput>;
  strategy_id?: Maybe<StrategyUpdateOneWithoutCanvas_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CompanyUpdateWithoutPattern_IdsDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CompanyUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type StrategyPatternUpdateWithoutPattern_IdDataInput = {
  strategy_id?: Maybe<StrategyUpdateOneRequiredWithoutStrategy_Pattern_IdsInput>;
  weight?: Maybe<Scalars['Int']>;
};

export type StrategyPatternUpdateManyDataInput = {
  weight?: Maybe<Scalars['Int']>;
};

export type CanvasUpdateWithoutStrategy_IdDataInput = {
  project_id?: Maybe<ProjectUpdateOneRequiredWithoutCanvas_IdsInput>;
  pattern_ids?: Maybe<PatternUpdateManyWithoutCanvas_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type StrategyPatternUpdateWithoutStrategy_IdDataInput = {
  pattern_id?: Maybe<PatternUpdateOneRequiredWithoutStrategy_Pattern_IdsInput>;
  weight?: Maybe<Scalars['Int']>;
};

export type TableUpdateWithoutActor_Entry_IdsDataInput = {
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutValue_Proposition_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutValue_Creation_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutValue_Delivery_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutRevenue_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutExpense_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutNetwork_Effect_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutRegulatory_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  technical_infrastructure_entry_ids?: Maybe<TechnicalInfrastructureUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutTechnical_Infrastructure_Entry_IdsDataInput = {
  actor_entry_ids?: Maybe<ActorUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  value_creation_entry_ids?: Maybe<ValueCreationUpdateManyWithoutTable_IdsInput>;
  value_delivery_entry_ids?: Maybe<ValueDeliveryUpdateManyWithoutTable_IdsInput>;
  revenue_entry_ids?: Maybe<RevenueUpdateManyWithoutTable_IdsInput>;
  expense_entry_ids?: Maybe<ExpenseUpdateManyWithoutTable_IdsInput>;
  network_effect_entry_ids?: Maybe<NetworkEffectUpdateManyWithoutTable_IdsInput>;
  regulatory_entry_ids?: Maybe<RegulatoryUpdateManyWithoutTable_IdsInput>;
};

export type PatternUpdateWithoutCompany_IdsDataInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutPattern_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  strategy_pattern_ids?: Maybe<StrategyPatternUpdateManyWithoutPattern_IdInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  actorWeight?: Maybe<Scalars['Int']>;
  valuePropositionWeight?: Maybe<Scalars['Int']>;
  valueCreationWeight?: Maybe<Scalars['Int']>;
  valueDeliveryWeight?: Maybe<Scalars['Int']>;
  revenueWeight?: Maybe<Scalars['Int']>;
  expenseWeight?: Maybe<Scalars['Int']>;
  networkEffectWeight?: Maybe<Scalars['Int']>;
  regulatoryWeight?: Maybe<Scalars['Int']>;
  technicalInfrastructureWeight?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ActorUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ActorUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ValuePropositionUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ValuePropositionUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ValueCreationUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ValueCreationUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ValueDeliveryUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ValueDeliveryUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type RevenueUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type RevenueUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ExpenseUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ExpenseUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type NetworkEffectUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type NetworkEffectUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type TechnicalInfrastructureUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type TechnicalInfrastructureUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type RegulatoryUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type RegulatoryUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ProjectUpdateWithoutUser_IdDataInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutProject_IdInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ProjectUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Node = {
  id: Scalars['ID'];
};

export type GetCanvasQueryVariables = {
  id: Scalars['ID'];
};


export type GetCanvasQuery = (
  { __typename?: 'Query' }
  & { getCanvas: (
    { __typename?: 'Canvas' }
    & Pick<Canvas, 'id' | 'name' | 'createdAt' | 'updatedAt'>
  ) }
);

export type GetAllCanvasesQueryVariables = {};


export type GetAllCanvasesQuery = (
  { __typename?: 'Query' }
  & { getAllCanvases: Array<(
    { __typename?: 'Canvas' }
    & Pick<Canvas, 'id' | 'name' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetProjectQueryVariables = {
  id: Scalars['ID'];
};


export type GetProjectQuery = (
  { __typename?: 'Query' }
  & { getProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'createdAt' | 'updatedAt'>
  ) }
);

export type GetAllProjectsQueryVariables = {};


export type GetAllProjectsQuery = (
  { __typename?: 'Query' }
  & { getAllProjects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'name' | 'createdAt' | 'updatedAt'>
  )> }
);

export type LoginUserQueryVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginUserQuery = (
  { __typename?: 'Query' }
  & { login: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type CheckEmailQueryVariables = {
  email: Scalars['String'];
};


export type CheckEmailQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'checkEmailAddress'>
);

export type RegisterUserMutationVariables = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registrate: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export const GetCanvasDocument = gql`
    query getCanvas($id: ID!) {
  getCanvas(id: $id) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCanvasGQL extends Apollo.Query<GetCanvasQuery, GetCanvasQueryVariables> {
    document = GetCanvasDocument;
    
  }
export const GetAllCanvasesDocument = gql`
    query getAllCanvases {
  getAllCanvases {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllCanvasesGQL extends Apollo.Query<GetAllCanvasesQuery, GetAllCanvasesQueryVariables> {
    document = GetAllCanvasesDocument;
    
  }
export const GetProjectDocument = gql`
    query getProject($id: ID!) {
  getProject(id: $id) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProjectGQL extends Apollo.Query<GetProjectQuery, GetProjectQueryVariables> {
    document = GetProjectDocument;
    
  }
export const GetAllProjectsDocument = gql`
    query getAllProjects {
  getAllProjects {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllProjectsGQL extends Apollo.Query<GetAllProjectsQuery, GetAllProjectsQueryVariables> {
    document = GetAllProjectsDocument;
    
  }
export const LoginUserDocument = gql`
    query loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginUserGQL extends Apollo.Query<LoginUserQuery, LoginUserQueryVariables> {
    document = LoginUserDocument;
    
  }
export const CheckEmailDocument = gql`
    query checkEmail($email: String!) {
  checkEmailAddress(email: $email)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckEmailGQL extends Apollo.Query<CheckEmailQuery, CheckEmailQueryVariables> {
    document = CheckEmailDocument;
    
  }
export const RegisterUserDocument = gql`
    mutation registerUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  registrate(data: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;
    
  }