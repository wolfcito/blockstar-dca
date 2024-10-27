'use client'

import { Card, CardContent, CardFooter } from '~/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { InvestmentPlanForm } from '~/components/investment-plan-form'
import Link from 'next/link'

export function DCASuccess() {
  const [pathLearn, setpathLearn] = useState('')

  if (pathLearn === 'home') {
    return <InvestmentPlanForm />
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#1e2a3a] text-white border-none shadow-xl rounded-none">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">
            Properly scheduled planning
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Creation Date</span>
              <span>2024-10-27 12:45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Starts from</span>
              <span>2024-10-29 02:00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Frequency</span>
              <span>Weekly, Tuesday, 02:00 (UTC-4)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Subscription Amount</span>
              <span>10 USDT</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Allocation</span>
              <span>BTC 100%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">
                Where to place purchased assets?
              </span>
              <span>SPOT</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <Link
            className="flex-1 bg-gray-700 hover:bg-gray-600/90 text-white px-4 py-2 flex items-center justify-center"
            href="/plan"
          >
            View Plan
          </Link>
          <button
            className="flex-1 bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2"
            onClick={() => setpathLearn('home')}
          >
            OK
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}
