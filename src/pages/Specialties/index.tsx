import { TableComponent } from '@/components/table'
import { getSpecialties } from '@/config/Requisitions'
import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import visualizar from '../../assets/icons/visualizar.png'
import edit from '../../assets/icons/edit.png'
import delet from '../../assets/icons/delete.png'
import ModalDelete from '@/components/modal/modalDelete/modalDelete'
import { Switch } from '@mui/material'
import plus from '../../assets/icons/plus.png'

import { Button } from '@/components/ui/uiForm/button'

import { AiOutlineSearch } from 'react-icons/ai'
import {
  Centralizar,
  Search,
  Search1,
  Container,
  Div
} from './styleSpecialties'

type SpecialtiesRow = {
  name: string
  enabled: ReactNode
  actions: ReactNode
}
const Specialties = () => {
  const [invisible, setVisible] = useState(false)
  const [id, setId] = useState(0)
  const [specialties, setSpecialties] = useState<SpecialtiesRow[]>([])
  const tableColumns = ['Nome especialidade', 'Situação', 'Ações']

  const toggleVisible = (currentId: number) => {
    setVisible(!invisible)
    setId(currentId)
  }

  useEffect(() => {
    const fetchSpecialties = async () => {
      const result = await getSpecialties()
      const formated = result?.reduce((accumulator, currentValue) => {
        const specialty = {
          name: currentValue.name,
          enabled: (
            <div>
              <Switch type="switch" checked={currentValue.enabled} />
              <label>{currentValue.enabled ? 'Ativo' : 'Inativo'}</label>
            </div>
          ),
          actions: (
            <div>
              <Link to={`especialidades/visualizar/${currentValue.id}`}>
                <img src={visualizar} />
              </Link>
              <Link to={`especialidades/editar/${currentValue.id}`}>
                <img src={edit} />
              </Link>
              <Link to="" onClick={() => toggleVisible(currentValue.id)}>
                <img src={delet}></img>
              </Link>
            </div>
          )
        }
        return [...accumulator, specialty]
      }, [] as SpecialtiesRow[])
      setSpecialties(formated ?? [])
    }

    fetchSpecialties()
  }, [])

  return (
    <>
      <Container>
        <h1>Especialidades</h1>
        <Div>
          <Centralizar>
            <Search placeholder="Pesquise uma palavra-chave" />
            <Search1>
              <AiOutlineSearch />
            </Search1>
            <Button>
              <img src={plus} />
              <h3>Nova Especialidade</h3>
            </Button>
          </Centralizar>
          <TableComponent HeadColumns={tableColumns} BodyRow={specialties} />
          {invisible && <ModalDelete id={id} />}
        </Div>
      </Container>
    </>
  )
}
export default Specialties
