'use client'

import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { HelpCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  getAmountPerPeriod,
  getInterval,
  getLastPurchaseTime,
  getNamePlan,
  getOwner,
  getUseETH,
} from '~/app/service'
import { convertInterval } from '~/lib/utils'
import { utils } from 'ethers'

export function InvestmentPlanOverview() {
  const [namePlan, setNamePlan] = useState('')
  const [owner, setOwner] = useState('')
  const [amountPerPeriod, setAmountPerPeriod] = useState('')
  const [interval, setInterval] = useState(0)
  const [lastPurchaseTime, setLastPurchaseTime] = useState<Date | null>(null)

  const [useETH, setUseETH] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await getNamePlan()
        const result2 = await getOwner()
        const result3 = await getAmountPerPeriod()
        const result4 = await getInterval()
        const result5 = await getLastPurchaseTime()
        const result6 = await getUseETH()

        setNamePlan(result1)
        setOwner(result2)
        setAmountPerPeriod(utils.formatEther(BigInt(result3 || '0'))) // Ensuring result3 is always a valid value
        setInterval(result4)
        setLastPurchaseTime(result5 ? new Date(result5 * 1000) : null)
        setUseETH(result6)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        My Automatic Investment Plan
      </h1>

      <Card className="bg-[#06101A] border-none rounded-none max-w-2xl  mx-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium flex items-center gap-2 flex-col text-white">
            <div className="text-2xl font-semibold mb-6">My Portfolio</div>
            <div className="flex gap-2 w-full">
              {useETH ? (
                <img src="/img/eth.svg" className="w-6 h-6" alt="btc" />
              ) : (
                <img src="/img/btc.png" className="w-6 h-6" alt="btc" />
              )}

              <p className="text-white text-lg font-bold">{namePlan}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-white">
          <div className="mt-4 text-white flex flex-col gap-2">
            <p className="text-white text-right">
              {`Invest ${amountPerPeriod} ${
                useETH ? 'ETH' : 'wBTC'
              } every ${convertInterval(interval)}`}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Owner</span>
              <span>{owner}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Plan Started</span>
              <span>
                {lastPurchaseTime ? lastPurchaseTime.toLocaleString() : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="text-gray-400">Total Invested</span>
                <HelpCircle className="h-3 w-3 text-gray-400" />
              </div>
              <span className="font-semibold">≈ 10 USDT</span>
            </div>
            <div className="text-right text-gray-400">≈ 10 USD</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
