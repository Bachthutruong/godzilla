/**
 * List of all the networks supported by the Uniswap Interface
 */
export enum SupportedChainId {
  MAINNET = 1,
  GOERLI = 5,

  ARBITRUM_ONE = 42161,
  ARBITRUM_GOERLI = 421613,

  OPTIMISM = 10,
  OPTIMISM_GOERLI = 420,

  POLYGON = 137,

  CELO = 42220,
}

export enum ChainName {
  MAINNET = 'mainnet',
  GOERLI = 'goerli',

  ARBITRUM_ONE = 'arbitrum-mainnet',
  ARBITRUM_GOERLI = 'arbitrum-goerli',

  OPTIMISM = 'optimism-mainnet',
  OPTIMISM_GOERLI = 'optimism-goerli',

  POLYGON = 'polygon-mainnet',

  CELO = 'celo',
}

export const CHAIN_NAMES_TO_IDS: { [chainName: string]: SupportedChainId } = {
  [ChainName.MAINNET]: SupportedChainId.MAINNET,
  [ChainName.GOERLI]: SupportedChainId.GOERLI,
  [ChainName.ARBITRUM_ONE]: SupportedChainId.ARBITRUM_ONE,
  [ChainName.ARBITRUM_GOERLI]: SupportedChainId.ARBITRUM_GOERLI,
  [ChainName.OPTIMISM]: SupportedChainId.OPTIMISM,
  [ChainName.OPTIMISM_GOERLI]: SupportedChainId.OPTIMISM_GOERLI,
  [ChainName.POLYGON]: SupportedChainId.POLYGON,
  [ChainName.CELO]: SupportedChainId.CELO,
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.POLYGON,
  SupportedChainId.OPTIMISM,
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.CELO,
]

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.GOERLI,
  SupportedChainId.POLYGON,
  SupportedChainId.CELO,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_GOERLI,
  SupportedChainId.OPTIMISM,
  SupportedChainId.OPTIMISM_GOERLI,
] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]
