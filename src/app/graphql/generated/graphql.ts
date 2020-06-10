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
  getKeyPartner: KeyPartner;
  getAllKeyPartners: Array<KeyPartner>;
  getRevenueStream: RevenueStream;
  getAllRevenueStreams: Array<RevenueStream>;
  createCompany: Company;
  updateCompany: Company;
  deleteCompany: Company;
  canvas?: Maybe<Canvas>;
  canvases: Array<Maybe<Canvas>>;
  canvasesConnection: CanvasConnection;
  channel?: Maybe<Channel>;
  channels: Array<Maybe<Channel>>;
  channelsConnection: ChannelConnection;
  company?: Maybe<Company>;
  companies: Array<Maybe<Company>>;
  companiesConnection: CompanyConnection;
  costStructure?: Maybe<CostStructure>;
  costStructures: Array<Maybe<CostStructure>>;
  costStructuresConnection: CostStructureConnection;
  customerRelationship?: Maybe<CustomerRelationship>;
  customerRelationships: Array<Maybe<CustomerRelationship>>;
  customerRelationshipsConnection: CustomerRelationshipConnection;
  customerSegment?: Maybe<CustomerSegment>;
  customerSegments: Array<Maybe<CustomerSegment>>;
  customerSegmentsConnection: CustomerSegmentConnection;
  keyActitvity?: Maybe<KeyActitvity>;
  keyActitvities: Array<Maybe<KeyActitvity>>;
  keyActitvitiesConnection: KeyActitvityConnection;
  keyPartner?: Maybe<KeyPartner>;
  keyPartners: Array<Maybe<KeyPartner>>;
  keyPartnersConnection: KeyPartnerConnection;
  keyResource?: Maybe<KeyResource>;
  keyResources: Array<Maybe<KeyResource>>;
  keyResourcesConnection: KeyResourceConnection;
  pattern?: Maybe<Pattern>;
  patterns: Array<Maybe<Pattern>>;
  patternsConnection: PatternConnection;
  project?: Maybe<Project>;
  projects: Array<Maybe<Project>>;
  projectsConnection: ProjectConnection;
  revenueStream?: Maybe<RevenueStream>;
  revenueStreams: Array<Maybe<RevenueStream>>;
  revenueStreamsConnection: RevenueStreamConnection;
  table?: Maybe<Table>;
  tables: Array<Maybe<Table>>;
  tablesConnection: TableConnection;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  usersConnection: UserConnection;
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


export type QueryGetKeyPartnerArgs = {
  id: Scalars['ID'];
};


export type QueryGetRevenueStreamArgs = {
  id: Scalars['ID'];
};


export type QueryCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type QueryUpdateCompanyArgs = {
  companyId: Scalars['ID'];
  data: CompanyUpdateInput;
};


export type QueryDeleteCompanyArgs = {
  companyId: Scalars['ID'];
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


export type QueryChannelArgs = {
  where: ChannelWhereUniqueInput;
};


export type QueryChannelsArgs = {
  where?: Maybe<ChannelWhereInput>;
  orderBy?: Maybe<ChannelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryChannelsConnectionArgs = {
  where?: Maybe<ChannelWhereInput>;
  orderBy?: Maybe<ChannelOrderByInput>;
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


export type QueryCostStructureArgs = {
  where: CostStructureWhereUniqueInput;
};


export type QueryCostStructuresArgs = {
  where?: Maybe<CostStructureWhereInput>;
  orderBy?: Maybe<CostStructureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCostStructuresConnectionArgs = {
  where?: Maybe<CostStructureWhereInput>;
  orderBy?: Maybe<CostStructureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCustomerRelationshipArgs = {
  where: CustomerRelationshipWhereUniqueInput;
};


export type QueryCustomerRelationshipsArgs = {
  where?: Maybe<CustomerRelationshipWhereInput>;
  orderBy?: Maybe<CustomerRelationshipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCustomerRelationshipsConnectionArgs = {
  where?: Maybe<CustomerRelationshipWhereInput>;
  orderBy?: Maybe<CustomerRelationshipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCustomerSegmentArgs = {
  where: CustomerSegmentWhereUniqueInput;
};


export type QueryCustomerSegmentsArgs = {
  where?: Maybe<CustomerSegmentWhereInput>;
  orderBy?: Maybe<CustomerSegmentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCustomerSegmentsConnectionArgs = {
  where?: Maybe<CustomerSegmentWhereInput>;
  orderBy?: Maybe<CustomerSegmentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyActitvityArgs = {
  where: KeyActitvityWhereUniqueInput;
};


export type QueryKeyActitvitiesArgs = {
  where?: Maybe<KeyActitvityWhereInput>;
  orderBy?: Maybe<KeyActitvityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyActitvitiesConnectionArgs = {
  where?: Maybe<KeyActitvityWhereInput>;
  orderBy?: Maybe<KeyActitvityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyPartnerArgs = {
  where: KeyPartnerWhereUniqueInput;
};


export type QueryKeyPartnersArgs = {
  where?: Maybe<KeyPartnerWhereInput>;
  orderBy?: Maybe<KeyPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyPartnersConnectionArgs = {
  where?: Maybe<KeyPartnerWhereInput>;
  orderBy?: Maybe<KeyPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyResourceArgs = {
  where: KeyResourceWhereUniqueInput;
};


export type QueryKeyResourcesArgs = {
  where?: Maybe<KeyResourceWhereInput>;
  orderBy?: Maybe<KeyResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryKeyResourcesConnectionArgs = {
  where?: Maybe<KeyResourceWhereInput>;
  orderBy?: Maybe<KeyResourceOrderByInput>;
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


export type QueryRevenueStreamArgs = {
  where: RevenueStreamWhereUniqueInput;
};


export type QueryRevenueStreamsArgs = {
  where?: Maybe<RevenueStreamWhereInput>;
  orderBy?: Maybe<RevenueStreamOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRevenueStreamsConnectionArgs = {
  where?: Maybe<RevenueStreamWhereInput>;
  orderBy?: Maybe<RevenueStreamOrderByInput>;
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
  /** User registration */
  registrate: User;
  /** Delete User */
  deleteUser?: Maybe<User>;
  createProject: Project;
  updateProject: Project;
  deleteProject: Project;
  createCanvas: Canvas;
  updateCanvas: Canvas;
  deleteCanvas: Canvas;
  createKeyPartner: KeyPartner;
  updateKeyPartner: KeyPartner;
  deleteKeyPartner: KeyPartner;
  createRevenueStream: RevenueStream;
  updateRevenueStream: RevenueStream;
  deleteRevenueStream: RevenueStream;
  createPattern: Pattern;
  updatePattern: Pattern;
  deletePattern: Pattern;
  updateManyCanvases: BatchPayload;
  upsertCanvas: Canvas;
  deleteManyCanvases: BatchPayload;
  createChannel: Channel;
  updateChannel?: Maybe<Channel>;
  updateManyChannels: BatchPayload;
  upsertChannel: Channel;
  deleteChannel?: Maybe<Channel>;
  deleteManyChannels: BatchPayload;
  createCompany: Company;
  updateCompany?: Maybe<Company>;
  updateManyCompanies: BatchPayload;
  upsertCompany: Company;
  deleteCompany?: Maybe<Company>;
  deleteManyCompanies: BatchPayload;
  createCostStructure: CostStructure;
  updateCostStructure?: Maybe<CostStructure>;
  updateManyCostStructures: BatchPayload;
  upsertCostStructure: CostStructure;
  deleteCostStructure?: Maybe<CostStructure>;
  deleteManyCostStructures: BatchPayload;
  createCustomerRelationship: CustomerRelationship;
  updateCustomerRelationship?: Maybe<CustomerRelationship>;
  updateManyCustomerRelationships: BatchPayload;
  upsertCustomerRelationship: CustomerRelationship;
  deleteCustomerRelationship?: Maybe<CustomerRelationship>;
  deleteManyCustomerRelationships: BatchPayload;
  createCustomerSegment: CustomerSegment;
  updateCustomerSegment?: Maybe<CustomerSegment>;
  updateManyCustomerSegments: BatchPayload;
  upsertCustomerSegment: CustomerSegment;
  deleteCustomerSegment?: Maybe<CustomerSegment>;
  deleteManyCustomerSegments: BatchPayload;
  createKeyActitvity: KeyActitvity;
  updateKeyActitvity?: Maybe<KeyActitvity>;
  updateManyKeyActitvities: BatchPayload;
  upsertKeyActitvity: KeyActitvity;
  deleteKeyActitvity?: Maybe<KeyActitvity>;
  deleteManyKeyActitvities: BatchPayload;
  updateManyKeyPartners: BatchPayload;
  upsertKeyPartner: KeyPartner;
  deleteManyKeyPartners: BatchPayload;
  createKeyResource: KeyResource;
  updateKeyResource?: Maybe<KeyResource>;
  updateManyKeyResources: BatchPayload;
  upsertKeyResource: KeyResource;
  deleteKeyResource?: Maybe<KeyResource>;
  deleteManyKeyResources: BatchPayload;
  updateManyPatterns: BatchPayload;
  upsertPattern: Pattern;
  deleteManyPatterns: BatchPayload;
  updateManyProjects: BatchPayload;
  upsertProject: Project;
  deleteManyProjects: BatchPayload;
  updateManyRevenueStreams: BatchPayload;
  upsertRevenueStream: RevenueStream;
  deleteManyRevenueStreams: BatchPayload;
  createTable: Table;
  updateTable?: Maybe<Table>;
  upsertTable: Table;
  deleteTable?: Maybe<Table>;
  deleteManyTables: BatchPayload;
  createUser: User;
  updateUser?: Maybe<User>;
  updateManyUsers: BatchPayload;
  upsertUser: User;
  deleteManyUsers: BatchPayload;
  createValueProposition: ValueProposition;
  updateValueProposition?: Maybe<ValueProposition>;
  updateManyValuePropositions: BatchPayload;
  upsertValueProposition: ValueProposition;
  deleteValueProposition?: Maybe<ValueProposition>;
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


export type MutationCreateKeyPartnerArgs = {
  data: KeyPartnerCreateInput;
};


export type MutationUpdateKeyPartnerArgs = {
  keyPartnerId: Scalars['ID'];
  data: KeyPartnerUpdateInput;
};


export type MutationDeleteKeyPartnerArgs = {
  keyPartnerId: Scalars['ID'];
};


export type MutationCreateRevenueStreamArgs = {
  data: RevenueStreamCreateInput;
};


export type MutationUpdateRevenueStreamArgs = {
  revenueStreamId: Scalars['ID'];
  data: RevenueStreamUpdateInput;
};


export type MutationDeleteRevenueStreamArgs = {
  revenueStreamId: Scalars['ID'];
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


export type MutationCreateChannelArgs = {
  data: ChannelCreateInput;
};


export type MutationUpdateChannelArgs = {
  data: ChannelUpdateInput;
  where: ChannelWhereUniqueInput;
};


export type MutationUpdateManyChannelsArgs = {
  data: ChannelUpdateManyMutationInput;
  where?: Maybe<ChannelWhereInput>;
};


export type MutationUpsertChannelArgs = {
  where: ChannelWhereUniqueInput;
  create: ChannelCreateInput;
  update: ChannelUpdateInput;
};


export type MutationDeleteChannelArgs = {
  where: ChannelWhereUniqueInput;
};


export type MutationDeleteManyChannelsArgs = {
  where?: Maybe<ChannelWhereInput>;
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


export type MutationCreateCostStructureArgs = {
  data: CostStructureCreateInput;
};


export type MutationUpdateCostStructureArgs = {
  data: CostStructureUpdateInput;
  where: CostStructureWhereUniqueInput;
};


export type MutationUpdateManyCostStructuresArgs = {
  data: CostStructureUpdateManyMutationInput;
  where?: Maybe<CostStructureWhereInput>;
};


export type MutationUpsertCostStructureArgs = {
  where: CostStructureWhereUniqueInput;
  create: CostStructureCreateInput;
  update: CostStructureUpdateInput;
};


export type MutationDeleteCostStructureArgs = {
  where: CostStructureWhereUniqueInput;
};


export type MutationDeleteManyCostStructuresArgs = {
  where?: Maybe<CostStructureWhereInput>;
};


export type MutationCreateCustomerRelationshipArgs = {
  data: CustomerRelationshipCreateInput;
};


export type MutationUpdateCustomerRelationshipArgs = {
  data: CustomerRelationshipUpdateInput;
  where: CustomerRelationshipWhereUniqueInput;
};


export type MutationUpdateManyCustomerRelationshipsArgs = {
  data: CustomerRelationshipUpdateManyMutationInput;
  where?: Maybe<CustomerRelationshipWhereInput>;
};


export type MutationUpsertCustomerRelationshipArgs = {
  where: CustomerRelationshipWhereUniqueInput;
  create: CustomerRelationshipCreateInput;
  update: CustomerRelationshipUpdateInput;
};


export type MutationDeleteCustomerRelationshipArgs = {
  where: CustomerRelationshipWhereUniqueInput;
};


export type MutationDeleteManyCustomerRelationshipsArgs = {
  where?: Maybe<CustomerRelationshipWhereInput>;
};


export type MutationCreateCustomerSegmentArgs = {
  data: CustomerSegmentCreateInput;
};


export type MutationUpdateCustomerSegmentArgs = {
  data: CustomerSegmentUpdateInput;
  where: CustomerSegmentWhereUniqueInput;
};


export type MutationUpdateManyCustomerSegmentsArgs = {
  data: CustomerSegmentUpdateManyMutationInput;
  where?: Maybe<CustomerSegmentWhereInput>;
};


export type MutationUpsertCustomerSegmentArgs = {
  where: CustomerSegmentWhereUniqueInput;
  create: CustomerSegmentCreateInput;
  update: CustomerSegmentUpdateInput;
};


export type MutationDeleteCustomerSegmentArgs = {
  where: CustomerSegmentWhereUniqueInput;
};


export type MutationDeleteManyCustomerSegmentsArgs = {
  where?: Maybe<CustomerSegmentWhereInput>;
};


export type MutationCreateKeyActitvityArgs = {
  data: KeyActitvityCreateInput;
};


export type MutationUpdateKeyActitvityArgs = {
  data: KeyActitvityUpdateInput;
  where: KeyActitvityWhereUniqueInput;
};


export type MutationUpdateManyKeyActitvitiesArgs = {
  data: KeyActitvityUpdateManyMutationInput;
  where?: Maybe<KeyActitvityWhereInput>;
};


export type MutationUpsertKeyActitvityArgs = {
  where: KeyActitvityWhereUniqueInput;
  create: KeyActitvityCreateInput;
  update: KeyActitvityUpdateInput;
};


export type MutationDeleteKeyActitvityArgs = {
  where: KeyActitvityWhereUniqueInput;
};


export type MutationDeleteManyKeyActitvitiesArgs = {
  where?: Maybe<KeyActitvityWhereInput>;
};


export type MutationUpdateManyKeyPartnersArgs = {
  data: KeyPartnerUpdateManyMutationInput;
  where?: Maybe<KeyPartnerWhereInput>;
};


export type MutationUpsertKeyPartnerArgs = {
  where: KeyPartnerWhereUniqueInput;
  create: KeyPartnerCreateInput;
  update: KeyPartnerUpdateInput;
};


export type MutationDeleteManyKeyPartnersArgs = {
  where?: Maybe<KeyPartnerWhereInput>;
};


export type MutationCreateKeyResourceArgs = {
  data: KeyResourceCreateInput;
};


export type MutationUpdateKeyResourceArgs = {
  data: KeyResourceUpdateInput;
  where: KeyResourceWhereUniqueInput;
};


export type MutationUpdateManyKeyResourcesArgs = {
  data: KeyResourceUpdateManyMutationInput;
  where?: Maybe<KeyResourceWhereInput>;
};


export type MutationUpsertKeyResourceArgs = {
  where: KeyResourceWhereUniqueInput;
  create: KeyResourceCreateInput;
  update: KeyResourceUpdateInput;
};


export type MutationDeleteKeyResourceArgs = {
  where: KeyResourceWhereUniqueInput;
};


export type MutationDeleteManyKeyResourcesArgs = {
  where?: Maybe<KeyResourceWhereInput>;
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


export type MutationUpdateManyRevenueStreamsArgs = {
  data: RevenueStreamUpdateManyMutationInput;
  where?: Maybe<RevenueStreamWhereInput>;
};


export type MutationUpsertRevenueStreamArgs = {
  where: RevenueStreamWhereUniqueInput;
  create: RevenueStreamCreateInput;
  update: RevenueStreamUpdateInput;
};


export type MutationDeleteManyRevenueStreamsArgs = {
  where?: Maybe<RevenueStreamWhereInput>;
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


export type MutationCreateValuePropositionArgs = {
  data: ValuePropositionCreateInput;
};


export type MutationUpdateValuePropositionArgs = {
  data: ValuePropositionUpdateInput;
  where: ValuePropositionWhereUniqueInput;
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


export type MutationDeleteValuePropositionArgs = {
  where: ValuePropositionWhereUniqueInput;
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
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
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

export type Table = {
  __typename?: 'Table';
  id: Scalars['ID'];
  key_partner_entry_ids?: Maybe<Array<KeyPartner>>;
  reventue_stream_entry_ids?: Maybe<Array<RevenueStream>>;
  key_activity_entry_ids?: Maybe<Array<KeyActitvity>>;
  customer_relationship_entry_ids?: Maybe<Array<CustomerRelationship>>;
  value_proposition_entry_ids?: Maybe<Array<ValueProposition>>;
  cost_structure_entry_ids?: Maybe<Array<CostStructure>>;
  customer_segment_entry_ids?: Maybe<Array<CustomerSegment>>;
  key_resource_entry_ids?: Maybe<Array<KeyResource>>;
  channel_entry_ids?: Maybe<Array<Channel>>;
};


export type TableKey_Partner_Entry_IdsArgs = {
  where?: Maybe<KeyPartnerWhereInput>;
  orderBy?: Maybe<KeyPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableReventue_Stream_Entry_IdsArgs = {
  where?: Maybe<RevenueStreamWhereInput>;
  orderBy?: Maybe<RevenueStreamOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableKey_Activity_Entry_IdsArgs = {
  where?: Maybe<KeyActitvityWhereInput>;
  orderBy?: Maybe<KeyActitvityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableCustomer_Relationship_Entry_IdsArgs = {
  where?: Maybe<CustomerRelationshipWhereInput>;
  orderBy?: Maybe<CustomerRelationshipOrderByInput>;
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


export type TableCost_Structure_Entry_IdsArgs = {
  where?: Maybe<CostStructureWhereInput>;
  orderBy?: Maybe<CostStructureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableCustomer_Segment_Entry_IdsArgs = {
  where?: Maybe<CustomerSegmentWhereInput>;
  orderBy?: Maybe<CustomerSegmentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableKey_Resource_Entry_IdsArgs = {
  where?: Maybe<KeyResourceWhereInput>;
  orderBy?: Maybe<KeyResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TableChannel_Entry_IdsArgs = {
  where?: Maybe<ChannelWhereInput>;
  orderBy?: Maybe<ChannelOrderByInput>;
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

export type KeyPartner = {
  __typename?: 'KeyPartner';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type KeyPartnerTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RevenueStream = {
  __typename?: 'RevenueStream';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type RevenueStreamTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ChannelTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ChannelWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ChannelWhereInput = {
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
  AND?: Maybe<Array<ChannelWhereInput>>;
  OR?: Maybe<Array<ChannelWhereInput>>;
  NOT?: Maybe<Array<ChannelWhereInput>>;
};

export enum ChannelOrderByInput {
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

export type ChannelConnection = {
  __typename?: 'ChannelConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ChannelEdge>>;
  aggregate: AggregateChannel;
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

export type CostStructure = {
  __typename?: 'CostStructure';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CostStructureTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CostStructureWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CostStructureWhereInput = {
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
  AND?: Maybe<Array<CostStructureWhereInput>>;
  OR?: Maybe<Array<CostStructureWhereInput>>;
  NOT?: Maybe<Array<CostStructureWhereInput>>;
};

export enum CostStructureOrderByInput {
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

export type CostStructureConnection = {
  __typename?: 'CostStructureConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CostStructureEdge>>;
  aggregate: AggregateCostStructure;
};

export type CustomerRelationship = {
  __typename?: 'CustomerRelationship';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CustomerRelationshipTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CustomerRelationshipWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CustomerRelationshipWhereInput = {
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
  AND?: Maybe<Array<CustomerRelationshipWhereInput>>;
  OR?: Maybe<Array<CustomerRelationshipWhereInput>>;
  NOT?: Maybe<Array<CustomerRelationshipWhereInput>>;
};

export enum CustomerRelationshipOrderByInput {
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

export type CustomerRelationshipConnection = {
  __typename?: 'CustomerRelationshipConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CustomerRelationshipEdge>>;
  aggregate: AggregateCustomerRelationship;
};

export type CustomerSegment = {
  __typename?: 'CustomerSegment';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CustomerSegmentTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CustomerSegmentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CustomerSegmentWhereInput = {
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
  AND?: Maybe<Array<CustomerSegmentWhereInput>>;
  OR?: Maybe<Array<CustomerSegmentWhereInput>>;
  NOT?: Maybe<Array<CustomerSegmentWhereInput>>;
};

export enum CustomerSegmentOrderByInput {
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

export type CustomerSegmentConnection = {
  __typename?: 'CustomerSegmentConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CustomerSegmentEdge>>;
  aggregate: AggregateCustomerSegment;
};

export type KeyActitvity = {
  __typename?: 'KeyActitvity';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type KeyActitvityTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type KeyActitvityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type KeyActitvityWhereInput = {
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
  AND?: Maybe<Array<KeyActitvityWhereInput>>;
  OR?: Maybe<Array<KeyActitvityWhereInput>>;
  NOT?: Maybe<Array<KeyActitvityWhereInput>>;
};

export enum KeyActitvityOrderByInput {
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

export type KeyActitvityConnection = {
  __typename?: 'KeyActitvityConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<KeyActitvityEdge>>;
  aggregate: AggregateKeyActitvity;
};

export type KeyPartnerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type KeyPartnerWhereInput = {
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
  AND?: Maybe<Array<KeyPartnerWhereInput>>;
  OR?: Maybe<Array<KeyPartnerWhereInput>>;
  NOT?: Maybe<Array<KeyPartnerWhereInput>>;
};

export enum KeyPartnerOrderByInput {
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

export type KeyPartnerConnection = {
  __typename?: 'KeyPartnerConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<KeyPartnerEdge>>;
  aggregate: AggregateKeyPartner;
};

export type KeyResource = {
  __typename?: 'KeyResource';
  id: Scalars['ID'];
  table_ids?: Maybe<Array<Table>>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: User;
  updatedBy: User;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type KeyResourceTable_IdsArgs = {
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<TableOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type KeyResourceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type KeyResourceWhereInput = {
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
  AND?: Maybe<Array<KeyResourceWhereInput>>;
  OR?: Maybe<Array<KeyResourceWhereInput>>;
  NOT?: Maybe<Array<KeyResourceWhereInput>>;
};

export enum KeyResourceOrderByInput {
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

export type KeyResourceConnection = {
  __typename?: 'KeyResourceConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<KeyResourceEdge>>;
  aggregate: AggregateKeyResource;
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

export type RevenueStreamWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RevenueStreamWhereInput = {
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
  AND?: Maybe<Array<RevenueStreamWhereInput>>;
  OR?: Maybe<Array<RevenueStreamWhereInput>>;
  NOT?: Maybe<Array<RevenueStreamWhereInput>>;
};

export enum RevenueStreamOrderByInput {
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

export type RevenueStreamConnection = {
  __typename?: 'RevenueStreamConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RevenueStreamEdge>>;
  aggregate: AggregateRevenueStream;
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
  key_partner_entry_ids_every?: Maybe<KeyPartnerWhereInput>;
  key_partner_entry_ids_some?: Maybe<KeyPartnerWhereInput>;
  key_partner_entry_ids_none?: Maybe<KeyPartnerWhereInput>;
  reventue_stream_entry_ids_every?: Maybe<RevenueStreamWhereInput>;
  reventue_stream_entry_ids_some?: Maybe<RevenueStreamWhereInput>;
  reventue_stream_entry_ids_none?: Maybe<RevenueStreamWhereInput>;
  key_activity_entry_ids_every?: Maybe<KeyActitvityWhereInput>;
  key_activity_entry_ids_some?: Maybe<KeyActitvityWhereInput>;
  key_activity_entry_ids_none?: Maybe<KeyActitvityWhereInput>;
  customer_relationship_entry_ids_every?: Maybe<CustomerRelationshipWhereInput>;
  customer_relationship_entry_ids_some?: Maybe<CustomerRelationshipWhereInput>;
  customer_relationship_entry_ids_none?: Maybe<CustomerRelationshipWhereInput>;
  value_proposition_entry_ids_every?: Maybe<ValuePropositionWhereInput>;
  value_proposition_entry_ids_some?: Maybe<ValuePropositionWhereInput>;
  value_proposition_entry_ids_none?: Maybe<ValuePropositionWhereInput>;
  cost_structure_entry_ids_every?: Maybe<CostStructureWhereInput>;
  cost_structure_entry_ids_some?: Maybe<CostStructureWhereInput>;
  cost_structure_entry_ids_none?: Maybe<CostStructureWhereInput>;
  customer_segment_entry_ids_every?: Maybe<CustomerSegmentWhereInput>;
  customer_segment_entry_ids_some?: Maybe<CustomerSegmentWhereInput>;
  customer_segment_entry_ids_none?: Maybe<CustomerSegmentWhereInput>;
  key_resource_entry_ids_every?: Maybe<KeyResourceWhereInput>;
  key_resource_entry_ids_some?: Maybe<KeyResourceWhereInput>;
  key_resource_entry_ids_none?: Maybe<KeyResourceWhereInput>;
  channel_entry_ids_every?: Maybe<ChannelWhereInput>;
  channel_entry_ids_some?: Maybe<ChannelWhereInput>;
  channel_entry_ids_none?: Maybe<ChannelWhereInput>;
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
  pattern_ids?: Maybe<PatternCreateManyWithoutCanvas_IdsInput>;
  table_id: TableCreateOneInput;
  name: Scalars['String'];
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CanvasUpdateInput = {
  project_id?: Maybe<ProjectUpdateOneRequiredWithoutCanvas_IdsInput>;
  pattern_ids?: Maybe<PatternUpdateManyWithoutCanvas_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  name?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type KeyPartnerCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutKey_Partner_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type KeyPartnerUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutKey_Partner_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type RevenueStreamCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutReventue_Stream_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RevenueStreamUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutReventue_Stream_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type PatternCreateInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutPattern_IdsInput>;
  table_id: TableCreateOneInput;
  company_ids?: Maybe<CompanyCreateManyWithoutPattern_IdsInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type PatternUpdateInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutPattern_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  company_ids?: Maybe<CompanyUpdateManyWithoutPattern_IdsInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Long'];
};

export type CanvasUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
};

export type ChannelCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutChannel_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ChannelUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutChannel_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ChannelUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type CompanyUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CostStructureCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutCost_Structure_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CostStructureUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutCost_Structure_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CostStructureUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type CustomerRelationshipCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutCustomer_Relationship_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CustomerRelationshipUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutCustomer_Relationship_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CustomerRelationshipUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type CustomerSegmentCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutCustomer_Segment_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CustomerSegmentUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutCustomer_Segment_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CustomerSegmentUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type KeyActitvityCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutKey_Activity_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type KeyActitvityUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutKey_Activity_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type KeyActitvityUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type KeyPartnerUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type KeyResourceCreateInput = {
  id?: Maybe<Scalars['ID']>;
  table_ids?: Maybe<TableCreateManyWithoutKey_Resource_Entry_IdsInput>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type KeyResourceUpdateInput = {
  table_ids?: Maybe<TableUpdateManyWithoutKey_Resource_Entry_IdsInput>;
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type KeyResourceUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type PatternUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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

export type RevenueStreamUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type TableCreateInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
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

export type ValuePropositionUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}


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

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
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

export type ChannelEdge = {
  __typename?: 'ChannelEdge';
  node: Channel;
  cursor: Scalars['String'];
};

export type AggregateChannel = {
  __typename?: 'AggregateChannel';
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

export type CostStructureEdge = {
  __typename?: 'CostStructureEdge';
  node: CostStructure;
  cursor: Scalars['String'];
};

export type AggregateCostStructure = {
  __typename?: 'AggregateCostStructure';
  count: Scalars['Int'];
};

export type CustomerRelationshipEdge = {
  __typename?: 'CustomerRelationshipEdge';
  node: CustomerRelationship;
  cursor: Scalars['String'];
};

export type AggregateCustomerRelationship = {
  __typename?: 'AggregateCustomerRelationship';
  count: Scalars['Int'];
};

export type CustomerSegmentEdge = {
  __typename?: 'CustomerSegmentEdge';
  node: CustomerSegment;
  cursor: Scalars['String'];
};

export type AggregateCustomerSegment = {
  __typename?: 'AggregateCustomerSegment';
  count: Scalars['Int'];
};

export type KeyActitvityEdge = {
  __typename?: 'KeyActitvityEdge';
  node: KeyActitvity;
  cursor: Scalars['String'];
};

export type AggregateKeyActitvity = {
  __typename?: 'AggregateKeyActitvity';
  count: Scalars['Int'];
};

export type KeyPartnerEdge = {
  __typename?: 'KeyPartnerEdge';
  node: KeyPartner;
  cursor: Scalars['String'];
};

export type AggregateKeyPartner = {
  __typename?: 'AggregateKeyPartner';
  count: Scalars['Int'];
};

export type KeyResourceEdge = {
  __typename?: 'KeyResourceEdge';
  node: KeyResource;
  cursor: Scalars['String'];
};

export type AggregateKeyResource = {
  __typename?: 'AggregateKeyResource';
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

export type RevenueStreamEdge = {
  __typename?: 'RevenueStreamEdge';
  node: RevenueStream;
  cursor: Scalars['String'];
};

export type AggregateRevenueStream = {
  __typename?: 'AggregateRevenueStream';
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

export type UserEdge = {
  __typename?: 'UserEdge';
  node: User;
  cursor: Scalars['String'];
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
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

export type TableCreateManyWithoutKey_Partner_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutKey_Partner_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutKey_Partner_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutKey_Partner_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutKey_Partner_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutKey_Partner_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutReventue_Stream_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutReventue_Stream_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutReventue_Stream_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutReventue_Stream_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutReventue_Stream_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutReventue_Stream_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type CanvasCreateManyWithoutPattern_IdsInput = {
  create?: Maybe<Array<CanvasCreateWithoutPattern_IdsInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
};

export type CompanyCreateManyWithoutPattern_IdsInput = {
  create?: Maybe<Array<CompanyCreateWithoutPattern_IdsInput>>;
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
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


export type TableCreateManyWithoutChannel_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutChannel_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutChannel_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutChannel_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutChannel_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutChannel_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutCost_Structure_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutCost_Structure_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutCost_Structure_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutCost_Structure_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutCost_Structure_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutCost_Structure_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutCustomer_Relationship_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutCustomer_Relationship_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutCustomer_Relationship_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutCustomer_Relationship_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutCustomer_Relationship_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutCustomer_Relationship_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutCustomer_Segment_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutCustomer_Segment_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutCustomer_Segment_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutCustomer_Segment_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutCustomer_Segment_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutCustomer_Segment_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutKey_Activity_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutKey_Activity_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutKey_Activity_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutKey_Activity_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutKey_Activity_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutKey_Activity_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type TableCreateManyWithoutKey_Resource_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutKey_Resource_Entry_IdsInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
};

export type TableUpdateManyWithoutKey_Resource_Entry_IdsInput = {
  create?: Maybe<Array<TableCreateWithoutKey_Resource_Entry_IdsInput>>;
  delete?: Maybe<Array<TableWhereUniqueInput>>;
  connect?: Maybe<Array<TableWhereUniqueInput>>;
  set?: Maybe<Array<TableWhereUniqueInput>>;
  disconnect?: Maybe<Array<TableWhereUniqueInput>>;
  update?: Maybe<Array<TableUpdateWithWhereUniqueWithoutKey_Resource_Entry_IdsInput>>;
  upsert?: Maybe<Array<TableUpsertWithWhereUniqueWithoutKey_Resource_Entry_IdsInput>>;
  deleteMany?: Maybe<Array<TableScalarWhereInput>>;
};

export type UserCreateOneWithoutProject_IdsInput = {
  create?: Maybe<UserCreateWithoutProject_IdsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type CanvasCreateManyWithoutProject_IdInput = {
  create?: Maybe<Array<CanvasCreateWithoutProject_IdInput>>;
  connect?: Maybe<Array<CanvasWhereUniqueInput>>;
};

export type KeyPartnerCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<KeyPartnerCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<KeyPartnerWhereUniqueInput>>;
};

export type RevenueStreamCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<RevenueStreamCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<RevenueStreamWhereUniqueInput>>;
};

export type KeyActitvityCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<KeyActitvityCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<KeyActitvityWhereUniqueInput>>;
};

export type CustomerRelationshipCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<CustomerRelationshipCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<CustomerRelationshipWhereUniqueInput>>;
};

export type ValuePropositionCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ValuePropositionCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ValuePropositionWhereUniqueInput>>;
};

export type CostStructureCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<CostStructureCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<CostStructureWhereUniqueInput>>;
};

export type CustomerSegmentCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<CustomerSegmentCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<CustomerSegmentWhereUniqueInput>>;
};

export type KeyResourceCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<KeyResourceCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<KeyResourceWhereUniqueInput>>;
};

export type ChannelCreateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ChannelCreateWithoutTable_IdsInput>>;
  connect?: Maybe<Array<ChannelWhereUniqueInput>>;
};

export type KeyPartnerUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<KeyPartnerCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<KeyPartnerWhereUniqueInput>>;
  connect?: Maybe<Array<KeyPartnerWhereUniqueInput>>;
  set?: Maybe<Array<KeyPartnerWhereUniqueInput>>;
  disconnect?: Maybe<Array<KeyPartnerWhereUniqueInput>>;
  update?: Maybe<Array<KeyPartnerUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<KeyPartnerUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<KeyPartnerScalarWhereInput>>;
  updateMany?: Maybe<Array<KeyPartnerUpdateManyWithWhereNestedInput>>;
};

export type RevenueStreamUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<RevenueStreamCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<RevenueStreamWhereUniqueInput>>;
  connect?: Maybe<Array<RevenueStreamWhereUniqueInput>>;
  set?: Maybe<Array<RevenueStreamWhereUniqueInput>>;
  disconnect?: Maybe<Array<RevenueStreamWhereUniqueInput>>;
  update?: Maybe<Array<RevenueStreamUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<RevenueStreamUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<RevenueStreamScalarWhereInput>>;
  updateMany?: Maybe<Array<RevenueStreamUpdateManyWithWhereNestedInput>>;
};

export type KeyActitvityUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<KeyActitvityCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<KeyActitvityWhereUniqueInput>>;
  connect?: Maybe<Array<KeyActitvityWhereUniqueInput>>;
  set?: Maybe<Array<KeyActitvityWhereUniqueInput>>;
  disconnect?: Maybe<Array<KeyActitvityWhereUniqueInput>>;
  update?: Maybe<Array<KeyActitvityUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<KeyActitvityUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<KeyActitvityScalarWhereInput>>;
  updateMany?: Maybe<Array<KeyActitvityUpdateManyWithWhereNestedInput>>;
};

export type CustomerRelationshipUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<CustomerRelationshipCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<CustomerRelationshipWhereUniqueInput>>;
  connect?: Maybe<Array<CustomerRelationshipWhereUniqueInput>>;
  set?: Maybe<Array<CustomerRelationshipWhereUniqueInput>>;
  disconnect?: Maybe<Array<CustomerRelationshipWhereUniqueInput>>;
  update?: Maybe<Array<CustomerRelationshipUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<CustomerRelationshipUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<CustomerRelationshipScalarWhereInput>>;
  updateMany?: Maybe<Array<CustomerRelationshipUpdateManyWithWhereNestedInput>>;
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

export type CostStructureUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<CostStructureCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<CostStructureWhereUniqueInput>>;
  connect?: Maybe<Array<CostStructureWhereUniqueInput>>;
  set?: Maybe<Array<CostStructureWhereUniqueInput>>;
  disconnect?: Maybe<Array<CostStructureWhereUniqueInput>>;
  update?: Maybe<Array<CostStructureUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<CostStructureUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<CostStructureScalarWhereInput>>;
  updateMany?: Maybe<Array<CostStructureUpdateManyWithWhereNestedInput>>;
};

export type CustomerSegmentUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<CustomerSegmentCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<CustomerSegmentWhereUniqueInput>>;
  connect?: Maybe<Array<CustomerSegmentWhereUniqueInput>>;
  set?: Maybe<Array<CustomerSegmentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CustomerSegmentWhereUniqueInput>>;
  update?: Maybe<Array<CustomerSegmentUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<CustomerSegmentUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<CustomerSegmentScalarWhereInput>>;
  updateMany?: Maybe<Array<CustomerSegmentUpdateManyWithWhereNestedInput>>;
};

export type KeyResourceUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<KeyResourceCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<KeyResourceWhereUniqueInput>>;
  connect?: Maybe<Array<KeyResourceWhereUniqueInput>>;
  set?: Maybe<Array<KeyResourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<KeyResourceWhereUniqueInput>>;
  update?: Maybe<Array<KeyResourceUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<KeyResourceUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<KeyResourceScalarWhereInput>>;
  updateMany?: Maybe<Array<KeyResourceUpdateManyWithWhereNestedInput>>;
};

export type ChannelUpdateManyWithoutTable_IdsInput = {
  create?: Maybe<Array<ChannelCreateWithoutTable_IdsInput>>;
  delete?: Maybe<Array<ChannelWhereUniqueInput>>;
  connect?: Maybe<Array<ChannelWhereUniqueInput>>;
  set?: Maybe<Array<ChannelWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChannelWhereUniqueInput>>;
  update?: Maybe<Array<ChannelUpdateWithWhereUniqueWithoutTable_IdsInput>>;
  upsert?: Maybe<Array<ChannelUpsertWithWhereUniqueWithoutTable_IdsInput>>;
  deleteMany?: Maybe<Array<ChannelScalarWhereInput>>;
  updateMany?: Maybe<Array<ChannelUpdateManyWithWhereNestedInput>>;
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

export type PatternCreateWithoutCompany_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  canvas_ids?: Maybe<CanvasCreateManyWithoutPattern_IdsInput>;
  table_id: TableCreateOneInput;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
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

export type PatternCreateWithoutCanvas_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  table_id: TableCreateOneInput;
  company_ids?: Maybe<CompanyCreateManyWithoutPattern_IdsInput>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
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

export type PatternUpdateWithWhereUniqueWithoutCanvas_IdsInput = {
  where: PatternWhereUniqueInput;
  data: PatternUpdateWithoutCanvas_IdsDataInput;
};

export type PatternUpsertWithWhereUniqueWithoutCanvas_IdsInput = {
  where: PatternWhereUniqueInput;
  update: PatternUpdateWithoutCanvas_IdsDataInput;
  create: PatternCreateWithoutCanvas_IdsInput;
};

export type TableUpdateDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type TableUpsertNestedInput = {
  update: TableUpdateDataInput;
  create: TableCreateInput;
};

export type TableCreateWithoutKey_Partner_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutKey_Partner_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutKey_Partner_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutKey_Partner_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutKey_Partner_Entry_IdsDataInput;
  create: TableCreateWithoutKey_Partner_Entry_IdsInput;
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

export type TableCreateWithoutReventue_Stream_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutReventue_Stream_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutReventue_Stream_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutReventue_Stream_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutReventue_Stream_Entry_IdsDataInput;
  create: TableCreateWithoutReventue_Stream_Entry_IdsInput;
};

export type CanvasCreateWithoutPattern_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  project_id: ProjectCreateOneWithoutCanvas_IdsInput;
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

export type TableCreateWithoutChannel_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutChannel_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutChannel_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutChannel_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutChannel_Entry_IdsDataInput;
  create: TableCreateWithoutChannel_Entry_IdsInput;
};

export type TableCreateWithoutCost_Structure_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutCost_Structure_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutCost_Structure_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutCost_Structure_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutCost_Structure_Entry_IdsDataInput;
  create: TableCreateWithoutCost_Structure_Entry_IdsInput;
};

export type TableCreateWithoutCustomer_Relationship_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutCustomer_Relationship_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutCustomer_Relationship_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutCustomer_Relationship_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutCustomer_Relationship_Entry_IdsDataInput;
  create: TableCreateWithoutCustomer_Relationship_Entry_IdsInput;
};

export type TableCreateWithoutCustomer_Segment_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutCustomer_Segment_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutCustomer_Segment_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutCustomer_Segment_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutCustomer_Segment_Entry_IdsDataInput;
  create: TableCreateWithoutCustomer_Segment_Entry_IdsInput;
};

export type TableCreateWithoutKey_Activity_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutKey_Activity_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutKey_Activity_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutKey_Activity_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutKey_Activity_Entry_IdsDataInput;
  create: TableCreateWithoutKey_Activity_Entry_IdsInput;
};

export type TableCreateWithoutKey_Resource_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithWhereUniqueWithoutKey_Resource_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  data: TableUpdateWithoutKey_Resource_Entry_IdsDataInput;
};

export type TableUpsertWithWhereUniqueWithoutKey_Resource_Entry_IdsInput = {
  where: TableWhereUniqueInput;
  update: TableUpdateWithoutKey_Resource_Entry_IdsDataInput;
  create: TableCreateWithoutKey_Resource_Entry_IdsInput;
};

export type KeyPartnerCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type RevenueStreamCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type KeyActitvityCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CustomerRelationshipCreateWithoutTable_IdsInput = {
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

export type CostStructureCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type CustomerSegmentCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type KeyResourceCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type ChannelCreateWithoutTable_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  createdBy: UserCreateOneInput;
  updatedBy: UserCreateOneInput;
};

export type KeyPartnerUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: KeyPartnerWhereUniqueInput;
  data: KeyPartnerUpdateWithoutTable_IdsDataInput;
};

export type KeyPartnerUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: KeyPartnerWhereUniqueInput;
  update: KeyPartnerUpdateWithoutTable_IdsDataInput;
  create: KeyPartnerCreateWithoutTable_IdsInput;
};

export type KeyPartnerScalarWhereInput = {
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
  AND?: Maybe<Array<KeyPartnerScalarWhereInput>>;
  OR?: Maybe<Array<KeyPartnerScalarWhereInput>>;
  NOT?: Maybe<Array<KeyPartnerScalarWhereInput>>;
};

export type KeyPartnerUpdateManyWithWhereNestedInput = {
  where: KeyPartnerScalarWhereInput;
  data: KeyPartnerUpdateManyDataInput;
};

export type RevenueStreamUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: RevenueStreamWhereUniqueInput;
  data: RevenueStreamUpdateWithoutTable_IdsDataInput;
};

export type RevenueStreamUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: RevenueStreamWhereUniqueInput;
  update: RevenueStreamUpdateWithoutTable_IdsDataInput;
  create: RevenueStreamCreateWithoutTable_IdsInput;
};

export type RevenueStreamScalarWhereInput = {
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
  AND?: Maybe<Array<RevenueStreamScalarWhereInput>>;
  OR?: Maybe<Array<RevenueStreamScalarWhereInput>>;
  NOT?: Maybe<Array<RevenueStreamScalarWhereInput>>;
};

export type RevenueStreamUpdateManyWithWhereNestedInput = {
  where: RevenueStreamScalarWhereInput;
  data: RevenueStreamUpdateManyDataInput;
};

export type KeyActitvityUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: KeyActitvityWhereUniqueInput;
  data: KeyActitvityUpdateWithoutTable_IdsDataInput;
};

export type KeyActitvityUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: KeyActitvityWhereUniqueInput;
  update: KeyActitvityUpdateWithoutTable_IdsDataInput;
  create: KeyActitvityCreateWithoutTable_IdsInput;
};

export type KeyActitvityScalarWhereInput = {
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
  AND?: Maybe<Array<KeyActitvityScalarWhereInput>>;
  OR?: Maybe<Array<KeyActitvityScalarWhereInput>>;
  NOT?: Maybe<Array<KeyActitvityScalarWhereInput>>;
};

export type KeyActitvityUpdateManyWithWhereNestedInput = {
  where: KeyActitvityScalarWhereInput;
  data: KeyActitvityUpdateManyDataInput;
};

export type CustomerRelationshipUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: CustomerRelationshipWhereUniqueInput;
  data: CustomerRelationshipUpdateWithoutTable_IdsDataInput;
};

export type CustomerRelationshipUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: CustomerRelationshipWhereUniqueInput;
  update: CustomerRelationshipUpdateWithoutTable_IdsDataInput;
  create: CustomerRelationshipCreateWithoutTable_IdsInput;
};

export type CustomerRelationshipScalarWhereInput = {
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
  AND?: Maybe<Array<CustomerRelationshipScalarWhereInput>>;
  OR?: Maybe<Array<CustomerRelationshipScalarWhereInput>>;
  NOT?: Maybe<Array<CustomerRelationshipScalarWhereInput>>;
};

export type CustomerRelationshipUpdateManyWithWhereNestedInput = {
  where: CustomerRelationshipScalarWhereInput;
  data: CustomerRelationshipUpdateManyDataInput;
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

export type CostStructureUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: CostStructureWhereUniqueInput;
  data: CostStructureUpdateWithoutTable_IdsDataInput;
};

export type CostStructureUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: CostStructureWhereUniqueInput;
  update: CostStructureUpdateWithoutTable_IdsDataInput;
  create: CostStructureCreateWithoutTable_IdsInput;
};

export type CostStructureScalarWhereInput = {
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
  AND?: Maybe<Array<CostStructureScalarWhereInput>>;
  OR?: Maybe<Array<CostStructureScalarWhereInput>>;
  NOT?: Maybe<Array<CostStructureScalarWhereInput>>;
};

export type CostStructureUpdateManyWithWhereNestedInput = {
  where: CostStructureScalarWhereInput;
  data: CostStructureUpdateManyDataInput;
};

export type CustomerSegmentUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: CustomerSegmentWhereUniqueInput;
  data: CustomerSegmentUpdateWithoutTable_IdsDataInput;
};

export type CustomerSegmentUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: CustomerSegmentWhereUniqueInput;
  update: CustomerSegmentUpdateWithoutTable_IdsDataInput;
  create: CustomerSegmentCreateWithoutTable_IdsInput;
};

export type CustomerSegmentScalarWhereInput = {
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
  AND?: Maybe<Array<CustomerSegmentScalarWhereInput>>;
  OR?: Maybe<Array<CustomerSegmentScalarWhereInput>>;
  NOT?: Maybe<Array<CustomerSegmentScalarWhereInput>>;
};

export type CustomerSegmentUpdateManyWithWhereNestedInput = {
  where: CustomerSegmentScalarWhereInput;
  data: CustomerSegmentUpdateManyDataInput;
};

export type KeyResourceUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: KeyResourceWhereUniqueInput;
  data: KeyResourceUpdateWithoutTable_IdsDataInput;
};

export type KeyResourceUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: KeyResourceWhereUniqueInput;
  update: KeyResourceUpdateWithoutTable_IdsDataInput;
  create: KeyResourceCreateWithoutTable_IdsInput;
};

export type KeyResourceScalarWhereInput = {
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
  AND?: Maybe<Array<KeyResourceScalarWhereInput>>;
  OR?: Maybe<Array<KeyResourceScalarWhereInput>>;
  NOT?: Maybe<Array<KeyResourceScalarWhereInput>>;
};

export type KeyResourceUpdateManyWithWhereNestedInput = {
  where: KeyResourceScalarWhereInput;
  data: KeyResourceUpdateManyDataInput;
};

export type ChannelUpdateWithWhereUniqueWithoutTable_IdsInput = {
  where: ChannelWhereUniqueInput;
  data: ChannelUpdateWithoutTable_IdsDataInput;
};

export type ChannelUpsertWithWhereUniqueWithoutTable_IdsInput = {
  where: ChannelWhereUniqueInput;
  update: ChannelUpdateWithoutTable_IdsDataInput;
  create: ChannelCreateWithoutTable_IdsInput;
};

export type ChannelScalarWhereInput = {
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
  AND?: Maybe<Array<ChannelScalarWhereInput>>;
  OR?: Maybe<Array<ChannelScalarWhereInput>>;
  NOT?: Maybe<Array<ChannelScalarWhereInput>>;
};

export type ChannelUpdateManyWithWhereNestedInput = {
  where: ChannelScalarWhereInput;
  data: ChannelUpdateManyDataInput;
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

export type TableCreateWithoutValue_Proposition_Entry_IdsInput = {
  id?: Maybe<Scalars['ID']>;
  key_partner_entry_ids?: Maybe<KeyPartnerCreateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamCreateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityCreateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipCreateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureCreateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentCreateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceCreateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelCreateManyWithoutTable_IdsInput>;
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

export type PatternUpdateWithoutCompany_IdsDataInput = {
  canvas_ids?: Maybe<CanvasUpdateManyWithoutPattern_IdsInput>;
  table_id?: Maybe<TableUpdateOneRequiredInput>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type PatternUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CanvasUpdateWithoutProject_IdDataInput = {
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
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type TableUpdateWithoutKey_Partner_Entry_IdsDataInput = {
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutReventue_Stream_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type CanvasUpdateWithoutPattern_IdsDataInput = {
  project_id?: Maybe<ProjectUpdateOneRequiredWithoutCanvas_IdsInput>;
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

export type TableUpdateWithoutChannel_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutCost_Structure_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutCustomer_Relationship_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutCustomer_Segment_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutKey_Activity_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type TableUpdateWithoutKey_Resource_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  value_proposition_entry_ids?: Maybe<ValuePropositionUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
};

export type KeyPartnerUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type KeyPartnerUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type RevenueStreamUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type RevenueStreamUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type KeyActitvityUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type KeyActitvityUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type CustomerRelationshipUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CustomerRelationshipUpdateManyDataInput = {
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

export type CostStructureUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CostStructureUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type CustomerSegmentUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type CustomerSegmentUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type KeyResourceUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type KeyResourceUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};

export type ChannelUpdateWithoutTable_IdsDataInput = {
  text?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserUpdateOneRequiredInput>;
  updatedBy?: Maybe<UserUpdateOneRequiredInput>;
};

export type ChannelUpdateManyDataInput = {
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

export type TableUpdateWithoutValue_Proposition_Entry_IdsDataInput = {
  key_partner_entry_ids?: Maybe<KeyPartnerUpdateManyWithoutTable_IdsInput>;
  reventue_stream_entry_ids?: Maybe<RevenueStreamUpdateManyWithoutTable_IdsInput>;
  key_activity_entry_ids?: Maybe<KeyActitvityUpdateManyWithoutTable_IdsInput>;
  customer_relationship_entry_ids?: Maybe<CustomerRelationshipUpdateManyWithoutTable_IdsInput>;
  cost_structure_entry_ids?: Maybe<CostStructureUpdateManyWithoutTable_IdsInput>;
  customer_segment_entry_ids?: Maybe<CustomerSegmentUpdateManyWithoutTable_IdsInput>;
  key_resource_entry_ids?: Maybe<KeyResourceUpdateManyWithoutTable_IdsInput>;
  channel_entry_ids?: Maybe<ChannelUpdateManyWithoutTable_IdsInput>;
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