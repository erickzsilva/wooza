import { Device } from './device.model'

export interface Plan {
    sku: string
    franquia: string
    valor: string
    apararelho?: Device
    ativo: boolean
}