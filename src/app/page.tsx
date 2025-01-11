'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ItemListManager() {
  const [items, setItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()])
      setNewItem('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 p-4">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png"
            alt="Item List Manager Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-green-500 text-2xl font-medium">
            Item List Manager
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-medium text-gray-900 mb-6">Item List</h2>
        
        <div className="space-y-4">
          {/* Input and Button */}
          <Input
  type="text"
  placeholder="Enter item"
  value={newItem}
  onChange={(e) => setNewItem(e.target.value)}
  onKeyPress={handleKeyPress}
  className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
/>

<Button 
  onClick={handleAddItem}
  className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white font-normal text-lg py-3 rounded-lg"
>
  Add Item
</Button>


          {/* Items List */}
          {items.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}
