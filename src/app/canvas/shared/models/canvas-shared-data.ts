import { Pattern, Strategy, StrategyPattern } from '@app/graphql/generated/graphql';

export interface CanvasSharedData
{
    currentPattern: Pattern,
    currentStrategy: Strategy,
    weightsBetweenPatternAndStrategy: StrategyPattern[]

  }