import React from 'react'

export interface IdataCampaing {
    id: number
    category: string
    city: string
    qty_day: number
    amount: number
    role: number
}

const campaing = React.createContext<IdataCampaing|null>(null)

export const ProviderCampaing = campaing.Provider
export const ConsumerCamaping = campaing.Consumer
