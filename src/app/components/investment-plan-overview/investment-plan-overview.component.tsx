'use client'

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { useEffect, useState } from 'react'
import {
  getAmountPerPeriod,
  getInterval,
  getLastPurchaseTime,
  getNamePlan,
  getUseETH,
  getUSDTtoETH,
  getUSDTtoUSD,
} from '~/app/service'

import { utils } from 'ethers'
import { Loading } from '~/components/loading'

import { convertInterval } from '~/lib/utils'

export function InvestmentPlanOverview() {
  const [namePlan, setNamePlan] = useState('')
  const [amountPerPeriod, setAmountPerPeriod] = useState('')
  const [interval, setInterval] = useState(0)
  const [lastPurchaseTime, setLastPurchaseTime] = useState<Date | null>(null)
  const [useETH, setUseETH] = useState(false)
  const [loading, setLoading] = useState(true)
  const [amountUSDtoETH, setAmountUSDtoETH] = useState('')
  const [amountUSDTtoUSD, setAmountUSDTtoUSD] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await getNamePlan()
        const result3 = await getAmountPerPeriod()
        const result4 = await getInterval()
        const result5 = await getLastPurchaseTime()
        const result6 = await getUseETH()

        const valueAmount = utils.formatEther(BigInt(result3 || '0'))
        const usdtToEthRate = await getUSDTtoETH(Number(valueAmount))
        const usdtToUSD = await getUSDTtoUSD(Number(valueAmount))

        setAmountUSDTtoUSD(usdtToUSD.toString())
        setAmountUSDtoETH(usdtToEthRate.toString())
        setNamePlan(result1)
        setAmountPerPeriod(valueAmount)
        setInterval(result4)
        setLastPurchaseTime(result5 ? new Date(result5 * 1000) : null)
        setUseETH(result6)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto text-white">
        <h1 className="text-4xl font-bold text-center mb-8">
          My Automatic Investment Plan
        </h1>

        <Loading />
      </div>
    )
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        My Automatic Investment Plan
      </h1>
      <div>
        <Card className="text-white bg-[#06101A] mb-8 rounded-none border-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8">
                {useETH ? (
                  <img src="/img/eth.svg" className="w-6 h-6" alt="eth" />
                ) : (
                  <img src="/img/btc.png" className="w-6 h-6" alt="btc" />
                )}
              </div>
              <div>
                <CardTitle className="text-2xl">{namePlan}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Automated Investment Plan
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="text-white bg-[#06101A] space-y-8 border-none">
            <div className="flex justify-between items-center rounded-lg bg-secondary/10 p-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Investment Schedule
                </p>
                <p className="text-2xl font-bold">
                  {`${amountPerPeriod} USDT`}
                </p>
                <p className="text-sm text-muted-foreground">{`Every ${convertInterval(
                  interval,
                )}`}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Plan Started</p>
                <p className="font-mono">
                  {lastPurchaseTime ? lastPurchaseTime.toLocaleString() : 'N/A'}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Total Invested
                  </p>
                  <p className="text-xl font-bold">{`${amountPerPeriod} USDT`}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">USD Value</p>
                  <p className="font-mono">{`≈ ${amountUSDTtoUSD} USD`}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">ETH Value</p>
                  <p className="font-mono">{`≈ ${amountUSDtoETH} ETH`}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-white bg-[#06101A] border-none rounded-none">
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Next Investment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23:45</div>
              <p className="text-xs text-muted-foreground">Minutes remaining</p>
            </CardContent>
          </Card>
          <Card className="text-white bg-[#06101A] border-none rounded-none">
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-muted-foreground">
                All transactions successful
              </p>
            </CardContent>
          </Card>
          <Card className="text-white bg-[#06101A] border-none rounded-none">
            <CardHeader>
              <CardTitle className="text-sm font-medium">Gas Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.00014 ETH</div>
              <p className="text-xs text-muted-foreground">Total gas fees</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
