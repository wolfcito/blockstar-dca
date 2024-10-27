import { useState } from 'react'
import { getNamePlan, getOwner } from '~/app/service'

export function Landing() {
  const [owner, setOwner] = useState('')
  const [namePlan, setNamePlan] = useState('')
  const fetchData = async () => {
    const result = await getOwner()
    const result2 = await getNamePlan()

    setOwner(result)
    setNamePlan(result2)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#0a192f] text-white flex-col">
      <div className="flex h-32 flex-col border border-white p-2">
        <button
          className="bg-[#f26419] text-white px-4 py-2 flex text-center gap-2 font-bold mb-2"
          onClick={fetchData}
        >
          DCA Plan
        </button>
        <div className="flex h-32">Name Plan: {namePlan}</div>
        <div className="flex h-32">Owner: {owner}</div>
      </div>
    </div>
  )
}
