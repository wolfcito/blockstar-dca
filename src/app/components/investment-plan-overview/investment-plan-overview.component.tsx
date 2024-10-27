import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Bitcoin, HelpCircle, PenSquare } from 'lucide-react'

export function InvestmentPlanOverview() {
  return (
    <div className="bg-[#0a192f] text-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          My Automatic Investment Plan
        </h1>
        <div className="py-2">My Portfolio</div>

        <Card className="bg-[#1e2a3a] border-none shadow-lg rounded-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <img src="/img/btc.png" className="w-6 h-6" alt="btc" />
              <p className="text-white">Test</p>
            </CardTitle>
            {/* <PenSquare className="h-4 w-4 text-[#f26419]" /> */}
          </CardHeader>
          <CardContent>
            <p className="text-xs text-gray-400">Invest 10 USDT Weekly</p>
            <div className="mt-4 space-y-2 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-400">Total Invested</span>
                  <HelpCircle className="h-3 w-3 text-gray-400" />
                </div>
                <span className="font-semibold">≈ 10 USDT</span>
              </div>
              <div className="text-right text-xs text-gray-400">≈ 10 USD</div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Plan Started</span>
                <span className="text-sm">2024-10-29 02:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  Unrealized Gains and Losses
                </span>
                <span className="text-sm">0.00 USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Status</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm">In Progress</span>
                  {/* <Switch checked={true} /> */}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
