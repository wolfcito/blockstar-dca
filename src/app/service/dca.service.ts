import axios from 'axios'

const BLOCKSTAR_CONTRACT = '0x4e249d054475d2b4cb11ef5b7ba25fe26e64c056' // '0xc760B2a742618AdE9eBFb49023eDF4DfcC6E208d'
const SENDER_ADDRESS = '0x8306a15c09e4704c340a58Af451E640E7D399a1e'

const VOTTUN_API_URL = 'https://api.vottun.tech/core/v1/evm/transact/view'
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  'x-application-vkn': process.env.NEXT_PUBLIC_APP_ID,
}

async function queryContract(
  method: string,
  params: any[] = [],
): Promise<VottunResponse> {
  try {
    const response = await axios.post(
      VOTTUN_API_URL,
      {
        contractAddress: BLOCKSTAR_CONTRACT,
        contractSpecsId: 12240,
        blockchainNetwork: 421614,
        sender: SENDER_ADDRESS,
        method,
        params,
      },
      { headers: HEADERS },
    )
    console.log(`${method} response:`, response.data)
    return response
  } catch (error) {
    console.error(`Error fetching ${method}:`, error)
    throw error
  }
}

// Individual functions with TypeScript types for each query and action
export async function getOwner(): Promise<string> {
  const result = await queryContract('owner')
  return result.data
}

export async function getNamePlan(): Promise<string> {
  const result = await queryContract('planName')
  return result.data
}

export async function getAmountPerPeriod(): Promise<number> {
  const result = await queryContract('amountPerPeriod')
  return result.data
}

export async function getInterval(): Promise<number> {
  const result = await queryContract('interval')
  return result.data
}

export async function getLastPurchaseTime(): Promise<number> {
  const result = await queryContract('lastPurchaseTime')
  return result.data
}

export async function getUseETH(): Promise<boolean> {
  const result = await queryContract('useETH')
  return result.data
}

export async function getWBTCAddress(): Promise<string> {
  const result = await queryContract('wbtc')
  return result.data
}

// Transactional functions
export async function deposit(): Promise<VottunResponse> {
  return await queryContract('deposit', [])
}

export async function depositToken(amount: number): Promise<VottunResponse> {
  return await queryContract('depositToken', [amount])
}

export async function executeDCA(recipient: string): Promise<VottunResponse> {
  return await queryContract('executeDCA', [recipient])
}

export async function updatePlan(
  amountPerPeriod: number,
  interval: number,
  planName: string,
  useETH: boolean,
): Promise<VottunResponse> {
  return await queryContract('updatePlan', [
    amountPerPeriod,
    interval,
    planName,
    useETH,
  ])
}

interface VottunResponse {
  data: any
}
