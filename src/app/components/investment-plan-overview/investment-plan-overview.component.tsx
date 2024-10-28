import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { HelpCircle } from 'lucide-react'

export function InvestmentPlanOverview() {
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
              <img src="/img/btc.png" className="w-6 h-6" alt="btc" />
              <p className="text-white text-lg font-bold">Test</p>
            </div>
          </CardTitle>
          {/* <PenSquare className="h-4 w-4 text-[#f26419]" /> */}
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Invest 10 USDT Weekly</p>
          <div className="mt-4 text-white flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <span className="text-gray-400">Total Invested</span>
                <HelpCircle className="h-3 w-3 text-gray-400" />
              </div>
              <span className="font-semibold">≈ 10 USDT</span>
            </div>
            <div className="text-right text-gray-400">≈ 10 USD</div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Plan Started</span>
              <span>2024-10-29 02:00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Unrealized Gains and Losses</span>
              <span className="text-end">0.00 USD</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Status</span>
              <div className="flex items-center gap-2">
                <span className="text-[#f26419]">In Progress</span>
                {/* <Switch checked={true} /> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
