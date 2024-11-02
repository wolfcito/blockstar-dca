import axios from 'axios'

const BLOCKSTAR_CONTRACT = '0xc760B2a742618AdE9eBFb49023eDF4DfcC6E208d'
const SENDER_ADDRESS = '0x8306a15c09e4704c340a58Af451E640E7D399a1e'

const VOTTUN_VIEW_API_URL = 'https://api.vottun.tech/core/v1/evm/transact/view'
const VOTTUN_MUTABLE_API_URL =
  'https://api.vottun.tech/core/v1/evm/transact/mutable'
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  'x-application-vkn': process.env.NEXT_PUBLIC_APP_ID,
}

interface VottunResponse {
  data: any
}

// View function
async function queryContract(
  method: string,
  params: any[] = [],
): Promise<VottunResponse> {
  try {
    const response = await axios.post(
      VOTTUN_VIEW_API_URL,
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
    // console.log(`${method} response:`, response)
    return response
  } catch (error) {
    console.error(`Error fetching ${method}:`, error)
    throw error
  }
}

// Transaction function
async function sendTransaction(
  method: string,
  params: any[] = [],
  value: number = 0, // Specify value as an integer in wei
): Promise<VottunResponse> {
  try {
    const response = await axios.post(
      VOTTUN_MUTABLE_API_URL,
      {
        contractAddress: BLOCKSTAR_CONTRACT,
        contractSpecsId: 12240,
        blockchainNetwork: 421614,
        sender: SENDER_ADDRESS,
        method,
        params,
        value, // Now using an integer for value
      },
      { headers: HEADERS },
    )
    // console.log(`${method} transaction response:`, response)
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `Error executing ${method} transaction:`,
        error.response?.data || error.message,
      )
    } else {
      console.error(`Error executing ${method} transaction:`, error)
    }
    throw error
  }
}

// Individual functions
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
  // Example with value (sending 0.1 ETH)
  const valueInWei = Math.floor(0.1 * 1e18) // 0.1 ETH in wei as an integer
  return await sendTransaction('deposit', [], valueInWei)
}

export async function depositToken(amount: number): Promise<VottunResponse> {
  return await sendTransaction('depositToken', [amount.toString()])
}

export async function executeDCA(recipient: string): Promise<VottunResponse> {
  return await sendTransaction('executeDCA', [recipient])
}

export async function updatePlan(
  amountPerPeriod: number,
  interval: number,
  planName: string,
  useETH: boolean,
): Promise<VottunResponse> {
  return await sendTransaction('updatePlan', [
    amountPerPeriod,
    interval,
    planName,
    useETH,
  ])
}
