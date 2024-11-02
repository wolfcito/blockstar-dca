export const getUSDTtoETH = async (value: number) => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Ctether&vs_currencies=usd',
    )
    const data = await response.json()

    const usdtInUSD = data.tether.usd
    const ethInUSD = data.ethereum.usd

    const usdtToEthRate = usdtInUSD / ethInUSD

    return value * usdtToEthRate
  } catch (error) {
    console.error('Error al obtener la conversión de USDT a ETH:', error)
    return 0
  }
}

export const getUSDTtoUSD = async (value: number) => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd',
    )
    const data = await response.json()

    const usdtInUSD = data.tether.usd

    return usdtInUSD * value
  } catch (error) {
    console.error('Error al obtener la conversión de USDT a USD:', error)
    return 0
  }
}
