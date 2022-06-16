import { ALL_SUPPORTED_CHAIN_IDS } from 'constants/chains'
import { useMemo } from 'react'

import useActiveWeb3React from './connectWeb3/useActiveWeb3React'

function useOnSupportedNetwork() {
  const { chainId } = useActiveWeb3React()
  return useMemo(() => Boolean(chainId && ALL_SUPPORTED_CHAIN_IDS.includes(chainId)), [chainId])
}

export default useOnSupportedNetwork