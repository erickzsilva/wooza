import { Device } from './device.model'

export interface Plan {
    sku: string
    fraquia: string
    valor: string
    apararelho?: Device
    ativo: boolean
}