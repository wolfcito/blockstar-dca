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

export function InvestmentPlanForm() {
  const [selected, setSelected] = useState(people[0])
  const [showSuccess, setShowSuccess] = useState(false)

  if (showSuccess) {
    return <DCASuccess />
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        Begin to learn
        <br />
        how to invest wisely
      </h1>
      <div className="bg-[#06101A] p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Create your DCA's plan</h2>
        <form>
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
                placeholder="Create a plan here (Optional)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Coin Allocation (100% / 100%)
              </label>
              <div className="flex items-center space-x-2 p-2 bg-[#0a192f] border border-[#f26419]">
                {/* <Bitcoin className="text-[#f26419]" size={24} /> */}
                <img src="/img/btc.png" className="w-6 h-6" alt="btc" />
                <span className="flex-grow">BTC</span>
                <span>100 %</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-grow">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium mb-2"
                >
                  Amount Per Period
                </label>
                <input
                  id="amount"
                  className="w-full bg-[#0a192f] border-[#f26419] text-white placeholder-gray-500 p-2 outline outline-[#f26419]"
                  placeholder="The minimum amount is 0.1 USDT"
                />
              </div>
              <div className="w-1/4">
                <label className="block text-sm font-medium mb-2">
                  Available: 122 USDT
                </label>
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-2">
                    <ListboxButton className="w-full cursor-default text-white py-2.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-[#f26419] focus:outline-none focus:ring-2 focus:ring-[#f26419] sm:leading-6 ">
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
                defaultValue="Time, day, hour"
                className="w-full bg-[#0a192f] border-[#f26419] text-white p-2.5 outline outline-[#f26419]"
              >
                <option value={'hourly'}>Hourly</option>
                <option value={'daily'}>Daily</option>
                <option value={'weekly'}>Weekly</option>
                <option value={'monthly'}>Monthly</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <button className="border-[#f26419] text-[#f26419] hover:bg-white/90 px-4 py-2 bg-white">
              Cancel
            </button>
            <button
              className="bg-[#f26419] hover:bg-[#f26419]/90 text-white px-4 py-2"
              onClick={() => setShowSuccess(true)}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
