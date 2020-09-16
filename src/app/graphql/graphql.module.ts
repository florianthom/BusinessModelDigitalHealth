import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkHandler, HttpLinkModule } from 'apollo-angular-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { HttpHeaders } from '@angular/common/http';
import { environment } from "@app/../environments/environment";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApolloModule
  ],
  exports: [ApolloModule, HttpLinkModule]
})


export class GraphQLModule
{
  private errorLink: ApolloLink;
  private wsEndpointLink: WebSocketLink;
  private subscriptionClient: SubscriptionClient;
  private httpEndpointLink: HttpLinkHandler;
  private linkChain: ApolloLink;

  constructor(private apollo: Apollo, private httpLink: HttpLink)
  {
    this.httpEndpointLink = httpLink.create({ uri: `${environment.api_url}` });
    
    // create ws link with options like authorization
    this.subscriptionClient = this.subscriptionClientLink();
    // @ts-ignore
    this.subscriptionClient.maxConnectTimeGenerator.setMin(10000);
    this.subscriptionClient.onError( ()=>this.subscriptionClient.close(false, false) );
    this.wsEndpointLink = new WebSocketLink(this.subscriptionClient);
    
    // ApolloLinks (~functions) are kind of middleware that allow to do actions to operations(~queries)
    //  they are called at the way TO the server and afterwards if response come FROM the server
    //  that allows logging e.g. needed time and so on
    //    i wrote ~functions and action but pay attention: the end of the list of ApolloLink.from([])
    //    is a ApolloLink too but it is "really" a "real" link e.g. to our server
    // sorting of the list is very important since the links will execute in order from the first one to the last one
    // httpAuthLink: set auth-header if availble
    // protocolSplit returnd für jede query den passenden Link: entweder für http oder wss
    this.linkChain = ApolloLink.from([this.httpAuthLink(),this.protocolSplit()]);
    apollo.create({ link: this.linkChain, cache: new InMemoryCache() });
  }


  // split: split(boolean-function, link used if return of boolean function is true, link if false)
  // returnd one of the two links as ApolloLinks -> so the right one
  protocolSplit = () => split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      this.wsEndpointLink,
      this.httpEndpointLink,
  )

  getToken = () => {
    const token = localStorage.getItem('token');
    return token ? token : undefined;
  }

  // sets auth-header if available in localstorage
  httpAuthLink = () => new ApolloLink((operation, forward) => {
    let token = this.getToken();
    if (token)
    {
      operation.setContext({ headers: (token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined) });
    }
    // how does forward know which is the next link? see: ApolloLink.from([...])
    return forward(operation);
  })

  subscriptionClientLink = () => new SubscriptionClient("wss://digital-health-backend.herokuapp.com/graphql", {
        // get headers asynchronously and set in connectionParams
        connectionParams: async () => {
          if (this.getToken()) {
            return { Authorization: `Bearer ${this.getToken()}` };
          }
        },
        lazy: true,
        // set reconnect to true for reconnecting whenever the connection is closed
        reconnect: true,
        timeout: 3000,
      }
  )
}