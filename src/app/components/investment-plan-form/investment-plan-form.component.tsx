'use client'

import { useState } from 'react'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { DCASuccess } from '~/components/plan-confirmation'

const people = [
  {
    id: 1,
    name: 'USDT',
    avatar: 'img/usdt.png',
  },
]

const DAILY = 'daily'
export function InvestmentPlanForm() {
  const [selected, setSelected] = useState(people[0])
  const [showSuccess, setShowSuccess] = useState(false)
  const [planName, setPlanName] = useState('')
  const [frequency, setFrequency] = useState(DAILY)
  const [amount, setAmount] = useState('')

  const handleAmountChange = (event: any) => {
    const value = event.target.value

    if (!isNaN(value) && parseFloat(value) >= 0.1) {
      setAmount(value)
    } else if (value === '') {
      setAmount('')
    }
  }

  const planConfirmation = () => {
    const numericAmount = Number(amount)
    console.log('Plan confirmation')
    if (!planName || planName.trim() === '') {
      alert('Invalid plan name: cannot be empty')
      return
    }

    if (isNaN(numericAmount) || numericAmount < 0.1) {
      alert('Invalid amount: must be a number greater than or equal to 0.1')
      return
    }

    setShowSuccess(
      frequency.length > 0 && amount.length > 0 && planName.length > 0,
    )
  }

  if (showSuccess) {
    return (
      <DCASuccess frecuency={frequency} amount={amount} planName={planName} />
    )
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        Unlock you
        <br />
        Financial Potencial
      </h1>
      <div className="bg-[#06101A] p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Create your DCA's plan</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="plan-name"
                className="block text-sm font-medium mb-2"
              >
                Plan's name
              </label>
              <input
                id="plan-name"
                className="w-full bg-[#0a192f] border-[#f26419] text-white placeholder-gray-500 p-2 outline outline-[#f26419]"
                placeholder="Create a plan here"
                value={planName}
                onChange={(e) => setPlanName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Coin Allocation (100% / 100%)
              </label>
              <div className="flex items-center space-x-2 p-2 bg-[#0a192f] border border-[#f26419]">
                <img src="/img/eth.svg" className="w-6 h-6" alt="eth" />
                <span className="flex-grow">ETH</span>
                <span>100 %</span>
              </div>
            </div>
            <div className="flex lg:space-x-4 flex-col lg:flex-row gap-2">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium mt-5 mb-2"
                >
                  Amount Per Period
                </label>
                <input
                  id="amount"
                  className="w-full bg-[#0a192f] border-[#f26419] text-white placeholder-gray-500 p-2 outline outline-[#f26419]"
                  placeholder="The minimum amount is 0.1 USDT"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mt-3 mb-1">
                  Available: 122 USDT
                </label>
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-2">
                    <ListboxButton className="w-full cursor-default text-white py-2.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-[#f26419] focus:outline-none focus:ring-2 focus:ring-[#f26419] sm:leading-6">
                      <span className="flex items-center">
                        <img
                          alt=""
                          src={selected.avatar}
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                        <span className="ml-3 block truncate">
                          {selected.name}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                    >
                      {people.map((person) => (
                        <ListboxOption
                          key={person.id}
                          value={person}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-[#f26419] data-[focus]:text-white"
                        >
                          <div className="flex items-center">
                            <img
                              alt=""
                              src={person.avatar}
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                            />
                            <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                              {person.name}
                            </span>
                          </div>

                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
            </div>
            <div>
              <label
                htmlFor="frequency"
                className="block text-sm font-medium mb-2"
              >
                Frequency
              </label>
              <select
                id="frequency"
                name="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full bg-[#0a192f] border-[#f26419] text-white p-2.5 outline outline-[#f26419]"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <button className="border-[#f26419] text-[#f26419] hover:bg-white/90 px-4 py-2 bg-white">
              Cancel
            </button>
            <button
              type="button"
              className="bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2"
              onClick={planConfirmation}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
