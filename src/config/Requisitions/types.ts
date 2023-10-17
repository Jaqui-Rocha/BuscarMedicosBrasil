export interface PropsDashbord {
  doctor: {
    total: number
    available: number
    unavailable: number
  }
  contractor: {
    total: number
    available: number
    unavailable: number
  }
}
export interface PropsUsers {
  totalPages: number
  totalElements: number
  size: number
  content: {
    id: number
    email: string
    firstName: string
    lastName: string
    profiles: {
      id: number
      name: string
    }
    specialties: {
      id: number
      name: string
      enabled: boolean
    }
    phone: string
    address: {
      zipcode: string
      street: string
      number: string
      neighborhood: string
      city: string
      state: string
      complement: string
    }
    enabled: boolean
  }
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  first: boolean
  last: boolean
  numberOfElements: number
  pageable: {
    offset: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
  }
  empty: boolean
}
