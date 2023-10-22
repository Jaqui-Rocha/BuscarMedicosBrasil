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
import { colors } from '@/components/theme'

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
      <TableComponent HeadColumns={tableColumns} BodyRow={specialties} />
      {invisible && <ModalDelete id={id} />}
    </>
  )
}
export default Specialties
