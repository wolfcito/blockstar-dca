'use client'

import { Card, CardContent, CardFooter } from '~/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { InvestmentPlanForm } from '~/components/investment-plan-form'
import { updatePlan } from '~/app/service'

interface DCASuccessProps {
  frecuency: string
  amount: string
  planName: string
}

export function DCASuccess({ frecuency, amount, planName }: DCASuccessProps) {
  const [pathLearn, setpathLearn] = useState('')
  const [frequencyValue, setFrequencyValue] = useState(86400)

  useEffect(() => {
    handleFrequencyChange(frecuency)
  }, [])

  console.log('frecuency, amount, planName', frecuency, amount, planName)
  const updateStrategy = async () => {
    const numericAmount = Number(amount)

    if (!planName || planName.trim() === '') {
      alert('Invalid plan name: cannot be empty')
      return
    }

    if (isNaN(numericAmount) || numericAmount < 0.1) {
      alert('Invalid amount: must be a number greater than or equal to 0.1')
      return
    }

    // Convert ETH to wei (e.g., if input is in ETH, convert it)
    const amountInWei = Math.floor(numericAmount * 1e18) // Convert to number in wei

    try {
      const result = await updatePlan(
        amountInWei,
        frequencyValue,
        planName,
        true,
      )
      window.location.href = '/plan'
      // console.log('Update successful:', result)
    } catch (error) {
      console.error('Error updating strategy:', error)
    }
  }

  const handleFrequencyChange = (frecuency: string) => {
    switch (frecuency) {
      case 'hourly':
        setFrequencyValue(3600)

        break
      case 'daily':
        setFrequencyValue(86400)

        break
      case 'weekly':
        setFrequencyValue(604800)

        break
      case 'monthly':
        setFrequencyValue(2592000)

        break
      default:
        setFrequencyValue(86400)
    }
  }

  if (pathLearn === 'home') {
    return <InvestmentPlanForm />
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-4xl font-bold text-center mb-8">
        Properly scheduled planning
      </h2>

      <Card className="w-full max-w-2xl bg-[#06101A] text-white border-none shadow-xl rounded-none mx-auto">
        <CardContent className="pt-6">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Creation Date</span>
              <span>{new Date().toDateString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Frequency</span>
              <span>{frecuency.toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Subscription Amount</span>
              <span>{amount} USDT</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Allocation</span>
              <span>ETH 100%</span>
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
          <button
            className="flex-1 bg-gray-700 hover:bg-gray-600/90 text-white px-4 py-2 flex items-center justify-center"
            onClick={() => setpathLearn('home')}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2"
            onClick={updateStrategy}
          >
            Confirm
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}
